import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
// PET GROOMING — PRICE BREAKDOWN
// "What a €45 groom actually includes"
// Revelation (#3): each line item constructs the context for €45 to feel cheap
// Convergence: the €45 slam after 85 minutes of itemized care
// Style: premium receipt aesthetic, dark with gold accents

const COLORS = {
  bg: "#121110",
  cream: "#f5efe6",
  gold: "#d4a853",
  accent: "#c67b4e",
  sage: "#7a9e7e",
  dimText: "#706862",
  line: "rgba(255,255,255,0.06)",
};

const ITEMS = [
  { service: "Warm bath + blow-dry", time: "20 min", value: "Hypoallergenic, coat-specific" },
  { service: "Full brush & de-mat", time: "15 min", value: "Prevents painful tangles" },
  { service: "Breed-specific cut", time: "25 min", value: "Not a buzz — a shape" },
  { service: "Nail trim + file", time: "10 min", value: "Joint health, floor grip" },
  { service: "Ear clean + check", time: "5 min", value: "Catches infection early" },
  { service: "Sanitary trim", time: "5 min", value: "Hygiene, comfort" },
  { service: "Teeth check + gland", time: "5 min", value: "Health screen, included" },
];

export const PetGroom_Pricing: React.FC = () => {
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

  // Running total animation
  const totalMinutes = interpolate(frame, [110, 460], [0, 85], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const revealedItems = Math.floor(interpolate(frame, [110, 460], [0, 6.99], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }));

  return (
    <div style={{
      width: 1080, height: 1920,
      background: COLORS.bg,
      overflow: "hidden", position: "relative",
      fontFamily: "'Inter', sans-serif",
    }}>

      {/* SCENE 1: HOOK (0–100) */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(0, 98),
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        padding: "200px 60px 400px", zIndex: 2,
      }}>
        <div style={{ ...fadeIn(5), fontSize: 38, color: COLORS.dimText, fontWeight: 600, letterSpacing: 3 }}>
          "€45 FOR A HAIRCUT?!"
        </div>
        <div style={{
          ...slam(25), marginTop: 30,
          fontSize: 76, color: COLORS.cream, fontWeight: 800, textAlign: "center", lineHeight: 1.15,
        }}>
          Let me break down
        </div>
        <div style={{
          ...slam(42), fontSize: 76, color: COLORS.gold, fontWeight: 800, textAlign: "center", lineHeight: 1.15, fontStyle: "italic",
        }}>
          what you're paying for.
        </div>
        <div style={{
          ...fadeIn(65), marginTop: 40, display: "flex", gap: 15, alignItems: "center",
        }}>
          <div style={{ width: 50, height: 2, background: COLORS.gold }} />
          <span style={{ fontSize: 30, color: COLORS.dimText, fontWeight: 500 }}>hint: it's not a haircut</span>
          <div style={{ width: 50, height: 2, background: COLORS.gold }} />
        </div>
      </div>

      {/* SCENE 2: THE RECEIPT (105–465) */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(103, 463),
        display: "flex", flexDirection: "column",
        padding: "130px 50px 220px", zIndex: 2,
      }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 35 }}>
          <span style={{ fontSize: 28, color: COLORS.dimText, fontWeight: 600, letterSpacing: 3 }}>FULL GROOM RECEIPT</span>
          <span style={{ fontSize: 28, color: COLORS.gold, fontWeight: 700 }}>
            {Math.round(totalMinutes)} min
          </span>
        </div>

        {/* Divider */}
        <div style={{ width: "100%", height: 1, background: COLORS.line, marginBottom: 20 }} />

        {/* Line items */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {ITEMS.map((item, i) => {
            const itemStart = 110 + i * 50;
            const isActive = i === revealedItems && frame >= 110;
            const isRevealed = i <= revealedItems;

            return (
              <div key={i} style={{
                ...fadeIn(itemStart),
                padding: "20px 24px",
                background: isActive ? "rgba(255,255,255,0.04)" : "transparent",
                borderRadius: 14,
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{
                    fontSize: 34, fontWeight: 700,
                    color: isRevealed ? COLORS.cream : COLORS.dimText,
                  }}>
                    {item.service}
                  </span>
                  <span style={{
                    fontSize: 28, fontWeight: 600,
                    color: COLORS.gold, minWidth: 90, textAlign: "right",
                  }}>
                    {item.time}
                  </span>
                </div>
                {isActive && (
                  <div style={{
                    ...fadeIn(itemStart + 12, 8),
                    fontSize: 26, color: COLORS.accent, marginTop: 6, fontStyle: "italic",
                  }}>
                    {item.value}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Total divider */}
        {frame > 455 && (
          <div style={{
            ...fadeIn(456, 8),
            width: "100%", height: 2, background: COLORS.gold, marginTop: 20,
          }} />
        )}
      </div>

      {/* SCENE 3: THE REFRAME (470–540) — convergence moment */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(468, 538),
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", padding: "280px 60px 480px", zIndex: 2,
      }}>
        <div style={{ ...fadeIn(472), fontSize: 36, color: COLORS.dimText, fontWeight: 600, letterSpacing: 2 }}>
          7 SERVICES • 85 MINUTES
        </div>
        <div style={{
          ...slam(490), fontSize: 120, color: COLORS.gold, fontWeight: 800, marginTop: 10,
        }}>
          €45
        </div>
        <div style={{
          ...fadeIn(505), fontSize: 44, color: COLORS.cream, fontWeight: 700, textAlign: "center", marginTop: 15, lineHeight: 1.3,
        }}>
          It's not a haircut.
        </div>
        <div style={{
          ...slam(518), fontSize: 44, color: COLORS.sage, fontWeight: 700, textAlign: "center", fontStyle: "italic",
        }}>
          It's a health check in disguise.
        </div>
        <div style={{
          ...fadeIn(532), marginTop: 30,
          fontSize: 28, color: COLORS.dimText, letterSpacing: 2,
        }}>
          YOUR SALON NAME
        </div>
      </div>
    </div>
  );
};
