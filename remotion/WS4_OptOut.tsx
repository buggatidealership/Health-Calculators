import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
// WHITE SPACE REEL 4: OPT-OUT DEEP READ
// Pure typography on white. Serif. Unhurried. One concept with precision.
// The SLOWNESS is the signal. Counter-programming.
// NO images. NO characters. NO emoji. NO color accents.
// Just beautiful words building on a clean background.
// Breaks: EVERYTHING — fast cuts, flashy graphics, talking head, templates.

export const WS4_OptOut: React.FC = () => {
  const frame = useCurrentFrame();

  const fadeIn = (s: number, d = 25) => ({
    opacity: interpolate(frame, [s, s+d], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
  });

  return (
    <div style={{
      width: 1080, height: 1920,
      background: "#fefcf9", // Near white — warm, not sterile
      overflow: "hidden", position: "relative",
      fontFamily: "'DM Serif Display', Georgia, serif",
    }}>
      {/* No ambient. No grain. No effects. The absence IS the design. */}

      {/* Content lives in safe zone: top 288, bottom 480, right 120 */}
      <div style={{
        position: "absolute", left: 80, right: 200, top: 350, bottom: 500,
        display: "flex", flexDirection: "column",
        justifyContent: "center",
      }}>

        {/* Line 1 */}
        <div style={{
          ...fadeIn(10, 30),
          fontSize: 72, color: "#2d2d2d", fontWeight: 400,
          lineHeight: 1.7, marginBottom: 0,
        }}>
          Retinol ist der
        </div>

        {/* Line 2 */}
        <div style={{
          ...fadeIn(40, 30),
          fontSize: 72, color: "#2d2d2d", fontWeight: 400,
          lineHeight: 1.7,
        }}>
          am besten erforschte
        </div>

        {/* Line 3 */}
        <div style={{
          ...fadeIn(70, 30),
          fontSize: 72, color: "#2d2d2d", fontWeight: 400,
          lineHeight: 1.7,
        }}>
          Anti-Aging-Wirkstoff
        </div>

        {/* Line 4 */}
        <div style={{
          ...fadeIn(100, 30),
          fontSize: 72, color: "#2d2d2d", fontWeight: 400,
          lineHeight: 1.7,
        }}>
          der Welt.
        </div>

        {/* Pause — let it breathe. Then the expansion. */}

        {/* Line 5 */}
        <div style={{
          ...fadeIn(170, 30),
          fontSize: 64, color: "#6b6b6b", fontWeight: 400,
          lineHeight: 1.7, marginTop: 60,
        }}>
          Es beschleunigt den
        </div>
        <div style={{
          ...fadeIn(200, 30),
          fontSize: 64, color: "#6b6b6b", fontWeight: 400,
          lineHeight: 1.7,
        }}>
          Zellumsatz. Stimuliert
        </div>
        <div style={{
          ...fadeIn(230, 30),
          fontSize: 64, color: "#6b6b6b", fontWeight: 400,
          lineHeight: 1.7,
        }}>
          Kollagen. Reduziert
        </div>
        <div style={{
          ...fadeIn(260, 30),
          fontSize: 64, color: "#6b6b6b", fontWeight: 400,
          lineHeight: 1.7,
        }}>
          Pigmentflecken.
        </div>

        {/* The turn */}
        <div style={{
          ...fadeIn(330, 30),
          fontSize: 72, color: "#2d2d2d", fontWeight: 400,
          lineHeight: 1.7, marginTop: 60,
          fontStyle: "italic",
        }}>
          Aber nur, wenn du
        </div>
        <div style={{
          ...fadeIn(360, 30),
          fontSize: 72, color: "#2d2d2d", fontWeight: 400,
          lineHeight: 1.7,
          fontStyle: "italic",
        }}>
          es richtig anwendest.
        </div>

        {/* CTA — same calm energy */}
        <div style={{
          ...fadeIn(420, 25),
          fontSize: 44, color: "#a0a0a0",
          marginTop: 80, fontFamily: "'Inter', sans-serif",
          fontWeight: 400, letterSpacing: 3,
        }}>
          DERMAMEDICUM · BONN
        </div>
      </div>
    </div>
  );
};
