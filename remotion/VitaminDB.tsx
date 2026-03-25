import React from "react";
import {
  useCurrentFrame,
  interpolate,
  Easing,
} from "remotion";

// --- Design tokens ---
const COLORS = {
  bg: "#0a0f1a",
  text: "#E0E0E0",
  textSecondary: "#8a919e",
  accent: "#e89b3e",     // amber for "normal" zone
  green: "#6ec89b",      // optimal zone
  red: "#e8785e",        // deficient zone
  dim: "#8a919e",
};

const FONTS = {
  serif: "'DM Serif Display', Georgia, serif",
  sans: "'Inter', -apple-system, sans-serif",
};

// --- Timing (in frames at 30fps) ---
// Total: 32s = 960 frames
const T = {
  scene1Start: 0,
  scene1End: 170,      // ~5.7s — hook
  scene2Start: 178,
  scene2End: 370,      // ~12.3s — the problem: "normal"
  scene3Start: 378,
  scene3End: 620,      // ~20.7s — the spectrum
  scene4Start: 628,
  scene4End: 850,      // ~28.3s — the weight (poster frame)
  scene5Start: 858,
  scene5End: 960,      // 32s — CTA
};

// --- Helpers ---
function fadeUp(
  frame: number,
  start: number,
  duration: number = 14
): { opacity: number; transform: string } {
  const opacity = interpolate(frame, [start, start + duration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const y = interpolate(frame, [start, start + duration], [40, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  return { opacity, transform: `translateY(${y}px)` };
}

function fadeOut(
  frame: number,
  start: number,
  duration: number = 10
): { opacity: number; transform: string } {
  const opacity = interpolate(frame, [start, start + duration], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const y = interpolate(frame, [start, start + duration], [0, -20], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.in(Easing.cubic),
  });
  return { opacity, transform: `translateY(${y}px)` };
}

function sceneOpacity(frame: number, start: number, end: number): number {
  if (frame < start || frame > end + 12) return 0;
  const fadeInEnd = start + 8;
  const fadeOutStart = end - 8;
  if (frame < fadeInEnd)
    return interpolate(frame, [start, fadeInEnd], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  if (frame > fadeOutStart)
    return interpolate(frame, [fadeOutStart, end], [1, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  return 1;
}

const Divider: React.FC<{ opacity: number; width?: number }> = ({
  opacity,
  width = 120,
}) => (
  <div
    style={{
      width,
      height: 2,
      background: `rgba(255,255,255,${0.08 * opacity})`,
      borderRadius: 1,
      margin: "36px 0",
      opacity,
    }}
  />
);

// --- Scene 1: Hook — "Your doctor said you're fine." ---
const Scene1: React.FC<{ frame: number }> = ({ frame }) => {
  const local = frame - T.scene1Start;

  const dotAnim = fadeUp(local, 8, 12);
  const textAnim = fadeUp(local, 24, 18);
  const subAnim = fadeUp(local, 90, 14);

  const exitStart = 138;
  const dotExit = fadeOut(local, exitStart, 10);
  const textExit = fadeOut(local, exitStart + 3, 10);
  const subExit = fadeOut(local, exitStart + 6, 10);
  const inExit = local >= exitStart;

  // Red pulsing dot
  const pulsePhase = (local * 1.0) % 42;
  const pulseScale = interpolate(pulsePhase, [0, 42], [1, 3.5], {
    extrapolateRight: "clamp",
  });
  const pulseOpacity = interpolate(pulsePhase, [0, 42], [0.5, 0], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  const pulse2Phase = ((local - 12) * 1.0) % 42;
  const pulse2Scale =
    local > 20
      ? interpolate(pulse2Phase, [0, 42], [1, 3.5], {
          extrapolateRight: "clamp",
        })
      : 1;
  const pulse2Opacity =
    local > 20
      ? interpolate(pulse2Phase, [0, 42], [0.3, 0], {
          extrapolateRight: "clamp",
          easing: Easing.out(Easing.quad),
        })
      : 0;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: sceneOpacity(frame, T.scene1Start, T.scene1End),
      }}
    >
      {/* Red pulsing dot */}
      <div
        style={{
          position: "relative",
          width: 24,
          height: 24,
          marginBottom: 60,
          ...(inExit ? dotExit : dotAnim),
        }}
      >
        <div
          style={{
            width: 24,
            height: 24,
            borderRadius: "50%",
            background: COLORS.red,
            boxShadow: `0 0 20px rgba(232, 120, 94, 0.4)`,
          }}
        />
        {local > 8 && (
          <>
            <div
              style={{
                position: "absolute",
                inset: -16,
                borderRadius: "50%",
                border: `3px solid ${COLORS.red}`,
                opacity: pulseOpacity,
                transform: `scale(${pulseScale})`,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: -16,
                borderRadius: "50%",
                border: `2px solid ${COLORS.red}`,
                opacity: pulse2Opacity,
                transform: `scale(${pulse2Scale})`,
              }}
            />
          </>
        )}
      </div>

      <div
        style={{
          fontFamily: FONTS.serif,
          fontSize: 168,
          color: COLORS.text,
          letterSpacing: "-0.02em",
          lineHeight: 1.15,
          textAlign: "center",
          padding: "0 60px",
          ...(inExit ? textExit : textAnim),
        }}
      >
        Your doctor said you're fine.
      </div>

      <Divider
        opacity={inExit ? subExit.opacity : subAnim.opacity}
        width={80}
      />

      <div
        style={{
          fontFamily: FONTS.sans,
          fontSize: 64,
          color: COLORS.textSecondary,
          fontWeight: 400,
          letterSpacing: "0.03em",
          ...(inExit ? subExit : subAnim),
        }}
      >
        But you don't feel fine.
      </div>
    </div>
  );
};

// --- Scene 2: The Problem — "Normal" means not deficient. Not optimal. ---
const Scene2: React.FC<{ frame: number }> = ({ frame }) => {
  const local = frame - T.scene2Start;

  const lineAnim = fadeUp(local, 10, 16);

  // Beat drop after 1.8s pause
  const beatDelay = 72;
  const beatAnim = fadeUp(local, beatDelay, 16);
  const beatScale = interpolate(
    local,
    [beatDelay, beatDelay + 18],
    [0.88, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.back(1.4)),
    }
  );
  const beatY = interpolate(local, [beatDelay, beatDelay + 16], [24, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // Dim first line when beat drops
  const lineDim = interpolate(local, [beatDelay, beatDelay + 14], [1, 0.35], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const exitStart = 160;
  const lineExit = fadeOut(local, exitStart, 10);
  const beatExit = fadeOut(local, exitStart + 4, 10);
  const inExit = local >= exitStart;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 70px",
        opacity: sceneOpacity(frame, T.scene2Start, T.scene2End),
      }}
    >
      <div
        style={{
          fontFamily: FONTS.serif,
          fontSize: 140,
          textAlign: "center",
          lineHeight: 1.2,
          color: COLORS.text,
          opacity: inExit ? lineExit.opacity : lineAnim.opacity * lineDim,
          transform: inExit ? lineExit.transform : lineAnim.transform,
        }}
      >
        "Normal" means{" "}
        <span style={{ color: COLORS.accent }}>not deficient</span>.
        <br />
        Not optimal.
      </div>

      <Divider
        opacity={inExit ? beatExit.opacity : beatAnim.opacity}
        width={60}
      />

      {local >= beatDelay && (
        <div
          style={{
            fontFamily: FONTS.serif,
            fontSize: 112,
            color: COLORS.text,
            textAlign: "center",
            lineHeight: 1.3,
            opacity: inExit ? beatExit.opacity : beatAnim.opacity,
            transform: inExit
              ? beatExit.transform
              : `translateY(${beatY}px) scale(${beatScale})`,
          }}
        >
          "Normal" starts at{" "}
          <span style={{ color: COLORS.accent }}>20 ng/mL</span>.
          <br />
          Your brain works best above{" "}
          <span style={{ color: COLORS.green }}>50</span>.
        </div>
      )}
    </div>
  );
};

// --- Scene 3: The Gap — Spectrum bar ---
const Scene3: React.FC<{ frame: number }> = ({ frame }) => {
  const local = frame - T.scene3Start;

  const titleAnim = fadeUp(local, 6, 12);

  // Spectrum bar builds left to right
  const barDelay = 30;

  // Red zone (deficient < 20)
  const redProgress = interpolate(
    local,
    [barDelay, barDelay + 30],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) }
  );

  // Amber zone ("normal" 20-30)
  const amberDelay = barDelay + 36;
  const amberProgress = interpolate(
    local,
    [amberDelay, amberDelay + 30],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) }
  );

  // Green zone (optimal 50-80)
  const greenDelay = amberDelay + 36;
  const greenProgress = interpolate(
    local,
    [greenDelay, greenDelay + 30],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) }
  );

  // Labels appear after their zone
  const redLabelAnim = fadeUp(local, barDelay + 20, 12);
  const amberLabelAnim = fadeUp(local, amberDelay + 20, 12);
  const greenLabelAnim = fadeUp(local, greenDelay + 20, 12);

  // Annotation labels
  const doctorLabelDelay = amberDelay + 50;
  const doctorLabelAnim = fadeUp(local, doctorLabelDelay, 14);

  const resolveLabelDelay = greenDelay + 50;
  const resolveLabelAnim = fadeUp(local, resolveLabelDelay, 14);

  // Exit
  const exitStart = 210;
  const titleExit = fadeOut(local, exitStart, 8);
  const containerExit = fadeOut(local, exitStart + 3, 8);
  const inExit = local >= exitStart;

  // Zone widths as percentages of total bar
  // Deficient: 0-20 (25%), Normal: 20-30 (12.5%), Gap: 30-50 (25%), Optimal: 50-80 (37.5%)
  const totalBarWidth = 1900;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 70px",
        opacity: sceneOpacity(frame, T.scene3Start, T.scene3End),
      }}
    >
      {/* Title */}
      <div
        style={{
          fontFamily: FONTS.sans,
          fontSize: 44,
          fontWeight: 600,
          color: COLORS.textSecondary,
          textTransform: "uppercase" as const,
          letterSpacing: "0.14em",
          marginBottom: 80,
          ...(inExit ? titleExit : titleAnim),
        }}
      >
        Vitamin D Levels (ng/mL)
      </div>

      {/* Spectrum bar */}
      <div
        style={{
          width: totalBarWidth,
          display: "flex",
          flexDirection: "column",
          ...(inExit ? containerExit : {}),
        }}
      >
        {/* The bar itself */}
        <div
          style={{
            width: "100%",
            height: 72,
            background: "rgba(255,255,255,0.04)",
            borderRadius: 36,
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
          }}
        >
          {/* Deficient zone: 0-20 = 25% */}
          <div
            style={{
              width: `${25 * redProgress}%`,
              height: "100%",
              background: COLORS.red,
              opacity: 0.9,
              boxShadow: redProgress > 0.5 ? `0 0 20px ${COLORS.red}40` : "none",
            }}
          />
          {/* Normal zone: 20-30 = 12.5% */}
          <div
            style={{
              width: `${12.5 * amberProgress}%`,
              height: "100%",
              background: COLORS.accent,
              opacity: 0.7,
              boxShadow: amberProgress > 0.5 ? `0 0 16px ${COLORS.accent}30` : "none",
            }}
          />
          {/* Gap zone: 30-50 = 25% (dim, unlabeled) */}
          <div
            style={{
              width: `${25 * amberProgress}%`,
              height: "100%",
              background: "rgba(255,255,255,0.06)",
            }}
          />
          {/* Optimal zone: 50-80 = 37.5% */}
          <div
            style={{
              width: `${37.5 * greenProgress}%`,
              height: "100%",
              background: COLORS.green,
              opacity: 0.9,
              boxShadow: greenProgress > 0.5 ? `0 0 20px ${COLORS.green}40` : "none",
            }}
          />
        </div>

        {/* Zone labels below bar */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            marginTop: 28,
          }}
        >
          {/* Deficient label */}
          <div
            style={{
              width: "25%",
              textAlign: "center",
              ...(inExit ? containerExit : redLabelAnim),
            }}
          >
            <div style={{ fontFamily: FONTS.sans, fontSize: 48, fontWeight: 700, color: COLORS.red }}>
              Deficient
            </div>
            <div style={{ fontFamily: FONTS.sans, fontSize: 36, color: COLORS.dim, marginTop: 8 }}>
              Below 20
            </div>
          </div>

          {/* Normal label */}
          <div
            style={{
              width: "12.5%",
              textAlign: "center",
              ...(inExit ? containerExit : amberLabelAnim),
            }}
          >
            <div style={{ fontFamily: FONTS.sans, fontSize: 48, fontWeight: 700, color: COLORS.accent }}>
              "Normal"
            </div>
            <div style={{ fontFamily: FONTS.sans, fontSize: 36, color: COLORS.dim, marginTop: 8 }}>
              20–30
            </div>
          </div>

          {/* Gap spacer */}
          <div style={{ width: "25%" }} />

          {/* Optimal label */}
          <div
            style={{
              width: "37.5%",
              textAlign: "center",
              ...(inExit ? containerExit : greenLabelAnim),
            }}
          >
            <div style={{ fontFamily: FONTS.sans, fontSize: 48, fontWeight: 700, color: COLORS.green }}>
              Optimal
            </div>
            <div style={{ fontFamily: FONTS.sans, fontSize: 36, color: COLORS.dim, marginTop: 8 }}>
              50–80
            </div>
          </div>
        </div>

        {/* Annotation: "Where your doctor stops checking" */}
        {local >= doctorLabelDelay && (
          <div
            style={{
              marginTop: 64,
              textAlign: "center",
              ...(inExit ? containerExit : doctorLabelAnim),
            }}
          >
            <div
              style={{
                fontFamily: FONTS.serif,
                fontSize: 72,
                color: COLORS.accent,
                lineHeight: 1.3,
              }}
            >
              Where your doctor stops checking.
            </div>
          </div>
        )}

        {/* Annotation: "Where fatigue, brain fog, and low mood resolve" */}
        {local >= resolveLabelDelay && (
          <div
            style={{
              marginTop: 48,
              textAlign: "center",
              ...(inExit ? containerExit : resolveLabelAnim),
            }}
          >
            <div
              style={{
                fontFamily: FONTS.serif,
                fontSize: 72,
                color: COLORS.green,
                lineHeight: 1.3,
              }}
            >
              Where fatigue, brain fog, and low mood resolve.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Scene 4: The Weight — Statistics (poster frame) ---
const Scene4: React.FC<{ frame: number }> = ({ frame }) => {
  const local = frame - T.scene4Start;

  // Three progressive lines with pauses
  const line1Delay = 12;
  const line1Anim = fadeUp(local, line1Delay, 16);

  const line2Delay = line1Delay + 54; // ~1.8s pause
  const line2Anim = fadeUp(local, line2Delay, 16);

  const line3Delay = line2Delay + 54; // ~1.8s pause
  const line3Anim = fadeUp(local, line3Delay, 16);

  // Exit
  const exitStart = 190;
  const containerExit = fadeOut(local, exitStart, 10);
  const inExit = local >= exitStart;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 70px",
        opacity: sceneOpacity(frame, T.scene4Start, T.scene4End),
      }}
    >
      {/* Line 1 */}
      <div
        style={{
          fontFamily: FONTS.serif,
          fontSize: 140,
          color: COLORS.text,
          textAlign: "center",
          lineHeight: 1.2,
          marginBottom: 56,
          ...(inExit ? containerExit : line1Anim),
        }}
      >
        <span style={{ color: COLORS.red }}>42%</span> of Americans
        <br />are deficient.
      </div>

      {/* Line 2 */}
      {local >= line2Delay && (
        <div
          style={{
            fontFamily: FONTS.sans,
            fontSize: 64,
            color: COLORS.textSecondary,
            textAlign: "center",
            marginBottom: 56,
            ...(inExit ? containerExit : line2Anim),
          }}
        >
          Most of the rest are in the "normal" zone.
        </div>
      )}

      {/* Line 3 */}
      {local >= line3Delay && (
        <div
          style={{
            fontFamily: FONTS.serif,
            fontSize: 120,
            color: COLORS.green,
            textAlign: "center",
            lineHeight: 1.3,
            ...(inExit ? containerExit : line3Anim),
          }}
        >
          Almost nobody is optimal.
        </div>
      )}
    </div>
  );
};

// --- Scene 5: CTA — "Where do you fall?" ---
const Scene5: React.FC<{ frame: number }> = ({ frame }) => {
  const local = frame - T.scene5Start;
  const dotAnim = fadeUp(local, 6, 12);
  const questionAnim = fadeUp(local, 14, 18);
  const urlAnim = fadeUp(local, 40, 14);
  const taglineAnim = fadeUp(local, 58, 12);

  // Green pulsing dot for CTA
  const pulsePhase = (local * 1.0) % 42;
  const pulseScale = interpolate(pulsePhase, [0, 42], [1, 3.5], {
    extrapolateRight: "clamp",
  });
  const pulseOpacity = interpolate(pulsePhase, [0, 42], [0.5, 0], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: sceneOpacity(frame, T.scene5Start, T.scene5End),
      }}
    >
      {/* Green pulsing dot */}
      <div
        style={{
          position: "relative",
          width: 22,
          height: 22,
          marginBottom: 48,
          ...dotAnim,
        }}
      >
        <div
          style={{
            width: 22,
            height: 22,
            borderRadius: "50%",
            background: COLORS.green,
            boxShadow: `0 0 16px rgba(110, 200, 155, 0.4)`,
          }}
        />
        {local > 6 && (
          <div
            style={{
              position: "absolute",
              inset: -12,
              borderRadius: "50%",
              border: `3px solid ${COLORS.green}`,
              opacity: pulseOpacity,
              transform: `scale(${pulseScale})`,
            }}
          />
        )}
      </div>

      <div
        style={{
          fontFamily: FONTS.serif,
          fontSize: 176,
          color: COLORS.text,
          textAlign: "center",
          lineHeight: 1.15,
          marginBottom: 64,
          ...questionAnim,
        }}
      >
        Where do <span style={{ color: COLORS.green }}>you</span> fall?
      </div>

      <div
        style={{
          fontFamily: FONTS.sans,
          fontSize: 40,
          color: COLORS.green,
          fontWeight: 600,
          letterSpacing: "0.02em",
          padding: "28px 64px",
          border: `3px solid rgba(110, 200, 155, 0.25)`,
          borderRadius: 20,
          background: "rgba(110, 200, 155, 0.04)",
          ...urlAnim,
        }}
      >
        healthcalculators.xyz/vitamin-d-intake-calculator
      </div>

      <div
        style={{
          fontFamily: FONTS.sans,
          fontSize: 36,
          color: COLORS.textSecondary,
          marginTop: 36,
          letterSpacing: "0.04em",
          ...taglineAnim,
        }}
      >
        Free. Evidence-based. 30 seconds.
      </div>
    </div>
  );
};

// --- Main Composition ---
export const VitaminDB: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <div
      style={{
        width: 2160,
        height: 2160,
        background: COLORS.bg,
        position: "relative",
        overflow: "hidden",
        fontFamily: FONTS.sans,
        color: COLORS.text,
      }}
    >
      {/* Film grain overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
          pointerEvents: "none",
          zIndex: 1000,
          opacity: 0.5,
        }}
      />
      {/* Vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.4) 100%)",
          pointerEvents: "none",
          zIndex: 999,
        }}
      />

      {/* Scenes */}
      <Scene1 frame={frame} />
      <Scene2 frame={frame} />
      <Scene3 frame={frame} />
      <Scene4 frame={frame} />
      <Scene5 frame={frame} />

      {/* Watermark */}
      <div
        style={{
          position: "absolute",
          bottom: 56,
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: FONTS.sans,
          fontSize: 26,
          color: "rgba(255,255,255,0.12)",
          letterSpacing: "0.06em",
          fontWeight: 500,
          zIndex: 998,
        }}
      >
        healthcalculators.xyz
      </div>
    </div>
  );
};
