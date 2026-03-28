/**
 * DM_Batch1_Canfield_B.tsx — "Precision Data"
 * DermaMedicum × Canfield IntelliStudio
 *
 * Manual vs automated comparison — data visualization.
 * Clean split layout, animated stat bars.
 * 330 frames / 11s @ 30fps / 1080×1920
 */

import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
import { BRAND, FONTS, SAFE, LOGO } from "./derma-brand";

interface StatBarProps {
  label: string;
  width: number;
  color: string;
  opacity: number;
  delay: number;
  frame: number;
}

const StatBar: React.FC<StatBarProps> = ({ label, width, color, opacity, delay, frame }) => {
  const barWidth = interpolate(frame, [delay, delay + 30], [0, width], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const textOpacity = interpolate(frame, [delay + 10, delay + 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div style={{ opacity, marginBottom: 28 }}>
      <div
        style={{
          fontFamily: FONTS.body,
          fontSize: 22,
          color: BRAND.cream,
          marginBottom: 10,
          opacity: textOpacity,
          letterSpacing: "0.01em",
        }}
      >
        {label}
      </div>
      <div
        style={{
          width: "100%",
          height: 14,
          backgroundColor: "rgba(255,255,255,0.06)",
          borderRadius: 7,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${barWidth}%`,
            height: "100%",
            backgroundColor: color,
            borderRadius: 7,
            boxShadow: `0 0 12px ${color}44`,
          }}
        />
      </div>
    </div>
  );
};

export const DM_Batch1_Canfield_B: React.FC = () => {
  const frame = useCurrentFrame();

  // === SCENE 1: Hook (0–60) ===
  const hookOpacity = interpolate(frame, [0, 10, 45, 60], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const hookY = interpolate(frame, [0, 15], [40, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // === SCENE 2: Comparison (60–180) ===
  const scene2Opacity = interpolate(frame, [60, 75, 165, 180], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const leftColOpacity = interpolate(frame, [65, 80], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const rightColOpacity = interpolate(frame, [75, 90], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // === SCENE 3: Summary text (180–250) ===
  const scene3Opacity = interpolate(frame, [180, 195, 235, 250], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const line1Y = interpolate(frame, [180, 200], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const line2Opacity = interpolate(frame, [200, 215], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // === SCENE 4: CTA end card (250–330) ===
  const scene4Opacity = interpolate(frame, [250, 270], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const ctaScale = interpolate(frame, [260, 285], [0.95, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const COL_WIDTH = (1080 - SAFE.left - SAFE.right - 60) / 2; // 60px gap

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
      {frame < 65 && (
        <div
          style={{
            position: "absolute",
            top: SAFE.top,
            left: SAFE.left + 40,
            right: SAFE.right + 40,
            bottom: SAFE.bottom,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            opacity: hookOpacity,
            transform: `translateY(${hookY}px)`,
          }}
        >
          <div
            style={{
              fontFamily: FONTS.heading,
              fontSize: 54,
              color: BRAND.cream,
              textAlign: "center",
              lineHeight: 1.4,
            }}
          >
            Wie genau ist Ihre Hautkontrolle?
          </div>
        </div>
      )}

      {/* === SCENE 2: Comparison columns === */}
      {frame >= 60 && frame < 185 && (
        <div
          style={{
            position: "absolute",
            top: SAFE.top + 40,
            left: SAFE.left + 20,
            right: SAFE.right + 20,
            bottom: SAFE.bottom + 20,
            opacity: scene2Opacity,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Column headers */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 50,
              gap: 60,
            }}
          >
            {/* Left header */}
            <div
              style={{
                flex: 1,
                opacity: leftColOpacity,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: 36,
                  color: BRAND.warmBrown,
                  marginBottom: 8,
                }}
              >
                Klassisch
              </div>
              <div
                style={{
                  width: 60,
                  height: 3,
                  backgroundColor: BRAND.warmBrown,
                  margin: "0 auto",
                  borderRadius: 2,
                }}
              />
            </div>

            {/* Right header */}
            <div
              style={{
                flex: 1,
                opacity: rightColOpacity,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: 36,
                  color: BRAND.teal,
                  marginBottom: 8,
                }}
              >
                IntelliStudio
              </div>
              <div
                style={{
                  width: 60,
                  height: 3,
                  backgroundColor: BRAND.teal,
                  margin: "0 auto",
                  borderRadius: 2,
                }}
              />
            </div>
          </div>

          {/* Stat rows */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 60 }}>
            {/* Row 1: Dauer */}
            <div style={{ display: "flex", gap: 60 }}>
              <div style={{ flex: 1 }}>
                <StatBar
                  label="Dauer: ~90 Minuten"
                  width={85}
                  color={BRAND.warmBrown}
                  opacity={leftColOpacity}
                  delay={85}
                  frame={frame}
                />
              </div>
              <div style={{ flex: 1 }}>
                <StatBar
                  label="Dauer: < 2 Minuten"
                  width={8}
                  color={BRAND.teal}
                  opacity={rightColOpacity}
                  delay={90}
                  frame={frame}
                />
              </div>
            </div>

            {/* Row 2: Reproduzierbarkeit */}
            <div style={{ display: "flex", gap: 60 }}>
              <div style={{ flex: 1 }}>
                <StatBar
                  label="Reproduzierbarkeit: variabel"
                  width={40}
                  color={BRAND.warmBrown}
                  opacity={leftColOpacity}
                  delay={100}
                  frame={frame}
                />
              </div>
              <div style={{ flex: 1 }}>
                <StatBar
                  label="Reproduzierbarkeit: 100%"
                  width={100}
                  color={BRAND.teal}
                  opacity={rightColOpacity}
                  delay={105}
                  frame={frame}
                />
              </div>
            </div>

            {/* Row 3: Abdeckung */}
            <div style={{ display: "flex", gap: 60 }}>
              <div style={{ flex: 1 }}>
                <StatBar
                  label="Abdeckung: teilweise"
                  width={45}
                  color={BRAND.warmBrown}
                  opacity={leftColOpacity}
                  delay={115}
                  frame={frame}
                />
              </div>
              <div style={{ flex: 1 }}>
                <StatBar
                  label="Abdeckung: vollständig"
                  width={100}
                  color={BRAND.teal}
                  opacity={rightColOpacity}
                  delay={120}
                  frame={frame}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* === SCENE 3: Summary === */}
      {frame >= 180 && frame < 255 && (
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
              fontSize: 46,
              color: BRAND.cream,
              textAlign: "center",
              lineHeight: 1.5,
              transform: `translateY(${line1Y}px)`,
            }}
          >
            Standardisierte Bildgebung.
          </div>
          <div
            style={{
              fontFamily: FONTS.heading,
              fontSize: 46,
              color: BRAND.teal,
              textAlign: "center",
              lineHeight: 1.5,
              marginTop: 16,
              opacity: line2Opacity,
            }}
          >
            Automatische Verlaufskontrolle.
          </div>
        </div>
      )}

      {/* === SCENE 4: CTA end card === */}
      {frame >= 250 && (
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
              transform: `scale(${ctaScale})`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 40,
            }}
          >
            <Img
              src={staticFile(LOGO.dark)}
              style={{ width: 320, marginBottom: 16 }}
            />
            <div
              style={{
                fontFamily: FONTS.heading,
                fontSize: 38,
                color: BRAND.navy,
                textAlign: "center",
                lineHeight: 1.5,
                maxWidth: 700,
              }}
            >
              Beratungstermin vereinbaren
            </div>
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
