import React from "react";
import {
  useCurrentFrame,
  interpolate,
  Easing,
} from "remotion";

// --- Design tokens (same system as cortisol) ---
const COLORS = {
  bg: "#0a0f1a",
  text: "#E0E0E0",
  textSecondary: "#8a919e",
  accent: "#e89b3e",
  teal: "#0e7a7e",
  tealLight: "#12a8a8",
  green: "#6ec89b",
};

const FONTS = {
  serif: "'DM Serif Display', Georgia, serif",
  sans: "'Inter', -apple-system, sans-serif",
};

// --- Timing (in frames at 30fps) ---
// Total: 32s = 960 frames
const T = {
  scene1Start: 0,
  scene1End: 155,     // ~5.2s — recognition hook
  scene2Start: 162,
  scene2End: 310,     // ~10.3s — counterintuitive reframe
  scene3Start: 318,
  scene3End: 600,     // 20s — the decay curve (core teaching)
  scene4Start: 608,
  scene4End: 820,     // ~27.3s — the rule / timeline (extended for reading)
  scene5Start: 828,
  scene5End: 960,     // 32s — CTA
};

// --- Helpers (same patterns as cortisol) ---
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

// --- Caffeine decay formula ---
// C(t) = 95 * (0.5)^(t/5.7) where t = hours
function caffeineLevel(hours: number): number {
  return 95 * Math.pow(0.5, hours / 5.7);
}

// Generate SVG path for the decay curve
// Chart area: x from 60 to 800, y from 40 to 300
function generateDecayPath(): string {
  const points: string[] = [];
  const xMin = 60;
  const xMax = 800;
  const yMin = 50;
  const yMax = 300;
  const tMax = 12; // hours

  for (let i = 0; i <= 120; i++) {
    const t = (i / 120) * tMax;
    const x = xMin + (t / tMax) * (xMax - xMin);
    const mg = caffeineLevel(t);
    // Map 0-95mg to yMax-yMin
    const y = yMax - (mg / 95) * (yMax - yMin);
    points.push(`${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return points.join(" ");
}

function generateDecayAreaPath(): string {
  const path = generateDecayPath();
  // Close the area: go to bottom-right, bottom-left, back to start
  return `${path} L800,300 L60,300 Z`;
}

// Map hours to x coordinate
function hoursToX(t: number): number {
  return 60 + (t / 12) * (800 - 60);
}

// Map mg to y coordinate
function mgToY(mg: number): number {
  return 300 - (mg / 95) * (300 - 50);
}

// --- Scene 1: Hook — "Your brain won't shut off at midnight?" ---
const Scene1: React.FC<{ frame: number }> = ({ frame }) => {
  const local = frame - T.scene1Start;

  const dotAnim = fadeUp(local, 8, 12);
  const textAnim = fadeUp(local, 24, 18);
  const subAnim = fadeUp(local, 66, 14);

  const exitStart = 122;
  const dotExit = fadeOut(local, exitStart, 10);
  const textExit = fadeOut(local, exitStart + 3, 10);
  const subExit = fadeOut(local, exitStart + 6, 10);
  const inExit = local >= exitStart;

  // Heartbeat-like pulse (same rhythm as cortisol)
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
      {/* Teal pulsing dot — caffeine color */}
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
            background: COLORS.teal,
            boxShadow: `0 0 20px rgba(14, 122, 126, 0.4)`,
          }}
        />
        {local > 8 && (
          <>
            <div
              style={{
                position: "absolute",
                inset: -16,
                borderRadius: "50%",
                border: `3px solid ${COLORS.teal}`,
                opacity: pulseOpacity,
                transform: `scale(${pulseScale})`,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: -16,
                borderRadius: "50%",
                border: `2px solid ${COLORS.teal}`,
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
          fontSize: 148,
          color: COLORS.text,
          letterSpacing: "-0.02em",
          lineHeight: 1.15,
          textAlign: "center",
          padding: "0 80px",
          ...(inExit ? textExit : textAnim),
        }}
      >
        Can't sleep?
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
        That's not insomnia. It's chemistry.
      </div>
    </div>
  );
};

// --- Scene 2: The Reframe — "It's not the coffee. It's when you drank it." ---
const Scene2: React.FC<{ frame: number }> = ({ frame }) => {
  const local = frame - T.scene2Start;
  const lineAnim = fadeUp(local, 10, 16);

  // "It's the half-life." appears after a real pause — 1.8s
  const flipDelay = 54;
  const flipOpacity = interpolate(local, [flipDelay, flipDelay + 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const flipScale = interpolate(
    local,
    [flipDelay, flipDelay + 18],
    [0.88, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.back(1.4)),
    }
  );
  const flipY = interpolate(local, [flipDelay, flipDelay + 16], [24, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const lineOpacity = interpolate(local, [flipDelay - 6, flipDelay + 6], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const exitStart = 118;
  const lineExit = fadeOut(local, exitStart, 10);
  const flipExit = fadeOut(local, exitStart + 4, 10);
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
          padding: "0 80px",
          ...(inExit ? lineExit : lineAnim),
        }}
      >
        It's not the <span style={{ color: COLORS.teal }}>coffee</span>.
      </div>

      <Divider opacity={inExit ? flipExit.opacity : lineOpacity} width={60} />

      <div
        style={{
          fontFamily: FONTS.serif,
          fontSize: 164,
          color: COLORS.teal,
          textAlign: "center",
          opacity: inExit ? flipExit.opacity : flipOpacity,
          transform: inExit
            ? flipExit.transform
            : `translateY(${flipY}px) scale(${flipScale})`,
        }}
      >
        It's <em>when</em> you drank it.
      </div>
    </div>
  );
};

// --- Scene 3: The Curve — Animated caffeine decay ---
const Scene3: React.FC<{ frame: number }> = ({ frame }) => {
  const local = frame - T.scene3Start;

  // Progressive disclosure
  const titleAnim = fadeUp(local, 6, 12);
  const subtitleAnim = fadeUp(local, 20, 14);
  const containerAnim = fadeUp(local, 34, 14);

  // Curve draw — slower for comprehension
  const curveProgress = interpolate(local, [42, 108], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const areaOpacity = interpolate(local, [66, 96], [0, 0.7], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // "95mg" start label
  const startLabelOpacity = interpolate(local, [48, 60], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Annotation 1: "7:42 PM — still 50%" appears after curve is ~60% drawn
  const ann1Delay = 114;
  const ann1Opacity = interpolate(local, [ann1Delay, ann1Delay + 14], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const ann1Y = interpolate(local, [ann1Delay, ann1Delay + 14], [16, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // Annotation 2: "1:24 AM — still 25%" appears after pause
  const ann2Delay = 156;
  const ann2Opacity = interpolate(local, [ann2Delay, ann2Delay + 14], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const ann2Y = interpolate(local, [ann2Delay, ann2Delay + 14], [16, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // Framework insight line at bottom
  const insightDelay = 192;
  const insightAnim = fadeUp(local, insightDelay, 14);

  // Hold for poster frame — 192-252

  // Exit
  const exitStart = 252;
  const titleExit = fadeOut(local, exitStart, 8);
  const containerExit = fadeOut(local, exitStart + 3, 8);
  const inExit = local >= exitStart;

  const decayPath = generateDecayPath();
  const decayAreaPath = generateDecayAreaPath();

  // Calculate annotation positions
  // 50% = 47.5mg at t = 5.7 hours (that's 7:42 PM if coffee at 2 PM)
  const t50 = 5.7; // hours after coffee
  const x50 = hoursToX(t50);
  const y50 = mgToY(47.5);

  // 25% = 23.75mg at t = 11.4 hours (that's 1:24 AM)
  const t25 = 11.4;
  const x25 = hoursToX(t25);
  const y25 = mgToY(23.75);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 80px",
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
          marginBottom: 16,
          ...(inExit ? titleExit : titleAnim),
        }}
      >
        Caffeine in your bloodstream
      </div>

      {/* Teaching text */}
      <div
        style={{
          fontFamily: FONTS.serif,
          fontSize: 80,
          color: COLORS.text,
          marginBottom: 44,
          textAlign: "center",
          lineHeight: 1.25,
          ...(inExit ? titleExit : subtitleAnim),
        }}
      >
        One coffee at <span style={{ color: COLORS.teal }}>2:00 PM</span>.
        <br />
        Here's what happens next.
      </div>

      {/* Chart */}
      <div
        style={{
          width: "100%",
          maxWidth: 1900,
          ...(inExit ? containerExit : containerAnim),
        }}
      >
        <svg viewBox="0 0 860 340" style={{ width: "100%", height: "auto" }}>
          <defs>
            <linearGradient id="tealG" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={COLORS.teal} stopOpacity={0.2} />
              <stop offset="100%" stopColor={COLORS.teal} stopOpacity={0} />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          <line x1="60" y1="300" x2="800" y2="300" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <line x1="60" y1="237" x2="800" y2="237" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4,8" />
          <line x1="60" y1="175" x2="800" y2="175" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4,8" />
          <line x1="60" y1="112" x2="800" y2="112" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4,8" />
          <line x1="60" y1="50" x2="800" y2="50" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4,8" />

          {/* Y axis labels */}
          <text x="50" y="305" fill="rgba(255,255,255,0.2)" fontSize="12" fontFamily={FONTS.sans} textAnchor="end">0mg</text>
          <text x="50" y="178" fill="rgba(255,255,255,0.2)" fontSize="12" fontFamily={FONTS.sans} textAnchor="end">47mg</text>
          <text x="50" y="55" fill="rgba(255,255,255,0.2)" fontSize="12" fontFamily={FONTS.sans} textAnchor="end">95mg</text>

          {/* Area under curve */}
          <path d={decayAreaPath} fill="url(#tealG)" opacity={areaOpacity} />

          {/* The decay curve */}
          <path
            d={decayPath}
            fill="none"
            stroke={COLORS.teal}
            strokeWidth={3.5}
            strokeLinecap="round"
            opacity={0.9}
            strokeDasharray={1200}
            strokeDashoffset={1200 * (1 - curveProgress)}
          />

          {/* 95mg start dot */}
          <circle
            cx={60}
            cy={50}
            r={5}
            fill={COLORS.tealLight}
            opacity={startLabelOpacity}
          />
          <text
            x={80}
            y={44}
            fill={COLORS.tealLight}
            fontSize="15"
            fontFamily={FONTS.sans}
            fontWeight="700"
            opacity={startLabelOpacity}
          >
            95mg
          </text>

          {/* Annotation 1: 50% mark */}
          {local >= ann1Delay - 2 && (
            <>
              {/* Vertical dashed line */}
              <line
                x1={x50}
                y1={y50}
                x2={x50}
                y2={300}
                stroke={COLORS.accent}
                strokeWidth={1.5}
                strokeDasharray="4,6"
                opacity={ann1Opacity * 0.4}
              />
              {/* Dot on curve */}
              <circle
                cx={x50}
                cy={y50}
                r={6}
                fill={COLORS.accent}
                opacity={ann1Opacity}
              />
              {/* Label */}
              <text
                x={x50 + 14}
                y={y50 - 18}
                fill={COLORS.accent}
                fontSize="16"
                fontFamily={FONTS.sans}
                fontWeight="700"
                opacity={ann1Opacity}
              >
                7:42 PM
              </text>
              <text
                x={x50 + 14}
                y={y50 + 2}
                fill={COLORS.accent}
                fontSize="13"
                fontFamily={FONTS.sans}
                fontWeight="500"
                opacity={ann1Opacity * 0.8}
              >
                Half your coffee is still active
              </text>
            </>
          )}

          {/* Annotation 2: 25% mark */}
          {local >= ann2Delay - 2 && (
            <>
              <line
                x1={x25}
                y1={y25}
                x2={x25}
                y2={300}
                stroke={COLORS.accent}
                strokeWidth={1.5}
                strokeDasharray="4,6"
                opacity={ann2Opacity * 0.4}
              />
              <circle
                cx={x25}
                cy={y25}
                r={6}
                fill={COLORS.accent}
                opacity={ann2Opacity}
              />
              <text
                x={x25 - 10}
                y={y25 - 18}
                fill={COLORS.accent}
                fontSize="16"
                fontFamily={FONTS.sans}
                fontWeight="700"
                opacity={ann2Opacity}
                textAnchor="end"
              >
                1:24 AM
              </text>
              <text
                x={x25 - 10}
                y={y25 + 2}
                fill={COLORS.accent}
                fontSize="13"
                fontFamily={FONTS.sans}
                fontWeight="500"
                opacity={ann2Opacity * 0.8}
                textAnchor="end"
              >
                A quarter still blocking sleep
              </text>
            </>
          )}
        </svg>

        {/* Time labels */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "16px 60px 0 60px",
            fontSize: 38,
            color: COLORS.textSecondary,
            fontFamily: FONTS.sans,
            fontWeight: 500,
          }}
        >
          <span>2 PM</span>
          <span>5 PM</span>
          <span>8 PM</span>
          <span>11 PM</span>
          <span>2 AM</span>
        </div>
      </div>

      {/* Framework insight line */}
      <div
        style={{
          fontFamily: FONTS.serif,
          fontSize: 52,
          color: COLORS.textSecondary,
          marginTop: 48,
          textAlign: "center",
          lineHeight: 1.4,
          fontStyle: "italic",
          ...(inExit ? containerExit : insightAnim),
        }}
      >
"I sleep fine after coffee" is a feeling. This is the math.
      </div>
    </div>
  );
};

// --- Scene 4: The Rule — Clock/timeline visual ---
const Scene4: React.FC<{ frame: number }> = ({ frame }) => {
  const local = frame - T.scene4Start;

  const labelAnim = fadeUp(local, 8, 12);
  const ruleAnim = fadeUp(local, 28, 16);
  const dividerAnim = fadeUp(local, 54, 10);

  // Example appears after pause
  const exampleDelay = 66;
  const exampleAnim = fadeUp(local, exampleDelay, 14);

  // Timeline bar
  const timelineDelay = 42;
  const timelineOpacity = interpolate(local, [timelineDelay, timelineDelay + 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const timelineFill = interpolate(local, [timelineDelay + 12, timelineDelay + 42], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // Second example line
  const example2Delay = 96;
  const example2Anim = fadeUp(local, example2Delay, 14);

  // Extended exit — give examples time to be read
  const exitStart = 180;
  const labelExit = fadeOut(local, exitStart, 10);
  const ruleExit = fadeOut(local, exitStart + 3, 10);
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
        padding: "60px 80px",
        opacity: sceneOpacity(frame, T.scene4Start, T.scene4End),
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
          marginBottom: 36,
          ...(inExit ? labelExit : labelAnim),
        }}
      >
        The rule
      </div>

      {/* Main rule */}
      <div
        style={{
          fontFamily: FONTS.serif,
          fontSize: 120,
          color: COLORS.text,
          textAlign: "center",
          lineHeight: 1.2,
          marginBottom: 52,
          ...(inExit ? ruleExit : ruleAnim),
        }}
      >
        Your cutoff:{" "}
        <span style={{ color: COLORS.teal }}>8-10 hours</span>
        <br />
        before bed.
      </div>

      {/* Visual timeline bar */}
      <div
        style={{
          width: "85%",
          maxWidth: 1600,
          opacity: inExit ? labelExit.opacity : timelineOpacity,
          transform: inExit ? labelExit.transform : undefined,
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 20,
            background: "rgba(255,255,255,0.06)",
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          {/* Caffeine zone (left portion — 0 to ~58% = 2PM to ~8PM) */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              height: "100%",
              width: `${58 * timelineFill}%`,
              background: `linear-gradient(90deg, ${COLORS.teal}, rgba(14, 122, 126, 0.3))`,
              borderRadius: 10,
            }}
          />
          {/* Sleep zone (right portion) */}
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              height: "100%",
              width: `${22 * timelineFill}%`,
              background: `linear-gradient(90deg, rgba(110, 200, 155, 0.2), ${COLORS.green}40)`,
              borderRadius: "0 10px 10px 0",
            }}
          />
        </div>

        {/* Timeline labels */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px 0 0",
            fontSize: 36,
            color: COLORS.textSecondary,
            fontFamily: FONTS.sans,
            fontWeight: 500,
          }}
        >
          <span style={{ color: COLORS.teal }}>2 PM</span>
          <span>5 PM</span>
          <span>8 PM</span>
          <span style={{ color: COLORS.green }}>10 PM</span>
          <span>12 AM</span>
        </div>

        {/* Marker labels */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "8px 0 0",
            fontSize: 30,
            fontFamily: FONTS.sans,
            fontWeight: 600,
          }}
        >
          <span style={{ color: COLORS.teal, opacity: timelineOpacity }}>Last coffee</span>
          <span style={{ color: COLORS.green, opacity: timelineOpacity }}>Bedtime</span>
        </div>
      </div>

      <Divider opacity={inExit ? labelExit.opacity : dividerAnim.opacity} width={100} />

      {/* Specific example */}
      <div
        style={{
          fontFamily: FONTS.sans,
          fontSize: 54,
          color: COLORS.text,
          textAlign: "center",
          fontWeight: 500,
          lineHeight: 1.6,
          ...(inExit ? ruleExit : exampleAnim),
        }}
      >
        Bedtime <span style={{ color: COLORS.green, fontWeight: 700 }}>10 PM</span>
        {"  "}
        <span style={{ color: COLORS.textSecondary }}>{"  \u2192  "}</span>
        {"  "}
        Last coffee by <span style={{ color: COLORS.teal, fontWeight: 700 }}>2 PM</span>
      </div>

      {/* Second example */}
      <div
        style={{
          fontFamily: FONTS.sans,
          fontSize: 54,
          color: COLORS.text,
          textAlign: "center",
          fontWeight: 500,
          lineHeight: 1.6,
          marginTop: 20,
          ...(inExit ? ruleExit : example2Anim),
        }}
      >
        Bedtime <span style={{ color: COLORS.green, fontWeight: 700 }}>11 PM</span>
        {"  "}
        <span style={{ color: COLORS.textSecondary }}>{"  \u2192  "}</span>
        {"  "}
        Last coffee by <span style={{ color: COLORS.teal, fontWeight: 700 }}>3 PM</span>
      </div>
    </div>
  );
};

// --- Scene 5: CTA — "What's your cutoff?" ---
const Scene5: React.FC<{ frame: number }> = ({ frame }) => {
  const local = frame - T.scene5Start;
  const dotAnim = fadeUp(local, 6, 12);
  const questionAnim = fadeUp(local, 14, 18);
  const urlAnim = fadeUp(local, 42, 14);
  const taglineAnim = fadeUp(local, 62, 12);

  // Green pulsing dot (brand element)
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
          fontSize: 156,
          color: COLORS.text,
          textAlign: "center",
          lineHeight: 1.15,
          marginBottom: 64,
          ...questionAnim,
        }}
      >
        What's <span style={{ color: COLORS.teal }}>your</span> cutoff?
      </div>

      <div
        style={{
          fontFamily: FONTS.sans,
          fontSize: 44,
          color: COLORS.teal,
          fontWeight: 600,
          letterSpacing: "0.02em",
          padding: "28px 60px",
          border: `3px solid rgba(14, 122, 126, 0.3)`,
          borderRadius: 20,
          background: "rgba(14, 122, 126, 0.04)",
          ...urlAnim,
        }}
      >
        healthcalculators.xyz/caffeine-half-life-calculator
      </div>

      <div
        style={{
          fontFamily: FONTS.sans,
          fontSize: 38,
          color: COLORS.textSecondary,
          marginTop: 40,
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
export const CaffeineAnimation: React.FC = () => {
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
