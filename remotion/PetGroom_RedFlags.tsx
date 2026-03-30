import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
// PET GROOMING — RED FLAGS
// "5 signs your dog needs a groomer NOW"
// Tension/Resolution: 5 signs load urgency → "preventive care" reframe releases it
// Convergence: "Grooming isn't cosmetic — it's preventive care"
// Style: dark with red accent pops, clinical urgency → warm resolution

const COLORS = {
  bg: "#141210",
  cream: "#f5efe6",
  red: "#d94f4f",
  accent: "#c67b4e",
  gold: "#d4a853",
  sage: "#7a9e7e",
  dimText: "#706862",
  cardBg: "rgba(255,255,255,0.03)",
};

const SIGNS = [
  { num: "01", sign: "Matted fur behind the ears", why: "Traps moisture → skin infection", severity: "high" },
  { num: "02", sign: "Nails clicking on the floor", why: "Overgrown → joint stress over time", severity: "high" },
  { num: "03", sign: "Scratching more than usual", why: "Could be skin, could be coat buildup", severity: "med" },
  { num: "04", sign: "Dull, greasy coat", why: "Oil buildup → bacteria breeding ground", severity: "med" },
  { num: "05", sign: "Scooting or licking paws", why: "Gland or hygiene issue — don't ignore", severity: "high" },
];

export const PetGroom_RedFlags: React.FC = () => {
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

  // Pulse for severity indicators
  const pulse = (s: number) => {
    const p = interpolate(frame, [s, s + 30], [0, Math.PI * 4], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
    return 0.7 + 0.3 * Math.sin(p);
  };

  // Danger bar fills as signs accumulate
  const dangerFill = interpolate(frame, [100, 430], [0, 100], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <div style={{
      width: 1080, height: 1920,
      background: COLORS.bg,
      overflow: "hidden", position: "relative",
      fontFamily: "'Inter', sans-serif",
    }}>

      {/* SCENE 1: HOOK (0–90) */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(0, 88),
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        padding: "200px 60px 400px", zIndex: 2,
      }}>
        <div style={{ ...fadeIn(5), fontSize: 38, color: COLORS.dimText, fontWeight: 600, letterSpacing: 4, textTransform: "uppercase" }}>
          Your dog won't tell you
        </div>
        <div style={{ ...slam(22), fontSize: 80, color: COLORS.cream, fontWeight: 800, textAlign: "center", lineHeight: 1.15, marginTop: 20 }}>
          5 signs they need
        </div>
        <div style={{ ...slam(40), fontSize: 80, color: COLORS.red, fontWeight: 800, textAlign: "center", lineHeight: 1.15, fontStyle: "italic" }}>
          a groomer. Now.
        </div>

        {/* Animated warning icon */}
        <div style={{
          ...fadeIn(60),
          marginTop: 50,
          width: 80, height: 80, borderRadius: "50%",
          border: `3px solid ${COLORS.red}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 40,
          opacity: pulse(60),
        }}>
          !
        </div>
      </div>

      {/* SCENE 2: THE 5 SIGNS (95–440) */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(93, 438),
        display: "flex", flexDirection: "column",
        padding: "140px 55px 260px", zIndex: 2,
      }}>
        {/* Danger meter */}
        <div style={{ marginBottom: 45 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
            <span style={{ fontSize: 24, color: COLORS.dimText, fontWeight: 600, letterSpacing: 3 }}>OVERDUE RISK</span>
            <span style={{ fontSize: 24, color: dangerFill > 60 ? COLORS.red : COLORS.dimText, fontWeight: 700 }}>
              {Math.round(dangerFill)}%
            </span>
          </div>
          <div style={{ width: "100%", height: 6, background: "rgba(255,255,255,0.06)", borderRadius: 3 }}>
            <div style={{
              width: `${dangerFill}%`, height: "100%",
              background: dangerFill > 60
                ? `linear-gradient(90deg, ${COLORS.accent}, ${COLORS.red})`
                : `linear-gradient(90deg, ${COLORS.sage}, ${COLORS.accent})`,
              borderRadius: 3,
            }} />
          </div>
        </div>

        {/* Sign cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {SIGNS.map((sign, i) => {
            const cardStart = 100 + i * 68;
            const isRevealed = frame >= cardStart;
            const isActive = frame >= cardStart && frame < cardStart + 68;

            return (
              <div key={i} style={{
                ...fadeIn(cardStart),
                background: isActive ? "rgba(255,255,255,0.05)" : COLORS.cardBg,
                borderRadius: 20,
                padding: "26px 30px",
                borderLeft: `4px solid ${sign.severity === "high" ? COLORS.red : COLORS.accent}`,
                display: "flex", alignItems: "flex-start", gap: 20,
              }}>
                {/* Number */}
                <div style={{
                  fontSize: 56, fontWeight: 800,
                  color: isRevealed ? (sign.severity === "high" ? COLORS.red : COLORS.accent) : COLORS.dimText,
                  lineHeight: 1, minWidth: 70,
                  opacity: isActive ? pulse(cardStart) : 1,
                }}>
                  {sign.num}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{
                    fontSize: 36, fontWeight: 700, color: COLORS.cream, lineHeight: 1.2,
                  }}>
                    {sign.sign}
                  </div>
                  {isActive && (
                    <div style={{
                      ...fadeIn(cardStart + 15, 10),
                      fontSize: 28, color: sign.severity === "high" ? COLORS.red : COLORS.accent,
                      marginTop: 8, fontWeight: 500, fontStyle: "italic",
                    }}>
                      {sign.why}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SCENE 3: CTA (445–540) — ritardando exit */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(443, 538),
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", padding: "300px 60px 500px", zIndex: 2,
      }}>
        <div style={{ ...fadeIn(448), fontSize: 42, color: COLORS.dimText, fontWeight: 600, letterSpacing: 2 }}>
          GROOMING ISN'T COSMETIC
        </div>
        <div style={{ ...slam(465), fontSize: 72, color: COLORS.cream, fontWeight: 800, textAlign: "center", marginTop: 15, lineHeight: 1.2 }}>
          It's preventive care.
        </div>
        <div style={{ ...fadeIn(488), fontSize: 40, color: COLORS.sage, fontWeight: 600, textAlign: "center", marginTop: 20, fontStyle: "italic" }}>
          Catch it early. Every 4–6 weeks.
        </div>
        <div style={{
          ...fadeIn(510), marginTop: 50, padding: "22px 60px",
          background: COLORS.red, borderRadius: 50,
          fontSize: 36, fontWeight: 700, color: "#fff",
        }}>
          Book their next groom
        </div>
        <div style={{
          ...fadeIn(525), marginTop: 20,
          fontSize: 28, color: COLORS.dimText, letterSpacing: 2,
        }}>
          YOUR SALON NAME
        </div>
      </div>
    </div>
  );
};
