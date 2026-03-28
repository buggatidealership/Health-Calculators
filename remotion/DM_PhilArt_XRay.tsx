import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { BRAND, FONTS, SAFE, SPEC } from "./derma-brand";

// DERMAMEDICUM X-RAY: PhilArt (PDRN) — topical vs. injectable
// Warm surface myth → cyan scan sweep → dark clinical truth
// 390 frames (13s at 30fps), 1080x1920

const DARK_BG = "#0d1117";
const SCAN_CYAN = "#4ade80";
const SCAN_GLOW = "rgba(74, 222, 128, 0.6)";

export const DM_PhilArt_XRay: React.FC = () => {
  const frame = useCurrentFrame();

  const clamp = {
    extrapolateLeft: "clamp" as const,
    extrapolateRight: "clamp" as const,
  };

  // Scan line position (0-1080px over frames 100-250)
  const scanX = interpolate(frame, [100, 250], [0, 1080], {
    ...clamp,
    easing: Easing.inOut(Easing.cubic),
  });

  const scanDone = frame >= 250;
  const scanActive = frame >= 100 && frame < 250;

  const fadeIn = (start: number, dur = 12) => ({
    opacity: interpolate(frame, [start, start + dur], [0, 1], clamp),
    transform: `translateY(${interpolate(frame, [start, start + dur], [20, 0], {
      ...clamp,
      easing: Easing.out(Easing.cubic),
    })}px)`,
  });

  const fadeUp = (start: number, dur = 15) => ({
    opacity: interpolate(frame, [start, start + dur], [0, 1], clamp),
    transform: `translateY(${interpolate(frame, [start, start + dur], [30, 0], {
      ...clamp,
      easing: Easing.out(Easing.cubic),
    })}px)`,
  });

  const warmFullOpacity = frame < 100 ? 1 : scanActive ? 1 : 0;

  // Decorative circles
  const circleFloat = (offset: number) =>
    Math.sin((frame + offset) * 0.04) * 12;

  return (
    <div style={{
      width: SPEC.width,
      height: SPEC.height,
      background: DARK_BG,
      overflow: "hidden",
      position: "relative",
      fontFamily: FONTS.body,
    }}>

      {/* WARM LAYER (clipped to RIGHT of scan line) */}
      <div style={{
        position: "absolute", inset: 0,
        background: `linear-gradient(165deg, #f7f0e6 0%, ${BRAND.cream} 40%, #efe3d0 100%)`,
        clipPath: scanActive
          ? `inset(0 0 0 ${scanX}px)`
          : scanDone
          ? "inset(0 0 0 100%)"
          : "inset(0 0 0 0)",
        zIndex: 10,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        padding: `${SAFE.top + 60}px ${SAFE.right + 40}px ${SAFE.bottom + 60}px ${SAFE.left + 40}px`,
        opacity: warmFullOpacity,
      }}>
        {/* Decorative circles */}
        <div style={{
          position: "absolute", top: 320, right: 80,
          width: 180, height: 180, borderRadius: "50%",
          background: "rgba(169, 140, 110, 0.12)",
          transform: `translateY(${circleFloat(0)}px)`,
        }} />
        <div style={{
          position: "absolute", bottom: 600, left: 60,
          width: 120, height: 120, borderRadius: "50%",
          background: "rgba(143, 158, 144, 0.15)",
          transform: `translateY(${circleFloat(40)}px)`,
        }} />

        {/* Warm myth content */}
        <div style={{
          ...fadeIn(8, 18),
          fontSize: 34, color: BRAND.warmBrown,
          letterSpacing: 4, textTransform: "uppercase",
          marginBottom: 40, fontWeight: 500,
        }}>
          SKINCARE-ROUTINE
        </div>
        <div style={{
          ...fadeIn(20, 20),
          fontSize: 62, color: BRAND.navy,
          fontWeight: 700, textAlign: "center",
          lineHeight: 1.3, fontFamily: FONTS.heading,
          maxWidth: 900,
        }}>
          {"\u201E"}Meine Anti-Aging-Routine reicht.{"\u201C"}
        </div>
        <div style={{
          ...fadeIn(50, 15),
          fontSize: 36, color: BRAND.sage,
          marginTop: 40, textAlign: "center",
          lineHeight: 1.5, maxWidth: 750,
        }}>
          Retinol {"\u00B7"} Vitamin C {"\u00B7"} Peptide
        </div>
        <div style={{
          ...fadeIn(70),
          fontSize: 28, color: BRAND.warmBrown,
          marginTop: 30,
          opacity: interpolate(frame, [70, 82], [0, 0.6], clamp),
        }}>
          Seren {"\u00B7"} Cremes {"\u00B7"} Devices
        </div>
      </div>

      {/* DARK/X-RAY LAYER (clipped to LEFT of scan line) */}
      <div style={{
        position: "absolute", inset: 0,
        background: DARK_BG,
        clipPath: scanActive
          ? `inset(0 ${1080 - scanX}px 0 0)`
          : scanDone
          ? "inset(0 0 0 0)"
          : "inset(0 100% 0 0)",
        zIndex: 10,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        padding: `${SAFE.top + 60}px ${SAFE.right + 40}px ${SAFE.bottom + 60}px ${SAFE.left + 40}px`,
      }}>
        {/* Grid pattern */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.04,
          backgroundImage: "linear-gradient(rgba(74,222,128,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        {/* Phase 2: Clinical truth (revealed by scan) */}
        {frame < 330 && (
          <div style={{
            display: "flex", flexDirection: "column",
            alignItems: "center", gap: 36,
          }}>
            <div style={{
              fontSize: 30, color: SCAN_CYAN,
              letterSpacing: 5, textTransform: "uppercase",
              fontWeight: 600,
              opacity: interpolate(frame, [115, 130], [0, 1], clamp),
            }}>
              KLINISCHE REALIT{"\u00C4"}T
            </div>

            <div style={{
              fontSize: 54, color: "#e6edf3",
              fontWeight: 700, textAlign: "center",
              lineHeight: 1.35, fontFamily: FONTS.heading,
              maxWidth: 880,
              opacity: interpolate(frame, [125, 145], [0, 1], clamp),
              transform: `translateY(${interpolate(frame, [125, 145], [25, 0], {
                ...clamp, easing: Easing.out(Easing.cubic),
              })}px)`,
            }}>
              Topische Wirkstoffe erreichen die Epidermis.
            </div>

            <div style={{
              fontSize: 54, color: SCAN_CYAN,
              fontWeight: 700, textAlign: "center",
              lineHeight: 1.35, fontFamily: FONTS.heading,
              maxWidth: 880,
              ...fadeUp(155, 18),
            }}>
              PhilArt wirkt in der Dermis.
            </div>

            {/* Divider */}
            <div style={{
              width: interpolate(frame, [175, 195], [0, 400], {
                ...clamp, easing: Easing.out(Easing.cubic),
              }),
              height: 2,
              background: `linear-gradient(90deg, transparent, ${SCAN_CYAN}, transparent)`,
              opacity: interpolate(frame, [175, 190], [0, 0.6], clamp),
            }} />

            <div style={{
              fontSize: 38, color: "#8b949e",
              textAlign: "center", lineHeight: 1.6,
              maxWidth: 800,
              ...fadeUp(190, 18),
            }}>
              40 mg/ml Polynukleotide.{"\n"}Direkt am Kollagen.
            </div>

            {/* Post-scan stats */}
            {scanDone && (
              <>
                <div style={{
                  width: interpolate(frame, [255, 272], [0, 600], {
                    ...clamp, easing: Easing.out(Easing.cubic),
                  }),
                  height: 1,
                  background: "linear-gradient(90deg, transparent, rgba(139,148,158,0.3), transparent)",
                  marginTop: 10,
                  opacity: interpolate(frame, [255, 268], [0, 1], clamp),
                }} />
                <div style={{
                  fontSize: 44, color: "#e6edf3",
                  textAlign: "center", fontWeight: 600,
                  lineHeight: 1.4, maxWidth: 800,
                  fontFamily: FONTS.heading,
                  ...fadeUp(260, 18),
                }}>
                  Ergebnisse bis zu 12 Monate.{"\n"}3 Sitzungen.
                </div>
              </>
            )}
          </div>
        )}

        {/* Phase 4: CTA */}
        {frame >= 330 && (
          <div style={{
            display: "flex", flexDirection: "column",
            alignItems: "center", gap: 50,
            opacity: interpolate(frame, [330, 345], [0, 1], clamp),
          }}>
            <div style={{
              fontSize: 58, color: "#e6edf3",
              fontWeight: 700, textAlign: "center",
              lineHeight: 1.35, fontFamily: FONTS.heading,
              maxWidth: 800,
              ...fadeUp(335, 16),
            }}>
              Unter die Oberfl{"\u00E4"}che gehen.
            </div>
            <div style={{
              ...fadeUp(355, 14),
              padding: "22px 60px",
              border: `2px solid ${SCAN_CYAN}`,
              borderRadius: 8,
              fontSize: 28, color: SCAN_CYAN,
              letterSpacing: 6, textTransform: "uppercase",
              fontWeight: 600,
            }}>
              DERMAMEDICUM {"\u00B7"} BONN
            </div>
          </div>
        )}
      </div>

      {/* SCAN LINE */}
      {scanActive && (
        <div style={{
          position: "absolute", top: 0, bottom: 0,
          left: scanX - 4, width: 8,
          background: `linear-gradient(180deg, transparent 0%, ${SCAN_CYAN} 15%, #fff 50%, ${SCAN_CYAN} 85%, transparent 100%)`,
          boxShadow: `0 0 20px ${SCAN_GLOW}, 0 0 60px ${SCAN_GLOW}, 0 0 120px rgba(74, 222, 128, 0.2)`,
          zIndex: 20,
        }}>
          <div style={{
            position: "absolute", top: 0, bottom: 0,
            left: 2, width: 4,
            background: "rgba(255,255,255,0.9)",
            filter: "blur(1px)",
          }} />
          {[0.15, 0.35, 0.55, 0.72, 0.88].map((pos, i) => (
            <div key={i} style={{
              position: "absolute",
              top: `${pos * 100}%`,
              left: -30, width: 68, height: 2,
              background: `linear-gradient(90deg, transparent, ${SCAN_GLOW}, transparent)`,
              opacity: 0.4 + Math.sin(frame * 0.3 + i * 2) * 0.3,
            }} />
          ))}
        </div>
      )}
    </div>
  );
};
