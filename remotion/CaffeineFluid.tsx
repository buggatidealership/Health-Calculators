import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

const C = {
  bg: "#0a0f1a", text: "#E0E0E0", sub: "#8a919e", dim: "#3a4050",
  red: "#e8785e", green: "#6ec89b", accent: "#e89b3e", teal: "#0e7a7e",
  white: "#ffffff", coffee: "#8B6914", blue: "#4a90d9",
};
const F = {
  serif: "'DM Serif Display', Georgia, serif",
  sans: "'Inter', -apple-system, sans-serif",
  mono: "'JetBrains Mono', 'SF Mono', monospace",
};

// Minimal character: circle head, line body, expression
function Character({ x, y, scale = 1, expression = "neutral", bodyAngle = 0, opacity = 1 }: {
  x: number; y: number; scale?: number; expression?: string; bodyAngle?: number; opacity?: number;
}) {
  const headR = 28;
  const bodyH = 50;
  // Expressions: neutral —  confused ?  worried ~  shocked !  enlightened *  sleeping z
  const eyeOffsetY = -4;
  const mouthY = 10;

  return (
    <g transform={`translate(${x},${y}) scale(${scale})`} opacity={opacity}>
      {/* Body */}
      <line x1={0} y1={headR + 4} x2={Math.sin(bodyAngle) * 15} y2={headR + bodyH}
        stroke={C.text} strokeWidth={4} strokeLinecap="round" opacity={0.7} />
      {/* Legs */}
      <line x1={Math.sin(bodyAngle) * 15} y1={headR + bodyH}
        x2={Math.sin(bodyAngle) * 15 - 12} y2={headR + bodyH + 30}
        stroke={C.text} strokeWidth={3} strokeLinecap="round" opacity={0.6} />
      <line x1={Math.sin(bodyAngle) * 15} y1={headR + bodyH}
        x2={Math.sin(bodyAngle) * 15 + 12} y2={headR + bodyH + 30}
        stroke={C.text} strokeWidth={3} strokeLinecap="round" opacity={0.6} />
      {/* Head */}
      <circle cx={0} cy={0} r={headR} fill={C.bg} stroke={C.text} strokeWidth={3} />
      {/* Eyes */}
      {expression === "sleeping" ? (
        <>
          <line x1={-10} y1={eyeOffsetY} x2={-4} y2={eyeOffsetY} stroke={C.text} strokeWidth={2.5} />
          <line x1={4} y1={eyeOffsetY} x2={10} y2={eyeOffsetY} stroke={C.text} strokeWidth={2.5} />
        </>
      ) : expression === "shocked" ? (
        <>
          <circle cx={-8} cy={eyeOffsetY} r={5} fill="none" stroke={C.text} strokeWidth={2} />
          <circle cx={8} cy={eyeOffsetY} r={5} fill="none" stroke={C.text} strokeWidth={2} />
        </>
      ) : (
        <>
          <circle cx={-8} cy={eyeOffsetY} r={3} fill={C.text} />
          <circle cx={8} cy={eyeOffsetY} r={3} fill={C.text} />
        </>
      )}
      {/* Mouth */}
      {expression === "neutral" && (
        <line x1={-6} y1={mouthY} x2={6} y2={mouthY} stroke={C.text} strokeWidth={2} />
      )}
      {expression === "happy" && (
        <path d="M -7 8 Q 0 16 7 8" fill="none" stroke={C.text} strokeWidth={2} />
      )}
      {expression === "confused" && (
        <>
          <path d="M -5 10 Q 0 8 5 12" fill="none" stroke={C.text} strokeWidth={2} />
          <text x={headR + 8} y={-headR + 5} fontSize={24} fill={C.accent} fontWeight="700">?</text>
        </>
      )}
      {expression === "worried" && (
        <path d="M -7 12 Q 0 8 7 12" fill="none" stroke={C.text} strokeWidth={2} />
      )}
      {expression === "shocked" && (
        <circle cx={0} cy={mouthY + 2} r={6} fill="none" stroke={C.text} strokeWidth={2} />
      )}
      {expression === "sleeping" && (
        <>
          <line x1={-4} y1={mouthY} x2={4} y2={mouthY} stroke={C.text} strokeWidth={2} />
          <text x={headR + 5} y={-10} fontSize={20} fill={C.blue} fontWeight="700" opacity={0.6}>z</text>
          <text x={headR + 18} y={-22} fontSize={16} fill={C.blue} fontWeight="700" opacity={0.4}>z</text>
        </>
      )}
      {expression === "enlightened" && (
        <>
          <path d="M -7 8 Q 0 16 7 8" fill="none" stroke={C.green} strokeWidth={2.5} />
          <text x={headR + 6} y={-headR + 2} fontSize={22} fill={C.green} fontWeight="700">!</text>
        </>
      )}
    </g>
  );
}

// 30s = 900 frames
export const CaffeineFluid: React.FC = () => {
  const frame = useCurrentFrame();

  // Camera
  const camScale = interpolate(frame,
    [0, 60, 150, 240, 400, 560, 700, 800, 900],
    [1.8, 1.8, 1.0, 1.0, 0.9, 0.9, 1.0, 1.0, 1.05],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
  );
  const camY = interpolate(frame,
    [0, 150, 240, 400, 560, 700, 900],
    [200, 0, 0, -80, -80, 0, 0],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
  );

  // Ambient: warm coffee → cold blue night
  const ambHue = interpolate(frame, [0, 300, 500, 900], [30, 30, 220, 220], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });
  const ambInt = interpolate(frame, [0, 200, 500, 700, 900], [0.06, 0.1, 0.12, 0.06, 0.04], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  // === PHASE 1: Coffee moment (0-150) ===
  const coffeeOpacity = interpolate(frame, [10, 25, 130, 150], [0, 1, 1, 0], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });
  const coffeeTime = interpolate(frame, [30, 50], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic),
  });

  // Character expression
  const charExpr = frame < 150 ? "happy" :
    frame < 300 ? "neutral" :
    frame < 500 ? "confused" :
    frame < 650 ? "worried" :
    frame < 750 ? "shocked" :
    frame < 820 ? "enlightened" : "enlightened";

  // Character position — moves across the timeline
  const charX = interpolate(frame,
    [0, 150, 300, 500, 700, 900],
    [1080, 1080, 600, 1200, 1080, 1080],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
  );
  const charY = interpolate(frame,
    [0, 150, 240, 500, 650, 750, 900],
    [1100, 1100, 1500, 1500, 1500, 1100, 1100],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
  );
  const charScale = interpolate(frame,
    [0, 150, 240, 900],
    [2.5, 2.5, 1.5, 1.5],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
  );
  const charOpacity = interpolate(frame, [0, 20, 800, 830], [0, 1, 1, 0], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  // === PHASE 2: "2:00 PM" + caffeine amount (150-240) ===
  const timeOpacity = interpolate(frame, [155, 170, 220, 240], [0, 1, 1, 0], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  // === PHASE 3: Half-life bar (240-560) ===
  // Horizontal bar showing caffeine remaining over time
  const barOpacity = interpolate(frame, [245, 265, 540, 560], [0, 1, 1, 0], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  const hours = [
    { t: "2 PM", pct: 100, delay: 0 },
    { t: "7 PM", pct: 50, delay: 40 },
    { t: "12 AM", pct: 25, delay: 80 },
    { t: "5 AM", pct: 12.5, delay: 120 },
  ];

  // === PHASE 4: Bed scene (560-700) ===
  const bedOpacity = interpolate(frame, [560, 580, 680, 700], [0, 1, 1, 0], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  // "Still 25% in your bloodstream" text
  const stillOpacity = interpolate(frame, [600, 620, 680, 700], [0, 1, 1, 0], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  // === PHASE 5: Insight + brand (700-900) ===
  const insightDim = interpolate(frame, [710, 730], [0, 0.88], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const insightOpacity = interpolate(frame, [720, 740, 830, 850], [0, 1, 1, 0], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });
  const insightY = interpolate(frame, [720, 740], [30, 0], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic),
  });

  const brandDim = interpolate(frame, [845, 865], [0, 0.92], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const brandOpacity = interpolate(frame, [855, 875, 900], [0, 1, 1], {
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
        background: `radial-gradient(ellipse at 50% 60%, hsla(${ambHue},50%,40%,${ambInt}) 0%, transparent 65%)`,
      }} />
      {/* Grain */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none", zIndex: 100,
        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
      }} />

      {/* Camera */}
      <div style={{
        position: "absolute", inset: 0,
        transform: `scale(${camScale}) translateY(${camY}px)`,
        transformOrigin: "center center",
      }}>

        <svg width={2160} height={2160} style={{ position: "absolute", left: 0, top: 0 }}>
          {/* Character */}
          <Character x={charX} y={charY} scale={charScale} expression={charExpr} opacity={charOpacity} />

          {/* Coffee cup — near character in phase 1 */}
          {frame < 200 && (
            <g opacity={coffeeOpacity}>
              {/* Cup body */}
              <rect x={charX + 50} y={charY + 20} width={40} height={50} rx={6}
                fill="none" stroke={C.coffee} strokeWidth={3} opacity={coffeeTime} />
              {/* Steam */}
              <path d={`M ${charX + 62} ${charY + 15} Q ${charX + 58} ${charY + 5} ${charX + 65} ${charY - 5}`}
                fill="none" stroke={C.sub} strokeWidth={2} opacity={coffeeTime * 0.5}
                strokeDasharray="4,4" />
              <path d={`M ${charX + 72} ${charY + 12} Q ${charX + 76} ${charY} ${charX + 70} ${charY - 8}`}
                fill="none" stroke={C.sub} strokeWidth={2} opacity={coffeeTime * 0.4}
                strokeDasharray="4,4" />
            </g>
          )}
        </svg>

        {/* "2:00 PM" time label */}
        <div style={{
          position: "absolute", left: 0, right: 0, top: 700,
          textAlign: "center", opacity: timeOpacity,
        }}>
          <div style={{ fontFamily: F.mono, fontSize: 160, color: C.coffee, fontWeight: 700 }}>
            2:00 PM
          </div>
          <div style={{ fontFamily: F.sans, fontSize: 72, color: C.sub, marginTop: 10 }}>
            200mg of caffeine
          </div>
        </div>

        {/* Half-life visualization */}
        <div style={{
          position: "absolute", left: 180, right: 180, top: 550,
          opacity: barOpacity,
        }}>
          <div style={{
            fontFamily: F.mono, fontSize: 48, color: C.dim,
            letterSpacing: 6, textTransform: "uppercase", textAlign: "center",
            marginBottom: 40,
          }}>
            CAFFEINE HALF-LIFE: 5-6 HOURS
          </div>

          {hours.map((h, i) => {
            const entryFrame = 270 + h.delay;
            const o = interpolate(frame, [entryFrame, entryFrame + 16], [0, 1], {
              extrapolateLeft: "clamp", extrapolateRight: "clamp",
            });
            const barW = interpolate(frame, [entryFrame + 10, entryFrame + 30], [0, h.pct], {
              extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic),
            });
            const barColor = h.pct >= 75 ? C.coffee : h.pct >= 40 ? C.accent : h.pct >= 20 ? C.red : `${C.red}99`;

            return (
              <div key={i} style={{
                opacity: o, marginBottom: 35,
                display: "flex", alignItems: "center", gap: 30,
              }}>
                <div style={{
                  fontFamily: F.mono, fontSize: 64, color: i === 2 ? C.red : C.sub,
                  width: 240, textAlign: "right", fontWeight: i === 2 ? 700 : 400,
                }}>
                  {h.t}
                </div>
                <div style={{
                  flex: 1, height: 56, borderRadius: 28,
                  background: `${C.dim}20`, position: "relative", overflow: "hidden",
                }}>
                  <div style={{
                    width: `${barW}%`, height: "100%", borderRadius: 28,
                    background: `linear-gradient(90deg, ${barColor}, ${barColor}80)`,
                    boxShadow: `0 0 20px ${barColor}30`,
                    transition: "none",
                  }} />
                </div>
                <div style={{
                  fontFamily: F.mono, fontSize: 64, fontWeight: 700,
                  color: barColor, width: 180,
                }}>
                  {h.pct}%
                </div>
              </div>
            );
          })}

          {/* The punch: "midnight" highlight */}
          {frame >= 370 && (
            <div style={{
              ...fadeUpHelper(frame, 370, 18),
              textAlign: "center", marginTop: 30,
              fontSize: 72, color: C.red, fontFamily: F.serif, fontStyle: "italic",
            }}>
              A quarter of your coffee is still working at midnight.
            </div>
          )}
        </div>

        {/* Bed scene — character trying to sleep */}
        {frame >= 560 && frame < 710 && (
          <div style={{
            position: "absolute", left: 0, right: 0, top: 0, bottom: 0,
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            opacity: bedOpacity,
          }}>
            {/* Bed */}
            <svg width={600} height={200} style={{ marginBottom: 30 }}>
              <rect x={50} y={80} width={500} height={100} rx={16} fill={`${C.dim}30`} stroke={C.dim} strokeWidth={2} />
              <rect x={30} y={60} width={120} height={80} rx={12} fill={`${C.blue}15`} stroke={`${C.blue}30`} strokeWidth={2} />
              {/* Character in bed */}
              <Character x={200} y={100} scale={1.2} expression="sleeping" bodyAngle={1.4} />
              {/* Clock */}
              <text x={460} y={60} fontSize={48} fill={C.red} fontFamily={F.mono} fontWeight="700">12:47 AM</text>
            </svg>
          </div>
        )}

        {/* "Still in your bloodstream" */}
        {frame >= 600 && frame < 710 && (
          <div style={{
            position: "absolute", left: 0, right: 0, top: 1350,
            textAlign: "center", opacity: stillOpacity,
          }}>
            <div style={{ fontSize: 84, color: C.red, fontFamily: F.serif, fontWeight: 600 }}>
              Still 25% in your bloodstream.
            </div>
            <div style={{ fontSize: 68, color: C.sub, fontFamily: F.sans, marginTop: 16 }}>
              Your brain can't tell. Your sleep can.
            </div>
          </div>
        )}

        {/* Insight */}
        <div style={{ position: "absolute", inset: 0, background: C.bg, opacity: insightDim }} />
        <div style={{
          position: "absolute", left: 0, right: 0, top: 0, bottom: 0,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          opacity: insightOpacity, transform: `translateY(${insightY}px)`,
        }}>
          <div style={{ fontSize: 100, color: C.sub, fontFamily: F.sans }}>
            You didn't have trouble sleeping.
          </div>
          <div style={{ fontSize: 120, color: C.white, fontFamily: F.serif, fontWeight: 600, marginTop: 30 }}>
            You had coffee at <span style={{ color: C.coffee }}>2 PM.</span>
          </div>
        </div>

        {/* Brand hit */}
        <div style={{ position: "absolute", inset: 0, background: C.bg, opacity: brandDim }} />
        <div style={{
          position: "absolute", left: 0, right: 0, top: 0, bottom: 0,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          opacity: brandOpacity,
        }}>
          <div style={{ fontSize: 116, color: C.dim, fontFamily: F.sans }}>
            The half-life was always there.
          </div>
          <div style={{ fontSize: 152, color: C.white, fontFamily: F.serif, fontWeight: 700, marginTop: 25 }}>
            You just couldn't <span style={{ color: C.accent, fontStyle: "italic" }}>feel</span> it.
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

function fadeUpHelper(frame: number, start: number, dur: number = 14) {
  const o = interpolate(frame, [start, start + dur], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const y = interpolate(frame, [start, start + dur], [30, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });
  return { opacity: o, transform: `translateY(${y}px)` };
}
