import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
import { BRAND, FONTS, LOGO, SAFE, SPEC } from "./derma-brand";

// DERMAMEDICUM SPLIT REVEAL: Rosacea + Excel V+ Laser
// Left = myth (pink influencer). Right slides in = clinical truth. Right takes over.

export const DM_SplitReveal: React.FC = () => {
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

  // Scene 1 (0-120): Left side fills screen, myth
  // Scene 2 (120-210): Right side slides in, left shrinks to 40%
  // Scene 3 (210-300): Right expands to full, left pushed off
  // Scene 4 (300-360): Logo end card

  // Left side width: 100% -> 40% -> 0%
  const leftWidth = interpolate(
    frame,
    [0, 120, 150, 210, 240],
    [100, 100, 40, 40, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.inOut(Easing.cubic) }
  );

  // Right side: off-screen -> 60% -> 100%
  const rightWidth = interpolate(
    frame,
    [0, 120, 150, 210, 240],
    [0, 0, 60, 60, 100],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.inOut(Easing.cubic) }
  );

  // Scene visibility
  const mythOpacity = interpolate(frame, [230, 250], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const truthTextOpacity = interpolate(frame, [130, 145], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Scene 3 text (laser treatment)
  const laserTextOpacity = interpolate(frame, [215, 230], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Laser line sweep (thin horizontal line sweeping down)
  const laserLineY = interpolate(frame, [235, 285], [300, 1600], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.quad),
  });
  const laserLineOpacity = interpolate(frame, [235, 240, 280, 290], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Scene 4: logo card
  const logoCardOpacity = interpolate(frame, [300, 312], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Everything before logo card
  const contentOpacity = interpolate(frame, [295, 305], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
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
      {/* ═══ MAIN CONTENT (scenes 1-3) ═══ */}
      <div style={{ position: "absolute", inset: 0, opacity: contentOpacity }}>
        {/* LEFT SIDE — Myth */}
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
                top: 350,
                left: -60,
                width: 300,
                height: 300,
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
                fontSize: leftWidth < 60 ? 28 : 36,
                color: BRAND.mauve,
                letterSpacing: 4,
                textTransform: "uppercase" as const,
                marginBottom: 24,
                textAlign: "center" as const,
                fontWeight: 500,
              }}
            >
              Social Media
            </div>

            <div
              style={{
                ...fadeIn(20, 18),
                fontSize: leftWidth < 60 ? 42 : 64,
                color: "#6e1847",
                fontWeight: 700,
                textAlign: "center" as const,
                lineHeight: 1.3,
                fontFamily: FONTS.heading,
                maxWidth: leftWidth < 60 ? 380 : 900,
              }}
            >
              {leftWidth >= 60
                ? "\"Rosacea ist nur ein kosmetisches Problem.\""
                : "\"Nur kosmetisch.\""}
            </div>

            <div
              style={{
                ...fadeIn(50),
                fontSize: leftWidth < 60 ? 22 : 30,
                color: "#9e3c6e",
                marginTop: 20,
                textAlign: "center" as const,
                fontStyle: "italic" as const,
              }}
            >
              Mythos
            </div>
          </div>
        )}

        {/* RIGHT SIDE — Truth */}
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
            {/* Subtle vertical divider on left edge */}
            {rightWidth < 100 && (
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: "15%",
                  bottom: "15%",
                  width: 2,
                  background: `linear-gradient(180deg, transparent, ${BRAND.mauve}66, transparent)`,
                }}
              />
            )}

            {/* Scene 2 text: the truth */}
            {frame < 250 && (
              <div
                style={{
                  opacity: truthTextOpacity,
                  display: "flex",
                  flexDirection: "column",
                  gap: 28,
                  maxWidth: 800,
                }}
              >
                <div
                  style={{
                    ...fadeIn(135, 14),
                    fontSize: 30,
                    color: BRAND.mauve,
                    letterSpacing: 3,
                    textTransform: "uppercase" as const,
                    fontWeight: 600,
                  }}
                >
                  Medizinische Realitat
                </div>
                <div
                  style={{
                    ...fadeIn(145, 16),
                    fontSize: rightWidth < 80 ? 46 : 58,
                    color: BRAND.cream,
                    fontWeight: 700,
                    lineHeight: 1.3,
                    fontFamily: FONTS.heading,
                  }}
                >
                  Rosacea ist eine chronische Entzundung.
                </div>
                <div
                  style={{
                    ...fadeIn(170, 14),
                    fontSize: 36,
                    color: BRAND.lightGray,
                    lineHeight: 1.5,
                  }}
                >
                  Ohne Behandlung: progressive Verschlechterung
                </div>
              </div>
            )}

            {/* Scene 3 text: laser treatment */}
            {frame >= 210 && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: `${SAFE.top}px ${SAFE.right}px ${SAFE.bottom}px ${SAFE.left}px`,
                  opacity: laserTextOpacity,
                }}
              >
                <div
                  style={{
                    ...fadeIn(218, 14),
                    fontSize: 58,
                    color: BRAND.cream,
                    fontWeight: 700,
                    textAlign: "center" as const,
                    lineHeight: 1.35,
                    fontFamily: FONTS.heading,
                    maxWidth: 860,
                  }}
                >
                  Excel V+ Laser
                </div>
                <div
                  style={{
                    ...fadeIn(235, 16),
                    fontSize: 38,
                    color: BRAND.lightGray,
                    textAlign: "center" as const,
                    lineHeight: 1.5,
                    marginTop: 28,
                    maxWidth: 800,
                  }}
                >
                  Gezielte Behandlung der Gefasserweiterungen
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
                    background: `linear-gradient(90deg, transparent 0%, ${BRAND.mauve} 20%, ${BRAND.mauve} 80%, transparent 100%)`,
                    boxShadow: `0 0 20px ${BRAND.mauve}88, 0 0 60px ${BRAND.mauve}44`,
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
              background: BRAND.mauve,
              opacity: 0.4,
              transform: "translateX(-1.5px)",
            }}
          />
        )}
      </div>

      {/* ═══ SCENE 4: LOGO END CARD ═══ */}
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
            ...fadeIn(308, 14),
          }}
        />
        <div
          style={{
            ...fadeIn(320, 12),
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
