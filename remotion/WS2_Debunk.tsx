import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
// WHITE SPACE REEL 2: DEBUNKING STITCH
// FAST. ADVERSARIAL. Opens with a myth. Sharp cut. Correction with authority.
// Breaks: polite education, "did you know?", provider introduction.
// Color: pink/pastel (myth side) vs navy/clinical (truth side). HIGH CONTRAST.

export const WS2_Debunk: React.FC = () => {
  const frame = useCurrentFrame();

  const slam = (s: number) => ({
    transform: `scale(${interpolate(frame, [s, s+5], [2, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })})`,
    opacity: interpolate(frame, [s, s+3], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
  });
  const fadeIn = (s: number, d = 10) => ({
    opacity: interpolate(frame, [s, s+d], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    transform: `translateY(${interpolate(frame, [s, s+d], [25, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })}px)`,
  });
  const vis = (s: number, e: number) => {
    if (frame < s || frame > e + 6) return 0;
    return Math.min(
      interpolate(frame, [s, s+5], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
      interpolate(frame, [e, e+5], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
    );
  };

  // Flash on the "cut" moment
  const flashO = interpolate(frame, [90, 93, 96, 100], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <div style={{
      width: 1080, height: 1920,
      background: "#0d1117", // VERY dark — different from our navy
      overflow: "hidden", position: "relative",
      fontFamily: "'Inter', sans-serif",
    }}>
      {/* WHITE FLASH on cut */}
      <div style={{ position: "absolute", inset: 0, background: "#fff", opacity: flashO * 0.7, zIndex: 50, pointerEvents: "none" }} />

      {/* ═══ MYTH SIDE (0-90) — pink, fake, influencer ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, #fce4ec 0%, #f8bbd0 100%)",
        opacity: vis(0, 88),
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", padding: "300px 60px 500px",
      }}>
        <div style={{ ...fadeIn(5), fontSize: 44, color: "#e91e63", letterSpacing: 4, textTransform: "uppercase", marginBottom: 20 }}>
          SKINCARE TIPP 💕
        </div>
        <div style={{ ...fadeIn(15, 14), fontSize: 76, color: "#880e4f", fontWeight: 700, textAlign: "center", lineHeight: 1.3 }}>
          "Kokosöl ist die beste Feuchtigkeitspflege für dein Gesicht!"
        </div>
        <div style={{ ...fadeIn(50), fontSize: 120, marginTop: 30 }}>🥥✨</div>
        <div style={{ ...fadeIn(65), fontSize: 40, color: "#ad1457", marginTop: 20 }}>
          127K Likes · Influencer
        </div>
      </div>

      {/* ═══ CUT — "Moment mal." (93-130) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        background: "#0d1117",
        opacity: vis(96, 130),
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{ ...slam(98), fontSize: 140, color: "#ff4444", fontWeight: 900, fontFamily: "'DM Serif Display', serif" }}>
          Moment mal.
        </div>
      </div>

      {/* ═══ TRUTH — clinical, authoritative (135-250) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        background: "#0d1117",
        opacity: vis(135, 250),
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", padding: "300px 60px 500px", gap: 20,
      }}>
        <Img src={staticFile("characters/ws-debunk-myth.png")} style={{
          ...fadeIn(138, 14), width: 500, height: 300, objectFit: "contain", borderRadius: 16,
        }} />
        <div style={{ ...fadeIn(150, 12), fontSize: 68, color: "#ff6b6b", fontWeight: 700, textAlign: "center", lineHeight: 1.35 }}>
          Kokosöl ist komedogen.
        </div>
        <div style={{ ...fadeIn(170, 12), fontSize: 56, color: "#8899b0", textAlign: "center", lineHeight: 1.5 }}>
          Es verstopft die Poren und kann Akne verschlimmern.
        </div>
        <div style={{ ...fadeIn(195, 12), fontSize: 56, color: "#4ade80", textAlign: "center", lineHeight: 1.5 }}>
          Besser: Hyaluronsäure oder Ceramide.
        </div>
        <div style={{ ...fadeIn(225, 10), fontSize: 36, color: "#4a5568" }}>
          Quelle: Journal of the American Academy of Dermatology
        </div>
      </div>

      {/* ═══ CTA (255-330) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        background: "#0d1117",
        opacity: vis(255, 330),
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", padding: "300px 60px 500px", gap: 20,
      }}>
        <div style={{ ...fadeIn(258), fontSize: 80, color: "#e0e0e0", fontFamily: "'DM Serif Display', serif", textAlign: "center", lineHeight: 1.3 }}>
          Deine Haut verdient
        </div>
        <div style={{ ...fadeIn(270), fontSize: 88, color: "#4ade80", fontFamily: "'DM Serif Display', serif", fontStyle: "italic", textAlign: "center" }}>
          echte Wissenschaft.
        </div>
        <div style={{
          ...fadeIn(295), marginTop: 30, padding: "20px 50px",
          background: "#4ade80", borderRadius: 50,
          fontSize: 38, fontWeight: 700, color: "#0d1117",
        }}>
          📍 DERMAMEDICUM · BONN
        </div>
      </div>
    </div>
  );
};
