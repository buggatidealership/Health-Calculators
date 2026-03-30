import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
// PET GROOMING — TRANSFORMATION REVEAL
// Dramatic before→after with wipe transition
// Audience: pet owners considering grooming services
// Hook: scruffy pet name → satisfying reveal → CTA

const COLORS = {
  bg: "#faf7f2",
  dark: "#1a1612",
  accent: "#c67b4e",
  gold: "#d4a853",
  sage: "#7a9e7e",
  warmGray: "#b8a99a",
  cream: "#f5efe6",
};

export const PetGroom_Transform: React.FC = () => {
  const frame = useCurrentFrame();

  const slam = (s: number, d = 6) => ({
    transform: `scale(${interpolate(frame, [s, s + d], [1.6, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })})`,
    opacity: interpolate(frame, [s, s + 3], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
  });

  const fadeIn = (s: number, d = 12) => ({
    opacity: interpolate(frame, [s, s + d], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    transform: `translateY(${interpolate(frame, [s, s + d], [24, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })}px)`,
  });

  const vis = (s: number, e: number) => {
    if (frame < s || frame > e + 10) return 0;
    return Math.min(
      interpolate(frame, [s, s + 8], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
      interpolate(frame, [e, e + 10], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
    );
  };

  // Wipe reveal at scene transition
  const wipeProgress = interpolate(frame, [140, 165], [0, 100], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.inOut(Easing.cubic) });

  // Paw print trail animation
  const pawTrail = (index: number) => {
    const start = 170 + index * 8;
    return {
      opacity: interpolate(frame, [start, start + 6], [0, 0.15], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
      transform: `scale(${interpolate(frame, [start, start + 6], [0.5, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })})`,
    };
  };

  return (
    <div style={{
      width: 1080, height: 1920,
      background: COLORS.bg,
      overflow: "hidden", position: "relative",
      fontFamily: "'Inter', sans-serif",
    }}>

      {/* Subtle texture grain */}
      <div style={{
        position: "absolute", inset: 0,
        background: "repeating-conic-gradient(rgba(0,0,0,0.01) 0% 25%, transparent 0% 50%)",
        backgroundSize: "4px 4px",
        zIndex: 1,
      }} />

      {/* ═══ SCENE 1: THE HOOK (0–135) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(0, 133),
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        padding: "200px 60px 400px", zIndex: 2,
      }}>
        {/* Tangled fur icon */}
        <div style={{
          ...fadeIn(5), fontSize: 120, marginBottom: 40,
          filter: "grayscale(0.3)",
        }}>
          🐕
        </div>

        <div style={{ ...slam(15), fontSize: 74, color: COLORS.dark, fontWeight: 800, textAlign: "center", lineHeight: 1.2 }}>
          Your dog after
        </div>
        <div style={{ ...slam(30), fontSize: 74, color: COLORS.dark, fontWeight: 800, textAlign: "center", lineHeight: 1.2, marginTop: 10 }}>
          3 weeks without
        </div>
        <div style={{ ...slam(45), fontSize: 74, color: COLORS.accent, fontWeight: 800, textAlign: "center", lineHeight: 1.2, marginTop: 10, fontStyle: "italic" }}>
          a groom.
        </div>

        {/* Visual list of problems */}
        <div style={{ marginTop: 60, display: "flex", flexDirection: "column", gap: 18 }}>
          {["Matted fur trapping moisture", "Nails curling into paw pads", "Skin irritation hidden underneath"].map((item, i) => (
            <div key={i} style={{
              ...fadeIn(70 + i * 15),
              fontSize: 38, color: COLORS.warmGray, fontWeight: 500,
              display: "flex", alignItems: "center", gap: 16,
            }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: COLORS.accent, flexShrink: 0 }} />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* ═══ WIPE TRANSITION (140–165) ═══ */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 5,
        background: `linear-gradient(to right, ${COLORS.accent} 0%, ${COLORS.gold} 100%)`,
        clipPath: `inset(0 ${100 - wipeProgress}% 0 0)`,
        opacity: interpolate(frame, [140, 150, 160, 170], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
      }} />

      {/* ═══ SCENE 2: THE REVEAL (170–360) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(168, 358),
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        padding: "200px 60px 400px", zIndex: 2,
        background: COLORS.cream,
      }}>
        {/* Paw prints scattered */}
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} style={{
            position: "absolute",
            left: `${15 + i * 17}%`, top: `${20 + (i % 3) * 25}%`,
            fontSize: 48, ...pawTrail(i),
            transform: `${(pawTrail(i).transform || "")} rotate(${-15 + i * 12}deg)`,
          }}>
            🐾
          </div>
        ))}

        <div style={{
          ...slam(175), fontSize: 120, marginBottom: 30,
        }}>
          ✨
        </div>

        <div style={{ ...slam(180), fontSize: 80, color: COLORS.dark, fontWeight: 900, textAlign: "center", lineHeight: 1.15 }}>
          Same dog.
        </div>
        <div style={{ ...fadeIn(200), fontSize: 80, color: COLORS.sage, fontWeight: 900, textAlign: "center", lineHeight: 1.15, marginTop: 10 }}>
          New energy.
        </div>

        <div style={{ marginTop: 50, display: "flex", flexDirection: "column", gap: 18 }}>
          {["Coat brushed & de-matted", "Nails trimmed to proper length", "Ears cleaned, skin checked"].map((item, i) => (
            <div key={i} style={{
              ...fadeIn(225 + i * 18),
              fontSize: 38, color: COLORS.dark, fontWeight: 500,
              display: "flex", alignItems: "center", gap: 16,
            }}>
              <div style={{ width: 28, height: 28, borderRadius: "50%", background: COLORS.sage, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 16, fontWeight: 700 }}>✓</div>
              {item}
            </div>
          ))}
        </div>

        <div style={{
          ...fadeIn(300), marginTop: 50,
          fontSize: 34, color: COLORS.warmGray, fontStyle: "italic", textAlign: "center",
        }}>
          "She came home and didn't stop wagging for an hour."
        </div>
      </div>

      {/* ═══ SCENE 3: CTA (365–480) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(363, 480),
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", padding: "300px 60px 500px",
        zIndex: 2, background: COLORS.dark,
      }}>
        <div style={{ ...fadeIn(368), fontSize: 56, color: COLORS.cream, fontWeight: 600, textAlign: "center", letterSpacing: 2 }}>
          GROOMING ISN'T COSMETIC.
        </div>
        <div style={{ ...slam(390), fontSize: 72, color: COLORS.gold, fontWeight: 800, textAlign: "center", marginTop: 20, fontStyle: "italic" }}>
          It's healthcare.
        </div>
        <div style={{
          ...fadeIn(420), marginTop: 50, padding: "22px 60px",
          background: COLORS.accent, borderRadius: 50,
          fontSize: 36, fontWeight: 700, color: "#fff",
        }}>
          Book a groom today
        </div>
        <div style={{
          ...fadeIn(440), marginTop: 20,
          fontSize: 30, color: "rgba(255,255,255,0.4)",
        }}>
          YOUR SALON NAME
        </div>
      </div>
    </div>
  );
};
