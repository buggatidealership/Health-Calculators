import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { FONTS, SPEC } from "./derma-brand";

// DM_Skinvive_Redact — Clinical document redaction for Skinvive
// Skincare myths typed on paper, black bars slam down, red corrections appear
// 1080x1920, 30fps, 360 frames (~12s)

const CLAIMS = [
  {
    text: "1. Intensive Seren ersetzen professionelle Behandlungen.",
    typeStart: 20,
    slamStart: 55,
    correction: "\u2192 57,9% messbare Hautverbesserung mit Skinvive vs. 4,5% Kontrollgruppe.",
  },
  {
    text: "2. Hydratation ist nur ein kosmetisches Thema.",
    typeStart: 95,
    slamStart: 130,
    correction: "\u2192 Dermale Hydratation beeinflusst Kollagensynthese und Hautelastizitat direkt.",
  },
  {
    text: "3. Ergebnisse bei Injectables halten nur Wochen.",
    typeStart: 170,
    slamStart: 205,
    correction: "\u2192 Skinvive: 6 Monate nachgewiesene Wirkung. Eine einzige Behandlung.",
  },
] as const;

const DARK_BG = "#0d1117";

export const DM_Skinvive_Redact: React.FC = () => {
  const frame = useCurrentFrame();

  const clamp = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };

  // Typewriter effect
  const typeText = (text: string, start: number, duration = 28) => {
    const progress = interpolate(frame, [start, start + duration], [0, 1], clamp);
    return text.slice(0, Math.floor(text.length * progress));
  };

  // Slam bar with spring overshoot
  const slamScale = (start: number) => {
    if (frame < start) return 0;
    const t = frame - start;
    if (t > 15) return 1;
    const raw = interpolate(frame, [start, start + 4], [1.5, 0.95], {
      ...clamp,
      easing: Easing.out(Easing.cubic),
    });
    const bounce = t < 4 ? 0 : Math.sin((t - 4) * 2.5) * 0.08 * Math.exp(-(t - 4) * 0.5);
    return Math.min(raw + bounce, 1.5);
  };

  const slamOpacity = (start: number) =>
    interpolate(frame, [start, start + 2], [0, 1], clamp);

  // Screen shake per slam
  const shakeX = (start: number) => {
    if (frame < start || frame > start + 8) return 0;
    const intensity = interpolate(frame, [start, start + 8], [8, 0], clamp);
    return Math.sin((frame - start) * 12) * intensity;
  };

  // Correction fade
  const correctionOpacity = (start: number) =>
    interpolate(frame, [start + 8, start + 18], [0, 1], clamp);

  const correctionY = (start: number) =>
    interpolate(frame, [start + 8, start + 18], [10, 0], {
      ...clamp,
      easing: Easing.out(Easing.cubic),
    });

  // Combined shake
  const totalShakeX =
    shakeX(CLAIMS[0].slamStart) +
    shakeX(CLAIMS[1].slamStart) +
    shakeX(CLAIMS[2].slamStart);

  // Dark transition to CTA (250-360)
  const darkTransition = interpolate(frame, [250, 270], [0, 1], {
    ...clamp,
    easing: Easing.inOut(Easing.cubic),
  });

  const docOpacity = interpolate(frame, [250, 265], [1, 0], clamp);

  // CTA helpers
  const ctaFade = (start: number, d = 15) => ({
    opacity: interpolate(frame, [start, start + d], [0, 1], clamp),
    transform: `translateY(${interpolate(frame, [start, start + d], [25, 0], {
      ...clamp,
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
        background: DARK_BG,
        fontFamily: "'Courier New', monospace",
      }}
    >
      {/* DOCUMENT PHASE (0-250) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "#f5f0e8",
          opacity: docOpacity,
          transform: `translateX(${totalShakeX}px)`,
        }}
      >
        {/* Paper texture */}
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
              fontSize: 36,
              letterSpacing: 8,
              color: "#555",
              textTransform: "uppercase",
              marginBottom: 20,
              opacity: interpolate(frame, [0, 15], [0, 1], clamp),
            }}
          >
            HAUTPFLEGE-PROTOKOLL
          </div>

          {/* Horizontal rule */}
          <div
            style={{
              width: interpolate(frame, [10, 25], [0, 940], {
                ...clamp,
                easing: Easing.out(Easing.cubic),
              }),
              height: 2,
              background: "#999",
              marginBottom: 50,
            }}
          />

          {/* Claims */}
          {CLAIMS.map((claim, i) => (
            <div key={i} style={{ marginBottom: 45, position: "relative" }}>
              {/* Claim text */}
              <div
                style={{
                  fontSize: 42,
                  lineHeight: 1.5,
                  color: "#2a2a2a",
                  minHeight: 75,
                }}
              >
                {typeText(claim.text, claim.typeStart)}
                {frame >= claim.typeStart &&
                  frame < claim.typeStart + 28 && (
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
                  fontSize: 36,
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

      {/* CTA PHASE (250-360) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: DARK_BG,
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
            ...ctaFade(275),
            fontSize: 72,
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
            ...ctaFade(310),
            marginTop: 40,
            padding: "22px 56px",
            background: "#4ade80",
            borderRadius: 50,
            fontSize: 36,
            fontWeight: 700,
            color: DARK_BG,
            fontFamily: FONTS.body,
          }}
        >
          DERMAMEDICUM &middot; BONN
        </div>
      </div>
    </div>
  );
};
