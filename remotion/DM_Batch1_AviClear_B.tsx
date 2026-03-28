import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
import { BRAND, FONTS, LOGO, SAFE, SPEC } from "./derma-brand";

// DM_Batch1_AviClear_B — "Skin Science"
// Educational mechanism animation: why creams can't cure acne, how AviClear's
// 1726nm laser targets sebaceous glands directly. Geometric skin cross-section
// built from styled divs — no external images needed.
// 360 frames (12s at 30fps), 1080x1920

export const DM_Batch1_AviClear_B: React.FC = () => {
  const frame = useCurrentFrame();

  const fadeIn = (s: number, d = 12) => ({
    opacity: interpolate(frame, [s, s + d], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }),
    transform: `translateY(${interpolate(frame, [s, s + d], [24, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.cubic),
    })}px)`,
  });

  const vis = (s: number, e: number) => {
    if (frame < s || frame > e + 8) return 0;
    return Math.min(
      interpolate(frame, [s, s + 6], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      }),
      interpolate(frame, [e, e + 8], [1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    );
  };

  // --- Skin diagram constants ---
  const diagramLeft = SAFE.left + 60;
  const diagramRight = SPEC.width - SAFE.right - 60;
  const diagramWidth = diagramRight - diagramLeft;
  const diagramTop = SAFE.top + 280;

  // Layer heights
  const epidermisH = 60;
  const dermisH = 280;
  const epidermisColor = `${BRAND.warmBrown}88`;
  const dermisColor = `${BRAND.warmBrown}44`;

  // Sebaceous gland position (inside dermis)
  const glandCx = diagramLeft + diagramWidth * 0.55;
  const glandCy = diagramTop + epidermisH + 140;
  const glandR = 44;

  // Laser beam animation (scene 2)
  const laserStart = 120;
  const laserEnd = 180;
  const laserProgress = interpolate(frame, [laserStart, laserStart + 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const laserOpacity = interpolate(frame, [laserStart, laserStart + 8, laserEnd - 10, laserEnd], [0, 1, 1, 0.3], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Gland hit flash
  const glandHit = frame >= laserStart + 16 && frame <= laserEnd;
  const glandPulse = glandHit
    ? 1 + Math.sin((frame - laserStart - 16) * 0.2) * 0.08
    : 1;
  const glandGlow = glandHit
    ? interpolate(frame, [laserStart + 16, laserStart + 24], [0, 20], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    : 0;

  // --- Scene 3: Stat counter ---
  const statStart = 210;
  const statValue = Math.round(
    interpolate(frame, [statStart, statStart + 30], [0, 97], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.cubic),
    })
  );

  // --- Scene 4: End card ---
  const scene4Opacity = vis(282, 360);

  return (
    <div
      style={{
        width: SPEC.width,
        height: SPEC.height,
        background: BRAND.deepNavy,
        overflow: "hidden",
        position: "relative",
        fontFamily: FONTS.body,
      }}
    >
      {/* ═══ SCENE 1: Hook (0-80) ═══ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: vis(0, 78),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: `${SAFE.top}px ${SAFE.right + 20}px ${SAFE.bottom}px ${SAFE.left + 20}px`,
        }}
      >
        <div
          style={{
            ...fadeIn(5, 18),
            fontSize: 54,
            fontWeight: 700,
            color: BRAND.cream,
            fontFamily: FONTS.heading,
            textAlign: "center",
            lineHeight: 1.3,
            maxWidth: 800,
          }}
        >
          Warum Cremes Akne{"\n"}nicht heilen können.
        </div>
        <div
          style={{
            ...fadeIn(30, 14),
            width: 80,
            height: 2,
            background: BRAND.teal,
            marginTop: 36,
          }}
        />
        <div
          style={{
            ...fadeIn(40, 14),
            fontSize: 28,
            color: BRAND.midGray,
            marginTop: 28,
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          Die Ursache liegt tiefer.
        </div>
      </div>

      {/* ═══ SCENE 2: Skin Diagram + Laser (80-200) ═══ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: vis(80, 198),
        }}
      >
        {/* Scene heading */}
        <div
          style={{
            ...fadeIn(85, 14),
            position: "absolute",
            top: SAFE.top + 50,
            left: SAFE.left + 20,
            right: SAFE.right + 20,
            textAlign: "center",
            fontSize: 36,
            fontWeight: 600,
            color: BRAND.cream,
            fontFamily: FONTS.heading,
          }}
        >
          Hautquerschnitt
        </div>

        {/* Epidermis layer */}
        <div
          style={{
            position: "absolute",
            left: diagramLeft,
            top: diagramTop,
            width: diagramWidth,
            height: epidermisH,
            background: epidermisColor,
            borderRadius: "4px 4px 0 0",
            opacity: interpolate(frame, [88, 98], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        />
        {/* Epidermis label */}
        <div
          style={{
            position: "absolute",
            left: diagramLeft + 16,
            top: diagramTop + epidermisH / 2 - 12,
            fontSize: 22,
            color: BRAND.cream,
            fontWeight: 600,
            opacity: interpolate(frame, [95, 105], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            whiteSpace: "nowrap",
          }}
        >
          Epidermis
        </div>

        {/* Dermis layer */}
        <div
          style={{
            position: "absolute",
            left: diagramLeft,
            top: diagramTop + epidermisH,
            width: diagramWidth,
            height: dermisH,
            background: dermisColor,
            borderRadius: "0 0 4px 4px",
            opacity: interpolate(frame, [96, 106], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        />
        {/* Dermis label */}
        <div
          style={{
            position: "absolute",
            left: diagramLeft + 16,
            top: diagramTop + epidermisH + dermisH / 2 - 12,
            fontSize: 22,
            color: BRAND.lightGray,
            fontWeight: 600,
            opacity: interpolate(frame, [103, 113], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            whiteSpace: "nowrap",
          }}
        >
          Dermis
        </div>

        {/* Sebaceous gland (circle) */}
        <div
          style={{
            position: "absolute",
            left: glandCx - glandR,
            top: glandCy - glandR,
            width: glandR * 2,
            height: glandR * 2,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${BRAND.warmBrown}cc 30%, ${BRAND.warmBrown}66 100%)`,
            border: `2px solid ${BRAND.warmBrown}`,
            opacity: interpolate(frame, [106, 116], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            transform: `scale(${glandPulse})`,
            boxShadow: glandHit
              ? `0 0 ${glandGlow}px ${glandGlow / 2}px ${BRAND.teal}88`
              : "none",
          }}
        />
        {/* Gland label */}
        <div
          style={{
            position: "absolute",
            left: glandCx + glandR + 16,
            top: glandCy - 14,
            fontSize: 22,
            color: BRAND.sage,
            fontWeight: 500,
            opacity: interpolate(frame, [112, 120], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            whiteSpace: "nowrap",
          }}
        >
          Talgdrüse
        </div>

        {/* Laser beam (teal line from top down to gland) */}
        {laserProgress > 0 && (
          <svg
            style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
            width={SPEC.width}
            height={SPEC.height}
          >
            <defs>
              <linearGradient id="laserGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={BRAND.teal} stopOpacity={0.1} />
                <stop offset="80%" stopColor={BRAND.teal} stopOpacity={0.9} />
                <stop offset="100%" stopColor={BRAND.teal} stopOpacity={1} />
              </linearGradient>
            </defs>
            {/* Main beam */}
            <line
              x1={glandCx}
              y1={diagramTop - 40}
              x2={glandCx}
              y2={diagramTop - 40 + (glandCy - (diagramTop - 40)) * laserProgress}
              stroke="url(#laserGrad)"
              strokeWidth={4}
              opacity={laserOpacity}
            />
            {/* Outer glow */}
            <line
              x1={glandCx}
              y1={diagramTop - 40}
              x2={glandCx}
              y2={diagramTop - 40 + (glandCy - (diagramTop - 40)) * laserProgress}
              stroke={BRAND.teal}
              strokeWidth={12}
              opacity={laserOpacity * 0.15}
            />
            {/* Beam source indicator */}
            <circle
              cx={glandCx}
              cy={diagramTop - 50}
              r={8}
              fill={BRAND.teal}
              opacity={laserOpacity * 0.7}
            />
          </svg>
        )}

        {/* Wavelength label */}
        <div
          style={{
            ...fadeIn(laserStart + 6, 12),
            position: "absolute",
            left: glandCx + 30,
            top: diagramTop - 20,
            fontSize: 26,
            color: BRAND.teal,
            fontFamily: FONTS.mono,
            fontWeight: 600,
          }}
        >
          1726nm
        </div>

        {/* Explanation text below diagram */}
        <div
          style={{
            ...fadeIn(145, 16),
            position: "absolute",
            top: diagramTop + epidermisH + dermisH + 60,
            left: SAFE.left + 40,
            right: SAFE.right + 40,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 34,
              color: BRAND.cream,
              fontWeight: 600,
              lineHeight: 1.4,
              fontFamily: FONTS.heading,
            }}
          >
            1726nm zielt direkt{"\n"}auf die Talgdrüse.
          </div>
          <div
            style={{
              ...fadeIn(165, 14),
              fontSize: 26,
              color: BRAND.midGray,
              marginTop: 20,
              lineHeight: 1.5,
            }}
          >
            AviClear reguliert die Sebumproduktion{"\n"}
            an der Ursache \u2014 ohne Medikamente.
          </div>
        </div>

        {/* Cream blockade illustration — small X marks at epidermis surface */}
        <div
          style={{
            position: "absolute",
            left: diagramLeft + 40,
            top: diagramTop - 32,
            fontSize: 20,
            color: BRAND.midGray,
            opacity: interpolate(frame, [88, 100, 118, 128], [0, 0.6, 0.6, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            whiteSpace: "nowrap",
          }}
        >
          {"Cremes → nur Oberfläche"}
        </div>
      </div>

      {/* ═══ SCENE 3: Key Stat (200-280) ═══ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: vis(200, 278),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: `${SAFE.top}px ${SAFE.right + 20}px ${SAFE.bottom}px ${SAFE.left + 20}px`,
        }}
      >
        <div
          style={{
            ...fadeIn(205, 14),
            fontSize: 120,
            fontWeight: 700,
            color: BRAND.cream,
            fontFamily: FONTS.heading,
            lineHeight: 1,
          }}
        >
          {statValue}%
        </div>
        <div
          style={{
            ...fadeIn(220, 14),
            width: 120,
            height: 2,
            background: BRAND.teal,
            marginTop: 28,
            marginBottom: 28,
          }}
        />
        <div
          style={{
            ...fadeIn(228, 16),
            fontSize: 34,
            color: BRAND.sage,
            textAlign: "center",
            lineHeight: 1.5,
            maxWidth: 700,
          }}
        >
          weniger entzündliche Läsionen{"\n"}nach 2 Jahren*
        </div>
        <div
          style={{
            ...fadeIn(248, 12),
            fontSize: 20,
            color: BRAND.midGray,
            marginTop: 32,
            fontStyle: "italic",
          }}
        >
          *Klinische Studie, n=100+
        </div>
      </div>

      {/* ═══ SCENE 4: Logo End Card on Cream (280-360) ═══ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: BRAND.cream,
          opacity: scene4Opacity,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 36,
        }}
      >
        <Img
          src={staticFile(LOGO.dark)}
          style={{
            ...fadeIn(288, 16),
            width: 420,
            objectFit: "contain",
          }}
        />
        <div
          style={{
            ...fadeIn(305, 14),
            fontSize: 30,
            color: BRAND.navy,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          {"Dermatologie · Laser · Ästhetik"}
        </div>
        <div
          style={{
            ...fadeIn(320, 12),
            fontSize: 32,
            fontWeight: 600,
            color: BRAND.navy,
            fontFamily: FONTS.heading,
            marginTop: 12,
          }}
        >
          Beratungstermin vereinbaren
        </div>
      </div>
    </div>
  );
};
