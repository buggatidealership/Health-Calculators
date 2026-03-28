import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
import { BRAND, FONTS, LOGO, SAFE, SPEC } from "./derma-brand";

// DERMAMEDICUM PARTICLE: Melasma + PicoWay Laser
// Brown particles cluster as melasma → laser flash scatters them → fade to clear skin
// Educational. Warm. Satisfying particle physics.

// Deterministic pseudo-random from seed
const seeded = (seed: number) => {
  const x = Math.sin(seed * 9301 + 4927) * 49297;
  return x - Math.floor(x);
};

interface Particle {
  id: number;
  homeX: number;
  homeY: number;
  startX: number;
  startY: number;
  size: number;
  clusterIndex: number; // which melasma cluster it belongs to
}

// Melasma cluster centers on the cheek area
const CLUSTERS = [
  { x: 480, y: 820, radius: 100 },
  { x: 380, y: 900, radius: 70 },
  { x: 560, y: 920, radius: 80 },
  { x: 440, y: 980, radius: 60 },
  { x: 520, y: 840, radius: 55 },
];

const FLASH_CENTER = { x: 540, y: 900 };
const NUM_PARTICLES = 200;

// Pre-compute particles
const particles: Particle[] = Array.from({ length: NUM_PARTICLES }, (_, i) => {
  const ci = Math.floor(seeded(i * 3 + 1) * CLUSTERS.length);
  const cluster = CLUSTERS[ci];
  const angle = seeded(i * 7 + 2) * Math.PI * 2;
  const dist = seeded(i * 11 + 3) * cluster.radius;
  return {
    id: i,
    homeX: cluster.x + Math.cos(angle) * dist,
    homeY: cluster.y + Math.sin(angle) * dist,
    startX: 100 + seeded(i * 13 + 5) * 880,
    startY: 400 + seeded(i * 17 + 7) * 900,
    size: 4 + seeded(i * 19 + 9) * 8,
    clusterIndex: ci,
  };
});

// Face contour points (simplified jawline + cheek)
const faceContour = "M 340 650 Q 300 750 290 870 Q 290 1020 340 1100 Q 420 1200 540 1220 Q 660 1200 740 1100 Q 790 1020 790 870 Q 780 750 740 650";

export const DM_Particle: React.FC = () => {
  const frame = useCurrentFrame();

  // Colors
  const BG_WARM = "#FAF5EF";
  const PARTICLE_COLOR = "#8B6914";
  const TEXT_COLOR = "#2A2A2A";

  // Background transitions
  const bgOpacity = interpolate(frame, [210, 280], [0, 0.3], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const bgToBlack = interpolate(frame, [325, 335], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Flash
  const flashOpacity = interpolate(frame, [120, 125, 130, 140], [0, 0.9, 0.9, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Text helpers
  const fadeIn = (s: number, d = 12) => ({
    opacity: interpolate(frame, [s, s + d], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }),
    transform: `translateY(${interpolate(frame, [s, s + d], [20, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.cubic),
    })}px)`,
  });

  // Scene visibility
  const scene1 = frame < 120;
  const scene2 = frame >= 120 && frame < 210;
  const scene3 = frame >= 210 && frame < 330;
  const scene4 = frame >= 330;

  // Compute particle positions
  const getParticleState = (p: Particle) => {
    let x: number, y: number, opacity: number;

    if (frame < 120) {
      // Scene 1: drift from scattered start positions toward cluster homes
      const progress = interpolate(frame, [0, 110], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: Easing.inOut(Easing.cubic),
      });
      x = p.startX + (p.homeX - p.startX) * progress;
      y = p.startY + (p.homeY - p.startY) * progress;
      // Add subtle drift
      x += Math.sin(frame * 0.03 + p.id * 0.5) * 3 * (1 - progress);
      y += Math.cos(frame * 0.025 + p.id * 0.7) * 3 * (1 - progress);
      opacity = interpolate(frame, [0, 20], [0, 0.85], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
    } else if (frame < 210) {
      // Scene 2: explode outward from flash center
      const t = frame - 120;
      const angle = Math.atan2(p.homeY - FLASH_CENTER.y, p.homeX - FLASH_CENTER.x);
      const speed = 8 + seeded(p.id * 23 + 11) * 12;
      // Deceleration
      const decel = Math.max(0, 1 - t * 0.012);
      const dist = speed * t * decel;
      x = p.homeX + Math.cos(angle + seeded(p.id * 29) * 0.8 - 0.4) * dist;
      y = p.homeY + Math.sin(angle + seeded(p.id * 31) * 0.8 - 0.4) * dist;
      opacity = interpolate(t, [0, 10], [0.85, 0.7], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
    } else if (frame < 330) {
      // Scene 3: particles fade out from their scattered positions
      const t120 = 90; // end of scene 2 duration
      const angle = Math.atan2(p.homeY - FLASH_CENTER.y, p.homeX - FLASH_CENTER.x);
      const speed = 8 + seeded(p.id * 23 + 11) * 12;
      const decel = Math.max(0, 1 - t120 * 0.012);
      const dist = speed * t120 * decel;
      x = p.homeX + Math.cos(angle + seeded(p.id * 29) * 0.8 - 0.4) * dist;
      y = p.homeY + Math.sin(angle + seeded(p.id * 31) * 0.8 - 0.4) * dist;
      // Slow continued drift
      const t3 = frame - 210;
      x += seeded(p.id * 37) * t3 * 0.3;
      y += seeded(p.id * 41) * t3 * 0.2 - t3 * 0.1;
      opacity = interpolate(frame, [210, 310], [0.7, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
    } else {
      x = -100;
      y = -100;
      opacity = 0;
    }

    return { x, y, opacity };
  };

  // Face outline opacity
  const faceOpacity = interpolate(frame, [10, 30], [0, 0.25], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const faceCleanOpacity = scene3
    ? interpolate(frame, [220, 250], [0.25, 0.4], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    : faceOpacity;

  // Text visibility
  const text1Opacity = interpolate(frame, [15, 30, 110, 120], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const text2Opacity = interpolate(frame, [128, 142, 200, 210], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const text3Opacity = interpolate(frame, [225, 240, 315, 325], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Logo
  const logoOpacity = interpolate(frame, [345, 370], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        width: SPEC.width,
        height: SPEC.height,
        position: "relative",
        overflow: "hidden",
        fontFamily: FONTS.body,
      }}
    >
      {/* Background layers */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: BG_WARM,
          opacity: 1 - bgToBlack,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(180deg, ${BG_WARM} 0%, #FFFFFF 100%)`,
          opacity: bgOpacity * (1 - bgToBlack),
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "#000000",
          opacity: bgToBlack,
        }}
      />

      {/* Flash */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "#FFFFFF",
          opacity: flashOpacity,
          zIndex: 50,
          pointerEvents: "none",
        }}
      />

      {/* Face contour */}
      {!scene4 && (
        <svg
          width={SPEC.width}
          height={SPEC.height}
          style={{ position: "absolute", inset: 0, zIndex: 1 }}
        >
          <path
            d={faceContour}
            fill="none"
            stroke={TEXT_COLOR}
            strokeWidth={1.5}
            opacity={scene3 ? faceCleanOpacity : faceOpacity}
          />
        </svg>
      )}

      {/* Particles */}
      {!scene4 && (
        <svg
          width={SPEC.width}
          height={SPEC.height}
          style={{ position: "absolute", inset: 0, zIndex: 2 }}
        >
          {particles.map((p) => {
            const state = getParticleState(p);
            if (state.opacity <= 0) return null;
            return (
              <circle
                key={p.id}
                cx={state.x}
                cy={state.y}
                r={p.size}
                fill={PARTICLE_COLOR}
                opacity={state.opacity}
              />
            );
          })}
        </svg>
      )}

      {/* Scene 1 text */}
      <div
        style={{
          position: "absolute",
          top: SAFE.top + 20,
          left: SAFE.left,
          right: SAFE.right,
          zIndex: 10,
          opacity: text1Opacity,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: TEXT_COLOR,
            fontFamily: FONTS.heading,
          }}
        >
          Melasma
        </div>
      </div>

      {/* Scene 2 text */}
      <div
        style={{
          position: "absolute",
          top: SAFE.top + 20,
          left: SAFE.left,
          right: SAFE.right,
          zIndex: 10,
          opacity: text2Opacity,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: TEXT_COLOR,
            fontFamily: FONTS.heading,
            lineHeight: 1.3,
          }}
        >
          PicoWay
        </div>
        <div
          style={{
            fontSize: 36,
            color: TEXT_COLOR,
            fontFamily: FONTS.body,
            marginTop: 12,
            opacity: 0.7,
          }}
        >
          Pikosekunden-Laser
        </div>
      </div>

      {/* Scene 3 text */}
      <div
        style={{
          position: "absolute",
          top: SAFE.top + 10,
          left: SAFE.left + 20,
          right: SAFE.right + 20,
          zIndex: 10,
          opacity: text3Opacity,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 40,
            color: TEXT_COLOR,
            fontFamily: FONTS.body,
            lineHeight: 1.5,
            fontWeight: 400,
          }}
        >
          Pigment wird in Mikro-Partikel zerlegt — der K{"\u00F6"}rper baut sie
          ab
        </div>
      </div>

      {/* Scene 4: Logo on black */}
      {scene4 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
            opacity: logoOpacity,
          }}
        >
          <Img
            src={staticFile(LOGO.light)}
            style={{ width: 400, objectFit: "contain" }}
          />
        </div>
      )}
    </div>
  );
};
