import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { BRAND, FONTS, SAFE, SPEC } from "./derma-brand";

// DM_Vectra_XRay — Vectra WB360 (Canfield) 3D whole-body imaging
// Warm surface: self-check → scan sweep reveals → AI-mapped 92-camera view
// 390 frames (13s at 30fps), 1080x1920

const DARK_BG = "#0d1117";
const SCAN_CYAN = "#4ade80";
const SCAN_GLOW = "rgba(74, 222, 128, 0.6)";

export const DM_Vectra_XRay: React.FC = () => {
  const frame = useCurrentFrame();

  const clamp = {
    extrapolateLeft: "clamp" as const,
    extrapolateRight: "clamp" as const,
  };

  // --- Scan line position ---
  const scanX = interpolate(frame, [90, 240], [0, 1080], {
    ...clamp,
    easing: Easing.inOut(Easing.cubic),
  });

  const scanDone = frame >= 240;
  const scanActive = frame >= 90 && frame < 240;

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
  const phase4Opacity = interpolate(frame, [310, 325], [0, 1], clamp);

  const circleFloat = (offset: number) =>
    Math.sin((frame + offset) * 0.04) * 12;

  // AI scan ring animation
  const scanRingScale = frame >= 130
    ? 1 + Math.sin((frame - 130) * 0.1) * 0.05
    : 1;

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
            top: 380,
            right: 80,
            width: 150,
            height: 150,
            borderRadius: "50%",
            background: "rgba(169, 140, 110, 0.12)",
            transform: `translateY(${circleFloat(0)}px)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 650,
            left: 60,
            width: 100,
            height: 100,
            borderRadius: "50%",
            background: "rgba(143, 158, 144, 0.15)",
            transform: `translateY(${circleFloat(50)}px)`,
          }}
        />

        {/* Mirror/self-check icon */}
        <div
          style={{
            ...fadeIn(5, 18),
            width: 180,
            height: 260,
            borderRadius: "90px 90px 20px 20px",
            border: `3px solid rgba(127, 105, 84, 0.25)`,
            background: "rgba(127, 105, 84, 0.06)",
            marginBottom: 50,
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: 60,
              color: BRAND.warmBrown,
              opacity: 0.4,
            }}
          >
            ?
          </div>
          {/* Question marks scattered */}
          {[
            { top: 30, left: 20, size: 22 },
            { top: 80, left: 130, size: 18 },
            { top: 180, left: 40, size: 20 },
          ].map((q, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                top: q.top,
                left: q.left,
                fontSize: q.size,
                color: BRAND.warmBrown,
                opacity: interpolate(frame, [20 + i * 8, 30 + i * 8], [0, 0.5], clamp),
              }}
            >
              ?
            </div>
          ))}
        </div>

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
          SELBSTKONTROLLE
        </div>
        <div
          style={{
            ...fadeIn(20, 20),
            fontSize: 50,
            color: BRAND.navy,
            fontWeight: 700,
            textAlign: "center",
            lineHeight: 1.35,
            fontFamily: FONTS.heading,
            maxWidth: 880,
          }}
        >
          Sie kontrollieren Ihre Muttermale regelm{"\u00E4"}{"\u00DF"}ig selbst?
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
            opacity: 0.04,
            backgroundImage:
              "linear-gradient(rgba(74,222,128,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Phase 2: AI-mapped view */}
        {frame < 310 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 30,
            }}
          >
            {/* 3D body scan visualization */}
            <div
              style={{
                width: 180,
                height: 320,
                borderRadius: "90px 90px 40px 40px",
                border: `2px solid ${SCAN_CYAN}`,
                position: "relative",
                opacity: interpolate(frame, [100, 120], [0, 0.9], clamp),
                transform: `scale(${scanRingScale})`,
                marginBottom: 10,
              }}
            >
              {/* Head */}
              <div
                style={{
                  position: "absolute",
                  top: -50,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  border: `2px solid ${SCAN_CYAN}`,
                }}
              />
              {/* Highlighted lesions with AI rings */}
              {[
                { top: 60, left: 40, risk: true },
                { top: 120, left: 110, risk: false },
                { top: 200, left: 70, risk: true },
                { top: 160, left: 30, risk: false },
                { top: 250, left: 100, risk: false },
                { top: 90, left: 130, risk: true },
              ].map((spot, i) => {
                const appear = 125 + i * 6;
                const ringSize = spot.risk ? 30 : 22;
                return (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      top: spot.top - ringSize / 2,
                      left: spot.left - ringSize / 2,
                      width: ringSize,
                      height: ringSize,
                      borderRadius: "50%",
                      border: `2px solid ${spot.risk ? "#ef4444" : SCAN_CYAN}`,
                      opacity: interpolate(frame, [appear, appear + 8], [0, 1], clamp),
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: spot.risk ? "#ef4444" : SCAN_CYAN,
                      }}
                    />
                    {spot.risk && (
                      <div
                        style={{
                          position: "absolute",
                          top: -4,
                          left: -4,
                          right: -4,
                          bottom: -4,
                          borderRadius: "50%",
                          border: "1px solid rgba(239, 68, 68, 0.4)",
                          opacity: 0.5 + Math.sin((frame - appear) * 0.2) * 0.3,
                        }}
                      />
                    )}
                  </div>
                );
              })}
              {/* Camera count label */}
              <div
                style={{
                  position: "absolute",
                  bottom: -35,
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontSize: 18,
                  color: SCAN_CYAN,
                  letterSpacing: 2,
                  whiteSpace: "nowrap",
                  opacity: interpolate(frame, [155, 165], [0, 0.7], clamp),
                }}
              >
                92 KAMERAS
              </div>
            </div>

            <div
              style={{
                fontSize: 30,
                color: SCAN_CYAN,
                letterSpacing: 5,
                textTransform: "uppercase",
                fontWeight: 600,
                opacity: interpolate(frame, [110, 125], [0, 1], clamp),
                marginTop: 20,
              }}
            >
              VECTRA WB360
            </div>
            <div
              style={{
                fontSize: 44,
                color: "#e6edf3",
                fontWeight: 700,
                textAlign: "center",
                lineHeight: 1.35,
                fontFamily: FONTS.heading,
                maxWidth: 850,
                ...fadeUp(125, 18),
              }}
            >
              92 Kameras. Unter 3 Sekunden.
            </div>
            <div
              style={{
                fontSize: 36,
                color: "#8b949e",
                textAlign: "center",
                lineHeight: 1.5,
                maxWidth: 800,
                ...fadeUp(150, 18),
              }}
            >
              Jede Stelle Ihres K{"\u00F6"}rpers {"\u2014"} auch die, die Sie nicht sehen k{"\u00F6"}nnen.
            </div>

            {/* Post-scan: AI monitoring */}
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
                    opacity: interpolate(frame, [248, 260], [0, 1], clamp),
                  }}
                />
                <div
                  style={{
                    fontSize: 34,
                    color: "#8b949e",
                    textAlign: "center",
                    lineHeight: 1.5,
                    maxWidth: 800,
                    ...fadeUp(252, 18),
                  }}
                >
                  KI-gest{"\u00FC"}tzte Ver{"\u00E4"}nderungserkennung. R{"\u00FC"}cken, Kopfhaut, schwer zug{"\u00E4"}ngliche Bereiche {"\u2014"} automatisch {"\u00FC"}berwacht.
                </div>
                {/* Stat */}
                <div
                  style={{
                    ...fadeUp(278, 16),
                    fontSize: 40,
                    color: SCAN_CYAN,
                    fontWeight: 700,
                    textAlign: "center",
                    lineHeight: 1.4,
                    fontFamily: FONTS.heading,
                    maxWidth: 800,
                    marginTop: 10,
                  }}
                >
                  Melanom-Fr{"\u00FC"}herkennung: 99% 5-Jahres-{"\u00DC"}berlebensrate.
                </div>
              </>
            )}
          </div>
        )}

        {/* Phase 4: CTA */}
        {frame >= 310 && (
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
                ...fadeUp(315, 16),
              }}
            >
              Fr{"\u00FC"}herkennung rettet Leben.
            </div>
            <div
              style={{
                ...fadeUp(340, 14),
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
