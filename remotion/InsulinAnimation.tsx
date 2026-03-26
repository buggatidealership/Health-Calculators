import React from "react";
import {
  useCurrentFrame,
  interpolate,
  Easing,
} from "remotion";

// --- Design tokens ---
const C = {
  bg: "#0a0f1a",
  text: "#E0E0E0",
  textSecondary: "#8a919e",
  dim: "#3a4050",
  red: "#e8785e",
  green: "#6ec89b",
  accent: "#e89b3e",
  teal: "#0e7a7e",
  white: "#ffffff",
  danger: "#dc2626",
  warning: "#f59e0b",
};

const F = {
  serif: "'DM Serif Display', Georgia, serif",
  sans: "'Inter', -apple-system, sans-serif",
  mono: "'JetBrains Mono', 'SF Mono', monospace",
};

// 30s at 30fps = 900 frames
const T = {
  // Scene 1: The lab result (0-5s)
  s1Start: 0,
  s1End: 150,
  // Scene 2: The reframe — "Normal means..." (5-9.5s)
  s2Start: 158,
  s2End: 285,
  // Scene 3: The mechanism — spectrum visualization (9.5-20s)
  s3Start: 293,
  s3End: 600,
  // Scene 4: The clinical truth (20-25s)
  s4Start: 608,
  s4End: 750,
  // Scene 5: Brand hit (25-30s)
  s5Start: 758,
  s5End: 900,
};

function fadeUp(frame: number, start: number, dur: number = 14) {
  const o = interpolate(frame, [start, start + dur], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const y = interpolate(frame, [start, start + dur], [45, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });
  return { opacity: o, transform: `translateY(${y}px)` };
}

function sceneVis(frame: number, start: number, end: number) {
  if (frame < start - 5 || frame > end + 15) return 0;
  const fadeIn = interpolate(frame, [start, start + 10], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [end - 8, end + 10], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return Math.min(fadeIn, fadeOut);
}

export const InsulinAnimation: React.FC = () => {
  const frame = useCurrentFrame();

  const dotPulse = 1 + 0.15 * Math.sin(frame * 0.12);
  const dotOpacity = interpolate(frame, [T.s5Start, T.s5Start + 20], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <div style={{
      width: 2160, height: 2160,
      background: C.bg,
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      fontFamily: F.sans, overflow: "hidden", position: "relative",
    }}>
      {/* Film grain */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.4, pointerEvents: "none", zIndex: 100,
        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
      }} />

      {/* ═══ SCENE 1: The Lab Result ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        opacity: sceneVis(frame, T.s1Start, T.s1End), padding: 100,
      }}>
        {/* Small clinical header */}
        <div style={{
          ...fadeUp(frame, 5, 16),
          fontFamily: F.mono, fontSize: 56, color: C.dim,
          letterSpacing: 10, textTransform: "uppercase", marginBottom: 80,
        }}>
          FASTING INSULIN
        </div>

        {/* Big number */}
        <div style={{
          ...fadeUp(frame, 25, 18),
          fontFamily: F.mono, fontSize: 280, fontWeight: 700,
          color: C.white, letterSpacing: -8, lineHeight: 1,
        }}>
          18
        </div>
        <div style={{
          ...fadeUp(frame, 35, 14),
          fontFamily: F.mono, fontSize: 80, color: C.textSecondary,
          marginTop: 10,
        }}>
          µIU/mL
        </div>

        {/* Normal stamp — slams in */}
        {frame >= 65 && (() => {
          const stampScale = interpolate(frame, [65, 72], [3, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });
          const stampOpacity = interpolate(frame, [65, 70], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          return (
            <div style={{
              marginTop: 60, opacity: stampOpacity,
              transform: `scale(${stampScale}) rotate(-3deg)`,
              border: `6px solid ${C.green}`, borderRadius: 16,
              padding: "20px 56px", color: C.green,
              fontSize: 76, fontWeight: 800, letterSpacing: 6,
              fontFamily: F.mono,
            }}>
              NORMAL ✓
            </div>
          );
        })()}

        {/* Reference range note */}
        <div style={{
          ...fadeUp(frame, 90, 14),
          fontFamily: F.mono, fontSize: 48, color: C.dim,
          marginTop: 50,
        }}>
          Reference range: 2.0 – 25.0 µIU/mL
        </div>
      </div>

      {/* ═══ SCENE 2: The Reframe ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        opacity: sceneVis(frame, T.s2Start, T.s2End), padding: 100,
      }}>
        <div style={{
          ...fadeUp(frame, T.s2Start + 5, 18),
          fontSize: 108, color: C.textSecondary, fontWeight: 300,
          fontFamily: F.serif, textAlign: "center", lineHeight: 1.4,
        }}>
          "Normal" means you're inside
        </div>
        <div style={{
          ...fadeUp(frame, T.s2Start + 25, 18),
          fontSize: 120, color: C.white, fontWeight: 600,
          fontFamily: F.serif, textAlign: "center", lineHeight: 1.4,
          marginTop: 20,
        }}>
          a statistical bell curve.
        </div>

        {/* Beat drop pause — 1.5s — then the punch */}
        <div style={{
          ...fadeUp(frame, T.s2Start + 70, 18),
          fontSize: 132, color: C.red, fontWeight: 600,
          fontFamily: F.serif, fontStyle: "italic", textAlign: "center",
          marginTop: 80, lineHeight: 1.3,
        }}>
          Not that you're healthy.
        </div>
      </div>

      {/* ═══ SCENE 3: The Mechanism — Insulin Spectrum ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        opacity: sceneVis(frame, T.s3Start, T.s3End), padding: 80,
      }}>
        {/* Header */}
        <div style={{
          ...fadeUp(frame, T.s3Start + 5, 14),
          fontSize: 72, color: C.dim, fontFamily: F.mono,
          letterSpacing: 6, textTransform: "uppercase", marginBottom: 60,
        }}>
          WHAT YOUR CELLS SEE
        </div>

        {/* Spectrum bar */}
        <div style={{
          width: 1800, height: 80, borderRadius: 40,
          background: `linear-gradient(90deg, ${C.green} 0%, ${C.accent} 40%, ${C.red} 75%, ${C.danger} 100%)`,
          position: "relative", marginBottom: 40,
          ...fadeUp(frame, T.s3Start + 20, 18),
        }}>
          {/* Current position marker */}
          {frame >= T.s3Start + 50 && (() => {
            const markerX = interpolate(frame, [T.s3Start + 50, T.s3Start + 70], [0, 68], {
              extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic),
            });
            return (
              <div style={{
                position: "absolute", left: `${markerX}%`, top: -30,
                transform: "translateX(-50%)",
                display: "flex", flexDirection: "column", alignItems: "center",
              }}>
                <div style={{
                  fontSize: 64, fontWeight: 700, fontFamily: F.mono, color: C.white,
                  textShadow: `0 0 30px ${C.bg}`,
                }}>
                  18
                </div>
                <div style={{
                  width: 6, height: 50, background: C.white, borderRadius: 3,
                  marginTop: 5, boxShadow: `0 0 15px ${C.white}40`,
                }} />
              </div>
            );
          })()}
        </div>

        {/* Scale labels */}
        <div style={{
          ...fadeUp(frame, T.s3Start + 30, 14),
          width: 1800, display: "flex", justifyContent: "space-between",
          fontFamily: F.mono, fontSize: 52, marginBottom: 80,
        }}>
          <span style={{ color: C.green }}>2</span>
          <span style={{ color: C.accent }}>10</span>
          <span style={{ color: C.red }}>20</span>
          <span style={{ color: C.danger }}>25+</span>
        </div>

        {/* Three zones — each takes the full space, replaces the previous */}
        {[
          {
            label: "Below 5",
            unit: "µIU/mL",
            title: "Insulin sensitive",
            desc: "Cells respond on first signal.",
            sub: "Pancreas barely works.",
            color: C.green,
            delay: 60,
          },
          {
            label: "8 – 15",
            unit: "µIU/mL",
            title: "Compensation zone",
            desc: "Cells resist. Pancreas pumps harder",
            sub: "to get the same result.",
            color: C.accent,
            delay: 120,
          },
          {
            label: "15 – 25",
            unit: "µIU/mL",
            title: '"Normal." Metabolically loud.',
            desc: "Pancreas is shouting.",
            sub: "Cells barely listen. Labs say you're fine.",
            color: C.red,
            delay: 180,
          },
        ].map((zone, i) => {
          const entryFrame = T.s3Start + zone.delay;
          const exitFrame = i < 2 ? T.s3Start + [60, 120, 180][i + 1] - 8 : T.s3End;
          if (frame < entryFrame || frame > exitFrame + 15) return null;

          const entryVis = interpolate(frame, [entryFrame, entryFrame + 14], [0, 1], {
            extrapolateLeft: "clamp", extrapolateRight: "clamp",
          });
          const exitVis = interpolate(frame, [exitFrame, exitFrame + 12], [1, 0], {
            extrapolateLeft: "clamp", extrapolateRight: "clamp",
          });
          const vis = Math.min(entryVis, exitVis);
          const y = interpolate(frame, [entryFrame, entryFrame + 14], [50, 0], {
            extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic),
          });

          return (
            <div key={i} style={{
              opacity: vis,
              transform: `translateY(${y}px)`,
              width: 1800, padding: "50px 70px",
              borderLeft: `10px solid ${zone.color}`,
              background: `${zone.color}08`,
              borderRadius: 24,
            }}>
              <div style={{
                fontSize: 108, fontWeight: 700, fontFamily: F.mono, color: zone.color,
                marginBottom: 8,
              }}>
                {zone.label} <span style={{ fontSize: 64, color: C.dim }}>{zone.unit}</span>
              </div>
              <div style={{
                fontSize: 80, fontWeight: 600, color: C.text,
                marginBottom: 20, fontFamily: F.serif,
              }}>
                {zone.title}
              </div>
              <div style={{
                fontSize: 64, color: C.textSecondary, fontFamily: F.sans,
                fontWeight: 400, lineHeight: 1.5,
              }}>
                {zone.desc}
              </div>
              <div style={{
                fontSize: 64, color: C.textSecondary, fontFamily: F.sans,
                fontWeight: 400, lineHeight: 1.5,
              }}>
                {zone.sub}
              </div>
            </div>
          );
        })}
      </div>

      {/* ═══ SCENE 4: The Clinical Truth ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        opacity: sceneVis(frame, T.s4Start, T.s4End), padding: 100,
      }}>
        <div style={{
          ...fadeUp(frame, T.s4Start + 5, 18),
          fontSize: 96, color: C.textSecondary, fontWeight: 400,
          fontFamily: F.sans, textAlign: "center", lineHeight: 1.5,
        }}>
          The distance between
        </div>
        <div style={{
          ...fadeUp(frame, T.s4Start + 20, 18),
          display: "flex", alignItems: "baseline", gap: 40,
          marginTop: 20, marginBottom: 20,
        }}>
          <span style={{
            fontSize: 200, fontWeight: 700, fontFamily: F.mono, color: C.green,
          }}>5</span>
          <span style={{
            fontSize: 96, color: C.dim, fontFamily: F.sans,
          }}>and</span>
          <span style={{
            fontSize: 200, fontWeight: 700, fontFamily: F.mono, color: C.red,
          }}>20</span>
        </div>

        {/* Beat drop */}
        <div style={{
          ...fadeUp(frame, T.s4Start + 55, 20),
          fontSize: 108, color: C.white, fontWeight: 600,
          fontFamily: F.serif, textAlign: "center", lineHeight: 1.4,
          marginTop: 30,
        }}>
          is where most chronic
        </div>
        <div style={{
          ...fadeUp(frame, T.s4Start + 70, 20),
          fontSize: 116, color: C.accent, fontWeight: 700,
          fontFamily: F.serif, fontStyle: "italic", textAlign: "center",
        }}>
          disease risk hides.
        </div>

        {/* Supporting stat */}
        <div style={{
          ...fadeUp(frame, T.s4Start + 100, 16),
          fontSize: 52, color: C.dim, fontFamily: F.mono,
          marginTop: 60, textAlign: "center",
        }}>
          Both called "normal." One is healthy. One is not.
        </div>
      </div>

      {/* ═══ SCENE 5: Brand Hit ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        opacity: sceneVis(frame, T.s5Start, T.s5End), padding: 80,
      }}>
        <div style={{
          ...fadeUp(frame, T.s5Start + 5, 18),
          fontSize: 116, color: C.dim, fontWeight: 400,
          fontFamily: F.sans,
        }}>
          The range said normal.
        </div>
        <div style={{
          ...fadeUp(frame, T.s5Start + 30, 22),
          textAlign: "center", marginTop: 30,
        }}>
          <div style={{
            fontSize: 152, color: C.white, fontWeight: 700,
            fontFamily: F.serif,
          }}>
            Your <span style={{ color: C.red, fontStyle: "italic" }}>cells</span>
          </div>
          <div style={{
            fontSize: 152, color: C.white, fontWeight: 700,
            fontFamily: F.serif, marginTop: 10,
          }}>
            disagreed.
          </div>
        </div>

        {/* Green dot */}
        <div style={{
          width: 18, height: 18, borderRadius: "50%",
          background: C.green, marginTop: 70,
          opacity: dotOpacity, transform: `scale(${dotPulse})`,
          boxShadow: `0 0 30px ${C.green}60, 0 0 80px ${C.green}20`,
        }} />
      </div>
    </div>
  );
};
