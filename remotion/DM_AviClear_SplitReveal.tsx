import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
import { BRAND, FONTS, LOGO, SAFE, SPEC } from "./derma-brand";

// DM_AviClear_SplitReveal — AviClear: Myth vs. Clinical Reality
// Left = symptom suppression (warm/pink). Right slides in = root cause treatment.
// 360 frames (12s at 30fps), 1080x1920

export const DM_AviClear_SplitReveal: React.FC = () => {
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

  // Scene 1 (0-110): Left side fills screen — symptom treatments
  // Scene 2 (110-200): Right side slides in, left shrinks to 40%
  // Scene 3 (200-290): Right expands to full, reveal text + stat
  // Scene 4 (290-360): Logo end card

  const leftWidth = interpolate(
    frame,
    [0, 110, 145, 200, 230],
    [100, 100, 40, 40, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.inOut(Easing.cubic) }
  );

  const rightWidth = interpolate(
    frame,
    [0, 110, 145, 200, 230],
    [0, 0, 60, 60, 100],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.inOut(Easing.cubic) }
  );

  const mythOpacity = interpolate(frame, [220, 240], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const truthTextOpacity = interpolate(frame, [125, 140], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Scene 3: full-width reveal text
  const revealTextOpacity = interpolate(frame, [210, 225], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Laser targeting line (vertical pulse sweeping down)
  const laserLineY = interpolate(frame, [230, 275], [350, 1500], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.quad),
  });
  const laserLineOpacity = interpolate(frame, [230, 238, 270, 280], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Scene 4: logo card
  const logoCardOpacity = interpolate(frame, [290, 305], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const contentOpacity = interpolate(frame, [285, 298], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Decorative pill/cream icons on left side
  const pillY1 = interpolate(frame, [20, 100], [600, 560], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });
  const pillY2 = interpolate(frame, [30, 100], [900, 860], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });

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
      {/* MAIN CONTENT (scenes 1-3) */}
      <div style={{ position: "absolute", inset: 0, opacity: contentOpacity }}>
        {/* LEFT SIDE — Symptom treatments */}
        {leftWidth > 0 && (
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: `${leftWidth}%`,
              height: "100%",
              background: `linear-gradient(170deg, #fce4ec 0%, #f3c5d3 40%, #e8a0b8 100%)`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: `${SAFE.top}px ${leftWidth < 60 ? 20 : 60}px ${SAFE.bottom}px ${SAFE.left}px`,
              opacity: mythOpacity,
              overflow: "hidden",
            }}
          >
            {/* Decorative circles */}
            <div
              style={{
                position: "absolute",
                top: 320,
                left: -80,
                width: 280,
                height: 280,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.12)",
                opacity: interpolate(frame, [8, 25], [0, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                }),
              }}
            />

            <div
              style={{
                ...fadeIn(5),
                fontSize: leftWidth < 60 ? 26 : 34,
                color: BRAND.mauve,
                letterSpacing: 4,
                textTransform: "uppercase" as const,
                marginBottom: 20,
                textAlign: "center" as const,
                fontWeight: 500,
              }}
            >
              Akne-Behandlung
            </div>

            <div
              style={{
                ...fadeIn(18, 18),
                fontSize: leftWidth < 60 ? 36 : 56,
                color: "#6e1847",
                fontWeight: 700,
                textAlign: "center" as const,
                lineHeight: 1.3,
                fontFamily: FONTS.heading,
                maxWidth: leftWidth < 60 ? 360 : 850,
              }}
            >
              {leftWidth >= 60
                ? "Symptome\nunterdrucken"
                : "Symptome"}
            </div>

            {/* Decorative pill shapes */}
            <div
              style={{
                ...fadeIn(30),
                position: "absolute",
                top: pillY1,
                left: leftWidth < 60 ? "20%" : "25%",
                width: 120,
                height: 44,
                borderRadius: 22,
                background: "rgba(255,255,255,0.3)",
                border: "2px solid rgba(255,255,255,0.5)",
              }}
            />
            <div
              style={{
                ...fadeIn(40),
                position: "absolute",
                top: pillY2,
                right: leftWidth < 60 ? "15%" : "20%",
                width: 80,
                height: 80,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.2)",
                border: "2px solid rgba(255,255,255,0.4)",
              }}
            />

            <div
              style={{
                ...fadeIn(45),
                fontSize: leftWidth < 60 ? 20 : 28,
                color: "#9e3c6e",
                marginTop: 24,
                textAlign: "center" as const,
                fontStyle: "italic" as const,
              }}
            >
              Cremes · Tabletten · Peelings
            </div>
          </div>
        )}

        {/* RIGHT SIDE — Root cause treatment */}
        {rightWidth > 0 && (
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              width: `${rightWidth}%`,
              height: "100%",
              background: BRAND.deepNavy,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: `${SAFE.top}px ${SAFE.right}px ${SAFE.bottom}px 60px`,
              overflow: "hidden",
            }}
          >
            {/* Vertical divider */}
            {rightWidth < 100 && (
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: "15%",
                  bottom: "15%",
                  width: 2,
                  background: `linear-gradient(180deg, transparent, ${BRAND.teal}66, transparent)`,
                }}
              />
            )}

            {/* Scene 2 text: the truth */}
            {frame < 240 && (
              <div
                style={{
                  opacity: truthTextOpacity,
                  display: "flex",
                  flexDirection: "column",
                  gap: 24,
                  maxWidth: 800,
                }}
              >
                <div
                  style={{
                    ...fadeIn(130, 14),
                    fontSize: 28,
                    color: BRAND.teal,
                    letterSpacing: 3,
                    textTransform: "uppercase" as const,
                    fontWeight: 600,
                  }}
                >
                  Klinische Realitat
                </div>
                <div
                  style={{
                    ...fadeIn(140, 16),
                    fontSize: rightWidth < 80 ? 42 : 54,
                    color: BRAND.cream,
                    fontWeight: 700,
                    lineHeight: 1.3,
                    fontFamily: FONTS.heading,
                  }}
                >
                  Ursache behandeln
                </div>
                <div
                  style={{
                    ...fadeIn(160, 14),
                    fontSize: 32,
                    color: BRAND.lightGray,
                    lineHeight: 1.5,
                  }}
                >
                  1726nm Laser zielt direkt auf Talgdrusen
                </div>
              </div>
            )}

            {/* Scene 3: full-width reveal */}
            {frame >= 205 && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: `${SAFE.top}px ${SAFE.right}px ${SAFE.bottom}px ${SAFE.left}px`,
                  opacity: revealTextOpacity,
                  gap: 28,
                }}
              >
                <div
                  style={{
                    ...fadeIn(212, 14),
                    fontSize: 44,
                    color: BRAND.cream,
                    fontWeight: 700,
                    textAlign: "center" as const,
                    lineHeight: 1.4,
                    fontFamily: FONTS.heading,
                    maxWidth: 860,
                  }}
                >
                  AviClear ist die einzige FDA-zugelassene Laser-Behandlung, die Talgdrusen direkt anspricht.
                </div>

                {/* Separator */}
                <div
                  style={{
                    width: interpolate(frame, [235, 250], [0, 300], {
                      extrapolateLeft: "clamp",
                      extrapolateRight: "clamp",
                    }),
                    height: 2,
                    background: `linear-gradient(90deg, transparent, ${BRAND.teal}, transparent)`,
                    marginTop: 16,
                    marginBottom: 16,
                  }}
                />

                <div
                  style={{
                    ...fadeIn(245, 16),
                    fontSize: 34,
                    color: BRAND.sage,
                    textAlign: "center" as const,
                    lineHeight: 1.5,
                    maxWidth: 800,
                  }}
                >
                  3 Sitzungen. Keine Medikamente.{"\n"}Ergebnisse, die sich uber 12 Monate verbessern.
                </div>

                {/* Laser line animation */}
                <div
                  style={{
                    position: "absolute",
                    left: 60,
                    right: 60,
                    top: laserLineY,
                    height: 2,
                    opacity: laserLineOpacity,
                    background: `linear-gradient(90deg, transparent 0%, ${BRAND.teal} 20%, ${BRAND.teal} 80%, transparent 100%)`,
                    boxShadow: `0 0 20px ${BRAND.teal}88, 0 0 60px ${BRAND.teal}44`,
                  }}
                />
              </div>
            )}
          </div>
        )}

        {/* Divider line between panels during split */}
        {leftWidth > 0 && rightWidth > 0 && (
          <div
            style={{
              position: "absolute",
              left: `${leftWidth}%`,
              top: 0,
              width: 3,
              height: "100%",
              background: BRAND.teal,
              opacity: 0.4,
              transform: "translateX(-1.5px)",
            }}
          />
        )}
      </div>

      {/* SCENE 4: LOGO END CARD */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: BRAND.cream,
          opacity: logoCardOpacity,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 40,
        }}
      >
        <Img
          src={staticFile(LOGO.dark)}
          style={{
            width: 500,
            objectFit: "contain" as const,
            ...fadeIn(298, 14),
          }}
        />
        <div
          style={{
            ...fadeIn(312, 12),
            fontSize: 30,
            color: BRAND.navy,
            fontFamily: FONTS.body,
            letterSpacing: 6,
            textTransform: "uppercase" as const,
          }}
        >
          Bonn
        </div>
      </div>
    </div>
  );
};
