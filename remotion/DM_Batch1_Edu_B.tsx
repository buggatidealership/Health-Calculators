// DM_Batch1_Edu_B — "Rosacea Triggers" educational reel
// Environmental/lifestyle triggers → bridges to laser treatment
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

function slideIn(f: number, s: number, d = 14): React.CSSProperties {
  return {
    opacity: interpolate(f, [s, s + d], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    transform: `translateX(${interpolate(f, [s, s + d], [-40, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })}px)`,
  };
}

function pop(f: number, s: number, d = 8): React.CSSProperties {
  return {
    transform: `scale(${interpolate(f, [s, s + d], [0.7, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.back(2)) })})`,
    opacity: interpolate(f, [s, s + d * 0.6], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
  };
}

const TRIGGERS = [
  { label: "UV-Strahlung", color: "#D4A853", delay: 0 },
  { label: "Alkohol", color: BRAND.mauve, delay: 32 },
  { label: "Scharfe Gew\u00FCrze", color: BRAND.error, delay: 64 },
  { label: "Temperaturschwankungen", color: BRAND.teal, delay: 96 },
  { label: "Stress", color: BRAND.darkGray, delay: 128 },
] as const;

export const DM_Batch1_Edu_B: React.FC = () => {
  const frame = useCurrentFrame();

  // Background transitions from warm to cool for the bridge
  const coolShift = interpolate(frame, [230, 280], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });

  const bgColor = coolShift < 0.01
    ? BRAND.deepNavy
    : BRAND.deepNavy; // Stays deep navy, glow shifts
  const glowWarm = 0.06 + 0.02 * Math.sin(frame * 0.06);
  const glowCool = 0.08 * coolShift;

  return (
    <div
      style={{
        width: SPEC.width,
        height: SPEC.height,
        background: bgColor,
        overflow: "hidden",
        position: "relative",
        fontFamily: FONTS.body,
      }}
    >
      {/* Warm glow (scenes 1-2) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at 50% 45%, rgba(127,105,84,${glowWarm * (1 - coolShift)}) 0%, transparent 55%)`,
          pointerEvents: "none",
        }}
      />
      {/* Cool glow (scenes 3-4) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at 50% 45%, rgba(85,134,149,${glowCool}) 0%, transparent 55%)`,
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
          padding: "0 30px",
        }}
      >
        <div
          style={{
            ...pop(frame, 5),
            fontSize: 40,
            color: BRAND.sage,
            fontFamily: FONTS.mono,
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 32,
          }}
        >
          Hautwissen
        </div>
        <div
          style={{
            ...fadeIn(frame, 12, 14),
            fontSize: 74,
            color: BRAND.white,
            fontFamily: FONTS.heading,
            textAlign: "center",
            lineHeight: 1.3,
          }}
        >
          Rosacea: 5 Ausl{"\u00F6"}ser, die Sie vermeiden sollten.
        </div>
      </div>

      {/* ====== SCENE 2: Trigger list (70-250) ====== */}
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
          opacity: vis(frame, 70, 250),
          padding: "0 40px",
          gap: 28,
        }}
      >
        {/* Section header */}
        <div
          style={{
            ...fadeIn(frame, 74, 10),
            fontSize: 38,
            color: BRAND.midGray,
            fontFamily: FONTS.mono,
            letterSpacing: 4,
            marginBottom: 16,
          }}
        >
          BEKANNTE TRIGGER
        </div>

        {/* Trigger items */}
        {TRIGGERS.map((t, i) => {
          const itemStart = 80 + t.delay;
          return (
            <div
              key={i}
              style={{
                ...slideIn(frame, itemStart, 14),
                display: "flex",
                alignItems: "center",
                gap: 24,
                padding: "22px 28px",
                background: `rgba(255,255,255,0.04)`,
                borderRadius: 16,
                borderLeft: `4px solid ${t.color}`,
              }}
            >
              {/* Circle bullet */}
              <div
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  background: t.color,
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: 52,
                  color: BRAND.white,
                  fontWeight: 600,
                  lineHeight: 1.3,
                }}
              >
                {t.label}
              </span>
            </div>
          );
        })}

        {/* Summary note */}
        <div
          style={{
            ...fadeIn(frame, 218, 14),
            fontSize: 44,
            color: BRAND.cream,
            fontFamily: FONTS.heading,
            fontStyle: "italic",
            textAlign: "center",
            marginTop: 24,
            lineHeight: 1.4,
          }}
        >
          Die Gef{"\u00E4"}{"\u00DF"}erweiterung ist oft irreversibel.
        </div>
      </div>

      {/* ====== SCENE 3: Bridge (250-320) ====== */}
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
          opacity: vis(frame, 250, 320),
          padding: "0 30px",
          gap: 36,
        }}
      >
        <div
          style={{
            ...fadeIn(frame, 256, 14),
            fontSize: 62,
            color: BRAND.white,
            fontFamily: FONTS.heading,
            textAlign: "center",
            lineHeight: 1.35,
          }}
        >
          Laserbehandlungen k{"\u00F6"}nnen erweiterte Gef{"\u00E4"}{"\u00DF"}e gezielt verschlie{"\u00DF"}en.
        </div>

        <div
          style={{
            ...fadeIn(frame, 278, 14),
            width: "80%",
            height: 1,
            background: `linear-gradient(90deg, transparent, ${BRAND.teal}, transparent)`,
          }}
        />

        <div
          style={{
            ...fadeIn(frame, 285, 14),
            fontSize: 40,
            color: BRAND.midGray,
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          Sprechen Sie mit Ihrem Dermatologen {"\u00FC"}ber Ihre Optionen.
        </div>
      </div>

      {/* ====== SCENE 4: CTA end card (320-390) ====== */}
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
          opacity: vis(frame, 320, 390),
          gap: 40,
        }}
      >
        <Img
          src={staticFile(LOGO.light)}
          style={{
            ...pop(frame, 328, 12),
            width: 360,
            objectFit: "contain",
          }}
        />

        <div
          style={{
            ...fadeIn(frame, 342, 12),
            marginTop: 16,
            padding: "22px 56px",
            background: `linear-gradient(135deg, ${BRAND.teal}, ${BRAND.darkTeal})`,
            borderRadius: 50,
            fontSize: 36,
            fontWeight: 700,
            color: BRAND.white,
            fontFamily: FONTS.body,
            letterSpacing: 3,
          }}
        >
          DERMAMEDICUM &middot; BONN
        </div>

        <div
          style={{
            ...fadeIn(frame, 358, 10),
            fontSize: 32,
            color: BRAND.midGray,
            letterSpacing: 4,
          }}
        >
          Beratungstermin vereinbaren
        </div>
      </div>
    </div>
  );
};
