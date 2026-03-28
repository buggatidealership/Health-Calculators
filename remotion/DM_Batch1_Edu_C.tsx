// DM_Batch1_Edu_C — "Skin Cancer Facts" educational reel
// When to worry about a mole → bridges to digital body mapping
// 360 frames (12s) @ 30fps | 1080x1920 | HWG-compliant
// NO before/after imagery, NO Rx brand names, NO emojis
// Serious medical tone throughout — no playfulness

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
    transform: `translateY(${interpolate(f, [s, s + d], [24, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })}px)`,
  };
}

function pop(f: number, s: number, d = 8): React.CSSProperties {
  return {
    transform: `scale(${interpolate(f, [s, s + d], [0.7, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.back(2)) })})`,
    opacity: interpolate(f, [s, s + d * 0.6], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
  };
}

const ABCDE = [
  { letter: "A", word: "Asymmetrie", desc: "ungleichm\u00E4\u00DFige Form", color: "#3A8A9E" },
  { letter: "B", word: "Begrenzung", desc: "unscharfe oder gezackte R\u00E4nder", color: "#4A9AAE" },
  { letter: "C", word: "Colour", desc: "mehrere Farben in einem Mal", color: "#5AAABE" },
  { letter: "D", word: "Durchmesser", desc: "gr\u00F6\u00DFer als 6mm", color: "#6ABACE" },
  { letter: "E", word: "Entwicklung", desc: "Ver\u00E4nderung \u00FCber Zeit", color: "#7ACADE" },
] as const;

const LETTER_DURATION = 28;

export const DM_Batch1_Edu_C: React.FC = () => {
  const frame = useCurrentFrame();

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
      {/* Subtle top-center glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at 50% 30%, rgba(85,134,149,0.06) 0%, transparent 50%)`,
          pointerEvents: "none",
        }}
      />

      {/* ====== SCENE 1: Hook (0-80) ====== */}
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
          opacity: vis(frame, 0, 80),
          padding: "0 30px",
        }}
      >
        <div
          style={{
            ...fadeIn(frame, 5, 16),
            fontSize: 78,
            color: BRAND.cream,
            fontFamily: FONTS.heading,
            textAlign: "center",
            lineHeight: 1.3,
          }}
        >
          Wann wird ein Muttermal gef{"\u00E4"}hrlich?
        </div>
        <div
          style={{
            ...fadeIn(frame, 30, 14),
            marginTop: 40,
            width: "60%",
            height: 2,
            background: `linear-gradient(90deg, transparent, ${BRAND.teal}, transparent)`,
          }}
        />
        <div
          style={{
            ...fadeIn(frame, 40, 14),
            marginTop: 28,
            fontSize: 38,
            color: BRAND.midGray,
            fontFamily: FONTS.mono,
            letterSpacing: 5,
          }}
        >
          DIE ABCDE-REGEL
        </div>
      </div>

      {/* ====== SCENE 2: ABCDE letters (80-220) ====== */}
      <div
        style={{
          position: "absolute",
          left: SAFE.left,
          right: SAFE.right,
          top: SAFE.top,
          bottom: SAFE.bottom,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          opacity: vis(frame, 80, 220),
          padding: "0 40px",
          gap: 18,
        }}
      >
        {ABCDE.map((item, i) => {
          const itemStart = 80 + i * LETTER_DURATION;
          const letterPop = itemStart + 2;
          const descFade = itemStart + 8;

          return (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 28,
                opacity: interpolate(frame, [itemStart, itemStart + 8], [0, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                }),
              }}
            >
              {/* Large letter */}
              <div
                style={{
                  ...pop(frame, letterPop, 10),
                  fontSize: 128,
                  fontFamily: FONTS.heading,
                  color: item.color,
                  fontWeight: 700,
                  lineHeight: 1,
                  minWidth: 120,
                  textAlign: "center",
                }}
              >
                {item.letter}
              </div>

              {/* Word + description */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <div
                  style={{
                    ...fadeIn(frame, descFade, 10),
                    fontSize: 48,
                    color: BRAND.white,
                    fontWeight: 700,
                    lineHeight: 1.2,
                  }}
                >
                  {item.word}
                </div>
                <div
                  style={{
                    ...fadeIn(frame, descFade + 4, 10),
                    fontSize: 36,
                    color: BRAND.lightGray,
                    lineHeight: 1.3,
                  }}
                >
                  {item.desc}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ====== SCENE 3: Bridge (220-300) ====== */}
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
          opacity: vis(frame, 220, 300),
          padding: "0 30px",
          gap: 36,
        }}
      >
        <div
          style={{
            ...fadeIn(frame, 226, 14),
            fontSize: 60,
            color: BRAND.cream,
            fontFamily: FONTS.heading,
            textAlign: "center",
            lineHeight: 1.35,
          }}
        >
          Ein j{"\u00E4"}hrliches Screening erkennt nicht alles.
        </div>

        <div
          style={{
            ...fadeIn(frame, 250, 14),
            width: "80%",
            height: 1,
            background: `linear-gradient(90deg, transparent, ${BRAND.teal}, transparent)`,
          }}
        />

        <div
          style={{
            ...fadeIn(frame, 260, 14),
            fontSize: 46,
            color: BRAND.teal,
            fontWeight: 600,
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          Digitale Ganzk{"\u00F6"}rperkartierung dokumentiert jede Ver{"\u00E4"}nderung — millimetergenau.
        </div>
      </div>

      {/* ====== SCENE 4: Logo end card (300-360) ====== */}
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
          opacity: vis(frame, 300, 360),
          gap: 36,
        }}
      >
        <Img
          src={staticFile(LOGO.light)}
          style={{
            ...pop(frame, 308, 12),
            width: 360,
            objectFit: "contain",
          }}
        />

        <div
          style={{
            ...fadeIn(frame, 322, 12),
            fontSize: 36,
            color: BRAND.midGray,
            fontFamily: FONTS.body,
            letterSpacing: 5,
            textTransform: "uppercase",
          }}
        >
          Fragen Sie Ihren Dermatologen
        </div>
      </div>
    </div>
  );
};
