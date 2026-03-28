import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { FONTS, SAFE, SPEC } from "./derma-brand";
// DERMAMEDICUM GLITCH: "Naturkosmetik" myth
// Pretty pink claim → digital glitch corruption → dark clinical truth
// RGB splits, horizontal tears, scanlines, flicker

// Deterministic pseudo-random seeded by frame
const seeded = (frame: number, salt: number) => {
  const x = Math.sin(frame * 9301 + salt * 49297) * 49297;
  return x - Math.floor(x);
};

export const DM_Glitch: React.FC = () => {
  const frame = useCurrentFrame();

  const clamp = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };
  const ease = { ...clamp, easing: Easing.out(Easing.cubic) };

  const fadeIn = (s: number, d = 12) => ({
    opacity: interpolate(frame, [s, s + d], [0, 1], clamp),
    transform: `translateY(${interpolate(frame, [s, s + d], [24, 0], ease)}px)`,
  });

  // Phase boundaries
  const isMyth = frame < 120;
  const isGlitch = frame >= 120 && frame < 160;
  const isTruth = frame >= 160 && frame < 280;
  const isCTA = frame >= 280;

  // Glitch intensity ramps up then down
  const glitchIntensity = isGlitch
    ? interpolate(frame, [120, 135, 150, 160], [0, 1, 1, 0], clamp)
    : 0;

  // Flicker between pink and dark during glitch
  const flickerToDark = isGlitch
    ? seeded(Math.floor(frame / 2), 1) < interpolate(frame, [120, 155], [0.1, 0.9], clamp)
    : frame >= 160 ? 1 : 0;

  // RGB split offset
  const rgbShift = glitchIntensity * 18;

  // Generate tear bars (horizontal displacement chunks)
  const tearBars: Array<{ top: number; height: number; offsetX: number; opacity: number }> = [];
  if (isGlitch) {
    const count = Math.floor(4 + glitchIntensity * 8);
    for (let i = 0; i < count; i++) {
      tearBars.push({
        top: seeded(frame, i * 7 + 100) * SPEC.height,
        height: 20 + seeded(frame, i * 7 + 200) * 80 * glitchIntensity,
        offsetX: (seeded(frame, i * 7 + 300) - 0.5) * 200 * glitchIntensity,
        opacity: 0.6 + seeded(frame, i * 7 + 400) * 0.4,
      });
    }
  }

  // Scanline flicker
  const scanlineOpacity = isGlitch ? 0.15 + glitchIntensity * 0.25 : 0;

  // Screen shake during glitch
  const shakeX = isGlitch ? (seeded(frame, 50) - 0.5) * 30 * glitchIntensity : 0;
  const shakeY = isGlitch ? (seeded(frame, 60) - 0.5) * 16 * glitchIntensity : 0;

  // Myth content — shared between normal and glitch renders
  const mythContent = (
    <div style={{
      position: "absolute", inset: 0,
      background: "linear-gradient(170deg, #fce4ec 0%, #f8bbd0 50%, #f48fb1 100%)",
      display: "flex", flexDirection: "column", alignItems: "center",
      justifyContent: "center",
      padding: `${SAFE.top}px 60px ${SAFE.bottom}px`,
    }}>
      <div style={{
        fontSize: 68,
        fontFamily: "'DM Serif Display', serif",
        color: "#880e4f",
        textAlign: "center",
        lineHeight: 1.35,
        fontWeight: 400,
        maxWidth: 900,
        ...fadeIn(8, 18),
      }}>
        "Naturkosmetik ist immer besser f&uuml;r die Haut."
      </div>
      <div style={{
        fontSize: 38,
        color: "#ad1457",
        marginTop: 36,
        ...fadeIn(50, 14),
      }}>
        💚 312K Likes · Clean-Beauty Blog
      </div>
    </div>
  );

  return (
    <div style={{
      width: SPEC.width,
      height: SPEC.height,
      background: flickerToDark ? "#0d1117" : "linear-gradient(170deg, #fce4ec 0%, #f8bbd0 100%)",
      overflow: "hidden",
      position: "relative",
      fontFamily: FONTS.body,
      transform: `translate(${shakeX}px, ${shakeY}px)`,
    }}>

      {/* ═══ PHASE 1: MYTH (0-120) ═══ */}
      {(isMyth || isGlitch) && (
        <div style={{ position: "absolute", inset: 0, opacity: isGlitch ? (flickerToDark ? 0 : 1) : 1 }}>
          {mythContent}
        </div>
      )}

      {/* ═══ PHASE 2: GLITCH ARTIFACTS (120-160) ═══ */}
      {isGlitch && (
        <>
          {/* RGB SPLIT — Red channel (left shift) */}
          <div style={{
            position: "absolute", inset: 0,
            transform: `translateX(${-rgbShift}px)`,
            mixBlendMode: "screen",
            opacity: glitchIntensity * 0.7,
            pointerEvents: "none",
          }}>
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(170deg, #fce4ec 0%, #f8bbd0 100%)",
              filter: "grayscale(1)",
              opacity: 0.5,
            }} />
            <div style={{
              position: "absolute", inset: 0,
              background: "rgba(255, 0, 0, 0.4)",
            }} />
          </div>

          {/* RGB SPLIT — Blue channel (right shift) */}
          <div style={{
            position: "absolute", inset: 0,
            transform: `translateX(${rgbShift}px)`,
            mixBlendMode: "screen",
            opacity: glitchIntensity * 0.7,
            pointerEvents: "none",
          }}>
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(170deg, #fce4ec 0%, #f8bbd0 100%)",
              filter: "grayscale(1)",
              opacity: 0.5,
            }} />
            <div style={{
              position: "absolute", inset: 0,
              background: "rgba(0, 80, 255, 0.4)",
            }} />
          </div>

          {/* HORIZONTAL TEAR BARS */}
          {tearBars.map((bar, i) => (
            <div key={i} style={{
              position: "absolute",
              top: bar.top,
              left: 0,
              width: SPEC.width,
              height: bar.height,
              transform: `translateX(${bar.offsetX}px)`,
              background: flickerToDark
                ? `rgba(13, 17, 23, ${bar.opacity})`
                : `linear-gradient(90deg, rgba(252, 228, 236, ${bar.opacity}) 0%, rgba(244, 143, 177, ${bar.opacity}) 100%)`,
              opacity: glitchIntensity,
              pointerEvents: "none",
            }} />
          ))}

          {/* SCANLINES */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 3px,
              rgba(0, 0, 0, ${scanlineOpacity}) 3px,
              rgba(0, 0, 0, ${scanlineOpacity}) 4px
            )`,
            pointerEvents: "none",
            zIndex: 20,
          }} />

          {/* BRIGHT GLITCH FLASH — brief white/green bursts */}
          {seeded(frame, 77) > 0.7 && (
            <div style={{
              position: "absolute", inset: 0,
              background: seeded(frame, 88) > 0.5
                ? "rgba(74, 222, 128, 0.15)"
                : "rgba(255, 255, 255, 0.2)",
              pointerEvents: "none",
              zIndex: 25,
            }} />
          )}

          {/* NOISE GRAIN */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            opacity: glitchIntensity * 0.12,
            mixBlendMode: "overlay",
            pointerEvents: "none",
            zIndex: 22,
          }} />
        </>
      )}

      {/* ═══ PHASE 3: TRUTH (160-280) ═══ */}
      {isTruth && (
        <div style={{
          position: "absolute", inset: 0,
          background: "#0d1117",
          display: "flex", flexDirection: "column",
          justifyContent: "center",
          padding: `${SAFE.top}px 60px ${SAFE.bottom}px`,
          gap: 28,
        }}>
          {/* Evidence bar */}
          <div style={{
            ...fadeIn(163),
            width: interpolate(frame, [163, 195], [0, 800], clamp),
            height: 4,
            background: "linear-gradient(90deg, #4ade80, #22d3ee)",
            borderRadius: 2,
          }} />

          <div style={{
            ...fadeIn(168, 14),
            fontSize: 72,
            fontFamily: "'DM Serif Display', serif",
            color: "#E0E0E0",
            lineHeight: 1.3,
          }}>
            Nat&uuml;rlich ≠ sicher.
          </div>

          <div style={{
            ...fadeIn(195, 16),
            fontSize: 46,
            color: "#94a3b8",
            lineHeight: 1.55,
            maxWidth: 920,
          }}>
            Kontaktallergien durch pflanzliche Extrakte sind h&auml;ufiger als durch synthetische Wirkstoffe.
          </div>

          <div style={{
            ...fadeIn(240, 10),
            fontSize: 34,
            color: "#475569",
            fontStyle: "italic",
            marginTop: 12,
          }}>
            Quelle: Contact Dermatitis Journal, 2024
          </div>
        </div>
      )}

      {/* ═══ PHASE 4: CTA (280-360) ═══ */}
      {isCTA && (
        <div style={{
          position: "absolute", inset: 0,
          background: "#0d1117",
          display: "flex", flexDirection: "column", alignItems: "center",
          justifyContent: "center",
          padding: `${SAFE.top}px 60px ${SAFE.bottom}px`,
          gap: 28,
        }}>
          <div style={{
            ...fadeIn(285, 14),
            fontSize: 76,
            fontFamily: "'DM Serif Display', serif",
            color: "#E0E0E0",
            textAlign: "center",
            lineHeight: 1.3,
          }}>
            Evidenz statt &Auml;sthetik.
          </div>

          <div style={{
            ...fadeIn(310, 12),
            marginTop: 30,
            padding: "22px 56px",
            background: "#4ade80",
            borderRadius: 50,
            fontSize: 36,
            fontWeight: 700,
            color: "#0d1117",
          }}>
            DERMAMEDICUM &middot; BONN
          </div>
        </div>
      )}
    </div>
  );
};
