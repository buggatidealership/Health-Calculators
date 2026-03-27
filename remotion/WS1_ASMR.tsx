import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
// WHITE SPACE REEL 1: ASMR TEXTURE
// NO talking. NO characters. NO serif text. NO dark navy.
// PURE sensory: macro skin/serum, minimal text, slow.
// Breaks: talking head, before/after, pointing at text, provider intro.
// Color: warm golden, cream, soft. Anti-clinical.

export const WS1_ASMR: React.FC = () => {
  const frame = useCurrentFrame();

  // Slow zoom — the whole Reel gently pushes in
  const zoom = interpolate(frame, [0, 300], [1, 1.08], { extrapolateRight: "clamp" });
  // Warm ambient pulse
  const warmPulse = 0.06 + 0.02 * Math.sin(frame * 0.04);

  const fadeIn = (s: number, d = 20) => ({
    opacity: interpolate(frame, [s, s+d], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
  });

  return (
    <div style={{
      width: 1080, height: 1920,
      background: "#f7f0e6", // WARM CREAM — not dark navy
      overflow: "hidden", position: "relative",
      fontFamily: "'Inter', sans-serif",
    }}>
      {/* Full-screen texture image — slow zoom */}
      <div style={{
        position: "absolute", inset: -50, // overflow for zoom
        transform: `scale(${zoom})`, transformOrigin: "center center",
      }}>
        <Img src={staticFile("characters/ws-asmr-texture.png")} style={{
          width: "100%", height: "100%", objectFit: "cover",
        }} />
      </div>

      {/* Warm overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: `rgba(247,240,230,${warmPulse})`,
        pointerEvents: "none",
      }} />

      {/* Vignette */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at center, transparent 50%, rgba(100,70,30,0.15) 100%)",
        pointerEvents: "none",
      }} />

      {/* Text overlays — minimal, luxurious, appearing slowly */}
      {/* Safe zone: content between y=288 and y=1440, right 120px margin */}

      {/* Scene 1: Just the texture + one word (0-120) */}
      <div style={{
        position: "absolute", left: 60, bottom: 520,
        ...fadeIn(40, 30),
      }}>
        <div style={{
          fontSize: 36, color: "rgba(80,50,20,0.6)",
          letterSpacing: 8, textTransform: "uppercase",
          fontWeight: 300,
        }}>
          HYALURONSÄURE
        </div>
      </div>

      {/* Scene 2: What it does (120-200) */}
      <div style={{
        position: "absolute", left: 60, right: 180, bottom: 520,
        ...fadeIn(130, 25),
      }}>
        <div style={{
          fontSize: 52, color: "rgba(60,40,15,0.85)",
          fontWeight: 300, lineHeight: 1.6,
          letterSpacing: 1,
        }}>
          Bindet das 1000-fache seines Eigengewichts an Wasser.
        </div>
      </div>

      {/* Scene 3: The feeling (200-260) */}
      <div style={{
        position: "absolute", left: 60, right: 180, bottom: 520,
        opacity: interpolate(frame, [210, 235, 260, 280], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
      }}>
        <div style={{
          fontSize: 48, color: "rgba(60,40,15,0.7)",
          fontWeight: 300, fontStyle: "italic", lineHeight: 1.6,
        }}>
          Deine Haut trinkt.
        </div>
      </div>

      {/* Scene 4: CTA — subtle (260-300) */}
      <div style={{
        position: "absolute", left: 60, right: 180, bottom: 520,
        ...fadeIn(270, 20),
      }}>
        <div style={{
          fontSize: 32, color: "rgba(80,50,20,0.5)",
          letterSpacing: 6, textTransform: "uppercase",
          fontWeight: 400,
        }}>
          DERMAMEDICUM · BONN
        </div>
      </div>
    </div>
  );
};
