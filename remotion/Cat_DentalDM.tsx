import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
// CATALOG — DENTAL: THE DM
// WhatsApp chat UI — dentist texting like a friend
// Topic: Brushing before or after coffee

export const Cat_DentalDM: React.FC = () => {
  const frame = useCurrentFrame();

  const msgIn = (s: number, d = 14) => ({
    opacity: interpolate(frame, [s, s + d], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    transform: `translateY(${interpolate(frame, [s, s + d], [18, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })}px)`,
  });

  const typing = (s: number, e: number) => {
    if (frame < s || frame > e) return 0;
    return interpolate(frame, [s, s + 5], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  };

  const dotAnim = (offset: number) =>
    0.3 + 0.7 * Math.abs(Math.sin((frame + offset * 8) * 0.15));

  const Bubble: React.FC<{
    text: string; time: string; start: number; isUser?: boolean; children?: React.ReactNode;
  }> = ({ text, time, start, isUser = false, children }) => (
    <div style={{
      ...msgIn(start),
      alignSelf: isUser ? "flex-end" : "flex-start",
      maxWidth: isUser ? 650 : 720,
    }}>
      <div style={{
        background: isUser ? "#dcf8c6" : "#ffffff",
        borderRadius: isUser ? "20px 20px 4px 20px" : "20px 20px 20px 4px",
        padding: "18px 26px 12px",
        boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
      }}>
        {children || <div style={{ fontSize: 40, color: "#1a1a1a", lineHeight: 1.45 }}>{text}</div>}
        <div style={{ fontSize: 24, color: "#8696a0", textAlign: "right", marginTop: 4, display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 6 }}>
          {time}{isUser && <span style={{ color: "#53bdeb" }}>✓✓</span>}
        </div>
      </div>
    </div>
  );

  const TypingDots: React.FC<{ visible: number }> = ({ visible }) => (
    <div style={{ opacity: visible, alignSelf: "flex-start" }}>
      <div style={{
        background: "#ffffff", borderRadius: "20px 20px 20px 4px",
        padding: "16px 26px", display: "flex", gap: 7, alignItems: "center",
        boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
      }}>
        {[0, 1, 2].map((i) => (
          <div key={i} style={{ width: 14, height: 14, borderRadius: "50%", background: "#8696a0", opacity: dotAnim(i) }} />
        ))}
      </div>
    </div>
  );

  return (
    <div style={{
      width: 1080, height: 1920,
      background: "#e5ddd5",
      overflow: "hidden", position: "relative",
      fontFamily: "'Inter', -apple-system, sans-serif",
    }}>
      {/* WA wallpaper dots */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url("data:image/svg+xml,${encodeURIComponent('<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="1.5" fill="rgba(0,0,0,0.03)"/></svg>')}")`,
        backgroundSize: "40px 40px",
      }} />

      {/* Top bar */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 180,
        background: "#075e54",
        display: "flex", alignItems: "flex-end", padding: "0 30px 20px", gap: 20, zIndex: 10,
      }}>
        <div style={{ fontSize: 32, color: "#fff", opacity: 0.7 }}>←</div>
        <div style={{
          width: 80, height: 80, borderRadius: "50%",
          background: "linear-gradient(135deg, #60a5fa, #3b82f6)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 34, color: "#fff", fontWeight: 600,
        }}>🦷</div>
        <div>
          <div style={{ fontSize: 36, color: "#ffffff", fontWeight: 500 }}>Your Dentist</div>
          <div style={{ fontSize: 26, color: "#a7d8d8" }}>online</div>
        </div>
      </div>

      {/* Chat area */}
      <div style={{
        position: "absolute", left: 30, right: 150, top: 220, bottom: 510,
        display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: 14,
      }}>
        <TypingDots visible={typing(0, 22)} />
        <Bubble text="Hey! Quick question — do you brush your teeth before or after coffee?" time="09:12" start={25} />

        <TypingDots visible={typing(55, 72)} />
        <Bubble text="After, obviously? 😅" time="09:13" start={76} isUser />

        <TypingDots visible={typing(100, 122)} />
        <Bubble text="" time="09:14" start={126}>
          <div style={{ fontSize: 40, color: "#1a1a1a", lineHeight: 1.45, fontWeight: 600 }}>
            Actually — before.
          </div>
          <div style={{ fontSize: 38, color: "#1a1a1a", lineHeight: 1.45, marginTop: 8 }}>
            Coffee is acidic. Brushing right after pushes that acid into softened enamel. Wait 30 min, or brush before.
          </div>
        </Bubble>

        <TypingDots visible={typing(185, 205)} />
        <Bubble text="Wait, seriously? I've been doing it wrong for years 😳" time="09:15" start={210} isUser />

        <TypingDots visible={typing(240, 258)} />
        <Bubble text="You're not alone. That's what we're here for 😊" time="09:16" start={262} />
      </div>

      {/* Bottom input bar */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 120,
        background: "#f0f0f0",
        display: "flex", alignItems: "center", padding: "0 20px", gap: 12,
      }}>
        <div style={{ fontSize: 30, color: "#8696a0" }}>😊</div>
        <div style={{
          flex: 1, height: 72, borderRadius: 36,
          background: "#ffffff", display: "flex", alignItems: "center",
          padding: "0 24px", fontSize: 32, color: "#8696a0",
        }}>Type a message...</div>
        <div style={{
          width: 72, height: 72, borderRadius: "50%",
          background: "#075e54", display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 30, color: "#fff",
        }}>🎤</div>
      </div>

      {/* CTA overlay */}
      <div style={{
        position: "absolute", left: 30, right: 150, bottom: 520,
        opacity: interpolate(frame, [295, 315], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
      }}>
        <div style={{
          background: "rgba(7,94,84,0.95)", borderRadius: 20,
          padding: "16px 28px", display: "inline-block",
        }}>
          <span style={{ fontSize: 28, color: "#ffffff", letterSpacing: 3 }}>YOUR DENTAL CLINIC</span>
        </div>
      </div>
    </div>
  );
};
