import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
import { BRAND, FONTS, LOGO, SAFE, SPEC } from "./derma-brand";

// DM_DataPulse — Data Visualization Myth-Buster
// Acne + AviClear: animated bar charts that ARE the argument
// 270 frames (9s at 30fps), 1080x1920

export const DM_DataPulse: React.FC = () => {
  const frame = useCurrentFrame();

  const fadeIn = (s: number, d = 12) => ({
    opacity: interpolate(frame, [s, s + d], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }),
    transform: `translateY(${interpolate(frame, [s, s + d], [24, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.cubic),
    })}px)`,
  });

  const vis = (s: number, e: number) => {
    if (frame < s || frame > e + 8) return 0;
    return Math.min(
      interpolate(frame, [s, s + 6], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      }),
      interpolate(frame, [e, e + 8], [1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    );
  };

  // --- Scene 1: Bar charts animate in (0-90) ---
  const traditionalBars = [
    { label: "Antibiotika", maxW: 280, delay: 10 },
    { label: "Isotretinoin", maxW: 320, delay: 18 },
    { label: "Topische Cremes", maxW: 240, delay: 26 },
    { label: "Chem. Peelings", maxW: 200, delay: 34 },
  ];

  const aviClearBarW = interpolate(frame, [45, 80], [0, 680], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // Glowing dot bouncing between sections
  const dotY = interpolate(frame, [50, 65, 80], [620, 920, 920], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });
  const dotX = interpolate(frame, [50, 65, 80], [300, 500, 700], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });
  const dotOpacity = interpolate(frame, [48, 55, 82, 90], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // --- Scene 2: Morph + stats (90-180) ---
  const traditionalFlatten = interpolate(frame, [95, 130], [1, 0.3], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });

  const aviPulseScale =
    frame >= 100 && frame <= 170
      ? 1 + Math.sin((frame - 100) * 0.15) * 0.04
      : 1;

  // --- Scene 3: End card (180-270) ---
  const scene3Opacity = vis(185, 270);

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
      {/* ═══ SCENE 1 + 2: Data visualization (0-180) ═══ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: vis(0, 178),
          display: "flex",
          flexDirection: "column",
          padding: `${SAFE.top + 40}px ${SAFE.right + 20}px ${SAFE.bottom + 20}px ${SAFE.left + 20}px`,
        }}
      >
        {/* Section header: Traditional */}
        <div
          style={{
            ...fadeIn(3),
            fontSize: 36,
            color: BRAND.midGray,
            letterSpacing: 3,
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          Traditionelle Behandlung
        </div>

        {/* Traditional bars */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {traditionalBars.map((bar, i) => {
            const barW = interpolate(frame, [bar.delay, bar.delay + 20], [0, bar.maxW], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            });
            const scaleY = frame >= 90 ? traditionalFlatten : 1;
            return (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div
                  style={{
                    fontSize: 28,
                    color: BRAND.cream,
                    width: 260,
                    textAlign: "right",
                    opacity: interpolate(frame, [bar.delay, bar.delay + 10], [0, 0.8], {
                      extrapolateLeft: "clamp",
                      extrapolateRight: "clamp",
                    }),
                  }}
                >
                  {bar.label}
                </div>
                <div
                  style={{
                    height: 36,
                    width: barW,
                    background: `${BRAND.sage}88`,
                    borderRadius: 6,
                    transform: `scaleY(${scaleY})`,
                    transformOrigin: "center",
                    transition: "transform 0.3s",
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div
          style={{
            width: interpolate(frame, [38, 50], [0, 700], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            height: 2,
            background: `${BRAND.teal}44`,
            marginTop: 50,
            marginBottom: 50,
            borderRadius: 1,
          }}
        />

        {/* Section header: AviClear */}
        <div
          style={{
            ...fadeIn(40),
            fontSize: 36,
            color: BRAND.teal,
            letterSpacing: 3,
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          AviClear
        </div>

        {/* AviClear bar */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              fontSize: 28,
              color: BRAND.cream,
              width: 260,
              textAlign: "right",
              opacity: interpolate(frame, [42, 50], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            Lasertherapie
          </div>
          <div
            style={{
              height: 52,
              width: aviClearBarW,
              background: `linear-gradient(90deg, ${BRAND.sage}, ${BRAND.teal})`,
              borderRadius: 8,
              transform: `scaleX(${aviPulseScale})`,
              transformOrigin: "left",
              boxShadow:
                frame >= 100 && frame <= 170
                  ? `0 0 ${20 + Math.sin((frame - 100) * 0.15) * 10}px ${BRAND.sage}66`
                  : "none",
            }}
          />
        </div>

        {/* Stats fade in during scene 2 */}
        <div
          style={{
            ...fadeIn(110, 18),
            marginTop: 80,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              color: BRAND.cream,
              fontFamily: FONTS.heading,
              lineHeight: 1,
            }}
          >
            87%
          </div>
          <div
            style={{
              fontSize: 38,
              color: BRAND.sage,
              marginTop: 16,
              lineHeight: 1.4,
            }}
          >
            Verbesserung nach 3 Sitzungen
          </div>
        </div>

        {/* Subtext */}
        <div
          style={{
            ...fadeIn(140, 14),
            fontSize: 28,
            color: BRAND.midGray,
            textAlign: "center",
            marginTop: 24,
          }}
        >
          Ohne Medikamente. Ohne Ausfallzeit.
        </div>
      </div>

      {/* Glowing accent dot */}
      <div
        style={{
          position: "absolute",
          left: dotX,
          top: dotY,
          width: 18,
          height: 18,
          borderRadius: "50%",
          background: BRAND.teal,
          boxShadow: `0 0 24px 8px ${BRAND.teal}88`,
          opacity: dotOpacity,
          pointerEvents: "none",
        }}
      />

      {/* ═══ SCENE 3: Logo end card (180-270) ═══ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: BRAND.deepNavy,
          opacity: scene3Opacity,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 32,
        }}
      >
        <Img
          src={staticFile(LOGO.light)}
          style={{
            ...fadeIn(190, 16),
            width: 420,
            objectFit: "contain",
          }}
        />
        <div
          style={{
            ...fadeIn(210, 16),
            fontSize: 32,
            color: BRAND.midGray,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          Dermatologie · Laser · Asthetik
        </div>
      </div>
    </div>
  );
};
