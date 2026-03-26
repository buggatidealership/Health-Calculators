import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
// Blood sugar spike-crash cycle. Thumbnail-first. Full toolkit.
// New: animated SVG glucose curve drawing in real-time, character reactions synced to curve.

const C = {
  bg: "#0a0f1a", text: "#E0E0E0", sub: "#8a919e", dim: "#3a4050",
  red: "#e8785e", green: "#6ec89b", accent: "#e89b3e", teal: "#0e7a7e",
  white: "#ffffff", sugar: "#f5a623", crash: "#dc2626",
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

function sceneVis(frame: number, start: number, end: number) {
  if (frame < start - 5 || frame > end + 15) return 0;
  return Math.min(
    interpolate(frame, [start, start + 12], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    interpolate(frame, [end - 8, end + 12], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
  );
}

// Glucose curve data — spike after eating, crash, repeat
function glucoseY(t: number): number {
  // t: 0-24 (hours), returns 0-100 (blood sugar level)
  // Baseline 80, spike to 160 after meals (7am, 12pm, 6pm), crash to 60 between
  const baseline = 45;
  // Three meal spikes
  const spikes = [
    { time: 7, peak: 95, width: 1.5 },   // Breakfast
    { time: 12, peak: 90, width: 1.5 },   // Lunch
    { time: 18, peak: 85, width: 1.8 },   // Dinner
  ];
  let y = baseline;
  for (const s of spikes) {
    const dist = Math.abs(t - s.time);
    if (dist < s.width * 3) {
      const spike = s.peak * Math.exp(-(dist * dist) / (2 * s.width * s.width));
      y = Math.max(y, baseline + spike * 0.6);
      // Crash after spike
      const crashDist = t - s.time - s.width;
      if (crashDist > 0 && crashDist < s.width * 2) {
        y = Math.min(y, baseline - 15 * Math.exp(-(crashDist * crashDist) / (s.width * s.width)));
      }
    }
  }
  return 100 - y; // Invert for SVG (y=0 is top)
}

// 32s = 960 frames
export const GlucoseSpike: React.FC = () => {
  const frame = useCurrentFrame();

  const ambHue = interpolate(frame, [0, 200, 400, 600, 800, 960], [35, 35, 10, 10, 160, 160], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });
  const ambInt = interpolate(frame, [0, 200, 500, 750, 960], [0.06, 0.1, 0.14, 0.08, 0.04], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });
  const dotPulse = 1 + 0.25 * (Math.sin(frame * 0.15) > 0 ? 0.3 : 0) + 0.1 * Math.sin(frame * 0.4);

  // Curve drawing progress (used in scene 3)
  const curveProgress = interpolate(frame, [340, 600], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic),
  });

  // Build SVG path for glucose curve
  const curveL = 100, curveR = 2060, curveT = 300, curveB = 1100;
  const curveW = curveR - curveL;
  const xForHour = (h: number) => curveL + (h / 24) * curveW;
  const yForGlucose = (g: number) => curveT + (g / 100) * (curveB - curveT);

  const pathPoints: string[] = [];
  const totalPoints = 200;
  const visiblePoints = Math.floor(curveProgress * totalPoints);
  for (let i = 0; i <= visiblePoints; i++) {
    const hour = (i / totalPoints) * 24;
    const x = xForHour(hour);
    const y = yForGlucose(glucoseY(hour));
    pathPoints.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(0)} ${y.toFixed(0)}`);
  }
  const curvePath = pathPoints.join(' ');

  // Character position — tracks along the curve
  const charHour = curveProgress * 24;
  const charSvgX = xForHour(charHour);
  const charSvgY = yForGlucose(glucoseY(charHour));

  return (
    <div style={{
      width: 2160, height: 2160, background: C.bg,
      overflow: "hidden", position: "relative", fontFamily: F.sans,
    }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none",
        background: `radial-gradient(ellipse at 50% 50%, hsla(${ambHue},45%,35%,${ambInt}) 0%, transparent 55%)`,
      }} />
      <div style={{ position: "absolute", inset: 0, opacity: 0.3, pointerEvents: "none", zIndex: 100,
        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.045'/%3E%3C/svg%3E")`,
      }} />

      {/* ═══ SCENE 1: THUMBNAIL — 3PM energy crash (0-180) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "space-between",
        opacity: sceneVis(frame, 0, 180),
        padding: "60px 60px 80px",
      }}>
        <div style={{ ...fadeUp(frame, 0, 25), flex: 1, display: "flex", alignItems: "center" }}>
          <Img src={staticFile("characters/energy-crash.png")} style={{
            width: 1600, height: 1600, objectFit: "contain",
            filter: "drop-shadow(0 0 50px rgba(245,166,35,0.12))",
          }} />
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ ...fadeUp(frame, 55, 18), fontSize: 180, color: C.text, fontFamily: F.serif, lineHeight: 1.15 }}>
            3 PM. Crashing.
          </div>
          <div style={{ ...fadeUp(frame, 75, 18), fontSize: 120, color: C.sugar, fontFamily: F.serif, fontStyle: "italic", marginTop: 10 }}>
            Again.
          </div>
        </div>
      </div>

      {/* ═══ SCENE 2: The craving (185-310) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "space-between",
        opacity: sceneVis(frame, 185, 310),
        padding: "80px 60px 100px",
      }}>
        <div style={{ ...fadeUp(frame, 188, 22), flex: 1, display: "flex", alignItems: "center" }}>
          <Img src={staticFile("characters/sugar-craving.png")} style={{
            width: 1400, height: 1400, objectFit: "contain",
            filter: "drop-shadow(0 0 40px rgba(245,166,35,0.15))",
          }} />
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ ...fadeUp(frame, 220, 18), fontSize: 148, color: C.sub, fontFamily: F.serif, fontWeight: 300 }}>
            Your body screams for sugar.
          </div>
          <div style={{ ...fadeUp(frame, 245, 20), fontSize: 156, color: C.white, fontFamily: F.serif, fontWeight: 600, marginTop: 16 }}>
            It's not weakness. It's <span style={{ color: C.sugar, fontStyle: "italic" }}>chemistry.</span>
          </div>
        </div>
      </div>

      {/* ═══ SCENE 3: The glucose curve — LIVE DRAW (315-640) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: sceneVis(frame, 315, 640),
      }}>
        {/* Header */}
        <div style={{
          ...fadeUp(frame, 318, 14),
          textAlign: "center", padding: "60px 60px 0",
          fontSize: 88, color: C.dim, fontFamily: F.mono, letterSpacing: 6,
        }}>
          YOUR BLOOD SUGAR TODAY
        </div>

        {/* The curve */}
        <svg width={2160} height={1300} style={{ position: "absolute", top: 180, left: 0 }}>
          {/* Zones */}
          <rect x={curveL} y={yForGlucose(20)} width={curveW} height={yForGlucose(45) - yForGlucose(20)}
            fill={C.green} opacity={0.04} rx={6} />
          <text x={curveL + 20} y={yForGlucose(25) + 20} fill={C.green} fontSize={36} fontFamily={F.mono} opacity={0.5}>
            Stable zone
          </text>

          {/* Crash zone */}
          <rect x={curveL} y={yForGlucose(55)} width={curveW} height={yForGlucose(80) - yForGlucose(55)}
            fill={C.red} opacity={0.03} rx={6} />

          {/* Time axis */}
          {[
            { h: 0, label: "12AM" }, { h: 6, label: "6AM" }, { h: 7, label: "🍳" },
            { h: 12, label: "12PM" }, { h: 12.5, label: "🍔" },
            { h: 18, label: "6PM" }, { h: 18.5, label: "🍝" },
            { h: 24, label: "12AM" },
          ].map((t, i) => (
            <text key={i} x={xForHour(t.h)} y={curveB + 60} textAnchor="middle"
              fill={t.label.length <= 4 ? C.dim : C.sub} fontSize={t.label.length > 4 ? 50 : 36}
              fontFamily={t.label.length <= 4 ? F.mono : F.sans}>
              {t.label}
            </text>
          ))}

          {/* Animated glucose curve — draws itself */}
          {visiblePoints > 1 && (
            <>
              <path d={curvePath} fill="none" stroke={C.sugar} strokeWidth={7}
                strokeLinecap="round" opacity={0.9} />
              {/* Glow behind the curve */}
              <path d={curvePath} fill="none" stroke={C.sugar} strokeWidth={20}
                strokeLinecap="round" opacity={0.08} />
            </>
          )}

          {/* Spike annotations — appear as curve reaches them */}
          {curveProgress > 0.3 && (
            <text x={xForHour(7.5)} y={yForGlucose(glucoseY(7)) - 30}
              fill={C.sugar} fontSize={40} fontFamily={F.sans} fontWeight="600" textAnchor="middle"
              opacity={interpolate(frame, [420, 435], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}>
              ↑ Spike
            </text>
          )}
          {curveProgress > 0.35 && (
            <text x={xForHour(9)} y={yForGlucose(glucoseY(9.5)) + 40}
              fill={C.red} fontSize={40} fontFamily={F.sans} fontWeight="600" textAnchor="middle"
              opacity={interpolate(frame, [440, 455], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}>
              ↓ Crash
            </text>
          )}

          {/* Moving dot at the tip of the curve */}
          {visiblePoints > 1 && (
            <circle cx={charSvgX} cy={charSvgY} r={14}
              fill={C.sugar} stroke={C.white} strokeWidth={3}
              opacity={0.9}>
            </circle>
          )}
        </svg>

        {/* Bottom caption — appears after first spike-crash cycle */}
        {frame >= 470 && (
          <div style={{
            ...fadeUp(frame, 470, 18),
            position: "absolute", bottom: 140, left: 0, right: 0,
            textAlign: "center",
            fontSize: 88, color: C.sub, fontFamily: F.serif, fontStyle: "italic",
            padding: "0 80px",
          }}>
            Every spike is followed by a crash.<br/>
            <span style={{ color: C.red }}>Every crash triggers a craving.</span>
          </div>
        )}
      </div>

      {/* ═══ SCENE 4: 2:47 AM awake (645-780) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "space-between",
        opacity: sceneVis(frame, 645, 780),
        padding: "60px 60px 80px",
      }}>
        <div style={{ ...fadeUp(frame, 648, 22), flex: 1, display: "flex", alignItems: "center" }}>
          <Img src={staticFile("characters/2am-awake.png")} style={{
            width: 1500, height: 1500, objectFit: "contain",
            filter: "drop-shadow(0 0 40px rgba(220,38,38,0.1))",
          }} />
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ ...fadeUp(frame, 680, 16), fontSize: 120, color: C.sub }}>
            Waking up at 2 AM?
          </div>
          <div style={{ ...fadeUp(frame, 698, 18), fontSize: 140, color: C.white, fontFamily: F.serif, fontWeight: 600, marginTop: 16 }}>
            That's cortisol <span style={{ color: C.red, fontStyle: "italic" }}>rescuing</span> you
          </div>
          <div style={{ ...fadeUp(frame, 718, 16), fontSize: 120, color: C.sub, marginTop: 8 }}>
            from a blood sugar crash.
          </div>
        </div>
      </div>

      {/* ═══ SCENE 5: Insight (785-870) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 785, 875),
        padding: "100px 60px",
      }}>
        <div style={{ ...fadeUp(frame, 790, 18), fontSize: 140, color: C.sub, fontFamily: F.sans, textAlign: "center" }}>
          It was never about willpower.
        </div>
        <div style={{ ...fadeUp(frame, 812, 20), fontSize: 180, color: C.white, fontFamily: F.serif, fontWeight: 600, textAlign: "center", marginTop: 40 }}>
          It was a <span style={{ color: C.sugar, fontStyle: "italic" }}>glucose</span> cycle.
        </div>
      </div>

      {/* ═══ SCENE 6: Brand hit (878-960) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 878, 960),
        padding: "100px 60px",
      }}>
        <div style={{ ...fadeUp(frame, 882, 18), fontSize: 148, color: C.dim, fontFamily: F.sans, textAlign: "center" }}>
          Your body isn't broken.
        </div>
        <div style={{ ...fadeUp(frame, 905, 22), fontSize: 216, color: C.white, fontFamily: F.serif, fontWeight: 700, marginTop: 30, textAlign: "center" }}>
          Your <span style={{ color: C.green, fontStyle: "italic" }}>blood sugar</span> is talking.
        </div>
        <div style={{
          width: 22, height: 22, borderRadius: "50%", background: C.green, marginTop: 80,
          opacity: interpolate(frame, [920, 940], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
          transform: `scale(${dotPulse})`,
          boxShadow: `0 0 ${14 + 10 * Math.sin(frame * 0.15)}px ${C.green}60, 0 0 ${45 + 25 * Math.sin(frame * 0.15)}px ${C.green}15`,
        }} />
      </div>
    </div>
  );
};
