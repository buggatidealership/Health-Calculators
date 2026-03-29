import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
import { BRAND, FONTS, SAFE, SPEC } from "./derma-brand";

// B1_Edu_A: "Akne-Mythen" — 3 myths with strikethrough correction
// 1080x1920, 30fps, 360 frames (12s)

/* ── helpers (self-contained) ── */
const ease = Easing.out(Easing.cubic);
const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;

function fadeUp(f: number, start: number, dur = 12) {
  return {
    opacity: interpolate(f, [start, start + dur], [0, 1], clamp),
    transform: `translateY(${interpolate(f, [start, start + dur], [30, 0], { ...clamp, easing: ease })}px)`,
  };
}

function pop(f: number, start: number, dur = 10) {
  return {
    opacity: interpolate(f, [start, start + dur * 0.6], [0, 1], clamp),
    transform: `scale(${interpolate(f, [start, start + dur], [0.75, 1], { ...clamp, easing: Easing.out(Easing.back(1.8)) })})`,
  };
}

function sceneVis(f: number, enter: number, exit: number) {
  if (f < enter || f > exit + 10) return 0;
  return Math.min(
    interpolate(f, [enter, enter + 10], [0, 1], clamp),
    interpolate(f, [exit, exit + 10], [1, 0], clamp),
  );
}

/* ── myths data ── */
const myths = [
  { myth: `\u201ESchokolade verursacht Akne\u201C`, fact: `Talgdr\u00FCsen, nicht Ern\u00E4hrung` },
  { myth: `\u201EMehr waschen hilft\u201C`, fact: `\u00DCberm\u00E4\u00DFiges Waschen verschlimmert` },
  { myth: `\u201EAkne ist nur kosmetisch\u201C`, fact: `Chronische Entz\u00FCndung der Haut` },
];

export const B1_Edu_A: React.FC = () => {
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
      {/* Decorative gold border lines at top and bottom */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 6,
          background: BRAND.goldBorder,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 6,
          background: BRAND.goldBorder,
        }}
      />

      {/* ── SCENE 1: Hook (0–70) ── */}
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
          opacity: sceneVis(f, 0, 70),
          padding: "0 20px",
          gap: 32,
        }}
      >
        {/* Number badge */}
        <div
          style={{
            ...pop(f, 4),
            width: 160,
            height: 160,
            borderRadius: "50%",
            border: `5px solid ${BRAND.goldBorder}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 96,
            fontFamily: FONTS.heading,
            color: BRAND.navy,
            fontWeight: 700,
          }}
        >
          3
        </div>
        <div
          style={{
            ...fadeUp(f, 12),
            fontSize: 72,
            fontFamily: FONTS.heading,
            color: BRAND.navy,
            textAlign: "center",
            lineHeight: 1.3,
          }}
        >
          Mythen über Akne,
        </div>
        <div
          style={{
            ...fadeUp(f, 22),
            fontSize: 64,
            color: BRAND.warmBrown,
            textAlign: "center",
            lineHeight: 1.3,
          }}
        >
          die Ihre Haut verschlechtern
        </div>
      </div>

      {/* ── SCENE 2: Myth 1 (75–145) ── */}
      {myths.map((item, i) => {
        const enter = 75 + i * 75;
        const exit = enter + 65;
        const strikeStart = enter + 22;
        const strikeProgress = interpolate(
          f,
          [strikeStart, strikeStart + 14],
          [0, 100],
          clamp,
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
              opacity: sceneVis(f, enter, exit),
              padding: "0 30px",
              gap: 40,
            }}
          >
            {/* Myth number */}
            <div
              style={{
                ...pop(f, enter + 2),
                fontSize: 42,
                color: BRAND.warmBrown,
                fontWeight: 600,
                letterSpacing: 4,
                textTransform: "uppercase",
              }}
            >
              Mythos {i + 1}
            </div>

            {/* Gold divider */}
            <div
              style={{
                width: interpolate(f, [enter + 6, enter + 16], [0, 200], {
                  ...clamp,
                  easing: ease,
                }),
                height: 3,
                background: BRAND.goldBorder,
              }}
            />

            {/* Myth text with strikethrough */}
            <div
              style={{
                ...fadeUp(f, enter + 8),
                fontSize: 62,
                fontFamily: FONTS.heading,
                color: BRAND.navy,
                textAlign: "center",
                lineHeight: 1.4,
                position: "relative",
              }}
            >
              {item.myth}
              {/* Animated strikethrough line */}
              <div
                style={{
                  position: "absolute",
                  left: "0%",
                  top: "52%",
                  width: `${strikeProgress}%`,
                  height: 6,
                  background: BRAND.warmBrown,
                  borderRadius: 3,
                  opacity: interpolate(
                    f,
                    [strikeStart, strikeStart + 4],
                    [0, 0.85],
                    clamp,
                  ),
                }}
              />
            </div>

            {/* Fact card */}
            <div
              style={{
                ...fadeUp(f, enter + 38),
                background: BRAND.white,
                border: `2px solid ${BRAND.goldBorder}`,
                borderRadius: 20,
                padding: "28px 40px",
                maxWidth: 820,
              }}
            >
              <div
                style={{
                  fontSize: 24,
                  color: BRAND.warmBrown,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: 3,
                  marginBottom: 10,
                }}
              >
                Fakt
              </div>
              <div
                style={{
                  fontSize: 52,
                  color: BRAND.teal,
                  fontWeight: 600,
                  lineHeight: 1.35,
                }}
              >
                {item.fact}
              </div>
            </div>
          </div>
        );
      })}

      {/* ── SCENE 5: CTA (300–360) ── */}
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
          opacity: sceneVis(f, 300, 360),
          padding: "0 40px",
          gap: 36,
        }}
      >
        {/* Gold divider */}
        <div
          style={{
            width: interpolate(f, [303, 316], [0, 300], {
              ...clamp,
              easing: ease,
            }),
            height: 3,
            background: BRAND.goldBorder,
          }}
        />

        <div
          style={{
            ...fadeUp(f, 305),
            fontSize: 66,
            fontFamily: FONTS.heading,
            color: BRAND.navy,
            textAlign: "center",
            lineHeight: 1.35,
          }}
        >
          Die Ursache behandeln,
        </div>
        <div
          style={{
            ...fadeUp(f, 315),
            fontSize: 62,
            color: BRAND.teal,
            fontStyle: "italic",
            textAlign: "center",
            lineHeight: 1.35,
          }}
        >
          nicht die Oberfläche.
        </div>

        {/* Logo */}
        <Img
          src={staticFile("derma-logo-dark.png")}
          style={{
            ...fadeUp(f, 330),
            width: 340,
            height: "auto",
            marginTop: 20,
          }}
        />

        <div
          style={{
            ...fadeUp(f, 340),
            fontSize: 34,
            color: BRAND.warmBrown,
            fontWeight: 500,
          }}
        >
          Lasertherapie bei DermaMedicum
        </div>
      </div>
    </div>
  );
};
