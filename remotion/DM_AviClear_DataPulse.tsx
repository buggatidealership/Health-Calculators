import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
import { BRAND, FONTS, LOGO, SAFE, SPEC } from "./derma-brand";

// DM_AviClear_DataPulse — Acne Treatment Comparison
// Animated bar charts comparing 4 acne approaches, AviClear wins
// 360 frames (12s at 30fps), 1080x1920

export const DM_AviClear_DataPulse: React.FC = () => {
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

  // --- Scene 1: Title + bars animate in (0-140) ---
  const bars = [
    { label: "Topische Cremes", pct: 30, color: `${BRAND.midGray}88`, delay: 30, note: "" },
    { label: "Antibiotika", pct: 50, color: `${BRAND.warmBrown}aa`, delay: 42, note: "Resistenz" },
    { label: "Isotretinoin", pct: 85, color: `${BRAND.sage}cc`, delay: 54, note: "Nebenwirkungen" },
    { label: "AviClear", pct: 92, color: BRAND.teal, delay: 72, note: "Keine Medikamente" },
  ];

  const maxBarW = 640;

  // --- Scene 2: Stats + key finding (140-250) ---
  const traditionalDim = interpolate(frame, [145, 175], [1, 0.25], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });

  const aviPulseScale =
    frame >= 150 && frame <= 240
      ? 1 + Math.sin((frame - 150) * 0.12) * 0.03
      : 1;

  // --- Scene 3: CTA end card (250-360) ---
  const scene3Opacity = vis(255, 360);

  // Glowing accent dot
  const dotY = interpolate(frame, [75, 95, 110], [780, 920, 920], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });
  const dotX = interpolate(frame, [75, 95, 110], [350, 550, 750], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });
  const dotOpacity = interpolate(frame, [72, 80, 112, 120], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

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
      {/* SCENES 1 + 2: Data visualization (0-250) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: vis(0, 248),
          display: "flex",
          flexDirection: "column",
          padding: `${SAFE.top + 40}px ${SAFE.right + 20}px ${SAFE.bottom + 20}px ${SAFE.left + 20}px`,
        }}
      >
        {/* Title */}
        <div
          style={{
            ...fadeIn(3),
            fontSize: 48,
            fontWeight: 700,
            color: BRAND.cream,
            fontFamily: FONTS.heading,
            textAlign: "center",
            marginBottom: 12,
          }}
        >
          Akne-Behandlung
        </div>
        <div
          style={{
            ...fadeIn(10),
            fontSize: 32,
            color: BRAND.midGray,
            letterSpacing: 3,
            textTransform: "uppercase",
            textAlign: "center",
            marginBottom: 48,
          }}
        >
          im Vergleich
        </div>

        {/* Bars */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {bars.map((bar, i) => {
            const barW = interpolate(
              frame,
              [bar.delay, bar.delay + 24],
              [0, (bar.pct / 100) * maxBarW],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.cubic),
              }
            );
            const labelOpacity = interpolate(
              frame,
              [bar.delay, bar.delay + 10],
              [0, 1],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
            );
            const isAviClear = i === 3;
            const dimFactor = isAviClear ? 1 : (frame >= 140 ? traditionalDim : 1);
            const pctDisplay = Math.round(
              interpolate(frame, [bar.delay, bar.delay + 24], [0, bar.pct], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              })
            );

            return (
              <div key={i} style={{ opacity: dimFactor }}>
                {/* Label row */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: 8,
                    opacity: labelOpacity,
                  }}
                >
                  <span
                    style={{
                      fontSize: 28,
                      color: isAviClear ? BRAND.teal : BRAND.cream,
                      fontWeight: isAviClear ? 700 : 400,
                    }}
                  >
                    {bar.label}
                  </span>
                  {bar.note && (
                    <span
                      style={{
                        fontSize: 22,
                        color: isAviClear ? BRAND.sage : BRAND.midGray,
                        fontStyle: isAviClear ? "normal" : "italic",
                      }}
                    >
                      {bar.note}
                    </span>
                  )}
                </div>
                {/* Bar + percentage */}
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <div
                    style={{
                      height: isAviClear ? 48 : 36,
                      width: barW,
                      background: isAviClear
                        ? `linear-gradient(90deg, ${BRAND.sage}, ${BRAND.teal})`
                        : bar.color,
                      borderRadius: isAviClear ? 8 : 6,
                      transform: isAviClear ? `scaleX(${aviPulseScale})` : undefined,
                      transformOrigin: "left",
                      boxShadow: isAviClear && frame >= 150 && frame <= 240
                        ? `0 0 ${20 + Math.sin((frame - 150) * 0.12) * 10}px ${BRAND.sage}66`
                        : "none",
                    }}
                  />
                  <span
                    style={{
                      fontSize: isAviClear ? 36 : 28,
                      color: isAviClear ? BRAND.teal : BRAND.lightGray,
                      fontWeight: 700,
                      opacity: labelOpacity,
                      fontFamily: FONTS.mono,
                    }}
                  >
                    {pctDisplay}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Key stat (scene 2) */}
        <div
          style={{
            ...fadeIn(165, 20),
            marginTop: 60,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              color: BRAND.cream,
              fontFamily: FONTS.heading,
              lineHeight: 1,
            }}
          >
            92%
          </div>
          <div
            style={{
              fontSize: 30,
              color: BRAND.sage,
              marginTop: 16,
              lineHeight: 1.5,
              maxWidth: 700,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            der Patienten: {"\u2265"}50% weniger{"\n"}entzundliche Lasionen nach 12 Monaten
          </div>
        </div>

        {/* CTA line */}
        <div
          style={{
            ...fadeIn(200, 14),
            fontSize: 30,
            color: BRAND.midGray,
            textAlign: "center",
            marginTop: 32,
            fontStyle: "italic",
          }}
        >
          Die Ursache behandeln. Nicht die Symptome.
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

      {/* SCENE 3: Logo end card (250-360) */}
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
            ...fadeIn(262, 16),
            width: 420,
            objectFit: "contain",
          }}
        />
        <div
          style={{
            ...fadeIn(282, 16),
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
