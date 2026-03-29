import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
// DERMAMEDICUM ASMR v2: Ceramide — sensory texture Reel
// Fixed: proper scene transitions (no overlap)
// Extended: 6 scenes across 15s (450 frames)
// No talking. Text overlay only. Warm cream palette.

export const DM_ASMR: React.FC = () => {
  const frame = useCurrentFrame();

  // Slow zoom — cinematic push
  const zoom = interpolate(frame, [0, 450], [1, 1.12], { extrapolateRight: "clamp" });
  // Warm pulse
  const warmPulse = 0.05 + 0.02 * Math.sin(frame * 0.03);

  // Proper scene visibility with fade in AND fade out
  const sceneVis = (start: number, end: number, fadeIn = 25, fadeOut = 20) => {
    if (frame < start - 1 || frame > end + fadeOut + 1) return { opacity: 0, pointerEvents: "none" as const };
    const opacity = Math.min(
      interpolate(frame, [start, start + fadeIn], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
      interpolate(frame, [end, end + fadeOut], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
    );
    return { opacity, pointerEvents: (opacity > 0 ? "auto" : "none") as "auto" | "none" };
  };

  return (
    <div style={{
      width: 1080, height: 1920,
      background: "#f7f0e6",
      overflow: "hidden", position: "relative",
      fontFamily: "'Inter', sans-serif",
    }}>
      {/* Full-screen texture — slow zoom */}
      <div style={{
        position: "absolute", inset: -60,
        transform: `scale(${zoom})`, transformOrigin: "50% 40%",
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
        background: "radial-gradient(ellipse at center, transparent 40%, rgba(100,70,30,0.2) 100%)",
        pointerEvents: "none",
      }} />

      {/* Text backdrop — frosted glass at bottom for readability */}
      <div style={{
        position: "absolute", left: 0, right: 0, bottom: 0, height: 600,
        background: "linear-gradient(0deg, rgba(247,240,230,0.85) 0%, rgba(247,240,230,0.6) 50%, transparent 100%)",
        pointerEvents: "none",
      }} />

      {/* ═══ Scene 1: Just texture + ingredient name (0-80) ═══ */}
      <div style={{
        position: "absolute", left: 60, right: 180, bottom: 520,
        ...sceneVis(0, 80),
      }}>
        <div style={{
          fontSize: 38, color: "#4a3020",
          letterSpacing: 10, textTransform: "uppercase", fontWeight: 300,
          textShadow: "0 1px 8px rgba(247,240,230,0.8)",
        }}>
          CERAMIDE
        </div>
      </div>

      {/* ═══ Scene 2: What it is (85-160) ═══ */}
      <div style={{
        position: "absolute", left: 60, right: 180, bottom: 520,
        ...sceneVis(85, 160),
      }}>
        <div style={{
          fontSize: 48, color: "#2a1a08",
          fontWeight: 400, lineHeight: 1.6, letterSpacing: 1,
          textShadow: "0 1px 12px rgba(247,240,230,0.9)",
        }}>
          Der Mörtel zwischen deinen Hautzellen.
        </div>
      </div>

      {/* ═══ Scene 3: What it does (165-235) ═══ */}
      <div style={{
        position: "absolute", left: 60, right: 180, bottom: 520,
        ...sceneVis(165, 235),
      }}>
        <div style={{
          fontSize: 44, color: "#2a1a08",
          fontWeight: 400, lineHeight: 1.6,
          textShadow: "0 1px 12px rgba(247,240,230,0.9)",
        }}>
          Ohne Ceramide verliert deine Haut Feuchtigkeit — Stunde für Stunde.
        </div>
      </div>

      {/* ═══ Scene 4: The stat (240-310) ═══ */}
      <div style={{
        position: "absolute", left: 60, right: 180, bottom: 520,
        ...sceneVis(240, 310),
      }}>
        <div style={{
          fontSize: 80, color: "#8a6020",
          fontWeight: 300, lineHeight: 1.3,
          fontStyle: "italic",
          textShadow: "0 2px 16px rgba(247,240,230,0.9)",
        }}>
          50%
        </div>
        <div style={{
          fontSize: 40, color: "#3a2a10",
          fontWeight: 400, lineHeight: 1.6, marginTop: 8,
          textShadow: "0 1px 10px rgba(247,240,230,0.8)",
        }}>
          weniger Ceramide ab 40.
        </div>
      </div>

      {/* ═══ Scene 5: The feeling (315-380) ═══ */}
      <div style={{
        position: "absolute", left: 60, right: 180, bottom: 520,
        ...sceneVis(315, 380),
      }}>
        <div style={{
          fontSize: 48, color: "#2a1a08",
          fontWeight: 400, fontStyle: "italic", lineHeight: 1.6,
          textShadow: "0 1px 12px rgba(247,240,230,0.9)",
        }}>
          Deine Barriere. Wiederhergestellt.
        </div>
      </div>

      {/* ═══ Scene 6: CTA (385-450) ═══ */}
      <div style={{
        position: "absolute", left: 60, right: 180, bottom: 520,
        ...sceneVis(385, 450, 20, 1),
      }}>
        <div style={{
          fontSize: 32, color: "#4a3020",
          letterSpacing: 6, textTransform: "uppercase", fontWeight: 400,
          textShadow: "0 1px 8px rgba(247,240,230,0.8)",
        }}>
          DERMAMEDICUM · BONN
        </div>
      </div>
    </div>
  );
};
