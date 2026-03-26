import React from "react";
import {
  useCurrentFrame,
  interpolate,
  Easing,
} from "remotion";

const C = {
  bg: "#0a0f1a",
  bgCard: "#111827",
  text: "#E0E0E0",
  sub: "#8a919e",
  dim: "#3a4050",
  red: "#e8785e",
  green: "#6ec89b",
  accent: "#e89b3e",
  teal: "#0e7a7e",
  white: "#ffffff",
  blue: "#3b82f6",
};

const F = {
  serif: "'DM Serif Display', Georgia, serif",
  sans: "'Inter', -apple-system, sans-serif",
  mono: "'JetBrains Mono', 'SF Mono', monospace",
};

// 32s at 30fps = 960 frames
const T = {
  s1Start: 0, s1End: 160,       // Lab result with gauge
  s2Start: 168, s2End: 300,     // "Normal for who?"
  s3Start: 308, s3End: 560,     // Age-decline curve
  s4Start: 568, s4End: 740,     // The mechanism (aromatase)
  s5Start: 748, s5End: 870,     // The reframe
  s6Start: 878, s6End: 960,     // Brand hit
};

function fadeUp(frame: number, start: number, dur = 14) {
  const o = interpolate(frame, [start, start + dur], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const y = interpolate(frame, [start, start + dur], [45, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });
  return { opacity: o, transform: `translateY(${y}px)` };
}

function sceneVis(frame: number, start: number, end: number) {
  if (frame < start - 5 || frame > end + 15) return 0;
  return Math.min(
    interpolate(frame, [start, start + 12], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    interpolate(frame, [end - 8, end + 12], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
  );
}

// Arc gauge component
function Gauge({ frame, startFrame, value, min, max, optimalMin, optimalMax, label, unit, size }: {
  frame: number; startFrame: number; value: number; min: number; max: number;
  optimalMin: number; optimalMax: number; label: string; unit: string; size: number;
}) {
  const r = size * 0.4;
  const cx = size / 2;
  const cy = size * 0.55;
  const startAngle = Math.PI * 0.8;
  const endAngle = Math.PI * 0.2;
  const totalAngle = 2 * Math.PI - (startAngle - endAngle);

  const valueToAngle = (v: number) => {
    const pct = (v - min) / (max - min);
    return startAngle + pct * totalAngle;
  };

  const polarToCart = (angle: number, radius: number) => ({
    x: cx + radius * Math.cos(angle),
    y: cy + radius * Math.sin(angle),
  });

  // Animated needle
  const needleProgress = interpolate(frame, [startFrame + 20, startFrame + 50], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic),
  });
  const needleAngle = startAngle + needleProgress * ((value - min) / (max - min)) * totalAngle;
  const needleTip = polarToCart(needleAngle, r - 30);
  const needleBase = polarToCart(needleAngle, 20);

  // Arc path helper
  const arcPath = (startA: number, endA: number, radius: number) => {
    const s = polarToCart(startA, radius);
    const e = polarToCart(endA, radius);
    const largeArc = endA - startA > Math.PI ? 1 : 0;
    return `M ${s.x} ${s.y} A ${radius} ${radius} 0 ${largeArc} 1 ${e.x} ${e.y}`;
  };

  // Optimal zone angles
  const optStartA = valueToAngle(optimalMin);
  const optEndA = valueToAngle(optimalMax);

  // Number count-up
  const displayValue = Math.round(interpolate(frame, [startFrame + 20, startFrame + 50], [0, value], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic),
  }));

  const gaugeOpacity = interpolate(frame, [startFrame, startFrame + 14], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  return (
    <div style={{ opacity: gaugeOpacity, position: "relative", width: size, height: size * 0.7 }}>
      <svg width={size} height={size * 0.7} viewBox={`0 0 ${size} ${size * 0.7}`}>
        {/* Background arc */}
        <path d={arcPath(startAngle, startAngle + totalAngle, r)}
          fill="none" stroke={C.dim} strokeWidth={24} strokeLinecap="round" opacity={0.3} />

        {/* Danger zones (low + high) */}
        <path d={arcPath(startAngle, optStartA, r)}
          fill="none" stroke={C.red} strokeWidth={24} strokeLinecap="round" opacity={0.5} />
        <path d={arcPath(optEndA, startAngle + totalAngle, r)}
          fill="none" stroke={C.accent} strokeWidth={24} strokeLinecap="round" opacity={0.4} />

        {/* Optimal zone — glowing green */}
        <path d={arcPath(optStartA, optEndA, r)}
          fill="none" stroke={C.green} strokeWidth={28} strokeLinecap="round" opacity={0.9}
          filter="url(#glow)" />

        {/* Glow filter */}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Scale labels */}
        {[min, 300, 500, 700, max].map((v, i) => {
          const a = valueToAngle(v);
          const p = polarToCart(a, r + 40);
          return (
            <text key={i} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle"
              fill={C.dim} fontSize={36} fontFamily={F.mono}>{v}</text>
          );
        })}

        {/* "Optimal" label on the green zone */}
        {frame >= startFrame + 30 && (() => {
          const midA = (optStartA + optEndA) / 2;
          const p = polarToCart(midA, r + 90);
          const labelOpacity = interpolate(frame, [startFrame + 30, startFrame + 40], [0, 1], {
            extrapolateLeft: "clamp", extrapolateRight: "clamp",
          });
          return (
            <text x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle"
              fill={C.green} fontSize={40} fontFamily={F.sans} fontWeight="600"
              opacity={labelOpacity}>OPTIMAL</text>
          );
        })()}

        {/* Needle */}
        <line x1={needleBase.x} y1={needleBase.y} x2={needleTip.x} y2={needleTip.y}
          stroke={C.white} strokeWidth={6} strokeLinecap="round" />
        <circle cx={cx} cy={cy} r={14} fill={C.white} />
      </svg>

      {/* Center value */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        textAlign: "center",
      }}>
        <div style={{ fontFamily: F.mono, fontSize: 120, fontWeight: 700, color: C.white, lineHeight: 1 }}>
          {displayValue}
        </div>
        <div style={{ fontFamily: F.mono, fontSize: 48, color: C.sub, marginTop: 4 }}>{unit}</div>
        <div style={{ fontFamily: F.sans, fontSize: 44, color: C.dim, marginTop: 8 }}>{label}</div>
      </div>
    </div>
  );
}

export const TestosteroneAnimation: React.FC = () => {
  const frame = useCurrentFrame();
  const dotPulse = 1 + 0.15 * Math.sin(frame * 0.12);
  const dotOpacity = interpolate(frame, [T.s6Start, T.s6Start + 20], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Age-decline data
  const ageData = [
    { age: 25, value: 680 },
    { age: 30, value: 620 },
    { age: 35, value: 560 },
    { age: 40, value: 500 },
    { age: 45, value: 450 },
    { age: 50, value: 410 },
    { age: 55, value: 370 },
    { age: 60, value: 340 },
    { age: 65, value: 320 },
    { age: 70, value: 300 },
    { age: 80, value: 250 },
  ];

  return (
    <div style={{
      width: 2160, height: 2160, background: C.bg,
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      fontFamily: F.sans, overflow: "hidden", position: "relative",
    }}>
      {/* Ambient gradient — shifts with scene */}
      {(() => {
        const scene3Active = frame >= T.s3Start && frame < T.s3End;
        const scene4Active = frame >= T.s4Start && frame < T.s4End;
        const scene5Active = frame >= T.s5Start;
        const gradientOpacity = scene3Active || scene4Active ? 0.12 : scene5Active ? 0.08 : 0.05;
        const gradientColor = scene5Active ? C.red : scene4Active ? C.accent : C.teal;
        return (
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background: `radial-gradient(ellipse at 50% 80%, ${gradientColor}${Math.round(gradientOpacity * 255).toString(16).padStart(2, '0')} 0%, transparent 70%)`,
            transition: "background 0.5s ease-out",
          }} />
        );
      })()}

      {/* Film grain */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.4, pointerEvents: "none", zIndex: 100,
        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
      }} />

      {/* ═══ SCENE 1: Lab Result with Gauge ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        opacity: sceneVis(frame, T.s1Start, T.s1End), padding: 60,
      }}>
        <div style={{
          ...fadeUp(frame, 5, 16),
          fontFamily: F.mono, fontSize: 52, color: C.dim,
          letterSpacing: 10, textTransform: "uppercase", marginBottom: 30,
        }}>
          TOTAL TESTOSTERONE
        </div>

        <Gauge
          frame={frame} startFrame={10}
          value={320} min={100} max={900}
          optimalMin={500} optimalMax={750}
          label="Your result" unit="ng/dL" size={1200}
        />

        {/* NORMAL stamp — appears after needle settles */}
        {frame >= 70 && (() => {
          const stampScale = interpolate(frame, [70, 77], [2.5, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });
          const stampO = interpolate(frame, [70, 75], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          return (
            <div style={{
              marginTop: 30, opacity: stampO,
              transform: `scale(${stampScale}) rotate(-3deg)`,
              border: `6px solid ${C.green}`, borderRadius: 16,
              padding: "18px 50px", color: C.green,
              fontSize: 72, fontWeight: 800, letterSpacing: 6, fontFamily: F.mono,
            }}>NORMAL ✓</div>
          );
        })()}

        <div style={{
          ...fadeUp(frame, 85, 14),
          fontFamily: F.mono, fontSize: 44, color: C.dim, marginTop: 20,
        }}>
          Reference: 264 – 916 ng/dL
        </div>
      </div>

      {/* ═══ SCENE 2: "Normal for who?" ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        opacity: sceneVis(frame, T.s2Start, T.s2End), padding: 100,
      }}>
        <div style={{
          ...fadeUp(frame, T.s2Start + 5, 18),
          fontSize: 140, color: C.sub, fontWeight: 300,
          fontFamily: F.serif, textAlign: "center",
        }}>
          Normal for
        </div>
        <div style={{
          ...fadeUp(frame, T.s2Start + 25, 20),
          fontSize: 180, color: C.white, fontWeight: 600,
          fontFamily: F.serif, textAlign: "center", marginTop: 20,
        }}>
          <span style={{ color: C.red, fontStyle: "italic" }}>who?</span>
        </div>

        {/* Beat drop — the age reveal */}
        <div style={{
          ...fadeUp(frame, T.s2Start + 60, 20),
          fontSize: 92, color: C.sub, fontFamily: F.sans,
          textAlign: "center", marginTop: 70, lineHeight: 1.6,
        }}>
          320 ng/dL is in range for a <span style={{ color: C.accent, fontWeight: 600 }}>70-year-old.</span>
        </div>
        <div style={{
          ...fadeUp(frame, T.s2Start + 80, 20),
          fontSize: 96, color: C.white, fontFamily: F.serif,
          fontWeight: 600, textAlign: "center", marginTop: 20,
        }}>
          Not for <span style={{ color: C.green }}>35.</span>
        </div>
      </div>

      {/* ═══ SCENE 3: Age-Decline Curve ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: sceneVis(frame, T.s3Start, T.s3End),
      }}>
        <div style={{
          ...fadeUp(frame, T.s3Start + 5, 14),
          textAlign: "center", marginTop: 100,
          fontFamily: F.mono, fontSize: 56, color: C.dim,
          letterSpacing: 6, textTransform: "uppercase",
        }}>
          AVERAGE TESTOSTERONE BY AGE
        </div>
        <div style={{
          ...fadeUp(frame, T.s3Start + 10, 14),
          textAlign: "center", marginTop: 10,
          fontFamily: F.sans, fontSize: 48, color: C.sub,
        }}>
          The "normal" range doesn't tell you this
        </div>

        {/* Chart area */}
        {(() => {
          const chartL = 300, chartR = 1750, chartT = 380, chartB = 1500;
          const chartW = chartR - chartL, chartH = chartB - chartT;

          const xForAge = (age: number) => chartL + ((age - 25) / (80 - 25)) * chartW;
          const yForVal = (v: number) => chartB - ((v - 200) / (700 - 200)) * chartH;

          // Animated line progress
          const lineProgress = interpolate(frame, [T.s3Start + 30, T.s3Start + 120], [0, 1], {
            extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic),
          });

          const visiblePoints = Math.floor(lineProgress * ageData.length);

          // "Normal range" band
          const normalTop = yForVal(916);
          const normalBottom = yForVal(264);

          // "You" marker
          const youX = xForAge(35);
          const youY = yForVal(320);
          const youVisible = frame >= T.s3Start + 140;
          const youOpacity = youVisible ? interpolate(frame, [T.s3Start + 140, T.s3Start + 155], [0, 1], {
            extrapolateLeft: "clamp", extrapolateRight: "clamp",
          }) : 0;

          return (
            <svg style={{ position: "absolute", left: 0, top: 0, width: 2160, height: 2160 }}>
              {/* Optimal band — subtle, not dominant */}
              <rect x={chartL} y={yForVal(750)} width={chartW} height={yForVal(500) - yForVal(750)}
                fill={C.green} opacity={0.06} rx={8} />
              <text x={chartL + 20} y={yForVal(750) + 40}
                fill={C.green} fontSize={34} fontFamily={F.mono} opacity={0.7}>optimal 500-750</text>

              {/* Lab minimum line */}
              <line x1={chartL} y1={normalBottom} x2={chartR} y2={normalBottom}
                stroke={C.red} strokeWidth={2} strokeDasharray="12,8" opacity={0.4} />
              <text x={chartL + 20} y={normalBottom - 14}
                fill={C.red} fontSize={34} fontFamily={F.mono} opacity={0.6}>lab minimum: 264</text>

              {/* Y-axis */}
              {[300, 400, 500, 600, 700].map(v => (
                <React.Fragment key={v}>
                  <line x1={chartL - 10} y1={yForVal(v)} x2={chartL} y2={yForVal(v)} stroke={C.dim} strokeWidth={2} />
                  <text x={chartL - 20} y={yForVal(v) + 12} textAnchor="end"
                    fill={C.dim} fontSize={36} fontFamily={F.mono}>{v}</text>
                </React.Fragment>
              ))}

              {/* Decline line */}
              {ageData.slice(0, visiblePoints).map((d, i) => {
                if (i === 0) return null;
                const prev = ageData[i - 1];
                return (
                  <line key={i}
                    x1={xForAge(prev.age)} y1={yForVal(prev.value)}
                    x2={xForAge(d.age)} y2={yForVal(d.value)}
                    stroke={C.accent} strokeWidth={6} strokeLinecap="round" />
                );
              })}

              {/* Data points */}
              {ageData.slice(0, visiblePoints).map((d, i) => (
                <React.Fragment key={i}>
                  <circle cx={xForAge(d.age)} cy={yForVal(d.value)} r={10}
                    fill={d.value >= 500 ? C.green : d.value >= 350 ? C.accent : C.red} />
                  <text x={xForAge(d.age)} y={chartB + 50} textAnchor="middle"
                    fill={C.dim} fontSize={36} fontFamily={F.mono}>{d.age}</text>
                </React.Fragment>
              ))}

              {/* X-axis label */}
              <text x={(chartL + chartR) / 2} y={chartB + 100} textAnchor="middle"
                fill={C.dim} fontSize={40} fontFamily={F.sans}>Age</text>

              {/* "YOU" marker */}
              {youVisible && (
                <>
                  <line x1={youX} y1={chartT} x2={youX} y2={chartB}
                    stroke={C.white} strokeWidth={3} strokeDasharray="8,6" opacity={youOpacity * 0.4} />
                  <circle cx={youX} cy={youY} r={18}
                    fill={C.red} stroke={C.white} strokeWidth={4} opacity={youOpacity} />
                  <rect x={youX - 80} y={youY - 80} width={160} height={50} rx={8}
                    fill={C.red} opacity={youOpacity} />
                  <text x={youX} y={youY - 48} textAnchor="middle"
                    fill={C.white} fontSize={36} fontWeight="700" fontFamily={F.sans} opacity={youOpacity}>YOU</text>
                </>
              )}
            </svg>
          );
        })()}

        {/* Bottom caption */}
        {frame >= T.s3Start + 160 && (
          <div style={{
            ...fadeUp(frame, T.s3Start + 160, 18),
            position: "absolute", bottom: 200, left: 0, right: 0,
            textAlign: "center",
            fontSize: 72, color: C.sub, fontFamily: F.serif, fontStyle: "italic",
          }}>
            1-2% decline per year after 30. The range never adjusts.
          </div>
        )}
      </div>

      {/* ═══ SCENE 4: The Mechanism (Aromatase) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        opacity: sceneVis(frame, T.s4Start, T.s4End), padding: 80,
      }}>
        <div style={{
          ...fadeUp(frame, T.s4Start + 5, 16),
          fontFamily: F.mono, fontSize: 52, color: C.dim,
          letterSpacing: 6, textTransform: "uppercase", marginBottom: 50,
        }}>
          WHY IT DROPS
        </div>

        {/* Visual: T → Estrogen conversion — large, atmospheric */}
        <div style={{
          ...fadeUp(frame, T.s4Start + 20, 18),
          display: "flex", alignItems: "center", justifyContent: "center", gap: 80,
          marginBottom: 60, width: "100%",
        }}>
          {/* Testosterone — large, glowing */}
          <div style={{ textAlign: "center", position: "relative" }}>
            <div style={{
              position: "absolute", inset: -40,
              background: `radial-gradient(circle, ${C.blue}15 0%, transparent 70%)`,
              borderRadius: "50%",
            }} />
            <div style={{ fontSize: 200, fontWeight: 700, fontFamily: F.serif, color: C.blue, position: "relative" }}>T</div>
            <div style={{ fontSize: 56, color: C.sub, marginTop: 8 }}>Testosterone</div>
          </div>

          {/* Arrow with enzyme label — animated width */}
          {(() => {
            const arrowWidth = interpolate(frame, [T.s4Start + 35, T.s4Start + 50], [0, 1], {
              extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic),
            });
            return (
              <div style={{
                display: "flex", flexDirection: "column", alignItems: "center", gap: 12,
                opacity: arrowWidth,
              }}>
                <div style={{ fontSize: 56, color: C.accent, fontFamily: F.mono, fontWeight: 700 }}>aromatase</div>
                <div style={{
                  width: 200, height: 6, borderRadius: 3,
                  background: `linear-gradient(90deg, ${C.blue}, ${C.accent}, ${C.red})`,
                }} />
                <div style={{
                  fontSize: 52, color: C.accent, fontFamily: F.sans, fontStyle: "italic",
                  padding: "10px 28px", background: `${C.accent}10`, borderRadius: 12, border: `1px solid ${C.accent}30`,
                }}>
                  in fat tissue
                </div>
              </div>
            );
          })()}

          {/* Estrogen — large, red glow */}
          <div style={{
            ...fadeUp(frame, T.s4Start + 50, 16),
            textAlign: "center", position: "relative",
          }}>
            <div style={{
              position: "absolute", inset: -40,
              background: `radial-gradient(circle, ${C.red}15 0%, transparent 70%)`,
              borderRadius: "50%",
            }} />
            <div style={{ fontSize: 200, fontWeight: 700, fontFamily: F.serif, color: C.red, position: "relative" }}>E</div>
            <div style={{ fontSize: 56, color: C.sub, marginTop: 8 }}>Estrogen</div>
          </div>
        </div>

        {/* The insight — larger, more weight */}
        <div style={{
          ...fadeUp(frame, T.s4Start + 75, 18),
          fontSize: 84, color: C.text, fontFamily: F.serif,
          textAlign: "center", lineHeight: 1.5, maxWidth: 1700,
        }}>
          More body fat. More aromatase. More conversion.
        </div>
        <div style={{
          ...fadeUp(frame, T.s4Start + 95, 18),
          fontSize: 92, color: C.accent, fontFamily: F.serif,
          fontWeight: 600, fontStyle: "italic", textAlign: "center", marginTop: 25,
        }}>
          The inflection is around 18-20% body fat.
        </div>
      </div>

      {/* ═══ SCENE 5: The Reframe ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        opacity: sceneVis(frame, T.s5Start, T.s5End), padding: 80,
      }}>
        <div style={{
          ...fadeUp(frame, T.s5Start + 5, 18),
          fontSize: 100, color: C.sub, fontWeight: 400,
          fontFamily: F.sans, textAlign: "center",
        }}>
          The lab says "normal."
        </div>
        <div style={{
          ...fadeUp(frame, T.s5Start + 25, 20),
          fontSize: 108, color: C.white, fontWeight: 600,
          fontFamily: F.serif, textAlign: "center", marginTop: 30,
          lineHeight: 1.4,
        }}>
          Your body says
        </div>
        <div style={{
          ...fadeUp(frame, T.s5Start + 40, 20),
          fontSize: 140, color: C.red, fontWeight: 700,
          fontFamily: F.serif, fontStyle: "italic", textAlign: "center",
          marginTop: 10,
        }}>
          "I'm running on half."
        </div>

        <div style={{
          ...fadeUp(frame, T.s5Start + 75, 16),
          fontSize: 64, color: C.dim, fontFamily: F.mono,
          marginTop: 60, textAlign: "center",
        }}>
          320 ng/dL at 35 ≠ 320 ng/dL at 70
        </div>
      </div>

      {/* ═══ SCENE 6: Brand Hit ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        opacity: sceneVis(frame, T.s6Start, T.s6End), padding: 80,
      }}>
        <div style={{
          ...fadeUp(frame, T.s6Start + 5, 18),
          fontSize: 116, color: C.dim, fontWeight: 400, fontFamily: F.sans,
        }}>
          The range doesn't age.
        </div>
        <div style={{
          ...fadeUp(frame, T.s6Start + 25, 22),
          textAlign: "center", marginTop: 30,
        }}>
          <div style={{ fontSize: 156, color: C.white, fontWeight: 700, fontFamily: F.serif }}>
            You <span style={{ color: C.accent, fontStyle: "italic" }}>do.</span>
          </div>
        </div>

        <div style={{
          width: 18, height: 18, borderRadius: "50%",
          background: C.green, marginTop: 70,
          opacity: dotOpacity, transform: `scale(${dotPulse})`,
          boxShadow: `0 0 30px ${C.green}60, 0 0 80px ${C.green}20`,
        }} />
      </div>
    </div>
  );
};
