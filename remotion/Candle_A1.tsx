import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

// CANDLE — OUTPUT A1: "The Pour" — Sensory/process craft story. Warm, slow, tactile.

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

export const Candle_A1: React.FC = () => {
  const frame = useCurrentFrame();

  // ═══ AMBIENT PARTICLES — warm light motes ═══
  const particles = Array.from({ length: 18 }, (_, i) => {
    const baseX = ((i * 173.7) % 1080);
    const baseY = ((i * 251.3) % 1920);
    const driftX = Math.sin((frame + i * 60) * 0.012) * 30;
    const driftY = Math.cos((frame + i * 45) * 0.009) * 25 - frame * 0.15;
    const y = (baseY + driftY + 2000) % 2000 - 40;
    const size = 2 + (i % 3) * 1.5;
    const opacity = 0.04 + (i % 4) * 0.02;
    const color = i % 3 === 0 ? GOLD : i % 3 === 1 ? AMBER : FLAME;
    return { x: baseX + driftX, y, size, opacity, color };
  });

  // ═══ SCENE 1 (0–100): THE VESSEL — wax filling ═══
  const s1 = sceneVis(frame, 0, 100);
  const fillPercent = ease(frame, 15, 75, 0, 85, Easing.inOut(Easing.quad));
  const glowRadius = ease(frame, 10, 80, 20, 55, Easing.out(Easing.quad));
  const glowOpacity = ease(frame, 10, 60, 0, 0.15, Easing.out(Easing.quad));

  // ═══ SCENE 2 (100–210): PROCESS BEATS ═══
  const s2 = sceneVis(frame, 100, 210);
  const processLines = [
    { text: "Hand-poured.", start: 115, color: AMBER },
    { text: "120°F.", start: 145, color: CREAM },
    { text: "26 minutes of patience.", start: 175, color: AMBER },
  ];
  const accentLineH = ease(frame, 115, 80, 0, 240, Easing.out(Easing.cubic));

  // ═══ SCENE 3 (210–360): FULL WAX — breathing ═══
  const s3 = sceneVis(frame, 210, 360);
  const breathe = 1 + Math.sin((frame - 210) * 0.04) * 0.02;
  const goldLineW = ease(frame, 280, 30, 0, 200, Easing.out(Easing.cubic));

  // ═══ SCENE 4 (360–450): THE FLAME ═══
  const s4 = sceneVis(frame, 360, 450);
  const flameSway = Math.sin(frame * 0.15) * 4;
  const flameScaleX = 1 + Math.sin(frame * 0.2) * 0.06;
  const flameScaleY = 1 + Math.sin(frame * 0.12) * 0.03;
  const warmGlowR = ease(frame, 370, 50, 0, 600, Easing.out(Easing.quad));
  const warmGlowOp = ease(frame, 370, 40, 0, 0.2, Easing.out(Easing.quad));

  // ═══ SCENE 5 (450–540): BRAND LOCKUP ═══
  const s5 = sceneVis(frame, 450, 540, 12, 1);
  const dividerW = ease(frame, 470, 25, 0, 160, Easing.out(Easing.cubic));

  // ═══ VIGNETTE ═══
  const vignetteOp = interpolate(frame, [0, 60], [0.3, 0.5], clamp);

  return (
    <div style={{
      width: 1080, height: 1920,
      background: `linear-gradient(170deg, ${CHARCOAL} 0%, ${WARM_DARK} 55%, #1F1A14 100%)`,
      overflow: "hidden",
      position: "relative",
      fontFamily: F.sans,
    }}>

      {/* Vignette */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 90, pointerEvents: "none",
        background: `radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(10,8,5,${vignetteOp}) 100%)`,
      }} />

      {/* Film grain */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.05, pointerEvents: "none", zIndex: 100,
        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
      }} />

      {/* Ambient particles */}
      {particles.map((p, i) => (
        <div key={i} style={{
          position: "absolute",
          left: p.x, top: p.y,
          width: p.size, height: p.size,
          borderRadius: "50%",
          background: p.color,
          opacity: p.opacity,
          filter: "blur(1px)",
          pointerEvents: "none",
          zIndex: 5,
        }} />
      ))}

      {/* ═══ SCENE 1: THE VESSEL ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: s1,
        padding: "80px 60px",
      }}>
        {/* Hook text */}
        <div style={{
          ...fadeUp(frame, 8, 18),
          fontFamily: F.serif,
          fontSize: 38,
          fontStyle: "italic",
          color: "#E0E0E0",
          textAlign: "center",
          lineHeight: 1.5,
          marginBottom: 60,
          letterSpacing: 0.5,
        }}>
          Every candle starts<br />as nothing.
        </div>

        {/* Vessel circle with wax fill */}
        <div style={{
          position: "relative",
          width: 320, height: 320,
        }}>
          {/* Ambient glow behind vessel */}
          <div style={{
            position: "absolute",
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: `${glowRadius * 2}%`,
            height: `${glowRadius * 2}%`,
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(212,165,116,${glowOpacity}) 0%, transparent 70%)`,
            pointerEvents: "none",
          }} />

          {/* Vessel outline */}
          <div style={{
            width: 320, height: 320,
            borderRadius: "50%",
            border: `2px solid ${MUTED}`,
            position: "relative",
            overflow: "hidden",
            opacity: ease(frame, 5, 20, 0, 1, Easing.out(Easing.quad)),
          }}>
            {/* Wax fill — rises from bottom */}
            <div style={{
              position: "absolute",
              bottom: 0, left: 0, right: 0,
              height: `${fillPercent}%`,
              background: `linear-gradient(to top, ${AMBER} 0%, ${GOLD} 50%, ${CREAM} 100%)`,
              opacity: 0.85,
            }} />

            {/* Surface shimmer line */}
            <div style={{
              position: "absolute",
              bottom: `${fillPercent}%`, left: 0, right: 0,
              height: 4,
              background: `linear-gradient(90deg, transparent 0%, rgba(245,237,224,0.4) 50%, transparent 100%)`,
              transform: "translateY(2px)",
              opacity: fillPercent > 10 ? 0.6 : 0,
            }} />
          </div>
        </div>
      </div>

      {/* ═══ SCENE 2: PROCESS BEATS ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        justifyContent: "center",
        opacity: s2,
        padding: "0 100px",
      }}>
        {processLines.map((line, i) => (
          <div key={i} style={{
            ...fadeUp(frame, line.start, 16),
            fontFamily: F.serif,
            fontSize: i === 2 ? 42 : 52,
            fontWeight: 400,
            color: line.color,
            marginBottom: i < 2 ? 50 : 0,
            lineHeight: 1.3,
            letterSpacing: 1,
          }}>
            {line.text}
          </div>
        ))}

        {/* Vertical accent line — grows with stagger */}
        <div style={{
          position: "absolute",
          left: 72, top: "38%",
          width: 2,
          height: accentLineH,
          background: `linear-gradient(to bottom, ${GOLD}, transparent)`,
          opacity: 0.4,
        }} />
      </div>

      {/* ═══ SCENE 3: FULL WAX — breathing pulse ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: s3,
        padding: "80px 60px",
      }}>
        {/* Full wax circle, breathing */}
        <div style={{
          width: 280, height: 280,
          borderRadius: "50%",
          background: `radial-gradient(circle at 45% 40%, ${CREAM} 0%, ${AMBER} 60%, ${GOLD} 100%)`,
          transform: `scale(${breathe})`,
          boxShadow: `0 0 80px rgba(212,165,116,0.25), 0 0 160px rgba(200,150,62,0.1)`,
          marginBottom: 60,
        }} />

        {/* Gold accent line above text */}
        <div style={{
          width: goldLineW,
          height: 2,
          background: GOLD,
          marginBottom: 30,
          opacity: ease(frame, 280, 20, 0, 0.7, Easing.out(Easing.cubic)),
        }} />

        {/* Text */}
        <div style={{
          ...fadeUp(frame, 290, 18),
          fontFamily: F.serif,
          fontSize: 48,
          color: "#E0E0E0",
          textAlign: "center",
          letterSpacing: 2,
          fontWeight: 400,
        }}>
          Slow means everything.
        </div>
      </div>

      {/* ═══ SCENE 4: THE FLAME ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: s4,
        padding: "80px 60px",
      }}>
        {/* Warm radial glow expanding outward */}
        <div style={{
          position: "absolute",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: warmGlowR, height: warmGlowR,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(232,160,69,${warmGlowOp}) 0%, rgba(200,150,62,${warmGlowOp * 0.4}) 40%, transparent 70%)`,
          pointerEvents: "none",
        }} />

        {/* Flame teardrop */}
        <div style={{
          position: "relative",
          width: 60, height: 100,
          transform: `translateX(${flameSway}px) scaleX(${flameScaleX}) scaleY(${flameScaleY})`,
          marginBottom: 80,
        }}>
          {/* Outer glow */}
          <div style={{
            position: "absolute",
            top: -20, left: -20,
            width: 100, height: 140,
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(232,160,69,0.15) 0%, transparent 70%)`,
            filter: "blur(10px)",
          }} />
          {/* Outer flame */}
          <div style={{
            position: "absolute",
            width: 60, height: 100,
            borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
            background: `linear-gradient(to top, ${FLAME} 0%, ${GOLD} 40%, rgba(245,237,224,0.8) 100%)`,
            filter: "blur(2px)",
          }} />
          {/* Inner flame — brighter core */}
          <div style={{
            position: "absolute",
            top: 20, left: 14,
            width: 32, height: 60,
            borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
            background: `linear-gradient(to top, #F5C94A 0%, rgba(255,245,230,0.7) 100%)`,
            filter: "blur(3px)",
          }} />
          {/* Wick */}
          <div style={{
            position: "absolute",
            bottom: -12, left: "50%",
            transform: "translateX(-50%)",
            width: 2, height: 18,
            background: CHARCOAL,
            borderRadius: 1,
          }} />
        </div>

        {/* Text */}
        <div style={{
          ...fadeUp(frame, 390, 18),
          fontFamily: F.serif,
          fontSize: 44,
          fontStyle: "italic",
          color: "#E0E0E0",
          textAlign: "center",
          lineHeight: 1.5,
          letterSpacing: 1,
        }}>
          One wick. One evening.
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
        {/* Brand name */}
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

        {/* Gold divider */}
        <div style={{
          width: dividerW,
          height: 1,
          background: GOLD,
          marginBottom: 30,
          opacity: ease(frame, 470, 20, 0, 0.6, Easing.out(Easing.cubic)),
        }} />

        {/* Tagline */}
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
