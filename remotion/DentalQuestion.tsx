import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
// RESEARCH-INFORMED: Question hook + social proof escalation
// Hook formula: "Are you [doing something wrong]?" → immediate curiosity gap
// Structure: question → "here's what THEIR patients say" → review cascade → CTA
// NEW FORMAT: Full-screen text cards with gradient backgrounds. No characters in reviews.
// Characters only for thumbnail + CTA. Maximum text-to-screen ratio.

const F = {
  display: "'DM Serif Display', Georgia, serif",
  sans: "'Inter', -apple-system, sans-serif",
  mono: "'JetBrains Mono', monospace",
};

function slam(frame: number, start: number) {
  const s = interpolate(frame, [start, start + 5], [3, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const o = interpolate(frame, [start, start + 3], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  return { transform: `scale(${s})`, opacity: o };
}

function fadeIn(frame: number, start: number, dur = 12) {
  return {
    opacity: interpolate(frame, [start, start + dur], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    transform: `translateY(${interpolate(frame, [start, start + dur], [30, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })}px)`,
  };
}

function sceneVis(frame: number, start: number, end: number) {
  if (frame < start || frame > end + 8) return 0;
  return Math.min(
    interpolate(frame, [start, start + 6], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    interpolate(frame, [end, end + 6], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
  );
}

// 18s = 540 frames
export const DentalQuestion: React.FC = () => {
  const frame = useCurrentFrame();

  // Background color shifts per scene
  const bgHue = interpolate(frame, [0, 100, 200, 350, 450, 540], [250, 250, 220, 180, 160, 140], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });
  const bgSat = interpolate(frame, [0, 300, 540], [15, 20, 25], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  return (
    <div style={{
      width: 1080, height: 1920,
      background: `hsl(${bgHue}, ${bgSat}%, 8%)`,
      overflow: "hidden", position: "relative", fontFamily: F.sans,
    }}>
      {/* Subtle gradient overlay */}
      <div style={{ position: "absolute", inset: 0,
        background: `radial-gradient(ellipse at 50% 40%, hsla(${bgHue},40%,30%,0.1) 0%, transparent 60%)`,
      }} />

      {/* ═══ HOOK: 0-1.5s (0-45) — Question formula ═══ */}
      <div style={{
        position: "absolute", left: 0, right: 0, top: 200, bottom: 300,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 0, 80),
        padding: "0 60px",
      }}>
        {/* Question — INSTANT, big */}
        <div style={{
          ...slam(frame, 2),
          fontSize: 96, color: "#ffffff", fontFamily: F.display,
          textAlign: "center", lineHeight: 1.25,
        }}>
          Would you fly to another country
        </div>
        <div style={{
          ...slam(frame, 10),
          fontSize: 104, color: "#fbbf24", fontFamily: F.display,
          fontStyle: "italic", textAlign: "center", lineHeight: 1.25,
          marginTop: 16,
        }}>
          for a dentist?
        </div>
        <div style={{
          ...fadeIn(frame, 40, 10),
          fontSize: 60, color: "#9ca3af", marginTop: 50,
        }}>
          These people did. 👇
        </div>
      </div>

      {/* ═══ REVIEW 1: Norway (85-170) — full-screen quote ═══ */}
      <div style={{
        position: "absolute", left: 0, right: 0, top: 200, bottom: 300,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 85, 170),
        padding: "0 70px",
      }}>
        <div style={{
          ...fadeIn(frame, 88, 10),
          fontSize: 130, marginBottom: 30,
        }}>🇳🇴</div>
        <div style={{
          ...fadeIn(frame, 92, 12),
          fontSize: 72, color: "#ffffff", fontFamily: F.display,
          textAlign: "center", lineHeight: 1.35, fontStyle: "italic",
        }}>
          "I would rather fly from Norway than ever go to a dentist in Norway."
        </div>
        <div style={{
          ...fadeIn(frame, 115, 10),
          fontSize: 44, color: "#9ca3af", marginTop: 30,
        }}>
          Taltunran · Google Review · ⭐⭐⭐⭐⭐
        </div>
      </div>

      {/* ═══ REVIEW 2: Mallorca (175-260) ═══ */}
      <div style={{
        position: "absolute", left: 0, right: 0, top: 200, bottom: 300,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 175, 260),
        padding: "0 70px",
      }}>
        <div style={{
          ...fadeIn(frame, 178, 10),
          fontSize: 130, marginBottom: 30,
        }}>🏝️</div>
        <div style={{
          ...fadeIn(frame, 182, 12),
          fontSize: 72, color: "#ffffff", fontFamily: F.display,
          textAlign: "center", lineHeight: 1.35, fontStyle: "italic",
        }}>
          "I'm coming from Mallorca, and that says it all. Debuting a new smile today!"
        </div>
        <div style={{
          ...fadeIn(frame, 205, 10),
          fontSize: 44, color: "#9ca3af", marginTop: 30,
        }}>
          Andreu B. · Google Review · ⭐⭐⭐⭐⭐
        </div>
      </div>

      {/* ═══ REVIEW 3: Life changed (265-350) ═══ */}
      <div style={{
        position: "absolute", left: 0, right: 0, top: 200, bottom: 300,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 265, 350),
        padding: "0 70px",
      }}>
        <div style={{
          ...fadeIn(frame, 268, 10),
          fontSize: 130, marginBottom: 30,
        }}>😭</div>
        <div style={{
          ...fadeIn(frame, 272, 12),
          fontSize: 72, color: "#ffffff", fontFamily: F.display,
          textAlign: "center", lineHeight: 1.35, fontStyle: "italic",
        }}>
          "It's changed my life. I can eat and, above all, smile without fear."
        </div>
        <div style={{
          ...fadeIn(frame, 295, 10),
          fontSize: 44, color: "#9ca3af", marginTop: 30,
        }}>
          CS Perruqueria · Google Review · ⭐⭐⭐⭐⭐
        </div>
      </div>

      {/* ═══ THE TWIST (355-430) — not a normal clinic ═══ */}
      <div style={{
        position: "absolute", left: 0, right: 0, top: 200, bottom: 300,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 355, 430),
        padding: "0 60px",
      }}>
        <div style={{
          ...slam(frame, 358),
          fontSize: 200, color: "#fbbf24", fontFamily: F.mono,
          fontWeight: 900,
        }}>
          4.9
        </div>
        <div style={{
          ...fadeIn(frame, 366, 10),
          fontSize: 48, color: "#9ca3af", marginTop: 10,
        }}>
          ⭐⭐⭐⭐⭐ on Google
        </div>
        <div style={{
          ...fadeIn(frame, 380, 12),
          fontSize: 80, color: "#ffffff", fontFamily: F.display,
          textAlign: "center", marginTop: 40, lineHeight: 1.3,
        }}>
          Patients don't just come back.
        </div>
        <div style={{
          ...fadeIn(frame, 395, 12),
          fontSize: 84, color: "#fbbf24", fontFamily: F.display,
          fontStyle: "italic", textAlign: "center", marginTop: 10,
        }}>
          They fly back.
        </div>
      </div>

      {/* ═══ CTA (435-540) ═══ */}
      <div style={{
        position: "absolute", left: 0, right: 0, top: 200, bottom: 200,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 435, 540),
        padding: "0 60px", gap: 24,
      }}>
        <Img src={staticFile("characters/harmonia-logo.png")} style={{
          ...fadeIn(frame, 438, 14),
          width: 700, height: 170, objectFit: "contain",
          filter: "drop-shadow(0 0 20px rgba(251,191,36,0.15))",
        }} />
        <div style={{
          ...fadeIn(frame, 455, 12),
          fontSize: 84, color: "#ffffff", fontFamily: F.display,
          textAlign: "center", lineHeight: 1.3,
        }}>
          Your smile deserves
        </div>
        <div style={{
          ...fadeIn(frame, 468, 12),
          fontSize: 92, color: "#fbbf24", fontFamily: F.display,
          fontStyle: "italic", textAlign: "center",
        }}>
          the best.
        </div>
        <div style={{
          ...fadeIn(frame, 490, 10),
          marginTop: 24, padding: "24px 56px",
          background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
          borderRadius: 60, fontSize: 42, fontWeight: 800,
          color: "#0a0a0f", letterSpacing: 1,
        }}>
          📍 HARMONIA DENTAL · MASNOU
        </div>
        <div style={{
          ...fadeIn(frame, 505, 10),
          fontSize: 38, color: "#9ca3af",
        }}>
          #1 rated clinic in Maresme
        </div>
      </div>
    </div>
  );
};
