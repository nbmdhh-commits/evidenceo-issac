#!/bin/bash
set -e

echo "Starting headless Chrome with remote debugging on port 9222..."
# Clean up any existing processes if needed
# We won't kill all Google Chrome since the user might be browsing, but we will make sure we use a clean user-data-dir.

# Start Chrome in background
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new \
  --remote-debugging-port=9222 \
  --disable-gpu \
  --window-size=1280,1024 \
  --user-data-dir="/Users/sravya/.gemini/antigravity/scratch/chrome-profile" \
  --hide-scrollbars \
  > /tmp/chrome-headless.log 2>&1 &

CHROME_PID=$!
echo "Chrome started with PID: $CHROME_PID"

# Wait for debugger to be ready
echo "Waiting 3 seconds for Chrome to initialize..."
sleep 3

# Run screenshot capture script
echo "Running node capture.js..."
node /Users/sravya/.gemini/antigravity/scratch/issac-prototype/capture.js

# Clean up
echo "Stopping Chrome (PID: $CHROME_PID)..."
kill $CHROME_PID || true
echo "Done!"
