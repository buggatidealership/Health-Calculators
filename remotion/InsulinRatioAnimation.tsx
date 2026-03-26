import React from "react";
import {
  useCurrentFrame,
  interpolate,
  Easing,
} from "remotion";

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
};

const F = {
  serif: "'DM Serif Display', Georgia, serif",
  sans: "'Inter', -apple-system, sans-serif",
  mono: "'JetBrains Mono', 'SF Mono', monospace",
};

// 28s at 30fps = 840 frames
const T = {
  s1Start: 0, s1End: 150,       // The lab result
  s2Start: 158, s2End: 270,     // The reframe
  s3Start: 278, s3End: 580,     // Split: same number, two stories
  s4Start: 588, s4End: 720,     // The lesson
  s5Start: 728, s5End: 840,     // Brand hit
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

export const InsulinRatioAnimation: React.FC = () => {
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
        <div style={{
          ...fadeUp(frame, 5, 16),
          fontFamily: F.mono, fontSize: 56, color: C.dim,
          letterSpacing: 10, textTransform: "uppercase", marginBottom: 80,
        }}>
          FASTING INSULIN
        </div>
        <div style={{
          ...fadeUp(frame, 25, 18),
          fontFamily: F.mono, fontSize: 320, fontWeight: 700,
          color: C.white, letterSpacing: -8, lineHeight: 1,
        }}>
          8
        </div>
        <div style={{
          ...fadeUp(frame, 35, 14),
          fontFamily: F.mono, fontSize: 80, color: C.textSecondary, marginTop: 10,
        }}>
          µIU/mL
        </div>

        {frame >= 65 && (() => {
          const stampScale = interpolate(frame, [65, 72], [3, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });
          const stampOpacity = interpolate(frame, [65, 70], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          return (
            <div style={{
              marginTop: 60, opacity: stampOpacity,
              transform: `scale(${stampScale}) rotate(-3deg)`,
              border: `6px solid ${C.green}`, borderRadius: 16,
              padding: "20px 56px", color: C.green,
              fontSize: 76, fontWeight: 800, letterSpacing: 6, fontFamily: F.mono,
            }}>NORMAL ✓</div>
          );
        })()}
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
          The same number tells
        </div>
        <div style={{
          ...fadeUp(frame, T.s2Start + 30, 20),
          fontSize: 140, color: C.white, fontWeight: 600,
          fontFamily: F.serif, textAlign: "center", lineHeight: 1.3,
          marginTop: 30,
        }}>
          two <span style={{ color: C.red, fontStyle: "italic" }}>opposite</span> stories.
        </div>
      </div>

      {/* ═══ SCENE 3: The Split — Same Number, Two Contexts ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        opacity: sceneVis(frame, T.s3Start, T.s3End), padding: 60,
      }}>
        {/* Shared insulin number at top */}
        <div style={{
          ...fadeUp(frame, T.s3Start + 5, 16),
          fontFamily: F.mono, fontSize: 56, color: C.dim,
          letterSpacing: 6, marginBottom: 30,
        }}>
          SAME INSULIN: 8 µIU/mL
        </div>

        {/* Two cards side by side */}
        <div style={{
          display: "flex", gap: 50, width: 2040,
        }}>
          {/* LEFT: Healthy context */}
          <div style={{
            ...fadeUp(frame, T.s3Start + 25, 18),
            flex: 1, padding: "60px 50px",
            borderLeft: `10px solid ${C.green}`,
            background: `${C.green}06`,
            borderRadius: 24,
            display: "flex", flexDirection: "column", gap: 30,
          }}>
            <div style={{
              fontFamily: F.mono, fontSize: 52, color: C.dim, letterSpacing: 4,
            }}>
              GLUCOSE
            </div>
            <div style={{
              fontFamily: F.mono, fontSize: 160, fontWeight: 700, color: C.green,
              lineHeight: 1,
            }}>
              85
            </div>
            <div style={{
              fontFamily: F.mono, fontSize: 56, color: C.dim,
            }}>
              mg/dL
            </div>

            {/* Divider */}
            <div style={{
              width: "100%", height: 2, background: `${C.green}20`, marginTop: 10,
            }} />

            {/* Verdict — staggered */}
            <div style={{
              ...fadeUp(frame, T.s3Start + 70, 16),
              fontSize: 76, fontWeight: 700, color: C.green,
              fontFamily: F.serif,
            }}>
              Insulin sensitive.
            </div>
            <div style={{
              ...fadeUp(frame, T.s3Start + 85, 14),
              fontSize: 60, color: C.textSecondary, lineHeight: 1.5,
            }}>
              Cells respond easily.
            </div>
            <div style={{
              ...fadeUp(frame, T.s3Start + 95, 14),
              fontSize: 60, color: C.textSecondary, lineHeight: 1.5,
            }}>
              Pancreas coasting.
            </div>
          </div>

          {/* RIGHT: Failing context */}
          <div style={{
            ...fadeUp(frame, T.s3Start + 45, 18),
            flex: 1, padding: "60px 50px",
            borderLeft: `10px solid ${C.red}`,
            background: `${C.red}06`,
            borderRadius: 24,
            display: "flex", flexDirection: "column", gap: 30,
          }}>
            <div style={{
              fontFamily: F.mono, fontSize: 52, color: C.dim, letterSpacing: 4,
            }}>
              GLUCOSE
            </div>
            <div style={{
              fontFamily: F.mono, fontSize: 160, fontWeight: 700, color: C.red,
              lineHeight: 1,
            }}>
              110
            </div>
            <div style={{
              fontFamily: F.mono, fontSize: 56, color: C.dim,
            }}>
              mg/dL
            </div>

            <div style={{
              width: "100%", height: 2, background: `${C.red}20`, marginTop: 10,
            }} />

            <div style={{
              ...fadeUp(frame, T.s3Start + 90, 16),
              fontSize: 76, fontWeight: 700, color: C.red,
              fontFamily: F.serif,
            }}>
              Pancreas failing.
            </div>
            <div style={{
              ...fadeUp(frame, T.s3Start + 105, 14),
              fontSize: 60, color: C.textSecondary, lineHeight: 1.5,
            }}>
              Glucose elevated despite
            </div>
            <div style={{
              ...fadeUp(frame, T.s3Start + 115, 14),
              fontSize: 60, color: C.textSecondary, lineHeight: 1.5,
            }}>
              "normal" insulin output.
            </div>
          </div>
        </div>

        {/* Bottom: the punch line */}
        {frame >= T.s3Start + 150 && (
          <div style={{
            ...fadeUp(frame, T.s3Start + 150, 20),
            fontSize: 80, color: C.accent, fontWeight: 600,
            fontFamily: F.serif, fontStyle: "italic",
            marginTop: 60, textAlign: "center",
          }}>
            Same insulin. Opposite metabolic reality.
          </div>
        )}
      </div>

      {/* ═══ SCENE 4: The Lesson ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        opacity: sceneVis(frame, T.s4Start, T.s4End), padding: 80,
      }}>
        <div style={{
          ...fadeUp(frame, T.s4Start + 5, 18),
          fontSize: 108, color: C.textSecondary, fontWeight: 400,
          fontFamily: F.sans, textAlign: "center", lineHeight: 1.5,
        }}>
          One number in isolation
        </div>
        <div style={{
          ...fadeUp(frame, T.s4Start + 25, 20),
          fontSize: 140, color: C.white, fontWeight: 600,
          fontFamily: F.serif, textAlign: "center", marginTop: 30,
        }}>
          is a <span style={{ color: C.accent }}>coin flip.</span>
        </div>

        <div style={{
          ...fadeUp(frame, T.s4Start + 60, 18),
          fontSize: 84, color: C.dim, fontFamily: F.serif,
          fontStyle: "italic", textAlign: "center", marginTop: 70,
          lineHeight: 1.5,
        }}>
          Insulin is always glucose-relative.
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
          fontSize: 116, color: C.dim, fontWeight: 400, fontFamily: F.sans,
        }}>
          The number was the same.
        </div>
        <div style={{
          ...fadeUp(frame, T.s5Start + 30, 22),
          textAlign: "center", marginTop: 40,
        }}>
          <div style={{
            fontSize: 156, color: C.white, fontWeight: 700, fontFamily: F.serif,
          }}>
            The <span style={{ color: C.green }}>context</span>
          </div>
          <div style={{
            fontSize: 156, color: C.white, fontWeight: 700,
            fontFamily: F.serif, marginTop: 10,
          }}>
            wasn't.
          </div>
        </div>

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
