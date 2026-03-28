import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

// DERMAMEDICUM REDACT — Clinical document redaction aesthetic
// Skincare myths typed on paper, black bars slam down, red corrections appear

const CLAIMS = [
  {
    text: "1. Sonnencreme ist nur im Sommer notwendig.",
    typeStart: 20,
    slamStart: 60,
    correction: "\u2192 UV-Strahlung durchdringt Wolken. Ganzj\u00e4hriger Schutz.",
  },
  {
    text: "2. Fettige Haut braucht keine Feuchtigkeitspflege.",
    typeStart: 100,
    slamStart: 140,
    correction: "\u2192 Dehydrierte Haut produziert MEHR Talg als Kompensation.",
  },
  {
    text: "3. Anti-Aging beginnt ab 40.",
    typeStart: 180,
    slamStart: 220,
    correction: "\u2192 Kollagenabbau beginnt ab 25. Pr\u00e4vention > Reparatur.",
  },
] as const;

export const DM_Redact: React.FC = () => {
  const frame = useCurrentFrame();

  // Typewriter: reveal characters over duration
  const typeText = (text: string, start: number, duration = 30) => {
    const progress = interpolate(frame, [start, start + duration], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    return text.slice(0, Math.floor(text.length * progress));
  };

  // Slam bar: overshoot scale with spring-like bounce
  const slamScale = (start: number) => {
    if (frame < start) return 0;
    const t = frame - start;
    if (t > 15) return 1;
    // Spring: overshoot from 1.5 to 1.0 with bounce
    const raw = interpolate(frame, [start, start + 4], [1.5, 0.95], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.cubic),
    });
    // Add bounce oscillation
    const bounce = t < 4 ? 0 : Math.sin((t - 4) * 2.5) * 0.08 * Math.exp(-(t - 4) * 0.5);
    return Math.min(raw + bounce, 1.5);
  };

  const slamOpacity = (start: number) =>
    interpolate(frame, [start, start + 2], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });

  // Screen shake on each slam
  const shakeX = (start: number) => {
    if (frame < start || frame > start + 8) return 0;
    const intensity = interpolate(frame, [start, start + 8], [8, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    return Math.sin((frame - start) * 12) * intensity;
  };

  // Correction fade-in
  const correctionOpacity = (start: number) =>
    interpolate(frame, [start + 8, start + 18], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });

  const correctionY = (start: number) =>
    interpolate(frame, [start + 8, start + 18], [10, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.cubic),
    });

  // Combined shake from all slams
  const totalShakeX =
    shakeX(CLAIMS[0].slamStart) +
    shakeX(CLAIMS[1].slamStart) +
    shakeX(CLAIMS[2].slamStart);

  // Phase 7 transition (260-360)
  const darkTransition = interpolate(frame, [260, 280], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });

  // Document phase opacity (visible until dark transition)
  const docOpacity = interpolate(frame, [260, 275], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // CTA animations
  const ctaFade = (start: number, d = 15) => ({
    opacity: interpolate(frame, [start, start + d], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }),
    transform: `translateY(${interpolate(frame, [start, start + d], [25, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.cubic),
    })}px)`,
  });

  // Paper texture noise (CSS grain)
  const paperNoise = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E")`;

  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        position: "relative",
        overflow: "hidden",
        background: "#0d1117",
        fontFamily: "'Courier New', monospace",
      }}
    >
      {/* ═══ DOCUMENT PHASE (0-260) ═══ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "#f5f0e8",
          opacity: docOpacity,
          transform: `translateX(${totalShakeX}px)`,
        }}
      >
        {/* Paper texture overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: paperNoise,
            backgroundSize: "256px 256px",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        {/* Document content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            padding: "320px 70px 500px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Header */}
          <div
            style={{
              fontSize: 38,
              letterSpacing: 8,
              color: "#555",
              textTransform: "uppercase",
              marginBottom: 20,
              opacity: interpolate(frame, [0, 15], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            PATIENTENINFORMATION
          </div>

          {/* Horizontal rule */}
          <div
            style={{
              width: interpolate(frame, [10, 25], [0, 940], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.cubic),
              }),
              height: 2,
              background: "#999",
              marginBottom: 60,
            }}
          />

          {/* Claims */}
          {CLAIMS.map((claim, i) => (
            <div key={i} style={{ marginBottom: 50, position: "relative" }}>
              {/* Claim text */}
              <div
                style={{
                  fontSize: 46,
                  lineHeight: 1.5,
                  color: "#2a2a2a",
                  minHeight: 80,
                }}
              >
                {typeText(claim.text, claim.typeStart)}
                {/* Blinking cursor during typing */}
                {frame >= claim.typeStart &&
                  frame < claim.typeStart + 30 && (
                    <span
                      style={{
                        opacity: Math.sin(frame * 0.5) > 0 ? 1 : 0,
                        color: "#2a2a2a",
                      }}
                    >
                      |
                    </span>
                  )}
              </div>

              {/* Redaction bar */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: -10,
                  right: -10,
                  height: "100%",
                  background: "#000",
                  opacity: slamOpacity(claim.slamStart),
                  transform: `scaleY(${slamScale(claim.slamStart)})`,
                  transformOrigin: "center center",
                  borderRadius: 2,
                }}
              />

              {/* Red correction */}
              <div
                style={{
                  fontSize: 40,
                  color: "#ef4444",
                  fontWeight: 700,
                  marginTop: 14,
                  lineHeight: 1.4,
                  opacity: correctionOpacity(claim.slamStart),
                  transform: `translateY(${correctionY(claim.slamStart)}px)`,
                }}
              >
                {claim.correction}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ CTA PHASE (260-360) ═══ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "#0d1117",
          opacity: darkTransition,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "300px 60px 500px",
          gap: 30,
        }}
      >
        <div
          style={{
            ...ctaFade(285),
            fontSize: 72,
            color: "#e0e0e0",
            fontFamily: "'DM Serif Display', serif",
            textAlign: "center",
            lineHeight: 1.35,
          }}
        >
          3 Mythen.
          <br />3 Korrekturen.
        </div>

        <div
          style={{
            ...ctaFade(315),
            marginTop: 40,
            padding: "22px 56px",
            background: "#4ade80",
            borderRadius: 50,
            fontSize: 36,
            fontWeight: 700,
            color: "#0d1117",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          DERMAMEDICUM &middot; BONN
        </div>
      </div>
    </div>
  );
};
