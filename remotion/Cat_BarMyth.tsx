import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
// CATALOG — RESTAURANT/BAR: MENU MYTH
// Bold typography debunk — "You've been ordering wrong"
// Black bg, white/red type, fast cuts between claim and correction
// Designed for saves + DM shares

export const Cat_BarMyth: React.FC = () => {
  const frame = useCurrentFrame();

  const slam = (s: number, d = 6) => ({
    transform: `scale(${interpolate(frame, [s, s + d], [1.8, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })})`,
    opacity: interpolate(frame, [s, s + 3], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
  });

  const fadeIn = (s: number, d = 12) => ({
    opacity: interpolate(frame, [s, s + d], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    transform: `translateY(${interpolate(frame, [s, s + d], [20, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })}px)`,
  });

  const vis = (s: number, e: number) => {
    if (frame < s || frame > e + 8) return 0;
    return Math.min(
      interpolate(frame, [s, s + 6], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
      interpolate(frame, [e, e + 8], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
    );
  };

  // Red line wipe
  const wipeWidth = interpolate(frame, [95, 105], [0, 1080], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <div style={{
      width: 1080, height: 1920,
      background: "#0a0a0a",
      overflow: "hidden", position: "relative",
      fontFamily: "'Inter', sans-serif",
    }}>

      {/* Red line wipe transition */}
      <div style={{
        position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)",
        width: wipeWidth, height: 6,
        background: "#ef4444",
        zIndex: 30,
        opacity: interpolate(frame, [95, 100, 108, 115], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
      }} />

      {/* ═══ CLAIM (0-95) — bold white text ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(0, 93),
        display: "flex", flexDirection: "column",
        justifyContent: "center", padding: "300px 60px 500px",
      }}>
        <div style={{ ...fadeIn(5), fontSize: 40, color: "#ef4444", fontWeight: 700, letterSpacing: 3, marginBottom: 30 }}>
          COMMON BELIEF
        </div>
        <div style={{ ...slam(15), fontSize: 80, color: "#ffffff", fontWeight: 900, lineHeight: 1.2 }}>
          "Well-done steak is safer to eat."
        </div>
        <div style={{ ...fadeIn(60), fontSize: 38, color: "#6b7280", marginTop: 30 }}>
          — Every worried parent at a restaurant
        </div>
      </div>

      {/* ═══ CORRECTION (110-250) — red accent ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(110, 250),
        display: "flex", flexDirection: "column",
        justifyContent: "center", padding: "300px 60px 500px", gap: 20,
      }}>
        <div style={{ ...slam(113), fontSize: 76, color: "#ef4444", fontWeight: 900, lineHeight: 1.2 }}>
          It's not safer.
        </div>
        <div style={{ ...fadeIn(135, 14), fontSize: 52, color: "#d1d5db", lineHeight: 1.5 }}>
          Surface bacteria die at 71°C — the same temperature for medium.
        </div>
        <div style={{ ...fadeIn(170, 14), fontSize: 52, color: "#d1d5db", lineHeight: 1.5 }}>
          Well-done just removes moisture and flavor. The safety is identical.
        </div>
        <div style={{ ...fadeIn(210, 12), fontSize: 52, color: "#22c55e", fontWeight: 600, lineHeight: 1.5 }}>
          Order what you enjoy. It's already safe.
        </div>
      </div>

      {/* ═══ CTA (255-330) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(255, 330),
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", padding: "300px 60px 500px", gap: 20,
      }}>
        <div style={{ ...fadeIn(258), fontSize: 72, color: "#ffffff", fontWeight: 800, textAlign: "center", lineHeight: 1.3 }}>
          Food worth
        </div>
        <div style={{ ...fadeIn(270), fontSize: 80, color: "#ef4444", fontWeight: 800, fontStyle: "italic", textAlign: "center" }}>
          understanding.
        </div>
        <div style={{
          ...fadeIn(295), marginTop: 30, padding: "20px 50px",
          border: "2px solid rgba(255,255,255,0.15)", borderRadius: 50,
          fontSize: 34, fontWeight: 600, color: "#d1d5db",
        }}>
          YOUR RESTAURANT
        </div>
      </div>
    </div>
  );
};
