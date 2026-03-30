import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

// COFFEE REEL 2 — "Roast Curve" — Live Instrument Panel
// The reel IS a roaster's control panel. A roast profile graph draws itself
// in real-time while data readouts update. Content = transformation through heat.
// Form = live instrument readout.
// 540 frames @ 30fps = 18s
// Safe zones: top 288px, bottom 480px, right 120px

const clamp = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };

const ESPRESSO = "#2C1810";
const PARCHMENT = "#F4EDE4";
const COPPER = "#B87333";
const SAGE = "#6B7F5E";
const AMBER = "#D4915E";
const CHARCOAL = "#1A1714";
const CREAM = "#FAF6F0";

// ═══ ROAST CURVE DATA ═══
// S-curve: slow rise → acceleration → inflection at first crack → plateau
// Time 0-12min mapped to frames, temp 20-220°C
const roastCurvePoints = (() => {
  const pts: { x: number; y: number }[] = [];
  for (let i = 0; i <= 100; i++) {
    const t = i / 100; // 0-1 normalized time
    // Characteristic coffee roast S-curve via sigmoid blend
    const slow = t * 0.3; // initial drying — slow linear
    const accel = Math.pow(t, 1.8) * 0.6; // maillard acceleration
    const sigmoid = 1 / (1 + Math.exp(-12 * (t - 0.55))); // inflection at first crack
    const blend = slow + accel * 0.5 + sigmoid * 0.35;
    const temp = 20 + blend * 200; // 20°C to ~220°C
    pts.push({ x: t, y: Math.min(temp, 218) });
  }
  return pts;
})();

const getTempAtProgress = (progress: number): number => {
  const idx = Math.min(Math.floor(progress * 100), 99);
  const nextIdx = Math.min(idx + 1, 100);
  const frac = progress * 100 - idx;
  return roastCurvePoints[idx].y * (1 - frac) + roastCurvePoints[nextIdx].y * frac;
};

// ═══ TEMPERATURE GAUGE COMPONENT ═══
const TemperatureGauge: React.FC<{
  temp: number;
  size: number;
  x: number;
  y: number;
  opacity: number;
  showLabel?: boolean;
}> = ({ temp, size, x, y, opacity, showLabel = true }) => {
  const radius = size * 0.42;
  const cx = size / 2;
  const cy = size / 2;
  const startAngle = 135; // gauge starts at bottom-left
  const endAngle = 405; // sweeps 270° to bottom-right
  const tempNorm = Math.max(0, Math.min(1, (temp - 20) / 200)); // 20-220 range
  const needleAngle = startAngle + tempNorm * 270;

  // Tick marks
  const ticks = Array.from({ length: 23 }, (_, i) => {
    const angle = startAngle + (i / 22) * 270;
    const rad = (angle * Math.PI) / 180;
    const isMajor = i % 5 === 0;
    const innerR = radius * (isMajor ? 0.82 : 0.88);
    const outerR = radius * 0.95;
    return {
      x1: cx + Math.cos(rad) * innerR,
      y1: cy + Math.sin(rad) * innerR,
      x2: cx + Math.cos(rad) * outerR,
      y2: cy + Math.sin(rad) * outerR,
      isMajor,
      label: isMajor ? Math.round(20 + (i / 22) * 200) : null,
      labelX: cx + Math.cos(rad) * (radius * 0.72),
      labelY: cy + Math.sin(rad) * (radius * 0.72),
    };
  });

  const needleRad = (needleAngle * Math.PI) / 180;
  const needleLen = radius * 0.75;

  // Glow intensity based on temperature
  const glowIntensity = tempNorm * 0.6;

  return (
    <div style={{
      position: "absolute",
      left: x - size / 2,
      top: y - size / 2,
      width: size,
      height: size,
      opacity,
    }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Outer ring glow */}
        <circle cx={cx} cy={cy} r={radius + 4} fill="none"
          stroke={`rgba(184,115,51,${glowIntensity * 0.3})`} strokeWidth={3} />

        {/* Gauge arc background */}
        <path
          d={describeArc(cx, cy, radius, startAngle, endAngle)}
          fill="none" stroke={`${CREAM}15`} strokeWidth={6} strokeLinecap="round"
        />

        {/* Gauge arc filled */}
        <path
          d={describeArc(cx, cy, radius, startAngle, needleAngle)}
          fill="none"
          stroke={tempNorm < 0.33 ? SAGE : tempNorm < 0.66 ? AMBER : COPPER}
          strokeWidth={6} strokeLinecap="round"
        />

        {/* Tick marks */}
        {ticks.map((t, i) => (
          <g key={i}>
            <line x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2}
              stroke={t.isMajor ? `${CREAM}60` : `${CREAM}25`}
              strokeWidth={t.isMajor ? 2 : 1} />
            {t.label !== null && size > 200 && (
              <text x={t.labelX} y={t.labelY} fill={`${CREAM}40`}
                fontSize={size * 0.04} textAnchor="middle" dominantBaseline="central"
                fontFamily="'JetBrains Mono', monospace">
                {t.label}
              </text>
            )}
          </g>
        ))}

        {/* Needle */}
        <line
          x1={cx} y1={cy}
          x2={cx + Math.cos(needleRad) * needleLen}
          y2={cy + Math.sin(needleRad) * needleLen}
          stroke={COPPER} strokeWidth={3} strokeLinecap="round"
        />

        {/* Needle glow */}
        <line
          x1={cx} y1={cy}
          x2={cx + Math.cos(needleRad) * needleLen}
          y2={cy + Math.sin(needleRad) * needleLen}
          stroke={COPPER} strokeWidth={8} strokeLinecap="round"
          opacity={glowIntensity * 0.3}
        />

        {/* Center dot */}
        <circle cx={cx} cy={cy} r={size * 0.03} fill={COPPER} />
        <circle cx={cx} cy={cy} r={size * 0.015} fill={CHARCOAL} />
      </svg>

      {/* Digital readout */}
      <div style={{
        position: "absolute",
        left: "50%", top: "62%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
      }}>
        <div style={{
          fontSize: size * 0.14,
          color: CREAM,
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: 500,
          fontVariantNumeric: "tabular-nums",
          letterSpacing: -1,
          textShadow: `0 0 ${glowIntensity * 20}px rgba(184,115,51,${glowIntensity * 0.5})`,
        }}>
          {Math.round(temp).toString().padStart(3, "\u2007")}°C
        </div>
      </div>

      {/* Label */}
      {showLabel && (
        <div style={{
          position: "absolute",
          left: "50%", bottom: size * 0.08,
          transform: "translateX(-50%)",
          fontSize: size * 0.04,
          color: `${CREAM}50`,
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: 2,
          textTransform: "uppercase",
          whiteSpace: "nowrap",
        }}>
          Bean Temperature (BT)
        </div>
      )}
    </div>
  );
};

// ═══ BEAN COLOR CIRCLE COMPONENT ═══
const BeanColorCircle: React.FC<{
  color: string;
  label: string;
  x: number;
  y: number;
  size: number;
  opacity: number;
  scale: number;
  highlighted?: boolean;
  highlightPulse?: number;
}> = ({ color, label, x, y, size, opacity, scale, highlighted, highlightPulse = 0 }) => (
  <div style={{
    position: "absolute",
    left: x - size / 2, top: y - size / 2,
    width: size, height: size,
    opacity,
    transform: `scale(${scale})`,
  }}>
    <div style={{
      width: size, height: size,
      borderRadius: "50%",
      background: color,
      border: `2px solid ${highlighted ? COPPER : `${CREAM}20`}`,
      boxShadow: highlighted
        ? `0 0 ${12 + highlightPulse * 8}px rgba(184,115,51,${0.4 + highlightPulse * 0.3}), inset 0 -${size * 0.2}px ${size * 0.3}px rgba(0,0,0,0.2)`
        : `inset 0 -${size * 0.2}px ${size * 0.3}px rgba(0,0,0,0.2)`,
    }} />
    <div style={{
      position: "absolute",
      left: "50%", top: size + 12,
      transform: "translateX(-50%)",
      fontSize: 18,
      color: `${CREAM}60`,
      fontFamily: "'Inter', -apple-system, sans-serif",
      fontWeight: 400,
      whiteSpace: "nowrap",
      textAlign: "center",
    }}>
      {label}
    </div>
  </div>
);

// ═══ SVG ARC HELPER ═══
function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number): string {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArc = endAngle - startAngle <= 180 ? 0 : 1;
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y}`;
}

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

// ═══ MAIN COMPOSITION ═══
export const Coffee_RoastCurve: React.FC = () => {
  const frame = useCurrentFrame();

  const ease = (start: number, dur: number, from: number, to: number, fn = Easing.out(Easing.cubic)) =>
    interpolate(frame, [start, start + dur], [from, to], { ...clamp, easing: fn });

  const fadeIn = (start: number, dur = 14) =>
    interpolate(frame, [start, start + dur], [0, 1], { ...clamp, easing: Easing.out(Easing.cubic) });

  const slideUp = (start: number, dur = 18) => ({
    opacity: fadeIn(start, dur),
    transform: `translateY(${ease(start, dur, 30, 0)}px)`,
  });

  const sceneVis = (start: number, end: number, fi = 12, fo = 12) => {
    if (frame < start - 3 || frame > end + fo + 3) return 0;
    return Math.min(
      interpolate(frame, [start, start + fi], [0, 1], clamp),
      interpolate(frame, [end, end + Math.max(fo, 1)], [1, 0], clamp)
    );
  };

  // ═══ SCENE 1 (0-134): THE GAUGE — Hook ═══
  const s1 = sceneVis(0, 134, 8, 1);

  // Temperature sweeps from 20 to 196 during scene 1
  const s1TempProgress = interpolate(frame, [8, 120], [0, 0.88], { ...clamp, easing: Easing.inOut(Easing.cubic) });
  const s1Temp = getTempAtProgress(s1TempProgress);

  // "FIRST CRACK" flash at ~196°C
  const firstCrackTrigger = 115;
  const firstCrackOpacity = frame >= firstCrackTrigger
    ? interpolate(frame, [firstCrackTrigger, firstCrackTrigger + 6, firstCrackTrigger + 12, firstCrackTrigger + 19],
        [0, 1, 1, 0.85], clamp)
    : 0;
  const firstCrackScale = frame >= firstCrackTrigger
    ? interpolate(frame, [firstCrackTrigger, firstCrackTrigger + 8, firstCrackTrigger + 16],
        [1.3, 1.05, 1], { ...clamp, easing: Easing.out(Easing.exp) })
    : 1;
  const firstCrackGlow = frame >= firstCrackTrigger
    ? interpolate(frame, [firstCrackTrigger, firstCrackTrigger + 6, firstCrackTrigger + 20],
        [0, 1, 0.4], clamp)
    : 0;

  // ═══ SCENE 2 (130-299): THE CURVE — Roast Profile Drawing ═══
  const s2 = sceneVis(130, 299, 14, 1);

  // Gauge shrinks and moves to top-right
  const gaugeSize = interpolate(frame, [130, 160], [580, 180], { ...clamp, easing: Easing.inOut(Easing.cubic) });
  const gaugeX = interpolate(frame, [130, 160], [540, 880], { ...clamp, easing: Easing.inOut(Easing.cubic) });
  const gaugeY = interpolate(frame, [130, 160], [750, 450], { ...clamp, easing: Easing.inOut(Easing.cubic) });

  // Curve drawing progress
  const curveProgress = interpolate(frame, [155, 290], [0, 1], { ...clamp, easing: Easing.inOut(Easing.quad) });

  // Running temp for gauge in scene 2 — continues from scene 1
  const s2Temp = getTempAtProgress(interpolate(frame, [130, 290], [0.88, 1], clamp));

  // Phase labels appear as curve passes them
  const dryingOpacity = interpolate(frame, [170, 185, 225, 240], [0, 1, 1, 0.5], clamp);
  const maillardOpacity = interpolate(frame, [210, 225, 260, 275], [0, 1, 1, 0.5], clamp);
  const developmentOpacity = interpolate(frame, [255, 270, 295, 310], [0, 1, 1, 0.8], clamp);

  // Graph dimensions (within safe zones)
  const graphLeft = 80;
  const graphRight = 920; // 120px safe zone on right
  const graphTop = 520;
  const graphBottom = 1350;
  const graphW = graphRight - graphLeft;
  const graphH = graphBottom - graphTop;

  // Build SVG path for the roast curve
  const buildCurvePath = (progress: number): string => {
    const numPoints = Math.max(2, Math.floor(progress * 100));
    let path = "";
    for (let i = 0; i <= numPoints; i++) {
      const t = i / 100;
      const pt = roastCurvePoints[Math.min(i, 100)];
      const px = graphLeft + t * graphW;
      const py = graphBottom - ((pt.y - 20) / 200) * graphH;
      path += i === 0 ? `M ${px} ${py}` : ` L ${px} ${py}`;
    }
    return path;
  };

  // Curve color at a point
  const getCurveColor = (t: number) => {
    if (t < 0.33) return SAGE;
    if (t < 0.65) return AMBER;
    return COPPER;
  };

  // ═══ SCENE 3 (295-429): THE TRANSFORMATION — Color Change ═══
  const s3 = sceneVis(295, 429, 14, 1);

  const beanColors = [
    { color: "#8B9A6B", label: "Green", delay: 310 },
    { color: "#A18B5E", label: "Yellow", delay: 322 },
    { color: "#8B6914", label: "Light", delay: 334 },
    { color: "#6B4423", label: "Medium", delay: 346 },
    { color: "#3D2B1F", label: "Dark", delay: 358 },
  ];

  const highlightIdx = 3; // Medium roast = our sweet spot
  const highlightPulse = frame >= 375
    ? Math.sin((frame - 375) * 0.12) * 0.5 + 0.5
    : 0;
  const sweetSpotOpacity = fadeIn(380, 18);
  const dtrOpacity = fadeIn(395, 16);

  // "12 minutes. One transformation." text
  const transformTextOpacity = fadeIn(305, 18);

  // ═══ SCENE 4 (425-540): CTA — The Profile ═══
  const s4 = sceneVis(425, 540, 16, 1);

  // Curve watermark persists
  const curveWatermarkOpacity = interpolate(frame, [425, 445], [0.3, 0.1], clamp);

  return (
    <div style={{
      width: 1080, height: 1920,
      background: CHARCOAL,
      overflow: "hidden",
      position: "relative",
      fontFamily: "'DM Serif Display', Georgia, serif",
    }}>

      {/* Subtle radial warmth */}
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(ellipse at 50% 40%, ${ESPRESSO}80 0%, ${CHARCOAL} 70%)`,
      }} />

      {/* Film grain */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.035, pointerEvents: "none", zIndex: 100,
        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }} />

      {/* ═══ SCENE 1: THE GAUGE — Hook ═══ */}
      <div style={{ position: "absolute", inset: 0, opacity: s1 }}>
        {/* Center gauge — large */}
        <TemperatureGauge
          temp={s1Temp}
          size={580}
          x={540}
          y={750}
          opacity={fadeIn(5, 20)}
          showLabel={true}
        />

        {/* FIRST CRACK flash */}
        {firstCrackOpacity > 0 && (
          <div style={{
            position: "absolute",
            left: "50%", top: 1150,
            transform: `translate(-50%, -50%) scale(${firstCrackScale})`,
            opacity: firstCrackOpacity,
            textAlign: "center",
          }}>
            <div style={{
              fontSize: 52,
              color: COPPER,
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700,
              letterSpacing: 6,
              textShadow: `0 0 ${firstCrackGlow * 30}px rgba(184,115,51,${firstCrackGlow * 0.7}),
                           0 0 ${firstCrackGlow * 60}px rgba(184,115,51,${firstCrackGlow * 0.3})`,
            }}>
              FIRST CRACK
            </div>
            {/* Horizontal pulse lines */}
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              gap: 20, marginTop: 12,
            }}>
              <div style={{
                width: ease(firstCrackTrigger, 12, 0, 100), height: 2,
                background: `linear-gradient(270deg, ${COPPER}, transparent)`,
                opacity: firstCrackGlow * 0.6,
              }} />
              <div style={{
                width: 8, height: 8, borderRadius: "50%",
                background: COPPER, opacity: firstCrackGlow,
              }} />
              <div style={{
                width: ease(firstCrackTrigger, 12, 0, 100), height: 2,
                background: `linear-gradient(90deg, ${COPPER}, transparent)`,
                opacity: firstCrackGlow * 0.6,
              }} />
            </div>
          </div>
        )}
      </div>

      {/* ═══ SCENE 2: THE CURVE — Roast Profile ═══ */}
      {frame >= 127 && frame <= 312 && (
        <div style={{ position: "absolute", inset: 0, opacity: s2 }}>

          {/* Persistent gauge — shrunk to top-right */}
          <TemperatureGauge
            temp={frame < 134 ? s1Temp : s2Temp}
            size={gaugeSize}
            x={gaugeX}
            y={gaugeY}
            opacity={1}
            showLabel={false}
          />

          {/* Scene label */}
          <div style={{
            position: "absolute", left: 80, top: 340,
            ...slideUp(140),
          }}>
            <div style={{
              fontSize: 20, color: `${CREAM}40`, letterSpacing: 6,
              fontFamily: "'Inter', -apple-system, sans-serif",
              textTransform: "uppercase", fontWeight: 500,
            }}>
              Roast Profile
            </div>
          </div>

          {/* Graph area */}
          <svg style={{ position: "absolute", left: 0, top: 0 }}
            width={1080} height={1920} viewBox="0 0 1080 1920">

            {/* Grid lines — horizontal (temperature) */}
            {[50, 100, 150, 200].map((temp) => {
              const y = graphBottom - ((temp - 20) / 200) * graphH;
              return (
                <g key={`grid-h-${temp}`}>
                  <line x1={graphLeft} y1={y} x2={graphRight} y2={y}
                    stroke={`${CREAM}08`} strokeWidth={1} />
                  <text x={graphLeft - 12} y={y + 5} fill={`${CREAM}30`}
                    fontSize={16} textAnchor="end"
                    fontFamily="'JetBrains Mono', monospace">
                    {temp}°
                  </text>
                </g>
              );
            })}

            {/* Grid lines — vertical (time) */}
            {[0, 2, 4, 6, 8, 10, 12].map((min) => {
              const x = graphLeft + (min / 12) * graphW;
              return (
                <g key={`grid-v-${min}`}>
                  <line x1={x} y1={graphTop} x2={x} y2={graphBottom}
                    stroke={`${CREAM}08`} strokeWidth={1} />
                  <text x={x} y={graphBottom + 28} fill={`${CREAM}30`}
                    fontSize={16} textAnchor="middle"
                    fontFamily="'JetBrains Mono', monospace">
                    {min}:00
                  </text>
                </g>
              );
            })}

            {/* Axes */}
            <line x1={graphLeft} y1={graphTop} x2={graphLeft} y2={graphBottom}
              stroke={`${CREAM}20`} strokeWidth={1.5} />
            <line x1={graphLeft} y1={graphBottom} x2={graphRight} y2={graphBottom}
              stroke={`${CREAM}20`} strokeWidth={1.5} />

            {/* The roast curve — multi-segment colored line */}
            {curveProgress > 0.01 && (() => {
              const segments: React.ReactNode[] = [];
              const totalPts = Math.floor(curveProgress * 100);
              // Draw in colored segments
              for (let i = 0; i < totalPts; i++) {
                const t1 = i / 100;
                const t2 = (i + 1) / 100;
                const pt1 = roastCurvePoints[i];
                const pt2 = roastCurvePoints[i + 1];
                const x1 = graphLeft + t1 * graphW;
                const y1 = graphBottom - ((pt1.y - 20) / 200) * graphH;
                const x2 = graphLeft + t2 * graphW;
                const y2 = graphBottom - ((pt2.y - 20) / 200) * graphH;
                const color = getCurveColor(t1);
                segments.push(
                  <line key={`seg-${i}`}
                    x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke={color} strokeWidth={3.5} strokeLinecap="round"
                  />
                );
              }

              // Glow duplicate behind
              const glowPath = buildCurvePath(curveProgress);
              segments.unshift(
                <path key="glow" d={glowPath}
                  fill="none" stroke={COPPER} strokeWidth={12}
                  opacity={0.08} strokeLinecap="round" strokeLinejoin="round"
                />
              );

              // Leading dot
              if (totalPts > 0 && totalPts <= 100) {
                const headPt = roastCurvePoints[totalPts];
                const hx = graphLeft + (totalPts / 100) * graphW;
                const hy = graphBottom - ((headPt.y - 20) / 200) * graphH;
                segments.push(
                  <circle key="head" cx={hx} cy={hy} r={6}
                    fill={getCurveColor(totalPts / 100)} stroke={CHARCOAL} strokeWidth={2} />
                );
                segments.push(
                  <circle key="head-glow" cx={hx} cy={hy} r={14}
                    fill={getCurveColor(totalPts / 100)} opacity={0.15} />
                );
              }

              return segments;
            })()}

            {/* Phase zone backgrounds */}
            {/* Drying: 0-33% */}
            <rect x={graphLeft} y={graphTop} width={graphW * 0.33} height={graphH}
              fill={SAGE} opacity={dryingOpacity * 0.04} />
            {/* Maillard: 33-65% */}
            <rect x={graphLeft + graphW * 0.33} y={graphTop} width={graphW * 0.32} height={graphH}
              fill={AMBER} opacity={maillardOpacity * 0.04} />
            {/* Development: 65-100% */}
            <rect x={graphLeft + graphW * 0.65} y={graphTop} width={graphW * 0.35} height={graphH}
              fill={COPPER} opacity={developmentOpacity * 0.04} />
          </svg>

          {/* Phase labels */}
          <div style={{
            position: "absolute",
            left: graphLeft + graphW * 0.05,
            top: graphBottom + 55,
            opacity: dryingOpacity,
          }}>
            <div style={{
              fontSize: 22, color: SAGE, letterSpacing: 4,
              fontFamily: "'Inter', -apple-system, sans-serif",
              fontWeight: 600, textTransform: "uppercase",
            }}>
              Drying
            </div>
          </div>

          <div style={{
            position: "absolute",
            left: graphLeft + graphW * 0.38,
            top: graphBottom + 55,
            opacity: maillardOpacity,
          }}>
            <div style={{
              fontSize: 22, color: AMBER, letterSpacing: 4,
              fontFamily: "'Inter', -apple-system, sans-serif",
              fontWeight: 600, textTransform: "uppercase",
            }}>
              Maillard
            </div>
          </div>

          <div style={{
            position: "absolute",
            left: graphLeft + graphW * 0.70,
            top: graphBottom + 55,
            opacity: developmentOpacity,
          }}>
            <div style={{
              fontSize: 22, color: COPPER, letterSpacing: 4,
              fontFamily: "'Inter', -apple-system, sans-serif",
              fontWeight: 600, textTransform: "uppercase",
            }}>
              Development
            </div>
          </div>
        </div>
      )}

      {/* ═══ SCENE 3: THE TRANSFORMATION — Color Change ═══ */}
      {frame >= 292 && frame <= 442 && (
        <div style={{ position: "absolute", inset: 0, opacity: s3 }}>

          {/* Compressed graph — watermark at top */}
          <svg style={{ position: "absolute", left: 0, top: 0, opacity: 0.15 }}
            width={1080} height={600} viewBox="0 0 1080 600">
            <path d={buildCurvePath(1)}
              fill="none" stroke={COPPER} strokeWidth={2.5}
              strokeLinecap="round" strokeLinejoin="round"
              transform={`translate(80, 50) scale(${(920 - 80) / graphW}, ${400 / graphH})`}
            />
          </svg>

          {/* "12 minutes. One transformation." */}
          <div style={{
            position: "absolute",
            left: 80, right: 120, top: 620,
            textAlign: "center",
            opacity: transformTextOpacity,
            transform: `translateY(${ease(305, 18, 25, 0)}px)`,
          }}>
            <div style={{
              fontSize: 48,
              color: PARCHMENT,
              fontFamily: "'DM Serif Display', Georgia, serif",
              lineHeight: 1.4,
            }}>
              12 minutes.
            </div>
            <div style={{
              fontSize: 48,
              color: COPPER,
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontStyle: "italic",
              lineHeight: 1.4,
              marginTop: 4,
            }}>
              One transformation.
            </div>
          </div>

          {/* Bean color circles — row of 5 */}
          {beanColors.map((bean, i) => {
            const circleSize = 110;
            const totalWidth = 5 * circleSize + 4 * 24; // 24px gap
            const startX = (1080 - totalWidth) / 2 + circleSize / 2;
            const bx = startX + i * (circleSize + 24);
            const by = 920;
            const bOpacity = fadeIn(bean.delay, 14);
            const bScale = interpolate(frame, [bean.delay, bean.delay + 16], [0.5, 1],
              { ...clamp, easing: Easing.out(Easing.back(1.8)) });

            return (
              <BeanColorCircle
                key={i}
                color={bean.color}
                label={bean.label}
                x={bx}
                y={by}
                size={circleSize}
                opacity={bOpacity}
                scale={bScale}
                highlighted={i === highlightIdx && frame >= 375}
                highlightPulse={i === highlightIdx ? highlightPulse : 0}
              />
            );
          })}

          {/* "Our sweet spot" label */}
          {sweetSpotOpacity > 0 && (
            <div style={{
              position: "absolute",
              left: "50%",
              top: 1040,
              transform: `translateX(${-540 + (1080 - (5 * 110 + 4 * 24)) / 2 + 110 / 2 + highlightIdx * (110 + 24)}px)`,
              opacity: sweetSpotOpacity,
              textAlign: "center",
            }}>
              <div style={{
                width: 2, height: 24, background: COPPER,
                margin: "0 auto 8px",
                opacity: 0.6,
              }} />
              <div style={{
                fontSize: 22,
                color: COPPER,
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontStyle: "italic",
                whiteSpace: "nowrap",
              }}>
                Our sweet spot
              </div>
            </div>
          )}

          {/* DTR readout */}
          <div style={{
            position: "absolute",
            left: "50%", top: 1180,
            transform: "translateX(-50%)",
            opacity: dtrOpacity,
            textAlign: "center",
          }}>
            <div style={{
              fontSize: 36,
              color: PARCHMENT,
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 500,
              letterSpacing: 3,
              fontVariantNumeric: "tabular-nums",
            }}>
              DTR: 22%
            </div>
            <div style={{
              fontSize: 16,
              color: `${CREAM}40`,
              fontFamily: "'Inter', -apple-system, sans-serif",
              marginTop: 8,
              letterSpacing: 2,
            }}>
              Development Time Ratio
            </div>
          </div>
        </div>
      )}

      {/* ═══ SCENE 4: CTA — The Profile ═══ */}
      {frame >= 422 && (
        <div style={{ position: "absolute", inset: 0, opacity: s4 }}>

          {/* Curve watermark */}
          <svg style={{
            position: "absolute",
            left: 0, top: 0,
            opacity: curveWatermarkOpacity,
          }} width={1080} height={1920} viewBox="0 0 1080 1920">
            {/* Centered, scaled curve as abstract element */}
            <g transform="translate(80, 600)">
              {roastCurvePoints.map((pt, i) => {
                if (i === 0) return null;
                const prev = roastCurvePoints[i - 1];
                const x1 = prev.x * 920;
                const y1 = 700 - ((prev.y - 20) / 200) * 700;
                const x2 = pt.x * 920;
                const y2 = 700 - ((pt.y - 20) / 200) * 700;
                return (
                  <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke={COPPER} strokeWidth={2} strokeLinecap="round" />
                );
              })}
            </g>
          </svg>

          {/* Brand name */}
          <div style={{
            position: "absolute",
            left: "50%", top: 700,
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            ...slideUp(435),
          }}>
            <div style={{
              fontSize: 120,
              color: PARCHMENT,
              fontFamily: "'DM Serif Display', Georgia, serif",
              letterSpacing: 18,
              fontWeight: 400,
            }}>
              ALTO
            </div>
          </div>

          {/* Tagline */}
          <div style={{
            position: "absolute",
            left: 80, right: 120, top: 830,
            textAlign: "center",
            ...slideUp(455),
          }}>
            <div style={{
              fontSize: 36,
              color: `${PARCHMENT}D0`,
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontStyle: "italic",
              lineHeight: 1.6,
            }}>
              We don't roast to a color.
            </div>
            <div style={{
              fontSize: 36,
              color: COPPER,
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontStyle: "italic",
              lineHeight: 1.6,
              marginTop: 4,
            }}>
              We roast to a curve.
            </div>
          </div>

          {/* Divider */}
          <div style={{
            position: "absolute",
            left: "50%", top: 990,
            transform: "translateX(-50%)",
            width: ease(470, 20, 0, 160),
            height: 1.5,
            background: COPPER,
            opacity: 0.4,
          }} />

          {/* Sub-label */}
          <div style={{
            position: "absolute",
            left: "50%", top: 1030,
            transform: "translateX(-50%)",
            opacity: fadeIn(480, 16),
          }}>
            <div style={{
              fontSize: 20,
              color: `${CREAM}50`,
              fontFamily: "'Inter', -apple-system, sans-serif",
              letterSpacing: 6,
              textTransform: "uppercase",
              fontWeight: 400,
              textAlign: "center",
            }}>
              Precision-roasted single origin
            </div>
          </div>
        </div>
      )}

      {/* Vignette — persistent */}
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(ellipse at 50% 50%, transparent 50%, ${CHARCOAL}90 100%)`,
        pointerEvents: "none",
        opacity: 0.5,
      }} />
    </div>
  );
};
