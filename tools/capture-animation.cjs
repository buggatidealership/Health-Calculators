const { chromium } = require('playwright');
const { execSync } = require('child_process');
const path = require('path');

(async () => {
  const framesDir = '/tmp/claude-0/cortisol-frames';
  execSync(`rm -rf ${framesDir} && mkdir -p ${framesDir}`);

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1080, height: 1080 }
  });

  const page = await context.newPage();
  page.on('console', msg => {
    if (msg.type() === 'error') console.log('PAGE ERROR:', msg.text());
  });

  await page.goto('http://0.0.0.0:8766/mockup-cortisol-animation.html', {
    waitUntil: 'load'
  });

  console.log('Capturing frames at 10fps...');

  const fps = 10;
  const duration = 27;
  const totalFrames = fps * duration;
  const interval = 1000 / fps; // 100ms per frame

  for (let i = 0; i < totalFrames; i++) {
    const padded = String(i).padStart(4, '0');
    await page.screenshot({
      path: path.join(framesDir, `frame-${padded}.png`),
      type: 'png'
    });
    if (i < totalFrames - 1) {
      await page.waitForTimeout(interval);
    }
    if (i % 50 === 0) {
      const scene = await page.evaluate(() => {
        for (let j = 1; j <= 5; j++) {
          const s = document.getElementById('scene' + j);
          if (parseFloat(getComputedStyle(s).opacity) > 0.5) return j;
        }
        return 0;
      });
      console.log(`Frame ${i}/${totalFrames} — scene ${scene}`);
    }
  }

  console.log(`Captured ${totalFrames} frames`);
  await browser.close();

  // Stitch frames into MP4
  const outputPath = '/root/healthcalculators-full/cortisol-animation.mp4';
  console.log('Encoding MP4...');

  execSync(`ffmpeg -y -framerate ${fps} -i "${framesDir}/frame-%04d.png" \
    -vf "fps=30,format=yuv420p" \
    -c:v libx264 -preset slow -crf 18 \
    -movflags +faststart \
    -an \
    "${outputPath}"`, { stdio: 'inherit' });

  console.log('Done:', outputPath);

  // Clean up frames
  execSync(`rm -rf ${framesDir}`);
})();
