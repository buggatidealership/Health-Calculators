import React from "react";
import {
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
  Easing,
  Sequence,
} from "remotion";

// --- Design tokens (scaled 2x for 2160px canvas) ---
const COLORS = {
  bg: "#0a0f1a",
  text: "#E0E0E0",
  textSecondary: "#8a919e",
  accent: "#e89b3e",
  teal: "#0e7a7e",
  red: "#e8785e",
  green: "#6ec89b",
};

const FONTS = {
  serif: "'DM Serif Display', Georgia, serif",
  sans: "'Inter', -apple-system, sans-serif",
};

// --- Timing (in frames at 30fps) ---
// Total: 34s = 1020 frames
const T = {
  scene1Start: 0,
  scene1End: 165,    // 5.5s — recognition needs time to land
  scene2Start: 172,
  scene2End: 310,    // ~10.3s — dramatic pause before "when"
  scene3Start: 318,
  scene3End: 600,    // 20s — core teaching moment, slowed down
  scene4Start: 608,
  scene4End: 888,    // ~29.6s — score + staggered bars + example reveals
  scene5Start: 896,
  scene5End: 1020,   // 34s — CTA with brand dot
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

// Thin horizontal rule — visual breathing room between sections
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
      margin: "40px 0",
      opacity,
    }}
  />
);

// --- Scene 1: Hook — "Wired but tired" ---
// Slower pulse, more breathing room. Recognition before explanation.
const Scene1: React.FC<{ frame: number }> = ({ frame }) => {
  const local = frame - T.scene1Start;

  // Dot fades in early, text waits
  const dotAnim = fadeUp(local, 8, 12);
  const textAnim = fadeUp(local, 24, 18); // slower entrance
  const subAnim = fadeUp(local, 66, 14);  // longer pause before subline

  const exitStart = 132;
  const dotExit = fadeOut(local, exitStart, 10);
  const textExit = fadeOut(local, exitStart + 3, 10);
  const subExit = fadeOut(local, exitStart + 6, 10);
  const inExit = local >= exitStart;

  // Heartbeat-like pulse: slower, organic
  const pulsePhase = (local * 1.0) % 42; // slower cycle
  const pulseScale = interpolate(pulsePhase, [0, 42], [1, 3.5], {
    extrapolateRight: "clamp",
  });
  const pulseOpacity = interpolate(pulsePhase, [0, 42], [0.5, 0], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  // Second ring (offset) for depth
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
      {/* Alarm dot with double pulse ring */}
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
            background: COLORS.accent,
            boxShadow: `0 0 20px rgba(232, 155, 62, 0.3)`,
          }}
        />
        {local > 8 && (
          <>
            <div
              style={{
                position: "absolute",
                inset: -16,
                borderRadius: "50%",
                border: `3px solid ${COLORS.accent}`,
                opacity: pulseOpacity,
                transform: `scale(${pulseScale})`,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: -16,
                borderRadius: "50%",
                border: `2px solid ${COLORS.accent}`,
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
          fontSize: 164,
          color: COLORS.text,
          letterSpacing: "-0.02em",
          lineHeight: 1.15,
          textAlign: "center",
          ...(inExit ? textExit : textAnim),
        }}
      >
        Wired but tired.
      </div>

      <Divider
        opacity={inExit ? subExit.opacity : subAnim.opacity}
        width={80}
      />

      <div
        style={{
          fontFamily: FONTS.sans,
          fontSize: 52,
          color: COLORS.textSecondary,
          fontWeight: 400,
          letterSpacing: "0.03em",
          ...(inExit ? subExit : subAnim),
        }}
      >
        That's not a mystery. It's a pattern.
      </div>
    </div>
  );
};

// --- Scene 2: The Flip ---
// Dramatic pause before "when." — the beat drop.
const Scene2: React.FC<{ frame: number }> = ({ frame }) => {
  const local = frame - T.scene2Start;
  const lineAnim = fadeUp(local, 10, 16);

  // "It's when." appears after a real pause — 1.8s after first line
  const whenDelay = 54;
  const whenOpacity = interpolate(local, [whenDelay, whenDelay + 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const whenScale = interpolate(
    local,
    [whenDelay, whenDelay + 18],
    [0.88, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.back(1.4)),
    }
  );
  const whenY = interpolate(local, [whenDelay, whenDelay + 16], [24, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // Subtle line that separates the two ideas
  const lineOpacity = interpolate(local, [whenDelay - 6, whenDelay + 6], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const exitStart = 108;
  const lineExit = fadeOut(local, exitStart, 10);
  const whenExit = fadeOut(local, exitStart + 4, 10);
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
        opacity: sceneOpacity(frame, T.scene2Start, T.scene2End),
      }}
    >
      <div
        style={{
          fontFamily: FONTS.serif,
          fontSize: 136,
          textAlign: "center",
          lineHeight: 1.2,
          ...(inExit ? lineExit : lineAnim),
        }}
      >
        It's not <span style={{ color: COLORS.accent }}>how much</span>{" "}
        cortisol.
      </div>

      <Divider opacity={inExit ? whenExit.opacity : lineOpacity} width={60} />

      <div
        style={{
          fontFamily: FONTS.serif,
          fontSize: 172,
          color: COLORS.accent,
          textAlign: "center",
          opacity: inExit ? whenExit.opacity : whenOpacity,
          transform: inExit
            ? whenExit.transform
            : `translateY(${whenY}px) scale(${whenScale})`,
        }}
      >
        It's <em>when</em>.
      </div>
    </div>
  );
};

// --- Scene 3: The Curve — Core teaching moment ---
// Two-act structure: "What should happen" → "What burnout looks like"
const Scene3: React.FC<{ frame: number }> = ({ frame }) => {
  const local = frame - T.scene3Start;

  // Act 1: "What should happen"
  const titleAnim = fadeUp(local, 6, 12);
  const act1LabelAnim = fadeUp(local, 15, 14);
  const containerAnim = fadeUp(local, 27, 14);

  // Healthy curve draw — slower for comprehension
  const healthyProgress = interpolate(local, [36, 90], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const healthyAreaOpacity = interpolate(local, [54, 84], [0, 0.8], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const spikeLabelOpacity = interpolate(local, [72, 84], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // "This is normal" annotation
  const normalLabelOpacity = interpolate(local, [90, 102], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Pause to absorb healthy curve — 102-120 is breathing room

  // Act 2: "What burnout looks like" — label change
  const act2LabelOpacity = interpolate(local, [126, 138], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const act1LabelFade = interpolate(local, [120, 132], [1, 0.3], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Broken curve draws
  const brokenProgress = interpolate(local, [138, 192], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const brokenOpacity = interpolate(local, [138, 150], [0, 0.9], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const brokenAreaOpacity = interpolate(local, [162, 186], [0, 0.6], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const nightLabelOpacity = interpolate(local, [180, 192], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Legend
  const legendAnim = fadeUp(local, 198, 12);

  // Hold — the "poster frame" (198-252)

  // Exit
  const exitStart = 252;
  const titleExit = fadeOut(local, exitStart, 8);
  const containerExit = fadeOut(local, exitStart + 3, 8);
  const inExit = local >= exitStart;

  const healthyPath =
    "M40,280 C80,280 120,60 200,50 C280,40 340,180 430,200 C520,220 620,260 720,270 C760,275 800,278 820,280";
  const healthyAreaPath =
    "M40,280 C80,280 120,60 200,50 C280,40 340,180 430,200 C520,220 620,260 720,270 C760,275 800,278 820,280 L820,300 L40,300 Z";
  const brokenPath =
    "M40,160 C80,155 120,140 200,150 C280,160 340,145 430,140 C520,135 620,130 720,120 C760,115 800,110 820,108";
  const brokenAreaPath =
    "M40,160 C80,155 120,140 200,150 C280,160 340,145 430,140 C520,135 620,130 720,120 C760,115 800,110 820,108 L820,300 L40,300 Z";

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 90px",
        opacity: sceneOpacity(frame, T.scene3Start, T.scene3End),
      }}
    >
      {/* Section header */}
      <div
        style={{
          fontFamily: FONTS.sans,
          fontSize: 42,
          fontWeight: 600,
          color: COLORS.textSecondary,
          textTransform: "uppercase" as const,
          letterSpacing: "0.14em",
          marginBottom: 20,
          ...(inExit ? titleExit : titleAnim),
        }}
      >
        Your cortisol rhythm
      </div>

      {/* Two-line teaching text that evolves */}
      <div
        style={{
          fontFamily: FONTS.serif,
          fontSize: 88,
          color: COLORS.text,
          marginBottom: 52,
          textAlign: "center",
          lineHeight: 1.25,
          ...(inExit ? titleExit : act1LabelAnim),
        }}
      >
        <span style={{ opacity: act1LabelFade }}>
          Every morning, cortisol spikes 38–75%.
          <br />
          That's healthy.
        </span>
        {local >= 126 && (
          <div
            style={{
              fontSize: 48,
              fontFamily: FONTS.sans,
              fontWeight: 500,
              color: COLORS.red,
              marginTop: 16,
              opacity: act2LabelOpacity,
              letterSpacing: "0.02em",
            }}
          >
            Unless the rhythm never comes down.
          </div>
        )}
      </div>

      {/* Chart */}
      <div
        style={{
          width: "100%",
          maxWidth: 1720,
          ...(inExit ? containerExit : containerAnim),
        }}
      >
        <svg viewBox="0 0 860 340" style={{ width: "100%", height: "auto" }}>
          <defs>
            <linearGradient id="greenG" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={COLORS.green} stopOpacity={0.15} />
              <stop offset="100%" stopColor={COLORS.green} stopOpacity={0} />
            </linearGradient>
            <linearGradient id="redG" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={COLORS.red} stopOpacity={0.15} />
              <stop offset="100%" stopColor={COLORS.red} stopOpacity={0} />
            </linearGradient>
          </defs>
          {/* Grid */}
          <line x1="40" y1="300" x2="820" y2="300" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <line x1="40" y1="220" x2="820" y2="220" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4,8" />
          <line x1="40" y1="140" x2="820" y2="140" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4,8" />
          <line x1="40" y1="60" x2="820" y2="60" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4,8" />
          <text x="30" y="305" fill="rgba(255,255,255,0.2)" fontSize="12" fontFamily={FONTS.sans} textAnchor="end">Low</text>
          <text x="30" y="65" fill="rgba(255,255,255,0.2)" fontSize="12" fontFamily={FONTS.sans} textAnchor="end">High</text>

          {/* Healthy area */}
          <path d={healthyAreaPath} fill="url(#greenG)" opacity={healthyAreaOpacity} />
          {/* Healthy curve */}
          <path
            d={healthyPath}
            fill="none"
            stroke={COLORS.green}
            strokeWidth={3}
            strokeLinecap="round"
            opacity={0.9}
            strokeDasharray={800}
            strokeDashoffset={800 * (1 - healthyProgress)}
          />
          {/* Spike label */}
          <text x="200" y="35" fill={COLORS.green} fontSize="14" fontFamily={FONTS.sans} fontWeight="600" textAnchor="middle" opacity={spikeLabelOpacity}>
            ↑ Morning spike
          </text>
          {/* "This is normal" label — appears after healthy curve completes */}
          <text x="430" y="240" fill="rgba(110,200,155,0.5)" fontSize="13" fontFamily={FONTS.sans} fontWeight="500" textAnchor="middle" opacity={normalLabelOpacity}>
            Cortisol Awakening Response
          </text>

          {/* Broken area */}
          <path d={brokenAreaPath} fill="url(#redG)" opacity={brokenAreaOpacity} />
          {/* Broken curve */}
          <path
            d={brokenPath}
            fill="none"
            stroke={COLORS.red}
            strokeWidth={3}
            strokeLinecap="round"
            opacity={brokenOpacity}
            strokeDasharray={800}
            strokeDashoffset={800 * (1 - brokenProgress)}
          />
          {/* Night label */}
          <text x="720" y="100" fill={COLORS.red} fontSize="14" fontFamily={FONTS.sans} fontWeight="600" textAnchor="middle" opacity={nightLabelOpacity}>
            Still elevated ↗
          </text>
        </svg>

        {/* Time labels */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px 80px 0",
            fontSize: 36,
            color: COLORS.textSecondary,
            fontFamily: FONTS.sans,
            fontWeight: 500,
          }}
        >
          <span>6 AM</span>
          <span>12 PM</span>
          <span>6 PM</span>
          <span>12 AM</span>
        </div>

        {/* Legend */}
        <div
          style={{
            display: "flex",
            gap: 64,
            justifyContent: "center",
            marginTop: 44,
            fontSize: 40,
            fontFamily: FONTS.sans,
            fontWeight: 500,
            ...(inExit ? containerExit : legendAnim),
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 18, height: 18, borderRadius: "50%", background: COLORS.green }} />
            <span style={{ color: COLORS.green }}>Healthy rhythm</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 18, height: 18, borderRadius: "50%", background: COLORS.red }} />
            <span style={{ color: COLORS.red }}>Disrupted rhythm</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Scene 4: The Score ---
// Slower count-up, staggered bar reveals, breathing room.
const Scene4: React.FC<{ frame: number }> = ({ frame }) => {
  const local = frame - T.scene4Start;
  const labelAnim = fadeUp(local, 8, 12);

  // Count up — slower for drama
  const target = 67;
  const countProgress = interpolate(local, [15, 60], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const currentNum = Math.round(countProgress * target);
  const numOpacity = interpolate(local, [15, 24], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const numScale = interpolate(local, [15, 30], [0.82, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.back(1.3)),
  });

  // Color shift
  let numColor = COLORS.green;
  if (currentNum >= 25) numColor = COLORS.accent;
  if (currentNum >= 45) numColor = COLORS.red;

  const unitAnim = fadeUp(local, 60, 12);

  // Staggered bar reveals — each bar waits for the previous
  const bars = [
    {
      label: "STRESS PERCEPTION", color: COLORS.accent, width: 71, value: "25 / 35", delay: 78,
      examples: "Racing thoughts · Feeling overwhelmed",
    },
    {
      label: "LIFESTYLE FACTORS", color: COLORS.teal, width: 55, value: "22 / 40", delay: 96,
      examples: "Poor sleep · High caffeine · No exercise",
    },
    {
      label: "PHYSICAL SYMPTOMS", color: COLORS.red, width: 80, value: "20 / 25", delay: 114,
      examples: "Jaw clenching · Weight gain · Fatigue",
    },
  ];

  // Examples appear after all bars are in
  const examplesDelay = 138; // ~4.6s into scene

  // Exit — pushed later to accommodate examples
  const exitStart = 252;
  const inExit = local >= exitStart;
  const labelExit = fadeOut(local, exitStart, 10);
  const numExit = fadeOut(local, exitStart + 3, 10);
  const unitExit = fadeOut(local, exitStart + 5, 10);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: sceneOpacity(frame, T.scene4Start, T.scene4End),
      }}
    >
      <div
        style={{
          fontFamily: FONTS.sans,
          fontSize: 44,
          fontWeight: 600,
          color: COLORS.textSecondary,
          textTransform: "uppercase" as const,
          letterSpacing: "0.12em",
          marginBottom: 28,
          ...(inExit ? labelExit : labelAnim),
        }}
      >
        Your cortisol stress score
      </div>

      <div
        style={{
          fontFamily: FONTS.serif,
          fontSize: 340,
          color: numColor,
          lineHeight: 1,
          opacity: inExit ? numExit.opacity : numOpacity,
          transform: `scale(${inExit ? Math.max(0, numExit.opacity) : numScale})`,
        }}
      >
        {currentNum}
      </div>

      <div
        style={{
          fontFamily: FONTS.sans,
          fontSize: 50,
          color: COLORS.textSecondary,
          marginTop: 10,
          fontWeight: 500,
          ...(inExit ? unitExit : unitAnim),
        }}
      >
        out of 100 — Elevated Cortisol Risk
      </div>

      {/* Staggered bars */}
      <div
        style={{
          display: "flex",
          gap: 40,
          marginTop: 64,
        }}
      >
        {bars.map((bar, i) => {
          const barLabelAnim = fadeUp(local, bar.delay, 10);
          const barFillProgress = interpolate(
            local,
            [bar.delay + 6, bar.delay + 36],
            [0, 1],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }
          );
          const barValueAnim = fadeUp(local, bar.delay + 24, 10);
          const barExit = inExit ? fadeOut(local, exitStart + 6 + i * 3, 8) : null;

          // Example text fades in after all bars are shown
          const exampleOpacity = interpolate(
            local,
            [examplesDelay + i * 18, examplesDelay + i * 18 + 14],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          );
          const exampleY = interpolate(
            local,
            [examplesDelay + i * 18, examplesDelay + i * 18 + 14],
            [12, 0],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) }
          );

          return (
            <div
              key={bar.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 18,
                width: 380,
                ...(barExit || barLabelAnim),
              }}
            >
              <div
                style={{
                  fontSize: 30,
                  color: COLORS.textSecondary,
                  fontFamily: FONTS.sans,
                  fontWeight: 600,
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.08em",
                }}
              >
                {bar.label}
              </div>
              <div
                style={{
                  width: "100%",
                  height: 14,
                  background: "rgba(255,255,255,0.06)",
                  borderRadius: 7,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    borderRadius: 7,
                    background: bar.color,
                    width: `${bar.width * barFillProgress}%`,
                    boxShadow:
                      barFillProgress > 0.5
                        ? `0 0 12px ${bar.color}40`
                        : "none",
                  }}
                />
              </div>
              <div
                style={{
                  fontFamily: FONTS.sans,
                  fontSize: 40,
                  fontWeight: 700,
                  color: COLORS.text,
                  ...(barExit || barValueAnim),
                }}
              >
                {bar.value}
              </div>
              {/* Example symptoms — stacked, larger for Twitter readability */}
              <div
                style={{
                  fontFamily: FONTS.sans,
                  fontSize: 34,
                  color: `${bar.color}bb`,
                  fontWeight: 500,
                  textAlign: "center",
                  lineHeight: 1.7,
                  marginTop: 8,
                  opacity: inExit ? (barExit?.opacity ?? 0) : exampleOpacity,
                  transform: inExit ? barExit?.transform : `translateY(${exampleY}px)`,
                }}
              >
                {bar.examples.split(" · ").map((ex: string, j: number) => (
                  <div key={j}>{ex}</div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// --- Scene 5: CTA — "What's your score?" with brand dot ---
const Scene5: React.FC<{ frame: number }> = ({ frame }) => {
  const local = frame - T.scene5Start;
  const dotAnim = fadeUp(local, 6, 12);
  const questionAnim = fadeUp(local, 14, 18);
  const urlAnim = fadeUp(local, 40, 14);
  const taglineAnim = fadeUp(local, 58, 12);

  // Brand pulse — same rhythm as Scene 1
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
      {/* Brand dot — callbacks to Scene 1 */}
      <div
        style={{
          position: "relative",
          width: 20,
          height: 20,
          marginBottom: 48,
          ...dotAnim,
        }}
      >
        <div
          style={{
            width: 22,
            height: 22,
            borderRadius: "50%",
            background: COLORS.accent,
            boxShadow: `0 0 16px rgba(232, 155, 62, 0.3)`,
          }}
        />
        {local > 6 && (
          <div
            style={{
              position: "absolute",
              inset: -12,
              borderRadius: "50%",
              border: `3px solid ${COLORS.accent}`,
              opacity: pulseOpacity,
              transform: `scale(${pulseScale})`,
            }}
          />
        )}
      </div>

      <div
        style={{
          fontFamily: FONTS.serif,
          fontSize: 156,
          color: COLORS.text,
          textAlign: "center",
          lineHeight: 1.15,
          marginBottom: 64,
          ...questionAnim,
        }}
      >
        What's <span style={{ color: COLORS.accent }}>your</span> score?
      </div>

      <div
        style={{
          fontFamily: FONTS.sans,
          fontSize: 46,
          color: COLORS.accent,
          fontWeight: 600,
          letterSpacing: "0.02em",
          padding: "28px 64px",
          border: `3px solid rgba(232, 155, 62, 0.25)`,
          borderRadius: 20,
          background: "rgba(232, 155, 62, 0.04)",
          ...urlAnim,
        }}
      >
        healthcalculators.xyz/cortisol-stress-assessment
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
        Free. Evidence-based. 2 minutes.
      </div>
    </div>
  );
};

// --- Main Composition ---
export const CortisolAnimation: React.FC = () => {
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
