import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
// PET GROOMING — THE ROUTINE
// Satisfying step-by-step grooming process with progress bar
// Audience: pet owners — normalizes regular grooming as essential care
// Style: clean, warm, ASMR-adjacent text pacing

const COLORS = {
  bg: "#1a1612",
  cream: "#f5efe6",
  accent: "#c67b4e",
  gold: "#d4a853",
  sage: "#7a9e7e",
  warmWhite: "#ede6dc",
  dimText: "#8a7e72",
};

const STEPS = [
  { icon: "🛁", label: "Warm bath", detail: "Hypoallergenic shampoo, 38°C", color: "#5b9bd5" },
  { icon: "✂️", label: "Brush & de-mat", detail: "Gentle, section by section", color: COLORS.accent },
  { icon: "💅", label: "Nail trim", detail: "Quick-safe, no stress", color: COLORS.gold },
  { icon: "👂", label: "Ear cleaning", detail: "Check for infection early", color: COLORS.sage },
  { icon: "🎀", label: "Finish & fluff", detail: "Blow-dry, bandana, done", color: "#d4748a" },
];

export const PetGroom_Routine: React.FC = () => {
  const frame = useCurrentFrame();

  const fadeIn = (s: number, d = 12) => ({
    opacity: interpolate(frame, [s, s + d], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    transform: `translateY(${interpolate(frame, [s, s + d], [20, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })}px)`,
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

  // Progress bar
  const progressWidth = interpolate(frame, [80, 390], [0, 100], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.linear });

  // Current active step
  const activeStep = Math.floor(interpolate(frame, [80, 390], [0, 4.99], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }));

  return (
    <div style={{
      width: 1080, height: 1920,
      background: COLORS.bg,
      overflow: "hidden", position: "relative",
      fontFamily: "'Inter', sans-serif",
    }}>

      {/* ═══ SCENE 1: HOOK (0–75) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(0, 73),
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        padding: "200px 60px 400px", zIndex: 2,
      }}>
        <div style={{ ...fadeIn(5), fontSize: 42, color: COLORS.dimText, fontWeight: 600, letterSpacing: 3, marginBottom: 30 }}>
          WHAT ACTUALLY HAPPENS
        </div>
        <div style={{ ...slam(18), fontSize: 76, color: COLORS.cream, fontWeight: 800, textAlign: "center", lineHeight: 1.2 }}>
          during a professional
        </div>
        <div style={{ ...slam(35), fontSize: 76, color: COLORS.gold, fontWeight: 800, textAlign: "center", lineHeight: 1.2, fontStyle: "italic" }}>
          grooming session.
        </div>
        <div style={{ ...fadeIn(55), fontSize: 36, color: COLORS.dimText, marginTop: 30, textAlign: "center" }}>
          5 steps. 60 minutes. A different dog walks out.
        </div>
      </div>

      {/* ═══ SCENE 2: THE STEPS (80–395) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(78, 393),
        display: "flex", flexDirection: "column",
        padding: "160px 60px 300px", zIndex: 2,
      }}>
        {/* Progress bar */}
        <div style={{
          width: "100%", height: 6, background: "rgba(255,255,255,0.08)",
          borderRadius: 3, marginBottom: 50, overflow: "hidden",
        }}>
          <div style={{
            width: `${progressWidth}%`, height: "100%",
            background: `linear-gradient(90deg, ${COLORS.accent}, ${COLORS.gold})`,
            borderRadius: 3,
            transition: "width 0.1s",
          }} />
        </div>

        <div style={{ fontSize: 30, color: COLORS.dimText, fontWeight: 600, letterSpacing: 3, marginBottom: 40 }}>
          THE GROOM
        </div>

        {/* Step list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {STEPS.map((step, i) => {
            const stepStart = 85 + i * 62;
            const isActive = i === activeStep && frame >= 80;
            const isPast = i < activeStep && frame >= 80;
            const isFuture = i > activeStep || frame < 80;

            return (
              <div key={i} style={{
                ...fadeIn(stepStart),
                display: "flex", alignItems: "center", gap: 24,
                padding: "28px 32px",
                background: isActive ? "rgba(255,255,255,0.06)" : "transparent",
                borderRadius: 20,
                borderLeft: isActive ? `4px solid ${step.color}` : "4px solid transparent",
                transition: "all 0.3s",
              }}>
                {/* Step number / check */}
                <div style={{
                  width: 64, height: 64, borderRadius: "50%",
                  background: isPast ? step.color : isActive ? `${step.color}22` : "rgba(255,255,255,0.04)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: isPast ? 28 : 36, flexShrink: 0,
                  color: isPast ? "#fff" : undefined,
                  fontWeight: 700,
                }}>
                  {isPast ? "✓" : step.icon}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{
                    fontSize: 40, fontWeight: 700,
                    color: isFuture ? COLORS.dimText : COLORS.cream,
                  }}>
                    {step.label}
                  </div>
                  {isActive && (
                    <div style={{
                      ...fadeIn(stepStart + 8, 8),
                      fontSize: 30, color: step.color, marginTop: 6, fontWeight: 500,
                    }}>
                      {step.detail}
                    </div>
                  )}
                </div>

                {/* Time indicator */}
                {isActive && (
                  <div style={{
                    ...fadeIn(stepStart + 12, 8),
                    fontSize: 26, color: COLORS.dimText, fontWeight: 600,
                  }}>
                    {["10 min", "15 min", "5 min", "5 min", "10 min"][i]}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ═══ SCENE 3: CTA (400–540) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(398, 540),
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", padding: "300px 60px 500px", zIndex: 2,
      }}>
        <div style={{ ...fadeIn(402), fontSize: 48, color: COLORS.dimText, fontWeight: 600, letterSpacing: 2 }}>
          THEY CAN'T TELL YOU
        </div>
        <div style={{ ...slam(420), fontSize: 72, color: COLORS.cream, fontWeight: 800, textAlign: "center", marginTop: 10, lineHeight: 1.2 }}>
          they need a groom.
        </div>
        <div style={{ ...fadeIn(445), fontSize: 44, color: COLORS.gold, fontWeight: 600, textAlign: "center", marginTop: 20, fontStyle: "italic" }}>
          But you can see it.
        </div>
        <div style={{
          ...fadeIn(470), marginTop: 50, padding: "22px 60px",
          border: `2px solid ${COLORS.accent}`, borderRadius: 50,
          fontSize: 36, fontWeight: 700, color: COLORS.cream,
        }}>
          Book every 4–6 weeks
        </div>
        <div style={{
          ...fadeIn(490), marginTop: 20,
          fontSize: 30, color: COLORS.dimText,
        }}>
          YOUR SALON NAME
        </div>
      </div>
    </div>
  );
};
