import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
// ABODIENT.AI — "THE HANDOFF"
// Property manager goes on vacation. Alfred handles 14 days. Returns to 0 escalations.
// Audience: property managers who can never truly disconnect
// CONVERGENCE: "51 issues. 0 escalations." — the entire vacation narrative serves this proof point
// Brand: coral #e8734a, cream #F5F0EA, dark backgrounds

const C = {
  dark: "#1A1A1A",
  coral: "#e8734a",
  cream: "#F5F0EA",
  dimText: "#6b7280",
  green: "#22c55e",
  gold: "#d4a853",
};

const HANDLED_STATS = [
  { label: "Tenant queries", count: "34", icon: "💬" },
  { label: "Maintenance jobs", count: "12", icon: "🔧" },
  { label: "Inspections", count: "3", icon: "📋" },
  { label: "Emergencies", count: "2", icon: "🚨" },
];

export const Abodient_Vacation: React.FC = () => {
  const frame = useCurrentFrame();

  const fadeIn = (s: number, d = 12) => ({
    opacity: interpolate(frame, [s, s + d], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    transform: `translateY(${interpolate(frame, [s, s + d], [20, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })}px)`,
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

  // Day counter: 1→14 over scene 2
  const dayCount = Math.floor(interpolate(frame, [120, 280], [1, 14], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }));

  // Green pulse for "0 issues" badge
  const issuesPulse = Math.sin(frame * 0.1) * 0.2 + 0.8;

  return (
    <div style={{
      width: 1080, height: 1920,
      background: C.dark,
      overflow: "hidden", position: "relative",
      fontFamily: "'Inter', sans-serif",
    }}>

      {/* ═══ SCENE 1: THE HOOK (0–95) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(0, 93),
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        padding: "200px 60px 400px", zIndex: 2,
      }}>
        <div style={{ ...fadeIn(5), fontSize: 80, marginBottom: 20 }}>✈️</div>
        <div style={{ ...slam(15), fontSize: 64, color: C.cream, fontWeight: 800, textAlign: "center", lineHeight: 1.2 }}>
          I took 2 weeks off.
        </div>
        <div style={{ ...slam(35), fontSize: 48, color: C.dimText, fontWeight: 600, textAlign: "center", lineHeight: 1.3, marginTop: 15 }}>
          8 properties. No backup.
        </div>
        <div style={{ ...fadeIn(60), fontSize: 42, color: C.coral, fontWeight: 700, textAlign: "center", marginTop: 30, fontStyle: "italic" }}>
          Just Alfred.
        </div>

        <div style={{
          ...fadeIn(75),
          marginTop: 40, padding: "16px 40px",
          border: `2px solid ${C.coral}`,
          borderRadius: 12,
        }}>
          <span style={{ fontSize: 28, color: C.coral, fontWeight: 700, letterSpacing: 2 }}>OUT OF OFFICE</span>
        </div>
      </div>

      {/* ═══ SCENE 2: DAY COUNTER (100–290) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(98, 288),
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        padding: "200px 60px 400px", zIndex: 2,
      }}>
        <div style={{ ...fadeIn(103), fontSize: 28, color: C.dimText, fontWeight: 600, letterSpacing: 3, marginBottom: 30 }}>
          DAYS AWAY
        </div>

        <div style={{
          fontSize: 180, fontWeight: 900, color: C.cream,
          fontFamily: "'JetBrains Mono', monospace",
          lineHeight: 1,
        }}>
          {dayCount}
        </div>

        <div style={{
          marginTop: 50, padding: "24px 50px",
          background: "rgba(34,197,94,0.08)",
          borderRadius: 20, border: "1px solid rgba(34,197,94,0.2)",
          display: "flex", alignItems: "center", gap: 16,
        }}>
          <div style={{
            width: 16, height: 16, borderRadius: "50%",
            background: C.green, opacity: issuesPulse,
          }} />
          <span style={{ fontSize: 36, color: C.green, fontWeight: 700 }}>
            Issues outstanding: 0
          </span>
        </div>

        <div style={{ ...fadeIn(200), fontSize: 30, color: C.dimText, marginTop: 30, textAlign: "center" }}>
          Alfred resolves. You relax.
        </div>
      </div>

      {/* ═══ SCENE 3: RETURN SUMMARY (295–420) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(293, 418),
        display: "flex", flexDirection: "column",
        padding: "180px 50px 300px", zIndex: 2,
      }}>
        <div style={{ ...fadeIn(298), fontSize: 28, color: C.gold, fontWeight: 600, letterSpacing: 3, marginBottom: 15 }}>
          WELCOME BACK
        </div>
        <div style={{ ...fadeIn(310), fontSize: 44, color: C.cream, fontWeight: 700, marginBottom: 40 }}>
          While you were away, Alfred handled:
        </div>

        {HANDLED_STATS.map((stat, i) => {
          const start = 320 + i * 25;
          return (
            <div key={i} style={{
              ...fadeIn(start),
              display: "flex", alignItems: "center", gap: 20,
              marginBottom: 24, padding: "24px 30px",
              background: "rgba(255,255,255,0.04)",
              borderRadius: 16, border: "1px solid rgba(255,255,255,0.06)",
            }}>
              <div style={{ fontSize: 40, flexShrink: 0 }}>{stat.icon}</div>
              <div style={{ flex: 1, fontSize: 36, color: C.cream, fontWeight: 500 }}>
                {stat.label}
              </div>
              <div style={{
                fontSize: 42, fontWeight: 800, color: C.green,
                fontFamily: "'JetBrains Mono', monospace",
              }}>
                {stat.count}
              </div>
            </div>
          );
        })}

        <div style={{
          ...fadeIn(410),
          marginTop: 20, padding: "20px 40px",
          background: "rgba(34,197,94,0.08)",
          borderRadius: 16, textAlign: "center",
        }}>
          <span style={{ fontSize: 38, color: C.green, fontWeight: 700 }}>
            51 issues. 0 escalations.
          </span>
        </div>
      </div>

      {/* ═══ SCENE 4: CTA (425–540) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(423, 540),
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", padding: "300px 60px 500px", zIndex: 2,
        background: C.dark,
      }}>
        <div style={{
          ...fadeIn(428),
          width: 80, height: 80, borderRadius: 20,
          background: C.coral, display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 40, color: "#fff", fontWeight: 900, marginBottom: 30,
        }}>
          A
        </div>
        <div style={{ ...slam(438), fontSize: 56, color: C.cream, fontWeight: 700, textAlign: "center" }}>
          abodient.ai
        </div>
        <div style={{ ...fadeIn(455), fontSize: 38, color: C.coral, fontWeight: 600, textAlign: "center", marginTop: 15, fontStyle: "italic" }}>
          Take the holiday. Alfred's got it.
        </div>
        <div style={{
          ...fadeIn(475), marginTop: 40, padding: "22px 60px",
          background: C.coral, borderRadius: 50,
          fontSize: 36, fontWeight: 700, color: "#fff",
        }}>
          Try free for 1 month
        </div>
      </div>
    </div>
  );
};
