import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

// BAKERY SOURDOUGH — OUTPUT A
// Warm artisan aesthetic. Flour dust, earthy palette, process-to-product arc.
// Sensory desire copy. Serif + bold sans mix.
// 540 frames @ 30fps = 18s

const clamp = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };

const CREAM = "#FAF3E8";
const CRUST = "#8B6914";
const FLOUR = "#F5EBD9";
const DARK_BROWN = "#3D2B1F";
const WARM_GOLD = "#C8963E";
const SOFT_TAN = "#D4B896";
const CHARCOAL = "#2A2118";

export const Bakery_A: React.FC = () => {
  const frame = useCurrentFrame();

  const fadeIn = (s: number, d = 15) => ({
    opacity: interpolate(frame, [s, s + d], [0, 1], { ...clamp, easing: Easing.out(Easing.cubic) }),
  });

  const slideUp = (s: number, d = 18) => ({
    ...fadeIn(s, d),
    transform: `translateY(${interpolate(frame, [s, s + d], [40, 0], { ...clamp, easing: Easing.out(Easing.cubic) })}px)`,
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

  // ═══ FLOUR PARTICLES — ambient throughout ═══
  const particles = Array.from({ length: 30 }, (_, i) => {
    const x = ((i * 137.5) % 1080);
    const startY = -30 - (i * 47) % 200;
    const speed = 0.3 + (i % 5) * 0.15;
    const y = startY + frame * speed;
    const drift = Math.sin((frame + i * 40) * 0.02) * 20;
    const size = 3 + (i % 4) * 2;
    const opacity = 0.08 + (i % 3) * 0.04;
    return { x: x + drift, y: y % 2100 - 100, size, opacity };
  });

  // ═══ BACKGROUND — warm gradient that shifts ═══
  const bgShift = interpolate(frame, [0, 540], [0, 1], clamp);

  // ═══ CRUST TEXTURE — abstract circle that cracks ═══
  const crustScale = interpolate(frame, [210, 310], [0, 1], { ...clamp, easing: Easing.out(Easing.cubic) });
  const crustOpacity = interpolate(frame, [210, 260], [0, 1], clamp);
  const crackLines = Array.from({ length: 8 }, (_, i) => {
    const angle = (i / 8) * 360 + 22;
    const delay = 280 + i * 5;
    const length = interpolate(frame, [delay, delay + 20], [0, 80 + (i % 3) * 30], { ...clamp, easing: Easing.out(Easing.cubic) });
    return { angle, length, delay };
  });

  // Loaf cross-section — golden ring
  const ringScale = interpolate(frame, [250, 310], [0.3, 1], { ...clamp, easing: Easing.out(Easing.cubic) });

  // Crumb holes inside the loaf
  const crumbHoles = [
    { cx: 495, cy: 580, r: 18, delay: 290 },
    { cx: 560, cy: 620, r: 12, delay: 296 },
    { cx: 520, cy: 650, r: 22, delay: 302 },
    { cx: 580, cy: 570, r: 15, delay: 308 },
    { cx: 510, cy: 610, r: 10, delay: 314 },
    { cx: 555, cy: 660, r: 14, delay: 300 },
    { cx: 480, cy: 640, r: 16, delay: 306 },
    { cx: 570, cy: 640, r: 9, delay: 312 },
  ];

  return (
    <div style={{
      width: 1080, height: 1920,
      background: `linear-gradient(175deg, ${CREAM} 0%, ${FLOUR} 50%, #F0E4D0 100%)`,
      overflow: "hidden",
      position: "relative",
      fontFamily: "'Georgia', 'Times New Roman', serif",
    }}>

      {/* Warm radial as scene progresses */}
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(ellipse at 50% 45%, rgba(200,150,62,${bgShift * 0.06}) 0%, transparent 60%)`,
      }} />

      {/* Flour particles */}
      {particles.map((p, i) => (
        <div key={i} style={{
          position: "absolute",
          left: p.x, top: p.y,
          width: p.size, height: p.size,
          borderRadius: "50%",
          background: SOFT_TAN,
          opacity: p.opacity,
        }} />
      ))}

      {/* ═══ SCENE 1 (0–100): "48 hours." ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        ...vis(0, 95),
      }}>
        {/* Large time counter feel */}
        <div style={{
          ...slideUp(8),
          fontSize: 160,
          fontWeight: 400,
          color: DARK_BROWN,
          letterSpacing: -4,
          lineHeight: 1,
        }}>
          48
        </div>
        <div style={{
          ...slideUp(18),
          fontSize: 42,
          color: CRUST,
          letterSpacing: 12,
          textTransform: "uppercase",
          fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
          fontWeight: 500,
          marginTop: 10,
        }}>
          hours
        </div>
        <div style={{
          ...fadeIn(50, 20),
          width: 120, height: 1.5,
          background: WARM_GOLD,
          marginTop: 35,
          opacity: fadeIn(50, 20).opacity * 0.4,
        }} />
        <div style={{
          ...slideUp(55),
          fontSize: 34,
          color: SOFT_TAN,
          fontStyle: "italic",
          marginTop: 25,
          textAlign: "center",
          lineHeight: 1.6,
        }}>
          of slow fermentation
        </div>
      </div>

      {/* ═══ SCENE 2 (100–210): Process beats ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        justifyContent: "center",
        padding: "300px 80px 500px",
        ...vis(100, 205),
      }}>
        <div style={{
          ...slideUp(105),
          fontSize: 54,
          color: DARK_BROWN,
          fontWeight: 400,
          lineHeight: 1.5,
        }}>
          Hand-shaped.
        </div>
        <div style={{
          ...slideUp(135, 20),
          fontSize: 54,
          color: DARK_BROWN,
          fontWeight: 400,
          lineHeight: 1.5,
          marginTop: 15,
        }}>
          Slow-fermented.
        </div>
        <div style={{
          ...slideUp(165, 20),
          fontSize: 54,
          color: CRUST,
          fontWeight: 400,
          fontStyle: "italic",
          lineHeight: 1.5,
          marginTop: 15,
        }}>
          No shortcuts.
        </div>
      </div>

      {/* ═══ SCENE 3 (210–370): The loaf — abstract reveal ═══ */}
      <div style={{
        position: "absolute",
        left: 540, top: 620,
        transform: `translate(-50%, -50%) scale(${crustScale})`,
        opacity: crustOpacity,
      }}>
        {/* Outer crust ring */}
        <div style={{
          width: 280, height: 280,
          borderRadius: "50%",
          border: `12px solid ${CRUST}`,
          background: `radial-gradient(circle, ${FLOUR} 0%, #EDE0C8 60%, ${SOFT_TAN} 100%)`,
          transform: `scale(${ringScale})`,
          position: "relative",
        }}>
          {/* Crumb holes */}
          {crumbHoles.map((h, i) => (
            <div key={`hole-${i}`} style={{
              position: "absolute",
              left: h.cx - 540 + 140 - h.r,
              top: h.cy - 620 + 140 - h.r,
              width: h.r * 2,
              height: h.r * 2,
              borderRadius: "50%",
              border: `1.5px solid rgba(139,105,20,0.2)`,
              background: `rgba(139,105,20,0.04)`,
              opacity: interpolate(frame, [h.delay, h.delay + 12], [0, 1], clamp),
              transform: `scale(${interpolate(frame, [h.delay, h.delay + 15], [0.3, 1], { ...clamp, easing: Easing.out(Easing.cubic) })})`,
            }} />
          ))}
        </div>

        {/* Crack lines radiating */}
        {crackLines.map((c, i) => {
          const rad = (c.angle * Math.PI) / 180;
          return (
            <div key={`crack-${i}`} style={{
              position: "absolute",
              left: 140, top: 140,
              width: c.length, height: 2,
              background: `linear-gradient(90deg, ${CRUST}66, transparent)`,
              transformOrigin: "left center",
              transform: `rotate(${c.angle}deg)`,
              opacity: interpolate(frame, [c.delay, c.delay + 10], [0, 0.5], clamp),
            }} />
          );
        })}
      </div>

      {/* Scene 3 text overlay */}
      <div style={{
        position: "absolute",
        left: 80, right: 80,
        top: 300,
        textAlign: "center",
        ...vis(230, 365),
      }}>
        <div style={{
          ...slideUp(235),
          fontSize: 48,
          color: DARK_BROWN,
          fontStyle: "italic",
          lineHeight: 1.5,
        }}>
          That crack when you
        </div>
        <div style={{
          ...slideUp(260),
          fontSize: 56,
          color: CRUST,
          fontWeight: 700,
          fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
          letterSpacing: 2,
          marginTop: 8,
        }}>
          tear it open.
        </div>
      </div>

      {/* ═══ SCENE 4 (370–445): Sensory hit ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        ...vis(370, 440),
      }}>
        {/* Steam wisps */}
        {[0, 1, 2].map((i) => {
          const steamY = interpolate(frame, [375 + i * 8, 445], [0, -120 - i * 40], clamp);
          const steamOp = interpolate(frame, [375 + i * 8, 375 + i * 8 + 15, 430, 445], [0, 0.12, 0.12, 0], clamp);
          return (
            <div key={`steam-${i}`} style={{
              position: "absolute",
              left: 490 + i * 50,
              top: 700 + steamY,
              width: 40,
              height: 80,
              borderRadius: "50%",
              background: `radial-gradient(ellipse, rgba(200,150,62,${steamOp}), transparent)`,
              transform: `translateX(${Math.sin((frame + i * 20) * 0.04) * 15}px) scaleX(${1 + Math.sin((frame + i * 30) * 0.03) * 0.3})`,
            }} />
          );
        })}

        <div style={{
          ...slideUp(378),
          fontSize: 68,
          color: DARK_BROWN,
          fontWeight: 400,
          lineHeight: 1.4,
          textAlign: "center",
        }}>
          Warm.
        </div>
        <div style={{
          ...slideUp(400),
          fontSize: 68,
          color: DARK_BROWN,
          fontWeight: 400,
          lineHeight: 1.4,
          textAlign: "center",
        }}>
          Dense.
        </div>
        <div style={{
          ...slideUp(418),
          fontSize: 68,
          color: CRUST,
          fontStyle: "italic",
          fontWeight: 400,
          lineHeight: 1.4,
          textAlign: "center",
        }}>
          Alive.
        </div>
      </div>

      {/* ═══ SCENE 5 (445–540): CTA ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        ...vis(445, 540),
      }}>
        <div style={{
          ...slideUp(450),
          fontSize: 52,
          color: DARK_BROWN,
          fontStyle: "italic",
          textAlign: "center",
          lineHeight: 1.5,
        }}>
          Fresh every morning.
        </div>

        <div style={{
          ...fadeIn(465),
          width: 160, height: 1.5,
          background: WARM_GOLD,
          margin: "25px 0",
          opacity: fadeIn(465).opacity * 0.4,
        }} />

        <div style={{
          ...slideUp(475),
          fontSize: 28,
          color: CRUST,
          letterSpacing: 8,
          textTransform: "uppercase",
          fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
          fontWeight: 500,
        }}>
          Your Bakery
        </div>

        <div style={{
          ...fadeIn(500, 20),
          marginTop: 30,
          padding: "16px 40px",
          border: `1.5px solid ${SOFT_TAN}`,
          borderRadius: 30,
          fontSize: 26,
          color: SOFT_TAN,
          fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
          fontWeight: 400,
          letterSpacing: 3,
        }}>
          ORDER BEFORE 9AM
        </div>
      </div>

      {/* Soft vignette */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 50% 50%, transparent 55%, rgba(60,43,31,0.06) 100%)",
        pointerEvents: "none",
      }} />
    </div>
  );
};
