import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

// Option C: "WhatsApp Thread" — Review revealed as chat conversation.
// Social proof as forwarded message. Feels authentic.
// 18s = 540 frames @ 30fps

const C = {
  bg: "#0b141a",
  chatBg: "#0b141a",
  bubbleOut: "#005c4b",
  bubbleIn: "#1f2c34",
  text: "#e9edef",
  sub: "#8696a0",
  green: "#25d366",
  topBar: "#1f2c34",
  time: "#8696a0",
  link: "#53bdeb",
  star: "#fbbf24",
};
const F = {
  sans: "'Inter', -apple-system, sans-serif",
  serif: "'DM Serif Display', Georgia, serif",
};

function ease(frame: number, start: number, dur: number, from: number, to: number, fn = Easing.out(Easing.cubic)) {
  return interpolate(frame, [start, start + dur], [from, to], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: fn,
  });
}

function slideUp(frame: number, start: number, dur = 16) {
  return {
    opacity: ease(frame, start, dur, 0, 1),
    transform: `translateY(${ease(frame, start, dur, 50, 0)}px)`,
  };
}

function sceneVis(frame: number, start: number, end: number) {
  if (frame < start - 5 || frame > end + 20) return 0;
  return Math.min(
    interpolate(frame, [start, start + 12], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    interpolate(frame, [end, end + 16], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
  );
}

// Typing indicator
function TypingDots({ frame, start }: { frame: number; start: number }) {
  const vis = ease(frame, start, 8, 0, 1);
  return (
    <div style={{
      opacity: vis,
      display: "flex", alignItems: "center", gap: 6,
      background: C.bubbleIn, borderRadius: 18, padding: "18px 24px",
      alignSelf: "flex-start", marginLeft: 40,
    }}>
      {[0, 1, 2].map(i => {
        const bounce = Math.sin((frame - start + i * 8) * 0.2) * 0.5 + 0.5;
        return (
          <div key={i} style={{
            width: 12, height: 12, borderRadius: "50%",
            background: C.sub,
            opacity: 0.4 + bounce * 0.6,
            transform: `translateY(${-bounce * 4}px)`,
          }} />
        );
      })}
    </div>
  );
}

// Chat bubble
function Bubble({ text, time, isOut, frame, start, children }: {
  text?: string; time: string; isOut: boolean; frame: number; start: number; children?: React.ReactNode;
}) {
  return (
    <div style={{
      ...slideUp(frame, start, 14),
      alignSelf: isOut ? "flex-end" : "flex-start",
      marginLeft: isOut ? 100 : 40,
      marginRight: isOut ? 40 : 100,
      background: isOut ? C.bubbleOut : C.bubbleIn,
      borderRadius: 16,
      padding: "16px 20px",
      maxWidth: 800,
    }}>
      {text && <div style={{
        fontSize: 38, color: C.text, lineHeight: 1.5,
      }}>{text}</div>}
      {children}
      <div style={{
        fontSize: 24, color: C.time, textAlign: "right", marginTop: 6,
      }}>{time} {isOut ? "✓✓" : ""}</div>
    </div>
  );
}

export const ReviewWhatsApp: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <div style={{
      width: 1080, height: 1920, background: C.bg,
      overflow: "hidden", position: "relative", fontFamily: F.sans,
    }}>

      {/* ═══ SCENE 1: HOOK — incoming message notification (0-80) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 0, 80),
        padding: "80px 60px",
        gap: 30,
      }}>
        {/* Notification card */}
        <div style={{
          ...slideUp(frame, 5, 18),
          background: C.bubbleIn,
          borderRadius: 24,
          padding: "36px 44px",
          width: "100%",
          display: "flex", alignItems: "center", gap: 24,
        }}>
          <div style={{
            width: 80, height: 80, borderRadius: "50%",
            background: C.green,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 40, color: "#fff", fontWeight: 700,
          }}>T</div>
          <div>
            <div style={{ fontSize: 36, color: C.text, fontWeight: 600 }}>Taltunran</div>
            <div style={{ fontSize: 30, color: C.sub }}>📍 Norway</div>
          </div>
        </div>

        <div style={{
          ...slideUp(frame, 30, 20),
          fontSize: 68, color: C.text, fontFamily: F.serif, textAlign: "center", lineHeight: 1.3,
        }}>
          Someone just left a{" "}
          <span style={{ color: C.star }}>5-star</span> review
        </div>

        <div style={{
          ...slideUp(frame, 55, 16),
          fontSize: 38, color: C.sub,
        }}>Read the conversation ↓</div>
      </div>

      {/* ═══ SCENE 2: WHATSAPP THREAD (85-420) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        opacity: sceneVis(frame, 85, 420),
      }}>
        {/* Top bar */}
        <div style={{
          background: C.topBar,
          padding: "50px 40px 20px",
          display: "flex", alignItems: "center", gap: 18,
        }}>
          <div style={{ fontSize: 34, color: C.sub }}>←</div>
          <div style={{
            width: 56, height: 56, borderRadius: "50%",
            background: C.green,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 28, color: "#fff", fontWeight: 700,
          }}>T</div>
          <div>
            <div style={{ fontSize: 32, color: C.text, fontWeight: 600 }}>Taltunran</div>
            <div style={{ fontSize: 24, color: C.sub }}>online</div>
          </div>
        </div>

        {/* Chat area */}
        <div style={{
          flex: 1, display: "flex", flexDirection: "column",
          justifyContent: "center",
          padding: "30px 0",
          gap: 18,
        }}>
          {/* Date chip */}
          <div style={{
            ...slideUp(frame, 90, 12),
            alignSelf: "center",
            background: C.bubbleIn,
            borderRadius: 12,
            padding: "8px 20px",
            fontSize: 24, color: C.sub,
          }}>Today</div>

          {/* Clinic message */}
          <Bubble isOut={true} time="14:32" frame={frame} start={100}
            text="Hi! How was your experience at Harmonia Dental? 😊" />

          {/* Typing... */}
          {frame >= 130 && frame < 165 && <TypingDots frame={frame} start={130} />}

          {/* Review part 1 */}
          <Bubble isOut={false} time="14:33" frame={frame} start={165}>
            <div style={{ fontSize: 38, color: C.text, lineHeight: 1.5 }}>
              Here is the{" "}
              <span style={{ fontWeight: 700, color: C.star }}>best dentist team</span>
              {" "}I have had in my 37 years of life.
            </div>
          </Bubble>

          {/* Typing... */}
          {frame >= 215 && frame < 250 && <TypingDots frame={frame} start={215} />}

          {/* Review part 2 — the punchline */}
          <Bubble isOut={false} time="14:33" frame={frame} start={250}>
            <div style={{ fontSize: 38, color: C.text, lineHeight: 1.5 }}>
              Dr. Manuel, Dra. Cristina and Sandra took{" "}
              <span style={{ fontWeight: 700, color: C.green }}>so good care of me</span>
              {" "}I now would rather{" "}
              <span style={{ fontWeight: 700, color: C.star }}>fly from Norway</span>
              {" "}🇳🇴✈️🇪🇸 to this clinic than ever go to a dentist in Norway.
            </div>
          </Bubble>

          {/* Reaction */}
          <div style={{
            ...slideUp(frame, 310, 12),
            alignSelf: "flex-end", marginRight: 60,
            display: "flex", gap: 6,
          }}>
            {[0,1,2,3,4].map(i => {
              const s = ease(frame, 315 + i * 4, 8, 0, 1, Easing.out(Easing.back(2)));
              return <span key={i} style={{ fontSize: 40, transform: `scale(${s})` }}>⭐</span>;
            })}
          </div>

          {/* Clinic reply */}
          <Bubble isOut={true} time="14:35" frame={frame} start={350}
            text="Thank you so much! 🙏 The whole team is grateful." />

          {/* Google verified badge */}
          <div style={{
            ...slideUp(frame, 385, 14),
            alignSelf: "center",
            background: `${C.bubbleIn}`,
            borderRadius: 12,
            padding: "10px 24px",
            fontSize: 26, color: C.sub,
          }}>🔒 Verified Google Review</div>
        </div>
      </div>

      {/* ═══ SCENE 3: CTA (425-540) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 425, 540),
        padding: "80px 60px",
        gap: 40,
      }}>
        <div style={{
          ...slideUp(frame, 428, 20),
          fontSize: 68, color: C.text, fontFamily: F.serif, textAlign: "center", lineHeight: 1.3,
        }}>
          People <span style={{ color: C.star }}>fly here</span>
          <br />for a reason.
        </div>

        <div style={{
          ...slideUp(frame, 455, 18),
          width: 600, height: 2,
          background: `linear-gradient(90deg, transparent, ${C.green}, transparent)`,
        }} />

        <div style={{
          ...slideUp(frame, 465, 18),
          fontSize: 52, color: C.text, fontWeight: 700, fontFamily: F.serif,
        }}>Harmonia Dental</div>

        <div style={{
          ...slideUp(frame, 478, 16),
          fontSize: 34, color: C.sub,
        }}>El Masnou, Barcelona</div>

        <div style={{
          ...slideUp(frame, 495, 18),
          background: C.green,
          borderRadius: 60,
          padding: "22px 60px",
          fontSize: 38, color: "#ffffff", fontWeight: 700,
        }}>Book Now →</div>
      </div>
    </div>
  );
};
