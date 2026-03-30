import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
// ABODIENT.AI — "YOU SLEPT THROUGH IT"
// Cinematic night-to-morning timeline: crisis happens at 2AM, AI resolves it,
// property manager wakes up to one notification
// Audience: property managers/landlords wanting automated management
// Brand: coral #e8734a, cream #F5F0EA, dark backgrounds for night scenes

const COLORS = {
  night: "#0a0a14",
  dawn: "#1a1520",
  coral: "#e8734a",
  cream: "#F5F0EA",
  dark: "#1A1A1A",
  dimText: "#6b7280",
  green: "#22c55e",
  whatsapp: "#25D366",
  blue: "#3b82f6",
};

const TIMELINE = [
  { time: "2:14 AM", event: "Tenant reports boiler leak", icon: "🚨", color: "#ef4444" },
  { time: "2:15 AM", event: "Alfred diagnoses: pressure valve failure", icon: "🔍", color: COLORS.coral },
  { time: "2:18 AM", event: "Emergency plumber found & contacted", icon: "🔧", color: COLORS.blue },
  { time: "2:28 AM", event: "Appointment confirmed for 7 AM", icon: "✅", color: COLORS.green },
  { time: "2:29 AM", event: "Tenant notified with ETA", icon: "💬", color: COLORS.whatsapp },
];

export const Abodient_SleptThrough: React.FC = () => {
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

  // Night-to-dawn gradient shift
  const dawnBlend = interpolate(frame, [340, 400], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Pulsing notification dot
  const pulse = Math.sin(frame * 0.15) * 0.3 + 0.7;

  return (
    <div style={{
      width: 1080, height: 1920,
      background: `linear-gradient(180deg,
        ${frame < 340 ? COLORS.night : `rgba(26,21,32,${1 - dawnBlend * 0.7})`} 0%,
        ${frame < 340 ? "#0d0d1a" : `rgba(245,239,234,${dawnBlend * 0.3})`} 100%)`,
      overflow: "hidden", position: "relative",
      fontFamily: "'Inter', sans-serif",
    }}>

      {/* Stars (night scene only) */}
      {frame < 380 && [0, 1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} style={{
          position: "absolute",
          left: `${10 + i * 13}%`, top: `${5 + (i * 7) % 20}%`,
          width: 3, height: 3, borderRadius: "50%",
          background: "#fff",
          opacity: interpolate(Math.sin(frame * 0.08 + i * 1.5), [-1, 1], [0.1, 0.4]),
          zIndex: 1,
        }} />
      ))}

      {/* ═══ SCENE 1: THE HOOK (0–90) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(0, 88),
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        padding: "200px 60px 400px", zIndex: 2,
      }}>
        <div style={{ ...fadeIn(5), fontSize: 110, marginBottom: 30 }}>
          😴
        </div>
        <div style={{ ...slam(15), fontSize: 72, color: COLORS.cream, fontWeight: 800, textAlign: "center", lineHeight: 1.2 }}>
          Last night,
        </div>
        <div style={{ ...slam(35), fontSize: 72, color: COLORS.cream, fontWeight: 800, textAlign: "center", lineHeight: 1.2, marginTop: 10 }}>
          your tenant's boiler
        </div>
        <div style={{ ...slam(50), fontSize: 72, color: "#ef4444", fontWeight: 800, textAlign: "center", lineHeight: 1.2, marginTop: 10, fontStyle: "italic" }}>
          broke.
        </div>
        <div style={{ ...fadeIn(70), fontSize: 40, color: COLORS.dimText, marginTop: 30, textAlign: "center" }}>
          You didn't wake up.
        </div>
      </div>

      {/* ═══ SCENE 2: TIMELINE (95–330) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(93, 328),
        display: "flex", flexDirection: "column",
        padding: "180px 60px 300px", zIndex: 2,
      }}>
        <div style={{ ...fadeIn(98), fontSize: 30, color: COLORS.dimText, fontWeight: 600, letterSpacing: 3, marginBottom: 50 }}>
          WHILE YOU SLEPT
        </div>

        {/* Timeline line */}
        <div style={{ position: "relative", paddingLeft: 40 }}>
          <div style={{
            position: "absolute", left: 14, top: 0,
            width: 3,
            height: `${interpolate(frame, [100, 300], [0, 100], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}%`,
            background: `linear-gradient(180deg, ${COLORS.coral}, ${COLORS.green})`,
          }} />

          {TIMELINE.map((item, i) => {
            const start = 105 + i * 45;
            return (
              <div key={i} style={{
                ...fadeIn(start),
                display: "flex", alignItems: "flex-start", gap: 24,
                marginBottom: 36, position: "relative",
              }}>
                {/* Dot */}
                <div style={{
                  position: "absolute", left: -34,
                  width: 18, height: 18, borderRadius: "50%",
                  background: item.color,
                  boxShadow: `0 0 12px ${item.color}60`,
                }} />

                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 28, color: item.color, fontWeight: 700, fontFamily: "'JetBrains Mono', monospace" }}>
                    {item.time}
                  </div>
                  <div style={{ fontSize: 40, color: COLORS.cream, fontWeight: 600, marginTop: 6, lineHeight: 1.3 }}>
                    {item.event}
                  </div>
                </div>

                <div style={{ fontSize: 40, flexShrink: 0, marginTop: 8 }}>
                  {item.icon}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ═══ SCENE 3: THE WAKE UP (335–430) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(333, 428),
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        padding: "200px 60px 400px", zIndex: 2,
      }}>
        <div style={{ ...fadeIn(338), fontSize: 30, color: COLORS.dimText, fontWeight: 600, letterSpacing: 3, fontFamily: "'JetBrains Mono', monospace" }}>
          7:15 AM
        </div>
        <div style={{ ...fadeIn(350), fontSize: 100, marginTop: 20, marginBottom: 20 }}>
          ☀️
        </div>
        <div style={{ ...slam(358), fontSize: 68, color: COLORS.cream, fontWeight: 800, textAlign: "center", lineHeight: 1.2 }}>
          You woke up to
        </div>

        {/* Notification card */}
        <div style={{
          ...fadeIn(378),
          marginTop: 40, padding: "28px 40px",
          background: "rgba(255,255,255,0.06)",
          borderRadius: 20, border: "1px solid rgba(255,255,255,0.1)",
          display: "flex", alignItems: "center", gap: 20,
          width: "85%",
        }}>
          <div style={{
            width: 52, height: 52, borderRadius: 14,
            background: COLORS.coral, display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 24, color: "#fff", fontWeight: 800,
          }}>
            A
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 30, color: COLORS.cream, fontWeight: 600 }}>Alfred</div>
            <div style={{ fontSize: 26, color: COLORS.dimText, marginTop: 4 }}>
              Boiler fixed. Plumber visited at 7 AM. Tenant confirmed. ✓
            </div>
          </div>
          <div style={{
            width: 12, height: 12, borderRadius: "50%",
            background: COLORS.green, opacity: pulse,
          }} />
        </div>

        <div style={{ ...fadeIn(405), fontSize: 38, color: COLORS.green, fontWeight: 600, marginTop: 30, textAlign: "center" }}>
          One notification. Zero stress.
        </div>
      </div>

      {/* ═══ SCENE 4: CTA (435–540) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(433, 540),
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", padding: "300px 60px 500px", zIndex: 2,
        background: COLORS.dark,
      }}>
        <div style={{
          ...fadeIn(438),
          width: 80, height: 80, borderRadius: 20,
          background: COLORS.coral, display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 40, color: "#fff", fontWeight: 900, marginBottom: 30,
        }}>
          A
        </div>
        <div style={{ ...slam(448), fontSize: 56, color: COLORS.cream, fontWeight: 700, textAlign: "center" }}>
          abodient.ai
        </div>
        <div style={{ ...fadeIn(465), fontSize: 40, color: COLORS.coral, fontWeight: 600, textAlign: "center", marginTop: 15, fontStyle: "italic" }}>
          AI that handles everything.
        </div>
        <div style={{
          ...fadeIn(485), marginTop: 40, padding: "22px 60px",
          background: COLORS.coral, borderRadius: 50,
          fontSize: 36, fontWeight: 700, color: "#fff",
        }}>
          Try free for 1 month
        </div>
      </div>
    </div>
  );
};
