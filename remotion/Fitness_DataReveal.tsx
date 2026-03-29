import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

// FITNESS REEL A: "Data Reveal" — protein timing clock
// Whitespace: Finance "number reveal" format, unused in fitness
// Emotional moment: "I've been doing this wrong?"
// 12s = 360 frames @ 30fps, 1080x1920

const C = {
  bg: "#F5F0EA",
  dark: "#1a1a2e",
  card: "#ffffff",
  accent: "#e07a5f",    // warm coral
  teal: "#3d8b7a",
  text: "#2b2b2b",
  sub: "#7a7a7a",
  dim: "#c8c4be",
  gold: "#c9a84c",
};
const F = {
  serif: "'DM Serif Display', Georgia, serif",
  sans: "'Inter', -apple-system, sans-serif",
  mono: "'JetBrains Mono', monospace",
};

function ease(frame: number, start: number, dur: number, from: number, to: number, fn = Easing.out(Easing.cubic)) {
  return interpolate(frame, [start, start + dur], [from, to], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: fn,
  });
}
function fadeUp(frame: number, start: number, dur = 14) {
  return {
    opacity: ease(frame, start, dur, 0, 1),
    transform: `translateY(${ease(frame, start, dur, 40, 0)}px)`,
  };
}
function sceneVis(frame: number, start: number, end: number, fi = 10, fo = 10) {
  if (frame < start - 3 || frame > end + fo + 3) return 0;
  return Math.min(
    interpolate(frame, [start, start + fi], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    interpolate(frame, [end, end + Math.max(fo, 1)], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
  );
}

// Clock face component
function ClockFace({ frame, start, phase }: { frame: number; start: number; phase: "before" | "after" }) {
  const hours = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const cx = 400, cy = 400, r = 320;

  // Protein meals: before = clustered at 12pm and 7pm. After = distributed 4x
  const beforeMeals = [{ hour: 12, size: 1 }, { hour: 19, size: 1.4 }];
  const afterMeals = [{ hour: 7, size: 0.8 }, { hour: 11, size: 0.8 }, { hour: 15, size: 0.8 }, { hour: 19, size: 0.8 }];
  const meals = phase === "before" ? beforeMeals : afterMeals;

  return (
    <div style={{ width: 800, height: 800, position: "relative" }}>
      {/* Clock circle */}
      <svg width={800} height={800} style={{ position: "absolute" }}>
        <circle cx={cx} cy={cy} r={r} fill="none" stroke={C.dim} strokeWidth={3} />
        {/* Hour markers */}
        {hours.map((h, i) => {
          const angle = (i * 30 - 90) * Math.PI / 180;
          const x1 = cx + (r - 20) * Math.cos(angle);
          const y1 = cy + (r - 20) * Math.sin(angle);
          const x2 = cx + r * Math.cos(angle);
          const y2 = cy + r * Math.sin(angle);
          const lx = cx + (r + 35) * Math.cos(angle);
          const ly = cy + (r + 35) * Math.sin(angle);
          const hourDisplay = h === 12 ? "12" : h <= 6 ? `${h}pm` : h <= 11 ? `${h}am` : "";
          // Convert for display: 12=noon, 1-6=pm, 7-11=am
          const displayH = h === 12 ? "12pm" : h <= 6 ? `${h}pm` : `${h}am`;
          return (
            <g key={i}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={C.sub} strokeWidth={2} />
              <text x={lx} y={ly} textAnchor="middle" dominantBaseline="middle"
                fill={C.sub} fontSize={22} fontFamily={F.mono}>{displayH}</text>
            </g>
          );
        })}
        {/* Protein meal markers */}
        {meals.map((meal, i) => {
          const hourIndex = meal.hour >= 12 ? meal.hour - 12 : meal.hour;
          const angle = (hourIndex * 30 - 90) * Math.PI / 180;
          const mealR = r - 80;
          const mx = cx + mealR * Math.cos(angle);
          const my = cy + mealR * Math.sin(angle);
          const mealDelay = start + 8 + i * 10;
          const scale = ease(frame, mealDelay, 12, 0, meal.size, Easing.out(Easing.back(2)));
          const pulseScale = phase === "after"
            ? 1 + 0.05 * Math.sin((frame - mealDelay) * 0.15)
            : 1;
          return (
            <g key={i}>
              <circle cx={mx} cy={my}
                r={36 * scale * pulseScale}
                fill={phase === "after" ? C.teal : C.accent}
                opacity={0.85}
              />
              {scale > 0.5 && (
                <text x={mx} y={my + 2} textAnchor="middle" dominantBaseline="middle"
                  fill="#fff" fontSize={20} fontFamily={F.sans} fontWeight={700}>
                  {phase === "after" ? `${Math.round(40)}g` : `${Math.round(meal.size * 60)}g`}
                </text>
              )}
            </g>
          );
        })}
      </svg>
      {/* Center label */}
      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        textAlign: "center",
      }}>
        <div style={{ fontSize: 28, color: C.sub, fontFamily: F.mono, letterSpacing: 2 }}>
          {phase === "before" ? "YOUR DAY" : "OPTIMIZED"}
        </div>
        <div style={{ fontSize: 48, color: phase === "before" ? C.accent : C.teal, fontWeight: 700, fontFamily: F.sans }}>
          {phase === "before" ? "2 meals" : "4 meals"}
        </div>
      </div>
    </div>
  );
}

export const Fitness_DataReveal: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <div style={{
      width: 1080, height: 1920, background: C.bg,
      overflow: "hidden", position: "relative", fontFamily: F.sans,
    }}>
      {/* Grain */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.06, pointerEvents: "none", zIndex: 100,
        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
      }} />

      {/* ═══ SCENE 1: HOOK NUMBER (0-80) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 0, 80),
        padding: "80px 60px",
        gap: 20,
      }}>
        {/* Big number */}
        <div style={{
          ...fadeUp(frame, 5, 18),
          fontSize: 200, fontWeight: 800, fontFamily: F.sans,
          color: C.accent, lineHeight: 1,
          letterSpacing: -8,
        }}>
          {Math.round(ease(frame, 5, 25, 0, 68))}%
        </div>

        <div style={{
          ...fadeUp(frame, 25, 16),
          fontSize: 48, color: C.text, textAlign: "center", lineHeight: 1.4,
        }}>
          of your protein
        </div>
        <div style={{
          ...fadeUp(frame, 35, 16),
          fontSize: 48, color: C.text, textAlign: "center", lineHeight: 1.4,
          fontWeight: 700,
        }}>
          is wasted by timing.
        </div>

        <div style={{
          ...fadeUp(frame, 55, 14),
          width: 500, height: 2,
          background: `linear-gradient(90deg, transparent, ${C.accent}, transparent)`,
          marginTop: 20,
        }} />

        <div style={{
          ...fadeUp(frame, 60, 14),
          fontSize: 32, color: C.sub, fontFamily: F.mono, letterSpacing: 2,
        }}>Not how much. When.</div>
      </div>

      {/* ═══ SCENE 2: BEFORE CLOCK (85-185) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 85, 185),
        padding: "60px 50px",
        gap: 16,
      }}>
        <div style={{
          ...fadeUp(frame, 88, 14),
          fontSize: 36, color: C.sub, fontFamily: F.mono, letterSpacing: 3,
          textTransform: "uppercase",
        }}>Most people</div>

        <ClockFace frame={frame} start={95} phase="before" />

        <div style={{
          ...fadeUp(frame, 140, 16),
          fontSize: 38, color: C.accent, fontWeight: 600,
          textAlign: "center",
        }}>
          All protein at lunch + dinner.
          <br />
          <span style={{ color: C.sub, fontWeight: 400 }}>Muscle synthesis caps at ~40g/meal.</span>
        </div>
      </div>

      {/* ═══ SCENE 3: AFTER CLOCK (190-290) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 190, 290),
        padding: "60px 50px",
        gap: 16,
      }}>
        <div style={{
          ...fadeUp(frame, 193, 14),
          fontSize: 36, color: C.teal, fontFamily: F.mono, letterSpacing: 3,
          textTransform: "uppercase",
        }}>Redistribute</div>

        <ClockFace frame={frame} start={200} phase="after" />

        <div style={{
          ...fadeUp(frame, 250, 16),
          fontSize: 38, color: C.teal, fontWeight: 600,
          textAlign: "center",
        }}>
          4 × 40g = every 4 hours.
          <br />
          <span style={{ color: C.sub, fontWeight: 400 }}>Same total. Better synthesis.</span>
        </div>
      </div>

      {/* ═══ SCENE 4: CTA (295-360) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 295, 360, 12, 1),
        padding: "80px 60px",
        gap: 30,
      }}>
        <div style={{
          ...fadeUp(frame, 298, 18),
          fontSize: 64, color: C.text, fontFamily: F.serif, textAlign: "center", lineHeight: 1.3,
        }}>
          Same protein.
          <br />
          <span style={{ color: C.teal }}>Better results.</span>
        </div>
        <div style={{
          ...fadeUp(frame, 320, 16),
          width: 400, height: 2,
          background: `linear-gradient(90deg, transparent, ${C.teal}, transparent)`,
        }} />
        <div style={{
          ...fadeUp(frame, 330, 14),
          fontSize: 30, color: C.sub,
        }}>Save this. Try it for 2 weeks.</div>
      </div>
    </div>
  );
};
