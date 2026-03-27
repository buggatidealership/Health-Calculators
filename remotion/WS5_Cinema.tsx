import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
// WHITE SPACE REEL 5: CINEMA MINUTE
// Single spotlight. High contrast. Near-silence. Documentary pacing.
// The visual production standard is CINEMATIC, not corporate.
// Silence signals confidence. Nothing looks like any other healthcare Reel.
// Breaks: upbeat music, fast cuts, bright colors, templates.
// Color: deep shadows, warm golden key light, black.

export const WS5_Cinema: React.FC = () => {
  const frame = useCurrentFrame();

  // Very slow fade-ins — documentary pacing
  const slowFade = (s: number, d = 35) => ({
    opacity: interpolate(frame, [s, s+d], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
  });

  // Slight image drift — cinematic subtle motion
  const drift = interpolate(frame, [0, 450], [0, -15], { extrapolateRight: "clamp" });

  return (
    <div style={{
      width: 1080, height: 1920,
      background: "#0a0a0a", // PURE BLACK — not navy, black
      overflow: "hidden", position: "relative",
      fontFamily: "'DM Serif Display', Georgia, serif",
    }}>

      {/* Cinematic image — slow drift */}
      <div style={{
        position: "absolute", left: 0, right: 0, top: 250, height: 900,
        overflow: "hidden",
      }}>
        <Img src={staticFile("characters/ws-cinema-hands.png")} style={{
          width: "100%", height: "100%", objectFit: "cover",
          transform: `translateY(${drift}px)`,
          ...slowFade(0, 40),
        }} />
        {/* Gradient fade to black at top and bottom */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 150,
          background: "linear-gradient(180deg, #0a0a0a, transparent)",
        }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 200,
          background: "linear-gradient(0deg, #0a0a0a, transparent)",
        }} />
      </div>

      {/* Text — slow, deliberate, minimal. Below the image. */}
      {/* Line 1 — fact */}
      <div style={{
        position: "absolute", left: 80, right: 200, top: 1200,
        ...slowFade(80, 40),
      }}>
        <div style={{
          fontSize: 60, color: "#b0a090", fontWeight: 400, lineHeight: 1.6,
          fontStyle: "italic",
        }}>
          Ein Muttermal verändert sich.
        </div>
      </div>

      {/* Line 2 — question */}
      <div style={{
        position: "absolute", left: 80, right: 200, top: 1200,
        opacity: interpolate(frame, [160, 195, 270, 290], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
      }}>
        <div style={{
          fontSize: 64, color: "#e0d0c0", fontWeight: 400, lineHeight: 1.5,
        }}>
          Wann hast du es zuletzt untersuchen lassen?
        </div>
      </div>

      {/* Line 3 — recommendation */}
      <div style={{
        position: "absolute", left: 80, right: 200, top: 1180,
        ...slowFade(300, 35),
      }}>
        <div style={{
          fontSize: 56, color: "#8a7a6a", fontWeight: 400, lineHeight: 1.6,
        }}>
          Hautkrebsvorsorge.
        </div>
        <div style={{
          fontSize: 60, color: "#d4a853", fontWeight: 400, lineHeight: 1.6,
          fontStyle: "italic", marginTop: 10,
        }}>
          Einmal im Jahr. Das reicht.
        </div>
      </div>

      {/* CTA — barely there. The restraint IS the brand. */}
      <div style={{
        position: "absolute", left: 80, bottom: 500,
        ...slowFade(390, 30),
      }}>
        <div style={{
          fontSize: 34, color: "#4a4a4a", letterSpacing: 4,
          fontFamily: "'Inter', sans-serif", fontWeight: 300,
          textTransform: "uppercase",
        }}>
          DermaMedicum · Bonn
        </div>
      </div>
    </div>
  );
};
