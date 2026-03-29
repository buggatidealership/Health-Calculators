import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
// DERMAMEDICUM SKETCH: Progressive SVG illustration
// Skin barrier drawn layer by layer — Khan Academy whiteboard style
// Topic: Hautbarriere — why it matters, how to protect it
// Clean white background, hand-drawn line aesthetic

export const DM_Sketch: React.FC = () => {
  const frame = useCurrentFrame();

  // SVG path drawing: returns dashoffset for progressive reveal
  const drawProgress = (start: number, duration: number, pathLength: number) => {
    const progress = interpolate(frame, [start, start + duration], [0, 1], {
      extrapolateLeft: "clamp", extrapolateRight: "clamp",
      easing: Easing.inOut(Easing.cubic),
    });
    return {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength * (1 - progress),
    };
  };

  const fadeIn = (s: number, d = 18) => ({
    opacity: interpolate(frame, [s, s + d], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    transform: `translateY(${interpolate(frame, [s, s + d], [15, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })}px)`,
  });

  const labelIn = (s: number, d = 14) => ({
    opacity: interpolate(frame, [s, s + d], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
  });

  // Pen dot that shows where drawing is happening
  const penDot = (startFrame: number, duration: number, x1: number, y1: number, x2: number, y2: number) => {
    const progress = interpolate(frame, [startFrame, startFrame + duration], [0, 1], {
      extrapolateLeft: "clamp", extrapolateRight: "clamp",
    });
    if (frame < startFrame || frame > startFrame + duration + 5) return null;
    return {
      cx: x1 + (x2 - x1) * progress,
      cy: y1 + (y2 - y1) * progress,
    };
  };

  return (
    <div style={{
      width: 1080, height: 1920,
      background: "#fefefe",
      overflow: "hidden", position: "relative",
      fontFamily: "'Inter', sans-serif",
    }}>
      {/* Subtle paper texture */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, #fefefe 0%, #f8f6f2 100%)",
      }} />

      {/* Title */}
      <div style={{
        position: "absolute", left: 60, right: 150, top: 300,
        ...fadeIn(5, 20),
      }}>
        <div style={{
          fontSize: 58, color: "#1a2744", fontWeight: 700,
          fontFamily: "'DM Serif Display', Georgia, serif",
        }}>
          Deine Hautbarriere.
        </div>
        <div style={{
          fontSize: 40, color: "#8b9ab5", fontWeight: 400, marginTop: 8,
          fontStyle: "italic",
        }}>
          Schicht für Schicht erklärt.
        </div>
      </div>

      {/* SVG Drawing Area — centered */}
      <svg
        width="900"
        height="800"
        viewBox="0 0 900 800"
        style={{
          position: "absolute",
          left: 60, top: 480,
        }}
      >
        {/* Layer 1: Stratum Corneum (outer) — drawn first */}
        <path
          d="M 100 120 C 200 100, 350 130, 450 115 C 550 100, 700 125, 800 110"
          fill="none"
          stroke="#d4a853"
          strokeWidth={5}
          strokeLinecap="round"
          {...drawProgress(40, 40, 750)}
        />
        <path
          d="M 100 155 C 200 140, 350 165, 450 150 C 550 138, 700 158, 800 145"
          fill="none"
          stroke="#d4a853"
          strokeWidth={4}
          strokeLinecap="round"
          {...drawProgress(50, 35, 750)}
        />
        {/* Brick pattern in stratum corneum */}
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <rect
            key={`brick-${i}`}
            x={120 + i * 95}
            y={118}
            width={80}
            height={30}
            rx={4}
            fill="none"
            stroke="#c49640"
            strokeWidth={2.5}
            opacity={interpolate(frame, [60 + i * 5, 65 + i * 5], [0, 0.7], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}
          />
        ))}

        {/* Label: Hornschicht */}
        <text
          x="810" y="140"
          fill="#d4a853"
          fontSize={28}
          fontFamily="Inter, sans-serif"
          fontWeight={600}
          opacity={interpolate(frame, [100, 112], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}
        >
          ←
        </text>

        {/* Layer 2: Lipid matrix (mortar) — drawn second */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <path
            key={`lipid-${i}`}
            d={`M ${140 + i * 100} 155 C ${155 + i * 100} 175, ${165 + i * 100} 195, ${160 + i * 100} 215`}
            fill="none"
            stroke="#6ec89b"
            strokeWidth={3}
            strokeLinecap="round"
            opacity={interpolate(frame, [120 + i * 6, 130 + i * 6], [0, 0.6], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}
            style={{
              ...drawProgress(120 + i * 6, 20, 80),
            }}
          />
        ))}

        {/* Layer 3: Deeper skin — epidermis cells */}
        <path
          d="M 100 260 C 200 250, 350 270, 450 258 C 550 248, 700 265, 800 255"
          fill="none"
          stroke="#1a2744"
          strokeWidth={3}
          strokeLinecap="round"
          opacity={0.4}
          {...drawProgress(165, 40, 750)}
        />

        {/* Cells in epidermis */}
        {[0, 1, 2, 3, 4].map((i) => (
          <ellipse
            key={`cell-${i}`}
            cx={180 + i * 130}
            cy={300}
            rx={50}
            ry={35}
            fill="none"
            stroke="#1a2744"
            strokeWidth={2}
            opacity={interpolate(frame, [190 + i * 8, 200 + i * 8], [0, 0.35], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}
          />
        ))}

        {/* Layer 4: Dermis — collagen fibers */}
        {[0, 1, 2, 3].map((i) => (
          <path
            key={`collagen-${i}`}
            d={`M ${150 + i * 160} 380 Q ${200 + i * 160} 420 ${180 + i * 160} 460 Q ${160 + i * 160} 500 ${190 + i * 160} 540`}
            fill="none"
            stroke="#e8785e"
            strokeWidth={3}
            strokeLinecap="round"
            opacity={interpolate(frame, [240 + i * 8, 255 + i * 8], [0, 0.5], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}
            style={{
              ...drawProgress(240 + i * 8, 30, 200),
            }}
          />
        ))}

        {/* Depth labels — appear with layers */}
        <text x="30" y="140" fill="#d4a853" fontSize={24} fontWeight={600}
          opacity={interpolate(frame, [100, 112], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}
          fontFamily="Inter, sans-serif"
        >
          Hornschicht
        </text>
        <text x="30" y="230" fill="#6ec89b" fontSize={24} fontWeight={600}
          opacity={interpolate(frame, [160, 172], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}
          fontFamily="Inter, sans-serif"
        >
          Lipidmatrix
        </text>
        <text x="30" y="310" fill="#1a2744" fontSize={24} fontWeight={600}
          opacity={interpolate(frame, [210, 222], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}
          fontFamily="Inter, sans-serif"
        >
          Epidermis
        </text>
        <text x="30" y="460" fill="#e8785e" fontSize={24} fontWeight={600}
          opacity={interpolate(frame, [270, 282], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}
          fontFamily="Inter, sans-serif"
        >
          Kollagen
        </text>

        {/* Damage arrows — what breaks the barrier */}
        <path
          d="M 450 20 L 450 100"
          fill="none"
          stroke="#ff4444"
          strokeWidth={4}
          markerEnd="url(#arrowRed)"
          opacity={interpolate(frame, [300, 315], [0, 0.8], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}
          {...drawProgress(300, 20, 80)}
        />
        <text x="380" y="18" fill="#ff4444" fontSize={26} fontWeight={700}
          opacity={interpolate(frame, [305, 318], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}
          fontFamily="Inter, sans-serif"
        >
          UV · Stress · Alter
        </text>

        {/* Arrow marker */}
        <defs>
          <marker id="arrowRed" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#ff4444" />
          </marker>
        </defs>

        {/* Protection shield — what repairs */}
        <path
          d="M 450 600 L 420 640 L 450 680 L 480 640 Z"
          fill="none"
          stroke="#4ade80"
          strokeWidth={4}
          opacity={interpolate(frame, [340, 355], [0, 0.8], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}
        />
        <text x="340" y="720" fill="#4ade80" fontSize={26} fontWeight={700}
          opacity={interpolate(frame, [350, 363], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}
          fontFamily="Inter, sans-serif"
        >
          Ceramide · SPF · Retinol
        </text>
      </svg>

      {/* Bottom text — the takeaway */}
      <div style={{
        position: "absolute", left: 60, right: 150, bottom: 520,
        ...fadeIn(370, 20),
      }}>
        <div style={{
          fontSize: 48, color: "#1a2744", fontWeight: 600, lineHeight: 1.4,
          fontFamily: "'DM Serif Display', Georgia, serif",
        }}>
          Schütze die Barriere —
        </div>
        <div style={{
          fontSize: 48, color: "#d4a853", fontWeight: 600, lineHeight: 1.4,
          fontFamily: "'DM Serif Display', Georgia, serif",
          fontStyle: "italic",
        }}>
          der Rest folgt von selbst.
        </div>
      </div>

      {/* CTA */}
      <div style={{
        position: "absolute", left: 60, bottom: 500,
        opacity: interpolate(frame, [410, 425], [0, 0.6], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
      }}>
        <div style={{
          fontSize: 28, color: "#8b9ab5", letterSpacing: 4,
          textTransform: "uppercase",
        }}>
          DermaMedicum · Bonn
        </div>
      </div>
    </div>
  );
};
