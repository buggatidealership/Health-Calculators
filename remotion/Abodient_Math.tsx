import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
// ABODIENT.AI — THE MATH
// Tension/Resolution (#10): time cost loads → automation releases
// Convergence: "78 working days. Gone." → "Alfred handles 85%"
// Style: dark data dashboard, coral for cost, green for recovery
// Brand: coral #e8734a, cream #F5F0EA

const COLORS = {
  bg: "#0a0a14",
  coral: "#e8734a",
  cream: "#F5F0EA",
  green: "#22c55e",
  red: "#ef4444",
  dimText: "#6b7280",
  cardBorder: "rgba(255,255,255,0.06)",
};

const TIME_ITEMS = [
  { task: "Tenant messages", hours: 3.5, icon: "💬" },
  { task: "Maintenance coordination", hours: 2.5, icon: "🔧" },
  { task: "Inspections & scheduling", hours: 2.0, icon: "📋" },
  { task: "Admin & paperwork", hours: 2.0, icon: "📄" },
  { task: "Emergencies (avg)", hours: 2.0, icon: "🚨" },
];

export const Abodient_Math: React.FC = () => {
  const frame = useCurrentFrame();

  const fadeIn = (s: number, d = 12) => ({
    opacity: interpolate(frame, [s, s + d], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    transform: `translateY(${interpolate(frame, [s, s + d], [24, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })}px)`,
  });

  const slam = (s: number, d = 6) => ({
    transform: `scale(${interpolate(frame, [s, s + d], [1.5, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })})`,
    opacity: interpolate(frame, [s, s + 3], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
  });

  const vis = (s: number, e: number) => {
    if (frame < s || frame > e + 10) return 0;
    return Math.min(
      interpolate(frame, [s, s + 8], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
      interpolate(frame, [e, e + 10], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
    );
  };

  const countUp = (target: number, start: number, dur = 20) =>
    Math.round(interpolate(frame, [start, start + dur], [0, target], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) }));

  // Running total of hours
  const runningTotal = interpolate(frame, [110, 380], [0, 12], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Bar fill per item
  const barFill = (i: number) => {
    const start = 110 + i * 55;
    return interpolate(frame, [start + 10, start + 30], [0, 100], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });
  };

  return (
    <div style={{
      width: 1080, height: 1920,
      background: COLORS.bg,
      overflow: "hidden", position: "relative",
      fontFamily: "'Inter', sans-serif",
    }}>

      {/* SCENE 1: HOOK (0–100) */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(0, 98),
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        padding: "200px 60px 400px", zIndex: 2,
      }}>
        <div style={{ ...fadeIn(5), fontSize: 36, color: COLORS.dimText, fontWeight: 600, letterSpacing: 3 }}>
          YOU MANAGE
        </div>
        <div style={{ ...slam(18), fontSize: 160, color: COLORS.cream, fontWeight: 800, lineHeight: 1 }}>
          8
        </div>
        <div style={{ ...fadeIn(28), fontSize: 50, color: COLORS.dimText, fontWeight: 600 }}>
          properties.
        </div>
        <div style={{ ...fadeIn(50), marginTop: 40, fontSize: 40, color: COLORS.dimText, fontWeight: 500 }}>
          Do you know what that costs you?
        </div>
        <div style={{ ...slam(70), marginTop: 20, fontSize: 60, color: COLORS.coral, fontWeight: 800 }}>
          Every single week?
        </div>
      </div>

      {/* SCENE 2: THE BREAKDOWN (105–395) */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(103, 393),
        display: "flex", flexDirection: "column",
        padding: "140px 50px 240px", zIndex: 2,
      }}>
        {/* Header with running total */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 40 }}>
          <span style={{ fontSize: 28, color: COLORS.dimText, fontWeight: 600, letterSpacing: 3 }}>WEEKLY TIME COST</span>
          <div style={{ textAlign: "right" }}>
            <span style={{ fontSize: 56, color: COLORS.coral, fontWeight: 800 }}>
              {runningTotal.toFixed(1)}h
            </span>
            <div style={{ fontSize: 22, color: COLORS.dimText, fontWeight: 500 }}>/week</div>
          </div>
        </div>

        {/* Time items with bar chart */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {TIME_ITEMS.map((item, i) => {
            const itemStart = 110 + i * 55;

            return (
              <div key={i} style={{ ...fadeIn(itemStart) }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <span style={{ fontSize: 32 }}>{item.icon}</span>
                    <span style={{ fontSize: 34, color: COLORS.cream, fontWeight: 600 }}>{item.task}</span>
                  </div>
                  <span style={{ fontSize: 34, color: COLORS.coral, fontWeight: 700 }}>{item.hours}h</span>
                </div>
                {/* Bar */}
                <div style={{
                  width: "100%", height: 8, background: COLORS.cardBorder, borderRadius: 4,
                }}>
                  <div style={{
                    width: `${barFill(i) * (item.hours / 3.5)}%`,
                    height: "100%", borderRadius: 4,
                    background: `linear-gradient(90deg, ${COLORS.coral}88, ${COLORS.coral})`,
                  }} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Total line */}
        {frame > 380 && (
          <div style={{
            ...fadeIn(382),
            marginTop: 35, paddingTop: 25,
            borderTop: `2px solid ${COLORS.coral}`,
            display: "flex", justifyContent: "space-between", alignItems: "baseline",
          }}>
            <span style={{ fontSize: 36, color: COLORS.cream, fontWeight: 700 }}>Total per week</span>
            <span style={{ fontSize: 52, color: COLORS.coral, fontWeight: 800 }}>12h</span>
          </div>
        )}
      </div>

      {/* SCENE 3: THE WEIGHT (400–465) — convergence loading */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(398, 463),
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", padding: "250px 60px 450px", zIndex: 2,
      }}>
        <div style={{ ...fadeIn(402), fontSize: 34, color: COLORS.dimText, fontWeight: 600, letterSpacing: 2 }}>
          THAT'S
        </div>
        <div style={{ ...slam(415), fontSize: 100, color: COLORS.red, fontWeight: 800, lineHeight: 1.1 }}>
          624 hours
        </div>
        <div style={{ ...fadeIn(428), fontSize: 44, color: COLORS.cream, fontWeight: 600 }}>
          per year.
        </div>
        <div style={{ ...slam(445), fontSize: 44, color: COLORS.dimText, fontWeight: 600, marginTop: 10, fontStyle: "italic" }}>
          78 working days. Gone.
        </div>
      </div>

      {/* SCENE 4: THE FLIP (470–540) — resolution, ritardando */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(468, 538),
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", padding: "280px 60px 480px", zIndex: 2,
        background: `linear-gradient(180deg, ${COLORS.bg} 0%, #0f1520 100%)`,
      }}>
        <div style={{ ...fadeIn(473), fontSize: 36, color: COLORS.dimText, fontWeight: 600, letterSpacing: 2 }}>
          ALFRED HANDLES
        </div>
        <div style={{
          ...slam(487),
          display: "flex", alignItems: "baseline", gap: 8, marginTop: 10,
        }}>
          <span style={{ fontSize: 100, color: COLORS.green, fontWeight: 800 }}>{countUp(85, 487)}</span>
          <span style={{ fontSize: 50, color: COLORS.green, fontWeight: 700 }}>%</span>
        </div>
        <div style={{ ...fadeIn(507), fontSize: 40, color: COLORS.cream, fontWeight: 600, marginTop: 5 }}>
          of that. Automatically.
        </div>
        <div style={{
          ...fadeIn(522), fontSize: 36, color: COLORS.dimText, fontWeight: 500, marginTop: 12, fontStyle: "italic", textAlign: "center",
        }}>
          530 hours back. Every year.
        </div>
        <div style={{
          ...fadeIn(535), marginTop: 35, padding: "22px 50px",
          border: `2px solid ${COLORS.coral}`, borderRadius: 50,
          fontSize: 34, fontWeight: 700, color: COLORS.cream,
        }}>
          abodient.ai
        </div>
      </div>
    </div>
  );
};
