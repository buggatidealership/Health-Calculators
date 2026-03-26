import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";

const C = {
  bg: "#0a0f1a", text: "#E0E0E0", sub: "#8a919e", dim: "#3a4050",
  red: "#e8785e", green: "#6ec89b", accent: "#e89b3e", teal: "#0e7a7e",
  white: "#ffffff", blue: "#4a90d9", purple: "#9b7ee8",
};
const F = {
  serif: "'DM Serif Display', Georgia, serif",
  sans: "'Inter', -apple-system, sans-serif",
  mono: "'JetBrains Mono', 'SF Mono', monospace",
};

function fadeUp(frame: number, start: number, dur = 16) {
  return {
    opacity: interpolate(frame, [start, start + dur], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    transform: `translateY(${interpolate(frame, [start, start + dur], [40, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })}px)`,
  };
}

// 30s = 900 frames
export const MetabolismFluid: React.FC = () => {
  const frame = useCurrentFrame();

  // Camera
  const camScale = interpolate(frame,
    [0, 80, 180, 300, 440, 580, 700, 800, 900],
    [1.6, 1.6, 1.0, 1.0, 0.92, 0.92, 1.0, 1.0, 1.05],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
  );
  const camY = interpolate(frame,
    [0, 180, 300, 440, 580, 700, 900],
    [100, 0, 0, -50, -50, 0, 0],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
  );

  // Ambient: blue night → red alarm → green insight
  const ambHue = interpolate(frame, [0, 180, 300, 580, 700, 900], [230, 230, 10, 10, 160, 160], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });
  const ambInt = interpolate(frame, [0, 200, 400, 600, 800, 900], [0.08, 0.1, 0.12, 0.1, 0.06, 0.04], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  // Phase 1: "2 AM. Still up." (0-180) — character on couch
  const p1Opacity = interpolate(frame, [15, 35, 160, 180], [0, 1, 1, 0], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });
  const charImg1Opacity = interpolate(frame, [0, 25, 160, 180], [0, 1, 1, 0], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });
  const charImg1Scale = interpolate(frame, [0, 30], [0.9, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic),
  });

  // Phase 2: "Your coach says it's discipline." (180-300)
  const p2Opacity = interpolate(frame, [185, 205, 280, 300], [0, 1, 1, 0], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  // Phase 3: The cascade — what actually happens (300-580)
  const cascadeOpacity = interpolate(frame, [305, 325, 560, 580], [0, 1, 1, 0], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });
  const charImg2Opacity = interpolate(frame, [310, 330, 560, 580], [0, 1, 1, 0], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  const cascadeSteps = [
    { icon: "🌙", text: "Sleep < 6 hours", sub: "Cortisol stays elevated into morning", color: C.purple, delay: 0 },
    { icon: "📈", text: "Cortisol stays high", sub: "Insulin sensitivity drops 25-30%", color: C.red, delay: 50 },
    { icon: "🍞", text: "Same food, more fat storage", sub: "Glucose processing impaired", color: C.accent, delay: 100 },
    { icon: "🔥", text: "Resting metabolic rate drops", sub: "Body conserves energy, not burns it", color: C.red, delay: 150 },
  ];

  // Phase 4: The reframe (580-700)
  const reframeDim = interpolate(frame, [585, 605], [0, 0.88], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const reframeOpacity = interpolate(frame, [600, 620, 690, 710], [0, 1, 1, 0], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  // Phase 5: Brand hit (700-900)
  const brandDim = interpolate(frame, [705, 725], [0, 0.92], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const brandOpacity = interpolate(frame, [720, 745, 900], [0, 1, 1], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });
  const dotPulse = 1 + 0.25 * (Math.sin(frame * 0.15) > 0 ? 0.3 : 0) + 0.1 * Math.sin(frame * 0.4);

  return (
    <div style={{
      width: 2160, height: 2160, background: C.bg,
      overflow: "hidden", position: "relative", fontFamily: F.sans,
    }}>
      {/* Ambient */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: `radial-gradient(ellipse at 50% 55%, hsla(${ambHue},45%,35%,${ambInt}) 0%, transparent 60%)`,
      }} />
      {/* Grain */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.3, pointerEvents: "none", zIndex: 100,
        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.045'/%3E%3C/svg%3E")`,
      }} />

      {/* Camera */}
      <div style={{
        position: "absolute", inset: 0,
        transform: `scale(${camScale}) translateY(${camY}px)`,
        transformOrigin: "center center",
      }}>

        {/* Phase 1: Character on couch at 2AM */}
        <div style={{
          position: "absolute", left: 0, right: 0, top: 0, bottom: 0,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          opacity: charImg1Opacity,
        }}>
          <Img src={staticFile("characters/late-night.png")} style={{
            width: 600, height: 600, objectFit: "contain",
            transform: `scale(${charImg1Scale})`,
            filter: "drop-shadow(0 0 40px rgba(74,144,217,0.15))",
          }} />
        </div>
        <div style={{
          position: "absolute", left: 0, right: 0, bottom: 550,
          textAlign: "center", opacity: p1Opacity, padding: "0 80px",
        }}>
          <div style={{ fontSize: 52, color: C.blue, fontFamily: F.mono, marginBottom: 16 }}>
            2:00 AM
          </div>
          <div style={{
            fontSize: 100, color: C.text, fontFamily: F.serif, fontWeight: 400,
          }}>
            Still scrolling.
          </div>
        </div>

        {/* Phase 2: "Your coach says..." */}
        <div style={{
          position: "absolute", left: 0, right: 0, top: 0, bottom: 0,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          opacity: p2Opacity, padding: 100,
        }}>
          <div style={{
            fontSize: 88, color: C.sub, fontFamily: F.serif, fontWeight: 300,
            textAlign: "center", lineHeight: 1.4,
          }}>
            Your coach says it's
          </div>
          <div style={{
            fontSize: 120, color: C.white, fontFamily: F.serif, fontWeight: 600,
            textAlign: "center", marginTop: 20,
          }}>
            "discipline."
          </div>
          <div style={{
            ...fadeUp(frame, 230, 18),
            fontSize: 88, color: C.red, fontFamily: F.serif,
            fontStyle: "italic", textAlign: "center", marginTop: 60,
          }}>
            Your biology says it's a cascade.
          </div>
        </div>

        {/* Phase 3: The cascade */}
        <div style={{
          position: "absolute", left: 0, right: 0, top: 200,
          opacity: cascadeOpacity, padding: "0 100px",
        }}>
          <div style={{
            fontFamily: F.mono, fontSize: 44, color: C.dim,
            letterSpacing: 5, textTransform: "uppercase", textAlign: "center",
            marginBottom: 40,
          }}>
            WHAT SLEEPING AT 2 AM ACTUALLY DOES
          </div>

          {/* Gemini character in center */}
          <div style={{
            display: "flex", justifyContent: "center", marginBottom: 30,
            opacity: charImg2Opacity,
          }}>
            <Img src={staticFile("characters/biology-chain.png")} style={{
              width: 320, height: 320, objectFit: "contain",
              filter: "drop-shadow(0 0 30px rgba(232,120,94,0.12))",
            }} />
          </div>

          {/* Cascade steps — staggered, each dims the previous */}
          {cascadeSteps.map((step, i) => {
            const entryFrame = 340 + step.delay;
            if (frame < entryFrame) return null;

            const nextEntry = i < cascadeSteps.length - 1 ? 340 + cascadeSteps[i + 1].delay : 9999;
            const dimFactor = interpolate(frame, [nextEntry, nextEntry + 15], [1, 0.35], {
              extrapolateLeft: "clamp", extrapolateRight: "clamp",
            });
            const entryO = interpolate(frame, [entryFrame, entryFrame + 16], [0, 1], {
              extrapolateLeft: "clamp", extrapolateRight: "clamp",
            });
            const entryY = interpolate(frame, [entryFrame, entryFrame + 16], [30, 0], {
              extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic),
            });

            return (
              <div key={i} style={{
                opacity: entryO * dimFactor,
                transform: `translateY(${entryY}px)`,
                display: "flex", alignItems: "center", gap: 24,
                padding: "24px 36px", marginBottom: 16,
                borderLeft: `6px solid ${step.color}`,
                background: `${step.color}06`, borderRadius: 16,
              }}>
                <div style={{ fontSize: 48, flexShrink: 0 }}>{step.icon}</div>
                <div>
                  <div style={{ fontSize: 52, fontWeight: 600, color: step.color }}>{step.text}</div>
                  <div style={{ fontSize: 40, color: C.sub, marginTop: 4 }}>{step.sub}</div>
                </div>
                {/* Arrow to next step */}
                {i < cascadeSteps.length - 1 && (
                  <div style={{
                    position: "absolute", right: 60, top: "50%",
                    fontSize: 36, color: C.dim, transform: "translateY(-50%)",
                  }}>↓</div>
                )}
              </div>
            );
          })}
        </div>

        {/* Phase 4: Reframe */}
        <div style={{ position: "absolute", inset: 0, background: C.bg, opacity: reframeDim }} />
        <div style={{
          position: "absolute", left: 0, right: 0, top: 0, bottom: 0,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          opacity: reframeOpacity, padding: 80,
        }}>
          <div style={{ fontSize: 96, color: C.sub, fontFamily: F.sans, textAlign: "center" }}>
            Your metabolism isn't broken.
          </div>
          <div style={{ fontSize: 112, color: C.white, fontFamily: F.serif, fontWeight: 600, marginTop: 30, textAlign: "center" }}>
            Your sleep <span style={{ color: C.red, fontStyle: "italic" }}>broke it.</span>
          </div>
          <div style={{
            ...fadeUp(frame, 640, 18),
            fontSize: 64, color: C.dim, fontFamily: F.mono, marginTop: 50, textAlign: "center",
          }}>
            6 hours of sleep = 25-30% drop in insulin sensitivity
          </div>
        </div>

        {/* Phase 5: Brand */}
        <div style={{ position: "absolute", inset: 0, background: C.bg, opacity: brandDim }} />
        <div style={{
          position: "absolute", left: 0, right: 0, top: 0, bottom: 0,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          opacity: brandOpacity,
        }}>
          <div style={{ fontSize: 108, color: C.dim, fontFamily: F.sans }}>
            It's not just discipline.
          </div>
          <div style={{ fontSize: 148, color: C.white, fontFamily: F.serif, fontWeight: 700, marginTop: 25 }}>
            It's <span style={{ color: C.teal, fontStyle: "italic" }}>biology.</span>
          </div>
          <div style={{
            width: 16, height: 16, borderRadius: "50%",
            background: C.green, marginTop: 60,
            transform: `scale(${dotPulse})`,
            boxShadow: `0 0 ${12 + 8 * Math.sin(frame * 0.15)}px ${C.green}60, 0 0 ${40 + 20 * Math.sin(frame * 0.15)}px ${C.green}15`,
          }} />
        </div>

      </div>
    </div>
  );
};
