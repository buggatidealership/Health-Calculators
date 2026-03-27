import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
// Reel 2: MYTH-BUSTING — Sunscreen
// Hook: Question — "Trägst du Sonnencreme nur im Sommer?"
// Format: question → myth → truth → stat → CTA
// 12s = 360 frames. Educational format.
// Safe zones: y=288-1440, right 120px

const C = {
  bg: "#1a2744",
  text: "#ffffff",
  sub: "#8899b0",
  gold: "#d4a853",
  red: "#e8785e",
  green: "#6ec89b",
  navy: "#1a2744",
};
const F = {
  serif: "'DM Serif Display', Georgia, serif",
  sans: "'Inter', -apple-system, sans-serif",
  mono: "'JetBrains Mono', monospace",
};

function pop(frame: number, start: number, dur = 8) {
  return {
    transform: `scale(${interpolate(frame, [start, start + dur], [0.7, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.back(2)) })})`,
    opacity: interpolate(frame, [start, start + dur * 0.6], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
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

export const DermaReel2: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <div style={{
      width: 1080, height: 1920, background: C.bg,
      overflow: "hidden", position: "relative", fontFamily: F.sans,
    }}>
      <div style={{ position: "absolute", inset: 0,
        background: `radial-gradient(ellipse at 50% 35%, rgba(74,144,217,0.06) 0%, transparent 55%)`,
      }} />

      {/* ═══ Hook: Question (0-75) — 2.5s ═══ */}
      <div style={{
        position: "absolute", left: 0, right: 120, top: 288, bottom: 480,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 0, 75),
        padding: "0 50px",
      }}>
        <Img src={staticFile("characters/derma-sunscreen.png")} style={{
          ...pop(frame, 0, 14),
          width: 550, height: 550, objectFit: "contain",
          marginBottom: 30,
        }} />
        <div style={{
          ...pop(frame, 10, 10),
          fontSize: 80, color: C.text, fontFamily: F.serif,
          textAlign: "center", lineHeight: 1.3,
        }}>
          Trägst du Sonnencreme
        </div>
        <div style={{
          ...pop(frame, 18, 10),
          fontSize: 88, color: C.gold, fontFamily: F.serif,
          fontStyle: "italic", textAlign: "center",
        }}>
          nur im Sommer? ☀️
        </div>
      </div>

      {/* ═══ Myth (80-155) — 2.5s ═══ */}
      <div style={{
        position: "absolute", left: 0, right: 120, top: 288, bottom: 480,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 80, 155),
        padding: "0 50px", gap: 30,
      }}>
        <div style={{ ...pop(frame, 83, 8), fontSize: 160, }}>❌</div>
        <div style={{
          ...fadeIn(frame, 88, 10),
          fontSize: 72, color: C.red, fontFamily: F.serif,
          textAlign: "center", lineHeight: 1.35,
        }}>
          80% der UV-Strahlung durchdringt Wolken.
        </div>
        <div style={{
          ...fadeIn(frame, 108, 10),
          fontSize: 56, color: C.sub, textAlign: "center", lineHeight: 1.5,
        }}>
          Auch im Winter. Auch bei Regen. Auch im Büro am Fenster.
        </div>
      </div>

      {/* ═══ Truth (160-240) — 2.7s ═══ */}
      <div style={{
        position: "absolute", left: 0, right: 120, top: 288, bottom: 480,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 160, 240),
        padding: "0 50px", gap: 30,
      }}>
        <div style={{ ...pop(frame, 163, 8), fontSize: 160, }}>✅</div>
        <div style={{
          ...fadeIn(frame, 168, 10),
          fontSize: 72, color: C.green, fontFamily: F.serif,
          textAlign: "center", lineHeight: 1.35,
        }}>
          SPF 30+ jeden Tag. Ganzjährig.
        </div>
        <div style={{
          ...fadeIn(frame, 188, 10),
          fontSize: 56, color: C.sub, textAlign: "center", lineHeight: 1.5,
        }}>
          Der #1 Anti-Aging-Schutz, den Dermatologen empfehlen.
        </div>
      </div>

      {/* ═══ Stat slam (245-300) — 1.8s ═══ */}
      <div style={{
        position: "absolute", left: 0, right: 120, top: 288, bottom: 480,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 245, 300),
        padding: "0 50px",
      }}>
        <div style={{
          ...pop(frame, 248, 6),
          fontSize: 200, color: C.gold, fontFamily: F.mono, fontWeight: 900,
        }}>
          90%
        </div>
        <div style={{
          ...fadeIn(frame, 258, 10),
          fontSize: 60, color: C.text, textAlign: "center", lineHeight: 1.4,
          marginTop: 20,
        }}>
          der Hautalterung wird durch<br/>UV-Strahlung verursacht.
        </div>
      </div>

      {/* ═══ CTA (305-360) — 1.8s ═══ */}
      <div style={{
        position: "absolute", left: 0, right: 120, top: 288, bottom: 480,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 305, 360),
        padding: "0 50px", gap: 20,
      }}>
        <div style={{
          ...fadeIn(frame, 308, 10),
          fontSize: 76, color: C.text, fontFamily: F.serif, textAlign: "center", lineHeight: 1.3,
        }}>
          Deine Haut verdient
        </div>
        <div style={{
          ...fadeIn(frame, 320, 10),
          fontSize: 84, color: C.gold, fontFamily: F.serif, fontStyle: "italic", textAlign: "center",
        }}>
          den besten Schutz.
        </div>
        <div style={{
          ...fadeIn(frame, 338, 8),
          marginTop: 30, padding: "22px 56px",
          background: `linear-gradient(135deg, ${C.gold}, #c49540)`,
          borderRadius: 60, fontSize: 40, fontWeight: 700,
          color: C.navy, letterSpacing: 1,
        }}>
          📍 DERMAMEDICUM · BONN
        </div>
      </div>
    </div>
  );
};
