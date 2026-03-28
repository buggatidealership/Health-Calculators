import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
import { BRAND, FONTS, LOGO, SAFE, SPEC } from "./derma-brand";

// DM_Harmonyca_SplitReveal: Klassischer Filler vs. Harmonyca Hybrid
// Left = warm/conventional approach. Right slides in = clinical Harmonyca advantage.
// 1080x1920, 30fps, 360 frames (~12s)

const CHECK = "\u2713";
const CROSS = "\u2717";

export const DM_Harmonyca_SplitReveal: React.FC = () => {
  const frame = useCurrentFrame();

  const fadeIn = (s: number, d = 12): React.CSSProperties => ({
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

  // Scene 1 (0-100): Left side fills screen — conventional filler
  // Scene 2 (100-180): Right side slides in, left shrinks to 40%
  // Scene 3 (180-260): Right expands to full, left pushed off
  // Scene 4 (260-360): CTA end card

  const leftWidth = interpolate(
    frame,
    [0, 100, 130, 180, 210],
    [100, 100, 40, 40, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.inOut(Easing.cubic) }
  );

  const rightWidth = interpolate(
    frame,
    [0, 100, 130, 180, 210],
    [0, 0, 60, 60, 100],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.inOut(Easing.cubic) }
  );

  const mythOpacity = interpolate(frame, [200, 220], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const truthTextOpacity = interpolate(frame, [110, 125], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Scene 3: Harmonyca details
  const detailsOpacity = interpolate(frame, [185, 200], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Pulse line sweep
  const pulseLineY = interpolate(frame, [205, 250], [350, 1500], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.quad),
  });
  const pulseLineOpacity = interpolate(frame, [205, 210, 245, 255], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Scene 4: logo card
  const logoCardOpacity = interpolate(frame, [260, 275], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const contentOpacity = interpolate(frame, [255, 265], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const renderAttribute = (
    label: string,
    passed: boolean,
    startFrame: number,
    fontSize: number
  ) => (
    <div
      style={{
        ...fadeIn(startFrame, 10),
        fontSize,
        color: passed ? "#4ade80" : "rgba(255,255,255,0.4)",
        fontFamily: FONTS.body,
        fontWeight: 500,
        lineHeight: 1.8,
      }}
    >
      {label} {passed ? CHECK : CROSS}
    </div>
  );

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
        {/* LEFT SIDE — Klassischer Filler */}
        {leftWidth > 0 && (
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: `${leftWidth}%`,
              height: "100%",
              background: `linear-gradient(170deg, #f5e6d0 0%, #e8d4b8 40%, #d4b896 100%)`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: `${SAFE.top}px ${leftWidth < 60 ? 20 : 60}px ${SAFE.bottom}px ${SAFE.left}px`,
              opacity: mythOpacity,
              overflow: "hidden",
            }}
          >
            {/* Decorative circle */}
            <div
              style={{
                position: "absolute",
                top: 380,
                left: -50,
                width: 280,
                height: 280,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.15)",
                opacity: interpolate(frame, [10, 30], [0, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                }),
              }}
            />

            <div
              style={{
                ...fadeIn(8),
                fontSize: leftWidth < 60 ? 24 : 32,
                color: BRAND.warmBrown,
                letterSpacing: 4,
                textTransform: "uppercase" as const,
                marginBottom: 24,
                textAlign: "center" as const,
                fontWeight: 500,
              }}
            >
              Konventionell
            </div>

            <div
              style={{
                ...fadeIn(20, 18),
                fontSize: leftWidth < 60 ? 38 : 58,
                color: "#5a3d25",
                fontWeight: 700,
                textAlign: "center" as const,
                lineHeight: 1.3,
                fontFamily: FONTS.heading,
                maxWidth: leftWidth < 60 ? 360 : 850,
                marginBottom: 32,
              }}
            >
              {leftWidth >= 60
                ? "Klassischer Filler"
                : "Klassisch"}
            </div>

            {leftWidth >= 60 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {renderAttribute("Volumen", true, 40, 30)}
                {renderAttribute("Kollagen", false, 48, 30)}
                <div style={{
                  ...fadeIn(56),
                  fontSize: 30,
                  color: "#8a6b4e",
                  fontFamily: FONTS.body,
                  fontWeight: 500,
                  lineHeight: 1.8,
                }}>
                  Haltbarkeit: 6-12 Monate
                </div>
                <div style={{
                  ...fadeIn(64),
                  fontSize: 30,
                  color: "#8a6b4e",
                  fontFamily: FONTS.body,
                  fontWeight: 500,
                  lineHeight: 1.8,
                }}>
                  Mehrere Sitzungen
                </div>
              </div>
            )}
          </div>
        )}

        {/* RIGHT SIDE — Harmonyca */}
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

            {/* Scene 2: comparison text */}
            {frame < 220 && (
              <div
                style={{
                  opacity: truthTextOpacity,
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                  maxWidth: 800,
                }}
              >
                <div
                  style={{
                    ...fadeIn(115, 14),
                    fontSize: 28,
                    color: BRAND.teal,
                    letterSpacing: 3,
                    textTransform: "uppercase" as const,
                    fontWeight: 600,
                  }}
                >
                  Hybrid-Technologie
                </div>
                <div
                  style={{
                    ...fadeIn(125, 16),
                    fontSize: rightWidth < 80 ? 42 : 54,
                    color: BRAND.cream,
                    fontWeight: 700,
                    lineHeight: 1.3,
                    fontFamily: FONTS.heading,
                  }}
                >
                  Harmonyca Hybrid
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 8 }}>
                  {renderAttribute("Volumen", true, 140, rightWidth < 80 ? 28 : 34)}
                  {renderAttribute("Kollagen", true, 148, rightWidth < 80 ? 28 : 34)}
                  <div style={{
                    ...fadeIn(156),
                    fontSize: rightWidth < 80 ? 28 : 34,
                    color: "#4ade80",
                    fontFamily: FONTS.body,
                    fontWeight: 600,
                    lineHeight: 1.8,
                  }}>
                    Haltbarkeit: 18-24 Monate
                  </div>
                  <div style={{
                    ...fadeIn(164),
                    fontSize: rightWidth < 80 ? 28 : 34,
                    color: "#4ade80",
                    fontFamily: FONTS.body,
                    fontWeight: 600,
                    lineHeight: 1.8,
                  }}>
                    Eine Sitzung
                  </div>
                </div>
              </div>
            )}

            {/* Scene 3: full-screen detail */}
            {frame >= 180 && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: `${SAFE.top}px ${SAFE.right}px ${SAFE.bottom}px ${SAFE.left}px`,
                  opacity: detailsOpacity,
                }}
              >
                <div
                  style={{
                    ...fadeIn(188, 14),
                    fontSize: 56,
                    color: BRAND.cream,
                    fontWeight: 700,
                    textAlign: "center" as const,
                    lineHeight: 1.35,
                    fontFamily: FONTS.heading,
                    maxWidth: 860,
                  }}
                >
                  HA + CaHA in einer Spritze
                </div>
                <div
                  style={{
                    ...fadeIn(205, 16),
                    fontSize: 36,
                    color: BRAND.lightGray,
                    textAlign: "center" as const,
                    lineHeight: 1.5,
                    marginTop: 28,
                    maxWidth: 800,
                  }}
                >
                  Sofort Volumen. Langfristig Kollagen.
                </div>

                {/* Pulse line */}
                <div
                  style={{
                    position: "absolute",
                    left: 60,
                    right: 60,
                    top: pulseLineY,
                    height: 2,
                    opacity: pulseLineOpacity,
                    background: `linear-gradient(90deg, transparent 0%, ${BRAND.teal} 20%, ${BRAND.teal} 80%, transparent 100%)`,
                    boxShadow: `0 0 20px ${BRAND.teal}88, 0 0 60px ${BRAND.teal}44`,
                  }}
                />
              </div>
            )}
          </div>
        )}

        {/* Divider line */}
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
          gap: 30,
        }}
      >
        <div
          style={{
            ...fadeIn(270, 14),
            fontSize: 52,
            color: BRAND.navy,
            fontFamily: FONTS.heading,
            fontWeight: 700,
            textAlign: "center" as const,
            lineHeight: 1.4,
            maxWidth: 800,
            padding: "0 60px",
          }}
        >
          Der erste echte Hybrid-Filler.
        </div>
        <Img
          src={staticFile(LOGO.dark)}
          style={{
            width: 500,
            objectFit: "contain" as const,
            ...fadeIn(290, 14),
          }}
        />
        <div
          style={{
            ...fadeIn(305, 12),
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
