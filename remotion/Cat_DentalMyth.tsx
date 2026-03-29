import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
// CATALOG — DENTAL: MYTH SLAYER
// Influencer neon myth → glitch → clean white clinical correction
// Visually distinct from DM_Debunk (which uses pink→dark)

export const Cat_DentalMyth: React.FC = () => {
  const frame = useCurrentFrame();

  const fadeIn = (s: number, d = 12) => ({
    opacity: interpolate(frame, [s, s + d], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    transform: `translateY(${interpolate(frame, [s, s + d], [25, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })}px)`,
  });
  const vis = (s: number, e: number) => {
    if (frame < s || frame > e + 8) return 0;
    return Math.min(
      interpolate(frame, [s, s + 6], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
      interpolate(frame, [e, e + 8], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
    );
  };

  // Glitch effect on transition
  const glitchActive = frame >= 95 && frame <= 110;
  const glitchX = glitchActive ? Math.sin(frame * 20) * 15 : 0;
  const glitchClip = glitchActive
    ? `inset(${Math.random() * 40}% 0 ${Math.random() * 40}% 0)`
    : "none";

  return (
    <div style={{
      width: 1080, height: 1920,
      background: "#fafafa",
      overflow: "hidden", position: "relative",
      fontFamily: "'Inter', sans-serif",
    }}>

      {/* ═══ MYTH (0-95) — neon influencer aesthetic ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(160deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        opacity: vis(0, 93),
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", padding: "300px 60px 500px",
      }}>
        {/* Neon glow */}
        <div style={{
          position: "absolute", top: "30%", left: "50%", transform: "translate(-50%, -50%)",
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,255,136,0.15), transparent 70%)",
        }} />
        <div style={{ ...fadeIn(5), fontSize: 36, color: "#00ff88", letterSpacing: 6, textTransform: "uppercase", marginBottom: 30 }}>
          VIRAL TIPP
        </div>
        <div style={{ ...fadeIn(15, 16), fontSize: 70, color: "#ffffff", fontWeight: 800, textAlign: "center", lineHeight: 1.3 }}>
          "Charcoal whitening is the best natural way to whiten teeth!"
        </div>
        <div style={{ ...fadeIn(55), fontSize: 38, color: "#00ff88", marginTop: 30, fontWeight: 600 }}>
          2.1M views · TikTok
        </div>
      </div>

      {/* ═══ GLITCH TRANSITION (95-110) ═══ */}
      {glitchActive && (
        <>
          <div style={{
            position: "absolute", inset: 0, background: "#00ff88",
            opacity: interpolate(frame, [95, 98, 100], [0, 0.6, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
            zIndex: 40,
          }} />
          <div style={{
            position: "absolute", inset: 0, zIndex: 41,
            transform: `translateX(${glitchX}px)`,
            clipPath: glitchClip,
            background: "#1a1a2e",
            opacity: 0.5,
          }} />
        </>
      )}

      {/* ═══ TRUTH (115-260) — clean white clinical ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        background: "#fafafa",
        opacity: vis(112, 260),
        display: "flex", flexDirection: "column",
        justifyContent: "center", padding: "300px 60px 500px", gap: 24,
      }}>
        {/* Red line accent */}
        <div style={{
          ...fadeIn(115), width: 80, height: 4, background: "#dc2626", borderRadius: 2,
        }} />

        <div style={{ ...fadeIn(118, 14), fontSize: 60, color: "#dc2626", fontWeight: 800, lineHeight: 1.35 }}>
          Charcoal is abrasive.
        </div>
        <div style={{ ...fadeIn(145, 14), fontSize: 50, color: "#374151", lineHeight: 1.5 }}>
          It strips enamel — the only layer protecting your teeth. Once it's gone, it doesn't grow back.
        </div>
        <div style={{ ...fadeIn(185, 14), fontSize: 50, color: "#059669", lineHeight: 1.5, fontWeight: 600 }}>
          Professional whitening preserves enamel while removing stains.
        </div>
        <div style={{ ...fadeIn(225, 10), fontSize: 32, color: "#9ca3af", fontStyle: "italic" }}>
          Source: American Dental Association, 2024
        </div>
      </div>

      {/* ═══ CTA (265-330) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        background: "#fafafa",
        opacity: vis(265, 330),
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", padding: "300px 60px 500px", gap: 20,
      }}>
        <div style={{ ...fadeIn(268), fontSize: 72, color: "#111827", fontWeight: 800, textAlign: "center", lineHeight: 1.3 }}>
          Your enamel is
        </div>
        <div style={{ ...fadeIn(280), fontSize: 76, color: "#059669", fontWeight: 800, fontStyle: "italic", textAlign: "center" }}>
          irreplaceable.
        </div>
        <div style={{
          ...fadeIn(300), marginTop: 30, padding: "20px 50px",
          background: "#111827", borderRadius: 50,
          fontSize: 34, fontWeight: 700, color: "#fafafa",
        }}>
          Your Dental Clinic
        </div>
      </div>
    </div>
  );
};
