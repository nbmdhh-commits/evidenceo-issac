const http = require('http');
const fs = require('fs');
const path = require('path');

function getJSON(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  console.log('Connecting to Chrome remote debugging on port 9222...');
  let targets;
  const maxRetries = 30;
  for (let i = 1; i <= maxRetries; i++) {
    try {
      targets = await getJSON('http://localhost:9222/json/list');
      if (targets && targets.length > 0) {
        break;
      }
    } catch (e) {
      if (i === maxRetries) {
        console.error('Failed to get Chrome targets list after 30 retries. Make sure Chrome is running with --remote-debugging-port=9222');
        process.exit(1);
      }
    }
    console.log(`Connection attempt ${i} failed, retrying in 1s...`);
    await wait(1000);
  }

  // Find the page target
  const pageTarget = targets.find(t => t.type === 'page');
  if (!pageTarget) {
    console.error('No page target found in Chrome.');
    process.exit(1);
  }

  const wsUrl = pageTarget.webSocketDebuggerUrl;
  console.log('WebSocket Page Debugger URL:', wsUrl);

  const ws = new WebSocket(wsUrl);
  let msgId = 1;
  const pendingRequests = new Map();

  ws.onmessage = (event) => {
    const res = JSON.parse(event.data);
    if (res.id && pendingRequests.has(res.id)) {
      const { resolve, reject } = pendingRequests.get(res.id);
      pendingRequests.delete(res.id);
      if (res.error) {
        reject(res.error);
      } else {
        resolve(res.result);
      }
    }
  };

  const send = (method, params = {}) => {
    return new Promise((resolve, reject) => {
      const id = msgId++;
      pendingRequests.set(id, { resolve, reject });
      ws.send(JSON.stringify({ id, method, params }));
    });
  };

  await new Promise((resolve) => ws.onopen = resolve);
  console.log('Connected to Chrome DevTools Protocol!');

  // Enable Page and Runtime
  await send('Page.enable');
  await send('Runtime.enable');

  // Navigate to local server
  console.log('Navigating to http://localhost:8000 ...');
  await send('Page.navigate', { url: 'http://localhost:8000' });
  await wait(2000); // Wait for page to load

  const artifactDir = '/Users/sravya/.gemini/antigravity/brain/031900d8-1929-4b0c-9b86-d47de23b4b49';

  // Helper to capture and save screenshot
  const capture = async (filename) => {
    console.log(`Capturing ${filename}...`);
    const { data } = await send('Page.captureScreenshot', { format: 'png' });
    const buffer = Buffer.from(data, 'base64');
    const destPath = path.join(artifactDir, filename);
    fs.writeFileSync(destPath, buffer);
    console.log(`Saved screenshot to ${destPath}`);
  };

  // Capture Splash Screen
  await capture('01_splash_screen.png');

  // Click Start Exploring
  console.log('Clicking Start Exploring...');
  await send('Runtime.evaluate', { expression: "document.getElementById('start-exploring-btn').click()" });
  await wait(1500); // Wait for transition animation

  // Capture Dashboard
  await capture('02_home_dashboard.png');

  // Switch to Topic Learning (Myocardial Infarction should load by default)
  console.log('Loading topic structured learning workspace...');
  await send('Runtime.evaluate', { expression: "app.loadTopic('Myocardial Infarction', true)" });
  await wait(1000);
  await capture('03_topic_learning.png');

  // Click on active flashcard in Topic Learning to show flip
  console.log('Flipping active flashcard...');
  await send('Runtime.evaluate', { expression: "app.flipFlashcard()" });
  await wait(800);
  await capture('04_topic_learning_flipped_card.png');

  // Switch to Medical Flowcharts
  console.log('Switching to Medical Flowcharts...');
  await send('Runtime.evaluate', { expression: "app.switchPanel('flowchart-studio')" });
  await wait(1000);
  await capture('05_flowchart_studio.png');

  // Switch to Diagram Studio (Anatomy Diagrams)
  console.log('Switching to Diagram Studio...');
  await send('Runtime.evaluate', { expression: "app.switchPanel('diagram-studio')" });
  await wait(1000);
  await capture('06_diagram_studio.png');

  // Load Nephron diagram
  console.log('Loading Nephron diagram...');
  await send('Runtime.evaluate', { expression: "app.loadTopic('Nephron', true); app.switchPanel('diagram-studio')" });
  await wait(1000);
  await capture('07_diagram_studio_nephron.png');

  // Switch to Scholar Profile
  console.log('Switching to Scholar Profile...');
  await send('Runtime.evaluate', { expression: "app.switchPanel('profile')" });
  await wait(1000);
  await capture('08_scholar_profile.png');

  // Switch to Progress Analytics
  console.log('Switching to Progress Analytics...');
  await send('Runtime.evaluate', { expression: "app.switchPanel('progress-analytics')" });
  await wait(1000);
  await capture('09_progress_analytics.png');

  // Switch to Clinical Case Study Selector
  console.log('Switching to Clinical Case Study...');
  await send('Runtime.evaluate', { expression: "app.loadTopic('Myocardial Infarction', true); app.switchPanel('case-learning');" });
  await wait(1200);
  await capture('10_case_selector.png');

  // Start STEMI scenario (index 0)
  console.log('Starting STEMI scenario...');
  await send('Runtime.evaluate', { expression: "app.startScenario(app.topicsDb['Myocardial Infarction'].caseSimulation, 0);" });
  await wait(1200);
  await capture('11_case_simulator_active.png');

  console.log('All screenshots captured successfully!');
  ws.close();
  process.exit(0);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
