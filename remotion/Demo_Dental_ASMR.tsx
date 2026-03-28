import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
// DEMO REEL — Fictional dental clinic "Demo Dental"
// Procedural ASMR: abstract dental cleaning visualization
// 1080x1920, 30fps, 420 frames (14s)

const C = {
  lightBg: "#fafafa",
  darkBg: "#0a0f14",
  teal: "#2dd4bf",
  dirtyTooth: "#f5e6c8",
  cleanTooth: "#ffffff",
  textDark: "#1a1a2e",
  textLight: "#e8e8e8",
};

const TOOTH_COUNT = 8;
const TOOTH_W = 70;
const TOOTH_H = 100;
const TOOTH_GAP = 16;
const TEETH_TOTAL_W = TOOTH_COUNT * TOOTH_W + (TOOTH_COUNT - 1) * TOOTH_GAP;
const TEETH_LEFT = (1080 - TEETH_TOTAL_W) / 2;
const TEETH_Y = 860;

// Plaque dot positions per tooth (relative to tooth top-left)
const PLAQUE_DOTS: Array<Array<{ x: number; y: number; r: number }>> = Array.from(
  { length: TOOTH_COUNT },
  (_, i) => {
    // Deterministic pseudo-random using tooth index
    const seed = (n: number) => ((n * 7919 + i * 1301) % 97) / 97;
    const count = 3 + (i % 3);
    return Array.from({ length: count }, (_, j) => ({
      x: 10 + seed(j * 3 + 1) * (TOOTH_W - 20),
      y: 15 + seed(j * 5 + 2) * (TOOTH_H - 30),
      r: 3 + seed(j * 7 + 3) * 4,
    }));
  }
);

// Each tooth gets cleaned as the sweep passes it
function toothCleanStart(i: number): number {
  // Sweep from frame 70 to 190, staggered per tooth
  return 70 + i * 16;
}

function toothCleanEnd(i: number): number {
  return toothCleanStart(i) + 20;
}

export const Demo_Dental_ASMR: React.FC = () => {
  const frame = useCurrentFrame();

  // --- Background transition (Phase 4: 280-310 transition) ---
  const bgProgress = interpolate(frame, [270, 310], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });
  const bg = bgProgress < 0.5 ? C.lightBg : C.darkBg;
  const bgOpacity = interpolate(
    frame,
    [270, 289, 291, 310],
    [1, 0, 0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // --- Phase 1: Title ---
  const titleOpacity = interpolate(frame, [10, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const titleFadeOut = interpolate(frame, [250, 270], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // --- Phase 1-2: Teeth appear ---
  const teethAppear = interpolate(frame, [5, 45], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const teethFadeOut = interpolate(frame, [255, 275], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // --- Phase 2: Cleaning sweep glow position ---
  const sweepX = interpolate(frame, [65, 200], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.quad),
  });
  const sweepVisible = frame >= 60 && frame <= 210;

  // --- Phase 3: Text below teeth ---
  const phase3Text1 = interpolate(frame, [210, 230], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const phase3Text1Y = interpolate(frame, [210, 230], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const phase3Text2 = interpolate(frame, [235, 255], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const phase3Text2Y = interpolate(frame, [235, 255], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const phase3FadeOut = interpolate(frame, [260, 275], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // --- Phase 4: Stats ---
  const phase4Vis = interpolate(frame, [300, 320], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const phase4FadeOut = interpolate(frame, [350, 365], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const stat4Opacity = Math.min(phase4Vis, phase4FadeOut);

  // --- Phase 5: CTA ---
  const ctaOpacity = interpolate(frame, [370, 390], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const ctaLineWidth = interpolate(frame, [385, 410], [0, 120], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // Sparkle generator for Phase 3
  const sparkles = Array.from({ length: 12 }, (_, i) => {
    const seed1 = ((i * 4831 + 17) % 97) / 97;
    const seed2 = ((i * 6271 + 31) % 97) / 97;
    const sparkleStart = 200 + i * 3;
    const sparkleOpacity = interpolate(
      frame,
      [sparkleStart, sparkleStart + 8, sparkleStart + 16, sparkleStart + 24],
      [0, 0.9, 0.9, 0],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );
    const sparkleScale = interpolate(
      frame,
      [sparkleStart, sparkleStart + 10],
      [0.3, 1],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.back(2)) }
    );
    return {
      x: TEETH_LEFT + seed1 * TEETH_TOTAL_W,
      y: TEETH_Y - 10 + seed2 * (TOOTH_H + 20),
      opacity: sparkleOpacity * teethFadeOut,
      scale: sparkleScale,
    };
  });

  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        background: frame < 280 ? C.lightBg : C.darkBg,
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', -apple-system, sans-serif",
        opacity: frame < 270 || frame > 310 ? 1 : bgOpacity,
      }}
    >
      {/* ========== PHASE 1-3: Light background content ========== */}
      {frame < 285 && (
        <>
          {/* Title: PROFESSIONAL DENTAL CLEANING */}
          <div
            style={{
              position: "absolute",
              top: TEETH_Y - 80,
              width: 1080,
              textAlign: "center",
              opacity: titleOpacity * titleFadeOut,
              color: C.textDark,
              fontSize: 26,
              fontWeight: 500,
              letterSpacing: 6,
              textTransform: "uppercase",
              fontVariant: "small-caps",
            }}
          >
            Professional Dental Cleaning
          </div>

          {/* Teeth row */}
          {Array.from({ length: TOOTH_COUNT }).map((_, i) => {
            const x = TEETH_LEFT + i * (TOOTH_W + TOOTH_GAP);
            const cleanProgress = interpolate(
              frame,
              [toothCleanStart(i), toothCleanEnd(i)],
              [0, 1],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.inOut(Easing.cubic) }
            );

            // Tooth color: dirty → clean
            const toothR = Math.round(245 + (255 - 245) * cleanProgress);
            const toothG = Math.round(230 + (255 - 230) * cleanProgress);
            const toothB = Math.round(200 + (255 - 200) * cleanProgress);
            const toothColor = `rgb(${toothR},${toothG},${toothB})`;

            // Glow ring when being cleaned
            const glowIntensity = interpolate(
              frame,
              [toothCleanStart(i), toothCleanStart(i) + 10, toothCleanEnd(i), toothCleanEnd(i) + 10],
              [0, 0.7, 0.7, 0],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
            );

            // Shine on cleaned surface
            const shineOpacity = interpolate(
              frame,
              [toothCleanEnd(i), toothCleanEnd(i) + 15],
              [0, 0.5],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) }
            );

            // Individual tooth entrance stagger
            const toothDelay = i * 4;
            const toothScale = interpolate(
              frame,
              [5 + toothDelay, 35 + toothDelay],
              [0.6, 1],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.back(1.5)) }
            );
            const toothOpacity = interpolate(
              frame,
              [5 + toothDelay, 25 + toothDelay],
              [0, 1],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
            );

            return (
              <React.Fragment key={i}>
                {/* Tooth shape */}
                <div
                  style={{
                    position: "absolute",
                    left: x,
                    top: TEETH_Y,
                    width: TOOTH_W,
                    height: TOOTH_H,
                    borderRadius: 18,
                    background: toothColor,
                    boxShadow: `0 2px 8px rgba(0,0,0,0.06), 0 0 ${glowIntensity * 30}px ${glowIntensity * 12}px ${C.teal}${Math.round(glowIntensity * 80).toString(16).padStart(2, "0")}`,
                    transform: `scale(${toothScale * teethFadeOut + (1 - teethFadeOut) * 0.8})`,
                    opacity: toothOpacity * teethFadeOut,
                    transition: "none",
                  }}
                >
                  {/* Shine gradient on cleaned tooth */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: 18,
                      background: `linear-gradient(135deg, rgba(255,255,255,${shineOpacity}) 0%, transparent 50%)`,
                    }}
                  />
                </div>

                {/* Plaque dots */}
                {PLAQUE_DOTS[i].map((dot, j) => {
                  // Each dot scatters upward when cleaned
                  const dotCleanProgress = interpolate(
                    frame,
                    [toothCleanStart(i) + j * 2, toothCleanStart(i) + j * 2 + 14],
                    [0, 1],
                    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.in(Easing.cubic) }
                  );
                  const dotY = dot.y - dotCleanProgress * (40 + j * 15);
                  const dotOpacity = (1 - dotCleanProgress) * toothOpacity * teethFadeOut;
                  const dotScale = 1 - dotCleanProgress * 0.5;
                  return (
                    <div
                      key={`dot-${i}-${j}`}
                      style={{
                        position: "absolute",
                        left: x + dot.x - dot.r,
                        top: TEETH_Y + dotY - dot.r,
                        width: dot.r * 2,
                        height: dot.r * 2,
                        borderRadius: "50%",
                        background: `rgba(200,180,140,${0.5 + ((j * 13) % 5) * 0.08})`,
                        opacity: dotOpacity,
                        transform: `scale(${dotScale})`,
                      }}
                    />
                  );
                })}
              </React.Fragment>
            );
          })}

          {/* Cleaning sweep glow */}
          {sweepVisible && (
            <div
              style={{
                position: "absolute",
                left: TEETH_LEFT - 30 + sweepX * (TEETH_TOTAL_W + 20),
                top: TEETH_Y - 40,
                width: 60,
                height: TOOTH_H + 80,
                borderRadius: 30,
                background: `radial-gradient(ellipse, ${C.teal}50 0%, ${C.teal}20 40%, transparent 70%)`,
                filter: "blur(8px)",
                pointerEvents: "none",
              }}
            />
          )}

          {/* Sparkles (Phase 3) */}
          {sparkles.map((s, i) => (
            <div
              key={`sparkle-${i}`}
              style={{
                position: "absolute",
                left: s.x - 6,
                top: s.y - 6,
                width: 12,
                height: 12,
                opacity: s.opacity,
                transform: `scale(${s.scale})`,
                pointerEvents: "none",
              }}
            >
              {/* 4-point star sparkle */}
              <svg width="12" height="12" viewBox="0 0 12 12">
                <path
                  d="M6 0 L7 4.5 L12 6 L7 7.5 L6 12 L5 7.5 L0 6 L5 4.5 Z"
                  fill={C.teal}
                  opacity={0.8}
                />
              </svg>
            </div>
          ))}

          {/* Phase 3 text: below teeth */}
          <div
            style={{
              position: "absolute",
              top: TEETH_Y + TOOTH_H + 60,
              width: 1080,
              textAlign: "center",
              opacity: phase3Text1 * phase3FadeOut,
              transform: `translateY(${phase3Text1Y}px)`,
              color: C.textDark,
              fontSize: 36,
              fontWeight: 600,
              letterSpacing: 1,
              lineHeight: 1.4,
            }}
          >
            32 surfaces. Every single one.
          </div>
          <div
            style={{
              position: "absolute",
              top: TEETH_Y + TOOTH_H + 120,
              width: 1080,
              textAlign: "center",
              opacity: phase3Text2 * phase3FadeOut,
              transform: `translateY(${phase3Text2Y}px)`,
              color: `${C.textDark}aa`,
              fontSize: 26,
              fontWeight: 400,
              letterSpacing: 0.5,
            }}
          >
            What your toothbrush can't reach.
          </div>
        </>
      )}

      {/* ========== PHASE 4: Stats on dark ========== */}
      {frame >= 290 && frame < 370 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "0 80px",
            opacity: stat4Opacity,
          }}
        >
          {/* Stat number */}
          <div
            style={{
              color: C.teal,
              fontSize: 96,
              fontWeight: 700,
              letterSpacing: -2,
              marginBottom: 30,
              transform: `translateY(${interpolate(frame, [300, 325], [40, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })}px)`,
            }}
          >
            68%
          </div>

          {/* Stat text */}
          <div
            style={{
              color: C.textLight,
              fontSize: 34,
              fontWeight: 400,
              textAlign: "center",
              lineHeight: 1.5,
              maxWidth: 800,
              opacity: interpolate(frame, [310, 330], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              transform: `translateY(${interpolate(frame, [310, 330], [20, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })}px)`,
            }}
          >
            of gum disease:
            <br />
            <span style={{ fontWeight: 600 }}>
              preventable with professional cleaning.
            </span>
          </div>

          {/* Source */}
          <div
            style={{
              position: "absolute",
              bottom: 400,
              color: `${C.textLight}66`,
              fontSize: 18,
              fontWeight: 400,
              letterSpacing: 1,
              opacity: interpolate(frame, [325, 340], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            American Academy of Periodontology
          </div>
        </div>
      )}

      {/* ========== PHASE 5: CTA ========== */}
      {frame >= 365 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            opacity: ctaOpacity,
          }}
        >
          <div
            style={{
              color: C.cleanTooth,
              fontSize: 48,
              fontWeight: 600,
              letterSpacing: 4,
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Demo Dental
          </div>
          <div
            style={{
              width: ctaLineWidth,
              height: 3,
              background: C.teal,
              borderRadius: 2,
              marginBottom: 16,
            }}
          />
          <div
            style={{
              color: `${C.textLight}99`,
              fontSize: 22,
              fontWeight: 400,
              letterSpacing: 6,
              textTransform: "uppercase",
            }}
          >
            New York
          </div>
        </div>
      )}

      {/* Subtle vignette on dark phases */}
      {frame >= 280 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 50% 50%, transparent 50%, rgba(0,0,0,0.3) 100%)",
            pointerEvents: "none",
            opacity: interpolate(frame, [280, 310], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        />
      )}
    </div>
  );
};
