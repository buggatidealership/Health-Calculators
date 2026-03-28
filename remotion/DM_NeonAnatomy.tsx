import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
import { BRAND, FONTS, LOGO, SAFE, SPEC } from "./derma-brand";

// DERMAMEDICUM NEON ANATOMY: PRP (Platelet-Rich Plasma)
// Dark background. Skin cross-section drawn with glowing neon outlines.
// Platelets as luminous particles. Growth factor bursts.
// FREEFORM mode — logo only, no brand colors.

const CYAN = "#00E5FF";
const GOLD = "#FFD700";
const BLACK = "#000000";

// Helper: draw progress for line-drawing effect
const drawProgress = (frame: number, start: number, end: number) =>
  interpolate(frame, [start, end], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });

// Neon glow text style
const glowText = (color: string, size: number, weight = 400): React.CSSProperties => ({
  fontSize: size,
  color,
  fontFamily: FONTS.body,
  fontWeight: weight,
  textShadow: `0 0 20px ${color}80, 0 0 40px ${color}40, 0 0 80px ${color}20`,
  textAlign: "center",
  lineHeight: 1.4,
});

// SVG skin cross-section layers
const SkinCrossSection: React.FC<{ frame: number }> = ({ frame }) => {
  const progress = drawProgress(frame, 5, 80);
  const vesselProgress = drawProgress(frame, 40, 80);

  // Glow filter intensity
  const glowIntensity = interpolate(frame, [5, 60], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <svg
      width={900}
      height={800}
      viewBox="0 0 900 800"
      style={{
        position: "absolute",
        left: (SPEC.width - 900) / 2,
        top: 480,
        opacity: interpolate(frame, [0, 10], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        }),
      }}
    >
      <defs>
        <filter id="neonCyan" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation={4 * glowIntensity} result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="neonGold" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation={3 * glowIntensity} result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Epidermis — top wavy line */}
      <path
        d="M 0 120 Q 120 90, 225 120 Q 340 150, 450 120 Q 560 90, 675 120 Q 790 150, 900 120"
        fill="none"
        stroke={CYAN}
        strokeWidth={2.5}
        filter="url(#neonCyan)"
        strokeDasharray={1200}
        strokeDashoffset={1200 * (1 - progress)}
        opacity={0.9}
      />

      {/* Epidermis label */}
      {progress > 0.3 && (
        <text
          x={780}
          y={105}
          fill={CYAN}
          fontSize={22}
          fontFamily={FONTS.body}
          opacity={interpolate(frame, [25, 40], [0, 0.7], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })}
          filter="url(#neonCyan)"
        >
          Epidermis
        </text>
      )}

      {/* Dermis boundary — second wavy line */}
      <path
        d="M 0 320 Q 150 290, 300 320 Q 450 350, 600 320 Q 750 290, 900 320"
        fill="none"
        stroke={CYAN}
        strokeWidth={2}
        filter="url(#neonCyan)"
        strokeDasharray={1200}
        strokeDashoffset={1200 * (1 - progress * 0.85)}
        opacity={0.7}
      />

      {/* Dermis label */}
      {progress > 0.5 && (
        <text
          x={780}
          y={305}
          fill={CYAN}
          fontSize={22}
          fontFamily={FONTS.body}
          opacity={interpolate(frame, [35, 50], [0, 0.7], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })}
          filter="url(#neonCyan)"
        >
          Dermis
        </text>
      )}

      {/* Subcutis boundary */}
      <path
        d="M 0 540 Q 225 510, 450 540 Q 675 570, 900 540"
        fill="none"
        stroke={CYAN}
        strokeWidth={1.5}
        filter="url(#neonCyan)"
        strokeDasharray={1200}
        strokeDashoffset={1200 * (1 - progress * 0.7)}
        opacity={0.5}
      />

      {/* Collagen fibers — diagonal lines in dermis */}
      {[
        { x1: 120, y1: 160, x2: 220, y2: 280 },
        { x1: 300, y1: 150, x2: 380, y2: 300 },
        { x1: 500, y1: 170, x2: 580, y2: 290 },
        { x1: 650, y1: 140, x2: 740, y2: 310 },
      ].map((f, i) => (
        <line
          key={`fiber-${i}`}
          x1={f.x1}
          y1={f.y1}
          x2={f.x2}
          y2={f.y2}
          stroke={CYAN}
          strokeWidth={1}
          opacity={0.25 * progress}
          filter="url(#neonCyan)"
          strokeDasharray={200}
          strokeDashoffset={200 * (1 - progress * 0.6)}
        />
      ))}

      {/* Blood vessel — main curved path */}
      <path
        d="M 100 400 Q 200 350, 300 400 Q 400 450, 500 380 Q 600 310, 700 380 Q 780 430, 850 400"
        fill="none"
        stroke={GOLD}
        strokeWidth={3}
        filter="url(#neonGold)"
        strokeDasharray={1000}
        strokeDashoffset={1000 * (1 - vesselProgress)}
        opacity={0.9}
      />

      {/* Vessel branches */}
      <path
        d="M 350 410 Q 380 460, 370 510"
        fill="none"
        stroke={GOLD}
        strokeWidth={2}
        filter="url(#neonGold)"
        strokeDasharray={200}
        strokeDashoffset={200 * (1 - vesselProgress * 0.7)}
        opacity={0.6}
      />
      <path
        d="M 620 355 Q 640 300, 630 240"
        fill="none"
        stroke={GOLD}
        strokeWidth={2}
        filter="url(#neonGold)"
        strokeDasharray={200}
        strokeDashoffset={200 * (1 - vesselProgress * 0.7)}
        opacity={0.6}
      />

      {/* Capillary network near surface */}
      <path
        d="M 250 200 Q 280 170, 320 200 Q 360 230, 400 200"
        fill="none"
        stroke={GOLD}
        strokeWidth={1.2}
        filter="url(#neonGold)"
        strokeDasharray={300}
        strokeDashoffset={300 * (1 - vesselProgress * 0.5)}
        opacity={0.4}
      />
    </svg>
  );
};

// Particle system for platelets
const Platelets: React.FC<{ frame: number }> = ({ frame }) => {
  if (frame < 90) return null;

  const particleOpacity = interpolate(frame, [90, 110], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Generate particles along the blood vessel path
  const particles: Array<{
    id: number;
    startFrame: number;
    pathOffset: number;
    size: number;
    exitFrame: number;
    exitAngle: number;
  }> = [];

  for (let i = 0; i < 18; i++) {
    particles.push({
      id: i,
      startFrame: 90 + i * 6,
      pathOffset: i * 0.055,
      size: 6 + (i % 3) * 3,
      exitFrame: 150 + i * 4,
      exitAngle: -40 + (i % 5) * 20,
    });
  }

  return (
    <svg
      width={900}
      height={800}
      viewBox="0 0 900 800"
      style={{
        position: "absolute",
        left: (SPEC.width - 900) / 2,
        top: 480,
        opacity: particleOpacity,
        pointerEvents: "none",
      }}
    >
      <defs>
        <filter id="particleGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="plateletGrad">
          <stop offset="0%" stopColor={GOLD} stopOpacity="1" />
          <stop offset="60%" stopColor={GOLD} stopOpacity="0.6" />
          <stop offset="100%" stopColor={GOLD} stopOpacity="0" />
        </radialGradient>
      </defs>

      {particles.map((p) => {
        if (frame < p.startFrame) return null;

        // Particle travels along a simplified vessel path
        const t = interpolate(
          frame,
          [p.startFrame, p.startFrame + 60],
          [p.pathOffset, p.pathOffset + 0.8],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
        );

        // Parametric vessel path approximation
        const px = 100 + t * 750;
        const py =
          400 +
          Math.sin(t * Math.PI * 2.5) * 40 -
          (t > 0.4 ? (t - 0.4) * 30 : 0);

        // Some particles exit the vessel and drift into dermis
        const shouldExit = p.id % 3 === 0 && frame > p.exitFrame;
        const exitProgress = shouldExit
          ? interpolate(frame, [p.exitFrame, p.exitFrame + 40], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            })
          : 0;

        const finalX = px + exitProgress * Math.cos((p.exitAngle * Math.PI) / 180) * 80;
        const finalY = py + exitProgress * (Math.sin((p.exitAngle * Math.PI) / 180) * 60 - 80);

        const fadeOut =
          frame > 300
            ? interpolate(frame, [300, 330], [1, 0], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              })
            : 1;

        return (
          <circle
            key={p.id}
            cx={finalX}
            cy={finalY}
            r={p.size * (1 + exitProgress * 0.5)}
            fill="url(#plateletGrad)"
            filter="url(#particleGlow)"
            opacity={0.85 * fadeOut}
          />
        );
      })}
    </svg>
  );
};

// Growth factor bursts
const GrowthBursts: React.FC<{ frame: number }> = ({ frame }) => {
  if (frame < 210) return null;

  const burstPoints = [
    { x: 380, y: 720, startFrame: 215 },
    { x: 520, y: 690, startFrame: 230 },
    { x: 650, y: 740, startFrame: 245 },
    { x: 300, y: 750, startFrame: 255 },
    { x: 560, y: 710, startFrame: 265 },
  ];

  return (
    <svg
      width={900}
      height={800}
      viewBox="0 0 900 800"
      style={{
        position: "absolute",
        left: (SPEC.width - 900) / 2,
        top: 480,
        pointerEvents: "none",
      }}
    >
      <defs>
        <filter id="burstGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {burstPoints.map((bp, i) => {
        if (frame < bp.startFrame) return null;

        const burstProgress = interpolate(
          frame,
          [bp.startFrame, bp.startFrame + 25],
          [0, 1],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) }
        );
        const burstRadius = burstProgress * 45;
        const burstOpacity = interpolate(
          frame,
          [bp.startFrame, bp.startFrame + 10, bp.startFrame + 25],
          [0, 0.8, 0.3],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
        );

        // Radial lines
        const rays = 8;
        return (
          <g key={`burst-${i}`} opacity={burstOpacity} filter="url(#burstGlow)">
            <circle cx={bp.x} cy={bp.y} r={burstRadius * 0.3} fill={GOLD} opacity={0.6} />
            <circle
              cx={bp.x}
              cy={bp.y}
              r={burstRadius}
              fill="none"
              stroke={GOLD}
              strokeWidth={1.5}
              opacity={0.4}
            />
            {Array.from({ length: rays }).map((_, ri) => {
              const angle = (ri / rays) * Math.PI * 2;
              const len = burstRadius * 0.8;
              return (
                <line
                  key={`ray-${ri}`}
                  x1={bp.x + Math.cos(angle) * 4}
                  y1={bp.y + Math.sin(angle) * 4}
                  x2={bp.x + Math.cos(angle) * len}
                  y2={bp.y + Math.sin(angle) * len}
                  stroke={GOLD}
                  strokeWidth={1.2}
                  opacity={0.5}
                />
              );
            })}
          </g>
        );
      })}

      {/* Skin brightening effect — glow in dermis area where bursts land */}
      {frame > 240 && (
        <rect
          x={200}
          y={140}
          width={500}
          height={180}
          rx={40}
          fill={CYAN}
          opacity={interpolate(frame, [240, 310], [0, 0.08], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })}
          filter="url(#burstGlow)"
        />
      )}
    </svg>
  );
};

export const DM_NeonAnatomy: React.FC = () => {
  const frame = useCurrentFrame();

  // Text animations
  const text1Opacity = interpolate(frame, [110, 125], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const text1Y = interpolate(frame, [110, 125], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const text1Out = interpolate(frame, [200, 210], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const text2Opacity = interpolate(frame, [220, 235], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const text2Y = interpolate(frame, [220, 235], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const text2Out = interpolate(frame, [320, 330], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Vessel highlight (Scene 2)
  const vesselHighlight = interpolate(frame, [95, 115], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Final fade
  const finalFade = interpolate(frame, [330, 350], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const contentFade = interpolate(frame, [330, 345], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Logo glow pulse
  const logoPulse =
    frame > 355
      ? 0.7 + Math.sin((frame - 355) * 0.08) * 0.3
      : interpolate(frame, [345, 360], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });

  return (
    <div
      style={{
        width: SPEC.width,
        height: SPEC.height,
        background: BLACK,
        overflow: "hidden",
        position: "relative",
        fontFamily: FONTS.body,
      }}
    >
      {/* Subtle ambient glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at 50% 55%, ${CYAN}08 0%, transparent 60%)`,
          pointerEvents: "none",
          opacity: contentFade,
        }}
      />

      {/* Skin cross-section */}
      <div style={{ opacity: contentFade }}>
        <SkinCrossSection frame={frame} />
      </div>

      {/* Vessel highlight overlay */}
      {frame >= 90 && (
        <div
          style={{
            position: "absolute",
            left: (SPEC.width - 900) / 2 + 80,
            top: 480 + 350,
            width: 740,
            height: 120,
            background: `radial-gradient(ellipse, ${GOLD}15 0%, transparent 70%)`,
            opacity: vesselHighlight * contentFade,
            pointerEvents: "none",
          }}
        />
      )}

      {/* Platelets */}
      <div style={{ opacity: contentFade }}>
        <Platelets frame={frame} />
      </div>

      {/* Growth factor bursts */}
      <div style={{ opacity: contentFade }}>
        <GrowthBursts frame={frame} />
      </div>

      {/* Scene 2 text: "Thrombozytenreiches Plasma" */}
      {frame >= 110 && frame < 215 && (
        <div
          style={{
            position: "absolute",
            top: SAFE.top + 40,
            left: SAFE.left,
            right: SAFE.right,
            display: "flex",
            justifyContent: "center",
            opacity: text1Opacity * text1Out,
            transform: `translateY(${text1Y}px)`,
          }}
        >
          <div style={glowText(GOLD, 52, 600)}>Thrombozytenreiches Plasma</div>
        </div>
      )}

      {/* Scene 3 text: "Wachstumsfaktoren aktivieren Zellregeneration" */}
      {frame >= 220 && frame < 335 && (
        <div
          style={{
            position: "absolute",
            top: SAFE.top + 40,
            left: SAFE.left + 20,
            right: SAFE.right + 20,
            display: "flex",
            justifyContent: "center",
            opacity: text2Opacity * text2Out,
            transform: `translateY(${text2Y}px)`,
          }}
        >
          <div style={glowText(CYAN, 46, 600)}>
            Wachstumsfaktoren aktivieren Zellregeneration
          </div>
        </div>
      )}

      {/* Scene 4: Logo end card */}
      {frame >= 330 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: BLACK,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: finalFade,
            zIndex: 20,
          }}
        >
          <div
            style={{
              opacity: logoPulse,
              filter: `drop-shadow(0 0 30px rgba(255,255,255,0.15)) drop-shadow(0 0 60px rgba(255,255,255,0.08))`,
            }}
          >
            <Img
              src={staticFile(LOGO.light)}
              style={{ width: 380, objectFit: "contain" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
