import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
import { BRAND, FONTS, SAFE, SPEC } from "./derma-brand";

// B1_AviClear_A — "Regionale Exklusivität" (Regional Map)
// Animated map: Bonn, Köln, Düsseldorf. Bonn glows as the only AviClear location.
// 360 frames (12s at 30fps), 1080×1920

const CLAMP = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };

const easeOut = Easing.out(Easing.cubic);

export const B1_AviClear_A: React.FC = () => {
  const frame = useCurrentFrame();

  // --- Helpers ---
  const fadeUp = (start: number, dur = 14) => ({
    opacity: interpolate(frame, [start, start + dur], [0, 1], CLAMP),
    transform: `translateY(${interpolate(frame, [start, start + dur], [30, 0], {
      ...CLAMP,
      easing: easeOut,
    })}px)`,
  });

  const vis = (s: number, e: number, fadeIn = 8, fadeOut = 10) => {
    if (frame < s) return 0;
    if (frame > e + fadeOut) return 0;
    return Math.min(
      interpolate(frame, [s, s + fadeIn], [0, 1], CLAMP),
      interpolate(frame, [e, e + fadeOut], [1, 0], CLAMP),
    );
  };

  // --- SCENE TIMING ---
  // Scene 1: Hook text (0–70)
  // Scene 2: Map with cities appearing (50–240)
  // Scene 3: Bonn glows, exclusivity text (180–290)
  // Scene 4: CTA card (270–360)

  // === SCENE 1: Hook ===
  const hookOpacity = vis(0, 65);

  // === SCENE 2: Map ===
  const mapOpacity = interpolate(frame, [50, 70], [0, 1], CLAMP);

  // Cities: approximate Rhine corridor positions (relative to map center)
  const cities: { name: string; x: number; y: number; start: number; isBonn: boolean }[] = [
    { name: "Düsseldorf", x: 490, y: 540, start: 80, isBonn: false },
    { name: "Köln", x: 440, y: 720, start: 100, isBonn: false },
    { name: "Bonn", x: 470, y: 880, start: 120, isBonn: true },
  ];

  // Rhine river path animation
  const riverDraw = interpolate(frame, [55, 130], [0, 1], {
    ...CLAMP,
    easing: easeOut,
  });

  // Bonn glow pulse (starts after all pins placed)
  const bonnGlowPhase = frame >= 150 ? Math.sin((frame - 150) * 0.08) * 0.5 + 0.5 : 0;
  const bonnGlowSize = frame >= 150
    ? interpolate(frame, [150, 180], [0, 1], { ...CLAMP, easing: easeOut })
    : 0;

  // Dim other cities when Bonn highlighted
  const otherDim = interpolate(frame, [180, 210], [1, 0.35], { ...CLAMP, easing: easeOut });

  // === SCENE 3: Exclusivity text ===
  const exclOpacity = vis(195, 280);

  // === SCENE 4: CTA ===
  const ctaOpacity = vis(275, 360);
  const ctaSlide = interpolate(frame, [275, 295], [40, 0], { ...CLAMP, easing: easeOut });

  // --- Decorative elements ---
  // Subtle gold border lines
  const borderDraw = interpolate(frame, [5, 40], [0, 1], { ...CLAMP, easing: easeOut });

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
      {/* Decorative corner accents */}
      <div
        style={{
          position: "absolute",
          top: 60,
          left: 60,
          width: 80,
          height: 80,
          borderTop: `2px solid ${BRAND.goldBorder}`,
          borderLeft: `2px solid ${BRAND.goldBorder}`,
          opacity: borderDraw,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 60,
          right: 60,
          width: 80,
          height: 80,
          borderBottom: `2px solid ${BRAND.goldBorder}`,
          borderRight: `2px solid ${BRAND.goldBorder}`,
          opacity: borderDraw,
        }}
      />

      {/* SCENE 1: Hook text */}
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
          padding: `0 ${SAFE.left + 40}px`,
        }}
      >
        <div
          style={{
            ...fadeUp(5),
            fontFamily: FONTS.heading,
            fontSize: 62,
            color: BRAND.navy,
            textAlign: "center",
            lineHeight: 1.25,
            letterSpacing: "-0.02em",
          }}
        >
          Der einzige
        </div>
        <div
          style={{
            ...fadeUp(15),
            fontFamily: FONTS.heading,
            fontSize: 68,
            color: BRAND.navy,
            textAlign: "center",
            lineHeight: 1.25,
            letterSpacing: "-0.02em",
            marginTop: 8,
          }}
        >
          AviClear-Laser
        </div>
        <div
          style={{
            ...fadeUp(25),
            fontFamily: FONTS.heading,
            fontSize: 62,
            color: BRAND.navy,
            textAlign: "center",
            lineHeight: 1.25,
            marginTop: 8,
          }}
        >
          in der Region
        </div>
        <div
          style={{
            ...fadeUp(40),
            width: 80,
            height: 3,
            backgroundColor: BRAND.warmBrown,
            borderRadius: 2,
            marginTop: 32,
          }}
        />
      </div>

      {/* SCENE 2–3: Map Area */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: mapOpacity,
        }}
      >
        {/* Map background — subtle grid */}
        <svg
          width={SPEC.width}
          height={SPEC.height}
          viewBox={`0 0 ${SPEC.width} ${SPEC.height}`}
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          {/* Subtle grid lines */}
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={`h-${i}`}
              x1={100}
              y1={400 + i * 90}
              x2={980}
              y2={400 + i * 90}
              stroke={BRAND.goldBorder}
              strokeWidth={0.5}
              opacity={0.2}
            />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <line
              key={`v-${i}`}
              x1={200 + i * 100}
              y1={400}
              x2={200 + i * 100}
              y2={1400}
              stroke={BRAND.goldBorder}
              strokeWidth={0.5}
              opacity={0.2}
            />
          ))}

          {/* Rhine River — curved path */}
          <path
            d="M 560 380 C 540 500, 510 580, 490 640 C 470 700, 450 750, 440 800 C 430 850, 450 900, 470 960 C 490 1020, 480 1080, 460 1150"
            fill="none"
            stroke={BRAND.teal}
            strokeWidth={4}
            opacity={0.4}
            strokeDasharray={1200}
            strokeDashoffset={1200 * (1 - riverDraw)}
            strokeLinecap="round"
          />

          {/* Region label */}
          <text
            x={540}
            y={440}
            fontFamily={FONTS.body}
            fontSize={24}
            fill={BRAND.warmBrown}
            opacity={interpolate(frame, [65, 80], [0, 0.5], CLAMP)}
            textAnchor="middle"
          >
            Rheinland
          </text>
        </svg>

        {/* City Pins */}
        {cities.map((city) => {
          const pinProgress = interpolate(frame, [city.start, city.start + 16], [0, 1], {
            ...CLAMP,
            easing: easeOut,
          });
          const pinScale = interpolate(frame, [city.start, city.start + 10, city.start + 16], [0, 1.15, 1], {
            ...CLAMP,
            easing: easeOut,
          });

          const dimFactor = city.isBonn ? 1 : otherDim;
          const glowRadius = city.isBonn ? 20 + bonnGlowPhase * 30 : 0;
          const glowOpacity = city.isBonn ? bonnGlowSize * (0.3 + bonnGlowPhase * 0.25) : 0;

          return (
            <div
              key={city.name}
              style={{
                position: "absolute",
                left: city.x,
                top: city.y,
                transform: `translate(-50%, -50%) scale(${pinScale})`,
                opacity: pinProgress * dimFactor,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Glow ring for Bonn */}
              {city.isBonn && (
                <div
                  style={{
                    position: "absolute",
                    width: 40 + glowRadius * 2,
                    height: 40 + glowRadius * 2,
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${BRAND.teal}${Math.round(glowOpacity * 255).toString(16).padStart(2, "0")} 0%, transparent 70%)`,
                    top: -(glowRadius),
                    left: -(glowRadius),
                  }}
                />
              )}

              {/* Pin dot */}
              <div
                style={{
                  width: city.isBonn ? 40 : 24,
                  height: city.isBonn ? 40 : 24,
                  borderRadius: "50%",
                  backgroundColor: city.isBonn ? BRAND.teal : BRAND.warmBrown,
                  border: city.isBonn ? `3px solid ${BRAND.navy}` : `2px solid ${BRAND.warmBrown}`,
                  boxShadow: city.isBonn
                    ? `0 0 ${12 + bonnGlowPhase * 16}px ${BRAND.teal}88`
                    : "none",
                }}
              />

              {/* City label */}
              <div
                style={{
                  marginTop: 12,
                  fontFamily: city.isBonn ? FONTS.heading : FONTS.body,
                  fontSize: city.isBonn ? 36 : 28,
                  color: city.isBonn ? BRAND.navy : BRAND.warmBrown,
                  fontWeight: city.isBonn ? 700 : 400,
                  whiteSpace: "nowrap",
                  textAlign: "center",
                }}
              >
                {city.name}
              </div>

              {/* Bonn sub-label */}
              {city.isBonn && frame >= 140 && (
                <div
                  style={{
                    ...fadeUp(140, 12),
                    marginTop: 6,
                    fontSize: 22,
                    color: BRAND.teal,
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                  }}
                >
                  AviClear Standort
                </div>
              )}
            </div>
          );
        })}

        {/* Exclusivity callout text */}
        <div
          style={{
            position: "absolute",
            bottom: SAFE.bottom + 200,
            left: SAFE.left + 20,
            right: SAFE.right + 20,
            textAlign: "center",
            opacity: exclOpacity,
          }}
        >
          <div
            style={{
              ...fadeUp(200),
              fontFamily: FONTS.heading,
              fontSize: 44,
              color: BRAND.navy,
              lineHeight: 1.3,
            }}
          >
            Bonn · Köln · Düsseldorf
          </div>
          <div
            style={{
              ...fadeUp(215),
              fontSize: 34,
              color: BRAND.warmBrown,
              marginTop: 16,
              lineHeight: 1.4,
            }}
          >
            Nur eine Praxis hat ihn.
          </div>
        </div>
      </div>

      {/* SCENE 4: CTA Card */}
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
          opacity: ctaOpacity,
        }}
      >
        <div
          style={{
            transform: `translateY(${ctaSlide}px)`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0 80px",
          }}
        >
          {/* Logo */}
          <Img
            src={staticFile("derma-logo-dark.png")}
            style={{
              width: 320,
              height: "auto",
              marginBottom: 48,
            }}
          />

          {/* Divider */}
          <div
            style={{
              width: 100,
              height: 2,
              backgroundColor: BRAND.goldBorder,
              marginBottom: 40,
            }}
          />

          {/* CTA text */}
          <div
            style={{
              fontFamily: FONTS.heading,
              fontSize: 48,
              color: BRAND.navy,
              textAlign: "center",
              lineHeight: 1.3,
              marginBottom: 20,
            }}
          >
            Termin vereinbaren
          </div>
          <div
            style={{
              fontSize: 28,
              color: BRAND.warmBrown,
              textAlign: "center",
            }}
          >
            dermamedicum.com
          </div>
        </div>
      </div>
    </div>
  );
};
