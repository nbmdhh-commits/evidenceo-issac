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

  await send('Page.enable');
  await send('Runtime.enable');

  console.log('Navigating to http://localhost:8000 ...');
  await send('Page.navigate', { url: 'http://localhost:8000' });
  await wait(2000);

  const artifactDir = '/Users/sravya/.gemini/antigravity/brain/031900d8-1929-4b0c-9b86-d47de23b4b49';

  const capture = async (filename) => {
    console.log(`Capturing ${filename}...`);
    const { data } = await send('Page.captureScreenshot', { format: 'png' });
    const buffer = Buffer.from(data, 'base64');
    const destPath = path.join(artifactDir, filename);
    fs.writeFileSync(destPath, buffer);
    console.log(`Saved screenshot to ${destPath}`);
  };

  // 1. Landing Page (Light Theme)
  console.log('Setting theme to light for splash screen...');
  await send('Runtime.evaluate', { expression: "app.setTheme('light');" });
  await wait(800);
  await capture('landing_page_light.png');

  // 2. Landing Page (Dark Theme)
  console.log('Setting theme to dark for splash screen...');
  await send('Runtime.evaluate', { expression: "app.setTheme('dark');" });
  await wait(800);
  await capture('landing_page_dark.png');

  // Click Start Exploring
  console.log('Clicking Start Exploring...');
  await send('Runtime.evaluate', { expression: "document.getElementById('start-exploring-btn').click()" });
  await wait(1500);

  // 3. Dashboard
  console.log('Capturing dashboard...');
  await capture('dashboard.png');

  // 4. Clinical Case Study Simulator
  console.log('Switching to Clinical Case Study Simulator...');
  await send('Runtime.evaluate', { expression: "app.loadTopic('Myocardial Infarction', true); app.switchPanel('case-learning');" });
  await wait(1200);
  await capture('clinical_case_study_simulator.png');

  // 5. AI Assistant
  console.log('Switching to AI Assistant...');
  await send('Runtime.evaluate', { expression: "app.switchPanel('ai-workspace');" });
  await wait(1200);
  await capture('ai_assistant.png');

  console.log('All required screenshots captured successfully!');
  ws.close();
  process.exit(0);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
