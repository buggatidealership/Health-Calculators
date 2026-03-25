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
  accent: "#e89b3e",     // orange for protein/fitness
  green: "#6ec89b",
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
  scene1End: 155,     // ~5.2s — hook
  scene2Start: 162,
  scene2End: 310,     // ~10.3s — reframe with beat drop
  scene3Start: 318,
  scene3End: 620,     // ~20.7s — the math (progressive reveal)
  scene4Start: 628,
  scene4End: 830,     // ~27.7s — bar comparison (poster frame)
  scene5Start: 838,
  scene5End: 960,     // 32s — CTA
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

// --- Scene 1: Hook — "Not seeing gym results?" ---
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

  // Heartbeat-like pulse
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
      {/* Orange pulsing dot */}
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
            boxShadow: `0 0 20px rgba(232, 155, 62, 0.4)`,
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
          fontSize: 148,
          color: COLORS.text,
          letterSpacing: "-0.02em",
          lineHeight: 1.15,
          textAlign: "center",
          padding: "0 80px",
          ...(inExit ? textExit : textAnim),
        }}
      >
        Not seeing gym results?
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
        It's probably not your training.
      </div>
    </div>
  );
};

// --- Scene 2: Reframe — beat drop ---
const Scene2: React.FC<{ frame: number }> = ({ frame }) => {
  const local = frame - T.scene2Start;
  const lineAnim = fadeUp(local, 10, 16);

  // "how much you eat" appears after 1.8s pause (54 frames)
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
        It's not how much you{" "}
        <span style={{ color: COLORS.accent }}>lift</span>.
      </div>

      <Divider opacity={inExit ? flipExit.opacity : lineOpacity} width={60} />

      <div
        style={{
          fontFamily: FONTS.serif,
          fontSize: 164,
          color: COLORS.accent,
          textAlign: "center",
          opacity: inExit ? flipExit.opacity : flipOpacity,
          transform: inExit
            ? flipExit.transform
            : `translateY(${flipY}px) scale(${flipScale})`,
        }}
      >
        It's how much you <em>eat</em>.
      </div>
    </div>
  );
};

// --- Scene 3: The Math — Progressive reveal ---
const Scene3: React.FC<{ frame: number }> = ({ frame }) => {
  const local = frame - T.scene3Start;

  // Step 1: "PROTEIN" label
  const labelAnim = fadeUp(local, 6, 12);

  // Step 2: "The 1g per pound rule?" — pause 1.2s after label
  const ruleDelay = 42;
  const ruleAnim = fadeUp(local, ruleDelay, 14);

  // Step 3: "That's a supplement industry number." — 1.5s pause
  const mythDelay = ruleDelay + 45;
  const mythAnim = fadeUp(local, mythDelay, 14);

  // Dim the rule text when myth appears
  const ruleDim = interpolate(local, [mythDelay, mythDelay + 14], [1, 0.35], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Step 4: The actual calculation — 1.5s pause after myth
  const calcDelay = mythDelay + 45;
  // Progressive parts of the calc
  const calc1Anim = fadeUp(local, calcDelay, 12);       // "175 lb"
  const calc2Anim = fadeUp(local, calcDelay + 24, 12);   // "× 20% body fat = 140 lb lean mass"
  const calc3Anim = fadeUp(local, calcDelay + 48, 12);   // "× 0.7g = 98g"

  // Step 5: Framework insight — 1.2s after final calc
  const insightDelay = calcDelay + 84;
  const insightAnim = fadeUp(local, insightDelay, 14);

  // Hold for reading — insightDelay+14 to exit

  // Exit
  const exitStart = 272;
  const labelExit = fadeOut(local, exitStart, 8);
  const containerExit = fadeOut(local, exitStart + 3, 8);
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
        opacity: sceneOpacity(frame, T.scene3Start, T.scene3End),
      }}
    >
      {/* PROTEIN label */}
      <div
        style={{
          fontFamily: FONTS.sans,
          fontSize: 44,
          fontWeight: 600,
          color: COLORS.accent,
          textTransform: "uppercase" as const,
          letterSpacing: "0.14em",
          marginBottom: 40,
          ...(inExit ? labelExit : labelAnim),
        }}
      >
        Protein
      </div>

      {/* "The 1g per pound rule?" */}
      <div
        style={{
          fontFamily: FONTS.serif,
          fontSize: 112,
          color: COLORS.text,
          textAlign: "center",
          lineHeight: 1.2,
          marginBottom: 20,
          opacity: inExit ? labelExit.opacity : ruleAnim.opacity * ruleDim,
          transform: inExit ? labelExit.transform : ruleAnim.transform,
        }}
      >
        The 1g per pound rule?
      </div>

      {/* "That's a supplement industry number." */}
      {local >= mythDelay && (
        <div
          style={{
            fontFamily: FONTS.sans,
            fontSize: 56,
            color: COLORS.accent,
            fontWeight: 500,
            textAlign: "center",
            letterSpacing: "0.02em",
            marginBottom: 60,
            ...(inExit ? containerExit : mythAnim),
          }}
        >
          That's a supplement industry number.
        </div>
      )}

      {/* The actual calculation */}
      {local >= calcDelay && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
            marginBottom: 56,
            ...(inExit ? containerExit : {}),
          }}
        >
          {/* Line 1: 175 lb */}
          <div
            style={{
              fontFamily: FONTS.sans,
              fontSize: 72,
              fontWeight: 700,
              color: COLORS.text,
              letterSpacing: "-0.01em",
              ...calc1Anim,
            }}
          >
            <span style={{ color: COLORS.accent }}>175</span> lb
          </div>

          {/* Line 2: × 20% body fat = 140 lb lean mass */}
          <div
            style={{
              fontFamily: FONTS.sans,
              fontSize: 56,
              fontWeight: 500,
              color: COLORS.textSecondary,
              ...calc2Anim,
            }}
          >
            <span style={{ color: COLORS.dim }}>× 20% body fat</span>
            <span style={{ color: COLORS.text, fontWeight: 700 }}> = 140 lb</span>
            <span style={{ color: COLORS.dim }}> lean mass</span>
          </div>

          {/* Line 3: × 0.7g = 98g */}
          <div
            style={{
              fontFamily: FONTS.sans,
              fontSize: 56,
              fontWeight: 500,
              color: COLORS.textSecondary,
              ...calc3Anim,
            }}
          >
            <span style={{ color: COLORS.dim }}>× 0.7g</span>
            <span style={{ color: COLORS.green, fontWeight: 700, fontSize: 72 }}> = 98g</span>
          </div>
        </div>
      )}

      {/* Framework insight */}
      {local >= insightDelay && (
        <div
          style={{
            fontFamily: FONTS.serif,
            fontSize: 54,
            color: COLORS.textSecondary,
            textAlign: "center",
            lineHeight: 1.5,
            maxWidth: 1600,
            ...(inExit ? containerExit : insightAnim),
          }}
        >
          You need <span style={{ color: COLORS.green, fontWeight: 700 }}>98g</span>.
          Not 175g.{" "}
          <span style={{ color: COLORS.text }}>
            You might already be eating enough.
          </span>
        </div>
      )}
    </div>
  );
};

// --- Scene 4: The Comparison — Visual bar chart ---
const Scene4: React.FC<{ frame: number }> = ({ frame }) => {
  const local = frame - T.scene4Start;

  const titleAnim = fadeUp(local, 6, 12);

  // Staggered bar reveals
  const bars = [
    {
      label: "What the internet says",
      value: "175g",
      width: 92,    // percentage of max width
      color: COLORS.accent,
      delay: 30,
    },
    {
      label: "What the research says",
      value: "98g",
      width: 56,
      color: COLORS.green,
      delay: 66,
    },
    {
      label: "What most people eat",
      value: "70g",
      width: 40,
      color: COLORS.dim,
      delay: 102,
    },
  ];

  // Framework insight appears after all bars
  const insightDelay = 138;
  const insightAnim = fadeUp(local, insightDelay, 14);

  // Hold for poster frame — this is the key visual (138 to exitStart)

  // Exit
  const exitStart = 174;
  const titleExit = fadeOut(local, exitStart, 8);
  const containerExit = fadeOut(local, exitStart + 3, 8);
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
        Daily protein for a 175 lb person
      </div>

      {/* Bars */}
      <div
        style={{
          width: "100%",
          maxWidth: 1800,
          display: "flex",
          flexDirection: "column",
          gap: 56,
          ...(inExit ? containerExit : {}),
        }}
      >
        {bars.map((bar, i) => {
          const barLabelAnim = fadeUp(local, bar.delay, 12);
          const barFillProgress = interpolate(
            local,
            [bar.delay + 8, bar.delay + 36],
            [0, 1],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }
          );
          const barValueAnim = fadeUp(local, bar.delay + 24, 10);
          const barExit = inExit ? fadeOut(local, exitStart + 4 + i * 3, 8) : null;

          return (
            <div
              key={bar.label}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
                ...(barExit || barLabelAnim),
              }}
            >
              {/* Label row */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                }}
              >
                <div
                  style={{
                    fontFamily: FONTS.sans,
                    fontSize: 48,
                    fontWeight: 500,
                    color: bar.color === COLORS.dim ? COLORS.dim : COLORS.text,
                  }}
                >
                  {bar.label}
                </div>
                <div
                  style={{
                    fontFamily: FONTS.sans,
                    fontSize: 64,
                    fontWeight: 700,
                    color: bar.color,
                    ...(barExit || barValueAnim),
                  }}
                >
                  {bar.value}
                </div>
              </div>

              {/* Bar track */}
              <div
                style={{
                  width: "100%",
                  height: 40,
                  background: "rgba(255,255,255,0.06)",
                  borderRadius: 20,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    borderRadius: 20,
                    background: bar.color,
                    width: `${bar.width * barFillProgress}%`,
                    boxShadow:
                      barFillProgress > 0.5
                        ? `0 0 16px ${bar.color}40`
                        : "none",
                    opacity: bar.color === COLORS.dim ? 0.5 : 0.9,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Framework insight */}
      {local >= insightDelay && (
        <div
          style={{
            fontFamily: FONTS.serif,
            fontSize: 56,
            color: COLORS.textSecondary,
            textAlign: "center",
            marginTop: 80,
            ...(inExit ? containerExit : insightAnim),
          }}
        >
          The gap is smaller than you think.
        </div>
      )}
    </div>
  );
};

// --- Scene 5: CTA — "What's your number?" ---
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
          fontSize: 156,
          color: COLORS.text,
          textAlign: "center",
          lineHeight: 1.15,
          marginBottom: 64,
          ...questionAnim,
        }}
      >
        What's <span style={{ color: COLORS.green }}>your</span> number?
      </div>

      <div
        style={{
          fontFamily: FONTS.sans,
          fontSize: 44,
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
        healthcalculators.xyz/protein-intake-calculator
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
export const ProteinAnimation: React.FC = () => {
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
