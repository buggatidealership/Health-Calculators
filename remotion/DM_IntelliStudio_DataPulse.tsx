import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { BRAND, FONTS, SAFE, SPEC } from "./derma-brand";

// DM_IntelliStudio_DataPulse — IntelliStudio data comparison
// Animated bar charts: manual vs IntelliStudio documentation
// 360 frames (12s at 30fps), 1080x1920

export const DM_IntelliStudio_DataPulse: React.FC = () => {
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

  // --- Scene 1: Time comparison bars (0-130) ---
  const manualBarW = interpolate(frame, [20, 55], [0, 700], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const intelliBarW = interpolate(frame, [40, 65], [0, 56], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // --- Scene 2: Quality comparison bars (130-230) ---
  const subjectiveBarW = interpolate(frame, [140, 170], [0, 400], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const standardizedBarW = interpolate(frame, [155, 185], [0, 680], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // Pulse effect on IntelliStudio bar
  const intelliPulse =
    frame >= 65 && frame <= 120
      ? 1 + Math.sin((frame - 65) * 0.15) * 0.06
      : 1;

  const standardizedPulse =
    frame >= 185 && frame <= 225
      ? 1 + Math.sin((frame - 185) * 0.15) * 0.04
      : 1;

  // Scene transitions
  const scene1Flatten = interpolate(frame, [120, 135], [1, 0.3], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });

  // Glowing accent dot
  const dotOpacity = interpolate(frame, [55, 62, 115, 125], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const dotX = interpolate(frame, [55, 80, 115], [200, 400, 600], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });

  // --- Scene 3: Key stat (230-290) ---
  // --- Scene 4: CTA (290-360) ---
  const ctaOpacity = vis(290, 360);

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
      {/* ═══ SCENES 1 + 2: Data visualizations (0-230) ═══ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: vis(0, 228),
          display: "flex",
          flexDirection: "column",
          padding: `${SAFE.top + 40}px ${SAFE.right + 20}px ${SAFE.bottom + 20}px ${SAFE.left + 20}px`,
        }}
      >
        {/* Title */}
        <div
          style={{
            ...fadeIn(3),
            fontSize: 44,
            color: BRAND.cream,
            fontFamily: FONTS.heading,
            fontWeight: 700,
            marginBottom: 50,
            textAlign: "center",
          }}
        >
          Hautkrebs-Vorsorge im Vergleich
        </div>

        {/* --- Comparison 1: Time --- */}
        <div
          style={{
            ...fadeIn(8),
            fontSize: 28,
            color: BRAND.midGray,
            letterSpacing: 3,
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          Dauer der Dokumentation
        </div>

        {/* Manual bar */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
          <div
            style={{
              fontSize: 26,
              color: BRAND.cream,
              width: 220,
              textAlign: "right",
              opacity: interpolate(frame, [15, 25], [0, 0.8], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            Manuelle Foto-
            {"\n"}dokumentation
          </div>
          <div
            style={{
              height: 42,
              width: manualBarW,
              background: `linear-gradient(90deg, ${BRAND.error}cc, ${BRAND.error})`,
              borderRadius: 6,
              transform: `scaleY(${frame >= 120 ? scene1Flatten : 1})`,
              transformOrigin: "center",
            }}
          />
          <div
            style={{
              fontSize: 32,
              color: BRAND.error,
              fontWeight: 700,
              opacity: interpolate(frame, [50, 58], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            90 Min.
          </div>
        </div>

        {/* IntelliStudio bar */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
          <div
            style={{
              fontSize: 26,
              color: BRAND.cream,
              width: 220,
              textAlign: "right",
              opacity: interpolate(frame, [35, 45], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            IntelliStudio
          </div>
          <div
            style={{
              height: 52,
              width: intelliBarW,
              background: `linear-gradient(90deg, ${BRAND.sage}, ${BRAND.success})`,
              borderRadius: 8,
              transform: `scaleX(${intelliPulse})`,
              transformOrigin: "left",
              boxShadow:
                frame >= 65 && frame <= 120
                  ? `0 0 ${20 + Math.sin((frame - 65) * 0.15) * 10}px ${BRAND.sage}66`
                  : "none",
            }}
          />
          <div
            style={{
              fontSize: 32,
              color: BRAND.success,
              fontWeight: 700,
              opacity: interpolate(frame, [60, 68], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            2 Min.
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            width: interpolate(frame, [80, 95], [0, 700], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            height: 2,
            background: `${BRAND.teal}44`,
            marginBottom: 50,
            borderRadius: 1,
          }}
        />

        {/* --- Comparison 2: Quality --- */}
        <div
          style={{
            ...fadeIn(130),
            fontSize: 28,
            color: BRAND.midGray,
            letterSpacing: 3,
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          Bildqualit{"\u00E4"}t
        </div>

        {/* Subjective bar */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
          <div
            style={{
              fontSize: 26,
              color: BRAND.cream,
              width: 220,
              textAlign: "right",
              opacity: interpolate(frame, [135, 145], [0, 0.8], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            Subjektive{"\n"}Beurteilung
          </div>
          <div
            style={{
              height: 42,
              width: subjectiveBarW,
              background: `${BRAND.sage}88`,
              borderRadius: 6,
            }}
          />
          <div
            style={{
              fontSize: 26,
              color: BRAND.midGray,
              opacity: interpolate(frame, [165, 175], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            variabel
          </div>
        </div>

        {/* Standardized bar */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 30 }}>
          <div
            style={{
              fontSize: 26,
              color: BRAND.cream,
              width: 220,
              textAlign: "right",
              opacity: interpolate(frame, [150, 160], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            Standardisierte{"\n"}Bildgebung
          </div>
          <div
            style={{
              height: 52,
              width: standardizedBarW,
              background: `linear-gradient(90deg, ${BRAND.sage}, ${BRAND.teal})`,
              borderRadius: 8,
              transform: `scaleX(${standardizedPulse})`,
              transformOrigin: "left",
              boxShadow:
                frame >= 185 && frame <= 225
                  ? `0 0 ${20 + Math.sin((frame - 185) * 0.15) * 10}px ${BRAND.sage}66`
                  : "none",
            }}
          />
          <div
            style={{
              fontSize: 26,
              color: BRAND.success,
              fontWeight: 600,
              opacity: interpolate(frame, [180, 190], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            reproduzierbar
          </div>
        </div>

        {/* Key stat */}
        <div
          style={{
            ...fadeIn(195, 18),
            marginTop: 50,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: 700,
              color: BRAND.cream,
              fontFamily: FONTS.heading,
              lineHeight: 1,
            }}
          >
            10x schneller. 100% reproduzierbar.
          </div>
        </div>

        {/* Subtext */}
        <div
          style={{
            ...fadeIn(215, 14),
            fontSize: 30,
            color: BRAND.midGray,
            textAlign: "center",
            marginTop: 30,
            lineHeight: 1.5,
          }}
        >
          Automatisierte Positionierung. Dual-Beleuchtung.{"\n"}Digitale K{"\u00F6"}rperkarte.
        </div>
      </div>

      {/* Glowing accent dot */}
      <div
        style={{
          position: "absolute",
          left: dotX,
          top: 750,
          width: 18,
          height: 18,
          borderRadius: "50%",
          background: BRAND.teal,
          boxShadow: `0 0 24px 8px ${BRAND.teal}88`,
          opacity: dotOpacity,
          pointerEvents: "none",
        }}
      />

      {/* ═══ SCENE 4: CTA (290-360) ═══ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: BRAND.deepNavy,
          opacity: ctaOpacity,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 40,
        }}
      >
        <div
          style={{
            ...fadeIn(295, 16),
            fontSize: 56,
            color: BRAND.cream,
            fontFamily: FONTS.heading,
            fontWeight: 700,
            textAlign: "center",
            lineHeight: 1.35,
            maxWidth: 800,
          }}
        >
          Hautvorsorge auf h{"\u00F6"}chstem Niveau.
        </div>
        <div
          style={{
            ...fadeIn(320, 16),
            fontSize: 32,
            color: BRAND.midGray,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          DERMAMEDICUM {"\u00B7"} BONN
        </div>
      </div>
    </div>
  );
};
