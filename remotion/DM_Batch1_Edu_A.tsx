// DM_Batch1_Edu_A — "Acne Myths" educational reel
// Myth-busting about acne → bridges to laser-based treatment
// 390 frames (13s) @ 30fps | 1080x1920 | HWG-compliant
// NO before/after imagery, NO Rx brand names, NO emojis

import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
import { BRAND, FONTS, LOGO, SAFE, SPEC } from "./derma-brand";

function vis(f: number, s: number, e: number) {
  if (f < s || f > e + 10) return 0;
  return Math.min(
    interpolate(f, [s, s + 10], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    interpolate(f, [e, e + 10], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
  );
}

function fadeIn(f: number, s: number, d = 12): React.CSSProperties {
  return {
    opacity: interpolate(f, [s, s + d], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    transform: `translateY(${interpolate(f, [s, s + d], [28, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })}px)`,
  };
}

function pop(f: number, s: number, d = 8): React.CSSProperties {
  return {
    transform: `scale(${interpolate(f, [s, s + d], [0.7, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.back(2)) })})`,
    opacity: interpolate(f, [s, s + d * 0.6], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
  };
}

const MYTHS = [
  {
    sceneStart: 70,
    sceneEnd: 130,
    myth: "Akne verschwindet von allein.",
    fact: "Unbehandelte Akne kann zu dauerhaften Narben f\u00FChren.",
  },
  {
    sceneStart: 130,
    sceneEnd: 190,
    myth: "Nur Teenager haben Akne.",
    fact: "40% der Erwachsenen \u00FCber 25 sind betroffen.",
  },
  {
    sceneStart: 190,
    sceneEnd: 250,
    myth: "Mehr Reinigung hilft gegen Akne.",
    fact: "\u00DCberreinigung zerst\u00F6rt die Hautbarriere.",
  },
] as const;

export const DM_Batch1_Edu_A: React.FC = () => {
  const frame = useCurrentFrame();

  // Subtle background pulse
  const bgGlow = 0.06 + 0.02 * Math.sin(frame * 0.05);

  return (
    <div
      style={{
        width: SPEC.width,
        height: SPEC.height,
        background: BRAND.deepNavy,
        overflow: "hidden",
        position: "relative",
        fontFamily: FONTS.body,
      }}
    >
      {/* Background radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at 50% 40%, rgba(85,134,149,${bgGlow}) 0%, transparent 60%)`,
          pointerEvents: "none",
        }}
      />

      {/* ====== SCENE 1: Hook (0-70) ====== */}
      <div
        style={{
          position: "absolute",
          left: SAFE.left,
          right: SAFE.right,
          top: SAFE.top,
          bottom: SAFE.bottom,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          opacity: vis(frame, 0, 70),
          padding: "0 20px",
        }}
      >
        <div
          style={{
            ...pop(frame, 5),
            fontSize: 42,
            color: BRAND.teal,
            fontFamily: FONTS.mono,
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 32,
          }}
        >
          Dermatologie
        </div>
        <div
          style={{
            ...fadeIn(frame, 12, 14),
            fontSize: 76,
            color: BRAND.white,
            fontFamily: FONTS.heading,
            textAlign: "center",
            lineHeight: 1.3,
          }}
        >
          3 Mythen {"\u00FC"}ber Akne, die Ihre Haut verschlechtern.
        </div>
      </div>

      {/* ====== SCENES 2-4: Myth/Fact pairs ====== */}
      {MYTHS.map((m, i) => {
        const mythAppear = m.sceneStart + 5;
        const strikeStart = m.sceneStart + 22;
        const factAppear = m.sceneStart + 32;

        // Strikethrough width animation
        const strikeWidth = interpolate(
          frame,
          [strikeStart, strikeStart + 10],
          [0, 100],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) },
        );

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: SAFE.left,
              right: SAFE.right,
              top: SAFE.top,
              bottom: SAFE.bottom,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              opacity: vis(frame, m.sceneStart, m.sceneEnd),
              padding: "0 30px",
              gap: 40,
            }}
          >
            {/* Myth number */}
            <div
              style={{
                ...pop(frame, mythAppear - 3),
                fontSize: 36,
                color: BRAND.midGray,
                fontFamily: FONTS.mono,
                letterSpacing: 6,
              }}
            >
              MYTHOS {i + 1}/3
            </div>

            {/* Myth text with strikethrough */}
            <div style={{ position: "relative", textAlign: "center" }}>
              <div
                style={{
                  ...fadeIn(frame, mythAppear, 10),
                  fontSize: 62,
                  color: BRAND.warmBrown,
                  fontFamily: FONTS.heading,
                  lineHeight: 1.35,
                }}
              >
                {m.myth}
              </div>

              {/* Animated strikethrough line */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: 0,
                  width: `${strikeWidth}%`,
                  height: 5,
                  background: BRAND.warmBrown,
                  opacity: interpolate(frame, [strikeStart, strikeStart + 3], [0, 0.9], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                  }),
                  transform: "translateY(-50%)",
                }}
              />
            </div>

            {/* Fact correction */}
            <div
              style={{
                ...fadeIn(frame, factAppear, 12),
                fontSize: 54,
                color: BRAND.teal,
                fontFamily: FONTS.body,
                fontWeight: 600,
                textAlign: "center",
                lineHeight: 1.4,
                borderLeft: `5px solid ${BRAND.teal}`,
                paddingLeft: 28,
                marginTop: 8,
              }}
            >
              Fakt: {m.fact}
            </div>
          </div>
        );
      })}

      {/* ====== SCENE 5: Bridge (250-330) ====== */}
      <div
        style={{
          position: "absolute",
          left: SAFE.left,
          right: SAFE.right,
          top: SAFE.top,
          bottom: SAFE.bottom,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          opacity: vis(frame, 250, 330),
          padding: "0 30px",
          gap: 40,
        }}
      >
        <div
          style={{
            ...fadeIn(frame, 255, 14),
            fontSize: 66,
            color: BRAND.white,
            fontFamily: FONTS.heading,
            textAlign: "center",
            lineHeight: 1.35,
          }}
        >
          Moderne Dermatologie behandelt die Ursache — nicht die Symptome.
        </div>

        <div
          style={{
            ...fadeIn(frame, 278, 14),
            width: "85%",
            height: 1,
            background: `linear-gradient(90deg, transparent, ${BRAND.teal}, transparent)`,
          }}
        />

        <div
          style={{
            ...fadeIn(frame, 285, 14),
            fontSize: 42,
            color: BRAND.midGray,
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          Laserbasierte Therapien k{"\u00F6"}nnen die Talgproduktion direkt regulieren.
        </div>
      </div>

      {/* ====== SCENE 6: Logo end card (330-390) ====== */}
      <div
        style={{
          position: "absolute",
          left: SAFE.left,
          right: SAFE.right,
          top: SAFE.top,
          bottom: SAFE.bottom,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          opacity: vis(frame, 330, 390),
          gap: 40,
        }}
      >
        <Img
          src={staticFile(LOGO.light)}
          style={{
            ...pop(frame, 338, 12),
            width: 360,
            objectFit: "contain",
          }}
        />

        <div
          style={{
            ...fadeIn(frame, 350, 12),
            fontSize: 36,
            color: BRAND.midGray,
            fontFamily: FONTS.body,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          Beratungstermin vereinbaren
        </div>
      </div>
    </div>
  );
};
