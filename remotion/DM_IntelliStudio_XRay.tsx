import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { BRAND, FONTS, SAFE, SPEC } from "./derma-brand";

// DM_IntelliStudio_XRay — Bodymapping IntelliStudio (Canfield)
// Warm surface: manual screening → scan sweep reveals → automated body mapping
// 390 frames (13s at 30fps), 1080x1920

const DARK_BG = "#0d1117";
const SCAN_CYAN = "#4ade80";
const SCAN_GLOW = "rgba(74, 222, 128, 0.6)";

export const DM_IntelliStudio_XRay: React.FC = () => {
  const frame = useCurrentFrame();

  const clamp = {
    extrapolateLeft: "clamp" as const,
    extrapolateRight: "clamp" as const,
  };

  // --- Scan line position (0-1080px over frames 90-240) ---
  const scanX = interpolate(frame, [90, 240], [0, 1080], {
    ...clamp,
    easing: Easing.inOut(Easing.cubic),
  });

  const scanDone = frame >= 240;
  const scanActive = frame >= 90 && frame < 240;

  // --- Helpers ---
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

  const warmFullOpacity = frame < 90 ? 1 : scanActive ? 1 : 0;

  const phase3Opacity = interpolate(frame, [248, 265], [0, 1], clamp);
  const phase4Opacity = interpolate(frame, [320, 335], [0, 1], clamp);

  // Decorative floating circles
  const circleFloat = (offset: number) =>
    Math.sin((frame + offset) * 0.04) * 12;

  // Body silhouette grid lines for dark side
  const gridPulse = Math.sin(frame * 0.08) * 0.02 + 0.06;

  return (
    <div
      style={{
        width: SPEC.width,
        height: SPEC.height,
        background: DARK_BG,
        overflow: "hidden",
        position: "relative",
        fontFamily: FONTS.body,
      }}
    >
      {/* ═══ WARM LAYER ═══ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(165deg, #f7f0e6 0%, ${BRAND.cream} 40%, #efe3d0 100%)`,
          clipPath: scanActive
            ? `inset(0 0 0 ${scanX}px)`
            : scanDone
            ? "inset(0 0 0 100%)"
            : "inset(0 0 0 0)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: `${SAFE.top + 60}px ${SAFE.right + 40}px ${SAFE.bottom + 60}px ${SAFE.left + 40}px`,
          opacity: warmFullOpacity,
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: 350,
            right: 90,
            width: 160,
            height: 160,
            borderRadius: "50%",
            background: "rgba(169, 140, 110, 0.12)",
            transform: `translateY(${circleFloat(0)}px)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 620,
            left: 70,
            width: 110,
            height: 110,
            borderRadius: "50%",
            background: "rgba(143, 158, 144, 0.15)",
            transform: `translateY(${circleFloat(40)}px)`,
          }}
        />

        {/* Body silhouette placeholder */}
        <div
          style={{
            ...fadeIn(5, 20),
            width: 200,
            height: 400,
            borderRadius: "100px 100px 60px 60px",
            background: `linear-gradient(180deg, rgba(127, 105, 84, 0.15) 0%, rgba(127, 105, 84, 0.08) 100%)`,
            border: `2px solid rgba(127, 105, 84, 0.2)`,
            marginBottom: 50,
            position: "relative",
          }}
        >
          {/* Head */}
          <div
            style={{
              position: "absolute",
              top: -55,
              left: "50%",
              transform: "translateX(-50%)",
              width: 70,
              height: 70,
              borderRadius: "50%",
              background: "rgba(127, 105, 84, 0.12)",
              border: `2px solid rgba(127, 105, 84, 0.2)`,
            }}
          />
          {/* Scattered mole dots */}
          {[
            { top: 80, left: 60 },
            { top: 150, left: 130 },
            { top: 220, left: 50 },
            { top: 120, left: 100 },
            { top: 280, left: 90 },
          ].map((pos, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                top: pos.top,
                left: pos.left,
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: BRAND.warmBrown,
                opacity: interpolate(frame, [15 + i * 5, 25 + i * 5], [0, 0.6], clamp),
              }}
            />
          ))}
        </div>

        {/* Warm text */}
        <div
          style={{
            ...fadeIn(10, 18),
            fontSize: 32,
            color: BRAND.warmBrown,
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 30,
            fontWeight: 500,
          }}
        >
          HAUTKONTROLLE
        </div>
        <div
          style={{
            ...fadeIn(20, 20),
            fontSize: 52,
            color: BRAND.navy,
            fontWeight: 700,
            textAlign: "center",
            lineHeight: 1.35,
            fontFamily: FONTS.heading,
            maxWidth: 880,
          }}
        >
          J{"\u00E4"}hrliche Hautkontrolle: 15 Minuten, Blick auf auff{"\u00E4"}llige Muttermale.
        </div>
      </div>

      {/* ═══ DARK/X-RAY LAYER ═══ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: DARK_BG,
          clipPath: scanActive
            ? `inset(0 ${1080 - scanX}px 0 0)`
            : scanDone
            ? "inset(0 0 0 0)"
            : "inset(0 100% 0 0)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: `${SAFE.top + 60}px ${SAFE.right + 40}px ${SAFE.bottom + 60}px ${SAFE.left + 40}px`,
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: gridPulse,
            backgroundImage:
              "linear-gradient(rgba(74,222,128,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Phase 2: Clinical truth revealed by scan */}
        {frame < 320 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 35,
            }}
          >
            {/* Body mapping grid overlay */}
            <div
              style={{
                width: 200,
                height: 400,
                borderRadius: "100px 100px 60px 60px",
                border: `2px solid ${SCAN_CYAN}`,
                position: "relative",
                opacity: interpolate(frame, [100, 120], [0, 0.8], clamp),
                marginBottom: 20,
              }}
            >
              {/* Head */}
              <div
                style={{
                  position: "absolute",
                  top: -55,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 70,
                  height: 70,
                  borderRadius: "50%",
                  border: `2px solid ${SCAN_CYAN}`,
                }}
              />
              {/* Grid lines on body */}
              {[60, 120, 180, 240, 300].map((y, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    top: y,
                    left: 10,
                    right: 10,
                    height: 1,
                    background: SCAN_CYAN,
                    opacity: 0.4,
                  }}
                />
              ))}
              {/* Mapped mole dots with rings */}
              {[
                { top: 80, left: 60 },
                { top: 150, left: 130 },
                { top: 220, left: 50 },
                { top: 120, left: 100 },
                { top: 280, left: 90 },
              ].map((pos, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    top: pos.top - 8,
                    left: pos.left - 8,
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    border: `2px solid ${SCAN_CYAN}`,
                    opacity: interpolate(frame, [130 + i * 8, 140 + i * 8], [0, 1], clamp),
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 7,
                      left: 7,
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: SCAN_CYAN,
                    }}
                  />
                </div>
              ))}
            </div>

            <div
              style={{
                fontSize: 30,
                color: SCAN_CYAN,
                letterSpacing: 5,
                textTransform: "uppercase",
                fontWeight: 600,
                opacity: interpolate(frame, [110, 125], [0, 1], clamp),
              }}
            >
              INTELLISTUDIO
            </div>
            <div
              style={{
                fontSize: 48,
                color: "#e6edf3",
                fontWeight: 700,
                textAlign: "center",
                lineHeight: 1.35,
                fontFamily: FONTS.heading,
                maxWidth: 850,
                ...fadeUp(125, 18),
              }}
            >
              Vollst{"\u00E4"}ndige K{"\u00F6"}rperkartierung in unter 2 Minuten.
            </div>
            <div
              style={{
                fontSize: 36,
                color: "#8b949e",
                textAlign: "center",
                lineHeight: 1.5,
                maxWidth: 800,
                ...fadeUp(155, 18),
              }}
            >
              Jedes Muttermal dokumentiert. Jede Ver{"\u00E4"}nderung erkannt.
            </div>

            {/* Phase 3: Post-scan technical details */}
            {scanDone && (
              <>
                <div
                  style={{
                    width: interpolate(frame, [248, 265], [0, 600], {
                      ...clamp,
                      easing: Easing.out(Easing.cubic),
                    }),
                    height: 1,
                    background: `linear-gradient(90deg, transparent, rgba(139,148,158,0.3), transparent)`,
                    marginTop: 10,
                    opacity: phase3Opacity,
                  }}
                />
                <div
                  style={{
                    fontSize: 38,
                    color: "#e6edf3",
                    textAlign: "center",
                    fontWeight: 600,
                    lineHeight: 1.4,
                    maxWidth: 800,
                    fontFamily: FONTS.heading,
                    ...fadeUp(255, 18),
                  }}
                >
                  Standardisierte Aufnahmen. Polarisiertes Licht. Automatische Vergleiche {"\u00FC"}ber Jahre.
                </div>
              </>
            )}
          </div>
        )}

        {/* Phase 4: CTA */}
        {frame >= 320 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 50,
              opacity: phase4Opacity,
            }}
          >
            <div
              style={{
                fontSize: 58,
                color: "#e6edf3",
                fontWeight: 700,
                textAlign: "center",
                lineHeight: 1.35,
                fontFamily: FONTS.heading,
                maxWidth: 800,
                ...fadeUp(325, 16),
              }}
            >
              Vorsorge, die nichts {"\u00FC"}bersieht.
            </div>
            <div
              style={{
                ...fadeUp(345, 14),
                padding: "22px 60px",
                border: `2px solid ${SCAN_CYAN}`,
                borderRadius: 8,
                fontSize: 28,
                color: SCAN_CYAN,
                letterSpacing: 6,
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              DERMAMEDICUM {"\u00B7"} BONN
            </div>
          </div>
        )}
      </div>

      {/* ═══ SCAN LINE ═══ */}
      {scanActive && (
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: scanX - 4,
            width: 8,
            background: `linear-gradient(180deg, transparent 0%, ${SCAN_CYAN} 15%, #fff 50%, ${SCAN_CYAN} 85%, transparent 100%)`,
            boxShadow: `0 0 20px ${SCAN_GLOW}, 0 0 60px ${SCAN_GLOW}, 0 0 120px rgba(74, 222, 128, 0.2)`,
            zIndex: 20,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 2,
              width: 4,
              background: "rgba(255,255,255,0.9)",
              filter: "blur(1px)",
            }}
          />
          {[0.15, 0.35, 0.55, 0.72, 0.88].map((pos, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                top: `${pos * 100}%`,
                left: -30,
                width: 68,
                height: 2,
                background: `linear-gradient(90deg, transparent, ${SCAN_GLOW}, transparent)`,
                opacity: 0.4 + Math.sin(frame * 0.3 + i * 2) * 0.3,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};
