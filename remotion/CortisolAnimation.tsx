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
const T = {
  scene1Start: 0,
  scene1End: 150, // 5s
  scene2Start: 155,
  scene2End: 270, // 9s
  scene3Start: 275,
  scene3End: 510, // 17s
  scene4Start: 515,
  scene4End: 660, // 22s
  scene5Start: 665,
  scene5End: 750, // 25s
};

// --- Helpers ---
function fadeUp(
  frame: number,
  start: number,
  duration: number = 12
): { opacity: number; transform: string } {
  const opacity = interpolate(frame, [start, start + duration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const y = interpolate(frame, [start, start + duration], [48, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  return { opacity, transform: `translateY(${y}px)` };
}

function fadeOut(
  frame: number,
  start: number,
  duration: number = 8
): { opacity: number; transform: string } {
  const opacity = interpolate(frame, [start, start + duration], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const y = interpolate(frame, [start, start + duration], [0, -24], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.in(Easing.cubic),
  });
  return { opacity, transform: `translateY(${y}px)` };
}

function sceneOpacity(frame: number, start: number, end: number): number {
  if (frame < start || frame > end + 10) return 0;
  const fadeInEnd = start + 6;
  const fadeOutStart = end - 6;
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

// --- Scene 1: Hook ---
const Scene1: React.FC<{ frame: number }> = ({ frame }) => {
  const local = frame - T.scene1Start;
  const dotAnim = fadeUp(local, 6, 10);
  const textAnim = fadeUp(local, 18, 15);
  const subAnim = fadeUp(local, 54, 12);
  const exitStart = 120;
  const dotExit = fadeOut(local, exitStart, 8);
  const textExit = fadeOut(local, exitStart + 2, 8);
  const subExit = fadeOut(local, exitStart + 4, 8);

  const inExit = local >= exitStart;

  // Pulsing dot
  const pulseScale = interpolate(
    (local * 1.5) % 36,
    [0, 36],
    [1, 3],
    { extrapolateRight: "clamp" }
  );
  const pulseOpacity = interpolate(
    (local * 1.5) % 36,
    [0, 36],
    [0.6, 0],
    { extrapolateRight: "clamp" }
  );

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
      {/* Alarm dot */}
      <div
        style={{
          position: "relative",
          width: 24,
          height: 24,
          marginBottom: 80,
          ...(inExit ? dotExit : dotAnim),
        }}
      >
        <div
          style={{
            width: 24,
            height: 24,
            borderRadius: "50%",
            background: COLORS.accent,
          }}
        />
        {local > 6 && (
          <div
            style={{
              position: "absolute",
              inset: -16,
              borderRadius: "50%",
              border: `4px solid ${COLORS.accent}`,
              opacity: pulseOpacity,
              transform: `scale(${pulseScale})`,
            }}
          />
        )}
      </div>

      {/* Hook text */}
      <div
        style={{
          fontFamily: FONTS.serif,
          fontSize: 144,
          color: COLORS.text,
          letterSpacing: "-0.02em",
          lineHeight: 1.15,
          textAlign: "center",
          ...(inExit ? textExit : textAnim),
        }}
      >
        Wired but tired.
      </div>

      {/* Subline */}
      <div
        style={{
          fontFamily: FONTS.sans,
          fontSize: 48,
          color: COLORS.textSecondary,
          marginTop: 48,
          fontWeight: 400,
          letterSpacing: "0.02em",
          ...(inExit ? subExit : subAnim),
        }}
      >
        That's not a mystery. It's a pattern.
      </div>
    </div>
  );
};

// --- Scene 2: The Flip ---
const Scene2: React.FC<{ frame: number }> = ({ frame }) => {
  const local = frame - T.scene2Start;
  const lineAnim = fadeUp(local, 9, 15);
  const subDelay = 33; // ~1.1s after line appears
  const subAnim = fadeUp(local, subDelay, 15);
  const subScale = interpolate(
    local,
    [subDelay, subDelay + 15],
    [0.85, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.back(1.5)) }
  );

  const exitStart = 90;
  const lineExit = fadeOut(local, exitStart, 8);
  const subExit = fadeOut(local, exitStart + 3, 8);
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
          fontSize: 128,
          textAlign: "center",
          lineHeight: 1.2,
          ...(inExit ? lineExit : lineAnim),
        }}
      >
        It's not <span style={{ color: COLORS.accent }}>how much</span>{" "}
        cortisol.
      </div>
      <div
        style={{
          fontFamily: FONTS.serif,
          fontSize: 144,
          color: COLORS.accent,
          marginTop: 64,
          textAlign: "center",
          ...(inExit
            ? subExit
            : {
                ...subAnim,
                transform: `translateY(${
                  interpolate(local, [subDelay, subDelay + 15], [32, 0], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                  })
                }px) scale(${subScale})`,
              }),
        }}
      >
        It's <em>when</em>.
      </div>
    </div>
  );
};

// --- Scene 3: The Curve ---
const Scene3: React.FC<{ frame: number }> = ({ frame }) => {
  const local = frame - T.scene3Start;
  const titleAnim = fadeUp(local, 6, 10);
  const labelAnim = fadeUp(local, 12, 12);
  const containerAnim = fadeUp(local, 21, 12);

  // Healthy curve draw progress
  const healthyProgress = interpolate(local, [30, 75], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const healthyAreaOpacity = interpolate(local, [48, 72], [0, 0.8], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const spikeLabelOpacity = interpolate(local, [60, 72], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Broken curve (appears after healthy)
  const brokenProgress = interpolate(local, [96, 141], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const brokenOpacity = interpolate(local, [96, 108], [0, 0.9], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const brokenAreaOpacity = interpolate(local, [114, 138], [0, 0.6], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const nightLabelOpacity = interpolate(local, [126, 138], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const legendAnim = fadeUp(local, 150, 10);

  // Exit
  const exitStart = 205;
  const titleExit = fadeOut(local, exitStart, 7);
  const labelExit = fadeOut(local, exitStart + 2, 7);
  const containerExit = fadeOut(local, exitStart + 4, 7);
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
        padding: "120px 160px",
        opacity: sceneOpacity(frame, T.scene3Start, T.scene3End),
      }}
    >
      <div
        style={{
          fontFamily: FONTS.sans,
          fontSize: 40,
          fontWeight: 600,
          color: COLORS.textSecondary,
          textTransform: "uppercase" as const,
          letterSpacing: "0.12em",
          marginBottom: 32,
          ...(inExit ? titleExit : titleAnim),
        }}
      >
        Your cortisol rhythm
      </div>

      <div
        style={{
          fontFamily: FONTS.serif,
          fontSize: 84,
          color: COLORS.text,
          marginBottom: 96,
          textAlign: "center",
          ...(inExit ? labelExit : labelAnim),
        }}
      >
        Every morning, cortisol spikes 38–75%.
        <br />
        That's healthy.
      </div>

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
          <text x="720" y="105" fill={COLORS.red} fontSize="14" fontFamily={FONTS.sans} fontWeight="600" textAnchor="middle" opacity={nightLabelOpacity}>
            Still elevated ↗
          </text>
        </svg>

        {/* Time labels */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "24px 80px 0",
            fontSize: 32,
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
            marginTop: 80,
            fontSize: 36,
            fontFamily: FONTS.sans,
            fontWeight: 500,
            ...(inExit ? containerExit : legendAnim),
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div style={{ width: 20, height: 20, borderRadius: "50%", background: COLORS.green }} />
            <span style={{ color: COLORS.green }}>Healthy rhythm</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div style={{ width: 20, height: 20, borderRadius: "50%", background: COLORS.red }} />
            <span style={{ color: COLORS.red }}>Broken rhythm</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Scene 4: The Score ---
const Scene4: React.FC<{ frame: number }> = ({ frame }) => {
  const local = frame - T.scene4Start;
  const labelAnim = fadeUp(local, 6, 10);

  // Count up
  const target = 67;
  const countProgress = interpolate(local, [12, 48], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const currentNum = Math.round(countProgress * target);
  const numOpacity = interpolate(local, [12, 21], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const numScale = interpolate(local, [12, 27], [0.8, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.back(1.5)),
  });

  // Color shift
  let numColor = COLORS.green;
  if (currentNum >= 25) numColor = COLORS.accent;
  if (currentNum >= 45) numColor = COLORS.red;

  const unitAnim = fadeUp(local, 48, 10);
  const barsAnim = fadeUp(local, 57, 10);

  // Bar fills
  const barProgress = interpolate(local, [63, 99], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const bars = [
    { label: "PERCEPTION", color: COLORS.accent, width: 71, value: "25 / 35" },
    { label: "LIFESTYLE", color: COLORS.teal, width: 55, value: "22 / 40" },
    { label: "SYMPTOMS", color: COLORS.red, width: 80, value: "20 / 25" },
  ];

  // Exit
  const exitStart = 120;
  const inExit = local >= exitStart;
  const labelExit = fadeOut(local, exitStart, 7);
  const numExit = fadeOut(local, exitStart + 2, 7);
  const unitExit = fadeOut(local, exitStart + 3, 7);
  const barsExit = fadeOut(local, exitStart + 4, 7);

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
          fontSize: 40,
          fontWeight: 600,
          color: COLORS.textSecondary,
          textTransform: "uppercase" as const,
          letterSpacing: "0.12em",
          marginBottom: 40,
          ...(inExit ? labelExit : labelAnim),
        }}
      >
        Your cortisol stress score
      </div>

      <div
        style={{
          fontFamily: FONTS.serif,
          fontSize: 320,
          color: numColor,
          lineHeight: 1,
          opacity: numOpacity,
          transform: `scale(${inExit ? numExit.opacity : numScale})`,
          ...(inExit ? { opacity: numExit.opacity } : {}),
        }}
      >
        {currentNum}
      </div>

      <div
        style={{
          fontFamily: FONTS.sans,
          fontSize: 48,
          color: COLORS.textSecondary,
          marginTop: 16,
          fontWeight: 500,
          ...(inExit ? unitExit : unitAnim),
        }}
      >
        out of 100 — High Cortisol Risk
      </div>

      <div
        style={{
          display: "flex",
          gap: 32,
          marginTop: 96,
          ...(inExit ? barsExit : barsAnim),
        }}
      >
        {bars.map((bar, i) => (
          <div
            key={bar.label}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 20,
              width: 400,
            }}
          >
            <div
              style={{
                fontSize: 28,
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
                height: 16,
                background: "rgba(255,255,255,0.08)",
                borderRadius: 8,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  borderRadius: 8,
                  background: bar.color,
                  width: `${bar.width * barProgress}%`,
                }}
              />
            </div>
            <div
              style={{
                fontFamily: FONTS.sans,
                fontSize: 36,
                fontWeight: 700,
                color: COLORS.text,
              }}
            >
              {bar.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Scene 5: CTA ---
const Scene5: React.FC<{ frame: number }> = ({ frame }) => {
  const local = frame - T.scene5Start;
  const questionAnim = fadeUp(local, 9, 15);
  const urlAnim = fadeUp(local, 27, 12);
  const taglineAnim = fadeUp(local, 39, 10);

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
      <div
        style={{
          fontFamily: FONTS.serif,
          fontSize: 128,
          color: COLORS.text,
          textAlign: "center",
          lineHeight: 1.2,
          marginBottom: 96,
          ...questionAnim,
        }}
      >
        Is your alarm
        <br />
        stuck on?
      </div>

      <div
        style={{
          fontFamily: FONTS.sans,
          fontSize: 44,
          color: COLORS.accent,
          fontWeight: 600,
          letterSpacing: "0.02em",
          padding: "32px 80px",
          border: `4px solid rgba(232, 155, 62, 0.3)`,
          borderRadius: 24,
          background: "rgba(232, 155, 62, 0.06)",
          ...urlAnim,
        }}
      >
        healthcalculators.xyz/cortisol-stress-assessment
      </div>

      <div
        style={{
          fontFamily: FONTS.sans,
          fontSize: 32,
          color: COLORS.textSecondary,
          marginTop: 48,
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
          bottom: 64,
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: FONTS.sans,
          fontSize: 28,
          color: "rgba(255,255,255,0.15)",
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
