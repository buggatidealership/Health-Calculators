import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

// REAL ESTATE — 3 THINGS TO KNOW BEFORE BUYING
// Light editorial, warm serif + clean sans, numbered cards
// 540 frames @ 30fps = 18s
// CONVERGENCE: Tip #3 — the unexpected one

const clamp = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };
const outCubic = Easing.out(Easing.cubic);

const BG = "#FAFAF7";
const INK = "#1A1A1A";
const WARM = "#B8860B";
const WARM_LIGHT = "rgba(184,134,11,0.08)";
const MID = "#6B7280";
const RULE = "rgba(26,26,26,0.08)";

const ease = (f: number, s: number, d: number, from: number, to: number, fn = outCubic) =>
  interpolate(f, [s, s + d], [from, to], { ...clamp, easing: fn });

const fadeUp = (f: number, s: number, d = 15) => ({
  opacity: ease(f, s, d, 0, 1),
  transform: `translateY(${ease(f, s, d, 30, 0)}px)`,
});

const vis = (f: number, s: number, e: number) => {
  if (f < s - 2) return { opacity: 0, pointerEvents: "none" as const };
  return {
    opacity: Math.min(
      interpolate(f, [s, s + 10], [0, 1], clamp),
      e < 540 ? interpolate(f, [e, e + 12], [1, 0], clamp) : 1
    ),
  };
};

export const RE_BuyerTips: React.FC = () => {
  const frame = useCurrentFrame();

  const progress = interpolate(frame, [0, 540], [0, 100], clamp);

  return (
    <div style={{
      width: 1080, height: 1920,
      background: BG,
      overflow: "hidden",
      position: "relative",
      fontFamily: "'Inter', -apple-system, sans-serif",
    }}>

      {/* Progress bar — top */}
      <div style={{
        position: "absolute", top: 0, left: 0,
        width: `${progress}%`, height: 4, background: WARM, zIndex: 50,
      }} />

      {/* Subtle texture */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: `radial-gradient(ellipse at 30% 30%, ${WARM_LIGHT} 0%, transparent 50%)`,
      }} />

      {/* ═══ SCENE 1 (0–85): Hook ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        padding: "0 80px",
        ...vis(frame, 0, 80),
      }}>
        <div style={{
          ...fadeUp(frame, 8),
          fontSize: 30, color: WARM, letterSpacing: 8,
          textTransform: "uppercase", fontWeight: 500, marginBottom: 20,
        }}>
          First-Time Buyer?
        </div>
        <div style={{
          ...fadeUp(frame, 22),
          fontSize: 64, color: INK, fontWeight: 600,
          fontFamily: "'Georgia', 'Times New Roman', serif",
          textAlign: "center", lineHeight: 1.3,
        }}>
          3 things your agent{"\n"}should have told you.
        </div>
        <div style={{
          ...fadeUp(frame, 50),
          width: 50, height: 2, background: RULE, marginTop: 30,
        }} />
      </div>

      {/* ═══ SCENE 2 (85–195): Tip 1 ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        justifyContent: "center", padding: "0 80px",
        ...vis(frame, 85, 190),
      }}>
        {/* Large background number */}
        <div style={{
          position: "absolute", right: 60, top: 250,
          fontSize: 400, fontWeight: 800, color: INK,
          opacity: ease(frame, 90, 15, 0, 0.06),
          transform: `scale(${ease(frame, 90, 25, 2.5, 1, Easing.out(Easing.exp))})`,
          lineHeight: 1, fontFamily: "'Georgia', 'Times New Roman', serif",
        }}>1</div>

        <div style={{
          ...fadeUp(frame, 93),
          width: 48, height: 48, borderRadius: "50%", background: WARM,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 22, color: "#fff", fontWeight: 600, marginBottom: 30,
        }}>1</div>
        <div style={{
          ...fadeUp(frame, 103),
          fontSize: 52, color: INK, fontWeight: 600,
          fontFamily: "'Georgia', 'Times New Roman', serif", lineHeight: 1.3, maxWidth: 800,
        }}>
          Get pre-approved.{"\n"}Not pre-qualified.
        </div>
        <div style={{
          ...fadeUp(frame, 115),
          width: 50, height: 2, background: WARM, margin: "25px 0", opacity: 0.5,
        }} />
        <div style={{
          ...fadeUp(frame, 123),
          fontSize: 30, color: MID, lineHeight: 1.6, maxWidth: 780, fontWeight: 400,
        }}>
          Pre-qualification is a guess. Pre-approval is a commitment. Sellers take you seriously only with the second one.
        </div>
      </div>

      {/* ═══ SCENE 3 (195–310): Tip 2 ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        justifyContent: "center", padding: "0 80px",
        ...vis(frame, 195, 305),
      }}>
        <div style={{
          position: "absolute", right: 60, top: 250,
          fontSize: 400, fontWeight: 800, color: INK,
          opacity: ease(frame, 200, 15, 0, 0.06),
          transform: `scale(${ease(frame, 200, 25, 2.5, 1, Easing.out(Easing.exp))})`,
          lineHeight: 1, fontFamily: "'Georgia', 'Times New Roman', serif",
        }}>2</div>

        <div style={{
          ...fadeUp(frame, 203),
          width: 48, height: 48, borderRadius: "50%", background: WARM,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 22, color: "#fff", fontWeight: 600, marginBottom: 30,
        }}>2</div>
        <div style={{
          ...fadeUp(frame, 213),
          fontSize: 52, color: INK, fontWeight: 600,
          fontFamily: "'Georgia', 'Times New Roman', serif", lineHeight: 1.3, maxWidth: 800,
        }}>
          Visit the neighborhood{"\n"}at 10 PM.
        </div>
        <div style={{
          ...fadeUp(frame, 225),
          width: 50, height: 2, background: WARM, margin: "25px 0", opacity: 0.5,
        }} />
        <div style={{
          ...fadeUp(frame, 233),
          fontSize: 30, color: MID, lineHeight: 1.6, maxWidth: 780, fontWeight: 400,
        }}>
          Daytime showings hide everything. The street at night tells you about noise, parking, safety, and who your neighbors really are.
        </div>
      </div>

      {/* ═══ SCENE 4 (310–435): Tip 3 — the unexpected one ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        justifyContent: "center", padding: "0 80px",
        ...vis(frame, 310, 430),
      }}>
        <div style={{
          position: "absolute", right: 60, top: 250,
          fontSize: 400, fontWeight: 800, color: INK,
          opacity: ease(frame, 315, 15, 0, 0.06),
          transform: `scale(${ease(frame, 315, 25, 2.5, 1, Easing.out(Easing.exp))})`,
          lineHeight: 1, fontFamily: "'Georgia', 'Times New Roman', serif",
        }}>3</div>

        <div style={{
          ...fadeUp(frame, 318),
          width: 48, height: 48, borderRadius: "50%", background: WARM,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 22, color: "#fff", fontWeight: 600, marginBottom: 30,
        }}>3</div>
        <div style={{
          ...fadeUp(frame, 328),
          fontSize: 52, color: INK, fontWeight: 600,
          fontFamily: "'Georgia', 'Times New Roman', serif", lineHeight: 1.3, maxWidth: 800,
        }}>
          Your agent should{"\n"}say no to you.
        </div>
        <div style={{
          ...fadeUp(frame, 340),
          width: 50, height: 2, background: WARM, margin: "25px 0", opacity: 0.5,
        }} />
        <div style={{
          ...fadeUp(frame, 348),
          fontSize: 30, color: MID, lineHeight: 1.6, maxWidth: 780, fontWeight: 400,
        }}>
          If your agent agrees with every offer you want to make, they're not protecting you. A good agent talks you out of bad decisions.
        </div>
        <div style={{
          ...fadeUp(frame, 380),
          fontSize: 24, color: WARM, fontStyle: "italic", fontWeight: 400, marginTop: 25,
        }}>
          This is the one most people learn the hard way.
        </div>
      </div>

      {/* ═══ SCENE 5 (435–540): CTA ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        padding: "0 80px",
        ...vis(frame, 435, 540),
      }}>
        <div style={{
          ...fadeUp(frame, 440),
          fontSize: 44, color: INK,
          fontFamily: "'Georgia', 'Times New Roman', serif",
          fontWeight: 600, textAlign: "center", lineHeight: 1.35,
        }}>
          I tell my clients the truth.{"\n"}Even the hard parts.
        </div>
        <div style={{
          ...fadeUp(frame, 465),
          width: 50, height: 2, background: WARM, margin: "30px 0", opacity: 0.5,
        }} />
        <div style={{
          ...fadeUp(frame, 475),
          fontSize: 28, color: WARM, fontWeight: 500, letterSpacing: 1,
        }}>
          Sarah Mitchell
        </div>
        <div style={{
          ...fadeUp(frame, 488),
          fontSize: 22, color: MID, marginTop: 8,
        }}>
          Licensed Realtor  |  Westwood Heights
        </div>
        <div style={{
          ...fadeUp(frame, 505),
          marginTop: 30, padding: "14px 38px",
          background: WARM, borderRadius: 28,
          fontSize: 22, color: "#fff", letterSpacing: 3,
          textTransform: "uppercase", fontWeight: 500,
        }}>
          Follow for More
        </div>
      </div>

      {/* Soft paper vignette */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse at 50% 50%, transparent 60%, rgba(0,0,0,0.02) 100%)",
      }} />
    </div>
  );
};
