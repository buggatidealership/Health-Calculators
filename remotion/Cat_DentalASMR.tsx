import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
// CATALOG — DENTAL: SILENT PRECISION
// Cinematic ASMR — dark, single warm light, instruments, ambient
// No voice, no text until final moment. Pure visual confidence.

export const Cat_DentalASMR: React.FC = () => {
  const frame = useCurrentFrame();

  // Very slow zoom
  const zoom = interpolate(frame, [0, 450], [1, 1.06], { extrapolateRight: "clamp" });

  // Single warm light sweep
  const lightX = interpolate(frame, [0, 450], [30, 70], { extrapolateRight: "clamp" });
  const lightY = interpolate(frame, [0, 450], [25, 35], { extrapolateRight: "clamp" });

  const sceneVis = (start: number, end: number, fi = 30, fo = 25) => ({
    opacity: Math.min(
      interpolate(frame, [start, start + fi], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
      interpolate(frame, [end, end + fo], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
    ),
  });

  return (
    <div style={{
      width: 1080, height: 1920,
      background: "#0a0a0a",
      overflow: "hidden", position: "relative",
      fontFamily: "'Inter', sans-serif",
    }}>

      {/* Warm spotlight — moves slowly */}
      <div style={{
        position: "absolute",
        left: `${lightX}%`, top: `${lightY}%`,
        transform: "translate(-50%, -50%)",
        width: 800, height: 800, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,200,120,0.12) 0%, rgba(255,180,100,0.04) 40%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Simulated instrument shapes — abstract geometric representing tools */}
      {/* Instrument 1: Long thin line — explorer probe */}
      <div style={{
        position: "absolute", left: 200, top: 500,
        width: 4, height: 500,
        background: "linear-gradient(180deg, rgba(200,200,210,0.5), rgba(200,200,210,0.05))",
        transform: `rotate(-15deg) scale(${zoom})`,
        transformOrigin: "top center",
        borderRadius: 2,
        ...sceneVis(20, 200),
      }} />

      {/* Instrument 2: Mirror circle */}
      <div style={{
        position: "absolute", left: 380, top: 600,
        width: 120, height: 120, borderRadius: "50%",
        border: "2px solid rgba(200,200,210,0.2)",
        background: "radial-gradient(circle, rgba(255,255,255,0.04), transparent)",
        transform: `scale(${zoom})`,
        ...sceneVis(60, 250),
      }} />

      {/* Instrument 3: Curved scaler */}
      <svg width="300" height="400" style={{
        position: "absolute", left: 550, top: 450,
        ...sceneVis(100, 300),
      }}>
        <path d="M 20 350 Q 80 100, 150 20"
          fill="none" stroke="rgba(200,200,210,0.3)" strokeWidth="3" strokeLinecap="round"
        />
      </svg>

      {/* Gloved hand silhouette — abstract */}
      <div style={{
        position: "absolute", left: 150, top: 900,
        width: 700, height: 500,
        background: "radial-gradient(ellipse at 50% 30%, rgba(100,130,170,0.06), transparent 60%)",
        ...sceneVis(40, 350),
      }} />

      {/* Light reflection particles */}
      {[0, 1, 2, 3, 4].map((i) => {
        const px = 200 + i * 160;
        const py = 700 + Math.sin(i * 2) * 150;
        const delay = i * 40;
        return (
          <div key={i} style={{
            position: "absolute", left: px, top: py,
            width: 3, height: 3, borderRadius: "50%",
            background: "rgba(255,220,180,0.4)",
            opacity: interpolate(frame, [delay, delay + 20, delay + 80, delay + 100], [0, 0.6, 0.6, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
          }} />
        );
      })}

      {/* Bottom gradient for text */}
      <div style={{
        position: "absolute", left: 0, right: 0, bottom: 0, height: 600,
        background: "linear-gradient(0deg, rgba(10,10,10,0.95) 0%, transparent 100%)",
        pointerEvents: "none",
      }} />

      {/* Scene 1: Just ambient (0-150) — no text */}

      {/* Scene 2: Single word (150-250) */}
      <div style={{
        position: "absolute", left: 60, right: 150, bottom: 520,
        ...sceneVis(150, 250, 40, 30),
      }}>
        <div style={{
          fontSize: 36, color: "rgba(200,200,210,0.3)",
          letterSpacing: 12, textTransform: "uppercase", fontWeight: 300,
        }}>
          PRECISION
        </div>
      </div>

      {/* Scene 3: The statement (260-370) */}
      <div style={{
        position: "absolute", left: 60, right: 150, bottom: 520,
        ...sceneVis(260, 370, 35, 25),
      }}>
        <div style={{
          fontSize: 44, color: "rgba(255,220,180,0.6)",
          fontWeight: 300, lineHeight: 1.6,
          fontStyle: "italic",
        }}>
          This is what we check before every treatment.
        </div>
      </div>

      {/* Scene 4: CTA (380-450) */}
      <div style={{
        position: "absolute", left: 60, right: 150, bottom: 520,
        ...sceneVis(380, 450, 25, 1),
      }}>
        <div style={{
          fontSize: 28, color: "rgba(200,200,210,0.25)",
          letterSpacing: 5, textTransform: "uppercase", fontWeight: 400,
        }}>
          YOUR DENTAL CLINIC
        </div>
      </div>
    </div>
  );
};
