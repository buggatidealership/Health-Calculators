import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
// Kids Reel: warm, playful, storybook aesthetic. Parents feel safe.
// Breaking: ALL dark mode conventions. Pastel palette. Rounded everything.
// The tooth character IS the guide through the reel.

const C = {
  bgTop: "#e8f4f8",      // Soft sky blue
  bgBottom: "#f0e6f6",   // Soft lavender
  text: "#2d3748",        // Dark but warm
  sub: "#718096",
  accent: "#6c5ce7",      // Playful purple
  pink: "#fd79a8",
  mint: "#81ecec",
  yellow: "#ffeaa7",
  orange: "#fab1a0",
  white: "#ffffff",
  card: "#ffffffdd",
};
const F = {
  display: "'DM Serif Display', Georgia, serif",
  sans: "'Inter', -apple-system, sans-serif",
};

function fadeUp(frame: number, start: number, dur = 18) {
  return {
    opacity: interpolate(frame, [start, start + dur], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    transform: `translateY(${interpolate(frame, [start, start + dur], [40, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })}px)`,
  };
}

function sceneVis(frame: number, start: number, end: number) {
  if (frame < start - 5 || frame > end + 12) return 0;
  return Math.min(
    interpolate(frame, [start, start + 14], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    interpolate(frame, [end - 8, end + 12], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
  );
}

// Floating shapes — background decoration
function FloatingShape({ x, y, size, color, shape, frame, speed = 0.02 }: {
  x: number; y: number; size: number; color: string; shape: "circle" | "star" | "heart";
  frame: number; speed?: number;
}) {
  const floatY = Math.sin(frame * speed) * 15;
  const rotate = frame * speed * 30;
  return (
    <div style={{
      position: "absolute", left: x, top: y + floatY,
      width: size, height: size, opacity: 0.15,
      transform: `rotate(${rotate}deg)`,
    }}>
      {shape === "circle" && (
        <div style={{ width: size, height: size, borderRadius: "50%", background: color }} />
      )}
      {shape === "star" && (
        <div style={{ fontSize: size, color, lineHeight: 1 }}>★</div>
      )}
      {shape === "heart" && (
        <div style={{ fontSize: size, color, lineHeight: 1 }}>♥</div>
      )}
    </div>
  );
}

// 18s = 540 frames
export const DentalKids: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <div style={{
      width: 1080, height: 1920,
      background: `linear-gradient(180deg, ${C.bgTop} 0%, ${C.bgBottom} 100%)`,
      overflow: "hidden", position: "relative", fontFamily: F.sans,
    }}>
      {/* Floating decorative shapes */}
      <FloatingShape x={80} y={200} size={60} color={C.pink} shape="heart" frame={frame} speed={0.025} />
      <FloatingShape x={900} y={350} size={50} color={C.mint} shape="circle" frame={frame} speed={0.03} />
      <FloatingShape x={150} y={800} size={45} color={C.yellow} shape="star" frame={frame} speed={0.02} />
      <FloatingShape x={850} y={1000} size={55} color={C.accent} shape="heart" frame={frame} speed={0.035} />
      <FloatingShape x={500} y={1500} size={40} color={C.orange} shape="circle" frame={frame} speed={0.028} />
      <FloatingShape x={200} y={1400} size={50} color={C.pink} shape="star" frame={frame} speed={0.022} />

      {/* ═══ SCENE 1: Tooth character waves hello (0-150) ═══ */}
      <div style={{
        position: "absolute", left: 0, right: 0, top: 150, bottom: 250,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "space-between",
        opacity: sceneVis(frame, 0, 150),
        padding: "40px 50px 30px",
      }}>
        <div style={{ ...fadeUp(frame, 0, 22), flex: 1, display: "flex", alignItems: "center" }}>
          <Img src={staticFile("characters/kids-happy-tooth.png")} style={{
            width: 800, height: 800, objectFit: "contain",
            filter: "drop-shadow(0 8px 30px rgba(108,92,231,0.15))",
          }} />
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{
            ...fadeUp(frame, 50, 18),
            fontSize: 76, color: C.text, fontFamily: F.display, lineHeight: 1.3,
          }}>
            Meet your new
          </div>
          <div style={{
            ...fadeUp(frame, 65, 18),
            fontSize: 84, color: C.accent, fontFamily: F.display, lineHeight: 1.3,
          }}>
            smile friends!
          </div>
        </div>
      </div>

      {/* ═══ SCENE 2: Dentist high-five (155-290) ═══ */}
      <div style={{
        position: "absolute", left: 0, right: 0, top: 150, bottom: 250,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "space-between",
        opacity: sceneVis(frame, 155, 290),
        padding: "40px 50px 30px",
      }}>
        <div style={{ ...fadeUp(frame, 158, 22), flex: 1, display: "flex", alignItems: "center" }}>
          <Img src={staticFile("characters/kids-dentist-hero.png")} style={{
            width: 850, height: 850, objectFit: "contain",
            filter: "drop-shadow(0 8px 25px rgba(108,92,231,0.12))",
          }} />
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{
            ...fadeUp(frame, 195, 16),
            fontSize: 68, color: C.sub, fontFamily: F.sans,
          }}>
            Parents say:
          </div>
          {/* Review in a soft card */}
          <div style={{
            ...fadeUp(frame, 210, 18),
            background: C.card, borderRadius: 28, padding: "36px 40px",
            marginTop: 16, boxShadow: "0 4px 20px rgba(108,92,231,0.08)",
          }}>
            <div style={{
              fontSize: 48, color: C.text, lineHeight: 1.5, fontStyle: "italic",
            }}>
              "They made me feel comfortable, listened to, and at ease."
            </div>
            <div style={{ fontSize: 36, color: C.accent, fontWeight: 600, marginTop: 12 }}>
              — Andrea E.
            </div>
          </div>
        </div>
      </div>

      {/* ═══ SCENE 3: Another parent review (295-420) ═══ */}
      <div style={{
        position: "absolute", left: 0, right: 0, top: 150, bottom: 250,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 295, 420),
        padding: "40px 50px",
        gap: 30,
      }}>
        <div style={{
          ...fadeUp(frame, 300, 16),
          fontSize: 160, textAlign: "center",
        }}>🌟</div>
        <div style={{
          ...fadeUp(frame, 310, 18),
          background: C.card, borderRadius: 28, padding: "44px 44px",
          boxShadow: "0 4px 20px rgba(108,92,231,0.08)",
          width: "100%",
        }}>
          <div style={{
            fontSize: 50, color: C.text, lineHeight: 1.5, fontStyle: "italic",
          }}>
            "Everyone is so nice from the reception staff to the main man. The endodontist saved a tooth which had a huge cavity."
          </div>
          <div style={{ fontSize: 36, color: C.accent, fontWeight: 600, marginTop: 16 }}>
            — Zakarias H.
          </div>
        </div>
        <div style={{
          ...fadeUp(frame, 360, 16),
          background: C.card, borderRadius: 28, padding: "36px 44px",
          boxShadow: "0 4px 20px rgba(108,92,231,0.08)",
          width: "100%",
        }}>
          <div style={{
            fontSize: 48, color: C.text, lineHeight: 1.5, fontStyle: "italic",
          }}>
            "Attentive to making me feel as comfortable as possible."
          </div>
          <div style={{ fontSize: 36, color: C.accent, fontWeight: 600, marginTop: 12 }}>
            — Josep F.
          </div>
        </div>
      </div>

      {/* ═══ SCENE 4: CTA — warm, inviting (425-540) ═══ */}
      <div style={{
        position: "absolute", left: 0, right: 0, top: 150, bottom: 250,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 425, 540),
        padding: "40px 50px",
        gap: 24,
      }}>
        <Img src={staticFile("characters/kids-happy-tooth.png")} style={{
          ...fadeUp(frame, 428, 20),
          width: 500, height: 500, objectFit: "contain",
        }} />
        <div style={{
          ...fadeUp(frame, 450, 20),
          fontSize: 76, color: C.text, fontFamily: F.display,
          textAlign: "center", lineHeight: 1.3,
        }}>
          Where every smile
        </div>
        <div style={{
          ...fadeUp(frame, 465, 20),
          fontSize: 80, color: C.accent, fontFamily: F.display,
          textAlign: "center",
        }}>
          feels at home.
        </div>
        <div style={{
          ...fadeUp(frame, 490, 16),
          marginTop: 24, padding: "24px 56px",
          background: `linear-gradient(135deg, ${C.accent}, ${C.pink})`,
          borderRadius: 60, fontSize: 40, fontWeight: 700,
          color: C.white, letterSpacing: 1,
          boxShadow: `0 6px 25px ${C.accent}40`,
        }}>
          HARMONIA DENTAL 💛
        </div>
        <div style={{
          ...fadeUp(frame, 505, 14),
          fontSize: 36, color: C.sub,
        }}>
          Masnou · For the whole family
        </div>
      </div>
    </div>
  );
};
