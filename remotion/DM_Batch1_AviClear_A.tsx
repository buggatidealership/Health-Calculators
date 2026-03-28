import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
import { BRAND, FONTS, LOGO, SAFE, SPEC } from "./derma-brand";

// DM_Batch1_AviClear_A — "Regional Map"
// Geographic exclusivity hook: DermaMedicum is the ONLY AviClear practice
// in the Bonn/Köln/Düsseldorf region. Minimalist map with glowing pin.
// 300 frames (10s at 30fps), 1080x1920

export const DM_Batch1_AviClear_A: React.FC = () => {
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

  // --- Map cities (approximate relative positions within a ~600x500 area) ---
  // Düsseldorf = north, Köln = middle, Bonn = south
  const mapCenterX = SPEC.width / 2;
  const mapCenterY = 920;
  const cities = [
    { name: "Düsseldorf", x: mapCenterX + 60, y: mapCenterY - 180, delay: 15 },
    { name: "Köln", x: mapCenterX - 30, y: mapCenterY - 30, delay: 25 },
    { name: "Bonn", x: mapCenterX - 10, y: mapCenterY + 140, delay: 35, isTarget: true },
  ];

  // Bonn pin glow pulse
  const pinPulse =
    frame >= 40 && frame <= 88
      ? 1 + Math.sin((frame - 40) * 0.18) * 0.4
      : 1;
  const pinGlowRadius =
    frame >= 40
      ? interpolate(frame, [40, 55], [0, 30], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })
      : 0;

  // --- Scene 2: AviClear specs ---
  const specs = [
    { text: "1726nm Wellenlänge", delay: 110 },
    { text: "FDA-zugelassen", delay: 125 },
    { text: "3 Sitzungen \u00B7 je 30 Min.", delay: 140 },
  ];

  // --- Scene 3: CTA ---
  const scene3Opacity = vis(205, 300);

  // Connection lines between cities (subtle)
  const lineProgress = interpolate(frame, [20, 50], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
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
      {/* ═══ SCENE 1: Regional Map Hook (0-90) ═══ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: vis(0, 88),
        }}
      >
        {/* Hook text */}
        <div
          style={{
            ...fadeIn(3),
            position: "absolute",
            top: SAFE.top + 60,
            left: SAFE.left + 20,
            right: SAFE.right + 20,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 52,
              fontWeight: 700,
              color: BRAND.cream,
              fontFamily: FONTS.heading,
              lineHeight: 1.25,
            }}
          >
            Die einzige Praxis
          </div>
          <div
            style={{
              fontSize: 52,
              fontWeight: 700,
              color: BRAND.teal,
              fontFamily: FONTS.heading,
              lineHeight: 1.25,
              marginTop: 8,
            }}
          >
            in der Region.
          </div>
        </div>

        {/* Subtle region outline — abstract rounded shape */}
        <div
          style={{
            position: "absolute",
            left: mapCenterX - 200,
            top: mapCenterY - 250,
            width: 400,
            height: 480,
            border: `1px solid ${BRAND.teal}22`,
            borderRadius: "50% 45% 55% 48%",
            opacity: interpolate(frame, [10, 30], [0, 0.4], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        />

        {/* Connection lines */}
        {lineProgress > 0 && (
          <svg
            style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
            width={SPEC.width}
            height={SPEC.height}
          >
            <line
              x1={cities[0].x}
              y1={cities[0].y}
              x2={cities[0].x + (cities[1].x - cities[0].x) * lineProgress}
              y2={cities[0].y + (cities[1].y - cities[0].y) * lineProgress}
              stroke={`${BRAND.teal}44`}
              strokeWidth={1.5}
              strokeDasharray="6 4"
            />
            {lineProgress > 0.4 && (
              <line
                x1={cities[1].x}
                y1={cities[1].y}
                x2={
                  cities[1].x +
                  (cities[2].x - cities[1].x) *
                    Math.min(1, (lineProgress - 0.4) / 0.6)
                }
                y2={
                  cities[1].y +
                  (cities[2].y - cities[1].y) *
                    Math.min(1, (lineProgress - 0.4) / 0.6)
                }
                stroke={`${BRAND.teal}44`}
                strokeWidth={1.5}
                strokeDasharray="6 4"
              />
            )}
          </svg>
        )}

        {/* City dots + labels */}
        {cities.map((city, i) => {
          const dotOpacity = interpolate(
            frame,
            [city.delay, city.delay + 10],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          );
          const dotScale = city.isTarget
            ? interpolate(frame, [city.delay, city.delay + 14], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.back(1.4)),
              })
            : interpolate(frame, [city.delay, city.delay + 10], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              });

          return (
            <React.Fragment key={i}>
              {/* Glow ring for Bonn */}
              {city.isTarget && frame >= 40 && (
                <div
                  style={{
                    position: "absolute",
                    left: city.x - 24,
                    top: city.y - 24,
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    border: `2px solid ${BRAND.teal}`,
                    opacity: 0.3 * pinPulse,
                    transform: `scale(${pinPulse})`,
                    boxShadow: `0 0 ${pinGlowRadius}px ${pinGlowRadius / 2}px ${BRAND.teal}66`,
                    pointerEvents: "none",
                  }}
                />
              )}
              {/* Dot */}
              <div
                style={{
                  position: "absolute",
                  left: city.x - (city.isTarget ? 8 : 5),
                  top: city.y - (city.isTarget ? 8 : 5),
                  width: city.isTarget ? 16 : 10,
                  height: city.isTarget ? 16 : 10,
                  borderRadius: "50%",
                  background: city.isTarget ? BRAND.teal : BRAND.midGray,
                  opacity: dotOpacity,
                  transform: `scale(${dotScale})`,
                  boxShadow: city.isTarget
                    ? `0 0 12px 4px ${BRAND.teal}88`
                    : "none",
                }}
              />
              {/* Label */}
              <div
                style={{
                  position: "absolute",
                  left: city.x + (city.isTarget ? 24 : 16),
                  top: city.y - (city.isTarget ? 14 : 10),
                  fontSize: city.isTarget ? 30 : 24,
                  fontWeight: city.isTarget ? 700 : 400,
                  color: city.isTarget ? BRAND.cream : BRAND.midGray,
                  opacity: dotOpacity,
                  whiteSpace: "nowrap",
                }}
              >
                {city.name}
              </div>
            </React.Fragment>
          );
        })}

        {/* Bottom qualifier */}
        <div
          style={{
            ...fadeIn(55, 18),
            position: "absolute",
            bottom: SAFE.bottom + 60,
            left: SAFE.left + 20,
            right: SAFE.right + 20,
            textAlign: "center",
            fontSize: 26,
            color: BRAND.midGray,
            letterSpacing: 2,
          }}
        >
          {"BONN · KÖLN · DÜSSELDORF"}
        </div>
      </div>

      {/* ═══ SCENE 2: AviClear + Specs (90-200) ═══ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: vis(90, 198),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: `${SAFE.top}px ${SAFE.right + 20}px ${SAFE.bottom}px ${SAFE.left + 20}px`,
        }}
      >
        {/* AviClear name */}
        <div
          style={{
            ...fadeIn(95, 16),
            fontSize: 88,
            fontWeight: 700,
            color: BRAND.cream,
            fontFamily: FONTS.heading,
            letterSpacing: 2,
            textAlign: "center",
          }}
        >
          AviClear
        </div>

        {/* Accent line */}
        <div
          style={{
            width: interpolate(frame, [100, 118], [0, 200], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
            height: 2,
            background: `linear-gradient(90deg, transparent, ${BRAND.teal}, transparent)`,
            marginTop: 24,
            marginBottom: 48,
          }}
        />

        {/* Specs */}
        {specs.map((spec, i) => (
          <div
            key={i}
            style={{
              ...fadeIn(spec.delay, 14),
              fontSize: 34,
              color: i === 0 ? BRAND.teal : BRAND.lightGray,
              fontWeight: i === 0 ? 600 : 400,
              marginBottom: 20,
              textAlign: "center",
              fontFamily: i === 0 ? FONTS.mono : FONTS.body,
            }}
          >
            {spec.text}
          </div>
        ))}

        {/* Sub text */}
        <div
          style={{
            ...fadeIn(160, 16),
            fontSize: 28,
            color: BRAND.midGray,
            marginTop: 40,
            textAlign: "center",
            fontStyle: "italic",
            lineHeight: 1.5,
          }}
        >
          {"Zielt direkt auf die Talgdrüsen."}{"\n"}
          Keine Medikamente.
        </div>
      </div>

      {/* ═══ SCENE 3: CTA End Card (200-300) ═══ */}
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
          gap: 40,
        }}
      >
        <Img
          src={staticFile(LOGO.light)}
          style={{
            ...fadeIn(212, 16),
            width: 400,
            objectFit: "contain",
          }}
        />

        <div
          style={{
            ...fadeIn(230, 14),
            fontSize: 36,
            fontWeight: 600,
            color: BRAND.cream,
            fontFamily: FONTS.heading,
            textAlign: "center",
          }}
        >
          Beratungstermin vereinbaren
        </div>

        <div
          style={{
            ...fadeIn(245, 12),
            fontSize: 24,
            color: BRAND.midGray,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          {"DermaMedicum · Bonn"}
        </div>
      </div>
    </div>
  );
};
