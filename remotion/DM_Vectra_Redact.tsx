import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { BRAND, FONTS, SAFE, SPEC } from "./derma-brand";

// DM_Vectra_Redact — Vectra WB360 myth debunk
// Clinical document with screening myths → black bar slams → red corrections
// 360 frames (12s at 30fps), 1080x1920

const CLAIMS = [
  {
    text: "1. Regelm\u00e4\u00dfige Selbstkontrolle reicht zur Melanom-Vorsorge.",
    typeStart: 20,
    slamStart: 65,
    correction:
      "\u2192 R\u00fccken, Kopfhaut, Intimbereich: Hochrisikostellen, die Sie nicht selbst sehen k\u00f6nnen.",
  },
  {
    text: "2. Mein Hautarzt erkennt alle Ver\u00e4nderungen mit blo\u00dfem Auge.",
    typeStart: 105,
    slamStart: 150,
    correction:
      "\u2192 Bei 50+ Muttermalen ist visuelle Kontrolle fehleranf\u00e4llig. Vectra dokumentiert und vergleicht automatisch.",
  },
  {
    text: "3. Hautkrebs-Screening dauert lange und ist aufw\u00e4ndig.",
    typeStart: 190,
    slamStart: 230,
    correction:
      "\u2192 92 Kameras. 3 Sekunden. Vollst\u00e4ndige 3D-K\u00f6rperaufnahme mit KI-Analyse.",
  },
] as const;

export const DM_Vectra_Redact: React.FC = () => {
  const frame = useCurrentFrame();

  // Typewriter
  const typeText = (text: string, start: number, duration = 30) => {
    const progress = interpolate(frame, [start, start + duration], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    return text.slice(0, Math.floor(text.length * progress));
  };

  // Slam bar with spring overshoot
  const slamScale = (start: number) => {
    if (frame < start) return 0;
    const t = frame - start;
    if (t > 15) return 1;
    const raw = interpolate(frame, [start, start + 4], [1.5, 0.95], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.cubic),
    });
    const bounce =
      t < 4 ? 0 : Math.sin((t - 4) * 2.5) * 0.08 * Math.exp(-(t - 4) * 0.5);
    return Math.min(raw + bounce, 1.5);
  };

  const slamOpacity = (start: number) =>
    interpolate(frame, [start, start + 2], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });

  // Screen shake
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

  const totalShakeX =
    shakeX(CLAIMS[0].slamStart) +
    shakeX(CLAIMS[1].slamStart) +
    shakeX(CLAIMS[2].slamStart);

  // Dark CTA transition
  const darkTransition = interpolate(frame, [270, 290], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });

  const docOpacity = interpolate(frame, [270, 285], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

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

  // Paper texture
  const paperNoise = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E")`;

  return (
    <div
      style={{
        width: SPEC.width,
        height: SPEC.height,
        position: "relative",
        overflow: "hidden",
        background: "#0d1117",
        fontFamily: "'Courier New', monospace",
      }}
    >
      {/* ═══ DOCUMENT PHASE (0-270) ═══ */}
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
            padding: `${SAFE.top + 40}px 70px ${SAFE.bottom + 40}px`,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Header */}
          <div
            style={{
              fontSize: 36,
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
            HAUTKREBSVORSORGE
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
              marginBottom: 50,
            }}
          />

          {/* Claims */}
          {CLAIMS.map((claim, i) => (
            <div key={i} style={{ marginBottom: 40, position: "relative" }}>
              {/* Claim text */}
              <div
                style={{
                  fontSize: 40,
                  lineHeight: 1.45,
                  color: "#2a2a2a",
                  minHeight: 70,
                }}
              >
                {typeText(claim.text, claim.typeStart)}
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
                  fontSize: 34,
                  color: "#ef4444",
                  fontWeight: 700,
                  marginTop: 12,
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

      {/* ═══ CTA PHASE (270-360) ═══ */}
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
          padding: `${SAFE.top}px 60px ${SAFE.bottom}px`,
          gap: 30,
        }}
      >
        <div
          style={{
            ...ctaFade(295),
            fontSize: 68,
            color: "#e0e0e0",
            fontFamily: FONTS.heading,
            textAlign: "center",
            lineHeight: 1.35,
          }}
        >
          3 Annahmen.
          <br />3 Korrekturen.
        </div>

        <div
          style={{
            ...ctaFade(325),
            marginTop: 40,
            padding: "22px 56px",
            background: "#4ade80",
            borderRadius: 50,
            fontSize: 36,
            fontWeight: 700,
            color: "#0d1117",
            fontFamily: FONTS.body,
          }}
        >
          DERMAMEDICUM {"\u00B7"} BONN
        </div>
      </div>
    </div>
  );
};
