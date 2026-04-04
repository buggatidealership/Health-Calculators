import React from "react";
import {
  useCurrentFrame, interpolate, Easing, Img, staticFile,
  Audio, Sequence,
} from "remotion";

// LUXURY BRAND COMMERCIAL — Spec reel for portfolio
// Multi-tool: Recraft V4 (product hero) + Ideogram 3.0 (title/ingredient cards) +
// ElevenLabs (British narrator George + SFX) + Remotion (animation)
// 450 frames (15s at 30fps), 1080x1920
//
// Scene 1 (0-120):   Product hero — amber bottle, botanicals, golden drop
// Scene 2 (120-280): Ingredients — rosemary, juniper, mandarin
// Scene 3 (280-380): Tagline — "Formulated by Nature / Perfected by Science"
// Scene 4 (380-450): Logo/brand card

// --- PALETTE: Luxury dark (content-specific to botanical serum) ---
const C = {
  bg: "#0C0C0C",
  warm: "#C8A96E",       // amber gold — the serum color
  cream: "#F0EBE0",      // parchment — botanical paper
  herb: "#4A6741",       // rosemary green
  bark: "#8B6F47",       // bark/wood
  text: "#E8E4DC",       // warm white
  sub: "#9A958C",        // warm gray
};

const F = {
  serif: "'Georgia', 'Times New Roman', serif",
  sans: "'Inter', -apple-system, sans-serif",
};

// --- UTILITIES ---

function ease(f: number, s: number, d: number, from: number, to: number, fn = Easing.out(Easing.cubic)) {
  return interpolate(f, [s, s + d], [from, to], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: fn,
  });
}

function fadeUp(f: number, s: number, d = 16) {
  return {
    opacity: ease(f, s, d, 0, 1),
    transform: `translateY(${ease(f, s, d, 24, 0)}px)`,
  };
}

function sceneVis(f: number, start: number, end: number, fi = 14, fo = 14) {
  if (f < start - 3 || f > end + fo + 3) return 0;
  return Math.min(
    interpolate(f, [start, start + fi], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    interpolate(f, [end, end + Math.max(fo, 1)], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
  );
}

const W = 1080;
const H = 1920;

export const LuxuryBrandCommercial: React.FC = () => {
  const frame = useCurrentFrame();

  // --- SCENE VISIBILITY ---
  const s1 = sceneVis(frame, 0, 116, 5, 16);
  const s2 = sceneVis(frame, 118, 275, 14, 16);
  const s3 = sceneVis(frame, 278, 375, 16, 14);
  const s4 = sceneVis(frame, 378, 450, 14, 1);

  // --- SCENE 1: Product hero ---
  const heroScale = ease(frame, 0, 40, 1.08, 1);
  const heroY = ease(frame, 0, 40, 20, 0);

  // Warm ambient glow pulse
  const warmGlow = 0.15 + Math.sin(frame * 0.04) * 0.08;

  // --- SCENE 2: Ingredients staggered reveal ---
  const ingredients = [
    { name: "ROSEMARY", benefit: "Antioxidant Protection", delay: 0 },
    { name: "JUNIPER", benefit: "Deep Purification", delay: 30 },
    { name: "MANDARIN", benefit: "Cell Renewal", delay: 60 },
  ];

  // --- SCENE 3: Tagline ---
  const taglineScale = ease(frame, 280, 24, 0.92, 1);

  // Thin rule line grows from center
  const ruleLine = ease(frame, 300, 20, 0, 300);

  // --- CONTINUOUS: Subtle floating particles (warm gold dust) ---
  const dustParticles = React.useMemo(() => {
    return Array.from({ length: 14 }, (_, i) => {
      const r = ((73 * (i + 1) * 4219) % 1000) / 1000;
      const r2 = ((73 * (i + 1) * 3137) % 1000) / 1000;
      return { x: r * W, y: r2 * H, size: 1 + r * 2, phase: r2 * Math.PI * 2 };
    });
  }, []);

  return (
    <div style={{
      width: W, height: H,
      background: C.bg, overflow: "hidden",
      position: "relative", fontFamily: F.sans,
    }}>

      {/* ══════ AUDIO ══════ */}

      {/* Ambient drone — continuous underneath */}
      <Sequence from={0} durationInFrames={450}>
        <Audio
          src={staticFile("audio/commercial/sfx-ambient.mp3")}
          volume={(f) => interpolate(f, [0, 20, 400, 450], [0, 0.12, 0.12, 0], {
            extrapolateLeft: "clamp", extrapolateRight: "clamp",
          })}
        />
      </Sequence>

      {/* Hook voice: "Every ingredient has a story." (2.04s) */}
      <Sequence from={30} durationInFrames={65}>
        <Audio src={staticFile("audio/commercial/comm-hook.mp3")} volume={0.85} />
      </Sequence>

      {/* Drop SFX — product reveal moment */}
      <Sequence from={55} durationInFrames={30}>
        <Audio src={staticFile("audio/commercial/sfx-drop.mp3")} volume={0.25} />
      </Sequence>

      {/* Reveal swoosh — scene 2 transition */}
      <Sequence from={118} durationInFrames={30}>
        <Audio src={staticFile("audio/commercial/sfx-reveal.mp3")} volume={0.2} />
      </Sequence>

      {/* Origin voice: "Sourced from the wild coasts..." (7.81s) */}
      <Sequence from={135} durationInFrames={238}>
        <Audio src={staticFile("audio/commercial/comm-origin.mp3")} volume={0.85} />
      </Sequence>

      {/* CTA voice: "Formulated by nature. Perfected by science." (2.93s) */}
      <Sequence from={295} durationInFrames={92}>
        <Audio src={staticFile("audio/commercial/comm-cta.mp3")} volume={0.85} />
      </Sequence>

      {/* ══════ GOLD DUST PARTICLES ══════ */}
      {dustParticles.map((p, i) => {
        const yOff = Math.sin(frame * 0.012 + p.phase) * 20;
        const xOff = Math.cos(frame * 0.008 + p.phase * 1.5) * 10;
        const pOp = 0.04 + Math.sin(frame * 0.02 + p.phase) * 0.03;
        return (
          <div key={i} style={{
            position: "absolute",
            left: p.x + xOff, top: p.y + yOff,
            width: p.size, height: p.size,
            borderRadius: "50%",
            background: C.warm, opacity: pOp, pointerEvents: "none",
          }} />
        );
      })}

      {/* ══════ SCENE 1: PRODUCT HERO ══════ */}
      <div style={{ position: "absolute", inset: 0, opacity: s1 }}>
        {/* Product image (Recraft V4 — editorial quality) */}
        <div style={{
          position: "absolute",
          top: 280, left: 40, right: 40,
          height: 1000,
          overflow: "hidden",
          borderRadius: 16,
          transform: `scale(${heroScale}) translateY(${heroY}px)`,
        }}>
          <Img
            src={staticFile("img/product-hero.png")}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          {/* Warm glow overlay */}
          <div style={{
            position: "absolute", inset: 0,
            background: `radial-gradient(ellipse at 50% 60%, ${C.warm}15 0%, transparent 60%)`,
            opacity: warmGlow,
          }} />
        </div>

        {/* Minimal text — let the image speak */}
        <div style={{
          ...fadeUp(frame, 20),
          position: "absolute",
          bottom: 380,
          left: 60, right: 60,
          textAlign: "center",
        }}>
          <div style={{
            fontSize: 28, color: C.sub,
            fontFamily: F.serif, fontStyle: "italic",
            letterSpacing: 2,
          }}>
            Every ingredient has a story
          </div>
        </div>
      </div>

      {/* ══════ SCENE 2: INGREDIENTS ══════ */}
      <div style={{ position: "absolute", inset: 0, opacity: s2 }}>
        {/* Dark background — clean, no competing image text */}
        <div style={{
          position: "absolute", inset: 0,
          background: C.bg,
        }} />

        {/* Ingredient list — staggered reveal */}
        {ingredients.map((ing, i) => {
          const ingStart = 140 + ing.delay;
          const y = 460 + i * 280;
          return (
            <React.Fragment key={i}>
              {/* Ingredient name */}
              <div style={{
                ...fadeUp(frame, ingStart),
                position: "absolute",
                top: y, left: 100, right: 100,
                textAlign: "center",
              }}>
                <div style={{
                  fontSize: 52, color: C.cream,
                  fontFamily: F.serif, fontWeight: 400,
                  letterSpacing: 8,
                }}>
                  {ing.name}
                </div>
                <div style={{
                  ...fadeUp(frame, ingStart + 8),
                  fontSize: 22, color: C.warm,
                  marginTop: 10, letterSpacing: 3,
                  textTransform: "uppercase",
                }}>
                  {ing.benefit}
                </div>
              </div>

              {/* Thin separator line */}
              {i < 2 && (
                <div style={{
                  position: "absolute",
                  top: y + 110, left: W / 2 - 40, width: 80, height: 1,
                  background: `linear-gradient(90deg, transparent, ${C.warm}40, transparent)`,
                  opacity: ease(frame, ingStart + 14, 10, 0, 1),
                }} />
              )}
            </React.Fragment>
          );
        })}

        {/* Origin subtitle */}
        <div style={{
          ...fadeUp(frame, 220),
          position: "absolute",
          bottom: 420, left: 80, right: 80,
          textAlign: "center",
        }}>
          <div style={{
            fontSize: 20, color: C.sub,
            lineHeight: 1.6, fontStyle: "italic",
            fontFamily: F.serif,
          }}>
            Wild-sourced from the coasts of Tasmania
          </div>
        </div>
      </div>

      {/* ══════ SCENE 3: TAGLINE ══════ */}
      <div style={{
        position: "absolute", inset: 0, opacity: s3,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
      }}>
        <div style={{
          transform: `scale(${taglineScale})`,
          textAlign: "center",
          padding: "0 80px",
        }}>
          {/* Top line */}
          <div style={{
            ...fadeUp(frame, 284),
            fontSize: 38, color: C.cream,
            fontFamily: F.serif, letterSpacing: 6,
            textTransform: "uppercase",
          }}>
            Formulated by Nature
          </div>

          {/* Rule line — grows from center */}
          <div style={{
            width: ruleLine, height: 1,
            background: C.warm,
            margin: "32px auto",
            opacity: ease(frame, 300, 12, 0, 0.6),
          }} />

          {/* Bottom line */}
          <div style={{
            ...fadeUp(frame, 310),
            fontSize: 42, color: C.cream,
            fontFamily: F.serif, fontStyle: "italic",
            letterSpacing: 3,
          }}>
            Perfected by Science
          </div>
        </div>
      </div>

      {/* ══════ SCENE 4: BRAND CARD ══════ */}
      <div style={{
        position: "absolute", inset: 0,
        background: C.bg, opacity: s4,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", gap: 24,
      }}>
        {/* Small product thumbnail */}
        <div style={{
          ...fadeUp(frame, 382),
          width: 160, height: 160,
          borderRadius: 12, overflow: "hidden",
          border: `1px solid ${C.warm}30`,
        }}>
          <Img
            src={staticFile("img/product-hero.png")}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Brand name placeholder */}
        <div style={{
          ...fadeUp(frame, 396),
          fontSize: 36, color: C.cream,
          fontFamily: F.serif, letterSpacing: 10,
          textTransform: "uppercase",
        }}>
          BOTANICA
        </div>
        <div style={{
          ...fadeUp(frame, 410),
          fontSize: 18, color: C.sub,
          letterSpacing: 4, textTransform: "uppercase",
        }}>
          Tasmania · Since 2024
        </div>
      </div>

      {/* ══════ VIGNETTE (continuous — luxury cinema look) ══════ */}
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(ellipse at 50% 50%, transparent 40%, ${C.bg}60 100%)`,
        pointerEvents: "none",
      }} />
    </div>
  );
};
