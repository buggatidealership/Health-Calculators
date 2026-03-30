import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
// ABODIENT.AI — "THE INBOX"
// Split comparison: chaotic morning without Alfred vs. clean morning with Alfred
// Audience: property managers drowning in operational overhead
// CONVERGENCE: "Coffee's still hot." — after 47→0 unread, this line lands the truth
// Brand: coral #e8734a, cream #F5F0EA, dark backgrounds

const C = {
  dark: "#1A1A1A",
  coral: "#e8734a",
  cream: "#F5F0EA",
  dimText: "#6b7280",
  green: "#22c55e",
  red: "#ef4444",
  amber: "#f59e0b",
};

const CHAOS_ITEMS = [
  { label: "12 missed calls", icon: "📞", color: C.red },
  { label: "Tenant: 'My ceiling is leaking!!!'", icon: "💬", color: C.amber },
  { label: "Plumber invoice overdue", icon: "📄", color: C.red },
  { label: "Inspection rescheduled (3rd time)", icon: "📅", color: C.amber },
  { label: "Council compliance notice", icon: "⚠️", color: C.red },
];

const ALFRED_ITEMS = [
  { label: "12 calls handled overnight", icon: "✅", color: C.green },
  { label: "Ceiling leak: plumber booked for 9 AM", icon: "✅", color: C.green },
  { label: "Invoice paid automatically", icon: "✅", color: C.green },
  { label: "Inspection locked: Tuesday 2 PM", icon: "✅", color: C.green },
  { label: "Compliance form submitted", icon: "✅", color: C.green },
];

export const Abodient_Inbox: React.FC = () => {
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

  const stressPulse = Math.sin(frame * 0.12) * 0.15;

  return (
    <div style={{
      width: 1080, height: 1920,
      background: C.dark,
      overflow: "hidden", position: "relative",
      fontFamily: "'Inter', sans-serif",
    }}>

      {/* ═══ SCENE 1: THE HOOK (0–80) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(0, 78),
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        padding: "200px 60px 400px", zIndex: 2,
      }}>
        <div style={{ ...fadeIn(5), fontSize: 28, color: C.dimText, fontWeight: 600, letterSpacing: 3, fontFamily: "'JetBrains Mono', monospace" }}>
          MONDAY MORNING
        </div>
        <div style={{ ...slam(18), fontSize: 68, color: C.cream, fontWeight: 800, textAlign: "center", lineHeight: 1.2, marginTop: 20 }}>
          8 properties.
        </div>
        <div style={{ ...slam(38), fontSize: 68, color: C.red, fontWeight: 800, textAlign: "center", lineHeight: 1.2, marginTop: 10, fontStyle: "italic" }}>
          No Alfred.
        </div>
        <div style={{ ...fadeIn(58), fontSize: 36, color: C.dimText, marginTop: 30, textAlign: "center" }}>
          Here's what's waiting for you.
        </div>
      </div>

      {/* ═══ SCENE 2: CHAOS INBOX (85–230) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(83, 228),
        display: "flex", flexDirection: "column",
        padding: "180px 50px 300px", zIndex: 2,
      }}>
        <div style={{
          ...fadeIn(88), fontSize: 26, color: C.red, fontWeight: 700, letterSpacing: 3,
          marginBottom: 30,
        }}>
          YOUR INBOX RIGHT NOW
        </div>

        <div style={{
          ...slam(95),
          alignSelf: "flex-start",
          background: C.red, borderRadius: 30, padding: "10px 30px",
          marginBottom: 30,
        }}>
          <span style={{ fontSize: 32, color: "#fff", fontWeight: 800 }}>47 unread</span>
        </div>

        {CHAOS_ITEMS.map((item, i) => {
          const start = 105 + i * 25;
          return (
            <div key={i} style={{
              ...fadeIn(start),
              display: "flex", alignItems: "center", gap: 18,
              marginBottom: 20, padding: "22px 28px",
              background: `rgba(239,68,68,${0.06 + stressPulse * 0.04})`,
              borderRadius: 14, border: "1px solid rgba(239,68,68,0.15)",
            }}>
              <div style={{ fontSize: 36, flexShrink: 0 }}>{item.icon}</div>
              <div style={{ flex: 1, fontSize: 34, color: C.cream, fontWeight: 500, lineHeight: 1.3 }}>
                {item.label}
              </div>
            </div>
          );
        })}

        <div style={{
          ...fadeIn(220), fontSize: 30, color: C.dimText, textAlign: "center", marginTop: 15, fontStyle: "italic",
        }}>
          ...and it's only 7:30 AM.
        </div>
      </div>

      {/* ═══ SCENE 3: ALFRED INBOX (235–400) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(233, 398),
        display: "flex", flexDirection: "column",
        padding: "180px 50px 300px", zIndex: 2,
      }}>
        <div style={{
          ...fadeIn(238), fontSize: 26, color: C.green, fontWeight: 700, letterSpacing: 3,
          marginBottom: 30,
        }}>
          SAME MONDAY. WITH ALFRED.
        </div>

        <div style={{
          ...slam(245),
          alignSelf: "flex-start",
          background: C.green, borderRadius: 30, padding: "10px 30px",
          marginBottom: 30,
        }}>
          <span style={{ fontSize: 32, color: "#fff", fontWeight: 800 }}>0 unread</span>
        </div>

        {ALFRED_ITEMS.map((item, i) => {
          const start = 255 + i * 28;
          return (
            <div key={i} style={{
              ...fadeIn(start),
              display: "flex", alignItems: "center", gap: 18,
              marginBottom: 20, padding: "22px 28px",
              background: "rgba(34,197,94,0.06)",
              borderRadius: 14, border: "1px solid rgba(34,197,94,0.12)",
            }}>
              <div style={{ fontSize: 36, flexShrink: 0 }}>{item.icon}</div>
              <div style={{ flex: 1, fontSize: 34, color: C.cream, fontWeight: 500, lineHeight: 1.3 }}>
                {item.label}
              </div>
            </div>
          );
        })}

        <div style={{
          ...fadeIn(390), fontSize: 34, color: C.green, textAlign: "center", marginTop: 15, fontWeight: 600,
        }}>
          Coffee's still hot.
        </div>
      </div>

      {/* ═══ SCENE 4: CTA (405–540) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(403, 540),
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", padding: "300px 60px 500px", zIndex: 2,
        background: C.dark,
      }}>
        <div style={{
          ...fadeIn(408),
          width: 80, height: 80, borderRadius: 20,
          background: C.coral, display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 40, color: "#fff", fontWeight: 900, marginBottom: 30,
        }}>
          A
        </div>
        <div style={{ ...slam(418), fontSize: 56, color: C.cream, fontWeight: 700, textAlign: "center" }}>
          abodient.ai
        </div>
        <div style={{ ...fadeIn(435), fontSize: 38, color: C.coral, fontWeight: 600, textAlign: "center", marginTop: 15, fontStyle: "italic" }}>
          Your inbox. Handled.
        </div>
        <div style={{
          ...fadeIn(455), marginTop: 40, padding: "22px 60px",
          background: C.coral, borderRadius: 50,
          fontSize: 36, fontWeight: 700, color: "#fff",
        }}>
          Try free for 1 month
        </div>
      </div>
    </div>
  );
};
