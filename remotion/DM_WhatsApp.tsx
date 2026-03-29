import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
// DERMAMEDICUM INTIMATE v2: WhatsApp UI
// Message bubbles from "your dermatologist friend"
// Topic: Sonnenschutz — auch bei Wolken
// Warm, familiar, lo-fi. NOT clinical.

export const DM_WhatsApp: React.FC = () => {
  const frame = useCurrentFrame();

  const msgIn = (s: number, d = 14) => ({
    opacity: interpolate(frame, [s, s + d], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    transform: `translateY(${interpolate(frame, [s, s + d], [20, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })}px)`,
  });

  const typing = (s: number, e: number) => {
    if (frame < s || frame > e) return 0;
    return interpolate(frame, [s, s + 5], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  };

  // Dot animation for typing indicator
  const dotAnim = (offset: number) =>
    0.3 + 0.7 * Math.abs(Math.sin((frame + offset * 8) * 0.15));

  const Bubble: React.FC<{
    text: string;
    time: string;
    start: number;
    isUser?: boolean;
    children?: React.ReactNode;
  }> = ({ text, time, start, isUser = false, children }) => (
    <div style={{
      ...msgIn(start),
      alignSelf: isUser ? "flex-end" : "flex-start",
      maxWidth: isUser ? 680 : 750,
    }}>
      <div style={{
        background: isUser ? "#dcf8c6" : "#ffffff",
        borderRadius: isUser ? "20px 20px 4px 20px" : "20px 20px 20px 4px",
        padding: "20px 28px 14px",
        boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
      }}>
        {children || (
          <div style={{ fontSize: 42, color: "#1a1a1a", lineHeight: 1.45 }}>
            {text}
          </div>
        )}
        <div style={{
          fontSize: 26, color: "#8696a0", textAlign: "right", marginTop: 6,
          display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 6,
        }}>
          {time}
          {isUser && <span style={{ color: "#53bdeb" }}>✓✓</span>}
        </div>
      </div>
    </div>
  );

  const TypingIndicator: React.FC<{ visible: number }> = ({ visible }) => (
    <div style={{
      opacity: visible,
      alignSelf: "flex-start",
    }}>
      <div style={{
        background: "#ffffff", borderRadius: "20px 20px 20px 4px",
        padding: "18px 28px", display: "flex", gap: 8, alignItems: "center",
        boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
      }}>
        {[0, 1, 2].map((i) => (
          <div key={i} style={{
            width: 16, height: 16, borderRadius: "50%",
            background: "#8696a0", opacity: dotAnim(i),
          }} />
        ))}
      </div>
    </div>
  );

  return (
    <div style={{
      width: 1080, height: 1920,
      background: "#e5ddd5", // WhatsApp chat background
      overflow: "hidden", position: "relative",
      fontFamily: "'Inter', -apple-system, sans-serif",
    }}>
      {/* WhatsApp wallpaper pattern */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url("data:image/svg+xml,${encodeURIComponent('<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="1.5" fill="rgba(0,0,0,0.03)"/></svg>')}")`,
        backgroundSize: "40px 40px",
      }} />

      {/* Top bar — WhatsApp style */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 180,
        background: "#075e54",
        display: "flex", alignItems: "flex-end", padding: "0 30px 20px",
        gap: 20, zIndex: 10,
      }}>
        <div style={{ fontSize: 32, color: "#fff", opacity: 0.7 }}>←</div>
        {/* Avatar */}
        <div style={{
          width: 80, height: 80, borderRadius: "50%",
          background: "linear-gradient(135deg, #d4a853, #c49640)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 36, color: "#fff", fontWeight: 600,
        }}>DM</div>
        <div>
          <div style={{ fontSize: 38, color: "#ffffff", fontWeight: 500 }}>Deine Dermatologin</div>
          <div style={{ fontSize: 28, color: "#a7d8d8" }}>online</div>
        </div>
      </div>

      {/* Chat area — safe zone: top 288, bottom 480, right 120 */}
      <div style={{
        position: "absolute", left: 30, right: 150, top: 220, bottom: 510,
        display: "flex", flexDirection: "column",
        justifyContent: "flex-end", gap: 16,
      }}>

        {/* Typing (0-25) */}
        <TypingIndicator visible={typing(0, 25)} />

        {/* Message 1: The question */}
        <Bubble text="Hey! Kurze Frage: Trägst du Sonnenschutz, wenn es bewölkt ist?" time="14:32" start={28} />

        {/* Typing (55-75) */}
        <TypingIndicator visible={typing(58, 78)} />

        {/* User reply */}
        <Bubble text="Ehrlich gesagt... nein 😅" time="14:33" start={82} isUser />

        {/* Typing (100-120) */}
        <TypingIndicator visible={typing(105, 128)} />

        {/* Message 2: The correction */}
        <Bubble text="" time="14:34" start={132}>
          <div style={{ fontSize: 42, color: "#1a1a1a", lineHeight: 1.45 }}>
            80% der UV-Strahlung durchdringt Wolken.
          </div>
          <div style={{ fontSize: 42, color: "#1a1a1a", lineHeight: 1.45, marginTop: 10 }}>
            Deine Haut merkt den Unterschied nicht — die DNA-Schäden sind gleich.
          </div>
        </Bubble>

        {/* Typing (180-200) */}
        <TypingIndicator visible={typing(185, 208)} />

        {/* Message 3: The advice */}
        <Bubble text="" time="14:35" start={212}>
          <div style={{ fontSize: 44, color: "#1a1a1a", lineHeight: 1.45, fontWeight: 600 }}>
            SPF 30 — jeden Tag.
          </div>
          <div style={{ fontSize: 40, color: "#1a1a1a", lineHeight: 1.45, marginTop: 6, fontStyle: "italic" }}>
            Auch im Winter. Auch im Büro am Fenster.
          </div>
        </Bubble>

        {/* Typing (255-275) */}
        <TypingIndicator visible={typing(260, 280)} />

        {/* Message 4: Warm close */}
        <Bubble text="Wenn du Fragen hast — wir sind da. 💛" time="14:36" start={285} />
      </div>

      {/* Bottom bar — WhatsApp input */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 120,
        background: "#f0f0f0",
        display: "flex", alignItems: "center", padding: "0 20px", gap: 12,
      }}>
        <div style={{ fontSize: 32, color: "#8696a0" }}>😊</div>
        <div style={{
          flex: 1, height: 76, borderRadius: 38,
          background: "#ffffff", display: "flex", alignItems: "center",
          padding: "0 24px", fontSize: 34, color: "#8696a0",
        }}>
          Nachricht schreiben...
        </div>
        <div style={{
          width: 76, height: 76, borderRadius: "50%",
          background: "#075e54", display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 32, color: "#fff",
        }}>🎤</div>
      </div>

      {/* CTA overlay — appears last */}
      <div style={{
        position: "absolute", left: 30, right: 150, bottom: 520,
        opacity: interpolate(frame, [320, 340], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
      }}>
        <div style={{
          background: "rgba(7,94,84,0.95)", borderRadius: 20,
          padding: "18px 30px", display: "inline-block",
        }}>
          <span style={{ fontSize: 30, color: "#ffffff", letterSpacing: 3 }}>
            DERMAMEDICUM · BONN
          </span>
        </div>
      </div>
    </div>
  );
};
