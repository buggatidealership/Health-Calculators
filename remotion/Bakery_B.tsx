import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

// BAKERY SOURDOUGH — OUTPUT B
// Dark luxury. Sourdough treated as luxury object.
// Near-black bg, brutalist bold type, gold accents.
// Bread is evoked through language, never shown directly.
// Desire through absence. Tension through withholding.
// 540 frames @ 30fps = 18s

const clamp = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };

const BG = "#080604";
const OFF_WHITE = "#E8E0D4";
const GOLD = "#C8963E";
const GOLD_DIM = "rgba(200,150,62,0.15)";
const MID_GRAY = "#6B6560";
const WARM_BLACK = "#1A1612";

export const Bakery_B: React.FC = () => {
  const frame = useCurrentFrame();

  const slam = (s: number, d = 8) => ({
    transform: `scale(${interpolate(frame, [s, s + d], [1.6, 1], { ...clamp, easing: Easing.out(Easing.cubic) })})`,
    opacity: interpolate(frame, [s, s + 4], [0, 1], clamp),
  });

  const fadeIn = (s: number, d = 15) => ({
    opacity: interpolate(frame, [s, s + d], [0, 1], { ...clamp, easing: Easing.out(Easing.cubic) }),
  });

  const slideUp = (s: number, d = 18) => ({
    ...fadeIn(s, d),
    transform: `translateY(${interpolate(frame, [s, s + d], [30, 0], { ...clamp, easing: Easing.out(Easing.cubic) })}px)`,
  });

  const vis = (s: number, e: number) => {
    if (frame < s) return { opacity: 0, pointerEvents: "none" as const };
    const fadeOut = e < 540 ? interpolate(frame, [e, e + 10], [1, 0], clamp) : 1;
    return {
      opacity: Math.min(
        interpolate(frame, [s, s + 8], [0, 1], clamp),
        fadeOut
      ),
    };
  };

  // ═══ GOLD LINE — horizontal wipe between scenes ═══
  const line1 = interpolate(frame, [85, 100], [0, 1080], clamp);
  const line2 = interpolate(frame, [265, 280], [0, 1080], clamp);
  const line3 = interpolate(frame, [395, 410], [0, 1080], clamp);

  // ═══ GRAIN TEXTURE — subtle noise overlay ═══
  const grainOffset = (frame * 7) % 1000;

  // ═══ GOLDEN CIRCLE — abstract loaf cross-section ═══
  const circleScale = interpolate(frame, [300, 380], [0, 1], { ...clamp, easing: Easing.out(Easing.cubic) });
  const circleGlow = interpolate(frame, [340, 400], [0, 0.15], clamp);
  const circleStroke = interpolate(frame, [300, 360], [0, 3], clamp);

  return (
    <div style={{
      width: 1080, height: 1920,
      background: BG,
      overflow: "hidden",
      position: "relative",
      fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
    }}>

      {/* Film grain overlay */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: "200px",
        backgroundPosition: `${grainOffset}px ${grainOffset * 0.7}px`,
        opacity: 0.03,
        mixBlendMode: "overlay",
        pointerEvents: "none",
      }} />

      {/* Subtle warm glow center */}
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(ellipse at 50% 45%, rgba(200,150,62,0.03) 0%, transparent 50%)`,
      }} />

      {/* ═══ GOLD WIPE LINES ═══ */}
      {[
        { width: line1, y: 960, frame: [85, 95, 103, 110] },
        { width: line2, y: 960, frame: [265, 275, 283, 290] },
        { width: line3, y: 960, frame: [395, 405, 413, 420] },
      ].map((l, i) => (
        <div key={`wipe-${i}`} style={{
          position: "absolute",
          left: 0, top: l.y,
          width: l.width, height: 2,
          background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
          opacity: interpolate(frame, l.frame, [0, 0.6, 0.6, 0], clamp),
          zIndex: 20,
        }} />
      ))}

      {/* ═══ SCENE 1 (0–90): "CRUST." — single word slam ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        ...vis(0, 85),
      }}>
        <div style={{
          ...slam(5),
          fontSize: 130,
          fontWeight: 900,
          color: OFF_WHITE,
          letterSpacing: 12,
          textTransform: "uppercase",
        }}>
          Crust.
        </div>
        <div style={{
          ...fadeIn(40, 20),
          width: 60, height: 1,
          background: GOLD,
          marginTop: 30,
        }} />
        <div style={{
          ...slideUp(50),
          fontSize: 30,
          color: MID_GRAY,
          letterSpacing: 6,
          marginTop: 20,
          fontWeight: 300,
        }}>
          THE SOUND BEFORE THE TASTE
        </div>
      </div>

      {/* ═══ SCENE 2 (95–270): Stacked reveals ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        justifyContent: "center",
        padding: "300px 80px 500px",
        ...vis(95, 265),
      }}>
        <div style={{
          ...slideUp(100),
          fontSize: 58,
          color: OFF_WHITE,
          fontWeight: 800,
          lineHeight: 1.3,
        }}>
          Open crumb.
        </div>
        <div style={{
          ...slideUp(135, 20),
          fontSize: 58,
          color: OFF_WHITE,
          fontWeight: 800,
          lineHeight: 1.3,
          marginTop: 20,
        }}>
          Wild tang.
        </div>
        <div style={{
          ...slideUp(170, 20),
          fontSize: 58,
          color: GOLD,
          fontWeight: 800,
          lineHeight: 1.3,
          marginTop: 20,
        }}>
          48-hour ferment.
        </div>

        {/* Pause — beat drop */}
        <div style={{
          ...fadeIn(220, 25),
          fontSize: 36,
          color: MID_GRAY,
          fontWeight: 300,
          fontStyle: "italic",
          marginTop: 50,
          letterSpacing: 1,
        }}>
          No machine touched this loaf.
        </div>
      </div>

      {/* ═══ SCENE 3 (275–400): The pull — desire copy + abstract circle ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        ...vis(275, 395),
      }}>
        {/* Golden circle — abstract loaf cross-section */}
        <div style={{
          position: "absolute",
          left: 540, top: 620,
          transform: `translate(-50%, -50%) scale(${circleScale})`,
        }}>
          {/* Outer ring */}
          <div style={{
            width: 240, height: 240,
            borderRadius: "50%",
            border: `${circleStroke}px solid ${GOLD}`,
            background: "transparent",
            boxShadow: `0 0 60px rgba(200,150,62,${circleGlow}), inset 0 0 40px rgba(200,150,62,${circleGlow * 0.5})`,
          }} />
        </div>

        <div style={{
          ...slideUp(280),
          fontSize: 62,
          color: OFF_WHITE,
          fontWeight: 300,
          textAlign: "center",
          lineHeight: 1.5,
          zIndex: 10,
          marginBottom: 250,
        }}>
          You can taste
        </div>
        <div style={{
          ...slideUp(310),
          fontSize: 72,
          color: GOLD,
          fontWeight: 800,
          fontStyle: "italic",
          textAlign: "center",
          zIndex: 10,
          marginTop: 120,
        }}>
          the time.
        </div>
      </div>

      {/* ═══ SCENE 4 (405–540): CTA — minimal ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        ...vis(405, 540),
      }}>
        <div style={{
          ...fadeIn(410, 20),
          fontSize: 36,
          color: MID_GRAY,
          fontWeight: 300,
          letterSpacing: 4,
          marginBottom: 15,
        }}>
          SOLD OUT BY NOON
        </div>

        <div style={{
          ...fadeIn(425, 20),
          width: 80, height: 1,
          background: GOLD,
          marginBottom: 35,
        }} />

        <div style={{
          ...slideUp(435),
          fontSize: 52,
          color: OFF_WHITE,
          fontWeight: 800,
          textAlign: "center",
          letterSpacing: 2,
        }}>
          Your Bakery
        </div>

        <div style={{
          ...fadeIn(470, 20),
          marginTop: 35,
          padding: "14px 36px",
          border: `1px solid ${GOLD}`,
          borderRadius: 0,
          fontSize: 22,
          color: GOLD,
          fontWeight: 500,
          letterSpacing: 5,
          textTransform: "uppercase",
        }}>
          Order before 9am
        </div>

        {/* Subtle bottom accent */}
        <div style={{
          ...fadeIn(500, 25),
          position: "absolute",
          bottom: 400,
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 18,
          color: MID_GRAY,
          fontWeight: 300,
          letterSpacing: 3,
          opacity: fadeIn(500, 25).opacity * 0.5,
        }}>
          SOURDOUGH &middot; BAKED DAILY
        </div>
      </div>

      {/* Vignette */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 50% 50%, transparent 50%, rgba(0,0,0,0.4) 100%)",
        pointerEvents: "none",
      }} />
    </div>
  );
};
