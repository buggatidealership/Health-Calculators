import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
import { BRAND, FONTS, SAFE, SPEC } from "./derma-brand";

// B1_AviClear_B — "Hautquerschnitt" (Skin Cross-Section)
// Animated skin layers with laser beam targeting sebaceous gland.
// 360 frames (12s at 30fps), 1080×1920

const CLAMP = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };
const easeOut = Easing.out(Easing.cubic);

export const B1_AviClear_B: React.FC = () => {
  const frame = useCurrentFrame();

  // --- Helpers ---
  const fadeUp = (start: number, dur = 14) => ({
    opacity: interpolate(frame, [start, start + dur], [0, 1], CLAMP),
    transform: `translateY(${interpolate(frame, [start, start + dur], [28, 0], {
      ...CLAMP,
      easing: easeOut,
    })}px)`,
  });

  const vis = (s: number, e: number, fi = 8, fo = 10) => {
    if (frame < s) return 0;
    if (frame > e + fo) return 0;
    return Math.min(
      interpolate(frame, [s, s + fi], [0, 1], CLAMP),
      interpolate(frame, [e, e + fo], [1, 0], CLAMP),
    );
  };

  // --- SCENE TIMING ---
  // Scene 1: Hook text on cream bg (0–75)
  // Scene 2: Skin cross-section builds (60–230)
  // Scene 3: Laser fires, gland targeted (170–280)
  // Scene 4: Stat + CTA (260–360)

  // === SCENE 1: Hook ===
  const hookOpacity = vis(0, 70);

  // === SCENE 2: Skin layers build ===
  const skinOpacity = interpolate(frame, [60, 80], [0, 1], CLAMP);

  // Layer positions (Y values for each skin layer)
  const SKIN_TOP = 520;
  const EPIDERMIS_H = 100;
  const DERMIS_H = 280;
  const SUBCUTIS_H = 200;

  // Layer slide-in
  const epidermisSlide = interpolate(frame, [65, 90], [60, 0], { ...CLAMP, easing: easeOut });
  const dermisSlide = interpolate(frame, [80, 105], [60, 0], { ...CLAMP, easing: easeOut });
  const subcutisSlide = interpolate(frame, [95, 120], [60, 0], { ...CLAMP, easing: easeOut });

  const epidermisOp = interpolate(frame, [65, 85], [0, 1], CLAMP);
  const dermisOp = interpolate(frame, [80, 100], [0, 1], CLAMP);
  const subcutisOp = interpolate(frame, [95, 115], [0, 1], CLAMP);

  // Sebaceous gland appears in dermis
  const glandScale = interpolate(frame, [110, 135], [0, 1], { ...CLAMP, easing: easeOut });
  const glandOp = interpolate(frame, [110, 130], [0, 1], CLAMP);

  // Labels appear
  const labelDelay = [90, 105, 120, 140];

  // === SCENE 3: Laser beam ===
  const laserStart = 175;
  const laserBeamProgress = interpolate(frame, [laserStart, laserStart + 20], [0, 1], {
    ...CLAMP,
    easing: Easing.out(Easing.quad),
  });
  const laserActive = frame >= laserStart && frame <= 260;

  // Laser glow pulse on gland
  const laserHitFrame = laserStart + 20;
  const glandPulse = frame >= laserHitFrame && frame <= 260
    ? 1 + Math.sin((frame - laserHitFrame) * 0.15) * 0.08
    : 1;
  const glandGlow = frame >= laserHitFrame && frame <= 260
    ? interpolate(frame, [laserHitFrame, laserHitFrame + 10], [0, 1], CLAMP)
    : 0;

  // 1726nm wavelength label
  const waveLabelOp = vis(laserStart + 8, 250);

  // Gland shrink effect (treatment working)
  const glandShrink = frame >= 220
    ? interpolate(frame, [220, 260], [1, 0.5], { ...CLAMP, easing: easeOut })
    : 1;

  // === SCENE 4: Stat + CTA ===
  const scene4Opacity = vis(265, 360);
  const statScale = interpolate(frame, [270, 290], [0.85, 1], { ...CLAMP, easing: easeOut });

  return (
    <div
      style={{
        width: SPEC.width,
        height: SPEC.height,
        backgroundColor: BRAND.cream,
        fontFamily: FONTS.body,
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* SCENE 1: Hook */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          opacity: hookOpacity,
          padding: `0 ${SAFE.left + 50}px`,
        }}
      >
        <div
          style={{
            ...fadeUp(5),
            fontFamily: FONTS.body,
            fontSize: 34,
            color: BRAND.warmBrown,
            textAlign: "center",
            lineHeight: 1.5,
            marginBottom: 16,
          }}
        >
          Cremes behandeln die Oberfläche.
        </div>
        <div
          style={{
            ...fadeUp(20),
            fontFamily: FONTS.heading,
            fontSize: 56,
            color: BRAND.navy,
            textAlign: "center",
            lineHeight: 1.25,
          }}
        >
          AviClear die Ursache.
        </div>
        <div
          style={{
            ...fadeUp(38),
            width: 80,
            height: 3,
            backgroundColor: BRAND.teal,
            borderRadius: 2,
            marginTop: 28,
          }}
        />
      </div>

      {/* SCENE 2–3: Skin Cross-Section */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: skinOpacity,
        }}
      >
        {/* Section title */}
        <div
          style={{
            ...fadeUp(65),
            position: "absolute",
            top: SAFE.top + 40,
            left: 0,
            right: 0,
            textAlign: "center",
            fontFamily: FONTS.heading,
            fontSize: 40,
            color: BRAND.navy,
          }}
        >
          Hautquerschnitt
        </div>

        {/* Skin layers SVG */}
        <svg
          width={SPEC.width}
          height={SPEC.height}
          viewBox={`0 0 ${SPEC.width} ${SPEC.height}`}
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          {/* Epidermis */}
          <g
            opacity={epidermisOp}
            transform={`translate(0, ${epidermisSlide})`}
          >
            <rect
              x={140}
              y={SKIN_TOP}
              width={800}
              height={EPIDERMIS_H}
              rx={8}
              fill={`${BRAND.warmBrown}30`}
              stroke={BRAND.warmBrown}
              strokeWidth={2}
            />
            {/* Surface texture lines */}
            {Array.from({ length: 6 }).map((_, i) => (
              <line
                key={`epi-${i}`}
                x1={180 + i * 120}
                y1={SKIN_TOP + 15}
                x2={220 + i * 120}
                y2={SKIN_TOP + 15}
                stroke={BRAND.warmBrown}
                strokeWidth={1.5}
                opacity={0.4}
              />
            ))}
          </g>

          {/* Dermis */}
          <g
            opacity={dermisOp}
            transform={`translate(0, ${dermisSlide})`}
          >
            <rect
              x={140}
              y={SKIN_TOP + EPIDERMIS_H}
              width={800}
              height={DERMIS_H}
              fill={`${BRAND.warmBrown}18`}
              stroke={BRAND.warmBrown}
              strokeWidth={1.5}
              strokeDasharray="6 4"
            />
            {/* Collagen fiber hints */}
            {Array.from({ length: 4 }).map((_, i) => (
              <path
                key={`coll-${i}`}
                d={`M ${200 + i * 170} ${SKIN_TOP + EPIDERMIS_H + 60} Q ${260 + i * 170} ${SKIN_TOP + EPIDERMIS_H + 120} ${200 + i * 170} ${SKIN_TOP + EPIDERMIS_H + 180}`}
                fill="none"
                stroke={BRAND.warmBrown}
                strokeWidth={1}
                opacity={0.25}
              />
            ))}
          </g>

          {/* Subcutis */}
          <g
            opacity={subcutisOp}
            transform={`translate(0, ${subcutisSlide})`}
          >
            <rect
              x={140}
              y={SKIN_TOP + EPIDERMIS_H + DERMIS_H}
              width={800}
              height={SUBCUTIS_H}
              rx={0}
              fill={`${BRAND.cream}`}
              stroke={BRAND.warmBrown}
              strokeWidth={1}
              strokeDasharray="4 6"
              opacity={0.5}
            />
          </g>

          {/* Sebaceous Gland — oval in dermis layer */}
          <g
            opacity={glandOp}
            transform={`translate(540, ${SKIN_TOP + EPIDERMIS_H + 100}) scale(${glandScale * glandShrink * glandPulse})`}
          >
            <ellipse
              cx={0}
              cy={0}
              rx={55}
              ry={40}
              fill={`${BRAND.warmBrown}50`}
              stroke={BRAND.warmBrown}
              strokeWidth={2}
            />
            {/* Inner detail */}
            <ellipse
              cx={0}
              cy={0}
              rx={30}
              ry={22}
              fill={`${BRAND.warmBrown}35`}
            />
            {/* Glow when laser hits */}
            {glandGlow > 0 && (
              <ellipse
                cx={0}
                cy={0}
                rx={70}
                ry={55}
                fill="none"
                stroke={BRAND.teal}
                strokeWidth={3}
                opacity={glandGlow * 0.6}
              />
            )}
          </g>

          {/* Duct from gland to surface */}
          <line
            x1={540}
            y1={SKIN_TOP + EPIDERMIS_H + 60}
            x2={540}
            y2={SKIN_TOP + 20}
            stroke={BRAND.warmBrown}
            strokeWidth={2}
            opacity={glandOp * 0.4}
            strokeDasharray="4 3"
          />

          {/* LASER BEAM */}
          {laserActive && (
            <g>
              {/* Beam path — from top to gland */}
              <line
                x1={540}
                y1={SKIN_TOP - 80}
                x2={540}
                y2={SKIN_TOP - 80 + laserBeamProgress * (EPIDERMIS_H + 180)}
                stroke={BRAND.teal}
                strokeWidth={6}
                opacity={0.9}
              />
              {/* Beam glow */}
              <line
                x1={540}
                y1={SKIN_TOP - 80}
                x2={540}
                y2={SKIN_TOP - 80 + laserBeamProgress * (EPIDERMIS_H + 180)}
                stroke={BRAND.teal}
                strokeWidth={18}
                opacity={0.15}
              />
              {/* Beam source indicator */}
              <circle
                cx={540}
                cy={SKIN_TOP - 90}
                r={12}
                fill={BRAND.teal}
                opacity={0.7}
              />
            </g>
          )}

          {/* Layer labels on the right side */}
          <text
            x={960}
            y={SKIN_TOP + EPIDERMIS_H / 2 + 6}
            fontFamily={FONTS.body}
            fontSize={22}
            fill={BRAND.warmBrown}
            textAnchor="start"
            opacity={interpolate(frame, [labelDelay[0], labelDelay[0] + 12], [0, 0.8], CLAMP)}
          >
            Epidermis
          </text>
          <text
            x={960}
            y={SKIN_TOP + EPIDERMIS_H + DERMIS_H / 2 + 6}
            fontFamily={FONTS.body}
            fontSize={22}
            fill={BRAND.warmBrown}
            textAnchor="start"
            opacity={interpolate(frame, [labelDelay[1], labelDelay[1] + 12], [0, 0.8], CLAMP)}
          >
            Dermis
          </text>
          <text
            x={960}
            y={SKIN_TOP + EPIDERMIS_H + DERMIS_H + SUBCUTIS_H / 2 + 6}
            fontFamily={FONTS.body}
            fontSize={22}
            fill={BRAND.warmBrown}
            textAnchor="start"
            opacity={interpolate(frame, [labelDelay[2], labelDelay[2] + 12], [0, 0.6], CLAMP)}
          >
            Subcutis
          </text>
          <text
            x={380}
            y={SKIN_TOP + EPIDERMIS_H + 160}
            fontFamily={FONTS.body}
            fontSize={20}
            fill={BRAND.warmBrown}
            textAnchor="end"
            fontWeight={600}
            opacity={interpolate(frame, [labelDelay[3], labelDelay[3] + 12], [0, 0.9], CLAMP)}
          >
            Talgdrüse
          </text>

          {/* 1726nm wavelength label */}
          <text
            x={600}
            y={SKIN_TOP - 50}
            fontFamily={FONTS.mono}
            fontSize={24}
            fill={BRAND.teal}
            fontWeight={600}
            opacity={waveLabelOp}
          >
            1726 nm
          </text>
        </svg>

        {/* Explanatory text below cross-section */}
        {frame >= 200 && frame <= 270 && (
          <div
            style={{
              ...fadeUp(200),
              position: "absolute",
              top: SKIN_TOP + EPIDERMIS_H + DERMIS_H + SUBCUTIS_H + 60,
              left: SAFE.left + 40,
              right: SAFE.right + 40,
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: 28,
                color: BRAND.warmBrown,
                lineHeight: 1.5,
              }}
            >
              Der Laser zielt direkt auf die Talgdrüse —{"\n"}
              die Ursache übermäßiger Talgproduktion.
            </div>
          </div>
        )}
      </div>

      {/* SCENE 4: Stat + CTA */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          opacity: scene4Opacity,
          backgroundColor: BRAND.cream,
        }}
      >
        <div
          style={{
            transform: `scale(${statScale})`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0 80px",
          }}
        >
          {/* Big stat */}
          <div
            style={{
              ...fadeUp(272),
              fontFamily: FONTS.heading,
              fontSize: 120,
              color: BRAND.navy,
              fontWeight: 700,
              lineHeight: 1,
            }}
          >
            97%
          </div>
          <div
            style={{
              ...fadeUp(282),
              fontFamily: FONTS.heading,
              fontSize: 38,
              color: BRAND.navy,
              textAlign: "center",
              marginTop: 12,
              lineHeight: 1.3,
            }}
          >
            Verbesserung
          </div>

          {/* Divider */}
          <div
            style={{
              ...fadeUp(292),
              width: 100,
              height: 2,
              backgroundColor: BRAND.teal,
              marginTop: 36,
              marginBottom: 36,
            }}
          />

          {/* Sub-text */}
          <div
            style={{
              ...fadeUp(300),
              fontSize: 32,
              color: BRAND.warmBrown,
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            ohne Medikamente
          </div>

          {/* Logo */}
          <Img
            src={staticFile("derma-logo-dark.png")}
            style={{
              ...fadeUp(315),
              width: 260,
              height: "auto",
              marginTop: 60,
            }}
          />
        </div>
      </div>
    </div>
  );
};
