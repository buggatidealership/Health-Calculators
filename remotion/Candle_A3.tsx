import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

// CANDLE — OUTPUT A3: "The Ritual" — Evening lighting moment. Intimate, calm, atmospheric.

const clamp = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };

const CREAM = "#F5EDE0";
const CHARCOAL = "#1a1410";
const AMBER = "#D4A574";
const SAGE = "#8B9A7B";
const FLAME = "#E8A045";
const GOLD = "#C8963E";
const WARM_DARK = "#2C2218";
const MUTED = "#9A8B7A";

const NEAR_BLACK = "#12100D";

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

export const Candle_A3: React.FC = () => {
  const frame = useCurrentFrame();

  // ═══ SCENE 1 (0–100): TIME STAMP ═══
  const s1 = sceneVis(frame, 0, 100);
  const lineWidth = ease(frame, 20, 60, 0, 900, Easing.out(Easing.quad));
  const lineGlow = ease(frame, 20, 60, 0, 0.4, Easing.out(Easing.quad));

  // ═══ SCENE 2 (100–220): RITUAL STEPS ═══
  const s2 = sceneVis(frame, 100, 220);
  const ritualSteps = [
    { text: "Turn off the overhead.", start: 115, dur: 16 },
    { text: "Light the wick.", start: 150, dur: 16 },
    { text: "Wait.", start: 190, dur: 16 },
  ];

  // ═══ SCENE 3 (220–360): EXPANDING GLOW — scent fills the room ═══
  const s3 = sceneVis(frame, 220, 360);
  const glowSize = ease(frame, 225, 100, 6, 1100, Easing.out(Easing.quad));
  const glowOpacity = ease(frame, 225, 60, 0, 1, Easing.out(Easing.quad));
  // Concentric ring pulses — propagate outward continuously
  const ringCount = 5;
  const rings = Array.from({ length: ringCount }, (_, i) => {
    const ringPhase = ((frame - 260) * 0.015 + i * 0.25) % 1.0;
    const ringR = ringPhase * (glowSize * 0.45);
    const ringOp = Math.max(0, (1 - ringPhase) * 0.12);
    return { r: ringR, opacity: frame > 260 ? ringOp : 0 };
  });

  // ═══ SCENE 4 (360–450): DISTILLED ═══
  const s4 = sceneVis(frame, 360, 450);
  const goldLineW = ease(frame, 400, 25, 0, 240, Easing.out(Easing.cubic));

  // ═══ SCENE 5 (450–540): BRAND LOCKUP ═══
  const s5 = sceneVis(frame, 450, 540, 12, 1);
  const dividerW = ease(frame, 470, 25, 0, 160, Easing.out(Easing.cubic));

  // ═══ MINIMAL PARTICLES — very few, very subtle ═══
  const motes = Array.from({ length: 8 }, (_, i) => {
    const baseX = ((i * 227.3) % 1080);
    const baseY = ((i * 389.7) % 1920);
    const driftX = Math.sin((frame + i * 90) * 0.006) * 15;
    const driftY = Math.cos((frame + i * 70) * 0.005) * 12 - frame * 0.08;
    const y = (baseY + driftY + 2000) % 2000 - 40;
    const size = 1.5 + (i % 3);
    const opacity = 0.025 + (i % 3) * 0.01;
    return { x: baseX + driftX, y, size, opacity };
  });

  return (
    <div style={{
      width: 1080, height: 1920,
      background: NEAR_BLACK,
      overflow: "hidden",
      position: "relative",
      fontFamily: F.sans,
    }}>

      {/* Deep vignette — intensifies the darkness */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 90, pointerEvents: "none",
        background: "radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(4,3,2,0.6) 100%)",
      }} />

      {/* Film grain — lower opacity than others */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.035, pointerEvents: "none", zIndex: 100,
        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
      }} />

      {/* Minimal warm motes */}
      {motes.map((m, i) => (
        <div key={i} style={{
          position: "absolute",
          left: m.x, top: m.y,
          width: m.size, height: m.size,
          borderRadius: "50%",
          background: AMBER,
          opacity: m.opacity,
          filter: "blur(1px)",
          pointerEvents: "none",
          zIndex: 5,
        }} />
      ))}

      {/* ═══ SCENE 1: TIME STAMP ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: s1,
        padding: "80px 60px",
      }}>
        {/* Time display — large, thin */}
        <div style={{
          ...fadeUp(frame, 5, 20),
          fontFamily: F.sans,
          fontSize: 96,
          fontWeight: 200,
          color: "#E0E0E0",
          letterSpacing: 6,
          marginBottom: 40,
        }}>
          7:43 PM
        </div>

        {/* Warm gradient line extending horizontally */}
        <div style={{
          width: lineWidth,
          height: 2,
          background: `linear-gradient(90deg, transparent 0%, ${AMBER} 20%, ${FLAME} 50%, ${AMBER} 80%, transparent 100%)`,
          opacity: lineGlow,
          marginBottom: 40,
          boxShadow: `0 0 20px rgba(232,160,69,${lineGlow * 0.3})`,
        }} />

        {/* Subtitle */}
        <div style={{
          ...fadeUp(frame, 45, 18),
          fontFamily: F.serif,
          fontSize: 30,
          fontStyle: "italic",
          color: "#A0A0A0",
          letterSpacing: 1,
        }}>
          The lights go down.
        </div>
      </div>

      {/* ═══ SCENE 2: RITUAL STEPS ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: s2,
        padding: "80px 100px",
        gap: 65,
      }}>
        {ritualSteps.map((step, i) => (
          <div key={i} style={{
            ...fadeUp(frame, step.start, step.dur),
            fontFamily: F.serif,
            // "Wait." is bigger, not italic, more letterspacing — it's the beat drop
            fontSize: i === 2 ? 56 : 40,
            fontStyle: i === 2 ? "normal" : "italic",
            color: i === 2 ? "#E0E0E0" : "#A0A0A0",
            textAlign: "center",
            letterSpacing: i === 2 ? 8 : 1,
            lineHeight: 1.4,
          }}>
            {step.text}
          </div>
        ))}

        {/* Subtle dots between steps */}
        {[0, 1].map((i) => (
          <div key={`sep-${i}`} style={{
            position: "absolute",
            left: "50%",
            top: i === 0 ? "42%" : "56%",
            transform: "translateX(-50%)",
            width: 3, height: 3,
            borderRadius: "50%",
            background: MUTED,
            opacity: ease(frame, ritualSteps[i].start + 20, 10, 0, 0.3, Easing.out(Easing.quad)),
          }} />
        ))}
      </div>

      {/* ═══ SCENE 3: THE GLOW — scent filling the room ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: s3,
      }}>
        {/* Central warm glow — expanding slowly */}
        <div style={{
          position: "absolute",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: glowSize, height: glowSize,
          borderRadius: "50%",
          background: `radial-gradient(circle,
            rgba(232,160,69,${glowOpacity * 0.18}) 0%,
            rgba(200,150,62,${glowOpacity * 0.1}) 30%,
            rgba(212,165,116,${glowOpacity * 0.05}) 55%,
            transparent 75%)`,
          pointerEvents: "none",
        }} />

        {/* Concentric pulse rings */}
        {rings.map((ring, i) => (
          <div key={i} style={{
            position: "absolute",
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: ring.r * 2, height: ring.r * 2,
            borderRadius: "50%",
            border: `1px solid rgba(200,150,62,${ring.opacity})`,
            pointerEvents: "none",
          }} />
        ))}

        {/* Warm center point — the wick */}
        <div style={{
          position: "absolute",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: 8, height: 8,
          borderRadius: "50%",
          background: FLAME,
          opacity: ease(frame, 225, 20, 0, 0.7, Easing.out(Easing.quad)),
          boxShadow: `0 0 30px rgba(232,160,69,0.4), 0 0 60px rgba(232,160,69,0.15)`,
        }} />

        {/* Text — appears after glow settles */}
        <div style={{
          position: "absolute",
          top: "68%",
          left: "50%",
          transform: "translateX(-50%)",
          ...fadeUp(frame, 310, 22),
          fontFamily: F.serif,
          fontSize: 46,
          color: "#E0E0E0",
          textAlign: "center",
          letterSpacing: 2,
          whiteSpace: "nowrap",
        }}>
          The room changes.
        </div>
      </div>

      {/* ═══ SCENE 4: DISTILLED ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: s4,
        padding: "80px 60px",
      }}>
        <div style={{
          ...fadeUp(frame, 375, 20),
          fontFamily: F.serif,
          fontSize: 48,
          fontStyle: "italic",
          color: "#E0E0E0",
          textAlign: "center",
          lineHeight: 1.5,
          letterSpacing: 1.5,
          marginBottom: 40,
        }}>
          Your evening, distilled.
        </div>

        {/* Gold accent line */}
        <div style={{
          width: goldLineW,
          height: 1,
          background: GOLD,
          opacity: ease(frame, 400, 20, 0, 0.5, Easing.out(Easing.cubic)),
        }} />
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
