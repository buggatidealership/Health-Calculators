import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
// PET GROOMING — SPA DAY TIMELINE
// Satisfying step-by-step grooming journey: drop-off → stages → pick-up text
// Audience: pet owners seeing the value of professional grooming
// Hook: "What happens to your dog after you drop them off?"
// CONVERGENCE: The pickup text message — every timeline step serves this moment

const C = {
  bg: "#faf7f2",
  dark: "#1a1612",
  accent: "#c67b4e",
  sage: "#7a9e7e",
  cream: "#f5efe6",
  warmGray: "#b8a99a",
  blush: "#e8c4b0",
  gold: "#d4a853",
};

const STEPS = [
  { time: "9:00 AM", label: "Check-in & assessment", icon: "📋", color: C.accent },
  { time: "9:15 AM", label: "Warm bath & deep clean", icon: "🛁", color: "#5b9bd5" },
  { time: "9:40 AM", label: "Blow-dry & de-mat", icon: "💨", color: C.warmGray },
  { time: "10:10 AM", label: "Nail trim & ear clean", icon: "✂️", color: C.sage },
  { time: "10:30 AM", label: "Styled & finished", icon: "✨", color: C.gold },
];

export const PetGroom_SpaDay: React.FC = () => {
  const frame = useCurrentFrame();

  const fadeIn = (s: number, d = 12) => ({
    opacity: interpolate(frame, [s, s + d], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    transform: `translateY(${interpolate(frame, [s, s + d], [24, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })}px)`,
  });

  const slam = (s: number, d = 6) => ({
    transform: `scale(${interpolate(frame, [s, s + d], [1.5, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })})`,
    opacity: interpolate(frame, [s, s + 3], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
  });

  const vis = (s: number, e: number) => {
    if (frame < s || frame > e + 10) return 0;
    return Math.min(
      interpolate(frame, [s, s + 8], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
      interpolate(frame, [e, e + 10], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
    );
  };

  // Progress bar for timeline scene
  const timelineProgress = interpolate(frame, [110, 310], [0, 100], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <div style={{
      width: 1080, height: 1920,
      background: C.bg,
      overflow: "hidden", position: "relative",
      fontFamily: "'Inter', sans-serif",
    }}>
      {/* Subtle texture */}
      <div style={{
        position: "absolute", inset: 0,
        background: "repeating-conic-gradient(rgba(0,0,0,0.01) 0% 25%, transparent 0% 50%)",
        backgroundSize: "4px 4px", zIndex: 1,
      }} />

      {/* ═══ SCENE 1: THE HOOK (0–95) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(0, 93),
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        padding: "200px 60px 400px", zIndex: 2,
      }}>
        <div style={{ ...fadeIn(5), fontSize: 100, marginBottom: 30 }}>🐕</div>

        <div style={{ ...slam(12), fontSize: 62, color: C.dark, fontWeight: 800, textAlign: "center", lineHeight: 1.2 }}>
          What happens
        </div>
        <div style={{ ...slam(28), fontSize: 62, color: C.dark, fontWeight: 800, textAlign: "center", lineHeight: 1.2, marginTop: 8 }}>
          to your dog
        </div>
        <div style={{ ...slam(44), fontSize: 62, color: C.accent, fontWeight: 800, textAlign: "center", lineHeight: 1.2, marginTop: 8, fontStyle: "italic" }}>
          after you drop them off?
        </div>

        <div style={{
          ...fadeIn(65), marginTop: 50,
          fontSize: 34, color: C.warmGray, textAlign: "center", fontWeight: 500,
        }}>
          A full spa day. Every time.
        </div>
      </div>

      {/* ═══ SCENE 2: TIMELINE (100–320) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(98, 318),
        display: "flex", flexDirection: "column",
        padding: "180px 60px 300px", zIndex: 2,
      }}>
        <div style={{ ...fadeIn(103), fontSize: 28, color: C.warmGray, fontWeight: 600, letterSpacing: 3, marginBottom: 45 }}>
          THE SPA DAY
        </div>

        {/* Progress line */}
        <div style={{ position: "relative", paddingLeft: 40 }}>
          <div style={{
            position: "absolute", left: 14, top: 0,
            width: 3,
            height: `${timelineProgress}%`,
            background: `linear-gradient(180deg, ${C.accent}, ${C.sage})`,
            borderRadius: 2,
          }} />

          {STEPS.map((step, i) => {
            const start = 115 + i * 40;
            return (
              <div key={i} style={{
                ...fadeIn(start),
                display: "flex", alignItems: "flex-start", gap: 24,
                marginBottom: 32, position: "relative",
              }}>
                <div style={{
                  position: "absolute", left: -34,
                  width: 18, height: 18, borderRadius: "50%",
                  background: step.color,
                  boxShadow: `0 0 10px ${step.color}50`,
                }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 26, color: step.color, fontWeight: 700, fontFamily: "'JetBrains Mono', monospace" }}>
                    {step.time}
                  </div>
                  <div style={{ fontSize: 40, color: C.dark, fontWeight: 600, marginTop: 6, lineHeight: 1.3 }}>
                    {step.label}
                  </div>
                </div>
                <div style={{ fontSize: 40, flexShrink: 0, marginTop: 8 }}>{step.icon}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ═══ SCENE 3: THE TEXT MESSAGE (325–430) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(323, 428),
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        padding: "200px 60px 400px", zIndex: 2,
        background: C.cream,
      }}>
        <div style={{ ...fadeIn(328), fontSize: 28, color: C.warmGray, fontWeight: 600, letterSpacing: 3, fontFamily: "'JetBrains Mono', monospace" }}>
          10:45 AM
        </div>

        <div style={{ ...fadeIn(340), fontSize: 50, marginTop: 20, marginBottom: 20 }}>📱</div>

        {/* Text message bubble */}
        <div style={{
          ...fadeIn(350),
          marginTop: 20, padding: "30px 40px",
          background: "#fff",
          borderRadius: 24, border: `1px solid ${C.blush}`,
          boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
          width: "85%",
        }}>
          <div style={{ fontSize: 26, color: C.warmGray, fontWeight: 600, marginBottom: 12 }}>
            Paws & Co Grooming
          </div>
          <div style={{ fontSize: 36, color: C.dark, fontWeight: 500, lineHeight: 1.4 }}>
            Buddy is ready for pickup! He had a bath, nail trim, ear clean & a fresh style. He was such a good boy today.
          </div>
        </div>

        <div style={{
          ...slam(390), marginTop: 40,
          fontSize: 56, color: C.sage, fontWeight: 800, textAlign: "center",
        }}>
          Ready in 2 hours.
        </div>
        <div style={{
          ...fadeIn(408),
          fontSize: 36, color: C.warmGray, fontWeight: 500, textAlign: "center", marginTop: 10,
        }}>
          Happier than when they arrived.
        </div>
      </div>

      {/* ═══ SCENE 4: CTA (435–540) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(433, 540),
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", padding: "300px 60px 500px",
        zIndex: 2, background: C.dark,
      }}>
        <div style={{ ...fadeIn(438), fontSize: 90, marginBottom: 20 }}>🐾</div>
        <div style={{ ...slam(448), fontSize: 52, color: C.cream, fontWeight: 600, textAlign: "center", letterSpacing: 1 }}>
          EVERY GROOM IS A SPA DAY.
        </div>
        <div style={{ ...fadeIn(465), fontSize: 40, color: C.gold, fontWeight: 600, textAlign: "center", marginTop: 15, fontStyle: "italic" }}>
          Not just a haircut.
        </div>
        <div style={{
          ...fadeIn(485), marginTop: 45, padding: "22px 60px",
          background: C.accent, borderRadius: 50,
          fontSize: 36, fontWeight: 700, color: "#fff",
        }}>
          Book a spa day
        </div>
        <div style={{ ...fadeIn(500), marginTop: 18, fontSize: 28, color: "rgba(255,255,255,0.4)" }}>
          YOUR SALON NAME
        </div>
      </div>
    </div>
  );
};
