import React from "react";
import {
  useCurrentFrame,
  interpolate,
  Easing,
} from "remotion";

const C = {
  bg: "#0a0f1a",
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
// NO scenes. One continuous flow.

export const TestosteroneFluid: React.FC = () => {
  const frame = useCurrentFrame();

  // === CAMERA ===
  // The "camera" is a scale + translate on the entire canvas
  // Phase 1 (0-160): tight on number
  // Phase 2 (160-300): pull back to gauge
  // Phase 3 (300-500): gauge morphs to curve
  // Phase 4 (500-700): zoom into low end / mechanism
  // Phase 5 (700-850): pull back for reframe
  // Phase 6 (850-960): brand hit

  const camScale = interpolate(frame,
    [0,   60,  160,  300,  360,  500,  560,  700,  760, 850, 960],
    [2.5, 2.5, 1.0,  1.0,  0.85, 0.85, 1.0,  1.0,  1.0, 1.0, 1.1],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp", easing: Easing.inOut(Easing.cubic) }
  );

  const camX = interpolate(frame,
    [0,   160,  300,  500,   560,  700,  760, 960],
    [0,   0,    0,    -100,  200,  200,  0,   0],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
  );

  const camY = interpolate(frame,
    [0,   60,   160,  300,  500,  560,  700,  760, 960],
    [100, 100,  0,    -50,  -50,  100,  100,  0,   0],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
  );

  // === AMBIENT LIGHT ===
  const ambientHue = interpolate(frame, [0, 300, 600, 800, 960], [200, 180, 30, 0, 160], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });
  const ambientIntensity = interpolate(frame, [0, 200, 400, 700, 850, 960], [0.03, 0.06, 0.1, 0.12, 0.06, 0.04], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  // === ELEMENTS ===

  // The NUMBER — 320 — always present, changes role
  const numberOpacity = interpolate(frame, [0, 15, 750, 780], [0, 1, 1, 0], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });
  // Starts centered, moves to gauge position, then to curve data point
  // At age 65, value 320: xAge(65)=1549, yVal(320)=1260
  const numberX = interpolate(frame,
    [0,   160,  300,  420],
    [1080, 1080, 1080, 1549],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp", easing: Easing.inOut(Easing.cubic) }
  );
  const numberY = interpolate(frame,
    [0,   160,  300,  420],
    [1000, 1000, 1000, 1180],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp", easing: Easing.inOut(Easing.cubic) }
  );
  const numberSize = interpolate(frame,
    [0,   160,  300,  400],
    [280, 280,  120,  72],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp", easing: Easing.inOut(Easing.cubic) }
  );

  // Unit text
  const unitOpacity = interpolate(frame, [30, 45, 280, 300], [0, 1, 1, 0], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  // "NORMAL ✓" stamp
  const stampOpacity = interpolate(frame, [80, 88, 200, 230], [0, 1, 1, 0], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });
  const stampScale = interpolate(frame, [80, 90], [2.5, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic),
  });

  // "Normal for who?" text
  const whoOpacity = interpolate(frame, [170, 185, 280, 300], [0, 1, 1, 0], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });
  const whoY = interpolate(frame, [170, 185], [40, 0], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic),
  });

  // Age context
  const ageOpacity = interpolate(frame, [220, 235, 280, 300], [0, 1, 1, 0], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  // === GAUGE ARC ===
  // Appears 60-160, morphs to horizontal line 300-400
  const gaugeOpacity = interpolate(frame, [60, 75, 280, 320], [0, 1, 1, 0], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  // Gauge SVG params
  const gaugeCx = 1080, gaugeCy = 1050;
  const gaugeR = 420;
  const startAngle = Math.PI * 0.8;
  const totalAngle = 2 * Math.PI - (startAngle - Math.PI * 0.2);

  const valueToAngle = (v: number) => startAngle + ((v - 100) / (900 - 100)) * totalAngle;
  const needleAngle = interpolate(frame, [75, 120], [startAngle, valueToAngle(320)], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic),
  });

  const polarToCart = (a: number, r: number) => ({
    x: gaugeCx + r * Math.cos(a),
    y: gaugeCy + r * Math.sin(a),
  });

  const needleTip = polarToCart(needleAngle, gaugeR - 30);
  const needleBase = polarToCart(needleAngle, 20);

  // === DECLINE CURVE ===
  // Fades in 320-500
  const curveOpacity = interpolate(frame, [320, 350, 750, 780], [0, 1, 1, 0], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  const ageData = [
    { age: 25, value: 680 }, { age: 30, value: 620 }, { age: 35, value: 560 },
    { age: 40, value: 500 }, { age: 45, value: 450 }, { age: 50, value: 410 },
    { age: 55, value: 370 }, { age: 60, value: 340 }, { age: 65, value: 320 },
    { age: 70, value: 300 }, { age: 80, value: 250 },
  ];

  const curveL = 200, curveR = 1960, curveT = 400, curveB = 1650;
  const curveW = curveR - curveL, curveH = curveB - curveT;
  const xAge = (age: number) => curveL + ((age - 25) / (80 - 25)) * curveW;
  const yVal = (v: number) => curveB - ((v - 200) / (700 - 200)) * curveH;

  const lineDrawProgress = interpolate(frame, [350, 500], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic),
  });
  const visiblePts = Math.max(1, Math.floor(lineDrawProgress * ageData.length));

  // "YOU" marker
  const youOpacity = interpolate(frame, [480, 500, 750, 780], [0, 1, 1, 0], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  // Subtitle under curve
  const curveSubOpacity = interpolate(frame, [510, 530, 550, 560], [0, 1, 1, 0.7], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  // === MECHANISM (T → E) ===
  const mechOpacity = interpolate(frame, [570, 590, 720, 750], [0, 1, 1, 0], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });
  const mechTextOpacity = interpolate(frame, [630, 650, 720, 750], [0, 1, 1, 0], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  // === REFRAME TEXT ===
  const reframeOpacity = interpolate(frame, [760, 780, 840, 855], [0, 1, 1, 0], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });
  const reframeY = interpolate(frame, [760, 780], [30, 0], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic),
  });

  // === BRAND HIT ===
  const brandOpacity = interpolate(frame, [860, 880, 960], [0, 1, 1], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });
  const brandY = interpolate(frame, [860, 885], [40, 0], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic),
  });
  const dotPulse = 1 + 0.15 * Math.sin(frame * 0.12);

  // Build SVG arc path
  const arcPath = (sA: number, eA: number, r: number) => {
    const s = polarToCart(sA, r);
    const e = polarToCart(eA, r);
    const large = eA - sA > Math.PI ? 1 : 0;
    return `M ${s.x} ${s.y} A ${r} ${r} 0 ${large} 1 ${e.x} ${e.y}`;
  };

  const optStartA = valueToAngle(500);
  const optEndA = valueToAngle(750);

  return (
    <div style={{
      width: 2160, height: 2160, background: C.bg,
      overflow: "hidden", position: "relative",
      fontFamily: F.sans,
    }}>
      {/* Ambient light */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: `radial-gradient(ellipse at 50% 60%, hsla(${ambientHue},60%,50%,${ambientIntensity}) 0%, transparent 65%)`,
      }} />

      {/* Film grain */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none", zIndex: 100,
        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
      }} />

      {/* === CAMERA CONTAINER === */}
      <div style={{
        position: "absolute", inset: 0,
        transform: `scale(${camScale}) translate(${camX}px, ${camY}px)`,
        transformOrigin: "center center",
        willChange: "transform",
      }}>

        {/* === THE NUMBER — 320 === */}
        <div style={{
          position: "absolute",
          left: numberX - numberSize * 1.2,
          top: numberY - numberSize * 0.5,
          opacity: numberOpacity,
          fontFamily: F.mono,
          fontSize: numberSize,
          fontWeight: 700,
          color: C.white,
          width: numberSize * 2.4,
          textAlign: "center",
          lineHeight: 1,
          transition: "none",
        }}>
          320
        </div>

        {/* Unit */}
        <div style={{
          position: "absolute",
          left: numberX - 100, top: numberY + numberSize * 0.5 + 10,
          opacity: unitOpacity,
          fontFamily: F.mono, fontSize: 64, color: C.sub,
          width: 200, textAlign: "center",
        }}>
          ng/dL
        </div>

        {/* NORMAL stamp */}
        <div style={{
          position: "absolute",
          left: 1080 - 160, top: 1250,
          opacity: stampOpacity,
          transform: `scale(${stampScale}) rotate(-3deg)`,
          border: `5px solid ${C.green}`, borderRadius: 14,
          padding: "14px 40px", color: C.green,
          fontSize: 64, fontWeight: 800, letterSpacing: 5, fontFamily: F.mono,
        }}>
          NORMAL ✓
        </div>

        {/* "Normal for who?" */}
        <div style={{
          position: "absolute",
          left: 0, right: 0, top: 500,
          opacity: whoOpacity,
          transform: `translateY(${whoY}px)`,
          textAlign: "center",
        }}>
          <span style={{ fontSize: 120, fontFamily: F.serif, color: C.sub, fontWeight: 300 }}>
            Normal for{" "}
          </span>
          <span style={{ fontSize: 150, fontFamily: F.serif, color: C.red, fontStyle: "italic", fontWeight: 600 }}>
            who?
          </span>
        </div>

        {/* Age context */}
        <div style={{
          position: "absolute",
          left: 0, right: 0, top: 1400,
          opacity: ageOpacity,
          textAlign: "center",
        }}>
          <div style={{ fontSize: 76, color: C.sub }}>
            320 is in range for <span style={{ color: C.accent, fontWeight: 600 }}>70.</span>
          </div>
          <div style={{ fontSize: 84, color: C.white, fontFamily: F.serif, fontWeight: 600, marginTop: 10 }}>
            Not for <span style={{ color: C.green }}>35.</span>
          </div>
        </div>

        {/* === GAUGE === */}
        <svg style={{
          position: "absolute", left: 0, top: 0,
          width: 2160, height: 2160,
          opacity: gaugeOpacity, pointerEvents: "none",
        }}>
          <defs>
            <filter id="arcGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
          <path d={arcPath(startAngle, startAngle + totalAngle, gaugeR)}
            fill="none" stroke={C.dim} strokeWidth={20} strokeLinecap="round" opacity={0.25} />
          <path d={arcPath(startAngle, optStartA, gaugeR)}
            fill="none" stroke={C.red} strokeWidth={20} strokeLinecap="round" opacity={0.4} />
          <path d={arcPath(optStartA, optEndA, gaugeR)}
            fill="none" stroke={C.green} strokeWidth={24} strokeLinecap="round" opacity={0.8} filter="url(#arcGlow)" />
          <path d={arcPath(optEndA, startAngle + totalAngle, gaugeR)}
            fill="none" stroke={C.accent} strokeWidth={20} strokeLinecap="round" opacity={0.35} />
          {/* Needle */}
          <line x1={needleBase.x} y1={needleBase.y} x2={needleTip.x} y2={needleTip.y}
            stroke={C.white} strokeWidth={5} strokeLinecap="round" />
          <circle cx={gaugeCx} cy={gaugeCy} r={10} fill={C.white} />
          {/* OPTIMAL label */}
          {(() => { const p = polarToCart((optStartA + optEndA) / 2, gaugeR + 70);
            return <text x={p.x} y={p.y} textAnchor="middle" fill={C.green} fontSize={36} fontFamily={F.sans} fontWeight="600">OPTIMAL</text>;
          })()}
        </svg>

        {/* === DECLINE CURVE === */}
        <svg style={{
          position: "absolute", left: 0, top: 0,
          width: 2160, height: 2160,
          opacity: curveOpacity, pointerEvents: "none",
        }}>
          {/* Optimal band */}
          <rect x={curveL} y={yVal(750)} width={curveW} height={yVal(500) - yVal(750)}
            fill={C.green} opacity={0.05} rx={6} />
          <text x={curveL + 16} y={yVal(750) + 36}
            fill={C.green} fontSize={32} fontFamily={F.mono} opacity={0.6}>optimal</text>

          {/* Lab min line */}
          <line x1={curveL} y1={yVal(264)} x2={curveR} y2={yVal(264)}
            stroke={C.red} strokeWidth={2} strokeDasharray="10,8" opacity={0.35} />
          <text x={curveL + 16} y={yVal(264) - 12}
            fill={C.red} fontSize={32} fontFamily={F.mono} opacity={0.5}>lab min 264</text>

          {/* Y axis */}
          {[300, 400, 500, 600, 700].map(v => (
            <text key={v} x={curveL - 20} y={yVal(v) + 10} textAnchor="end"
              fill={C.dim} fontSize={32} fontFamily={F.mono}>{v}</text>
          ))}

          {/* Lines */}
          {ageData.slice(0, visiblePts).map((d, i) => {
            if (i === 0) return null;
            const prev = ageData[i - 1];
            return (
              <line key={`l${i}`}
                x1={xAge(prev.age)} y1={yVal(prev.value)}
                x2={xAge(d.age)} y2={yVal(d.value)}
                stroke={C.accent} strokeWidth={5} strokeLinecap="round" opacity={0.85} />
            );
          })}

          {/* Points */}
          {ageData.slice(0, visiblePts).map((d, i) => (
            <circle key={`p${i}`} cx={xAge(d.age)} cy={yVal(d.value)} r={8}
              fill={d.value >= 500 ? C.green : d.value >= 350 ? C.accent : C.red} />
          ))}

          {/* Age labels */}
          {ageData.slice(0, visiblePts).map((d, i) => (
            <text key={`a${i}`} x={xAge(d.age)} y={curveB + 44} textAnchor="middle"
              fill={C.dim} fontSize={32} fontFamily={F.mono}>{d.age}</text>
          ))}

          {/* YOU marker */}
          <circle cx={xAge(35)} cy={yVal(320)} r={16}
            fill={C.red} stroke={C.white} strokeWidth={3} opacity={youOpacity} />
          <text x={xAge(35)} y={yVal(320) - 30} textAnchor="middle"
            fill={C.white} fontSize={40} fontWeight="700" fontFamily={F.sans} opacity={youOpacity}>YOU</text>
        </svg>

        {/* Curve subtitle */}
        <div style={{
          position: "absolute", left: 0, right: 0, top: 1720,
          textAlign: "center", opacity: curveSubOpacity,
          fontSize: 64, color: C.sub, fontFamily: F.serif, fontStyle: "italic",
        }}>
          1-2% decline per year. The range never adjusts.
        </div>

        {/* === MECHANISM: T → E === */}
        {/* Background dim to soften the curve underneath */}
        <div style={{
          position: "absolute", inset: 0,
          background: C.bg, opacity: mechOpacity * 0.85,
        }} />
        <div style={{
          position: "absolute", left: 0, right: 0, top: 0, bottom: 0,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          opacity: mechOpacity,
        }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 80,
          }}>
            <div style={{ textAlign: "center", position: "relative" }}>
              <div style={{
                position: "absolute", inset: -50,
                background: `radial-gradient(circle, ${C.blue}18 0%, transparent 70%)`,
                borderRadius: "50%",
              }} />
              <div style={{ fontSize: 220, fontWeight: 700, fontFamily: F.serif, color: C.blue, position: "relative" }}>T</div>
              <div style={{ fontSize: 52, color: C.sub }}>Testosterone</div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
              <div style={{ fontSize: 52, color: C.accent, fontFamily: F.mono, fontWeight: 700 }}>aromatase</div>
              <div style={{
                width: 180, height: 5, borderRadius: 3,
                background: `linear-gradient(90deg, ${C.blue}, ${C.accent}, ${C.red})`,
              }} />
              <div style={{ fontSize: 48, color: C.accent, fontStyle: "italic" }}>in fat tissue</div>
            </div>

            <div style={{ textAlign: "center", position: "relative" }}>
              <div style={{
                position: "absolute", inset: -50,
                background: `radial-gradient(circle, ${C.red}18 0%, transparent 70%)`,
                borderRadius: "50%",
              }} />
              <div style={{ fontSize: 220, fontWeight: 700, fontFamily: F.serif, color: C.red, position: "relative" }}>E</div>
              <div style={{ fontSize: 52, color: C.sub }}>Estrogen</div>
            </div>
          </div>

          <div style={{
            opacity: mechTextOpacity, textAlign: "center", marginTop: 60,
          }}>
            <div style={{ fontSize: 80, color: C.text, fontFamily: F.serif }}>
              More body fat. More conversion.
            </div>
            <div style={{ fontSize: 88, color: C.accent, fontFamily: F.serif, fontWeight: 600, fontStyle: "italic", marginTop: 16 }}>
              The inflection: 18-20% body fat.
            </div>
          </div>
        </div>

        {/* === REFRAME === */}
        <div style={{ position: "absolute", inset: 0, background: C.bg, opacity: reframeOpacity * 0.9 }} />
        <div style={{
          position: "absolute", left: 0, right: 0, top: 0, bottom: 0,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          opacity: reframeOpacity, transform: `translateY(${reframeY}px)`,
        }}>
          <div style={{ fontSize: 100, color: C.sub, fontFamily: F.sans, marginBottom: 20 }}>
            The lab says "normal."
          </div>
          <div style={{ fontSize: 116, color: C.white, fontFamily: F.serif, fontWeight: 600 }}>
            Your body says
          </div>
          <div style={{ fontSize: 140, color: C.red, fontFamily: F.serif, fontWeight: 700, fontStyle: "italic", marginTop: 10 }}>
            "I'm running on half."
          </div>
        </div>

        {/* === BRAND HIT === */}
        <div style={{ position: "absolute", inset: 0, background: C.bg, opacity: brandOpacity * 0.92 }} />
        <div style={{
          position: "absolute", left: 0, right: 0, top: 0, bottom: 0,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          opacity: brandOpacity, transform: `translateY(${brandY}px)`,
        }}>
          <div style={{ fontSize: 120, color: C.dim, fontFamily: F.sans }}>
            The range doesn't age.
          </div>
          <div style={{ fontSize: 160, color: C.white, fontFamily: F.serif, fontWeight: 700, marginTop: 20 }}>
            You <span style={{ color: C.accent, fontStyle: "italic" }}>do.</span>
          </div>
          <div style={{
            width: 16, height: 16, borderRadius: "50%",
            background: C.green, marginTop: 60,
            transform: `scale(${dotPulse})`,
            boxShadow: `0 0 30px ${C.green}60, 0 0 80px ${C.green}20`,
          }} />
        </div>

      </div>{/* end camera container */}
    </div>
  );
};
