import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
import { BRAND, FONTS, SAFE, SPEC } from "./derma-brand";

// B1_Edu_B: "Rosacea-Auslöser" — 5 triggers stagger in
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

function slideIn(f: number, start: number, dur = 14) {
  return {
    opacity: interpolate(f, [start, start + dur * 0.5], [0, 1], clamp),
    transform: `translateX(${interpolate(f, [start, start + dur], [-60, 0], { ...clamp, easing: ease })}px)`,
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

/* ── triggers data ── */
const triggers = [
  { label: "UV-Strahlung", icon: "☀️" },
  { label: "Alkohol", icon: "🍷" },
  { label: "Scharfe Gewürze", icon: "🌶️" },
  { label: "Temperaturschwankungen", icon: "🌡️" },
  { label: "Stress", icon: "⚡" },
];

export const B1_Edu_B: React.FC = () => {
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
      {/* Subtle warm gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at 50% 20%, rgba(127,105,84,0.04) 0%, transparent 60%)`,
          pointerEvents: "none",
        }}
      />

      {/* Top gold accent line */}
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

      {/* ── SCENE 1: Hook (0–65) ── */}
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
          opacity: sceneVis(f, 0, 65),
          padding: "0 30px",
          gap: 28,
        }}
      >
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
          5
        </div>
        <div
          style={{
            ...fadeUp(f, 12),
            fontSize: 68,
            fontFamily: FONTS.heading,
            color: BRAND.navy,
            textAlign: "center",
            lineHeight: 1.3,
          }}
        >
          Auslöser, die Rosacea
        </div>
        <div
          style={{
            ...fadeUp(f, 22),
            fontSize: 62,
            color: BRAND.warmBrown,
            textAlign: "center",
            lineHeight: 1.3,
            fontStyle: "italic",
          }}
        >
          verschlimmern
        </div>
      </div>

      {/* ── SCENE 2: Triggers stagger (70–255) ── */}
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
          opacity: sceneVis(f, 70, 255),
          padding: "0 30px",
          gap: 16,
        }}
      >
        {/* Section heading */}
        <div
          style={{
            ...fadeUp(f, 72),
            fontSize: 42,
            color: BRAND.warmBrown,
            fontWeight: 600,
            letterSpacing: 3,
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          Bekannte Auslöser
        </div>

        {triggers.map((trigger, i) => {
          const triggerStart = 85 + i * 30;
          return (
            <div
              key={i}
              style={{
                ...slideIn(f, triggerStart),
                display: "flex",
                alignItems: "center",
                gap: 24,
                width: "100%",
                maxWidth: 820,
                padding: "22px 30px",
                background: BRAND.white,
                borderRadius: 18,
                borderLeft: `6px solid ${BRAND.warmBrown}`,
                boxShadow: "0 2px 12px rgba(127,105,84,0.08)",
              }}
            >
              {/* Bullet circle */}
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${BRAND.cream}, ${BRAND.white})`,
                  border: `2px solid ${BRAND.goldBorder}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 40,
                  flexShrink: 0,
                }}
              >
                {trigger.icon}
              </div>
              <div
                style={{
                  fontSize: 50,
                  color: BRAND.navy,
                  fontWeight: 600,
                  fontFamily: FONTS.heading,
                }}
              >
                {trigger.label}
              </div>
              {/* Number indicator */}
              <div
                style={{
                  marginLeft: "auto",
                  fontSize: 32,
                  color: BRAND.warmBrown,
                  fontWeight: 700,
                  opacity: 0.5,
                }}
              >
                0{i + 1}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── SCENE 3: Bridge — clinical cool shift (260–310) ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: BRAND.coolGray,
          opacity: sceneVis(f, 260, 310),
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
              ...fadeUp(f, 264),
              fontSize: 60,
              fontFamily: FONTS.heading,
              color: BRAND.navy,
              textAlign: "center",
              lineHeight: 1.35,
            }}
          >
            Rötungen lassen sich
          </div>
          <div
            style={{
              ...fadeUp(f, 275),
              fontSize: 60,
              fontFamily: FONTS.heading,
              color: BRAND.teal,
              textAlign: "center",
              lineHeight: 1.35,
              fontStyle: "italic",
            }}
          >
            gezielt behandeln.
          </div>

          {/* Gold divider */}
          <div
            style={{
              width: interpolate(f, [282, 295], [0, 260], {
                ...clamp,
                easing: ease,
              }),
              height: 3,
              background: BRAND.goldBorder,
              marginTop: 8,
            }}
          />
        </div>
      </div>

      {/* ── SCENE 4: CTA (315–360) ── */}
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
          opacity: sceneVis(f, 315, 360),
          padding: "0 40px",
          gap: 32,
        }}
      >
        <div
          style={{
            ...fadeUp(f, 318),
            fontSize: 56,
            fontFamily: FONTS.heading,
            color: BRAND.navy,
            textAlign: "center",
            lineHeight: 1.35,
          }}
        >
          Gefäßlaser-Therapie
        </div>
        <div
          style={{
            ...fadeUp(f, 328),
            fontSize: 48,
            color: BRAND.teal,
            textAlign: "center",
            lineHeight: 1.35,
          }}
        >
          bei DermaMedicum
        </div>

        {/* Logo */}
        <Img
          src={staticFile("derma-logo-dark.png")}
          style={{
            ...fadeUp(f, 338),
            width: 320,
            height: "auto",
            marginTop: 16,
          }}
        />

        <div
          style={{
            ...fadeUp(f, 348),
            fontSize: 32,
            color: BRAND.warmBrown,
            fontWeight: 500,
          }}
        >
          Termine unter dermamedicum.com
        </div>
      </div>

      {/* Bottom gold accent */}
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
