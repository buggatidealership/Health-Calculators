import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
// WHITE SPACE REEL 3: INTIMATE AUTHORITY (Notes App Chic)
// Lo-fi. Warm. iPhone aesthetic. Handwritten feel.
// Like your dermatologist friend texted you advice.
// Breaks: clinical, corporate, template, "professional" distance.
// Color: WARM cream/beige — iPhone Notes palette.

export const WS3_Intimate: React.FC = () => {
  const frame = useCurrentFrame();

  const fadeIn = (s: number, d = 16) => ({
    opacity: interpolate(frame, [s, s+d], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    transform: `translateY(${interpolate(frame, [s, s+d], [20, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })}px)`,
  });
  const vis = (s: number, e: number) => {
    if (frame < s || frame > e + 10) return 0;
    return Math.min(
      interpolate(frame, [s, s+10], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
      interpolate(frame, [e, e+10], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
    );
  };

  return (
    <div style={{
      width: 1080, height: 1920,
      background: "#faf6f1", // WARM CREAM — iPhone Notes background
      overflow: "hidden", position: "relative",
      fontFamily: "'Inter', sans-serif",
    }}>
      {/* Subtle warm gradient */}
      <div style={{ position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 50% 30%, rgba(255,220,180,0.15) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />

      {/* ═══ Thumbnail: Notes app screenshot (0-120) ═══ */}
      <div style={{
        position: "absolute", left: 0, right: 0, top: 200, bottom: 300,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "space-between", opacity: vis(0, 120),
        padding: "30px 50px",
      }}>
        <Img src={staticFile("characters/ws-intimate-notes.png")} style={{
          ...fadeIn(0, 20), width: 700, height: 900, objectFit: "contain",
          borderRadius: 30, filter: "drop-shadow(0 10px 40px rgba(0,0,0,0.08))",
        }} />
        <div style={{ textAlign: "center" }}>
          <div style={{ ...fadeIn(50), fontSize: 56, color: "#5c4a3a", fontWeight: 300 }}>
            Deine Dermatologin hat dir
          </div>
          <div style={{ ...fadeIn(65), fontSize: 64, color: "#3a2a1a", fontWeight: 600, fontStyle: "italic" }}>
            eine Nachricht geschickt.
          </div>
        </div>
      </div>

      {/* ═══ "Note" 1: The advice (125-220) ═══ */}
      <div style={{
        position: "absolute", left: 50, right: 170, top: 350, bottom: 500,
        opacity: vis(125, 220),
        display: "flex", flexDirection: "column", gap: 20,
      }}>
        {/* Notes-style header */}
        <div style={{ fontSize: 32, color: "#b0a090", letterSpacing: 2 }}>NOTIZEN</div>
        <div style={{ height: 1, background: "#e0d5c8" }} />

        <div style={{ ...fadeIn(130, 14), fontSize: 60, color: "#3a2a1a", fontWeight: 600, lineHeight: 1.4 }}>
          Hey, kurze Frage:
        </div>
        <div style={{ ...fadeIn(148, 14), fontSize: 56, color: "#5c4a3a", lineHeight: 1.5, fontWeight: 400 }}>
          Benutzt du nachts eine andere Creme als tagsüber?
        </div>
        <div style={{ ...fadeIn(170, 14), fontSize: 56, color: "#5c4a3a", lineHeight: 1.5, fontWeight: 400 }}>
          Falls nicht — deine Haut repariert sich nachts. Sie braucht andere Wirkstoffe als tagsüber.
        </div>
        <div style={{ ...fadeIn(195, 12), fontSize: 50, color: "#a08060", fontStyle: "italic", lineHeight: 1.5 }}>
          Tagsüber: SPF + Antioxidantien.
          {"\n"}Nachts: Retinol + Ceramide.
        </div>
      </div>

      {/* ═══ "Note" 2: The personal touch (225-300) ═══ */}
      <div style={{
        position: "absolute", left: 50, right: 170, top: 350, bottom: 500,
        opacity: vis(225, 300),
        display: "flex", flexDirection: "column", gap: 20,
      }}>
        <div style={{ fontSize: 32, color: "#b0a090", letterSpacing: 2 }}>NOTIZEN</div>
        <div style={{ height: 1, background: "#e0d5c8" }} />

        <div style={{ ...fadeIn(228, 14), fontSize: 56, color: "#3a2a1a", fontWeight: 600, lineHeight: 1.4 }}>
          Kleine Faustregel:
        </div>
        <div style={{ ...fadeIn(245, 14), fontSize: 80, color: "#8b6914", fontWeight: 700, lineHeight: 1.3, fontStyle: "italic" }}>
          "Schützen am Tag.{"\n"}Reparieren in der Nacht."
        </div>
        <div style={{ ...fadeIn(275, 12), fontSize: 48, color: "#a08060" }}>
          — Deine Dermatologin 💛
        </div>
      </div>

      {/* ═══ CTA (305-360) ═══ */}
      <div style={{
        position: "absolute", left: 50, right: 170, top: 500, bottom: 500,
        opacity: vis(305, 360),
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", gap: 20,
      }}>
        <div style={{ ...fadeIn(308), fontSize: 60, color: "#3a2a1a", textAlign: "center", lineHeight: 1.4 }}>
          Persönliche Beratung?
        </div>
        <div style={{ ...fadeIn(320), fontSize: 64, color: "#8b6914", fontWeight: 600, fontStyle: "italic", textAlign: "center" }}>
          Wir nehmen uns Zeit.
        </div>
        <div style={{
          ...fadeIn(340), marginTop: 20, padding: "20px 50px",
          background: "#3a2a1a", borderRadius: 50,
          fontSize: 36, fontWeight: 600, color: "#faf6f1",
        }}>
          DermaMedicum · Bonn
        </div>
      </div>
    </div>
  );
};
