import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

// BAKERY SOURDOUGH — OUTPUT A: "The Wait"
// Sensory synesthesia: sound → smell → warmth → THE BREAK → desire.
// Loading principle: value created during preparation, not display.
// Terracotta palette. Fermata at convergence moment.
// Buyer-facing: makes you WANT the bread.
// 540 frames @ 30fps = 18s

const clamp = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };

const DEEP_TERRA = "#8B3A2A";
const CREAM = "#F5ECD7";
const CHARRED = "#2A1810";
const EMBER = "#D4723C";
const SOFT_WHITE = "#EDE4D3";
const WARM_BROWN = "#5C2E1F";
const CRUST_GOLD = "#B8862D";

export const Bakery_C: React.FC = () => {
  const frame = useCurrentFrame();

  const fadeIn = (s: number, d = 15) => ({
    opacity: interpolate(frame, [s, s + d], [0, 1], { ...clamp, easing: Easing.out(Easing.cubic) }),
  });

  const slideUp = (s: number, d = 18) => ({
    ...fadeIn(s, d),
    transform: `translateY(${interpolate(frame, [s, s + d], [35, 0], { ...clamp, easing: Easing.out(Easing.cubic) })}px)`,
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

  // ═══ AMBIENT — heat shimmer throughout ═══
  const shimmerY = Math.sin(frame * 0.04) * 3;
  const shimmerX = Math.cos(frame * 0.03) * 2;

  // ═══ PERSISTENT CRUST TEXTURE — fills frame, gives visual weight ═══
  const crustArcs = Array.from({ length: 8 }, (_, i) => {
    const arcRadius = 200 + i * 80;
    const arcAngle = (i * 47) % 360;
    const arcOpacity = interpolate(frame, [0, 30 + i * 5], [0, 0.08 + (i % 3) * 0.03], clamp);
    const arcWidth = 300 + (i % 3) * 100;
    return { radius: arcRadius, angle: arcAngle, opacity: arcOpacity, width: arcWidth };
  });

  // ═══ CRACK LINES — sound made visible (Scene 1) ═══
  const crackLines = Array.from({ length: 12 }, (_, i) => {
    const angle = (i / 12) * 360;
    const delay = 25 + i * 3;
    const length = interpolate(frame, [delay, delay + 20], [0, 250 + (i % 4) * 100], {
      ...clamp,
      easing: Easing.out(Easing.cubic),
    });
    const thickness = interpolate(frame, [delay, delay + 8], [4, 2], clamp);
    const opacity = interpolate(frame, [delay, delay + 8, 80, 90], [0, 0.8, 0.8, 0], clamp);
    return { angle, length, thickness, opacity };
  });

  // ═══ AROMA WISPS — smell made visible (Scene 2) ═══
  const wisps = Array.from({ length: 7 }, (_, i) => {
    const startFrame = 100 + i * 12;
    const x = 400 + (i % 3) * 140;
    const baseY = 1100;
    const riseSpeed = interpolate(frame, [startFrame, startFrame + 80], [0, -500 - i * 40], {
      ...clamp,
      easing: Easing.inOut(Easing.cubic),
    });
    const drift = Math.sin((frame + i * 50) * 0.025) * (30 + i * 8);
    const wispOpacity = interpolate(
      frame,
      [startFrame, startFrame + 15, startFrame + 60, startFrame + 80],
      [0, 0.2 + (i % 3) * 0.05, 0.15, 0],
      clamp
    );
    const wispScale = interpolate(frame, [startFrame, startFrame + 60], [0.5, 1.2 + i * 0.1], clamp);
    return { x: x + drift, y: baseY + riseSpeed, opacity: wispOpacity, scale: wispScale };
  });

  // ═══ THE BREAK — loaf splits open (Scene 3) ═══
  const breakProgress = interpolate(frame, [230, 280], [0, 1], {
    ...clamp,
    easing: Easing.out(Easing.cubic),
  });

  // Two halves of the loaf splitting
  const splitDistance = interpolate(frame, [240, 290], [0, 80], {
    ...clamp,
    easing: Easing.out(Easing.cubic),
  });

  // Fermata — hold before interior reveal (10 frames of stillness)
  const interiorReveal = interpolate(frame, [295, 315], [0, 1], {
    ...clamp,
    easing: Easing.out(Easing.cubic),
  });

  // Steam burst from the break
  const steamBurst = Array.from({ length: 5 }, (_, i) => {
    const burstStart = 260 + i * 5;
    const burstY = interpolate(frame, [burstStart, burstStart + 40], [0, -180 - i * 30], clamp);
    const burstOpacity = interpolate(
      frame,
      [burstStart, burstStart + 10, burstStart + 30, burstStart + 40],
      [0, 0.25, 0.1, 0],
      clamp
    );
    const burstX = Math.sin((frame + i * 30) * 0.05) * (15 + i * 5);
    return { x: 540 + burstX + (i - 2) * 25, y: 650 + burstY, opacity: burstOpacity };
  });

  // Interior crumb circles
  const crumbDots = Array.from({ length: 14 }, (_, i) => {
    const dotDelay = 300 + i * 2;
    const cx = 480 + (i * 47) % 120;
    const cy = 660 + (i * 31) % 80;
    const r = 5 + (i % 5) * 4;
    const dotOpacity = interpolate(frame, [dotDelay, dotDelay + 12], [0, 0.3 + (i % 3) * 0.1], clamp);
    const dotScale = interpolate(frame, [dotDelay, dotDelay + 15], [0.2, 1], {
      ...clamp,
      easing: Easing.out(Easing.cubic),
    });
    return { cx, cy, r, opacity: dotOpacity, scale: dotScale };
  });

  // ═══ BACKGROUND — shifts through scenes ═══
  const bgWarmth = interpolate(frame, [0, 200, 300, 540], [0, 0.3, 0.6, 0.4], clamp);

  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        background: CHARRED,
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Georgia', 'Times New Roman', serif",
      }}
    >
      {/* Warm oven glow — grows through scenes */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at 50% 55%, rgba(139,58,42,${bgWarmth * 0.3}) 0%, rgba(212,114,60,${bgWarmth * 0.08}) 40%, transparent 70%)`,
          transform: `translate(${shimmerX}px, ${shimmerY}px)`,
        }}
      />

      {/* Persistent crust texture arcs — ambient visual weight */}
      {crustArcs.map((a, i) => (
        <div
          key={`arc-${i}`}
          style={{
            position: "absolute",
            left: 540 - a.radius,
            top: 800 - a.radius,
            width: a.radius * 2,
            height: a.radius * 2,
            borderRadius: "50%",
            border: `1.5px solid rgba(212,114,60,${a.opacity})`,
            transform: `rotate(${a.angle + frame * 0.05}deg)`,
            clipPath: `polygon(0 0, ${a.width}px 0, ${a.width}px 100%, 0 100%)`,
          }}
        />
      ))}

      {/* Grain texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
          backgroundPosition: `${(frame * 5) % 1000}px ${(frame * 3) % 1000}px`,
          opacity: 0.04,
          mixBlendMode: "overlay",
          pointerEvents: "none",
        }}
      />

      {/* ═══ SCENE 1 (0–95): "LISTEN." + crack sound visualization ═══ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          ...vis(0, 90),
        }}
      >
        {/* Large impact ring — thumbnail anchor */}
        <div
          style={{
            position: "absolute",
            left: 540,
            top: 960,
            transform: "translate(-50%, -50%)",
            width: interpolate(frame, [3, 20], [100, 500], { ...clamp, easing: Easing.out(Easing.cubic) }),
            height: interpolate(frame, [3, 20], [100, 500], { ...clamp, easing: Easing.out(Easing.cubic) }),
            borderRadius: "50%",
            border: `3px solid ${CREAM}44`,
            background: `radial-gradient(circle, rgba(212,114,60,0.08) 0%, transparent 70%)`,
            opacity: interpolate(frame, [3, 10, 70, 90], [0, 0.8, 0.6, 0], clamp),
          }}
        />
        {/* Second ring — delayed */}
        <div
          style={{
            position: "absolute",
            left: 540,
            top: 960,
            transform: "translate(-50%, -50%)",
            width: interpolate(frame, [10, 30], [80, 700], { ...clamp, easing: Easing.out(Easing.cubic) }),
            height: interpolate(frame, [10, 30], [80, 700], { ...clamp, easing: Easing.out(Easing.cubic) }),
            borderRadius: "50%",
            border: `1.5px solid ${EMBER}33`,
            opacity: interpolate(frame, [10, 18, 60, 80], [0, 0.5, 0.3, 0], clamp),
          }}
        />

        {/* The word */}
        <div
          style={{
            fontSize: 96,
            color: CREAM,
            letterSpacing: 14,
            textTransform: "uppercase",
            fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
            fontWeight: 300,
            ...slideUp(5),
          }}
        >
          Listen.
        </div>

        {/* Crack lines radiating from center — sound made visible */}
        <div
          style={{
            position: "absolute",
            left: 540,
            top: 960,
            width: 0,
            height: 0,
          }}
        >
          {crackLines.map((c, i) => {
            const rad = (c.angle * Math.PI) / 180;
            return (
              <div
                key={`crack-${i}`}
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: c.length,
                  height: c.thickness,
                  background: `linear-gradient(90deg, ${CREAM}cc, ${CREAM}00)`,
                  transformOrigin: "left center",
                  transform: `rotate(${c.angle}deg)`,
                  opacity: c.opacity,
                  borderRadius: 1,
                }}
              />
            );
          })}
        </div>

        {/* Subtle caption */}
        <div
          style={{
            ...fadeIn(55, 20),
            fontSize: 28,
            color: EMBER,
            fontStyle: "italic",
            marginTop: 40,
            letterSpacing: 1,
          }}
        >
          That's the crust talking.
        </div>
      </div>

      {/* ═══ SCENE 2 (95–225): Aroma — smell made visible ═══ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          ...vis(95, 220),
        }}
      >
        {/* Wisps */}
        {wisps.map((w, i) => (
          <div
            key={`wisp-${i}`}
            style={{
              position: "absolute",
              left: w.x,
              top: w.y,
              width: 60,
              height: 120,
              borderRadius: "50%",
              background: `radial-gradient(ellipse, rgba(245,236,215,${w.opacity}), transparent)`,
              transform: `scale(${w.scale}) scaleX(${0.6 + Math.sin((frame + i * 20) * 0.03) * 0.3})`,
            }}
          />
        ))}

        {/* Text */}
        <div
          style={{
            position: "absolute",
            left: 80,
            right: 80,
            top: 450,
            textAlign: "center",
          }}
        >
          <div
            style={{
              ...slideUp(108),
              fontSize: 56,
              color: SOFT_WHITE,
              fontWeight: 400,
              lineHeight: 1.5,
            }}
          >
            You smell it
          </div>
          <div
            style={{
              ...slideUp(140),
              fontSize: 56,
              color: EMBER,
              fontStyle: "italic",
              fontWeight: 400,
              lineHeight: 1.5,
              marginTop: 8,
            }}
          >
            before you see it.
          </div>
        </div>

        {/* Warmth indicator — pulsing glow at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 300,
            left: "50%",
            transform: "translateX(-50%)",
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(212,114,60,${interpolate(frame, [130, 160, 190, 210], [0, 0.08, 0.12, 0], clamp)}) 0%, transparent 70%)`,
          }}
        />
      </div>

      {/* ═══ SCENE 3 (225–350): THE BREAK — convergence moment ═══ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          ...vis(225, 345),
        }}
      >
        {/* Loaf outline — two halves splitting */}
        <div
          style={{
            position: "absolute",
            left: 540,
            top: 700,
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* Left half */}
          <div
            style={{
              position: "absolute",
              left: -140 - splitDistance,
              top: -100,
              width: 140,
              height: 200,
              borderRadius: "100px 0 0 100px",
              border: `3px solid ${CRUST_GOLD}`,
              borderRight: "none",
              opacity: breakProgress,
              background: `linear-gradient(90deg, rgba(184,134,45,0.05), rgba(184,134,45,0.02))`,
            }}
          />

          {/* Right half */}
          <div
            style={{
              position: "absolute",
              left: splitDistance,
              top: -100,
              width: 140,
              height: 200,
              borderRadius: "0 100px 100px 0",
              border: `3px solid ${CRUST_GOLD}`,
              borderLeft: "none",
              opacity: breakProgress,
              background: `linear-gradient(270deg, rgba(184,134,45,0.05), rgba(184,134,45,0.02))`,
            }}
          />

          {/* Interior — crumb revealed after fermata */}
          <div
            style={{
              position: "absolute",
              left: -splitDistance * 0.3,
              right: -splitDistance * 0.3,
              top: -80,
              bottom: -80,
              opacity: interiorReveal,
            }}
          >
            {crumbDots.map((d, i) => (
              <div
                key={`crumb-${i}`}
                style={{
                  position: "absolute",
                  left: d.cx - 480,
                  top: d.cy - 640,
                  width: d.r * 2,
                  height: d.r * 2,
                  borderRadius: "50%",
                  border: `1px solid rgba(245,236,215,${d.opacity * 0.4})`,
                  background: `rgba(245,236,215,${d.opacity * 0.08})`,
                  transform: `scale(${d.scale})`,
                }}
              />
            ))}
          </div>

          {/* Glow from the break */}
          <div
            style={{
              position: "absolute",
              left: -10,
              top: -120,
              width: 20,
              height: 240,
              background: `linear-gradient(180deg, transparent, rgba(212,114,60,${breakProgress * 0.15}), rgba(245,236,215,${breakProgress * 0.08}), transparent)`,
              filter: `blur(${8 + splitDistance * 0.1}px)`,
            }}
          />
        </div>

        {/* Steam burst from the split */}
        {steamBurst.map((s, i) => (
          <div
            key={`steam-${i}`}
            style={{
              position: "absolute",
              left: s.x,
              top: s.y,
              width: 50,
              height: 90,
              borderRadius: "50%",
              background: `radial-gradient(ellipse, rgba(237,228,211,${s.opacity}), transparent)`,
              filter: "blur(4px)",
            }}
          />
        ))}

        {/* "Crack" text — appears with the break */}
        <div
          style={{
            position: "absolute",
            left: 80,
            right: 80,
            top: 350,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 110,
              fontWeight: 400,
              color: CREAM,
              letterSpacing: -2,
              opacity: interpolate(frame, [238, 248], [0, 1], clamp),
              transform: `scale(${interpolate(frame, [238, 250], [1.3, 1], {
                ...clamp,
                easing: Easing.out(Easing.cubic),
              })})`,
            }}
          >
            Crack.
          </div>
        </div>
      </div>

      {/* ═══ SCENE 4 (350–430): "Still warm." — the desire line ═══ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          ...vis(350, 425),
        }}
      >
        {/* Heat shimmer effect behind text */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            height: 200,
            background: `radial-gradient(ellipse, rgba(212,114,60,${interpolate(frame, [355, 380], [0, 0.06], clamp)}) 0%, transparent 70%)`,
          }}
        />

        <div
          style={{
            ...slideUp(358),
            fontSize: 78,
            color: CREAM,
            fontStyle: "italic",
            fontWeight: 400,
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          Still warm.
        </div>

        {/* Small ember line */}
        <div
          style={{
            ...fadeIn(385, 15),
            width: 100,
            height: 2,
            background: `linear-gradient(90deg, transparent, ${EMBER}, transparent)`,
            marginTop: 30,
          }}
        />
      </div>

      {/* ═══ SCENE 5 (430–540): CTA — scarcity + action ═══ */}
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
            ...fadeIn(435, 18),
            fontSize: 32,
            color: EMBER,
            fontWeight: 300,
            letterSpacing: 5,
            fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
          }}
        >
          GONE BY 10AM
        </div>

        <div
          style={{
            ...fadeIn(455, 15),
            width: 120,
            height: 1.5,
            background: `linear-gradient(90deg, transparent, ${CRUST_GOLD}88, transparent)`,
            margin: "30px 0",
          }}
        />

        <div
          style={{
            ...slideUp(460),
            fontSize: 48,
            color: CREAM,
            fontWeight: 400,
            textAlign: "center",
            letterSpacing: 2,
          }}
        >
          Your Bakery
        </div>

        <div
          style={{
            ...fadeIn(490, 20),
            marginTop: 35,
            padding: "14px 38px",
            border: `1.5px solid ${EMBER}88`,
            borderRadius: 30,
            fontSize: 24,
            color: SOFT_WHITE,
            fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
            fontWeight: 400,
            letterSpacing: 3,
          }}
        >
          ORDER TONIGHT
        </div>

        <div
          style={{
            ...fadeIn(510, 20),
            fontSize: 20,
            color: `${EMBER}99`,
            fontStyle: "italic",
            marginTop: 18,
            opacity: fadeIn(510, 20).opacity * 0.6,
          }}
        >
          for tomorrow morning
        </div>
      </div>

      {/* Vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 45%, rgba(42,24,16,0.5) 100%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};
