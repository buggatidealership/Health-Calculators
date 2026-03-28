import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
import { BRAND, FONTS, LOGO, SAFE, SPEC } from "./derma-brand";

// DM_LayerPeel — Anatomical Layer Reveal (Educational)
// RF-Microneedling: skin cross-section layers peel away, revealing depth effects
// 420 frames (14s at 30fps), 1080x1920

export const DM_LayerPeel: React.FC = () => {
  const frame = useCurrentFrame();

  const fadeIn = (s: number, d = 12) => ({
    opacity: interpolate(frame, [s, s + d], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }),
    transform: `translateY(${interpolate(frame, [s, s + d], [20, 0], {
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

  // Layer geometry
  const layerStartY = 580;
  const layerH = 160;
  const layerGap = 12;
  const layerW = 760;
  const layerX = (SPEC.width - layerW) / 2;

  const layers = [
    { name: "Epidermis", color: BRAND.cream, textColor: BRAND.navy, delay: 15 },
    { name: "Dermis", color: BRAND.sage, textColor: BRAND.cream, delay: 35 },
    { name: "Subcutis", color: BRAND.warmBrown, textColor: BRAND.cream, delay: 55 },
    { name: "Muskulatur", color: BRAND.navy, textColor: BRAND.cream, delay: 75 },
  ];

  // Needle positions (x offsets from layerX)
  const needlePositions = [180, 320, 460, 600];

  // Scene 2: needles descend (120-240)
  const needleDepth = interpolate(frame, [130, 190], [0, layerH * 2.5], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });

  // Scene 3: dermis thickens and glows (240-360)
  const dermisThicken = interpolate(frame, [250, 320], [0, 24], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const dermisGlow = interpolate(frame, [260, 300], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Scene 4 opacity
  const scene4Opacity = vis(362, 420);

  return (
    <div
      style={{
        width: SPEC.width,
        height: SPEC.height,
        background: BRAND.cream,
        overflow: "hidden",
        position: "relative",
        fontFamily: FONTS.body,
      }}
    >
      {/* ═══ SCENES 1-3: Skin layer visualization (0-360) ═══ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: vis(0, 355),
        }}
      >
        {/* Title */}
        <div
          style={{
            ...fadeIn(3),
            position: "absolute",
            top: SAFE.top + 30,
            left: SAFE.left + 20,
            right: SAFE.right + 20,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 44,
              fontWeight: 700,
              color: BRAND.navy,
              fontFamily: FONTS.heading,
              lineHeight: 1.3,
            }}
          >
            RF-Microneedling
          </div>
          <div
            style={{
              ...fadeIn(12),
              fontSize: 30,
              color: BRAND.warmBrown,
              marginTop: 8,
            }}
          >
            Was passiert unter der Haut?
          </div>
        </div>

        {/* Skin layers */}
        {layers.map((layer, i) => {
          const y = layerStartY + i * (layerH + layerGap);
          const extraH = i === 1 && frame >= 240 ? dermisThicken : 0;

          // Layer slide-in animation
          const slideX = interpolate(frame, [layer.delay, layer.delay + 18], [200, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          });
          const layerOpacity = interpolate(frame, [layer.delay, layer.delay + 12], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });

          // Dermis glow in scene 3
          const glowShadow =
            i === 1 && frame >= 260
              ? `inset 0 0 ${30 * dermisGlow}px ${BRAND.sage}88, 0 0 ${20 * dermisGlow}px ${BRAND.sage}44`
              : "none";

          return (
            <React.Fragment key={i}>
              {/* Layer rectangle */}
              <div
                style={{
                  position: "absolute",
                  left: layerX,
                  top: y - extraH / 2,
                  width: layerW,
                  height: layerH + extraH,
                  background: layer.color,
                  borderRadius: 20,
                  opacity: layerOpacity,
                  transform: `translateX(${slideX}px)`,
                  boxShadow: glowShadow,
                  border: i === 1 && frame >= 260 ? `2px solid ${BRAND.sage}66` : "none",
                }}
              />

              {/* Label on the left */}
              <div
                style={{
                  position: "absolute",
                  left: SAFE.left,
                  top: y + layerH / 2 - 16,
                  fontSize: 26,
                  color: BRAND.navy,
                  fontWeight: 600,
                  opacity: interpolate(
                    frame,
                    [layer.delay + 10, layer.delay + 20],
                    [0, 1],
                    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
                  ),
                  transform: `translateX(${interpolate(
                    frame,
                    [layer.delay + 10, layer.delay + 20],
                    [-20, 0],
                    {
                      extrapolateLeft: "clamp",
                      extrapolateRight: "clamp",
                      easing: Easing.out(Easing.cubic),
                    }
                  )}px)`,
                  textAlign: "right",
                  width: layerX - SAFE.left - 16,
                }}
              >
                {layer.name}
              </div>
            </React.Fragment>
          );
        })}

        {/* ═══ SCENE 2: Needles + RF pulses (120-240) ═══ */}
        {frame >= 120 && frame <= 355 && (
          <>
            {needlePositions.map((nx, i) => {
              const delay = 130 + i * 8;
              const thisDepth = interpolate(
                frame,
                [delay, delay + 50],
                [0, layerH * 2.5],
                {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                  easing: Easing.inOut(Easing.cubic),
                }
              );
              const needleOpacity = interpolate(frame, [delay - 5, delay], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              });

              // RF pulse at the needle tip
              const pulseActive = frame >= delay + 30 && frame <= 350;
              const pulseRadius = pulseActive
                ? 8 + Math.sin((frame - delay) * 0.2) * 6
                : 0;
              const pulseOpacity = pulseActive
                ? 0.4 + Math.sin((frame - delay) * 0.15) * 0.3
                : 0;

              return (
                <React.Fragment key={`needle-${i}`}>
                  {/* Needle line */}
                  <div
                    style={{
                      position: "absolute",
                      left: layerX + nx,
                      top: layerStartY - 30,
                      width: 3,
                      height: thisDepth,
                      background: BRAND.mauve,
                      borderRadius: 2,
                      opacity: needleOpacity,
                      transformOrigin: "top",
                    }}
                  />
                  {/* RF pulse circle */}
                  {pulseActive && (
                    <div
                      style={{
                        position: "absolute",
                        left: layerX + nx - pulseRadius,
                        top: layerStartY - 30 + thisDepth - pulseRadius,
                        width: pulseRadius * 2,
                        height: pulseRadius * 2,
                        borderRadius: "50%",
                        background: `${BRAND.sage}`,
                        opacity: pulseOpacity,
                        boxShadow: `0 0 ${pulseRadius * 2}px ${BRAND.sage}88`,
                      }}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </>
        )}

        {/* Scene 2 text */}
        <div
          style={{
            position: "absolute",
            bottom: SAFE.bottom + 120,
            left: SAFE.left + 20,
            right: SAFE.right + 20,
            textAlign: "center",
            ...fadeIn(160, 18),
            opacity:
              interpolate(frame, [160, 178], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }) *
              (frame <= 240
                ? 1
                : interpolate(frame, [240, 250], [1, 0], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                  })),
          }}
        >
          <div
            style={{
              fontSize: 34,
              color: BRAND.navy,
              lineHeight: 1.5,
              fontWeight: 500,
            }}
          >
            Radiofrequenz-Energie stimuliert
          </div>
          <div
            style={{
              fontSize: 34,
              color: BRAND.mauve,
              lineHeight: 1.5,
              fontWeight: 700,
            }}
          >
            Kollagenproduktion
          </div>
        </div>

        {/* Scene 3 text */}
        <div
          style={{
            position: "absolute",
            bottom: SAFE.bottom + 80,
            left: SAFE.left + 20,
            right: SAFE.right + 20,
            textAlign: "center",
            opacity:
              interpolate(frame, [265, 280], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }) *
              interpolate(frame, [345, 355], [1, 0], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            transform: `translateY(${interpolate(frame, [265, 280], [20, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            })}px)`,
          }}
        >
          <div
            style={{
              fontSize: 28,
              color: BRAND.warmBrown,
              letterSpacing: 4,
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Ergebnis
          </div>
          <div
            style={{
              fontSize: 48,
              color: BRAND.navy,
              fontFamily: FONTS.heading,
              fontWeight: 700,
              lineHeight: 1.3,
            }}
          >
            Straffere, jungere Haut
          </div>
          <div
            style={{
              fontSize: 28,
              color: BRAND.midGray,
              marginTop: 12,
            }}
          >
            Secret Pro · Cutera
          </div>
        </div>
      </div>

      {/* ═══ SCENE 4: Logo card (360-420) ═══ */}
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
          gap: 32,
        }}
      >
        <Img
          src={staticFile(LOGO.dark)}
          style={{
            ...fadeIn(368, 16),
            width: 420,
            objectFit: "contain",
          }}
        />
        <div
          style={{
            ...fadeIn(388, 14),
            fontSize: 30,
            color: BRAND.warmBrown,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          Dermatologie · Laser · Asthetik
        </div>
      </div>
    </div>
  );
};
