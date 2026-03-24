const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    args: ['--disable-gpu-compositing']
  });
  const context = await browser.newContext({
    viewport: { width: 1080, height: 1080 },
    recordVideo: {
      dir: '/tmp/claude-0/cortisol-video-4k/',
      size: { width: 1080, height: 1080 }
    }
  });

  const page = await context.newPage();

  await page.goto('http://0.0.0.0:8766/mockup-cortisol-animation.html', {
    waitUntil: 'load'
  });

  console.log('Recording animation...');

  for (let i = 0; i < 27; i++) {
    await page.waitForTimeout(1000);
    const scene = await page.evaluate(() => {
      for (let j = 1; j <= 5; j++) {
        const s = document.getElementById('scene' + j);
        if (parseFloat(getComputedStyle(s).opacity) > 0.5) return j;
      }
      return 0;
    });
    if (i % 5 === 0) console.log(`t=${i+1}s: scene ${scene}`);
  }

  const video = page.video();
  await context.close();

  const videoPath = await video.path();
  console.log('Raw video saved to:', videoPath);
  await browser.close();

  const { execSync } = require('child_process');
  const outputPath = '/root/healthcalculators-full/cortisol-animation.mp4';

  // Upscale 1080→2160 with lanczos (sharp text), H.264 High, CRF 14
  execSync(`ffmpeg -y -i "${videoPath}" \
    -vf "scale=2160:2160:flags=lanczos,fps=30,format=yuv420p" \
    -c:v libx264 -preset slow -crf 14 \
    -movflags +faststart \
    -an \
    "${outputPath}"`, { stdio: 'inherit' });

  console.log('4K MP4 saved to:', outputPath);
})();
