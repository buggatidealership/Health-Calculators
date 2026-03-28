import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

// DEMO REEL — UPSCALE COCKTAIL BAR: MYTH BUST
// "Myth-busting cocktail knowledge" — contrarian hot take format
// Dark moody bar aesthetic, amber/gold accents, premium typography
// High save-rate reference content for Instagram Reels
// 1080x1920 · 30fps · 360 frames (12s)

const COLORS = {
  bg: "#0d0f14",
  text: "#f0ebe0",
  accent: "#d4a44c",
  secondary: "#8a7b6b",
};

export const Demo_Bar_MythBust: React.FC = () => {
  const frame = useCurrentFrame();

  // --- Animation helpers ---

  const fadeIn = (start: number, duration = 14) => ({
    opacity: interpolate(frame, [start, start + duration], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.cubic),
    }),
    transform: `translateY(${interpolate(frame, [start, start + duration], [18, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.cubic),
    })}px)`,
  });

  const slideInLeft = (start: number, duration = 16) => ({
    opacity: interpolate(frame, [start, start + duration], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.cubic),
    }),
    transform: `translateX(${interpolate(frame, [start, start + duration], [-40, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.cubic),
    })}px)`,
  });

  const slam = (start: number, duration = 8) => ({
    opacity: interpolate(frame, [start, start + 3], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }),
    transform: `scale(${interpolate(frame, [start, start + duration], [2.2, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.back(1.8)),
    })})`,
  });

  const phaseOpacity = (start: number, end: number, fadeOutDuration = 10) => {
    if (frame < start) return 0;
    if (frame > end + fadeOutDuration) return 0;
    return Math.min(
      interpolate(frame, [start, start + 6], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
      interpolate(frame, [end, end + fadeOutDuration], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
    );
  };

  // --- Phase-specific animations ---

  // Phase 1: Accent line width
  const accentLineWidth = interpolate(frame, [8, 35], [0, 280], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // Phase 2: Flash transition
  const flashOpacity = interpolate(frame, [58, 62, 64, 68], [0, 0.7, 0.7, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Phase 5: Amber pulse behind logo
  const pulseScale = interpolate(
    frame % 45,
    [0, 22, 45],
    [1, 1.15, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  const pulseOpacity = interpolate(
    frame % 45,
    [0, 22, 45],
    [0.15, 0.3, 0.15],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        background: COLORS.bg,
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Subtle grain overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at 50% 40%, rgba(212,164,76,0.04) 0%, transparent 70%)`,
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* ═══ PHASE 1 (0–60): Provocative question ═══ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: phaseOpacity(0, 55),
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "200px 70px 400px",
          zIndex: 10,
        }}
      >
        {/* Amber accent line */}
        <div
          style={{
            width: accentLineWidth,
            height: 3,
            background: COLORS.accent,
            marginBottom: 40,
            opacity: interpolate(frame, [5, 15], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        />

        {/* Main question */}
        <div
          style={{
            ...fadeIn(8, 18),
            fontFamily: "'Georgia', serif",
            fontStyle: "italic",
            fontSize: 72,
            color: COLORS.text,
            fontWeight: 400,
            lineHeight: 1.25,
            letterSpacing: -0.5,
          }}
        >
          You shake every cocktail the same way?
        </div>

        {/* Subline */}
        <div
          style={{
            ...fadeIn(28, 16),
            fontSize: 36,
            color: COLORS.secondary,
            marginTop: 36,
            lineHeight: 1.4,
            fontWeight: 400,
          }}
        >
          Half of all guests do.
        </div>
      </div>

      {/* ═══ Flash transition ═══ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: COLORS.accent,
          opacity: flashOpacity,
          zIndex: 20,
          pointerEvents: "none",
        }}
      />

      {/* ═══ PHASE 2 (60–90): "Falsch." slam ═══ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: phaseOpacity(63, 85, 8),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
        }}
      >
        <div
          style={{
            ...slam(65, 10),
            fontFamily: "'Georgia', serif",
            fontStyle: "italic",
            fontSize: 130,
            color: COLORS.accent,
            fontWeight: 700,
            letterSpacing: 2,
          }}
        >
          Wrong.
        </div>
      </div>

      {/* ═══ PHASE 3 (90–220): Three rules, staggered ═══ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: phaseOpacity(88, 215, 10),
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "160px 70px 300px",
          gap: 50,
          zIndex: 10,
        }}
      >
        {/* Rule 1: Shaken */}
        <div style={{ ...slideInLeft(95, 18), display: "flex", gap: 28, alignItems: "flex-start" }}>
          {/* Shaker icon */}
          <div
            style={{
              flexShrink: 0,
              width: 52,
              height: 52,
              marginTop: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="44" height="52" viewBox="0 0 44 52" fill="none">
              <rect x="8" y="18" width="28" height="30" rx="4" stroke={COLORS.accent} strokeWidth="2.5" fill="none" />
              <path d="M12 18 L16 4 L28 4 L32 18" stroke={COLORS.accent} strokeWidth="2.5" fill="none" strokeLinejoin="round" />
              <line x1="14" y1="26" x2="30" y2="26" stroke={COLORS.accent} strokeWidth="1.5" opacity="0.5" />
            </svg>
          </div>
          <div>
            <div
              style={{
                fontSize: 30,
                fontWeight: 700,
                color: COLORS.accent,
                letterSpacing: 2,
                marginBottom: 10,
                textTransform: "uppercase",
              }}
            >
              Shake
            </div>
            <div style={{ fontSize: 38, color: COLORS.text, lineHeight: 1.45, fontWeight: 400 }}>
              Citrus, egg, cream — anything that needs to bind.
            </div>
          </div>
        </div>

        {/* Rule 2: Stirred */}
        <div style={{ ...slideInLeft(130, 18), display: "flex", gap: 28, alignItems: "flex-start" }}>
          {/* Mixing glass icon */}
          <div
            style={{
              flexShrink: 0,
              width: 52,
              height: 52,
              marginTop: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="40" height="52" viewBox="0 0 40 52" fill="none">
              <path d="M6 6 L10 46 L30 46 L34 6 Z" stroke={COLORS.accent} strokeWidth="2.5" fill="none" strokeLinejoin="round" />
              <line x1="18" y1="2" x2="18" y2="16" stroke={COLORS.accent} strokeWidth="2" opacity="0.6" />
              <circle cx="18" cy="16" r="2" fill={COLORS.accent} opacity="0.6" />
            </svg>
          </div>
          <div>
            <div
              style={{
                fontSize: 30,
                fontWeight: 700,
                color: COLORS.accent,
                letterSpacing: 2,
                marginBottom: 10,
                textTransform: "uppercase",
              }}
            >
              Stir
            </div>
            <div style={{ fontSize: 38, color: COLORS.text, lineHeight: 1.45, fontWeight: 400 }}>
              Spirits only — Negroni, Manhattan, Old Fashioned.
            </div>
          </div>
        </div>

        {/* Rule 3: Why */}
        <div style={{ ...slideInLeft(165, 18) }}>
          {/* Divider line */}
          <div
            style={{
              width: interpolate(frame, [165, 185], [0, 200], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.cubic),
              }),
              height: 1.5,
              background: COLORS.secondary,
              opacity: 0.4,
              marginBottom: 24,
            }}
          />
          <div
            style={{
              fontSize: 30,
              fontWeight: 700,
              color: COLORS.secondary,
              letterSpacing: 2,
              marginBottom: 10,
              textTransform: "uppercase",
            }}
          >
            Why?
          </div>
          <div style={{ fontSize: 38, color: COLORS.text, lineHeight: 1.45, fontWeight: 400, opacity: 0.85 }}>
            Shaking dilutes.{" "}
            <span style={{ color: COLORS.accent }}>Stirring preserves texture.</span>
          </div>
        </div>
      </div>

      {/* ═══ PHASE 4 (220–280): Summary statement ═══ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: phaseOpacity(218, 272, 10),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "200px 80px 400px",
          zIndex: 10,
        }}
      >
        <div
          style={{
            ...fadeIn(222, 16),
            fontFamily: "'Georgia', serif",
            fontStyle: "italic",
            fontSize: 68,
            color: COLORS.text,
            textAlign: "center",
            lineHeight: 1.3,
            fontWeight: 400,
          }}
        >
          The method{" "}
          <span
            style={{
              color: COLORS.accent,
              fontWeight: 700,
              fontStyle: "normal",
              textTransform: "uppercase",
              letterSpacing: 2,
            }}
          >
            IS
          </span>{" "}
          the flavor.
        </div>

        {/* Underline accent */}
        <div
          style={{
            width: interpolate(frame, [240, 260], [0, 180], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
            height: 2.5,
            background: COLORS.accent,
            marginTop: 30,
            opacity: interpolate(frame, [240, 255], [0, 0.8], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        />
      </div>

      {/* ═══ PHASE 5 (280–360): CTA with logo ═══ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: phaseOpacity(278, 355, 8),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
        }}
      >
        {/* Amber pulse glow */}
        <div
          style={{
            position: "absolute",
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${COLORS.accent}40 0%, transparent 70%)`,
            transform: `scale(${frame >= 285 ? pulseScale : 0})`,
            opacity: frame >= 285 ? pulseOpacity : 0,
            pointerEvents: "none",
          }}
        />

        {/* Logo text */}
        <div
          style={{
            ...fadeIn(285, 18),
            fontSize: 48,
            color: COLORS.text,
            fontWeight: 300,
            letterSpacing: 10,
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          Demo Bar
        </div>

        {/* Dot separator */}
        <div
          style={{
            ...fadeIn(298, 12),
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: COLORS.accent,
            margin: "18px 0",
          }}
        />

        {/* Location */}
        <div
          style={{
            ...fadeIn(305, 14),
            fontSize: 28,
            color: COLORS.secondary,
            fontWeight: 400,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          Madrid
        </div>
      </div>
    </div>
  );
};
