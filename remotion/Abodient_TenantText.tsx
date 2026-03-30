import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
// ABODIENT.AI — TENANT TEXTS AT 11PM
// Revelation (#3): chat bubbles progressively reveal AI competence
// Convergence: Alfred books the plumber AND gives a temporary fix — "better than a human PM"
// Style: dark chat UI, coral accents, notification hook
// Brand: coral #e8734a, cream #F5F0EA

const COLORS = {
  bg: "#0a0a14",
  coral: "#e8734a",
  cream: "#F5F0EA",
  green: "#22c55e",
  blue: "#3b82f6",
  dimText: "#6b7280",
  tenantBubble: "#1e1e2e",
  aiBubble: "rgba(232, 115, 74, 0.12)",
  aiBorder: "rgba(232, 115, 74, 0.25)",
  typingDot: "#4b5563",
};

const MESSAGES: Array<{ from: string; text: string; time: string }> = [
  { from: "tenant", text: "Hi, the kitchen tap is leaking pretty bad", time: "11:47 PM" },
  { from: "ai", text: "Hi Sarah — sorry about that. Is the water coming from the base of the tap or the handle?", time: "11:47 PM" },
  { from: "tenant", text: "The base, there's water pooling on the counter", time: "11:48 PM" },
  { from: "ai", text: "Sounds like the O-ring seal. I've found 2 plumbers available tomorrow AM. Can you do 8–9 or 10–11?", time: "11:48 PM" },
  { from: "tenant", text: "10-11 works!", time: "11:48 PM" },
  { from: "ai", text: "Booked — Henderson Plumbing, 10 AM. They'll text 30 min before. Try tightening the base ring clockwise — usually slows the drip.", time: "11:49 PM" },
];

export const Abodient_TenantText: React.FC = () => {
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

  // Typing indicator dot animation
  const typingDot = (dotIndex: number, start: number) => {
    const t = interpolate(frame, [start, start + 20], [0, Math.PI * 2], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
    return 0.3 + 0.7 * Math.max(0, Math.sin(t + dotIndex * 1.2));
  };

  // Message appearance frames
  const MSG_FRAMES = [90, 150, 225, 280, 350, 395];
  // Typing indicator before AI messages (indices 1, 3, 5)
  const TYPING = [
    { start: 125, end: 149 },
    { start: 255, end: 279 },
    { start: 370, end: 394 },
  ];

  return (
    <div style={{
      width: 1080, height: 1920,
      background: COLORS.bg,
      overflow: "hidden", position: "relative",
      fontFamily: "'Inter', sans-serif",
    }}>

      {/* SCENE 1: HOOK (0–82) — notification at 11:47 PM */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(0, 80),
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        padding: "200px 60px 400px", zIndex: 2,
      }}>
        {/* Phone notification mockup */}
        <div style={{
          ...fadeIn(5),
          background: "rgba(255,255,255,0.06)", borderRadius: 24,
          padding: "24px 36px", display: "flex", alignItems: "center", gap: 20,
          border: "1px solid rgba(255,255,255,0.08)", width: "90%",
        }}>
          <div style={{
            width: 52, height: 52, borderRadius: 12,
            background: "rgba(255,255,255,0.08)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 28,
          }}>
            💬
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 26, color: COLORS.dimText, fontWeight: 600 }}>Tenant — Unit 4B</div>
            <div style={{ fontSize: 30, color: COLORS.cream, fontWeight: 500, marginTop: 2 }}>the kitchen tap is leaking...</div>
          </div>
          <div style={{ fontSize: 24, color: COLORS.dimText }}>11:47</div>
        </div>

        <div style={{ ...slam(30), fontSize: 72, color: COLORS.cream, fontWeight: 800, textAlign: "center", marginTop: 50, lineHeight: 1.2 }}>
          You're asleep.
        </div>
        <div style={{ ...slam(48), fontSize: 72, color: COLORS.coral, fontWeight: 800, textAlign: "center", lineHeight: 1.2, fontStyle: "italic" }}>
          Alfred isn't.
        </div>
      </div>

      {/* SCENE 2: THE CHAT (85–460) */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(83, 458),
        display: "flex", flexDirection: "column",
        padding: "120px 40px 260px", zIndex: 2,
      }}>
        {/* Chat header */}
        <div style={{
          display: "flex", alignItems: "center", gap: 16,
          padding: "0 10px 28px", borderBottom: "1px solid rgba(255,255,255,0.06)",
          marginBottom: 24,
        }}>
          <div style={{
            width: 48, height: 48, borderRadius: "50%",
            background: `linear-gradient(135deg, ${COLORS.coral}, ${COLORS.coral}88)`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 22, fontWeight: 700, color: "#fff",
          }}>A</div>
          <div>
            <div style={{ fontSize: 30, color: COLORS.cream, fontWeight: 700 }}>Alfred · Unit 4B</div>
            <div style={{ fontSize: 22, color: COLORS.green, fontWeight: 500, display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: COLORS.green }} />
              Online
            </div>
          </div>
        </div>

        {/* Messages */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
          {MESSAGES.map((msg, i) => {
            if (frame < MSG_FRAMES[i]) return null;
            const isTenant = msg.from === "tenant";

            return (
              <div key={i} style={{
                ...fadeIn(MSG_FRAMES[i], 10),
                alignSelf: isTenant ? "flex-start" : "flex-end",
                maxWidth: "82%",
              }}>
                <div style={{
                  background: isTenant ? COLORS.tenantBubble : COLORS.aiBubble,
                  border: isTenant ? "1px solid rgba(255,255,255,0.06)" : `1px solid ${COLORS.aiBorder}`,
                  borderRadius: isTenant ? "20px 20px 20px 6px" : "20px 20px 6px 20px",
                  padding: "16px 22px",
                }}>
                  <div style={{
                    fontSize: 28, color: COLORS.cream, lineHeight: 1.4, fontWeight: 400,
                  }}>
                    {msg.text}
                  </div>
                </div>
                <div style={{
                  fontSize: 20, color: COLORS.dimText, marginTop: 4,
                  textAlign: isTenant ? "left" : "right", padding: "0 8px",
                }}>
                  {msg.time}
                </div>
              </div>
            );
          })}

          {/* Typing indicator before AI responses */}
          {TYPING.map((t, ti) => {
            if (frame < t.start || frame >= t.end) return null;
            return (
              <div key={`typing-${ti}`} style={{
                alignSelf: "flex-end",
                ...fadeIn(t.start, 6),
              }}>
                <div style={{
                  display: "flex", gap: 7,
                  background: COLORS.aiBubble, border: `1px solid ${COLORS.aiBorder}`,
                  borderRadius: "20px 20px 6px 20px", padding: "18px 26px",
                }}>
                  {[0, 1, 2].map(d => (
                    <div key={d} style={{
                      width: 10, height: 10, borderRadius: "50%",
                      background: COLORS.typingDot, opacity: typingDot(d, t.start),
                    }} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SCENE 3: PUNCHLINE (465–540) — ritardando */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(463, 538),
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", padding: "300px 60px 500px", zIndex: 2,
      }}>
        <div style={{ ...fadeIn(467), fontSize: 36, color: COLORS.dimText, fontWeight: 600, letterSpacing: 2 }}>
          DIAGNOSED • BOOKED • RESOLVED
        </div>
        <div style={{ ...slam(483), fontSize: 68, color: COLORS.cream, fontWeight: 800, textAlign: "center", marginTop: 15, lineHeight: 1.2 }}>
          2 minutes. Zero calls.
        </div>
        <div style={{ ...fadeIn(503), fontSize: 42, color: COLORS.coral, fontWeight: 600, fontStyle: "italic", marginTop: 15 }}>
          You woke up to a summary.
        </div>
        <div style={{
          ...fadeIn(525), marginTop: 45, padding: "22px 50px",
          border: `2px solid ${COLORS.coral}`, borderRadius: 50,
          fontSize: 34, fontWeight: 700, color: COLORS.cream,
        }}>
          abodient.ai
        </div>
      </div>
    </div>
  );
};
