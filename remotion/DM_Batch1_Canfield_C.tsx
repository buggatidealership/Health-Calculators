/**
 * DM_Batch1_Canfield_C.tsx — "Digital Twin"
 * DermaMedicum × Canfield Vectra WB360
 *
 * Longitudinal tracking — your skin over years.
 * Body silhouette with mole detection, magnifier effect.
 * 360 frames / 12s @ 30fps / 1080×1920
 */

import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
import { BRAND, FONTS, SAFE, LOGO } from "./derma-brand";

const CYAN = "#00E5FF";

interface Mole {
  x: number;
  y: number;
  r: number;
  highlight?: boolean;
}

const MOLES: Mole[] = [
  { x: 38, y: 22, r: 4 },
  { x: 62, y: 18, r: 3 },
  { x: 30, y: 45, r: 5 },
  { x: 70, y: 40, r: 3.5 },
  { x: 45, y: 55, r: 4 },
  { x: 55, y: 65, r: 3 },
  { x: 35, y: 70, r: 4.5 },
  { x: 65, y: 75, r: 3 },
  { x: 50, y: 35, r: 5, highlight: true }, // The one that changes
  { x: 42, y: 80, r: 3.5 },
  { x: 58, y: 85, r: 4 },
];

const HIGHLIGHT_MOLE = MOLES.find((m) => m.highlight)!;

// Body silhouette dimensions (centered in content area)
const BODY_WIDTH = 400;
const BODY_CENTER_X = 540;
const BODY_TOP = 500;

export const DM_Batch1_Canfield_C: React.FC = () => {
  const frame = useCurrentFrame();

  // === SCENE 1: Hook (0–80) ===
  const line1Opacity = interpolate(frame, [0, 10, 35, 42], [0, 1, 1, 0.3], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const line1Y = interpolate(frame, [0, 15], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const line2Opacity = interpolate(frame, [45, 58, 65, 80], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const line2Y = interpolate(frame, [45, 60], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const scene1Opacity = interpolate(frame, [70, 80], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // === SCENE 2: Body silhouette + mole detection (80–200) ===
  const scene2Opacity = interpolate(frame, [80, 95, 185, 200], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const bodyOpacity = interpolate(frame, [85, 105], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const molesOpacity = interpolate(frame, [100, 120], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Highlight pulse
  const pulsePhase = Math.sin((frame - 110) * 0.15) * 0.5 + 0.5;
  const highlightScale = frame >= 115 ? 1 + pulsePhase * 0.6 : 1;
  const highlightGlow = frame >= 115 ? pulsePhase : 0;

  // Magnifier
  const magOpacity = interpolate(frame, [130, 145], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const magScale = interpolate(frame, [130, 150], [0.5, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // Measurement text
  const measureOpacity = interpolate(frame, [150, 165], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // === SCENE 3: Key message + scan line (200–280) ===
  const scene3Opacity = interpolate(frame, [200, 215, 265, 280], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const scene3ScanProgress = interpolate(frame, [210, 260], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const textY = interpolate(frame, [200, 220], [40, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // === SCENE 4: Logo end card (280–360) ===
  const scene4Opacity = interpolate(frame, [280, 300], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const logoScale = interpolate(frame, [285, 310], [0.9, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // Convert mole percentage coords to absolute
  const moleToAbs = (m: Mole) => ({
    x: BODY_CENTER_X - BODY_WIDTH / 2 + (m.x / 100) * BODY_WIDTH,
    y: BODY_TOP + (m.y / 100) * 700,
  });

  const highlightAbs = moleToAbs(HIGHLIGHT_MOLE);

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
      {/* === SCENE 1: Hook === */}
      {frame < 85 && (
        <div
          style={{
            position: "absolute",
            top: SAFE.top,
            left: SAFE.left + 40,
            right: SAFE.right + 40,
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
              fontSize: 50,
              color: BRAND.cream,
              textAlign: "center",
              lineHeight: 1.5,
              opacity: line1Opacity,
              transform: `translateY(${line1Y}px)`,
            }}
          >
            Ihr Hautarzt sieht Sie einmal im Jahr.
          </div>
          <div
            style={{
              fontFamily: FONTS.heading,
              fontSize: 50,
              color: BRAND.teal,
              textAlign: "center",
              lineHeight: 1.5,
              marginTop: 40,
              opacity: line2Opacity,
              transform: `translateY(${line2Y}px)`,
            }}
          >
            Erkennen Sie die Veränderung?
          </div>
        </div>
      )}

      {/* === SCENE 2: Body silhouette + detection === */}
      {frame >= 80 && frame < 205 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: scene2Opacity,
          }}
        >
          {/* Body silhouette — CSS shapes */}
          <div
            style={{
              position: "absolute",
              left: BODY_CENTER_X - BODY_WIDTH / 2,
              top: BODY_TOP,
              width: BODY_WIDTH,
              opacity: bodyOpacity,
            }}
          >
            {/* Head */}
            <div
              style={{
                width: 100,
                height: 120,
                borderRadius: "50%",
                border: `2px solid ${BRAND.midGray}`,
                backgroundColor: "rgba(147,148,162,0.06)",
                margin: "0 auto",
              }}
            />
            {/* Neck */}
            <div
              style={{
                width: 40,
                height: 30,
                backgroundColor: "rgba(147,148,162,0.06)",
                border: `2px solid ${BRAND.midGray}`,
                borderTop: "none",
                margin: "0 auto",
              }}
            />
            {/* Torso */}
            <div
              style={{
                width: 240,
                height: 300,
                borderRadius: 40,
                border: `2px solid ${BRAND.midGray}`,
                backgroundColor: "rgba(147,148,162,0.06)",
                margin: "0 auto",
              }}
            />
            {/* Left arm */}
            <div
              style={{
                position: "absolute",
                left: 30,
                top: 160,
                width: 40,
                height: 200,
                borderRadius: 20,
                border: `2px solid ${BRAND.midGray}`,
                backgroundColor: "rgba(147,148,162,0.04)",
                transform: "rotate(10deg)",
              }}
            />
            {/* Right arm */}
            <div
              style={{
                position: "absolute",
                right: 30,
                top: 160,
                width: 40,
                height: 200,
                borderRadius: 20,
                border: `2px solid ${BRAND.midGray}`,
                backgroundColor: "rgba(147,148,162,0.04)",
                transform: "rotate(-10deg)",
              }}
            />
            {/* Left leg */}
            <div
              style={{
                position: "absolute",
                left: 100,
                top: 440,
                width: 50,
                height: 250,
                borderRadius: 25,
                border: `2px solid ${BRAND.midGray}`,
                backgroundColor: "rgba(147,148,162,0.04)",
                transform: "rotate(3deg)",
              }}
            />
            {/* Right leg */}
            <div
              style={{
                position: "absolute",
                right: 100,
                top: 440,
                width: 50,
                height: 250,
                borderRadius: 25,
                border: `2px solid ${BRAND.midGray}`,
                backgroundColor: "rgba(147,148,162,0.04)",
                transform: "rotate(-3deg)",
              }}
            />
          </div>

          {/* Moles */}
          {MOLES.map((mole, i) => {
            const pos = moleToAbs(mole);
            const isHighlight = mole.highlight;
            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: pos.x - mole.r * (isHighlight ? highlightScale : 1),
                  top: pos.y - mole.r * (isHighlight ? highlightScale : 1),
                  width: mole.r * 2 * (isHighlight ? highlightScale : 1),
                  height: mole.r * 2 * (isHighlight ? highlightScale : 1),
                  borderRadius: "50%",
                  backgroundColor: isHighlight ? BRAND.error : BRAND.warmBrown,
                  opacity: molesOpacity,
                  boxShadow: isHighlight
                    ? `0 0 ${12 + highlightGlow * 20}px ${BRAND.error}${Math.round(highlightGlow * 180).toString(16).padStart(2, "0")}`
                    : "none",
                }}
              />
            );
          })}

          {/* Magnifying circle */}
          <div
            style={{
              position: "absolute",
              left: highlightAbs.x - 70,
              top: highlightAbs.y - 70,
              width: 140,
              height: 140,
              borderRadius: "50%",
              border: `2px solid ${CYAN}`,
              opacity: magOpacity,
              transform: `scale(${magScale})`,
              boxShadow: `0 0 20px rgba(0,229,255,0.2), inset 0 0 30px rgba(0,229,255,0.05)`,
            }}
          >
            {/* Crosshairs inside magnifier */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: 10,
                width: 1,
                height: 30,
                backgroundColor: `${CYAN}66`,
                transform: "translateX(-50%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: "50%",
                bottom: 10,
                width: 1,
                height: 30,
                backgroundColor: `${CYAN}66`,
                transform: "translateX(-50%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: 10,
                width: 30,
                height: 1,
                backgroundColor: `${CYAN}66`,
                transform: "translateY(-50%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                right: 10,
                width: 30,
                height: 1,
                backgroundColor: `${CYAN}66`,
                transform: "translateY(-50%)",
              }}
            />
          </div>

          {/* Magnifier connecting line + label */}
          <div
            style={{
              position: "absolute",
              left: highlightAbs.x + 80,
              top: highlightAbs.y - 20,
              opacity: measureOpacity,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            {/* Horizontal connecting line */}
            <div
              style={{
                width: 60,
                height: 1,
                backgroundColor: CYAN,
              }}
            />
            <div>
              <div
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: 28,
                  color: BRAND.error,
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                }}
              >
                0,3mm
              </div>
              <div
                style={{
                  fontFamily: FONTS.body,
                  fontSize: 20,
                  color: BRAND.midGray,
                  marginTop: 4,
                }}
              >
                Veränderung in 12 Monaten
              </div>
            </div>
          </div>

          {/* Bottom label */}
          <div
            style={{
              position: "absolute",
              left: SAFE.left + 40,
              right: SAFE.right + 40,
              bottom: SAFE.bottom + 60,
              opacity: measureOpacity,
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: FONTS.mono,
                fontSize: 18,
                color: BRAND.midGray,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              AI-gestützte Veränderungserkennung
            </div>
          </div>
        </div>
      )}

      {/* === SCENE 3: Key message + scan line === */}
      {frame >= 200 && frame < 285 && (
        <div
          style={{
            position: "absolute",
            top: SAFE.top,
            left: SAFE.left + 40,
            right: SAFE.right + 40,
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
              fontFamily: FONTS.heading,
              fontSize: 48,
              color: BRAND.cream,
              textAlign: "center",
              lineHeight: 1.5,
              transform: `translateY(${textY}px)`,
              maxWidth: 800,
            }}
          >
            Vectra WB360 erkennt, was das Auge übersieht.
          </div>

          {/* Subtle scan line */}
          <div
            style={{
              width: 600,
              height: 2,
              marginTop: 50,
              position: "relative",
              backgroundColor: "rgba(0,229,255,0.1)",
              borderRadius: 1,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: `${scene3ScanProgress * 100}%`,
                top: -2,
                width: 80,
                height: 6,
                backgroundColor: CYAN,
                borderRadius: 3,
                boxShadow: `0 0 16px ${CYAN}88`,
                transform: "translateX(-50%)",
              }}
            />
          </div>
        </div>
      )}

      {/* === SCENE 4: Logo end card === */}
      {frame >= 280 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: BRAND.cream,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            opacity: scene4Opacity,
          }}
        >
          <div
            style={{
              transform: `scale(${logoScale})`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 32,
            }}
          >
            <Img
              src={staticFile(LOGO.dark)}
              style={{ width: 340, marginBottom: 20 }}
            />
            <div
              style={{
                fontFamily: FONTS.body,
                fontSize: 22,
                color: BRAND.darkGray,
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
