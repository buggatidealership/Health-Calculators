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
  accent: "#e8785e",     // red for vitamin D
  green: "#6ec89b",
  dim: "#8a919e",
};

const FONTS = {
  serif: "'DM Serif Display', Georgia, serif",
  sans: "'Inter', -apple-system, sans-serif",
};

// --- Timing (in frames at 30fps) ---
// Total: 30s = 900 frames
const T = {
  scene1Start: 0,
  scene1End: 150,      // ~5s — hook
  scene2Start: 158,
  scene2End: 310,      // ~10.3s — reframe
  scene3Start: 318,
  scene3End: 560,      // ~18.7s — the numbers
  scene4Start: 568,
  scene4End: 740,      // ~24.7s — the stat
  scene5Start: 748,
  scene5End: 900,      // 30s — CTA
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

// --- Scene 1: Hook — "Always tired?" ---
const Scene1: React.FC<{ frame: number }> = ({ frame }) => {
  const local = frame - T.scene1Start;

  const dotAnim = fadeUp(local, 8, 12);
  const textAnim = fadeUp(local, 24, 18);
  const subAnim = fadeUp(local, 66, 14);

  const exitStart = 118;
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
            background: COLORS.accent,
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
          fontSize: 184,
          color: COLORS.text,
          letterSpacing: "-0.02em",
          lineHeight: 1.15,
          textAlign: "center",
          padding: "0 60px",
          ...(inExit ? textExit : textAnim),
        }}
      >
        Always tired?
      </div>

      <Divider
        opacity={inExit ? subExit.opacity : subAnim.opacity}
        width={80}
      />

      <div
        style={{
          fontFamily: FONTS.sans,
          fontSize: 60,
          color: COLORS.textSecondary,
          fontWeight: 400,
          letterSpacing: "0.03em",
          ...(inExit ? subExit : subAnim),
        }}
      >
        It might not be your sleep.
      </div>
    </div>
  );
};

// --- Scene 2: Reframe — beat drop on "vitamin D" ---
const Scene2: React.FC<{ frame: number }> = ({ frame }) => {
  const local = frame - T.scene2Start;
  const lineAnim = fadeUp(local, 10, 16);

  // "vitamin D" appears after 1.8s pause (54 frames)
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
          fontSize: 140,
          textAlign: "center",
          lineHeight: 1.2,
          padding: "0 60px",
          color: COLORS.text,
          ...(inExit ? lineExit : lineAnim),
        }}
      >
        It's not your <span style={{ color: COLORS.accent }}>energy</span>.
      </div>

      <Divider opacity={inExit ? flipExit.opacity : lineOpacity} width={60} />

      <div
        style={{
          fontFamily: FONTS.serif,
          fontSize: 168,
          color: COLORS.accent,
          textAlign: "center",
          padding: "0 60px",
          lineHeight: 1.2,
          opacity: inExit ? flipExit.opacity : flipOpacity,
          transform: inExit
            ? flipExit.transform
            : `translateY(${flipY}px) scale(${flipScale})`,
        }}
      >
        It's your vitamin D.
      </div>
    </div>
  );
};

// --- Scene 3: The Numbers — progressive reveal ---
const Scene3: React.FC<{ frame: number }> = ({ frame }) => {
  const local = frame - T.scene3Start;

  // Step 1: "VITAMIN D" label
  const labelAnim = fadeUp(local, 6, 12);

  // Step 2: "Deficiency cutoff: 20 ng/mL"
  const line1Delay = 36;
  const line1Anim = fadeUp(local, line1Delay, 14);

  // Step 3: "Optimal range: 50–80 ng/mL"
  const line2Delay = line1Delay + 48;
  const line2Anim = fadeUp(local, line2Delay, 14);

  // Dim the first line when second appears
  const line1Dim = interpolate(local, [line2Delay, line2Delay + 14], [1, 0.35], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Step 4: "Most people fall somewhere in between..."
  const insightDelay = line2Delay + 54;
  const insightAnim = fadeUp(local, insightDelay, 16);

  // Exit
  const exitStart = 210;
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
      {/* VITAMIN D label */}
      <div
        style={{
          fontFamily: FONTS.sans,
          fontSize: 44,
          fontWeight: 600,
          color: COLORS.accent,
          textTransform: "uppercase" as const,
          letterSpacing: "0.14em",
          marginBottom: 48,
          ...(inExit ? labelExit : labelAnim),
        }}
      >
        Vitamin D
      </div>

      {/* "Deficiency cutoff: 20 ng/mL" */}
      <div
        style={{
          fontFamily: FONTS.serif,
          fontSize: 116,
          color: COLORS.text,
          textAlign: "center",
          lineHeight: 1.2,
          marginBottom: 28,
          opacity: inExit ? labelExit.opacity : line1Anim.opacity * line1Dim,
          transform: inExit ? labelExit.transform : line1Anim.transform,
        }}
      >
        Deficiency cutoff: <span style={{ color: COLORS.accent }}>20 ng/mL</span>
      </div>

      {/* "Optimal range: 50–80 ng/mL" */}
      {local >= line2Delay && (
        <div
          style={{
            fontFamily: FONTS.serif,
            fontSize: 128,
            color: COLORS.text,
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: 32,
            ...(inExit ? containerExit : line2Anim),
          }}
        >
          Optimal range: <span style={{ color: COLORS.green }}>50–80 ng/mL</span>
        </div>
      )}

      {/* "Most people fall somewhere in between..." */}
      {local >= insightDelay && (
        <div
          style={{
            fontFamily: FONTS.sans,
            fontSize: 56,
            color: COLORS.textSecondary,
            textAlign: "center",
            marginTop: 36,
            lineHeight: 1.4,
            maxWidth: 1700,
            ...(inExit ? containerExit : insightAnim),
          }}
        >
          Most people fall somewhere in between —{"\n"}technically normal, functionally low.
        </div>
      )}
    </div>
  );
};

// --- Scene 4: The Stat — "42% of Americans are deficient" ---
const Scene4: React.FC<{ frame: number }> = ({ frame }) => {
  const local = frame - T.scene4Start;

  // Big stat number
  const statAnim = fadeUp(local, 8, 18);
  const statScale = interpolate(local, [8, 26], [0.85, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.back(1.3)),
  });

  // "of Americans are deficient."
  const descAnim = fadeUp(local, 32, 14);

  // "Most don't know."
  const tagDelay = 72;
  const tagAnim = fadeUp(local, tagDelay, 14);

  // Exit
  const exitStart = 140;
  const statExit = fadeOut(local, exitStart, 8);
  const descExit = fadeOut(local, exitStart + 3, 8);
  const tagExit = fadeOut(local, exitStart + 6, 8);
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
      {/* Big "42%" */}
      <div
        style={{
          fontFamily: FONTS.serif,
          fontSize: 320,
          color: COLORS.accent,
          letterSpacing: "-0.03em",
          lineHeight: 1,
          marginBottom: 24,
          opacity: inExit ? statExit.opacity : statAnim.opacity,
          transform: inExit
            ? statExit.transform
            : `translateY(${statAnim.transform.match(/-?\d+/)?.[0] || 0}px) scale(${statScale})`,
        }}
      >
        42%
      </div>

      {/* "of Americans are deficient." */}
      <div
        style={{
          fontFamily: FONTS.serif,
          fontSize: 96,
          color: COLORS.text,
          textAlign: "center",
          lineHeight: 1.2,
          marginBottom: 48,
          ...(inExit ? descExit : descAnim),
        }}
      >
        of Americans are deficient.
      </div>

      <Divider
        opacity={inExit ? tagExit.opacity : tagAnim.opacity}
        width={80}
      />

      {/* "Most don't know." */}
      {local >= tagDelay && (
        <div
          style={{
            fontFamily: FONTS.sans,
            fontSize: 64,
            color: COLORS.textSecondary,
            fontWeight: 400,
            letterSpacing: "0.02em",
            ...(inExit ? tagExit : tagAnim),
          }}
        >
          Most don't know.
        </div>
      )}
    </div>
  );
};

// --- Scene 5: CTA — "What's your level?" ---
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
        What's <span style={{ color: COLORS.green }}>your</span> level?
      </div>

      <div
        style={{
          fontFamily: FONTS.sans,
          fontSize: 42,
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
export const VitaminDA: React.FC = () => {
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
