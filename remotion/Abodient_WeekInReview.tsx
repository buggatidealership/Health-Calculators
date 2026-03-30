import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
// ABODIENT.AI — "WHAT ALFRED HANDLED THIS WEEK"
// Scrolling dashboard-style recap of AI-resolved issues
// Audience: property managers — shows breadth of automation
// Style: dark product UI, data-forward, stacking cards

const COLORS = {
  bg: "#0f0f14",
  coral: "#e8734a",
  cream: "#F5F0EA",
  green: "#22c55e",
  blue: "#3b82f6",
  amber: "#f59e0b",
  dimText: "#6b7280",
  cardBg: "rgba(255,255,255,0.04)",
  cardBorder: "rgba(255,255,255,0.08)",
};

const ITEMS = [
  { category: "Maintenance", count: 12, example: "Leaking tap — Unit 4B", status: "Plumber booked, fixed same day", icon: "🔧", color: COLORS.blue },
  { category: "Tenant Queries", count: 23, example: "\"Can I have a parcel locker key?\"", status: "Answered in 45 seconds", icon: "💬", color: COLORS.green },
  { category: "Emergencies", count: 2, example: "Power outage — Block A", status: "Electrician dispatched at 3 AM", icon: "⚡", color: "#ef4444" },
  { category: "Inspections", count: 4, example: "Quarterly check — Units 1–4", status: "Scheduled, tenants notified", icon: "📋", color: COLORS.amber },
];

export const Abodient_WeekInReview: React.FC = () => {
  const frame = useCurrentFrame();

  const fadeIn = (s: number, d = 12) => ({
    opacity: interpolate(frame, [s, s + d], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    transform: `translateY(${interpolate(frame, [s, s + d], [24, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })}px)`,
  });

  const slam = (s: number, d = 6) => ({
    transform: `scale(${interpolate(frame, [s, s + d], [1.4, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })})`,
    opacity: interpolate(frame, [s, s + 3], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
  });

  const vis = (s: number, e: number) => {
    if (frame < s || frame > e + 10) return 0;
    return Math.min(
      interpolate(frame, [s, s + 8], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
      interpolate(frame, [e, e + 10], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
    );
  };

  // Counter animation
  const countUp = (target: number, start: number, duration = 20) => {
    return Math.round(interpolate(frame, [start, start + duration], [0, target], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }));
  };

  const totalResolved = countUp(41, 88, 30);

  return (
    <div style={{
      width: 1080, height: 1920,
      background: COLORS.bg,
      overflow: "hidden", position: "relative",
      fontFamily: "'Inter', sans-serif",
    }}>

      {/* Subtle grid pattern */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
        zIndex: 1,
      }} />

      {/* ═══ SCENE 1: HOOK (0–85) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(0, 83),
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        padding: "200px 60px 400px", zIndex: 2,
      }}>
        <div style={{ ...fadeIn(5), fontSize: 30, color: COLORS.dimText, fontWeight: 600, letterSpacing: 3 }}>
          THIS WEEK
        </div>
        <div style={{ ...slam(18), fontSize: 76, color: COLORS.cream, fontWeight: 800, textAlign: "center", lineHeight: 1.2, marginTop: 20 }}>
          Your AI handled
        </div>
        <div style={{
          ...slam(38), fontSize: 140, color: COLORS.coral, fontWeight: 900, textAlign: "center",
          marginTop: 10,
        }}>
          41
        </div>
        <div style={{ ...fadeIn(50), fontSize: 50, color: COLORS.cream, fontWeight: 600, textAlign: "center" }}>
          issues across 8 properties.
        </div>
        <div style={{ ...fadeIn(65), fontSize: 36, color: COLORS.dimText, marginTop: 20, textAlign: "center" }}>
          You handled zero.
        </div>
      </div>

      {/* ═══ SCENE 2: BREAKDOWN CARDS (90–380) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(88, 378),
        display: "flex", flexDirection: "column",
        padding: "140px 50px 300px", zIndex: 2,
      }}>
        {/* Header with live counter */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 40 }}>
          <div style={{ ...fadeIn(92), fontSize: 30, color: COLORS.dimText, fontWeight: 600, letterSpacing: 3 }}>
            WEEKLY BREAKDOWN
          </div>
          <div style={{
            ...fadeIn(92), display: "flex", alignItems: "center", gap: 10,
            padding: "10px 20px", background: "rgba(34,197,94,0.1)",
            borderRadius: 30, border: "1px solid rgba(34,197,94,0.2)",
          }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: COLORS.green }} />
            <span style={{ fontSize: 24, color: COLORS.green, fontWeight: 600 }}>
              {totalResolved} resolved
            </span>
          </div>
        </div>

        {/* Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {ITEMS.map((item, i) => {
            const cardStart = 100 + i * 70;
            return (
              <div key={i} style={{
                ...fadeIn(cardStart),
                background: COLORS.cardBg,
                border: `1px solid ${COLORS.cardBorder}`,
                borderRadius: 20, padding: "28px 32px",
                borderLeft: `4px solid ${item.color}`,
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <span style={{ fontSize: 36 }}>{item.icon}</span>
                    <span style={{ fontSize: 36, color: COLORS.cream, fontWeight: 700 }}>
                      {item.category}
                    </span>
                  </div>
                  <div style={{
                    fontSize: 42, color: item.color, fontWeight: 800,
                    fontFamily: "'JetBrains Mono', monospace",
                  }}>
                    {countUp(item.count, cardStart + 5, 15)}
                  </div>
                </div>

                {/* Example row */}
                <div style={{
                  ...fadeIn(cardStart + 20, 10),
                  marginTop: 16, padding: "14px 18px",
                  background: "rgba(255,255,255,0.03)", borderRadius: 12,
                }}>
                  <div style={{ fontSize: 28, color: COLORS.dimText }}>
                    {item.example}
                  </div>
                  <div style={{ fontSize: 26, color: COLORS.green, marginTop: 6, fontWeight: 500 }}>
                    → {item.status}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ═══ SCENE 3: CTA (385–540) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(383, 540),
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", padding: "300px 60px 500px", zIndex: 2,
      }}>
        <div style={{ ...fadeIn(388), fontSize: 44, color: COLORS.dimText, fontWeight: 600, textAlign: "center" }}>
          Property management
        </div>
        <div style={{ ...slam(405), fontSize: 68, color: COLORS.cream, fontWeight: 800, textAlign: "center", marginTop: 10 }}>
          without the management.
        </div>

        <div style={{
          ...fadeIn(425),
          width: 80, height: 80, borderRadius: 20,
          background: COLORS.coral, display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 40, color: "#fff", fontWeight: 900, marginTop: 40,
        }}>
          A
        </div>
        <div style={{ ...fadeIn(435), fontSize: 48, color: COLORS.cream, fontWeight: 700, marginTop: 15 }}>
          abodient.ai
        </div>
        <div style={{
          ...fadeIn(455), marginTop: 30, padding: "22px 60px",
          background: COLORS.coral, borderRadius: 50,
          fontSize: 36, fontWeight: 700, color: "#fff",
        }}>
          Start your free month
        </div>
        <div style={{ ...fadeIn(475), fontSize: 30, color: COLORS.dimText, marginTop: 15 }}>
          No credit card. Cancel anytime.
        </div>
      </div>
    </div>
  );
};
