import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
// GenZ Reel: meme energy, fast cuts, ironic, text-message format reviews
// NOT premium. NOT clinical. Chaotic, funny, relatable.
// Breaking: dark mode palette, serif fonts, slow reveals, review cards

const C = {
  bg: "#000000",
  text: "#ffffff",
  gray: "#888888",
  green: "#25D366",  // WhatsApp green for chat bubbles
  blue: "#0084ff",   // iMessage blue
  red: "#ff3b30",
  yellow: "#ffcc00",
  pink: "#ff2d55",
};
const F = {
  sans: "'Inter', -apple-system, sans-serif",
  mono: "'JetBrains Mono', monospace",
};

function sceneVis(frame: number, start: number, end: number) {
  if (frame < start || frame > end + 8) return 0;
  return Math.min(
    interpolate(frame, [start, start + 6], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    interpolate(frame, [end, end + 6], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
  );
}

// iMessage-style chat bubble
function ChatBubble({ text, isMe, frame, start }: {
  text: string; isMe: boolean; frame: number; start: number;
}) {
  const scale = interpolate(frame, [start, start + 6], [0.8, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.back(1.5)),
  });
  const opacity = interpolate(frame, [start, start + 4], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  return (
    <div style={{
      opacity, transform: `scale(${scale})`,
      alignSelf: isMe ? "flex-end" : "flex-start",
      maxWidth: "85%",
      padding: "28px 36px",
      borderRadius: 30,
      borderBottomRightRadius: isMe ? 6 : 30,
      borderBottomLeftRadius: isMe ? 30 : 6,
      background: isMe ? C.blue : "#2a2a2e",
      fontSize: 44, color: C.text, fontFamily: F.sans,
      lineHeight: 1.45, fontWeight: 400,
    }}>
      {text}
    </div>
  );
}

// 15s = 450 frames — GenZ attention span is SHORT
export const DentalGenZ: React.FC = () => {
  const frame = useCurrentFrame();

  // Glitch/flash effect on scene transitions
  const flash = (start: number) => {
    const d = frame - start;
    return d >= 0 && d < 3 ? 0.3 : 0;
  };

  return (
    <div style={{
      width: 1080, height: 1920, background: C.bg,
      overflow: "hidden", position: "relative", fontFamily: F.sans,
    }}>
      {/* Flash overlay on cuts */}
      <div style={{
        position: "absolute", inset: 0, background: C.text, zIndex: 50, pointerEvents: "none",
        opacity: flash(0) + flash(90) + flash(180) + flash(270) + flash(360),
      }} />

      {/* ═══ SCENE 1: POV hook (0-85) — FAST ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 2, 85),
        padding: "200px 60px",
      }}>
        {/* POV text — huge, fills screen */}
        <div style={{
          fontSize: 52, color: C.gray, fontFamily: F.mono, letterSpacing: 2,
          textTransform: "uppercase", marginBottom: 30,
        }}>POV:</div>
        <div style={{
          fontSize: 88, color: C.text, fontWeight: 800, textAlign: "center", lineHeight: 1.2,
        }}>
          you read the reviews for your new dentist
        </div>
        <div style={{
          fontSize: 88, color: C.yellow, fontWeight: 800, textAlign: "center", lineHeight: 1.2,
          marginTop: 20,
        }}>
          and they're UNHINGED
        </div>
      </div>

      {/* ═══ SCENE 2: Shocked character + first review as chat (90-175) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        opacity: sceneVis(frame, 92, 175),
        padding: "200px 50px 300px",
        gap: 20,
      }}>
        <div style={{
          display: "flex", alignItems: "center", gap: 20, marginBottom: 10,
        }}>
          <Img src={staticFile("characters/genz-shocked.png")} style={{
            width: 160, height: 160, objectFit: "contain", borderRadius: 80,
          }} />
          <div>
            <div style={{ fontSize: 42, color: C.text, fontWeight: 700 }}>Google Reviews</div>
            <div style={{ fontSize: 34, color: C.gray }}>Harmonia Dental</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <ChatBubble
            text="I would rather fly from NORWAY to this clinic than ever go to a dentist in Norway 💀"
            isMe={false} frame={frame} start={100}
          />
          <ChatBubble
            text="bro WHAT 😭😭😭"
            isMe={true} frame={frame} start={120}
          />
        </div>
      </div>

      {/* ═══ SCENE 3: More reviews, escalating (180-265) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        justifyContent: "center",
        opacity: sceneVis(frame, 182, 265),
        padding: "200px 50px 300px",
        gap: 16,
      }}>
        <ChatBubble
          text="I'm giving 5 stars because there's no 6 or 7 ⭐⭐⭐⭐⭐⭐⭐"
          isMe={false} frame={frame} start={185}
        />
        <ChatBubble
          text="I'm coming from MALLORCA and that says it all 🏝️"
          isMe={false} frame={frame} start={205}
        />
        <ChatBubble
          text="no way these are real 💀💀"
          isMe={true} frame={frame} start={225}
        />
        <ChatBubble
          text="(they're all verified on Google)"
          isMe={true} frame={frame} start={240}
        />
      </div>

      {/* ═══ SCENE 4: The life-changing one (270-355) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        justifyContent: "center",
        opacity: sceneVis(frame, 272, 355),
        padding: "200px 50px 300px",
        gap: 16,
      }}>
        <div style={{ fontSize: 40, color: C.gray, fontFamily: F.mono, textAlign: "center", marginBottom: 10 }}>
          and then this one hits different:
        </div>
        <ChatBubble
          text="It's changed my life. I can eat and, above all, smile without fear. 🥹"
          isMe={false} frame={frame} start={285}
        />
        <div style={{
          opacity: interpolate(frame, [320, 334], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
          fontSize: 120, textAlign: "center", marginTop: 20,
        }}>
          🥹
        </div>
      </div>

      {/* ═══ SCENE 5: CTA — meme format (360-450) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 362, 450),
        padding: "200px 60px",
        gap: 30,
      }}>
        <div style={{
          fontSize: 72, color: C.text, fontWeight: 800, textAlign: "center", lineHeight: 1.3,
        }}>
          me booking a flight to Spain for a
        </div>
        <div style={{
          fontSize: 84, color: C.yellow, fontWeight: 800, textAlign: "center", lineHeight: 1.3,
        }}>
          DENTIST APPOINTMENT
        </div>
        <Img src={staticFile("characters/dental-hook.png")} style={{
          width: 500, height: 500, objectFit: "contain", borderRadius: 24,
          marginTop: 20,
          opacity: interpolate(frame, [390, 405], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
        }} />
        <div style={{
          opacity: interpolate(frame, [415, 428], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
          padding: "20px 50px", background: C.text, borderRadius: 50,
          fontSize: 38, fontWeight: 800, color: C.bg,
        }}>
          HARMONIA DENTAL 📍 MASNOU
        </div>
      </div>
    </div>
  );
};
