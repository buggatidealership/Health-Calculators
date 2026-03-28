import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
import { BRAND, FONTS, LOGO, SAFE, SPEC } from "./derma-brand";

// DM_PRP_LayerPeel — PRP (Regen Lab) process as anatomical layer reveal
// Blood → Centrifuge → Plasma → Platelets → Growth Factors
// 420 frames (14s at 30fps), 1080x1920

export const DM_PRP_LayerPeel: React.FC = () => {
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
  const layerStartY = 520;
  const layerH = 150;
  const layerGap = 14;
  const layerW = 760;
  const layerX = (SPEC.width - layerW) / 2;

  const layers = [
    { name: "Blut", label: "Entnahme", color: "#C62828", textColor: BRAND.cream, delay: 15 },
    { name: "Zentrifuge", label: "Trennung", color: "#E65100", textColor: BRAND.cream, delay: 40 },
    { name: "Plasma", label: "Isolation", color: "#F9A825", textColor: BRAND.navy, delay: 65 },
    { name: "Thrombozyten", label: "Konzentration", color: "#2E7D32", textColor: BRAND.cream, delay: 90 },
    { name: "Wachstumsfaktoren", label: "Freisetzung", color: BRAND.navy, textColor: BRAND.cream, delay: 115 },
  ];

  // Scene 2: activation pulse animation (150-260)
  const pulseActive = frame >= 150 && frame < 260;
  const pulseIntensity = pulseActive
    ? interpolate(frame, [150, 190, 240, 260], [0, 1, 1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    : 0;

  // Growth factor glow on last layer
  const gfGlow = interpolate(frame, [130, 180], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Scene 3 text (170-310)
  const scene3Vis = vis(170, 310);

  // Scene 4: stat (260-360)
  const scene4Vis = vis(260, 360);

  // Scene 5: end card
  const scene5Opacity = vis(362, 420);

  return (
    <div style={{
      width: SPEC.width,
      height: SPEC.height,
      background: BRAND.cream,
      overflow: "hidden",
      position: "relative",
      fontFamily: FONTS.body,
    }}>

      {/* SCENES 1-4: Layer visualization (0-360) */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(0, 355),
      }}>
        {/* Title */}
        <div style={{
          ...fadeIn(3),
          position: "absolute",
          top: SAFE.top + 30,
          left: SAFE.left + 20,
          right: SAFE.right + 20,
          textAlign: "center",
        }}>
          <div style={{
            fontSize: 44, fontWeight: 700,
            color: BRAND.navy, fontFamily: FONTS.heading,
            lineHeight: 1.3,
          }}>
            PRP-Therapie
          </div>
          <div style={{
            ...fadeIn(12),
            fontSize: 30, color: BRAND.warmBrown,
            marginTop: 8,
          }}>
            Von Ihrem Blut zu Ihrer Hauterneuerung
          </div>
        </div>

        {/* Process layers */}
        {layers.map((layer, i) => {
          const y = layerStartY + i * (layerH + layerGap);
          const extraH = i === 4 && frame >= 130 ? interpolate(frame, [130, 180], [0, 20], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }) : 0;

          const slideX = interpolate(frame, [layer.delay, layer.delay + 18], [200, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          });
          const layerOpacity = interpolate(frame, [layer.delay, layer.delay + 12], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });

          // Glow on last layer
          const glowShadow = i === 4 && frame >= 130
            ? `inset 0 0 ${30 * gfGlow}px ${BRAND.navy}88, 0 0 ${20 * gfGlow}px ${BRAND.sage}44`
            : "none";

          // Pulse ripple on active layers
          const ripple = pulseActive && i <= 4
            ? Math.sin((frame - 150) * 0.15 + i * 1.2) * 3 * pulseIntensity
            : 0;

          // Arrow between layers
          const arrowOpacity = i < 4
            ? interpolate(frame, [layer.delay + 15, layer.delay + 25], [0, 0.6], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              })
            : 0;

          return (
            <React.Fragment key={i}>
              {/* Layer rectangle */}
              <div style={{
                position: "absolute",
                left: layerX,
                top: y - extraH / 2 + ripple,
                width: layerW,
                height: layerH + extraH,
                background: layer.color,
                borderRadius: 20,
                opacity: layerOpacity,
                transform: `translateX(${slideX}px)`,
                boxShadow: glowShadow,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: 4,
              }}>
                <div style={{
                  fontSize: 32, fontWeight: 700,
                  color: layer.textColor,
                  fontFamily: FONTS.heading,
                }}>
                  {layer.name}
                </div>
                <div style={{
                  fontSize: 22, color: layer.textColor,
                  opacity: 0.8,
                }}>
                  {layer.label}
                </div>
              </div>

              {/* Left label */}
              <div style={{
                position: "absolute",
                left: SAFE.left,
                top: y + layerH / 2 - 14,
                fontSize: 24, color: BRAND.navy,
                fontWeight: 600,
                opacity: interpolate(frame, [layer.delay + 10, layer.delay + 20], [0, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                }),
                transform: `translateX(${interpolate(frame, [layer.delay + 10, layer.delay + 20], [-20, 0], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                  easing: Easing.out(Easing.cubic),
                })}px)`,
                textAlign: "right",
                width: layerX - SAFE.left - 16,
              }}>
                {`${i + 1}.`}
              </div>

              {/* Arrow down */}
              {i < 4 && (
                <div style={{
                  position: "absolute",
                  left: SPEC.width / 2 - 1,
                  top: y + layerH + 1,
                  width: 2, height: layerGap - 2,
                  background: BRAND.warmBrown,
                  opacity: arrowOpacity,
                }} />
              )}
            </React.Fragment>
          );
        })}

        {/* Scene 2: activation pulses (concentric rings from bottom layer) */}
        {pulseActive && (
          <>
            {[0, 1, 2].map((ring) => {
              const ringDelay = 155 + ring * 12;
              const ringSize = interpolate(frame, [ringDelay, ringDelay + 40], [0, 300 + ring * 120], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.cubic),
              });
              const ringOp = interpolate(frame, [ringDelay, ringDelay + 40], [0.4, 0], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              });
              const centerY = layerStartY + 4 * (layerH + layerGap) + layerH / 2;
              return (
                <div key={ring} style={{
                  position: "absolute",
                  left: SPEC.width / 2 - ringSize / 2,
                  top: centerY - ringSize / 2,
                  width: ringSize, height: ringSize,
                  borderRadius: "50%",
                  border: `2px solid ${BRAND.sage}`,
                  opacity: ringOp,
                  pointerEvents: "none",
                }} />
              );
            })}
          </>
        )}

        {/* Scene 3: key text */}
        <div style={{
          position: "absolute",
          bottom: SAFE.bottom + 120,
          left: SAFE.left + 20,
          right: SAFE.right + 20,
          textAlign: "center",
          opacity: scene3Vis,
          transform: `translateY(${interpolate(frame, [170, 185], [20, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          })}px)`,
        }}>
          <div style={{
            fontSize: 38, color: BRAND.navy,
            lineHeight: 1.45, fontWeight: 600,
            fontFamily: FONTS.heading,
          }}>
            Ihre eigenen Zellen.
          </div>
          <div style={{
            fontSize: 38, color: BRAND.mauve,
            lineHeight: 1.45, fontWeight: 700,
          }}>
            Ihre eigenen Wachstumsfaktoren.
          </div>
          <div style={{
            fontSize: 32, color: BRAND.warmBrown,
            marginTop: 8,
          }}>
            Keine Fremdstoffe.
          </div>
        </div>

        {/* Scene 4: stat overlay */}
        <div style={{
          position: "absolute",
          bottom: SAFE.bottom + 60,
          left: SAFE.left + 20,
          right: SAFE.right + 20,
          textAlign: "center",
          opacity: scene4Vis,
          transform: `translateY(${interpolate(frame, [260, 275], [20, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          })}px)`,
        }}>
          <div style={{
            fontSize: 28, color: BRAND.warmBrown,
            letterSpacing: 4, textTransform: "uppercase",
            marginBottom: 12,
          }}>
            Goldstandard
          </div>
          <div style={{
            fontSize: 36, color: BRAND.navy,
            fontFamily: FONTS.heading, fontWeight: 700,
            lineHeight: 1.3,
          }}>
            Regen Lab: {">"}80% Thrombozyten-Recovery
          </div>
          <div style={{
            fontSize: 26, color: BRAND.midGray,
            marginTop: 8,
          }}>
            Goldstandard der PRP-Aufbereitung
          </div>
        </div>
      </div>

      {/* SCENE 5: Logo card (360-420) */}
      <div style={{
        position: "absolute", inset: 0,
        background: BRAND.cream,
        opacity: scene5Opacity,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        gap: 32,
      }}>
        <Img
          src={staticFile(LOGO.dark)}
          style={{
            ...fadeIn(368, 16),
            width: 420,
            objectFit: "contain",
          }}
        />
        <div style={{
          ...fadeIn(388, 14),
          fontSize: 30, color: BRAND.warmBrown,
          letterSpacing: 6, textTransform: "uppercase",
        }}>
          DERMAMEDICUM {"\u00B7"} BONN
        </div>
      </div>
    </div>
  );
};
