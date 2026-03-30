import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

// CANDLE — OUTPUT A2: "What's Inside" — Essential oil complexity story. Botanical, layered.

const clamp = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };

const CREAM = "#F5EDE0";
const CHARCOAL = "#1a1410";
const AMBER = "#D4A574";
const SAGE = "#8B9A7B";
const FLAME = "#E8A045";
const GOLD = "#C8963E";
const WARM_DARK = "#2C2218";
const MUTED = "#9A8B7A";

const F = {
  serif: "'Georgia', 'Times New Roman', serif",
  sans: "'Inter', -apple-system, sans-serif",
  mono: "'JetBrains Mono', 'Fira Code', monospace",
};

function ease(frame: number, start: number, dur: number, from: number, to: number, fn = Easing.out(Easing.cubic)) {
  return interpolate(frame, [start, start + dur], [from, to], { ...clamp, easing: fn });
}

function fadeUp(frame: number, start: number, dur = 14) {
  return {
    opacity: ease(frame, start, dur, 0, 1),
    transform: `translateY(${ease(frame, start, dur, 40, 0)}px)`,
  };
}

function sceneVis(frame: number, start: number, end: number, fi = 10, fo = 10) {
  if (frame < start - 3 || frame > end + fo + 3) return 0;
  return Math.min(
    interpolate(frame, [start, start + fi], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    interpolate(frame, [end, end + Math.max(fo, 1)], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
  );
}

export const Candle_A2: React.FC = () => {
  const frame = useCurrentFrame();

  // ═══ COMPOUNDS DATA ═══
  const compounds = [
    { name: "Linalool", start: 115, color: SAGE },
    { name: "Linalyl acetate", start: 135, color: AMBER },
    { name: "β-Caryophyllene", start: 155, color: FLAME },
    { name: "1,8-Cineole", start: 175, color: SAGE },
    { name: "Camphor", start: 195, color: AMBER },
    { name: "Terpinen-4-ol", start: 215, color: FLAME },
  ];

  // ═══ SCENE 1 (0–100): LAVENDER HOOK ═══
  const s1 = sceneVis(frame, 0, 100);

  // ═══ SCENE 2 (100–250): COMPOUND LIST ═══
  const s2 = sceneVis(frame, 100, 250);
  // Progress line grows as compounds appear
  const lastVisible = compounds.reduce((acc, c) => {
    return frame >= c.start ? acc + 1 : acc;
  }, 0);
  const lineHeight = (lastVisible / compounds.length) * 460;

  // ═══ SCENE 3 (250–360): CONVERGENCE — many → one ═══
  const s3 = sceneVis(frame, 250, 360);
  const convergeProgress = ease(frame, 255, 30, 0, 1, Easing.inOut(Easing.cubic));
  const circleExpand = ease(frame, 285, 35, 8, 200, Easing.out(Easing.cubic));
  const circleGlow = ease(frame, 285, 35, 0, 0.3, Easing.out(Easing.quad));

  // ═══ SCENE 4 (360–450): NO SYNTHETICS ═══
  const s4 = sceneVis(frame, 360, 450);

  // ═══ SCENE 5 (450–540): BRAND LOCKUP ═══
  const s5 = sceneVis(frame, 450, 540, 12, 1);
  const dividerW = ease(frame, 470, 25, 0, 160, Easing.out(Easing.cubic));

  // ═══ AMBIENT MOTES — subtle botanical ═══
  const motes = Array.from({ length: 12 }, (_, i) => {
    const baseX = ((i * 197.3) % 1080);
    const baseY = ((i * 311.7) % 1920);
    const driftX = Math.sin((frame + i * 80) * 0.008) * 20;
    const driftY = Math.cos((frame + i * 55) * 0.006) * 15 - frame * 0.1;
    const y = (baseY + driftY + 2000) % 2000 - 40;
    const size = 2 + (i % 3);
    const opacity = 0.03 + (i % 3) * 0.015;
    const color = i % 2 === 0 ? SAGE : AMBER;
    return { x: baseX + driftX, y, size, opacity, color };
  });

  return (
    <div style={{
      width: 1080, height: 1920,
      background: `linear-gradient(175deg, #131210 0%, ${CHARCOAL} 40%, ${WARM_DARK} 100%)`,
      overflow: "hidden",
      position: "relative",
      fontFamily: F.sans,
    }}>

      {/* Subtle SAGE-tinted ambient radial */}
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(ellipse at 50% 60%, rgba(139,154,123,0.04) 0%, transparent 60%)`,
        pointerEvents: "none",
      }} />

      {/* Film grain */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.04, pointerEvents: "none", zIndex: 100,
        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
      }} />

      {/* Vignette */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 90, pointerEvents: "none",
        background: "radial-gradient(ellipse at 50% 50%, transparent 45%, rgba(8,6,4,0.45) 100%)",
      }} />

      {/* Ambient motes */}
      {motes.map((m, i) => (
        <div key={i} style={{
          position: "absolute",
          left: m.x, top: m.y,
          width: m.size, height: m.size,
          borderRadius: "50%",
          background: m.color,
          opacity: m.opacity,
          filter: "blur(1px)",
          pointerEvents: "none",
          zIndex: 5,
        }} />
      ))}

      {/* ═══ SCENE 1: LAVENDER ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: s1,
        padding: "80px 80px",
      }}>
        {/* Big word */}
        <div style={{
          ...fadeUp(frame, 8, 20),
          fontFamily: F.serif,
          fontSize: 84,
          color: "#E0E0E0",
          letterSpacing: 3,
          marginBottom: 30,
        }}>
          Lavender.
        </div>

        {/* Subtext — delayed reveal */}
        <div style={{
          ...fadeUp(frame, 50, 18),
          fontFamily: F.serif,
          fontSize: 30,
          fontStyle: "italic",
          color: "#A0A0A0",
          textAlign: "center",
          letterSpacing: 0.8,
        }}>
          ...is never just lavender.
        </div>

        {/* Decorative sage dot */}
        <div style={{
          width: 6, height: 6,
          borderRadius: "50%",
          background: SAGE,
          opacity: ease(frame, 60, 20, 0, 0.5, Easing.out(Easing.quad)),
          marginTop: 40,
        }} />
      </div>

      {/* ═══ SCENE 2: COMPOUND LIST ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "row",
        opacity: s2,
        padding: "0 80px",
        alignItems: "center",
      }}>
        {/* Progress line on left */}
        <div style={{
          position: "relative",
          width: 2,
          height: 460,
          background: "rgba(154,139,122,0.15)",
          marginRight: 50,
          flexShrink: 0,
        }}>
          <div style={{
            position: "absolute",
            top: 0, left: 0,
            width: 2,
            height: lineHeight,
            background: `linear-gradient(to bottom, ${SAGE}, ${AMBER})`,
          }} />
        </div>

        {/* Compounds */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: 40,
        }}>
          {compounds.map((c, i) => {
            const itemOpacity = ease(frame, c.start, 14, 0, 1);
            const itemY = ease(frame, c.start, 14, 30, 0);
            return (
              <div key={i} style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                opacity: itemOpacity,
                transform: `translateY(${itemY}px)`,
              }}>
                {/* Colored dot */}
                <div style={{
                  width: 8, height: 8,
                  borderRadius: "50%",
                  background: c.color,
                  flexShrink: 0,
                  opacity: 0.8,
                }} />

                {/* Compound name in mono */}
                <div style={{
                  fontFamily: F.mono,
                  fontSize: 28,
                  color: "#E0E0E0",
                  letterSpacing: 1.5,
                  fontWeight: 300,
                }}>
                  {c.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ═══ SCENE 3: CONVERGENCE ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: s3,
        padding: "80px 60px",
      }}>
        {/* Converging dots → single circle */}
        <div style={{ position: "relative", width: 400, height: 400, marginBottom: 60 }}>
          {/* Individual compound dots spiraling inward */}
          {compounds.map((c, i) => {
            const angle = (i / compounds.length) * Math.PI * 2 - Math.PI / 2;
            const radius = interpolate(convergeProgress, [0, 1], [150, 0], clamp);
            const dotX = 200 + Math.cos(angle) * radius;
            const dotY = 200 + Math.sin(angle) * radius;
            const dotOpacity = interpolate(convergeProgress, [0, 0.8, 1], [1, 0.6, 0], clamp);
            return (
              <div key={i} style={{
                position: "absolute",
                left: dotX - 5, top: dotY - 5,
                width: 10, height: 10,
                borderRadius: "50%",
                background: c.color,
                opacity: dotOpacity,
              }} />
            );
          })}

          {/* Expanding warm result circle */}
          <div style={{
            position: "absolute",
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: circleExpand, height: circleExpand,
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(212,165,116,0.6) 0%, rgba(200,150,62,0.2) 60%, transparent 100%)`,
            opacity: convergeProgress > 0.5 ? 1 : 0,
            boxShadow: `0 0 60px rgba(212,165,116,${circleGlow})`,
          }} />
        </div>

        {/* Text */}
        <div style={{
          ...fadeUp(frame, 300, 20),
          fontFamily: F.serif,
          fontSize: 54,
          color: "#E0E0E0",
          textAlign: "center",
          lineHeight: 1.4,
          letterSpacing: 1,
        }}>
          47 compounds.<br />One drop.
        </div>
      </div>

      {/* ═══ SCENE 4: NO SYNTHETICS ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: s4,
        padding: "80px 80px",
        gap: 50,
      }}>
        <div style={{
          ...fadeUp(frame, 375, 18),
          fontFamily: F.serif,
          fontSize: 52,
          fontStyle: "italic",
          color: "#E0E0E0",
          textAlign: "center",
          letterSpacing: 1.5,
        }}>
          No synthetics.
        </div>

        {/* Sage dot separator */}
        <div style={{
          width: 6, height: 6,
          borderRadius: "50%",
          background: SAGE,
          opacity: ease(frame, 395, 15, 0, 0.5, Easing.out(Easing.quad)),
        }} />

        <div style={{
          ...fadeUp(frame, 410, 18),
          fontFamily: F.serif,
          fontSize: 52,
          fontStyle: "italic",
          color: "#E0E0E0",
          textAlign: "center",
          letterSpacing: 1.5,
        }}>
          No shortcuts.
        </div>
      </div>

      {/* ═══ SCENE 5: BRAND LOCKUP ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: s5,
        padding: "80px 60px",
      }}>
        <div style={{
          ...fadeUp(frame, 465, 18),
          fontFamily: F.sans,
          fontSize: 64,
          fontWeight: 300,
          color: "#E0E0E0",
          letterSpacing: 18,
          textTransform: "uppercase",
          marginBottom: 30,
        }}>
          VESPER
        </div>

        <div style={{
          width: dividerW,
          height: 1,
          background: GOLD,
          marginBottom: 30,
          opacity: ease(frame, 470, 20, 0, 0.6, Easing.out(Easing.cubic)),
        }} />

        <div style={{
          ...fadeUp(frame, 488, 18),
          fontFamily: F.serif,
          fontSize: 24,
          fontStyle: "italic",
          color: "#A0A0A0",
          textAlign: "center",
          lineHeight: 1.6,
          letterSpacing: 0.8,
        }}>
          Small batch. Essential oils. Nothing else.
        </div>
      </div>
    </div>
  );
};
