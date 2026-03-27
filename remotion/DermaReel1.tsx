import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
// Reel 1: SKIN TRANSFORMATION REVEAL
// Hook: Contrarian — "Everyone says clear skin takes months."
// Format: before mirror → treatment flash → after mirror → CTA
// 10s = 300 frames (short, high completion = better algo)
// Safe zones: y=288-1440 (IG UI), right 120px

const C = {
  bg: "#1a2744",
  bgLight: "#f5f0ea",
  text: "#ffffff",
  sub: "#8899b0",
  gold: "#d4a853",
  cream: "#f5f0ea",
  navy: "#1a2744",
  accent: "#4a90d9",
};
const F = {
  serif: "'DM Serif Display', Georgia, serif",
  sans: "'Inter', -apple-system, sans-serif",
};

function slam(frame: number, start: number) {
  return {
    transform: `scale(${interpolate(frame, [start, start + 6], [2.5, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })})`,
    opacity: interpolate(frame, [start, start + 4], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
  };
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
    interpolate(frame, [start, start + 8], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    interpolate(frame, [end, end + 8], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
  );
}

export const DermaReel1: React.FC = () => {
  const frame = useCurrentFrame();
  // White flash for transformation moment
  const flashOpacity = interpolate(frame, [125, 128, 132, 138], [0, 0.8, 0.8, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <div style={{
      width: 1080, height: 1920, background: C.bg,
      overflow: "hidden", position: "relative", fontFamily: F.sans,
    }}>
      {/* Warm ambient */}
      <div style={{ position: "absolute", inset: 0,
        background: `radial-gradient(ellipse at 50% 40%, rgba(212,168,83,0.06) 0%, transparent 60%)`,
      }} />

      {/* Flash overlay */}
      <div style={{ position: "absolute", inset: 0, background: C.cream, opacity: flashOpacity, zIndex: 50, pointerEvents: "none" }} />

      {/* ═══ SCENE 1: Hook + Before mirror (0-120) — 4s ═══ */}
      <div style={{
        position: "absolute", left: 0, right: 120, top: 288, bottom: 480,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "space-between",
        opacity: sceneVis(frame, 0, 120),
        padding: "30px 40px 20px 40px",
      }}>
        <div style={{ ...fadeIn(frame, 0, 8), textAlign: "center" }}>
          <div style={{ fontSize: 64, color: C.sub }}>Alle sagen:</div>
          <div style={{ fontSize: 76, color: C.text, fontFamily: F.serif, fontStyle: "italic", marginTop: 8 }}>
            "Reine Haut dauert Monate."
          </div>
        </div>
        <Img src={staticFile("characters/derma-mirror-before.png")} style={{
          ...fadeIn(frame, 15, 16),
          width: 700, height: 700, objectFit: "contain",
          filter: "drop-shadow(0 0 30px rgba(0,0,0,0.3))",
        }} />
        <div style={{ ...fadeIn(frame, 60, 12), fontSize: 56, color: C.sub, textAlign: "center" }}>
          Vorher. 😔
        </div>
      </div>

      {/* ═══ SCENE 2: After mirror (135-220) — 3s ═══ */}
      <div style={{
        position: "absolute", left: 0, right: 120, top: 288, bottom: 480,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "space-between",
        opacity: sceneVis(frame, 135, 220),
        padding: "30px 40px 20px 40px",
      }}>
        <div style={{ ...slam(frame, 138), textAlign: "center" }}>
          <div style={{ fontSize: 80, color: C.gold, fontFamily: F.serif, fontStyle: "italic" }}>
            4 Wochen später.
          </div>
        </div>
        <Img src={staticFile("characters/derma-mirror-after.png")} style={{
          ...fadeIn(frame, 145, 16),
          width: 700, height: 700, objectFit: "contain",
          filter: "drop-shadow(0 0 40px rgba(212,168,83,0.2))",
        }} />
        <div style={{ ...fadeIn(frame, 175, 12), fontSize: 56, color: C.gold, textAlign: "center" }}>
          Nachher. ✨
        </div>
      </div>

      {/* ═══ SCENE 3: CTA (225-300) — 2.5s ═══ */}
      <div style={{
        position: "absolute", left: 0, right: 120, top: 288, bottom: 480,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 225, 300),
        padding: "0 40px", gap: 24,
      }}>
        <div style={{ ...fadeIn(frame, 228, 10), fontSize: 80, color: C.text, fontFamily: F.serif, textAlign: "center", lineHeight: 1.3 }}>
          Gesunde Haut
        </div>
        <div style={{ ...fadeIn(frame, 240, 10), fontSize: 88, color: C.gold, fontFamily: F.serif, fontStyle: "italic", textAlign: "center" }}>
          beginnt hier.
        </div>
        <div style={{
          ...fadeIn(frame, 260, 10),
          marginTop: 30, padding: "22px 56px",
          background: `linear-gradient(135deg, ${C.gold}, #c49540)`,
          borderRadius: 60, fontSize: 40, fontWeight: 700,
          color: C.navy, letterSpacing: 1,
        }}>
          📍 DERMAMEDICUM · BONN
        </div>
        <div style={{ ...fadeIn(frame, 275, 10), fontSize: 36, color: C.sub }}>
          Dermatologie · Laser · Ästhetik
        </div>
      </div>
    </div>
  );
};
