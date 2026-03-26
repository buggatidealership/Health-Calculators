import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

const C = {
  bg: "#0a0f1a", text: "#E0E0E0", sub: "#8a919e", dim: "#3a4050",
  red: "#e8785e", green: "#6ec89b", accent: "#e89b3e", teal: "#0e7a7e",
  white: "#ffffff", blue: "#4a90d9",
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
      {expression === "defeated" ? (
        <>
          <circle cx={-8} cy={-4} r={3} fill={C.text} />
          <circle cx={8} cy={-4} r={3} fill={C.text} />
          <path d="M -7 12 Q 0 8 7 12" fill="none" stroke={C.text} strokeWidth={2} />
        </>
      ) : expression === "curious" ? (
        <>
          <circle cx={-8} cy={-4} r={3} fill={C.text} />
          <circle cx={8} cy={-4} r={3} fill={C.text} />
          <path d="M -5 10 Q 0 13 5 10" fill="none" stroke={C.text} strokeWidth={2} />
          <text x={headR + 8} y={-10} fontSize={22} fill={C.accent} fontWeight="700">?</text>
        </>
      ) : expression === "confident" ? (
        <>
          <circle cx={-8} cy={-4} r={3} fill={C.text} />
          <circle cx={8} cy={-4} r={3} fill={C.text} />
          <path d="M -8 8 Q 0 18 8 8" fill="none" stroke={C.green} strokeWidth={2.5} />
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

// 28s = 840 frames
export const BodyCompFluid: React.FC = () => {
  const frame = useCurrentFrame();

  const camScale = interpolate(frame,
    [0, 80, 200, 340, 500, 640, 750, 840],
    [2.0, 2.0, 1.2, 1.0, 0.9, 1.0, 1.0, 1.05],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
  );
  const camY = interpolate(frame,
    [0, 200, 340, 500, 640, 840],
    [250, 0, -40, -40, 0, 0],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
  );

  const ambHue = interpolate(frame, [0, 300, 500, 700, 840], [0, 0, 40, 140, 160], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });
  const ambInt = interpolate(frame, [0, 200, 400, 600, 840], [0.04, 0.08, 0.1, 0.08, 0.05], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  // Character journey: defeated → curious → confident
  const charExpr = frame < 200 ? "defeated" : frame < 500 ? "curious" : "confident";
  const charX = interpolate(frame, [0, 200, 500, 700, 840], [1080, 1080, 800, 1080, 1080], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });
  const charY = interpolate(frame, [0, 200, 340, 840], [1100, 1100, 1500, 1500], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });
  const charScale = interpolate(frame, [0, 200, 340, 840], [2.5, 2.5, 1.5, 1.5], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });
  const charOpacity = interpolate(frame, [0, 20, 640, 670], [0, 1, 1, 0], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  // Phase 1: Scale number (0-200)
  const scaleNumOpacity = interpolate(frame, [20, 40, 180, 200], [0, 1, 1, 0], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  // Phase 2: "But what does 185 lbs actually look like?" (200-340)
  const whatOpacity = interpolate(frame, [210, 230, 320, 340], [0, 1, 1, 0], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  // Phase 3: Two-body comparison (340-560)
  const compOpacity = interpolate(frame, [345, 365, 540, 560], [0, 1, 1, 0], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  // Phase 4: Insight (560-700)
  const insightDim = interpolate(frame, [565, 580], [0, 0.88], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const insightOpacity = interpolate(frame, [575, 595, 690, 710], [0, 1, 1, 0], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  // Phase 5: Brand (700-840)
  const brandDim = interpolate(frame, [705, 720], [0, 0.92], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const brandOpacity = interpolate(frame, [715, 735, 840], [0, 1, 1], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });
  const dotPulse = 1 + 0.25 * (Math.sin(frame * 0.15) > 0 ? 0.3 : 0) + 0.1 * Math.sin(frame * 0.4);

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
        <svg width={2160} height={2160} style={{ position: "absolute", left: 0, top: 0 }}>
          <Character x={charX} y={charY} scale={charScale} expression={charExpr} opacity={charOpacity} />

          {/* Scale (weighing scale) — phase 1 */}
          {frame < 210 && (
            <g opacity={scaleNumOpacity}>
              <rect x={1020} y={1220} width={120} height={20} rx={4} fill={C.dim} opacity={0.5} />
              <rect x={1050} y={1240} width={60} height={8} rx={2} fill={C.dim} opacity={0.3} />
            </g>
          )}
        </svg>

        {/* Scale number */}
        <div style={{
          position: "absolute", left: 0, right: 0, top: 780,
          textAlign: "center", opacity: scaleNumOpacity,
        }}>
          <div style={{ fontFamily: F.mono, fontSize: 240, fontWeight: 700, color: C.white }}>
            185
          </div>
          <div style={{ fontFamily: F.mono, fontSize: 72, color: C.sub }}>lbs</div>
        </div>

        {/* "But what does 185 actually look like?" */}
        <div style={{
          position: "absolute", left: 0, right: 0, top: 800,
          textAlign: "center", opacity: whatOpacity,
        }}>
          <div style={{ fontSize: 100, color: C.sub, fontFamily: F.serif, fontWeight: 300 }}>
            But what does 185 lbs
          </div>
          <div style={{ fontSize: 120, color: C.white, fontFamily: F.serif, fontWeight: 600, marginTop: 20 }}>
            actually <span style={{ color: C.accent, fontStyle: "italic" }}>look like?</span>
          </div>
        </div>

        {/* Two-body comparison */}
        <div style={{
          position: "absolute", left: 120, right: 120, top: 300,
          opacity: compOpacity,
          display: "flex", gap: 60, justifyContent: "center",
        }}>
          {/* Person A: 30% body fat */}
          <div style={{
            flex: 1, maxWidth: 900,
            textAlign: "center", padding: "50px 40px",
            borderLeft: `8px solid ${C.red}`, background: `${C.red}06`, borderRadius: 24,
          }}>
            <div style={{ fontFamily: F.mono, fontSize: 48, color: C.dim, letterSpacing: 4, marginBottom: 20 }}>
              PERSON A
            </div>
            {/* Body silhouette — wider */}
            <svg width={300} height={400} viewBox="0 0 300 400" style={{ margin: "20px auto" }}>
              <ellipse cx={150} cy={60} rx={40} ry={45} fill="none" stroke={C.red} strokeWidth={3} opacity={0.6} />
              <ellipse cx={150} cy={200} rx={90} ry={120} fill={`${C.red}10`} stroke={C.red} strokeWidth={3} opacity={0.5} />
              <line x1={110} y1={310} x2={100} y2={390} stroke={C.red} strokeWidth={4} strokeLinecap="round" opacity={0.5} />
              <line x1={190} y1={310} x2={200} y2={390} stroke={C.red} strokeWidth={4} strokeLinecap="round" opacity={0.5} />
            </svg>
            <div style={{ fontFamily: F.mono, fontSize: 100, fontWeight: 700, color: C.red }}>30%</div>
            <div style={{ fontSize: 56, color: C.sub }}>body fat</div>
            <div style={{ fontSize: 64, color: C.white, fontFamily: F.mono, fontWeight: 600, marginTop: 20 }}>185 lbs</div>
          </div>

          {/* Person B: 15% body fat */}
          {(() => {
            const bDelay = 380;
            const bOpacity = interpolate(frame, [bDelay, bDelay + 18], [0, 1], {
              extrapolateLeft: "clamp", extrapolateRight: "clamp",
            });
            return (
              <div style={{
                flex: 1, maxWidth: 900, opacity: bOpacity,
                textAlign: "center", padding: "50px 40px",
                borderLeft: `8px solid ${C.green}`, background: `${C.green}06`, borderRadius: 24,
              }}>
                <div style={{ fontFamily: F.mono, fontSize: 48, color: C.dim, letterSpacing: 4, marginBottom: 20 }}>
                  PERSON B
                </div>
                <svg width={300} height={400} viewBox="0 0 300 400" style={{ margin: "20px auto" }}>
                  <ellipse cx={150} cy={60} rx={35} ry={40} fill="none" stroke={C.green} strokeWidth={3} opacity={0.6} />
                  <ellipse cx={150} cy={200} rx={55} ry={110} fill={`${C.green}08`} stroke={C.green} strokeWidth={3} opacity={0.5} />
                  <line x1={120} y1={300} x2={115} y2={390} stroke={C.green} strokeWidth={4} strokeLinecap="round" opacity={0.5} />
                  <line x1={180} y1={300} x2={185} y2={390} stroke={C.green} strokeWidth={4} strokeLinecap="round" opacity={0.5} />
                </svg>
                <div style={{ fontFamily: F.mono, fontSize: 100, fontWeight: 700, color: C.green }}>15%</div>
                <div style={{ fontSize: 56, color: C.sub }}>body fat</div>
                <div style={{ fontSize: 64, color: C.white, fontFamily: F.mono, fontWeight: 600, marginTop: 20 }}>185 lbs</div>
              </div>
            );
          })()}
        </div>

        {/* "Same weight. Different body." */}
        {frame >= 430 && frame < 565 && (
          <div style={{
            position: "absolute", left: 0, right: 0, bottom: 250,
            textAlign: "center",
            ...fadeUpHelper(frame, 430, 18),
          }}>
            <span style={{ fontSize: 80, color: C.accent, fontFamily: F.serif, fontStyle: "italic" }}>
              Same weight. Different body. Different health.
            </span>
          </div>
        )}

        {/* Insight */}
        <div style={{ position: "absolute", inset: 0, background: C.bg, opacity: insightDim }} />
        <div style={{
          position: "absolute", left: 0, right: 0, top: 0, bottom: 0,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          opacity: insightOpacity,
        }}>
          <div style={{ fontSize: 96, color: C.sub, fontFamily: F.sans }}>
            The scale doesn't know the difference.
          </div>
          <div style={{ fontSize: 120, color: C.white, fontFamily: F.serif, fontWeight: 600, marginTop: 30 }}>
            Your <span style={{ color: C.green }}>hormones</span> do.
          </div>
          <div style={{ fontSize: 72, color: C.dim, fontFamily: F.sans, marginTop: 40 }}>
            Body fat drives estrogen. Estrogen suppresses testosterone.
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
            The number on the scale
          </div>
          <div style={{ fontSize: 156, color: C.white, fontFamily: F.serif, fontWeight: 700, marginTop: 20 }}>
            was never the <span style={{ color: C.accent, fontStyle: "italic" }}>full</span> story.
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

function fadeUpHelper(frame: number, start: number, dur = 14) {
  const o = interpolate(frame, [start, start + dur], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const y = interpolate(frame, [start, start + dur], [30, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });
  return { opacity: o, transform: `translateY(${y}px)` };
}
