import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { BRAND, FONTS, SAFE, SPEC } from "./derma-brand";

// DERMAMEDICUM X-RAY: Pore myth debunk
// Warm wellness surface → cyan scan line sweeps left-to-right →
// reveals dark clinical truth underneath. clipPath mask.

const DARK_BG = "#0d1117";
const SCAN_CYAN = "#4ade80";
const SCAN_GLOW = "rgba(74, 222, 128, 0.6)";

export const DM_XRay: React.FC = () => {
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

  // After scan completes, everything is dark
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

  // --- Phase 1: warm myth visibility (fades out as scan passes) ---
  const warmFullOpacity = frame < 90 ? 1 : scanActive ? 1 : 0;

  // --- Phase 3 text ---
  const phase3Opacity = interpolate(frame, [245, 260], [0, 1], clamp);

  // --- Phase 4 CTA ---
  const phase4Opacity = interpolate(frame, [320, 335], [0, 1], clamp);

  // Decorative circles for warm side
  const circleFloat = (offset: number) =>
    Math.sin((frame + offset) * 0.04) * 12;

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
      {/* ═══ WARM LAYER (always rendered, clipped to RIGHT of scan line) ═══ */}
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
            top: 320,
            right: 80,
            width: 180,
            height: 180,
            borderRadius: "50%",
            background: "rgba(169, 140, 110, 0.12)",
            transform: `translateY(${circleFloat(0)}px)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 600,
            left: 60,
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: "rgba(143, 158, 144, 0.15)",
            transform: `translateY(${circleFloat(40)}px)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 700,
            left: 180,
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: "rgba(211, 182, 150, 0.18)",
            transform: `translateY(${circleFloat(80)}px)`,
          }}
        />

        {/* Warm myth text */}
        <div
          style={{
            ...fadeIn(8, 18),
            fontSize: 34,
            color: BRAND.warmBrown,
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 40,
            fontWeight: 500,
          }}
        >
          SKINCARE FAKT
        </div>
        <div
          style={{
            ...fadeIn(20, 20),
            fontSize: 68,
            color: BRAND.navy,
            fontWeight: 700,
            textAlign: "center",
            lineHeight: 1.3,
            fontFamily: FONTS.heading,
            maxWidth: 900,
          }}
        >
          {"\u201E"}Poren {"\u00F6"}ffnen und schlie{"\u00DF"}en sich.{"\u201C"}
        </div>
        <div
          style={{
            ...fadeIn(50, 15),
            fontSize: 36,
            color: BRAND.sage,
            marginTop: 40,
            textAlign: "center",
            lineHeight: 1.5,
            maxWidth: 750,
          }}
        >
          Warmes Wasser {"\u00F6"}ffnet die Poren.{"\n"}
          Kaltes Wasser schlie{"\u00DF"}t sie wieder.
        </div>
        <div
          style={{
            ...fadeIn(70),
            fontSize: 28,
            color: BRAND.warmBrown,
            marginTop: 30,
            opacity: interpolate(frame, [70, 82], [0, 0.6], clamp),
          }}
        >
          Beauty-Ratgeber {"\u00B7"} Wellness-Blogs
        </div>
      </div>

      {/* ═══ DARK/X-RAY LAYER (always rendered, clipped to LEFT of scan line) ═══ */}
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
        {/* Grid pattern for clinical feel */}
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

        {/* Phase 2: Clinical truth (appears as scan reveals) */}
        {frame < 320 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 40,
            }}
          >
            {/* Main clinical statement */}
            <div
              style={{
                fontSize: 32,
                color: SCAN_CYAN,
                letterSpacing: 5,
                textTransform: "uppercase",
                fontWeight: 600,
                opacity: interpolate(
                  frame,
                  [110, 125],
                  [0, 1],
                  clamp
                ),
              }}
            >
              KLINISCHE REALIT{"\u00C4"}T
            </div>
            <div
              style={{
                fontSize: 62,
                color: "#e6edf3",
                fontWeight: 700,
                textAlign: "center",
                lineHeight: 1.35,
                fontFamily: FONTS.heading,
                maxWidth: 850,
                opacity: interpolate(frame, [120, 140], [0, 1], clamp),
                transform: `translateY(${interpolate(
                  frame,
                  [120, 140],
                  [25, 0],
                  { ...clamp, easing: Easing.out(Easing.cubic) }
                )}px)`,
              }}
            >
              Poren haben keine Muskeln.
            </div>

            {/* Divider line */}
            <div
              style={{
                width: interpolate(frame, [150, 170], [0, 400], {
                  ...clamp,
                  easing: Easing.out(Easing.cubic),
                }),
                height: 2,
                background: `linear-gradient(90deg, transparent, ${SCAN_CYAN}, transparent)`,
                opacity: interpolate(frame, [150, 165], [0, 0.6], clamp),
              }}
            />

            {/* Supporting text */}
            <div
              style={{
                fontSize: 38,
                color: "#8b949e",
                textAlign: "center",
                lineHeight: 1.6,
                maxWidth: 800,
                ...fadeUp(160, 18),
              }}
            >
              W{"\u00E4"}rme erweitert sie tempor{"\u00E4"}r.
            </div>
            <div
              style={{
                fontSize: 38,
                color: "#8b949e",
                textAlign: "center",
                lineHeight: 1.6,
                maxWidth: 800,
                ...fadeUp(185, 18),
              }}
            >
              Kaltes Wasser verengt{" "}
              <span style={{ color: SCAN_CYAN }}>Blutgef{"\u00E4"}{"\u00DF"}e</span>
              {" "}{"\u2014"} nicht Poren.
            </div>

            {/* Phase 3: Genetic fact (after scan completes) */}
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
                    fontSize: 44,
                    color: "#e6edf3",
                    textAlign: "center",
                    fontWeight: 600,
                    lineHeight: 1.4,
                    maxWidth: 800,
                    fontFamily: FONTS.heading,
                    ...fadeUp(252, 18),
                  }}
                >
                  Die Porengr{"\u00F6"}{"\u00DF"}e ist genetisch bestimmt.
                </div>
                <div
                  style={{
                    fontSize: 26,
                    color: "#484f58",
                    marginTop: 10,
                    fontStyle: "italic",
                    ...fadeUp(275, 15),
                  }}
                >
                  Quelle: Journal of Clinical and Aesthetic Dermatology
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
              Anatomie statt Annahmen.
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

      {/* ═══ SCAN LINE (glowing vertical bar) ═══ */}
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
          {/* Bright center line */}
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
          {/* Horizontal scan artifacts */}
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
