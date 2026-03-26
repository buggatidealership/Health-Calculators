import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

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

function Character({ x, y, scale = 1, expression = "neutral", opacity = 1 }: {
  x: number; y: number; scale?: number; expression?: string; opacity?: number;
}) {
  const headR = 28;
  return (
    <g transform={`translate(${x},${y}) scale(${scale})`} opacity={opacity}>
      <line x1={0} y1={headR + 4} x2={0} y2={headR + 50} stroke={C.text} strokeWidth={4} strokeLinecap="round" opacity={0.7} />
      <line x1={0} y1={headR + 50} x2={-12} y2={headR + 80} stroke={C.text} strokeWidth={3} strokeLinecap="round" opacity={0.6} />
      <line x1={0} y1={headR + 50} x2={12} y2={headR + 80} stroke={C.text} strokeWidth={3} strokeLinecap="round" opacity={0.6} />
      <circle cx={0} cy={0} r={headR} fill={C.bg} stroke={C.text} strokeWidth={3} />
      {expression === "exhausted" ? (
        <>
          <line x1={-12} y1={-6} x2={-4} y2={-2} stroke={C.text} strokeWidth={2} />
          <line x1={4} y1={-2} x2={12} y2={-6} stroke={C.text} strokeWidth={2} />
          <path d="M -5 12 Q 0 10 5 12" fill="none" stroke={C.text} strokeWidth={2} />
        </>
      ) : expression === "wired" ? (
        <>
          <circle cx={-8} cy={-4} r={5} fill="none" stroke={C.text} strokeWidth={2} />
          <circle cx={-8} cy={-4} r={2} fill={C.text} />
          <circle cx={8} cy={-4} r={5} fill="none" stroke={C.text} strokeWidth={2} />
          <circle cx={8} cy={-4} r={2} fill={C.text} />
          <line x1={-5} y1={10} x2={5} y2={10} stroke={C.text} strokeWidth={2} />
          <text x={headR + 6} y={-12} fontSize={20} fill={C.purple} fontWeight="700" opacity={0.7}>!</text>
        </>
      ) : expression === "realization" ? (
        <>
          <circle cx={-8} cy={-4} r={3} fill={C.text} />
          <circle cx={8} cy={-4} r={3} fill={C.text} />
          <circle cx={0} cy={12} r={6} fill="none" stroke={C.text} strokeWidth={2} />
          <text x={headR + 8} y={-10} fontSize={24} fill={C.green} fontWeight="700">!</text>
        </>
      ) : expression === "understanding" ? (
        <>
          <circle cx={-8} cy={-4} r={3} fill={C.text} />
          <circle cx={8} cy={-4} r={3} fill={C.text} />
          <path d="M -7 8 Q 0 16 7 8" fill="none" stroke={C.green} strokeWidth={2.5} />
        </>
      ) : (
        <>
          <circle cx={-8} cy={-4} r={3} fill={C.text} />
          <circle cx={8} cy={-4} r={3} fill={C.text} />
          <line x1={-6} y1={10} x2={6} y2={10} stroke={C.text} strokeWidth={2} />
        </>
      )}
    </g>
  );
}

// 30s = 900 frames
export const CortisolFluid: React.FC = () => {
  const frame = useCurrentFrame();

  const camScale = interpolate(frame,
    [0, 80, 180, 320, 500, 640, 780, 900],
    [1.6, 1.6, 1.0, 0.85, 0.85, 1.0, 1.0, 1.05],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
  );
  const camY = interpolate(frame,
    [0, 180, 320, 500, 640, 900],
    [150, 0, -60, -60, 0, 0],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
  );

  // Ambient: warm morning → purple night → teal insight
  const ambHue = interpolate(frame, [0, 120, 300, 500, 700, 900], [30, 30, 270, 270, 170, 170], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });
  const ambInt = interpolate(frame, [0, 200, 400, 600, 800, 900], [0.06, 0.1, 0.14, 0.1, 0.06, 0.04], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  // Character: exhausted → wired → realization → understanding
  const charExpr = frame < 180 ? "exhausted" : frame < 380 ? "exhausted" : frame < 550 ? "wired" : frame < 700 ? "realization" : "understanding";
  const charX = interpolate(frame, [0, 180, 320, 640, 900], [1080, 1080, 400, 1080, 1080], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });
  const charY = interpolate(frame, [0, 180, 320, 900], [1050, 1050, 1400, 1400], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });
  const charScale = interpolate(frame, [0, 180, 320, 900], [2.5, 2.5, 1.5, 1.5], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });
  const charOpacity = interpolate(frame, [0, 20, 640, 670], [0, 1, 1, 0], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  // Phase 1: "Exhausted all day" (0-180)
  const p1Opacity = interpolate(frame, [20, 40, 160, 180], [0, 1, 1, 0], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  // Phase 2: "Wired at midnight" (180-320)
  const p2Opacity = interpolate(frame, [190, 210, 300, 320], [0, 1, 1, 0], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  // Phase 3: Two cortisol curves (320-560)
  const curveOpacity = interpolate(frame, [325, 350, 540, 560], [0, 1, 1, 0], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  // Normal curve + inverted curve
  const curveL = 250, curveR = 1910, curveT = 400, curveB = 1400;
  const curveW = curveR - curveL, curveH = curveB - curveT;
  const xTime = (t: number) => curveL + (t / 24) * curveW; // 0-24 hours
  const yLevel = (l: number) => curveB - (l / 100) * curveH; // 0-100%

  // Healthy cortisol: peaks at 6am (~45min after waking), low at night
  const healthyCurve = [
    { t: 0, v: 15 }, { t: 5, v: 20 }, { t: 6, v: 85 }, { t: 7, v: 75 },
    { t: 9, v: 55 }, { t: 12, v: 40 }, { t: 15, v: 30 }, { t: 18, v: 20 },
    { t: 21, v: 12 }, { t: 24, v: 10 },
  ];
  // Inverted: flat morning, spikes at night
  const invertedCurve = [
    { t: 0, v: 35 }, { t: 5, v: 30 }, { t: 6, v: 35 }, { t: 7, v: 32 },
    { t: 9, v: 30 }, { t: 12, v: 35 }, { t: 15, v: 40 }, { t: 18, v: 55 },
    { t: 21, v: 70 }, { t: 24, v: 65 },
  ];

  const curvePath = (data: { t: number; v: number }[]) => {
    return data.map((d, i) => `${i === 0 ? 'M' : 'L'} ${xTime(d.t)} ${yLevel(d.v)}`).join(' ');
  };

  const healthyDrawProgress = interpolate(frame, [360, 440], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic),
  });
  const invertedDrawProgress = interpolate(frame, [420, 500], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic),
  });

  // Phase 4: "Your rhythm is inverted" (560-700)
  const invertDim = interpolate(frame, [560, 580], [0, 0.85], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const invertOpacity = interpolate(frame, [575, 595, 690, 710], [0, 1, 1, 0], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  // Phase 5: Brand hit (700-900)
  const brandDim = interpolate(frame, [705, 725], [0, 0.92], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const brandOpacity = interpolate(frame, [720, 745, 900], [0, 1, 1], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });
  const dotPulse = 1 + 0.25 * (Math.sin(frame * 0.15) > 0 ? 0.3 : 0) + 0.1 * Math.sin(frame * 0.4);

  // Time labels
  const timeLabels = [
    { t: 0, label: "12AM" }, { t: 6, label: "6AM" }, { t: 12, label: "12PM" },
    { t: 18, label: "6PM" }, { t: 24, label: "12AM" },
  ];

  return (
    <div style={{
      width: 2160, height: 2160, background: C.bg,
      overflow: "hidden", position: "relative", fontFamily: F.sans,
    }}>
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: `radial-gradient(ellipse at 50% 60%, hsla(${ambHue},50%,40%,${ambInt}) 0%, transparent 65%)`,
      }} />
      <div style={{
        position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none", zIndex: 100,
        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
      }} />

      <div style={{
        position: "absolute", inset: 0,
        transform: `scale(${camScale}) translateY(${camY}px)`,
        transformOrigin: "center center",
      }}>
        <svg width={2160} height={2160} style={{ position: "absolute", left: 0, top: 0, zIndex: 2 }}>
          <Character x={charX} y={charY} scale={charScale} expression={charExpr} opacity={charOpacity} />
        </svg>

        {/* Phase 1: "Exhausted all day" */}
        <div style={{
          position: "absolute", left: 0, right: 0, top: 700,
          textAlign: "center", opacity: p1Opacity,
        }}>
          <div style={{ fontSize: 72, color: C.sub, fontFamily: F.sans }}>7:30 AM</div>
          <div style={{ fontSize: 140, color: C.text, fontFamily: F.serif, fontWeight: 400, marginTop: 20 }}>
            Exhausted.
          </div>
          <div style={{ fontSize: 80, color: C.dim, fontFamily: F.sans, marginTop: 16 }}>
            Before the day even starts.
          </div>
        </div>

        {/* Phase 2: "Wired at midnight" */}
        <div style={{
          position: "absolute", left: 0, right: 0, top: 700,
          textAlign: "center", opacity: p2Opacity,
        }}>
          <div style={{ fontSize: 72, color: C.purple, fontFamily: F.mono }}>11:47 PM</div>
          <div style={{ fontSize: 140, color: C.text, fontFamily: F.serif, fontWeight: 400, marginTop: 20 }}>
            Wide awake.
          </div>
          <div style={{ fontSize: 80, color: C.dim, fontFamily: F.sans, marginTop: 16 }}>
            Brain running at full speed.
          </div>
        </div>

        {/* Phase 3: Cortisol curves */}
        <svg width={2160} height={2160} style={{
          position: "absolute", left: 0, top: 0,
          opacity: curveOpacity,
        }}>
          {/* Axis labels */}
          {timeLabels.map((tl, i) => (
            <text key={i} x={xTime(tl.t)} y={curveB + 50} textAnchor="middle"
              fill={C.dim} fontSize={40} fontFamily={F.mono}>{tl.label}</text>
          ))}

          {/* "Cortisol level" y-axis */}
          <text x={curveL - 30} y={curveT - 20} textAnchor="end"
            fill={C.dim} fontSize={36} fontFamily={F.mono}>High</text>
          <text x={curveL - 30} y={curveB + 10} textAnchor="end"
            fill={C.dim} fontSize={36} fontFamily={F.mono}>Low</text>

          {/* Healthy curve — green, draws in */}
          <path d={curvePath(healthyCurve)}
            fill="none" stroke={C.green} strokeWidth={6} strokeLinecap="round"
            strokeDasharray={curveW * 2}
            strokeDashoffset={curveW * 2 * (1 - healthyDrawProgress)}
            opacity={0.8} />

          {/* "Healthy" label */}
          {healthyDrawProgress > 0.5 && (
            <text x={xTime(7)} y={yLevel(85) - 30}
              fill={C.green} fontSize={44} fontFamily={F.sans} fontWeight="600"
              opacity={interpolate(frame, [400, 415], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}>
              Healthy rhythm
            </text>
          )}

          {/* Inverted curve — red, draws in after healthy */}
          <path d={curvePath(invertedCurve)}
            fill="none" stroke={C.red} strokeWidth={6} strokeLinecap="round"
            strokeDasharray={curveW * 2}
            strokeDashoffset={curveW * 2 * (1 - invertedDrawProgress)}
            opacity={0.8} />

          {/* "Yours" label */}
          {invertedDrawProgress > 0.5 && (
            <text x={xTime(20)} y={yLevel(70) - 30}
              fill={C.red} fontSize={48} fontFamily={F.sans} fontWeight="700"
              opacity={interpolate(frame, [470, 485], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}>
              Yours
            </text>
          )}

          {/* Morning zone highlight */}
          {frame >= 380 && (
            <rect x={xTime(5)} y={curveT} width={xTime(8) - xTime(5)} height={curveH}
              fill={C.accent} opacity={0.04} rx={8} />
          )}

          {/* Night zone highlight */}
          {frame >= 450 && (
            <rect x={xTime(20)} y={curveT} width={xTime(24) - xTime(20)} height={curveH}
              fill={C.purple} opacity={0.06} rx={8} />
          )}
        </svg>

        {/* Curve caption */}
        {frame >= 510 && frame < 565 && (
          <div style={{
            position: "absolute", left: 0, right: 0, top: 1520,
            textAlign: "center",
            opacity: interpolate(frame, [510, 525], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
          }}>
            <span style={{ fontSize: 72, color: C.accent, fontFamily: F.serif, fontStyle: "italic" }}>
              The spike that should wake you up never came.
            </span>
          </div>
        )}

        {/* Phase 4: Insight */}
        <div style={{ position: "absolute", inset: 0, background: C.bg, opacity: invertDim }} />
        <div style={{
          position: "absolute", left: 0, right: 0, top: 0, bottom: 0,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          opacity: invertOpacity,
        }}>
          <div style={{ fontSize: 100, color: C.sub, fontFamily: F.sans }}>
            You're not broken.
          </div>
          <div style={{ fontSize: 128, color: C.white, fontFamily: F.serif, fontWeight: 600, marginTop: 25 }}>
            Your rhythm is <span style={{ color: C.red, fontStyle: "italic" }}>inverted.</span>
          </div>
          <div style={{ fontSize: 72, color: C.dim, fontFamily: F.sans, marginTop: 40, textAlign: "center", maxWidth: 1600 }}>
            Cortisol should peak at 6 AM and fall by night. Yours does the opposite.
          </div>
        </div>

        {/* Phase 5: Brand */}
        <div style={{ position: "absolute", inset: 0, background: C.bg, opacity: brandDim }} />
        <div style={{
          position: "absolute", left: 0, right: 0, top: 0, bottom: 0,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          opacity: brandOpacity,
        }}>
          <div style={{ fontSize: 116, color: C.dim, fontFamily: F.sans }}>
            It was never about energy.
          </div>
          <div style={{ fontSize: 156, color: C.white, fontFamily: F.serif, fontWeight: 700, marginTop: 25 }}>
            It was about <span style={{ color: C.teal, fontStyle: "italic" }}>timing.</span>
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
