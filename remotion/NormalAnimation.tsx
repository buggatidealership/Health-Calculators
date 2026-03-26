import React from "react";
import {
  useCurrentFrame,
  interpolate,
  Easing,
  spring,
  useVideoConfig,
} from "remotion";

// --- Design tokens ---
const C = {
  bg: "#0a0f1a",
  text: "#E0E0E0",
  dim: "#3a4050",
  red: "#e8785e",
  green: "#6ec89b",
  accent: "#e89b3e",
  teal: "#0e7a7e",
  white: "#ffffff",
};

const FONTS = {
  serif: "'DM Serif Display', Georgia, serif",
  sans: "'Inter', -apple-system, sans-serif",
  mono: "'JetBrains Mono', 'SF Mono', monospace",
};

// 25 seconds at 30fps = 750 frames
// Scene structure: rapid-fire "normal" numbers → glitch/break → recontextualize → brand hit

export const NormalAnimation: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // --- SCENE 1: "Normal" numbers cascade (0-6s = 0-180) ---
  // Numbers appear one by one, clinical, cold. Each with a "Normal ✓" stamp.
  const normals = [
    { label: "Vitamin D", value: "22 ng/mL", delay: 0 },
    { label: "Cortisol", value: "18 μg/dL", delay: 25 },
    { label: "Testosterone", value: "320 ng/dL", delay: 50 },
    { label: "TSH", value: "4.1 mIU/L", delay: 75 },
    { label: "Fasting Glucose", value: "98 mg/dL", delay: 100 },
    { label: "HbA1c", value: "5.6%", delay: 125 },
  ];

  const scene1Visible = frame < 220;
  const scene1Fade = frame > 195 ? interpolate(frame, [195, 220], [1, 0], { extrapolateRight: "clamp" }) : 1;

  // --- SCENE 2: The break (6.5s-9s = 195-270) ---
  // Screen flickers. "Normal" stamps glitch. One word appears huge:
  const breakStart = 210;
  const breakVisible = frame >= breakStart && frame < 340;

  // Glitch flicker
  const flickerOn = frame >= breakStart && frame < breakStart + 45;
  const flickerOpacity = flickerOn
    ? (Math.sin(frame * 2.7) > 0.3 ? 1 : 0.1)
    : 0;

  // "But you don't feel normal." appears after flicker
  const butStart = breakStart + 30;
  const butOpacity = interpolate(frame, [butStart, butStart + 12], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const butY = interpolate(frame, [butStart, butStart + 12], [60, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });

  // --- SCENE 3: Recontextualization (9.5s-18s = 285-540) ---
  // Same numbers, but now with CONTEXT. Each one gets reframed.
  const reframes = [
    { label: "Vitamin D", oldValue: "22 ng/mL", oldLabel: '"Normal"', newValue: "50-80", newLabel: "Where fatigue resolves", delay: 0 },
    { label: "Testosterone", oldValue: "320 ng/dL", oldLabel: '"Normal"', newValue: "vs. your age", newLabel: "Normal for 80. Not for 35.", delay: 75 },
    { label: "Fasting Glucose", oldValue: "98 mg/dL", oldLabel: '"Normal"', newValue: "< 85", newLabel: "Where insulin resistance starts", delay: 150 },
  ];

  const scene3Start = 330;
  const scene3Visible = frame >= scene3Start && frame < 610;

  // --- SCENE 4: Brand hit (18s-22s = 540-660) ---
  const scene4Start = 600;
  const scene4Visible = frame >= scene4Start && frame < 720;

  // --- SCENE 5: CTA (22s-25s = 660-750) ---
  const scene5Start = 690;
  const scene5Visible = frame >= scene5Start;

  // --- Green dot (brand element, appears scene 4+) ---
  const dotOpacity = interpolate(frame, [scene4Start, scene4Start + 20], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const dotPulse = 1 + 0.15 * Math.sin(frame * 0.12);

  return (
    <div style={{
      width: 2160,
      height: 2160,
      background: C.bg,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: FONTS.sans,
      overflow: "hidden",
      position: "relative",
    }}>

      {/* Film grain overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`,
        opacity: 0.5,
        pointerEvents: "none",
        zIndex: 100,
      }} />

      {/* SCENE 1: Normal numbers cascade */}
      {scene1Visible && (
        <div style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 28,
          opacity: scene1Fade,
          padding: 80,
        }}>
          {/* Header */}
          <div style={{
            ...fadeUp(frame, 0, 18),
            fontFamily: FONTS.mono,
            fontSize: 72,
            color: C.dim,
            letterSpacing: 8,
            textTransform: "uppercase",
            marginBottom: 40,
          }}>
            YOUR LAB RESULTS
          </div>

          {normals.map((n, i) => {
            const appear = fadeUp(frame, n.delay + 15, 12);
            const stampDelay = n.delay + 35;
            const stampScale = frame >= stampDelay
              ? interpolate(frame, [stampDelay, stampDelay + 6], [2.5, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })
              : 0;
            const stampOpacity = frame >= stampDelay
              ? interpolate(frame, [stampDelay, stampDelay + 4], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
              : 0;

            return (
              <div key={i} style={{
                ...appear,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: 1600,
                padding: "28px 50px",
                borderBottom: `1px solid ${C.dim}30`,
              }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <span style={{ fontSize: 72, color: C.text, fontWeight: 600 }}>{n.label}</span>
                  <span style={{ fontSize: 108, color: C.white, fontWeight: 700, fontFamily: FONTS.mono }}>{n.value}</span>
                </div>
                <div style={{
                  opacity: stampOpacity,
                  transform: `scale(${stampScale}) rotate(-4deg)`,
                  border: `5px solid ${C.green}`,
                  borderRadius: 14,
                  padding: "16px 40px",
                  color: C.green,
                  fontSize: 68,
                  fontWeight: 800,
                  letterSpacing: 4,
                }}>
                  NORMAL ✓
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* SCENE 2: The break */}
      {breakVisible && (
        <div style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}>
          {/* Flicker of "NORMAL" stamps */}
          {flickerOn && (
            <div style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: flickerOpacity,
            }}>
              <span style={{
                fontSize: 280,
                fontWeight: 900,
                color: C.green,
                opacity: 0.15,
                fontFamily: FONTS.mono,
                letterSpacing: -8,
                transform: `rotate(${Math.sin(frame * 0.5) * 3}deg) scale(${1 + Math.sin(frame * 1.3) * 0.05})`,
              }}>
                NORMAL
              </span>
            </div>
          )}

          {/* "But you don't feel normal." */}
          {frame >= butStart && (
            <div style={{
              opacity: butOpacity,
              transform: `translateY(${butY}px)`,
              textAlign: "center",
              padding: 80,
            }}>
              <div style={{
                fontSize: 128,
                fontWeight: 300,
                color: C.text,
                lineHeight: 1.3,
                fontFamily: FONTS.serif,
              }}>
                But you don't
              </div>
              <div style={{
                fontSize: 152,
                fontWeight: 400,
                color: C.red,
                fontFamily: FONTS.serif,
                fontStyle: "italic",
                marginTop: 20,
              }}>
                feel normal.
              </div>
            </div>
          )}
        </div>
      )}

      {/* SCENE 3: Recontextualization — same numbers, new meaning */}
      {scene3Visible && (
        <div style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 70,
          padding: 100,
        }}>
          {reframes.map((r, i) => {
            const entryFrame = scene3Start + r.delay;
            if (frame < entryFrame) return null;

            const appear = fadeUp(frame, entryFrame, 14);

            // Old value with strikethrough
            const strikeProgress = interpolate(
              frame,
              [entryFrame + 25, entryFrame + 35],
              [0, 100],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
            );

            // New value fade in
            const newAppear = fadeUp(frame, entryFrame + 30, 14);

            // Dim the whole card after next one appears
            const nextEntry = i < reframes.length - 1 ? scene3Start + reframes[i + 1].delay : 9999;
            const dimFactor = interpolate(
              frame,
              [nextEntry, nextEntry + 15],
              [1, 0.3],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
            );

            return (
              <div key={i} style={{
                ...appear,
                opacity: (appear.opacity || 0) * dimFactor,
                width: 1700,
                display: "flex",
                flexDirection: "column",
                gap: 16,
                padding: "36px 60px",
                background: `${C.dim}10`,
                borderRadius: 24,
                borderLeft: `6px solid ${C.teal}`,
              }}>
                <div style={{ fontSize: 64, color: C.dim, fontWeight: 600, letterSpacing: 2 }}>
                  {r.label}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
                  {/* Old value with animated strikethrough */}
                  <div style={{ position: "relative" }}>
                    <span style={{
                      fontSize: 96,
                      color: C.dim,
                      fontFamily: FONTS.mono,
                      fontWeight: 500,
                    }}>
                      {r.oldValue}
                    </span>
                    <div style={{
                      position: "absolute",
                      top: "50%",
                      left: 0,
                      width: `${strikeProgress}%`,
                      height: 4,
                      background: C.red,
                      transform: "translateY(-50%)",
                    }} />
                  </div>

                  {/* Arrow */}
                  {frame >= entryFrame + 30 && (
                    <span style={{
                      ...newAppear,
                      fontSize: 64,
                      color: C.teal,
                    }}>→</span>
                  )}

                  {/* New contextualized value */}
                  {frame >= entryFrame + 30 && (
                    <div style={{ ...newAppear, display: "flex", flexDirection: "column", gap: 8 }}>
                      <span style={{
                        fontSize: 100,
                        color: C.green,
                        fontWeight: 700,
                        fontFamily: FONTS.mono,
                      }}>
                        {r.newValue}
                      </span>
                      <span style={{
                        fontSize: 56,
                        color: C.accent,
                        fontWeight: 500,
                        fontFamily: FONTS.serif,
                        fontStyle: "italic",
                      }}>
                        {r.newLabel}
                      </span>
                    </div>
                  )}
                </div>
                {/* Old label */}
                <div style={{
                  position: "absolute",
                  top: 36,
                  right: 60,
                  fontSize: 52,
                  color: `${C.red}90`,
                  fontWeight: 600,
                  textDecoration: frame >= entryFrame + 25 ? "line-through" : "none",
                }}>
                  {r.oldLabel}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* SCENE 4: Brand hit */}
      {scene4Visible && (
        <div style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 30,
        }}>
          {/* "Context" reveal */}
          <div style={{
            ...fadeUp(frame, scene4Start + 5, 20),
            fontSize: 128,
            color: C.dim,
            fontWeight: 400,
            fontFamily: FONTS.sans,
            letterSpacing: -1,
            marginBottom: 30,
          }}>
            The number was never wrong.
          </div>
          <div style={{
            ...fadeUp(frame, scene4Start + 30, 20),
            textAlign: "center",
            padding: "0 60px",
          }}>
            <span style={{
              fontSize: 148,
              color: C.white,
              fontWeight: 700,
              fontFamily: FONTS.serif,
              letterSpacing: -2,
            }}>The </span>
            <span style={{
              fontSize: 220,
              color: C.green,
              fontWeight: 700,
              fontFamily: FONTS.serif,
              letterSpacing: -3,
            }}>context</span>
            <br/>
            <span style={{
              fontSize: 148,
              color: C.white,
              fontWeight: 700,
              fontFamily: FONTS.serif,
              letterSpacing: -2,
            }}>was missing.</span>
          </div>

          {/* Green pulsing dot */}
          <div style={{
            width: 16,
            height: 16,
            borderRadius: "50%",
            background: C.green,
            marginTop: 50,
            opacity: dotOpacity,
            transform: `scale(${dotPulse})`,
            boxShadow: `0 0 30px ${C.green}60, 0 0 80px ${C.green}20`,
          }} />
        </div>
      )}

      {/* SCENE 5: CTA */}
      {scene5Visible && (
        <div style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 40,
        }}>
          <div style={{
            ...fadeUp(frame, scene5Start, 16),
            fontSize: 100,
            color: C.text,
            fontWeight: 600,
            fontFamily: FONTS.sans,
          }}>
            What are your numbers
          </div>
          <div style={{
            ...fadeUp(frame, scene5Start + 12, 16),
            fontSize: 108,
            color: C.green,
            fontWeight: 700,
            fontFamily: FONTS.serif,
            fontStyle: "italic",
          }}>
            actually telling you?
          </div>

          {/* Green dot */}
          <div style={{
            width: 14,
            height: 14,
            borderRadius: "50%",
            background: C.green,
            marginTop: 40,
            opacity: dotOpacity,
            transform: `scale(${dotPulse})`,
            boxShadow: `0 0 30px ${C.green}60, 0 0 80px ${C.green}20`,
          }} />
        </div>
      )}

      {/* Helper functions used inline */}
    </div>
  );
};

// Helpers
function fadeUp(frame: number, start: number, duration: number = 14) {
  const opacity = interpolate(frame, [start, start + duration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const y = interpolate(frame, [start, start + duration], [50, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  return { opacity, transform: `translateY(${y}px)` };
}
