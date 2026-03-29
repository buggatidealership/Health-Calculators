import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
import { BRAND, FONTS, SAFE, SPEC } from "./derma-brand";

// B1_Edu_C: "Hautkrebs ABCDE" — ABCDE rule for skin cancer detection
// 1080x1920, 30fps, 360 frames (12s)

/* ── helpers (self-contained) ── */
const ease = Easing.out(Easing.cubic);
const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;

function fadeUp(f: number, start: number, dur = 12) {
  return {
    opacity: interpolate(f, [start, start + dur], [0, 1], clamp),
    transform: `translateY(${interpolate(f, [start, start + dur], [28, 0], { ...clamp, easing: ease })}px)`,
  };
}

function pop(f: number, start: number, dur = 10) {
  return {
    opacity: interpolate(f, [start, start + dur * 0.6], [0, 1], clamp),
    transform: `scale(${interpolate(f, [start, start + dur], [0.6, 1], { ...clamp, easing: Easing.out(Easing.back(2.2)) })})`,
  };
}

function sceneVis(f: number, enter: number, exit: number) {
  if (f < enter || f > exit + 10) return 0;
  return Math.min(
    interpolate(f, [enter, enter + 10], [0, 1], clamp),
    interpolate(f, [exit, exit + 10], [1, 0], clamp),
  );
}

/* ── ABCDE data ── */
const abcde = [
  { letter: "A", label: "Asymmetrie", desc: "Ungleichmäßige Form" },
  { letter: "B", label: "Begrenzung", desc: "Unscharfe Ränder" },
  { letter: "C", label: "Color", desc: "Mehrere Farbtöne" },
  { letter: "D", label: "Durchmesser", desc: "Größer als 6 mm" },
  { letter: "E", label: "Entwicklung", desc: "Veränderung über Zeit" },
];

/* Teal-to-navy gradient colors for each letter */
const letterColors = ["#558695", "#4A7585", "#3F6474", "#355364", "#30385F"];

export const B1_Edu_C: React.FC = () => {
  const f = useCurrentFrame();

  return (
    <div
      style={{
        width: SPEC.width,
        height: SPEC.height,
        background: BRAND.cream,
        overflow: "hidden",
        position: "relative",
        fontFamily: FONTS.body,
      }}
    >
      {/* Top gold line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          background: BRAND.goldBorder,
        }}
      />

      {/* ── SCENE 1: Hook (0–60) ── */}
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
          opacity: sceneVis(f, 0, 60),
          padding: "0 30px",
          gap: 28,
        }}
      >
        <div
          style={{
            ...pop(f, 3),
            fontSize: 72,
            fontFamily: FONTS.heading,
            color: BRAND.navy,
            textAlign: "center",
            lineHeight: 1.3,
          }}
        >
          Die ABCDE-Regel
        </div>

        {/* Gold divider */}
        <div
          style={{
            width: interpolate(f, [12, 24], [0, 280], {
              ...clamp,
              easing: ease,
            }),
            height: 3,
            background: BRAND.goldBorder,
          }}
        />

        <div
          style={{
            ...fadeUp(f, 18),
            fontSize: 58,
            color: BRAND.warmBrown,
            textAlign: "center",
            lineHeight: 1.35,
          }}
        >
          kann Ihr Leben retten
        </div>
      </div>

      {/* ── SCENES 2–6: Each letter (65–280) ── */}
      {abcde.map((item, i) => {
        const enter = 65 + i * 44;
        const exit = enter + 38;

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
              opacity: sceneVis(f, enter, exit),
              padding: "0 40px",
              gap: 24,
            }}
          >
            {/* Large letter */}
            <div
              style={{
                ...pop(f, enter + 2, 12),
                fontSize: 240,
                fontFamily: FONTS.heading,
                fontWeight: 700,
                color: letterColors[i],
                lineHeight: 1,
                textShadow: `0 4px 20px rgba(48,56,95,0.12)`,
              }}
            >
              {item.letter}
            </div>

            {/* Label */}
            <div
              style={{
                ...fadeUp(f, enter + 10),
                fontSize: 64,
                fontFamily: FONTS.heading,
                color: BRAND.navy,
                textAlign: "center",
                lineHeight: 1.3,
              }}
            >
              {item.label}
            </div>

            {/* Gold divider */}
            <div
              style={{
                width: interpolate(
                  f,
                  [enter + 14, enter + 24],
                  [0, 180],
                  { ...clamp, easing: ease },
                ),
                height: 3,
                background: BRAND.goldBorder,
              }}
            />

            {/* Description */}
            <div
              style={{
                ...fadeUp(f, enter + 20),
                fontSize: 48,
                color: BRAND.warmBrown,
                textAlign: "center",
                lineHeight: 1.4,
              }}
            >
              {item.desc}
            </div>

            {/* Progress indicator */}
            <div
              style={{
                ...fadeUp(f, enter + 8),
                display: "flex",
                gap: 12,
                marginTop: 20,
              }}
            >
              {abcde.map((_, j) => (
                <div
                  key={j}
                  style={{
                    width: j === i ? 40 : 14,
                    height: 14,
                    borderRadius: 7,
                    background: j <= i ? BRAND.teal : BRAND.coolGray,
                    transition: "all 0.3s",
                  }}
                />
              ))}
            </div>
          </div>
        );
      })}

      {/* ── SCENE 7: Bridge — deepNavy moment (285–320) ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: BRAND.deepNavy,
          opacity: sceneVis(f, 285, 320),
        }}
      >
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
            padding: "0 40px",
            gap: 28,
          }}
        >
          <div
            style={{
              ...fadeUp(f, 288),
              fontSize: 56,
              fontFamily: FONTS.heading,
              color: BRAND.cream,
              textAlign: "center",
              lineHeight: 1.4,
            }}
          >
            Ein jährliches Screening
          </div>
          <div
            style={{
              ...fadeUp(f, 298),
              fontSize: 56,
              fontFamily: FONTS.heading,
              color: BRAND.teal,
              textAlign: "center",
              lineHeight: 1.4,
              fontStyle: "italic",
            }}
          >
            erkennt nicht alles.
          </div>
        </div>
      </div>

      {/* ── SCENE 8: CTA — back to cream (325–360) ── */}
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
          opacity: sceneVis(f, 325, 360),
          padding: "0 40px",
          gap: 28,
        }}
      >
        <div
          style={{
            ...fadeUp(f, 328),
            fontSize: 52,
            fontFamily: FONTS.heading,
            color: BRAND.navy,
            textAlign: "center",
            lineHeight: 1.35,
          }}
        >
          Digitale Ganzkörperkartierung
        </div>

        {/* Gold divider */}
        <div
          style={{
            width: interpolate(f, [335, 345], [0, 260], {
              ...clamp,
              easing: ease,
            }),
            height: 3,
            background: BRAND.goldBorder,
          }}
        />

        <div
          style={{
            ...fadeUp(f, 338),
            fontSize: 46,
            color: BRAND.teal,
            textAlign: "center",
            lineHeight: 1.35,
          }}
        >
          Mehr als ein Screening.
        </div>

        {/* Logo */}
        <Img
          src={staticFile("derma-logo-dark.png")}
          style={{
            ...fadeUp(f, 345),
            width: 320,
            height: "auto",
            marginTop: 12,
          }}
        />

        <div
          style={{
            ...fadeUp(f, 352),
            fontSize: 32,
            color: BRAND.warmBrown,
            fontWeight: 500,
          }}
        >
          dermamedicum.com
        </div>
      </div>

      {/* Bottom gold line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 5,
          background: BRAND.goldBorder,
        }}
      />
    </div>
  );
};
