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
  danger: "#dc2626",
};

const F = {
  serif: "'DM Serif Display', Georgia, serif",
  sans: "'Inter', -apple-system, sans-serif",
  mono: "'JetBrains Mono', 'SF Mono', monospace",
};

// 30s at 30fps = 900 frames
const T = {
  s1Start: 0, s1End: 150,       // Lab result
  s2Start: 158, s2End: 285,     // Reframe
  s3Start: 293, s3End: 620,     // Timeline
  s4Start: 628, s4End: 760,     // The hidden threshold
  s5Start: 768, s5End: 900,     // Brand hit
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

export const GlucoseAnimation: React.FC = () => {
  const frame = useCurrentFrame();
  const dotPulse = 1 + 0.15 * Math.sin(frame * 0.12);
  const dotOpacity = interpolate(frame, [T.s5Start, T.s5Start + 20], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Timeline data points
  const points = [
    { year: "2016", value: 82, label: "Healthy", color: C.green },
    { year: "2018", value: 88, label: "Normal", color: C.green },
    { year: "2019", value: 95, label: "Normal", color: C.accent },
    { year: "2020", value: 98, label: "Normal", color: C.accent },
    { year: "2022", value: 108, label: "Pre-diabetic", color: C.red },
    { year: "2024", value: 148, label: "Diabetic", color: C.danger },
    { year: "Now", value: 192, label: "3 medications", color: C.danger },
  ];

  // Chart dimensions
  const chartLeft = 300;
  const chartRight = 1860;
  const chartTop = 550;
  const chartBottom = 1500;
  const chartW = chartRight - chartLeft;
  const chartH = chartBottom - chartTop;

  // Scale helpers
  const xForIndex = (i: number) => chartLeft + (i / (points.length - 1)) * chartW;
  const yForValue = (v: number) => chartBottom - ((v - 70) / (200 - 70)) * chartH;

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
          FASTING GLUCOSE
        </div>
        <div style={{
          ...fadeUp(frame, 25, 18),
          fontFamily: F.mono, fontSize: 280, fontWeight: 700,
          color: C.white, letterSpacing: -8, lineHeight: 1,
        }}>
          98
        </div>
        <div style={{
          ...fadeUp(frame, 35, 14),
          fontFamily: F.mono, fontSize: 80, color: C.textSecondary, marginTop: 10,
        }}>
          mg/dL
        </div>

        {/* Normal stamp */}
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
        <div style={{
          ...fadeUp(frame, 90, 14),
          fontFamily: F.mono, fontSize: 48, color: C.dim, marginTop: 50,
        }}>
          Reference range: 70 – 100 mg/dL
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
          Normal is a snapshot.
        </div>
        <div style={{
          ...fadeUp(frame, T.s2Start + 35, 20),
          fontSize: 132, color: C.white, fontWeight: 600,
          fontFamily: F.serif, textAlign: "center", lineHeight: 1.4,
          marginTop: 50,
        }}>
          Disease is a <span style={{ color: C.red, fontStyle: "italic" }}>trajectory.</span>
        </div>
      </div>

      {/* ═══ SCENE 3: The Timeline ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: sceneVis(frame, T.s3Start, T.s3End),
      }}>
        {/* Header */}
        <div style={{
          ...fadeUp(frame, T.s3Start + 5, 14),
          textAlign: "center", marginTop: 120,
          fontFamily: F.mono, fontSize: 64, color: C.dim,
          letterSpacing: 6, textTransform: "uppercase",
        }}>
          ONE PATIENT. SEVEN READINGS.
        </div>

        {/* Y-axis labels */}
        {[80, 100, 140, 180].map((v) => {
          const yPos = yForValue(v);
          return (
            <div key={v} style={{
              ...fadeUp(frame, T.s3Start + 20, 14),
              position: "absolute", left: 160, top: yPos - 20,
              fontFamily: F.mono, fontSize: 40, color: C.dim,
            }}>
              {v}
            </div>
          );
        })}

        {/* "Normal" zone band */}
        <div style={{
          ...fadeUp(frame, T.s3Start + 20, 14),
          position: "absolute",
          left: chartLeft, top: yForValue(100),
          width: chartW, height: yForValue(70) - yForValue(100),
          background: `${C.green}08`,
          borderTop: `2px dashed ${C.green}30`,
          borderBottom: `2px dashed ${C.green}30`,
        }}>
          <span style={{
            position: "absolute", right: 10, top: 8,
            fontFamily: F.mono, fontSize: 36, color: `${C.green}60`,
          }}>
            "Normal" range
          </span>
        </div>

        {/* Hidden threshold line at 85 */}
        {frame >= T.s3Start + 160 && (
          <div style={{
            ...fadeUp(frame, T.s3Start + 160, 16),
            position: "absolute",
            left: chartLeft, top: yForValue(85),
            width: chartW, height: 0,
            borderTop: `3px dashed ${C.accent}80`,
          }}>
            <span style={{
              position: "absolute", left: 10, top: 8,
              fontFamily: F.mono, fontSize: 40, color: C.accent,
              fontWeight: 600,
            }}>
              Insulin resistance begins ~85
            </span>
          </div>
        )}

        {/* Data points — progressive reveal */}
        {points.map((p, i) => {
          const pointDelay = T.s3Start + 40 + i * 35;
          if (frame < pointDelay) return null;

          const x = xForIndex(i);
          const y = yForValue(p.value);
          const appear = fadeUp(frame, pointDelay, 12);

          // Line to previous point
          const prevX = i > 0 ? xForIndex(i - 1) : x;
          const prevY = i > 0 ? yForValue(points[i - 1].value) : y;
          const lineProgress = interpolate(frame, [pointDelay, pointDelay + 12], [0, 1], {
            extrapolateLeft: "clamp", extrapolateRight: "clamp",
          });

          return (
            <React.Fragment key={i}>
              {/* Connecting line */}
              {i > 0 && (
                <svg style={{
                  position: "absolute", left: 0, top: 0,
                  width: 2160, height: 2160, pointerEvents: "none",
                }}>
                  <line
                    x1={prevX} y1={prevY}
                    x2={prevX + (x - prevX) * lineProgress}
                    y2={prevY + (y - prevY) * lineProgress}
                    stroke={p.color}
                    strokeWidth={6}
                    strokeLinecap="round"
                    opacity={0.8}
                  />
                </svg>
              )}

              {/* Data point dot */}
              <div style={{
                ...appear,
                position: "absolute",
                left: x - 16, top: y - 16,
                width: 32, height: 32, borderRadius: "50%",
                background: p.color,
                boxShadow: `0 0 20px ${p.color}60`,
              }} />

              {/* Value label */}
              <div style={{
                ...appear,
                position: "absolute",
                left: x - 60, top: y - 90,
                fontFamily: F.mono, fontSize: 64, fontWeight: 700,
                color: p.color, textAlign: "center", width: 120,
              }}>
                {p.value}
              </div>

              {/* Year label */}
              <div style={{
                ...appear,
                position: "absolute",
                left: x - 60, top: chartBottom + 30,
                fontFamily: F.mono, fontSize: 44, color: C.dim,
                textAlign: "center", width: 120,
              }}>
                {p.year}
              </div>

              {/* Status label */}
              <div style={{
                ...fadeUp(frame, pointDelay + 10, 10),
                position: "absolute",
                left: x - 120, top: y + 30,
                fontSize: 42, color: p.color, fontWeight: 600,
                fontFamily: F.sans, textAlign: "center", width: 240,
                opacity: i === points.length - 1 ? 1 : 0.7,
              }}>
                {p.label}
              </div>
            </React.Fragment>
          );
        })}

        {/* Bottom caption after all points revealed */}
        {frame >= T.s3Start + 280 && (
          <div style={{
            ...fadeUp(frame, T.s3Start + 280, 18),
            position: "absolute",
            bottom: 180, left: 0, right: 0,
            textAlign: "center",
            fontSize: 72, color: C.textSecondary,
            fontFamily: F.serif, fontStyle: "italic",
          }}>
            The line was climbing for years.
          </div>
        )}
        {frame >= T.s3Start + 300 && (
          <div style={{
            ...fadeUp(frame, T.s3Start + 300, 18),
            position: "absolute",
            bottom: 100, left: 0, right: 0,
            textAlign: "center",
            fontSize: 76, color: C.red,
            fontFamily: F.serif, fontWeight: 600,
          }}>
            Nobody watched the direction.
          </div>
        )}
      </div>

      {/* ═══ SCENE 4: The Hidden Threshold ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        opacity: sceneVis(frame, T.s4Start, T.s4End), padding: 80,
      }}>
        <div style={{
          ...fadeUp(frame, T.s4Start + 5, 18),
          fontSize: 96, color: C.textSecondary, fontWeight: 400,
          fontFamily: F.sans, textAlign: "center",
        }}>
          Insulin resistance starts at
        </div>
        <div style={{
          ...fadeUp(frame, T.s4Start + 25, 20),
          fontSize: 240, fontWeight: 700, fontFamily: F.mono,
          color: C.accent, marginTop: 20, marginBottom: 20,
        }}>
          85
        </div>
        <div style={{
          ...fadeUp(frame, T.s4Start + 45, 18),
          fontSize: 88, color: C.dim, fontFamily: F.mono,
        }}>
          mg/dL
        </div>

        {/* Beat drop */}
        <div style={{
          ...fadeUp(frame, T.s4Start + 75, 20),
          fontSize: 96, color: C.white, fontWeight: 600,
          fontFamily: F.serif, textAlign: "center", marginTop: 60,
          lineHeight: 1.4,
        }}>
          15 points below the cutoff.
        </div>
        <div style={{
          ...fadeUp(frame, T.s4Start + 95, 20),
          fontSize: 100, color: C.red, fontWeight: 600,
          fontFamily: F.serif, fontStyle: "italic", textAlign: "center",
          marginTop: 10,
        }}>
          Years before anyone calls it a problem.
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
          The number was always moving.
        </div>
        <div style={{
          ...fadeUp(frame, T.s5Start + 30, 22),
          textAlign: "center", marginTop: 40,
        }}>
          <div style={{
            fontSize: 152, color: C.white, fontWeight: 700, fontFamily: F.serif,
          }}>
            Nobody was watching
          </div>
          <div style={{
            fontSize: 168, color: C.accent, fontWeight: 700,
            fontFamily: F.serif, fontStyle: "italic", marginTop: 10,
          }}>
            the direction.
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
