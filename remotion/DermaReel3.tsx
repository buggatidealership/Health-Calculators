import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
// Reel 3: PREMIUM TRUST — Consultation experience
// Hook: Time-based — "Was passiert in den ersten 5 Minuten bei DermaMedicum?"
// Format: question → consultation scene → patient feeling → CTA
// 12s = 360 frames. Trust/brand format.
// Safe zones: y=288-1440, right 120px

const C = {
  bg: "#1a2744",
  bgWarm: "#1f1d18",
  text: "#ffffff",
  sub: "#8899b0",
  gold: "#d4a853",
  cream: "#f5f0ea",
  navy: "#1a2744",
  teal: "#4a90d9",
};
const F = {
  serif: "'DM Serif Display', Georgia, serif",
  sans: "'Inter', -apple-system, sans-serif",
};

function fadeIn(frame: number, start: number, dur = 14) {
  return {
    opacity: interpolate(frame, [start, start + dur], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    transform: `translateY(${interpolate(frame, [start, start + dur], [35, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })}px)`,
  };
}

function sceneVis(frame: number, start: number, end: number) {
  if (frame < start || frame > end + 10) return 0;
  return Math.min(
    interpolate(frame, [start, start + 10], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    interpolate(frame, [end, end + 10], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
  );
}

export const DermaReel3: React.FC = () => {
  const frame = useCurrentFrame();

  // Warm shift across reel
  const warmth = interpolate(frame, [0, 150, 360], [0, 0.3, 0.6], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const ambHue = interpolate(warmth, [0, 1], [220, 35]);

  return (
    <div style={{
      width: 1080, height: 1920, background: C.bg,
      overflow: "hidden", position: "relative", fontFamily: F.sans,
    }}>
      <div style={{ position: "absolute", inset: 0,
        background: `radial-gradient(ellipse at 50% 40%, hsla(${ambHue},40%,35%,0.08) 0%, transparent 55%)`,
      }} />

      {/* ═══ Hook: Time-based question (0-80) — 2.7s ═══ */}
      <div style={{
        position: "absolute", left: 0, right: 120, top: 288, bottom: 480,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 0, 80),
        padding: "0 50px",
      }}>
        <div style={{
          ...fadeIn(frame, 2, 10),
          fontSize: 80, color: C.sub, fontFamily: F.serif,
          textAlign: "center", lineHeight: 1.3,
        }}>
          Was passiert in den
        </div>
        <div style={{
          ...fadeIn(frame, 10, 10),
          fontSize: 120, color: C.gold, fontFamily: F.serif,
          fontStyle: "italic", textAlign: "center",
        }}>
          ersten 5 Minuten
        </div>
        <div style={{
          ...fadeIn(frame, 20, 10),
          fontSize: 80, color: C.sub, fontFamily: F.serif,
          textAlign: "center",
        }}>
          bei DermaMedicum?
        </div>
      </div>

      {/* ═══ Consultation scene (85-195) — 3.7s ═══ */}
      <div style={{
        position: "absolute", left: 0, right: 120, top: 288, bottom: 480,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "space-between",
        opacity: sceneVis(frame, 85, 195),
        padding: "20px 40px 20px 40px",
      }}>
        <Img src={staticFile("characters/derma-consultation.png")} style={{
          ...fadeIn(frame, 88, 18),
          width: 800, height: 600, objectFit: "contain",
          borderRadius: 24,
          filter: "drop-shadow(0 0 30px rgba(212,168,83,0.1))",
        }} />

        {/* Staggered reveals — what happens */}
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            { text: "Wir hören Ihnen zu.", delay: 110, icon: "👂" },
            { text: "Wir analysieren Ihre Haut.", delay: 130, icon: "🔬" },
            { text: "Wir erstellen Ihren Plan.", delay: 150, icon: "📋" },
          ].map((item, i) => (
            <div key={i} style={{
              ...fadeIn(frame, item.delay, 12),
              display: "flex", alignItems: "center", gap: 16,
              padding: "18px 24px",
              background: "rgba(255,255,255,0.04)",
              borderRadius: 16, borderLeft: `4px solid ${C.gold}`,
            }}>
              <span style={{ fontSize: 40 }}>{item.icon}</span>
              <span style={{ fontSize: 48, color: C.cream }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ Patient feeling (200-280) — 2.7s ═══ */}
      <div style={{
        position: "absolute", left: 0, right: 120, top: 288, bottom: 480,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 200, 280),
        padding: "0 50px", gap: 24,
      }}>
        <div style={{ ...fadeIn(frame, 203, 10), fontSize: 120 }}>🤝</div>
        <div style={{
          ...fadeIn(frame, 210, 12),
          fontSize: 72, color: C.cream, fontFamily: F.serif,
          textAlign: "center", lineHeight: 1.4, fontStyle: "italic",
        }}>
          "Zum ersten Mal hat sich jemand wirklich Zeit genommen."
        </div>
        <div style={{
          ...fadeIn(frame, 240, 10),
          fontSize: 42, color: C.sub,
        }}>
          — Das sagen unsere Patienten
        </div>
      </div>

      {/* ═══ CTA (285-360) — 2.5s ═══ */}
      <div style={{
        position: "absolute", left: 0, right: 120, top: 288, bottom: 480,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 285, 360),
        padding: "0 50px", gap: 20,
      }}>
        <div style={{
          ...fadeIn(frame, 288, 12),
          fontSize: 80, color: C.text, fontFamily: F.serif, textAlign: "center", lineHeight: 1.3,
        }}>
          Ihre Haut.
        </div>
        <div style={{
          ...fadeIn(frame, 300, 12),
          fontSize: 88, color: C.gold, fontFamily: F.serif, fontStyle: "italic", textAlign: "center",
        }}>
          In den besten Händen.
        </div>
        <div style={{
          ...fadeIn(frame, 320, 10),
          marginTop: 30, padding: "22px 56px",
          background: `linear-gradient(135deg, ${C.gold}, #c49540)`,
          borderRadius: 60, fontSize: 40, fontWeight: 700,
          color: C.navy,
        }}>
          TERMIN VEREINBAREN
        </div>
        <div style={{
          ...fadeIn(frame, 335, 10),
          fontSize: 38, color: C.sub,
        }}>
          DermaMedicum · Bonn 📍
        </div>
      </div>
    </div>
  );
};
