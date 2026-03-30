import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

// FLORIST SHOP — PETAL BY PETAL
// ASMR-style bouquet assembly. Organic shapes, botanical palette.
// Cream background → muted greens → blush bloom reveal → soft brand close.
// Sensory-first: no text until final scenes.

const clamp = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };

// Botanical palette
const CREAM = "#FAF6F0";
const SAGE = "#7A9E7E";
const SAGE_DARK = "#4A6B4E";
const BLUSH = "#E8A0B4";
const DUSTY_ROSE = "#C27489";
const PEACH = "#F0C4A8";
const WARM_WHITE = "#FFF8F0";
const STEM_GREEN = "#5B7F4A";
const LEAF_GREEN = "#6B8F5A";
const RIBBON_MAUVE = "#B8849A";

export const Florist_PetalByPetal: React.FC = () => {
  const frame = useCurrentFrame();

  // ═══ UTILITY ═══
  const fadeIn = (start: number, dur = 15) =>
    interpolate(frame, [start, start + dur], [0, 1], { ...clamp, easing: Easing.out(Easing.cubic) });

  const slideUp = (start: number, from: number, to: number, dur = 20) =>
    interpolate(frame, [start, start + dur], [from, to], { ...clamp, easing: Easing.out(Easing.cubic) });

  // Gentle ambient sway
  const sway = (offset: number, speed = 0.02, amp = 3) =>
    amp * Math.sin((frame + offset) * speed);

  // ═══ SCENE 1 (0-65): Single stem rises ═══
  const stemY = interpolate(frame, [5, 50], [1920, 500], { ...clamp, easing: Easing.out(Easing.cubic) });
  const stemOpacity = fadeIn(5, 20);

  // Leaf unfurl on the stem
  const leaf1Rotate = interpolate(frame, [30, 55], [90, 15], { ...clamp, easing: Easing.out(Easing.cubic) });
  const leaf2Rotate = interpolate(frame, [35, 60], [-90, -20], { ...clamp, easing: Easing.out(Easing.cubic) });
  const leafScale = interpolate(frame, [30, 55], [0.2, 1], { ...clamp, easing: Easing.out(Easing.cubic) });

  // ═══ SCENE 2 (60-140): Stems gather ═══
  const stems = [
    { x: -80, delay: 60, height: 700, curve: 8 },
    { x: 80, delay: 68, height: 650, curve: -10 },
    { x: -40, delay: 75, height: 750, curve: 5 },
    { x: 50, delay: 82, height: 680, curve: -6 },
    { x: -120, delay: 88, height: 620, curve: 12 },
    { x: 110, delay: 94, height: 640, curve: -8 },
  ];

  // Leaves fan out from gathering point
  const leaves = [
    { x: -100, y: 620, rot: -35, delay: 85, size: 80 },
    { x: 90, y: 680, rot: 40, delay: 92, size: 70 },
    { x: -60, y: 560, rot: -50, delay: 98, size: 90 },
    { x: 130, y: 600, rot: 30, delay: 104, size: 75 },
    { x: -140, y: 700, rot: -25, delay: 110, size: 65 },
  ];

  // ═══ SCENE 3 (135-220): Petal bloom ═══
  const petalCount = 12;
  const petals = Array.from({ length: petalCount }, (_, i) => {
    const angle = (i / petalCount) * 360 + (i % 2 === 0 ? 0 : 15);
    const delay = 140 + i * 4;
    const distance = 120 + (i % 3) * 40;
    const size = 60 + (i % 4) * 15;
    const colors = [BLUSH, DUSTY_ROSE, PEACH, WARM_WHITE];
    const color = colors[i % colors.length];
    return { angle, delay, distance, size, color };
  });

  // Inner petals — smaller, denser, slightly later
  const innerPetals = Array.from({ length: 8 }, (_, i) => {
    const angle = (i / 8) * 360 + 22;
    const delay = 165 + i * 3;
    return { angle, delay, distance: 50 + (i % 2) * 20, size: 40 + (i % 3) * 10, color: WARM_WHITE };
  });

  // ═══ SCENE 4 (215-270): Wrapping paper + ribbon ═══
  const wrapReveal = interpolate(frame, [218, 250], [0, 1], { ...clamp, easing: Easing.inOut(Easing.cubic) });

  // ═══ SCENE 5 (265-300): Brand text ═══
  const textOpacity = fadeIn(270, 18);
  const textY = slideUp(270, 30, 0, 18);

  // Global slow zoom
  const globalZoom = interpolate(frame, [0, 300], [1, 1.06], clamp);

  // Background warmth shift — cream to warm pink tint as bouquet blooms
  const bgWarmth = interpolate(frame, [130, 200], [0, 1], clamp);

  return (
    <div style={{
      width: 1080, height: 1920,
      background: CREAM,
      overflow: "hidden",
      position: "relative",
      fontFamily: "'Georgia', 'Times New Roman', serif",
    }}>

      {/* Background warmth layer */}
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(ellipse at 50% 35%, rgba(232,160,180,${bgWarmth * 0.08}) 0%, transparent 60%)`,
      }} />

      {/* Subtle texture overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(circle at 30% 20%, rgba(122,158,126,0.03) 0%, transparent 40%),
                     radial-gradient(circle at 70% 70%, rgba(240,196,168,0.04) 0%, transparent 40%)`,
      }} />

      {/* ═══ Content container — zooms slowly ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        transform: `scale(${globalZoom})`,
        transformOrigin: "50% 40%",
      }}>

        {/* ═══ SCENE 1: First stem ═══ */}
        <div style={{
          position: "absolute",
          left: 540, top: stemY,
          opacity: stemOpacity,
          transform: `translateX(-50%) rotate(${sway(0, 0.015, 1.5)}deg)`,
        }}>
          {/* Main stem */}
          <div style={{
            width: 6, height: 800,
            background: `linear-gradient(180deg, ${STEM_GREEN}, ${SAGE_DARK})`,
            borderRadius: 3,
            margin: "0 auto",
          }} />

          {/* Left leaf */}
          <div style={{
            position: "absolute",
            left: -2, top: 200,
            width: 60, height: 24,
            background: LEAF_GREEN,
            borderRadius: "50% 50% 50% 0",
            transformOrigin: "right center",
            transform: `rotate(${leaf1Rotate}deg) scale(${leafScale})`,
            opacity: fadeIn(30, 15),
          }} />

          {/* Right leaf */}
          <div style={{
            position: "absolute",
            right: -2, top: 300,
            width: 55, height: 22,
            background: SAGE,
            borderRadius: "50% 50% 0 50%",
            transformOrigin: "left center",
            transform: `rotate(${leaf2Rotate}deg) scale(${leafScale})`,
            opacity: fadeIn(35, 15),
          }} />
        </div>

        {/* ═══ SCENE 2: Gathering stems ═══ */}
        {stems.map((s, i) => {
          const rise = slideUp(s.delay, 1920, 550 + (i % 2) * 40, 28);
          const opacity = fadeIn(s.delay, 18);
          return (
            <div key={`stem-${i}`} style={{
              position: "absolute",
              left: 540 + s.x, top: rise,
              opacity,
              transform: `rotate(${s.curve + sway(i * 40, 0.012, 1)}deg)`,
              transformOrigin: "bottom center",
            }}>
              <div style={{
                width: 5, height: s.height,
                background: `linear-gradient(180deg, ${i % 2 === 0 ? STEM_GREEN : SAGE_DARK}, ${SAGE_DARK})`,
                borderRadius: 3,
              }} />
            </div>
          );
        })}

        {/* Leaves fanning out */}
        {leaves.map((l, i) => {
          const opacity = fadeIn(l.delay, 14);
          const scale = interpolate(frame, [l.delay, l.delay + 18], [0.3, 1], { ...clamp, easing: Easing.out(Easing.cubic) });
          return (
            <div key={`leaf-${i}`} style={{
              position: "absolute",
              left: 540 + l.x,
              top: l.y + sway(i * 60, 0.01, 2),
              width: l.size,
              height: l.size * 0.4,
              background: i % 2 === 0 ? LEAF_GREEN : SAGE,
              borderRadius: "50%",
              transform: `rotate(${l.rot + sway(i * 30, 0.015, 2)}deg) scale(${scale})`,
              opacity,
            }} />
          );
        })}

        {/* ═══ SCENE 3: Petal bloom — outer ring ═══ */}
        {petals.map((p, i) => {
          const bloomScale = interpolate(frame, [p.delay, p.delay + 20], [0, 1], { ...clamp, easing: Easing.out(Easing.cubic) });
          const bloomDist = interpolate(frame, [p.delay, p.delay + 22], [0, p.distance], { ...clamp, easing: Easing.out(Easing.cubic) });
          const radians = (p.angle * Math.PI) / 180;
          const px = 540 + Math.cos(radians) * bloomDist;
          const py = 420 + Math.sin(radians) * bloomDist;
          const opacity = fadeIn(p.delay, 12);

          return (
            <div key={`petal-${i}`} style={{
              position: "absolute",
              left: px - p.size / 2,
              top: py - p.size * 0.7 / 2 + sway(i * 25, 0.008, 1.5),
              width: p.size,
              height: p.size * 0.7,
              background: `radial-gradient(ellipse, ${p.color} 30%, ${p.color}88 100%)`,
              borderRadius: "50% 50% 45% 45%",
              transform: `rotate(${p.angle + 90}deg) scale(${bloomScale})`,
              opacity,
              boxShadow: `0 2px 8px ${p.color}33`,
            }} />
          );
        })}

        {/* Inner petals — denser center */}
        {innerPetals.map((p, i) => {
          const bloomScale = interpolate(frame, [p.delay, p.delay + 16], [0, 1], { ...clamp, easing: Easing.out(Easing.cubic) });
          const bloomDist = interpolate(frame, [p.delay, p.delay + 18], [0, p.distance], { ...clamp, easing: Easing.out(Easing.cubic) });
          const radians = (p.angle * Math.PI) / 180;
          const px = 540 + Math.cos(radians) * bloomDist;
          const py = 420 + Math.sin(radians) * bloomDist;

          return (
            <div key={`inner-${i}`} style={{
              position: "absolute",
              left: px - p.size / 2,
              top: py - p.size * 0.6 / 2,
              width: p.size,
              height: p.size * 0.6,
              background: `radial-gradient(ellipse, ${p.color} 40%, ${p.color}66 100%)`,
              borderRadius: "50%",
              transform: `rotate(${p.angle + 90}deg) scale(${bloomScale})`,
              opacity: fadeIn(p.delay, 10),
            }} />
          );
        })}

        {/* Center — pistil/stamen detail */}
        <div style={{
          position: "absolute",
          left: 540 - 20, top: 420 - 20,
          width: 40, height: 40,
          borderRadius: "50%",
          background: `radial-gradient(circle, #F5DCA0 30%, ${PEACH} 100%)`,
          opacity: fadeIn(185, 15),
          transform: `scale(${interpolate(frame, [185, 205], [0, 1], { ...clamp, easing: Easing.out(Easing.cubic) })})`,
          boxShadow: "0 0 20px rgba(240,196,168,0.3)",
        }} />

        {/* ═══ SCENE 4: Wrapping paper ═══ */}
        <div style={{
          position: "absolute",
          left: 540 - 200, top: 700,
          width: 400, height: 800,
          clipPath: "polygon(10% 0%, 90% 0%, 70% 100%, 30% 100%)",
          background: "linear-gradient(170deg, #F5EDE4 0%, #EDE3D6 50%, #E5DAC8 100%)",
          opacity: wrapReveal,
          transform: `translateY(${interpolate(frame, [218, 250], [100, 0], { ...clamp, easing: Easing.out(Easing.cubic) })}px)`,
        }}>
          {/* Tissue paper crinkle lines */}
          {[0, 1, 2, 3].map((i) => (
            <div key={`crinkle-${i}`} style={{
              position: "absolute",
              left: 80 + i * 60,
              top: 0, bottom: 0,
              width: 1,
              background: `rgba(180,160,140,${0.08 + i * 0.02})`,
              transform: `rotate(${2 + i * 0.5}deg)`,
            }} />
          ))}
        </div>

        {/* Ribbon */}
        <div style={{
          position: "absolute",
          left: 540 - 2, top: 720,
          width: 4,
          height: interpolate(frame, [245, 275], [0, 200], { ...clamp, easing: Easing.out(Easing.cubic) }),
          background: RIBBON_MAUVE,
          borderRadius: 2,
          opacity: fadeIn(245, 12),
        }} />
        {/* Ribbon bow — left loop */}
        <div style={{
          position: "absolute",
          left: 540 - 50, top: 710,
          width: 45, height: 28,
          border: `2.5px solid ${RIBBON_MAUVE}`,
          borderRadius: "50%",
          background: "transparent",
          transform: `rotate(-20deg) scale(${interpolate(frame, [260, 280], [0, 1], { ...clamp, easing: Easing.out(Easing.cubic) })})`,
          opacity: fadeIn(260, 12),
        }} />
        {/* Ribbon bow — right loop */}
        <div style={{
          position: "absolute",
          left: 540 + 5, top: 710,
          width: 45, height: 28,
          border: `2.5px solid ${RIBBON_MAUVE}`,
          borderRadius: "50%",
          background: "transparent",
          transform: `rotate(20deg) scale(${interpolate(frame, [263, 283], [0, 1], { ...clamp, easing: Easing.out(Easing.cubic) })})`,
          opacity: fadeIn(263, 12),
        }} />
      </div>

      {/* ═══ SCENE 5: Brand text — outside zoom container ═══ */}
      <div style={{
        position: "absolute",
        left: 60, right: 60, bottom: 350,
        textAlign: "center",
        opacity: textOpacity,
        transform: `translateY(${textY}px)`,
      }}>
        <div style={{
          fontSize: 52,
          color: SAGE_DARK,
          fontWeight: 400,
          fontStyle: "italic",
          lineHeight: 1.5,
          letterSpacing: 1,
        }}>
          Made with intention.
        </div>
        <div style={{
          width: interpolate(frame, [278, 295], [0, 200], { ...clamp, easing: Easing.out(Easing.cubic) }),
          height: 1.5,
          background: SAGE,
          margin: "20px auto",
          opacity: 0.5,
        }} />
        <div style={{
          fontSize: 30,
          color: DUSTY_ROSE,
          fontWeight: 400,
          letterSpacing: 6,
          textTransform: "uppercase",
          opacity: fadeIn(285, 15) * 0.6,
        }}>
          Your Florist · Your City
        </div>
      </div>

      {/* Soft vignette */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 50% 50%, transparent 50%, rgba(240,230,220,0.3) 100%)",
        pointerEvents: "none",
      }} />
    </div>
  );
};
