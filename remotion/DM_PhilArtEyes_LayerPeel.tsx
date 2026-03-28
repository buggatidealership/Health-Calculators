import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
import { BRAND, FONTS, LOGO, SAFE, SPEC } from "./derma-brand";

// DM_PhilArtEyes_LayerPeel — Periocular Skin Layer Reveal
// Anatomical cross-section: layers peel back showing where eye creams stop vs. PhilArt Eyes works
// 420 frames (14s at 30fps), 1080x1920

export const DM_PhilArtEyes_LayerPeel: React.FC = () => {
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
  const layerStartY = 540;
  const layerH = 150;
  const layerGap = 14;
  const layerW = 760;
  const layerX = (SPEC.width - layerW) / 2;

  const layers = [
    { name: "Epidermis", color: BRAND.cream, textColor: BRAND.navy, delay: 18, depth: "Oberflache" },
    { name: "Dermis", color: BRAND.sage, textColor: BRAND.cream, delay: 40, depth: "Tiefenwirkung" },
    { name: "Kollagenfasern", color: BRAND.warmBrown, textColor: BRAND.cream, delay: 62, depth: "Struktur" },
    { name: "Fibroblasten", color: BRAND.navy, textColor: BRAND.cream, delay: 84, depth: "Regeneration" },
  ];

  // Scene 2: "Where creams stop" indicator (120-200)
  const creamStopLineY = layerStartY + layerH + layerGap / 2;
  const creamStopOpacity = interpolate(frame, [125, 140, 195, 205], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const creamStopLineW = interpolate(frame, [125, 150], [0, layerW + 60], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // Scene 3: PhilArt Eyes targets dermis/fibroblasten (200-340)
  // PDRN injection indicators — dots descending into deeper layers
  const pdrnDots = [220, 280, 380, 500, 620];
  const pdrnDepth = interpolate(frame, [210, 260], [0, layerH * 3.2], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });

  // Fibroblasten layer glow (activation)
  const fibroGlow = interpolate(frame, [260, 310], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fibroThicken = interpolate(frame, [270, 330], [0, 20], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // Dermis layer also glows subtly
  const dermisGlow = interpolate(frame, [250, 300], [0, 0.7], {
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
      {/* SCENES 1-3: Skin layer visualization (0-360) */}
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
            top: SAFE.top + 20,
            left: SAFE.left + 20,
            right: SAFE.right + 20,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 42,
              fontWeight: 700,
              color: BRAND.navy,
              fontFamily: FONTS.heading,
              lineHeight: 1.3,
            }}
          >
            Periokulare Haut
          </div>
          <div
            style={{
              ...fadeIn(12),
              fontSize: 28,
              color: BRAND.warmBrown,
              marginTop: 8,
            }}
          >
            Wo wirkt was?
          </div>
        </div>

        {/* Skin layers */}
        {layers.map((layer, i) => {
          const y = layerStartY + i * (layerH + layerGap);
          const isFibro = i === 3;
          const isDermis = i === 1;
          const extraH = isFibro && frame >= 260 ? fibroThicken : 0;

          const slideX = interpolate(frame, [layer.delay, layer.delay + 18], [200, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          });
          const layerOpacity = interpolate(frame, [layer.delay, layer.delay + 12], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });

          const glowShadow = isFibro && frame >= 260
            ? `inset 0 0 ${30 * fibroGlow}px ${BRAND.teal}88, 0 0 ${20 * fibroGlow}px ${BRAND.teal}44`
            : isDermis && frame >= 250
              ? `inset 0 0 ${20 * dermisGlow}px ${BRAND.sage}66, 0 0 ${14 * dermisGlow}px ${BRAND.sage}33`
              : "none";

          const borderActive = (isFibro && frame >= 260) || (isDermis && frame >= 250);

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
                  border: borderActive ? `2px solid ${BRAND.teal}66` : "none",
                }}
              />

              {/* Label on the left */}
              <div
                style={{
                  position: "absolute",
                  left: SAFE.left,
                  top: y + layerH / 2 - 16,
                  fontSize: 24,
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

              {/* Depth label on the right */}
              <div
                style={{
                  position: "absolute",
                  right: SAFE.right,
                  top: y + layerH / 2 - 14,
                  fontSize: 20,
                  color: BRAND.midGray,
                  fontStyle: "italic",
                  opacity: interpolate(
                    frame,
                    [layer.delay + 14, layer.delay + 24],
                    [0, 0.7],
                    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
                  ),
                  width: SPEC.width - layerX - layerW - SAFE.right - 10,
                  textAlign: "left",
                }}
              >
                {layer.depth}
              </div>
            </React.Fragment>
          );
        })}

        {/* Scene 2: "Augencremes stoppen hier" line */}
        <div
          style={{
            position: "absolute",
            left: layerX - 30,
            top: creamStopLineY,
            width: creamStopLineW,
            height: 3,
            background: BRAND.mauve,
            opacity: creamStopOpacity,
            borderRadius: 2,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: layerX - 30,
            top: creamStopLineY + 10,
            opacity: creamStopOpacity,
            ...fadeIn(135, 14),
            fontSize: 26,
            color: BRAND.mauve,
            fontWeight: 600,
          }}
        >
          {"\u2191"} Augencremes stoppen hier
        </div>

        {/* Scene 3: PDRN injection dots descending */}
        {frame >= 205 && frame <= 355 && (
          <>
            {pdrnDots.map((nx, i) => {
              const delay = 210 + i * 6;
              const thisDepth = interpolate(
                frame,
                [delay, delay + 45],
                [0, layerH * 3.2],
                {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                  easing: Easing.inOut(Easing.cubic),
                }
              );
              const dotOpacity = interpolate(frame, [delay - 3, delay + 3], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              });

              // Pulse at injection point
              const pulseActive = frame >= delay + 28 && frame <= 350;
              const pulseRadius = pulseActive
                ? 7 + Math.sin((frame - delay) * 0.18) * 5
                : 0;
              const pulseOpacity = pulseActive
                ? 0.4 + Math.sin((frame - delay) * 0.12) * 0.25
                : 0;

              return (
                <React.Fragment key={`pdrn-${i}`}>
                  {/* Injection line */}
                  <div
                    style={{
                      position: "absolute",
                      left: layerX + nx,
                      top: layerStartY - 20,
                      width: 2,
                      height: thisDepth,
                      background: BRAND.teal,
                      borderRadius: 1,
                      opacity: dotOpacity,
                      transformOrigin: "top",
                    }}
                  />
                  {/* Pulse circle */}
                  {pulseActive && (
                    <div
                      style={{
                        position: "absolute",
                        left: layerX + nx - pulseRadius,
                        top: layerStartY - 20 + thisDepth - pulseRadius,
                        width: pulseRadius * 2,
                        height: pulseRadius * 2,
                        borderRadius: "50%",
                        background: BRAND.teal,
                        opacity: pulseOpacity,
                        boxShadow: `0 0 ${pulseRadius * 2}px ${BRAND.teal}88`,
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
            bottom: SAFE.bottom + 140,
            left: SAFE.left + 20,
            right: SAFE.right + 20,
            textAlign: "center",
            opacity:
              interpolate(frame, [145, 165], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }) *
              (frame <= 210
                ? 1
                : interpolate(frame, [210, 220], [1, 0], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                  })),
            transform: `translateY(${interpolate(frame, [145, 165], [20, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            })}px)`,
          }}
        >
          <div
            style={{
              fontSize: 30,
              color: BRAND.navy,
              lineHeight: 1.5,
              fontWeight: 500,
              maxWidth: 800,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Augencremes wirken an der Oberflache.{"\n"}
            <span style={{ color: BRAND.teal, fontWeight: 700 }}>
              PhilArt Eyes
            </span>{" "}
            stimuliert dort, wo Kollagen entsteht.
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
              interpolate(frame, [275, 295], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }) *
              interpolate(frame, [345, 355], [1, 0], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            transform: `translateY(${interpolate(frame, [275, 295], [20, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            })}px)`,
          }}
        >
          <div
            style={{
              fontSize: 26,
              color: BRAND.warmBrown,
              letterSpacing: 4,
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            PDRN · Polynukleotide
          </div>
          <div
            style={{
              fontSize: 38,
              color: BRAND.navy,
              fontFamily: FONTS.heading,
              fontWeight: 700,
              lineHeight: 1.4,
              maxWidth: 800,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Fibroblasten aktivieren.{"\n"}Korpereigene Regeneration statt Auffullung.
          </div>
        </div>
      </div>

      {/* SCENE 4: Logo card (360-420) */}
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
