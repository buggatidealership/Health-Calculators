/**
 * DM_Batch1_Canfield_A.tsx — "Tech Reveal"
 * DermaMedicum × Canfield IntelliStudio / Vectra WB360
 *
 * The wow factor of scanning technology.
 * Dark tech aesthetic, cyan scan line, grid coordinates.
 * 300 frames / 10s @ 30fps / 1080×1920
 */

import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
import { BRAND, FONTS, SAFE, LOGO } from "./derma-brand";

const CYAN = "#00E5FF";
const CYAN_DIM = "rgba(0, 229, 255, 0.15)";
const CYAN_GLOW = "rgba(0, 229, 255, 0.4)";

const GRID_COORDS = [
  { label: "A1", x: 180, y: 480 },
  { label: "A3", x: 540, y: 480 },
  { label: "A5", x: 860, y: 480 },
  { label: "B2", x: 320, y: 720 },
  { label: "B4", x: 680, y: 720 },
  { label: "B7", x: 900, y: 720 },
  { label: "C1", x: 200, y: 960 },
  { label: "C3", x: 540, y: 960 },
  { label: "C6", x: 820, y: 960 },
  { label: "D2", x: 360, y: 1200 },
  { label: "D5", x: 700, y: 1200 },
  { label: "E1", x: 240, y: 1400 },
  { label: "E4", x: 600, y: 1400 },
];

const GRID_LINES_V = [180, 360, 540, 720, 900];
const GRID_LINES_H = [480, 720, 960, 1200, 1400];

function typewriter(text: string, frame: number, startFrame: number, charsPerFrame: number): string {
  const elapsed = Math.max(0, frame - startFrame);
  const chars = Math.floor(elapsed * charsPerFrame);
  return text.slice(0, chars);
}

export const DM_Batch1_Canfield_A: React.FC = () => {
  const frame = useCurrentFrame();

  // === SCENE 1: Typewriter text (0–90) ===
  const line1 = "Ihre Haut hat eine Geschichte.";
  const line2 = "Wir lesen sie.";

  const line1Text = typewriter(line1, frame, 8, 0.6);
  const line1Done = frame >= 8 + line1.length / 0.6;
  const line2Text = line1Done ? typewriter(line2, frame, 8 + line1.length / 0.6 + 12, 0.5) : "";

  const scene1Opacity = interpolate(frame, [0, 5, 75, 90], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Cursor blink
  const cursorVisible = Math.floor(frame / 8) % 2 === 0;
  const activeLine = line1Done ? 2 : 1;

  // === SCENE 2: Scan line + grid (90–220) ===
  const scanProgress = interpolate(frame, [90, 180], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });

  const scanX = scanProgress * 1080;

  const gridOpacity = interpolate(frame, [100, 140], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const scene2Opacity = interpolate(frame, [90, 95, 200, 220], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const statsOpacity = interpolate(frame, [150, 175], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // === SCENE 3: End card (220–300) ===
  const scene3Opacity = interpolate(frame, [220, 240], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const deviceY = interpolate(frame, [225, 250], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const bonnOpacity = interpolate(frame, [255, 275], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        backgroundColor: BRAND.deepNavy,
        position: "relative",
        overflow: "hidden",
        fontFamily: FONTS.body,
      }}
    >
      {/* Subtle ambient gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at 50% 50%, rgba(85,134,149,0.08) 0%, transparent 70%)`,
        }}
      />

      {/* === SCENE 1: Typewriter === */}
      {frame < 95 && (
        <div
          style={{
            position: "absolute",
            top: SAFE.top,
            left: SAFE.left,
            right: SAFE.right,
            bottom: SAFE.bottom,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            opacity: scene1Opacity,
          }}
        >
          <div
            style={{
              fontFamily: FONTS.heading,
              fontSize: 52,
              color: BRAND.cream,
              textAlign: "center",
              lineHeight: 1.5,
              letterSpacing: "0.02em",
            }}
          >
            <div style={{ minHeight: 80 }}>
              {line1Text}
              {activeLine === 1 && cursorVisible && (
                <span style={{ color: CYAN, fontFamily: FONTS.mono }}>|</span>
              )}
            </div>
            <div style={{ minHeight: 80, marginTop: 16 }}>
              {line2Text}
              {activeLine === 2 && cursorVisible && (
                <span style={{ color: CYAN, fontFamily: FONTS.mono }}>|</span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* === SCENE 2: Scan + Grid === */}
      {frame >= 90 && frame < 225 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: scene2Opacity,
          }}
        >
          {/* Grid lines — vertical */}
          {GRID_LINES_V.map((x) => {
            const lineVisible = scanX >= x;
            return (
              <div
                key={`v-${x}`}
                style={{
                  position: "absolute",
                  left: x,
                  top: SAFE.top,
                  width: 1,
                  height: 1920 - SAFE.top - SAFE.bottom,
                  backgroundColor: CYAN_DIM,
                  opacity: lineVisible ? gridOpacity : 0,
                  transition: "opacity 0.2s",
                }}
              />
            );
          })}

          {/* Grid lines — horizontal */}
          {GRID_LINES_H.map((y) => (
            <div
              key={`h-${y}`}
              style={{
                position: "absolute",
                left: SAFE.left,
                top: y,
                width: 1080 - SAFE.left - SAFE.right,
                height: 1,
                backgroundColor: CYAN_DIM,
                opacity: gridOpacity,
              }}
            />
          ))}

          {/* Coordinates at grid intersections */}
          {GRID_COORDS.map((coord) => {
            const coordVisible = scanX >= coord.x;
            const coordDelay = (coord.x / 1080) * 60 + 110;
            const coordOpacity = interpolate(frame, [coordDelay, coordDelay + 15], [0, 0.8], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            return coordVisible ? (
              <div
                key={coord.label}
                style={{
                  position: "absolute",
                  left: coord.x - 16,
                  top: coord.y - 10,
                  fontFamily: FONTS.mono,
                  fontSize: 18,
                  color: CYAN,
                  opacity: coordOpacity,
                  letterSpacing: "0.05em",
                }}
              >
                {coord.label}
              </div>
            ) : null;
          })}

          {/* Scan line */}
          {scanProgress < 1 && (
            <div
              style={{
                position: "absolute",
                left: scanX - 3,
                top: SAFE.top - 20,
                width: 6,
                height: 1920 - SAFE.top - SAFE.bottom + 40,
                backgroundColor: CYAN,
                boxShadow: `0 0 30px 15px ${CYAN_GLOW}, 0 0 80px 40px rgba(0,229,255,0.15)`,
                borderRadius: 3,
              }}
            />
          )}

          {/* Stats text */}
          <div
            style={{
              position: "absolute",
              left: SAFE.left + 40,
              right: SAFE.right + 40,
              bottom: SAFE.bottom + 80,
              opacity: statsOpacity,
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: FONTS.heading,
                fontSize: 42,
                color: BRAND.cream,
                lineHeight: 1.6,
                letterSpacing: "0.01em",
              }}
            >
              92 Kameras. 3 Sekunden.
            </div>
            <div
              style={{
                fontFamily: FONTS.heading,
                fontSize: 42,
                color: CYAN,
                lineHeight: 1.6,
                marginTop: 8,
              }}
            >
              Vollständige Kartierung.
            </div>
          </div>
        </div>
      )}

      {/* === SCENE 3: End card === */}
      {frame >= 220 && (
        <div
          style={{
            position: "absolute",
            top: SAFE.top,
            left: SAFE.left,
            right: SAFE.right,
            bottom: SAFE.bottom,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            opacity: scene3Opacity,
          }}
        >
          <div
            style={{
              transform: `translateY(${deviceY}px)`,
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: FONTS.mono,
                fontSize: 36,
                color: CYAN,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Canfield IntelliStudio
            </div>
            {/* Separator */}
            <div
              style={{
                width: 200,
                height: 1,
                backgroundColor: CYAN_GLOW,
                margin: "0 auto 20px",
              }}
            />
            <div
              style={{
                fontFamily: FONTS.mono,
                fontSize: 30,
                color: BRAND.teal,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Vectra WB360
            </div>
          </div>

          {/* DERMAMEDICUM · BONN */}
          <div
            style={{
              marginTop: 100,
              opacity: bonnOpacity,
              textAlign: "center",
            }}
          >
            <Img
              src={staticFile(LOGO.light)}
              style={{ width: 280, marginBottom: 24 }}
            />
            <div
              style={{
                fontFamily: FONTS.body,
                fontSize: 22,
                color: BRAND.midGray,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
              }}
            >
              DERMAMEDICUM · BONN
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
