import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";

// ═══ REMOTION COMPOSITION TEMPLATE ═══
// Use this for technical structure ONLY.
// Do NOT copy the placeholder content — build from your FEEL/CONVERGENCE declaration.
//
// Specs: 1080x1920 (9:16 vertical), 30fps
// Duration: 540 frames = 18s (recommended), 570 = 19s, 360 = 12s
// Safe zones: top 288px (IG username), bottom 480px (IG actions), right 120px (buttons)

// --- COLOR PALETTE (replace with your own) ---
const C = {
  bg: "#000000",       // background
  text: "#E0E0E0",     // primary text
  sub: "#8a8a8a",      // secondary text
  accent: "#000000",   // primary accent
  // Add more as needed
};

// --- FONTS ---
const F = {
  serif: "'DM Serif Display', Georgia, serif",
  sans: "'Inter', -apple-system, sans-serif",
  mono: "'JetBrains Mono', monospace",
};

// --- UTILITY FUNCTIONS (copy these as-is) ---

function ease(frame: number, start: number, dur: number, from: number, to: number, fn = Easing.out(Easing.cubic)) {
  return interpolate(frame, [start, start + dur], [from, to], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: fn,
  });
}

function fadeUp(frame: number, start: number, dur = 14) {
  return {
    opacity: ease(frame, start, dur, 0, 1),
    transform: `translateY(${ease(frame, start, dur, 40, 0)}px)`,
  };
}

// Scene visibility: fade in at `start`, fade out at `end`.
// IMPORTANT: `fo` (fadeOut) must NEVER be 0 — use 1 minimum to avoid interpolate crash.
function sceneVis(frame: number, start: number, end: number, fi = 10, fo = 10) {
  if (frame < start - 3 || frame > end + fo + 3) return 0;
  return Math.min(
    interpolate(frame, [start, start + fi], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    interpolate(frame, [end, end + Math.max(fo, 1)], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
  );
}

// --- COMPOSITION (replace with your content) ---

export const TEMPLATE: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <div style={{
      width: 1080, height: 1920, background: C.bg,
      overflow: "hidden", position: "relative", fontFamily: F.sans,
    }}>
      {/* Optional: film grain overlay */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.06, pointerEvents: "none", zIndex: 100,
        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
      }} />

      {/* Scene 1: (0–134) */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 0, 134),
        padding: "80px 60px",
      }}>
        {/* Your content here */}
      </div>

      {/* Scene 2: (135–269) */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 135, 269),
        padding: "80px 60px",
      }}>
        {/* Your content here */}
      </div>

      {/* Scene 3: (270–404) */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 270, 404),
        padding: "80px 60px",
      }}>
        {/* Your content here */}
      </div>

      {/* Scene 4 / CTA: (405–540) */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 405, 540, 12, 1),
        padding: "80px 60px",
      }}>
        {/* Your content here */}
      </div>

      {/* To use Imagen 4 product images: */}
      {/* <Img src={staticFile("products/your-image.png")} style={{ width: 700, objectFit: "contain" }} /> */}
      {/* Render with: npx remotion render index.ts your-id output.mp4 --codec h264 --public-dir ./public */}
    </div>
  );
};

// --- ROOT.TSX REGISTRATION ---
// In Root.tsx, add:
//   import { YourComp } from "./YourComp";
//   <Composition id="your-id" component={YourComp} durationInFrames={540} fps={30} width={1080} height={1920} />
