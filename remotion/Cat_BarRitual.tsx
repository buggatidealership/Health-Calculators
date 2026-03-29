import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
// CATALOG — RESTAURANT/BAR: THE RITUAL
// ASMR close-up of cocktail preparation
// Warm tones, liquid textures, no voice, sensory-first
// One text card at the very end

export const Cat_BarRitual: React.FC = () => {
  const frame = useCurrentFrame();

  // Slow zoom in
  const zoom = interpolate(frame, [0, 420], [1, 1.1], { extrapolateRight: "clamp" });

  // Liquid pour animation — abstract shapes representing flow
  const pourY = interpolate(frame, [60, 180], [-200, 600], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.inOut(Easing.cubic) });
  const pourOpacity = interpolate(frame, [60, 80, 160, 180], [0, 0.7, 0.7, 0.3], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Foam rise
  const foamY = interpolate(frame, [190, 280], [800, 650], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });
  const foamScale = interpolate(frame, [190, 280], [0.5, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Warm ambient pulse
  const warmth = 0.03 + 0.015 * Math.sin(frame * 0.025);

  const sceneVis = (start: number, end: number, fi = 25, fo = 20) => ({
    opacity: Math.min(
      interpolate(frame, [start, start + fi], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
      interpolate(frame, [end, end + fo], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
    ),
  });

  return (
    <div style={{
      width: 1080, height: 1920,
      background: "#0f0a05",
      overflow: "hidden", position: "relative",
      fontFamily: "'Inter', sans-serif",
    }}>

      {/* Warm ambient background */}
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(ellipse at 50% 40%, rgba(180,120,60,${warmth}) 0%, transparent 60%)`,
      }} />

      {/* Glass shape — abstract tall rectangle representing a cocktail glass */}
      <div style={{
        position: "absolute",
        left: "50%", top: "25%",
        transform: `translateX(-50%) scale(${zoom})`,
        width: 200, height: 700,
        background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "8px 8px 4px 4px",
      }}>
        {/* Liquid inside glass */}
        <div style={{
          position: "absolute", bottom: 0, left: 2, right: 2,
          height: interpolate(frame, [80, 250], [0, 500], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
          background: "linear-gradient(180deg, rgba(139,69,19,0.6), rgba(101,67,33,0.8))",
          borderRadius: "0 0 3px 3px",
          transition: "height 0.1s",
        }} />

        {/* Foam layer */}
        <div style={{
          position: "absolute", left: 2, right: 2,
          top: interpolate(frame, [200, 300], [500, 180], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
          height: 30,
          background: "linear-gradient(180deg, rgba(255,240,220,0.5), rgba(200,170,130,0.3))",
          borderRadius: 4,
          opacity: interpolate(frame, [200, 230], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
        }} />
      </div>

      {/* Pour stream */}
      <div style={{
        position: "absolute",
        left: "50%", top: pourY,
        transform: "translateX(-50%)",
        width: 8, height: 300,
        background: "linear-gradient(180deg, rgba(180,120,60,0.6), transparent)",
        borderRadius: 4,
        opacity: pourOpacity,
      }} />

      {/* Droplet particles */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const startF = 120 + i * 20;
        const x = 500 + (i % 2 === 0 ? -1 : 1) * (20 + i * 10);
        return (
          <div key={i} style={{
            position: "absolute", left: x,
            top: interpolate(frame, [startF, startF + 30], [650, 750 + i * 20], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
            width: 6, height: 6, borderRadius: "50%",
            background: "rgba(180,140,80,0.4)",
            opacity: interpolate(frame, [startF, startF + 5, startF + 25, startF + 30], [0, 0.6, 0.6, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
          }} />
        );
      })}

      {/* Bar counter surface */}
      <div style={{
        position: "absolute", left: 0, right: 0, bottom: 0, height: 500,
        background: "linear-gradient(0deg, rgba(30,20,10,0.95) 0%, rgba(30,20,10,0.6) 50%, transparent 100%)",
      }} />

      {/* Light reflections on counter */}
      {[0, 1, 2].map((i) => (
        <div key={`ref-${i}`} style={{
          position: "absolute",
          left: 200 + i * 250,
          bottom: 450,
          width: 100 + i * 30, height: 2,
          background: "rgba(255,200,120,0.1)",
          borderRadius: 1,
          opacity: interpolate(frame, [50 + i * 30, 70 + i * 30], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
        }} />
      ))}

      {/* Text — appears very late, minimal */}
      <div style={{
        position: "absolute", left: 60, right: 150, bottom: 520,
        ...sceneVis(320, 420, 30, 1),
      }}>
        <div style={{
          fontSize: 44, color: "rgba(255,200,120,0.5)",
          fontWeight: 300, fontStyle: "italic", lineHeight: 1.5,
          letterSpacing: 1,
        }}>
          Espresso Martini.
        </div>
        <div style={{
          fontSize: 34, color: "rgba(255,200,120,0.25)",
          fontWeight: 300, marginTop: 8,
        }}>
          Made, not mixed.
        </div>
      </div>

      {/* CTA */}
      <div style={{
        position: "absolute", left: 60, bottom: 500,
        opacity: interpolate(frame, [380, 400], [0, 0.4], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
      }}>
        <div style={{
          fontSize: 26, color: "rgba(255,200,120,0.3)",
          letterSpacing: 5, textTransform: "uppercase",
        }}>
          YOUR BAR · YOUR CITY
        </div>
      </div>
    </div>
  );
};
