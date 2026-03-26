import React, { useRef, useEffect, useState } from "react";
import { useCurrentFrame, interpolate, Easing, staticFile } from "remotion";
import { Lottie } from "@remotion/lottie";
import rough from "roughjs/bundled/rough.cjs";

const C = {
  bg: "#0a0f1a", text: "#E0E0E0", sub: "#8a919e", dim: "#3a4050",
  red: "#e8785e", green: "#6ec89b", accent: "#e89b3e", teal: "#0e7a7e",
  white: "#ffffff", coffee: "#C4944A", coffeeDark: "#6B4A1A", blue: "#4a90d9",
};
const F = {
  serif: "'DM Serif Display', Georgia, serif",
  sans: "'Inter', -apple-system, sans-serif",
  mono: "'JetBrains Mono', 'SF Mono', monospace",
};

// Hand-drawn SVG component using rough.js
function RoughCircle({ cx, cy, r, stroke, strokeWidth = 2, fill, opacity = 1, seed = 1 }: {
  cx: number; cy: number; r: number; stroke: string; strokeWidth?: number; fill?: string; opacity?: number; seed?: number;
}) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [paths, setPaths] = useState<string[]>([]);

  useEffect(() => {
    const gen = rough.generator({ seed });
    const drawable = gen.circle(cx, cy, r * 2, {
      stroke, strokeWidth, fill: fill || "none",
      fillStyle: fill ? "solid" : "none",
      roughness: 1.2, bowing: 1.5,
    });
    const pathData = gen.toPaths(drawable);
    setPaths(pathData.map(p => p.d));
  }, [cx, cy, r, stroke, strokeWidth, fill, seed]);

  return (
    <g opacity={opacity}>
      {paths.map((d, i) => (
        <path key={i} d={d} stroke={stroke} strokeWidth={strokeWidth} fill={fill || "none"} />
      ))}
    </g>
  );
}

function RoughLine({ x1, y1, x2, y2, stroke, strokeWidth = 2, opacity = 1, seed = 1 }: {
  x1: number; y1: number; x2: number; y2: number; stroke: string; strokeWidth?: number; opacity?: number; seed?: number;
}) {
  const [paths, setPaths] = useState<string[]>([]);

  useEffect(() => {
    const gen = rough.generator({ seed });
    const drawable = gen.line(x1, y1, x2, y2, { stroke, strokeWidth, roughness: 1.0, bowing: 1.2 });
    setPaths(gen.toPaths(drawable).map(p => p.d));
  }, [x1, y1, x2, y2, stroke, strokeWidth, seed]);

  return (
    <g opacity={opacity}>
      {paths.map((d, i) => (
        <path key={i} d={d} stroke={stroke} strokeWidth={strokeWidth} fill="none" />
      ))}
    </g>
  );
}

function RoughRect({ x, y, w, h, stroke, strokeWidth = 2, fill, opacity = 1, seed = 1 }: {
  x: number; y: number; w: number; h: number; stroke: string; strokeWidth?: number; fill?: string; opacity?: number; seed?: number;
}) {
  const [paths, setPaths] = useState<string[]>([]);

  useEffect(() => {
    const gen = rough.generator({ seed });
    const drawable = gen.rectangle(x, y, w, h, {
      stroke, strokeWidth, fill: fill || "none",
      fillStyle: fill ? "cross-hatch" : "none",
      roughness: 1.0, bowing: 0.8,
    });
    setPaths(gen.toPaths(drawable).map(p => p.d));
  }, [x, y, w, h, stroke, strokeWidth, fill, seed]);

  return (
    <g opacity={opacity}>
      {paths.map((d, i) => (
        <path key={i} d={d} stroke={stroke} strokeWidth={strokeWidth} fill={fill || "none"} />
      ))}
    </g>
  );
}

// Hand-drawn character
function RoughCharacter({ x, y, scale = 1, expression = "neutral", opacity = 1 }: {
  x: number; y: number; scale?: number; expression?: string; opacity?: number;
}) {
  return (
    <g transform={`translate(${x},${y}) scale(${scale})`} opacity={opacity}>
      {/* Body */}
      <RoughLine x1={0} y1={32} x2={0} y2={82} stroke={C.text} strokeWidth={3} seed={42} />
      {/* Legs */}
      <RoughLine x1={0} y1={82} x2={-14} y2={112} stroke={C.text} strokeWidth={2.5} seed={43} />
      <RoughLine x1={0} y1={82} x2={14} y2={112} stroke={C.text} strokeWidth={2.5} seed={44} />
      {/* Arms */}
      {expression === "happy" && (
        <>
          <RoughLine x1={0} y1={48} x2={-28} y2={38} stroke={C.text} strokeWidth={2.5} seed={45} />
          <RoughLine x1={0} y1={48} x2={28} y2={58} stroke={C.text} strokeWidth={2.5} seed={46} />
        </>
      )}
      {expression === "confused" && (
        <>
          <RoughLine x1={0} y1={48} x2={-20} y2={65} stroke={C.text} strokeWidth={2.5} seed={45} />
          <RoughLine x1={0} y1={48} x2={22} y2={40} stroke={C.text} strokeWidth={2.5} seed={46} />
        </>
      )}
      {expression === "shocked" && (
        <>
          <RoughLine x1={0} y1={48} x2={-30} y2={30} stroke={C.text} strokeWidth={2.5} seed={45} />
          <RoughLine x1={0} y1={48} x2={30} y2={30} stroke={C.text} strokeWidth={2.5} seed={46} />
        </>
      )}
      {(expression === "neutral" || expression === "sleeping") && (
        <>
          <RoughLine x1={0} y1={48} x2={-22} y2={62} stroke={C.text} strokeWidth={2.5} seed={45} />
          <RoughLine x1={0} y1={48} x2={22} y2={62} stroke={C.text} strokeWidth={2.5} seed={46} />
        </>
      )}
      {/* Head */}
      <RoughCircle cx={0} cy={0} r={26} stroke={C.text} strokeWidth={3} fill={C.bg} seed={41} />
      {/* Eyes */}
      {expression === "sleeping" ? (
        <>
          <RoughLine x1={-12} y1={-4} x2={-4} y2={-4} stroke={C.text} strokeWidth={2} seed={50} />
          <RoughLine x1={4} y1={-4} x2={12} y2={-4} stroke={C.text} strokeWidth={2} seed={51} />
          {/* z z z */}
          <text x={30} y={-12} fontSize={18} fill={C.blue} fontWeight="600" opacity={0.6}>z</text>
          <text x={40} y={-26} fontSize={14} fill={C.blue} fontWeight="600" opacity={0.4}>z</text>
        </>
      ) : expression === "shocked" ? (
        <>
          <RoughCircle cx={-8} cy={-4} r={5} stroke={C.text} strokeWidth={2} seed={50} />
          <RoughCircle cx={8} cy={-4} r={5} stroke={C.text} strokeWidth={2} seed={51} />
          <RoughCircle cx={0} cy={12} r={5} stroke={C.text} strokeWidth={2} seed={52} />
        </>
      ) : expression === "confused" ? (
        <>
          <RoughCircle cx={-8} cy={-4} r={3} stroke={C.text} strokeWidth={2} fill={C.text} seed={50} />
          <RoughCircle cx={8} cy={-4} r={3} stroke={C.text} strokeWidth={2} fill={C.text} seed={51} />
          {/* Wobbly mouth */}
          <path d="M -6 10 Q -2 8 2 11 Q 5 13 7 10" fill="none" stroke={C.text} strokeWidth={2} />
          <text x={30} y={-8} fontSize={22} fill={C.accent} fontWeight="700" fontFamily={F.sans}>?</text>
        </>
      ) : expression === "happy" ? (
        <>
          <RoughCircle cx={-8} cy={-4} r={3} stroke={C.text} strokeWidth={2} fill={C.text} seed={50} />
          <RoughCircle cx={8} cy={-4} r={3} stroke={C.text} strokeWidth={2} fill={C.text} seed={51} />
          <path d="M -8 8 Q 0 18 8 8" fill="none" stroke={C.text} strokeWidth={2.5} />
        </>
      ) : (
        <>
          <RoughCircle cx={-8} cy={-4} r={3} stroke={C.text} strokeWidth={2} fill={C.text} seed={50} />
          <RoughCircle cx={8} cy={-4} r={3} stroke={C.text} strokeWidth={2} fill={C.text} seed={51} />
          <RoughLine x1={-6} y1={10} x2={6} y2={10} stroke={C.text} strokeWidth={2} seed={52} />
        </>
      )}
    </g>
  );
}

// Hand-drawn coffee cup
function RoughCoffee({ x, y, scale = 1, opacity = 1, steamIntensity = 1 }: {
  x: number; y: number; scale?: number; opacity?: number; steamIntensity?: number;
}) {
  return (
    <g transform={`translate(${x},${y}) scale(${scale})`} opacity={opacity}>
      <RoughRect x={-20} y={0} w={40} h={50} stroke={C.coffee} strokeWidth={3} fill={C.coffeeDark} seed={60} />
      {/* Handle */}
      <path d="M 20 10 Q 35 10 35 25 Q 35 40 20 40" fill="none" stroke={C.coffee} strokeWidth={2.5}
        style={{ filter: "url(#roughen)" }} />
      {/* Steam lines */}
      {steamIntensity > 0 && (
        <>
          <path d={`M -5 -5 Q -10 ${-15 * steamIntensity} -3 ${-25 * steamIntensity}`}
            fill="none" stroke={C.sub} strokeWidth={1.5} opacity={0.3 * steamIntensity} />
          <path d={`M 5 -3 Q 10 ${-18 * steamIntensity} 3 ${-30 * steamIntensity}`}
            fill="none" stroke={C.sub} strokeWidth={1.5} opacity={0.25 * steamIntensity} />
          <path d={`M 0 -8 Q -6 ${-20 * steamIntensity} 2 ${-35 * steamIntensity}`}
            fill="none" stroke={C.sub} strokeWidth={1.5} opacity={0.2 * steamIntensity} />
        </>
      )}
    </g>
  );
}

// 30s = 900 frames
export const CaffeineV2: React.FC = () => {
  const frame = useCurrentFrame();

  // Camera
  const camScale = interpolate(frame,
    [0, 80, 180, 280, 450, 600, 620, 740, 840, 900],
    [2.0, 2.0, 1.0, 1.0, 0.88, 0.88, 1.3, 1.3, 1.0, 1.05],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
  );
  const camY = interpolate(frame,
    [0, 180, 280, 450, 600, 620, 740, 900],
    [200, 0, 0, -80, -80, -50, 0, 0],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
  );

  // Ambient: warm coffee → cold blue → insight
  const ambHue = interpolate(frame, [0, 300, 550, 900], [30, 30, 230, 170], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });
  const ambInt = interpolate(frame, [0, 200, 500, 750, 900], [0.06, 0.1, 0.14, 0.06, 0.04], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  // Character
  const charExpr = frame < 180 ? "happy" : frame < 350 ? "neutral" : frame < 550 ? "confused" : frame < 700 ? "shocked" : "neutral";
  const charX = interpolate(frame, [0, 180, 350, 700, 900], [1080, 1080, 650, 1080, 1080], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });
  const charY = interpolate(frame, [0, 180, 280, 900], [1050, 1050, 1450, 1450], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });
  const charScale = interpolate(frame, [0, 180, 280, 900], [3.0, 3.0, 1.8, 1.8], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });
  // Hide main character during bed scene (600-740) to avoid doubling
  const charOpacity = interpolate(frame, [0, 25, 590, 610, 740, 770], [0, 1, 1, 0, 0, 0], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  // Coffee cup
  const coffeeOpacity = interpolate(frame, [40, 55, 160, 180], [0, 1, 1, 0], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });
  const steamFade = interpolate(frame, [40, 60, 140, 170], [0, 1, 1, 0], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  // Time label
  const timeOpacity = interpolate(frame, [90, 110, 160, 180], [0, 1, 1, 0], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  // Half-life bars (280-600)
  const barOpacity = interpolate(frame, [285, 310, 580, 600], [0, 1, 1, 0], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  const hours = [
    { t: "2 PM", pct: 100, mg: "200mg", delay: 0, color: C.coffee },
    { t: "7 PM", pct: 50, mg: "100mg", delay: 45, color: C.accent },
    { t: "12 AM", pct: 25, mg: "50mg", delay: 90, color: C.red },
    { t: "5 AM", pct: 12, mg: "25mg", delay: 135, color: `${C.red}88` },
  ];

  // Midnight insight
  const midnightOpacity = interpolate(frame, [450, 470, 580, 600], [0, 1, 1, 0], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  // Bed scene (600-740)
  const bedOpacity = interpolate(frame, [605, 625, 720, 740], [0, 1, 1, 0], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  // Insight (740-840)
  const insightDim = interpolate(frame, [745, 765], [0, 0.9], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const insightOpacity = interpolate(frame, [755, 780, 835, 850], [0, 1, 1, 0], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  // Brand (840-900)
  const brandDim = interpolate(frame, [845, 865], [0, 0.92], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const brandOpacity = interpolate(frame, [860, 880, 900], [0, 1, 1], {
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

      {/* Film grain */}
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

        {/* Hand-drawn character + coffee */}
        <svg width={2160} height={2160} style={{ position: "absolute", left: 0, top: 0, zIndex: 3 }}>
          <RoughCharacter x={charX} y={charY} scale={charScale} expression={charExpr} opacity={charOpacity} />
          {/* Coffee cup near character */}
          {frame >= 40 && frame < 200 && (
            <RoughCoffee
              x={charX + charScale * 35} y={charY + charScale * 15}
              scale={charScale * 0.6} opacity={coffeeOpacity} steamIntensity={steamFade}
            />
          )}
        </svg>

        {/* "2:00 PM — 200mg of caffeine" */}
        <div style={{
          position: "absolute", left: 0, right: 0, top: 650,
          textAlign: "center", opacity: timeOpacity,
        }}>
          <div style={{ fontFamily: F.mono, fontSize: 140, color: C.coffee, fontWeight: 700 }}>
            2:00 PM
          </div>
          <div style={{ fontFamily: F.sans, fontSize: 68, color: C.sub, marginTop: 12 }}>
            One cup. 200mg of caffeine.
          </div>
        </div>

        {/* Half-life visualization — hand-drawn bars */}
        <div style={{
          position: "absolute", left: 200, right: 200, top: 480,
          opacity: barOpacity,
        }}>
          <div style={{
            fontFamily: F.mono, fontSize: 44, color: C.dim,
            letterSpacing: 5, textTransform: "uppercase", textAlign: "center",
            marginBottom: 50,
          }}>
            CAFFEINE HALF-LIFE: ~5 HOURS
          </div>

          {hours.map((h, i) => {
            const entryFrame = 310 + h.delay;
            const o = interpolate(frame, [entryFrame, entryFrame + 18], [0, 1], {
              extrapolateLeft: "clamp", extrapolateRight: "clamp",
            });
            const barW = interpolate(frame, [entryFrame + 8, entryFrame + 35], [0, h.pct], {
              extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic),
            });

            return (
              <div key={i} style={{
                opacity: o, marginBottom: 40,
                display: "flex", alignItems: "center", gap: 24,
              }}>
                <div style={{
                  fontFamily: F.mono, fontSize: 68, fontWeight: i === 2 ? 700 : 400,
                  color: i === 2 ? C.red : C.sub,
                  width: 260, textAlign: "right",
                }}>
                  {h.t}
                </div>
                <div style={{
                  flex: 1, height: 60, borderRadius: 30,
                  background: `${C.dim}15`, position: "relative", overflow: "hidden",
                  border: `1px solid ${C.dim}30`,
                }}>
                  <div style={{
                    width: `${barW}%`, height: "100%", borderRadius: 30,
                    background: `linear-gradient(90deg, ${h.color}, ${h.color}90)`,
                    boxShadow: `0 0 24px ${h.color}25`,
                  }} />
                </div>
                <div style={{
                  fontFamily: F.mono, fontSize: 60, fontWeight: 700,
                  color: h.color, width: 200, textAlign: "right",
                }}>
                  {h.mg}
                </div>
              </div>
            );
          })}
        </div>

        {/* Midnight callout */}
        <div style={{
          position: "absolute", left: 0, right: 0, top: 1480,
          textAlign: "center", opacity: midnightOpacity,
        }}>
          <div style={{
            fontSize: 76, color: C.red, fontFamily: F.serif, fontStyle: "italic",
          }}>
            At midnight, 50mg is still blocking your adenosine receptors.
          </div>
        </div>

        {/* Bed scene — character sleeping (or trying to) */}
        {frame >= 600 && frame < 745 && (
          <div style={{
            position: "absolute", inset: 0,
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            opacity: bedOpacity,
          }}>
            <svg width={800} height={300}>
              {/* Hand-drawn bed */}
              <RoughRect x={80} y={100} w={640} h={120} stroke={C.dim} strokeWidth={2} seed={70} />
              <RoughRect x={50} y={80} w={150} h={100} stroke={`${C.blue}50`} strokeWidth={2} fill={`${C.blue}10`} seed={71} />
              {/* Character in bed */}
              <RoughCharacter x={300} y={130} scale={1.3} expression="sleeping" opacity={1} />
            </svg>
            <div style={{
              fontFamily: F.mono, fontSize: 72, color: C.red, fontWeight: 700,
              marginTop: 30,
            }}>
              12:47 AM
            </div>
            <div style={{
              fontSize: 68, color: C.sub, marginTop: 20,
            }}>
              Eyes closed. Brain still processing caffeine.
            </div>
          </div>
        )}

        {/* Insight */}
        <div style={{ position: "absolute", inset: 0, background: C.bg, opacity: insightDim }} />
        <div style={{
          position: "absolute", left: 0, right: 0, top: 0, bottom: 0,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          opacity: insightOpacity, padding: 80,
        }}>
          <div style={{ fontSize: 96, color: C.sub, fontFamily: F.sans, textAlign: "center" }}>
            You didn't have insomnia.
          </div>
          <div style={{ fontSize: 120, color: C.white, fontFamily: F.serif, fontWeight: 600, marginTop: 30, textAlign: "center" }}>
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
          <div style={{ fontSize: 112, color: C.dim, fontFamily: F.sans }}>
            The half-life was always there.
          </div>
          <div style={{ fontSize: 148, color: C.white, fontFamily: F.serif, fontWeight: 700, marginTop: 25 }}>
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
