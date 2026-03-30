import React from "react";
import { useCurrentFrame, interpolate, Easing, spring } from "remotion";

// BAKERY SOURDOUGH — OUTPUT B: "First Light"
// After internal dialogue: questioning whether withholding works for food.
// Hypothesis: direct warmth from frame 1. No waiting. Pure immediacy.
// You're already IN the oven. Light expands outward. Bread is felt, not revealed.
// Minimal text. Motion-driven desire. Warm monochrome.
// 540 frames @ 30fps = 18s

const clamp = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };

const DEEP_UMBER = "#1A0E08";
const WARM_WHITE = "#F8F0E3";
const HONEY = "#D4943C";
const DARK_HONEY = "#8B6020";
const FLOUR_MIST = "#EDE1CF";
const OVEN_GLOW = "#C47A28";
const ASH = "#3D3028";

export const Bakery_D: React.FC = () => {
  const frame = useCurrentFrame();
  const fps = 30;

  const fadeIn = (s: number, d = 15) => ({
    opacity: interpolate(frame, [s, s + d], [0, 1], { ...clamp, easing: Easing.out(Easing.cubic) }),
  });

  const slideUp = (s: number, d = 18) => ({
    ...fadeIn(s, d),
    transform: `translateY(${interpolate(frame, [s, s + d], [30, 0], { ...clamp, easing: Easing.out(Easing.cubic) })}px)`,
  });

  const vis = (s: number, e: number) => {
    if (frame < s) return { opacity: 0, pointerEvents: "none" as const };
    const fadeOut = e < 540 ? interpolate(frame, [e, e + 12], [1, 0], clamp) : 1;
    return {
      opacity: Math.min(
        interpolate(frame, [s, s + 10], [0, 1], clamp),
        fadeOut
      ),
    };
  };

  // ═══ CORE METAPHOR: Light expanding from center ═══
  // The oven door opens. Light floods outward. You feel the warmth before anything else.

  // Main light circle — starts visible, expands
  const lightRadius = interpolate(frame, [0, 120, 300, 540], [150, 400, 500, 420], {
    ...clamp,
    easing: Easing.inOut(Easing.cubic),
  });

  const lightIntensity = interpolate(frame, [0, 30, 200, 540], [0.15, 0.3, 0.2, 0.12], clamp);

  // Secondary glow rings — concentric, expanding outward
  const rings = Array.from({ length: 4 }, (_, i) => {
    const ringDelay = i * 25;
    const ringRadius = interpolate(
      frame,
      [ringDelay, ringDelay + 100, ringDelay + 200],
      [80 + i * 30, 250 + i * 80, 400 + i * 60],
      { ...clamp, easing: Easing.out(Easing.cubic) }
    );
    const ringOpacity = interpolate(
      frame,
      [ringDelay, ringDelay + 30, ringDelay + 150, ringDelay + 200],
      [0, 0.25 - i * 0.03, 0.15, 0.06],
      clamp
    );
    return { radius: ringRadius, opacity: ringOpacity };
  });

  // ═══ FLOUR PARTICLES — caught in the light ═══
  const particles = Array.from({ length: 25 }, (_, i) => {
    const px = ((i * 157.3 + 200) % 900) + 90;
    const startY = 1920 + (i * 83) % 300;
    const speed = 0.4 + (i % 4) * 0.2;
    const py = startY - frame * speed;
    const drift = Math.sin((frame + i * 37) * 0.015) * 25;
    const size = 2 + (i % 5) * 1.5;
    // Particles glow brighter as they pass through the light center
    const distFromCenter = Math.sqrt((px + drift - 540) ** 2 + (py % 1920 - 800) ** 2);
    const particleBrightness = interpolate(distFromCenter, [0, 300, 600], [0.5, 0.2, 0.08], clamp);
    return { x: px + drift, y: ((py % 2200) + 2200) % 2200 - 200, size, opacity: particleBrightness };
  });

  // ═══ LOAF SILHOUETTE — emerges from light (Scene 2) ═══
  const loafScale = interpolate(frame, [100, 180], [0.7, 1], {
    ...clamp,
    easing: Easing.out(Easing.cubic),
  });
  const loafOpacity = interpolate(frame, [100, 150], [0, 1], clamp);

  // Scoring lines on the loaf — appear as cuts
  const scoreLines = Array.from({ length: 5 }, (_, i) => {
    const scoreDelay = 155 + i * 8;
    const scoreLength = interpolate(frame, [scoreDelay, scoreDelay + 18], [0, 140 + (i % 2) * 40], {
      ...clamp,
      easing: Easing.out(Easing.cubic),
    });
    const angle = -25 + i * 12;
    const y = -60 + i * 30;
    return { length: scoreLength, angle, y, delay: scoreDelay };
  });

  // ═══ STEAM — continuous from Scene 2 onward ═══
  const steamWisps = Array.from({ length: 6 }, (_, i) => {
    const steamStart = 130 + i * 15;
    const steamX = 480 + (i % 3) * 60;
    const riseY = interpolate(frame, [steamStart, steamStart + 120], [0, -350 - i * 30], clamp);
    const steamOp = interpolate(
      frame,
      [steamStart, steamStart + 20, steamStart + 80, steamStart + 120],
      [0, 0.12, 0.06, 0],
      clamp
    );
    const wobble = Math.sin((frame + i * 40) * 0.03) * (20 + i * 5);
    return { x: steamX + wobble, y: 680 + riseY, opacity: steamOp };
  });

  // ═══ TEXT — minimal, placed in the warmth ═══
  // Scene 1 (0–100): "7am." + expanding light — immediate hook
  // Scene 2 (100–210): Loaf emerges + "The oven opens."
  // Scene 3 (210–330): "Crust so thick you hear it break." — sensory line
  // Scene 4 (330–430): "This one's yours." — direct address
  // Scene 5 (430–540): CTA

  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        background: DEEP_UMBER,
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Georgia', 'Times New Roman', serif",
      }}
    >
      {/* Warm horizontal band — visible from frame 1 */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: interpolate(frame, [0, 60], [750, 700], clamp),
          height: interpolate(frame, [0, 120], [80, 200], clamp),
          background: `linear-gradient(180deg, transparent, rgba(196,122,40,${interpolate(frame, [0, 40], [0.06, 0.12], clamp)}), transparent)`,
          filter: "blur(20px)",
        }}
      />

      {/* ═══ LIGHT SOURCE — the oven ═══ */}
      <div
        style={{
          position: "absolute",
          left: 540,
          top: 800,
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* Core glow */}
        <div
          style={{
            width: lightRadius * 2,
            height: lightRadius * 2,
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(196,122,40,${lightIntensity}) 0%, rgba(212,148,60,${lightIntensity * 0.5}) 40%, transparent 70%)`,
            transform: `translate(-${lightRadius}px, -${lightRadius}px)`,
          }}
        />

        {/* Concentric rings */}
        {rings.map((r, i) => (
          <div
            key={`ring-${i}`}
            style={{
              position: "absolute",
              left: -r.radius,
              top: -r.radius,
              width: r.radius * 2,
              height: r.radius * 2,
              borderRadius: "50%",
              border: `1px solid rgba(212,148,60,${r.opacity})`,
              background: "transparent",
            }}
          />
        ))}
      </div>

      {/* Flour particles in the light */}
      {particles.map((p, i) => (
        <div
          key={`p-${i}`}
          style={{
            position: "absolute",
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: FLOUR_MIST,
            opacity: p.opacity,
          }}
        />
      ))}

      {/* ═══ LOAF SILHOUETTE — abstract dome shape ═══ */}
      <div
        style={{
          position: "absolute",
          left: 540,
          top: 750,
          transform: `translate(-50%, -50%) scale(${loafScale})`,
          opacity: loafOpacity,
        }}
      >
        {/* Dome shape — using stacked rounded rects */}
        <div
          style={{
            width: 260,
            height: 150,
            borderRadius: "130px 130px 30px 30px",
            border: `2.5px solid ${HONEY}`,
            background: `linear-gradient(180deg, rgba(212,148,60,0.04) 0%, rgba(139,96,32,0.02) 100%)`,
            position: "relative",
          }}
        >
          {/* Scoring lines */}
          {scoreLines.map((s, i) => (
            <div
              key={`score-${i}`}
              style={{
                position: "absolute",
                left: "50%",
                top: 20 + s.y,
                width: s.length,
                height: 1.5,
                background: `linear-gradient(90deg, transparent, ${HONEY}88, transparent)`,
                transform: `translateX(-50%) rotate(${s.angle}deg)`,
                transformOrigin: "center",
                opacity: interpolate(frame, [s.delay, s.delay + 10], [0, 0.6], clamp),
              }}
            />
          ))}
        </div>

        {/* Base line */}
        <div
          style={{
            width: 280,
            height: 1.5,
            background: `linear-gradient(90deg, transparent, ${DARK_HONEY}66, transparent)`,
            marginTop: 2,
            marginLeft: -10,
            opacity: loafOpacity,
          }}
        />
      </div>

      {/* Steam wisps */}
      {steamWisps.map((s, i) => (
        <div
          key={`steam-${i}`}
          style={{
            position: "absolute",
            left: s.x,
            top: s.y,
            width: 50,
            height: 100,
            borderRadius: "50%",
            background: `radial-gradient(ellipse, rgba(248,240,227,${s.opacity}), transparent)`,
            filter: "blur(3px)",
          }}
        />
      ))}

      {/* ═══ SCENE 1 (0–100): "7am." — immediate hook with expanding light ═══ */}
      <div
        style={{
          position: "absolute",
          left: 80,
          right: 80,
          top: 380,
          textAlign: "center",
          ...vis(0, 95),
        }}
      >
        <div
          style={{
            fontSize: 140,
            fontWeight: 400,
            color: WARM_WHITE,
            letterSpacing: -2,
            ...slideUp(5),
          }}
        >
          7am.
        </div>
        <div
          style={{
            ...fadeIn(40, 20),
            fontSize: 30,
            color: HONEY,
            fontStyle: "italic",
            marginTop: 20,
            letterSpacing: 1,
          }}
        >
          The oven opens.
        </div>
      </div>

      {/* ═══ SCENE 3 (210–330): The sensory line ═══ */}
      <div
        style={{
          position: "absolute",
          left: 70,
          right: 70,
          top: 420,
          textAlign: "center",
          ...vis(210, 325),
        }}
      >
        <div
          style={{
            ...slideUp(218),
            fontSize: 54,
            color: WARM_WHITE,
            fontWeight: 400,
            lineHeight: 1.5,
          }}
        >
          Crust so thick
        </div>
        <div
          style={{
            ...slideUp(250),
            fontSize: 54,
            color: HONEY,
            fontStyle: "italic",
            fontWeight: 400,
            lineHeight: 1.5,
            marginTop: 8,
          }}
        >
          you hear it break.
        </div>
      </div>

      {/* ═══ SCENE 4 (330–430): "This one's yours." ═══ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          ...vis(330, 425),
        }}
      >
        <div
          style={{
            ...slideUp(340),
            fontSize: 70,
            color: WARM_WHITE,
            fontWeight: 400,
            fontStyle: "italic",
            textAlign: "center",
          }}
        >
          This one's yours.
        </div>
      </div>

      {/* ═══ SCENE 5 (430–540): CTA ═══ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          ...vis(430, 540),
        }}
      >
        <div
          style={{
            ...fadeIn(435, 15),
            fontSize: 36,
            color: HONEY,
            fontWeight: 300,
            letterSpacing: 4,
            fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
          }}
        >
          FRESH. DAILY.
        </div>

        <div
          style={{
            ...fadeIn(452, 12),
            width: 100,
            height: 1.5,
            background: `linear-gradient(90deg, transparent, ${OVEN_GLOW}88, transparent)`,
            margin: "28px 0",
          }}
        />

        <div
          style={{
            ...slideUp(458),
            fontSize: 50,
            color: WARM_WHITE,
            fontWeight: 400,
            textAlign: "center",
            letterSpacing: 2,
          }}
        >
          Your Bakery
        </div>

        <div
          style={{
            ...fadeIn(485, 20),
            marginTop: 35,
            padding: "14px 36px",
            border: `1.5px solid ${HONEY}66`,
            borderRadius: 0,
            fontSize: 22,
            color: HONEY,
            fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
            fontWeight: 400,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          Pre-order by midnight
        </div>

        <div
          style={{
            ...fadeIn(510, 20),
            position: "absolute",
            bottom: 420,
            fontSize: 18,
            color: ASH,
            fontWeight: 300,
            letterSpacing: 3,
            fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
            opacity: fadeIn(510, 20).opacity * 0.5,
          }}
        >
          SOURDOUGH &middot; WOOD-FIRED
        </div>
      </div>

      {/* Vignette — heavier than A/B, oven-mouth feel */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 42%, transparent 30%, rgba(26,14,8,0.7) 100%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};
