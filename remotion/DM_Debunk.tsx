import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
// DERMAMEDICUM DEBUNK v2: Vitamin C + Retinol myth
// Pink influencer myth → white flash → dark clinical correction
// Adversarial energy. Fast. Satisfying.

export const DM_Debunk: React.FC = () => {
  const frame = useCurrentFrame();

  const slam = (s: number) => ({
    transform: `scale(${interpolate(frame, [s, s + 5], [2.5, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })})`,
    opacity: interpolate(frame, [s, s + 3], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
  });
  const fadeIn = (s: number, d = 12) => ({
    opacity: interpolate(frame, [s, s + d], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    transform: `translateY(${interpolate(frame, [s, s + d], [30, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })}px)`,
  });
  const vis = (s: number, e: number) => {
    if (frame < s || frame > e + 8) return 0;
    return Math.min(
      interpolate(frame, [s, s + 6], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
      interpolate(frame, [e, e + 8], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
    );
  };

  // Flash on the cut
  const flashO = interpolate(frame, [100, 103, 107, 112], [0, 0.8, 0.8, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Shake on slam
  const shakeX = frame >= 108 && frame <= 116 ? Math.sin(frame * 8) * interpolate(frame, [108, 116], [6, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) : 0;

  return (
    <div style={{
      width: 1080, height: 1920,
      background: "#0d1117",
      overflow: "hidden", position: "relative",
      fontFamily: "'Inter', sans-serif",
    }}>
      {/* WHITE FLASH */}
      <div style={{ position: "absolute", inset: 0, background: "#fff", opacity: flashO, zIndex: 50, pointerEvents: "none" }} />

      {/* ═══ MYTH SIDE (0-100) — pink, influencer aesthetic ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(170deg, #fce4ec 0%, #f8bbd0 40%, #f48fb1 100%)",
        opacity: vis(0, 98),
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", padding: "300px 60px 500px",
      }}>
        <div style={{ ...fadeIn(5), fontSize: 40, color: "#e91e63", letterSpacing: 5, textTransform: "uppercase", marginBottom: 30 }}>
          SKINCARE REGEL
        </div>
        <div style={{ ...fadeIn(15, 16), fontSize: 72, color: "#880e4f", fontWeight: 700, textAlign: "center", lineHeight: 1.35 }}>
          "Vitamin C und Retinol darf man niemals zusammen verwenden!"
        </div>
        <div style={{ ...fadeIn(55), fontSize: 100, marginTop: 30 }}>🍊❌🧴</div>
        <div style={{ ...fadeIn(75), fontSize: 38, color: "#ad1457", marginTop: 20 }}>
          204K Likes · Beauty-Influencerin
        </div>
      </div>

      {/* ═══ CUT — "Falsch." (103-140) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        background: "#0d1117",
        opacity: vis(107, 140),
        display: "flex", alignItems: "center", justifyContent: "center",
        transform: `translateX(${shakeX}px)`,
      }}>
        <div style={{ ...slam(110), fontSize: 160, color: "#ff4444", fontWeight: 900, fontFamily: "'DM Serif Display', serif" }}>
          Falsch.
        </div>
      </div>

      {/* ═══ TRUTH — clinical (145-270) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        background: "#0d1117",
        opacity: vis(145, 270),
        display: "flex", flexDirection: "column",
        justifyContent: "center", padding: "300px 60px 500px", gap: 24,
      }}>
        {/* Evidence bar */}
        <div style={{
          ...fadeIn(148), width: interpolate(frame, [148, 180], [0, 800], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
          height: 4, background: "linear-gradient(90deg, #4ade80, #22d3ee)", borderRadius: 2,
        }} />

        <div style={{ ...fadeIn(155, 14), fontSize: 64, color: "#ff6b6b", fontWeight: 700, lineHeight: 1.35 }}>
          Vitamin C + Retinol funktionieren zusammen.
        </div>
        <div style={{ ...fadeIn(180, 14), fontSize: 52, color: "#94a3b8", lineHeight: 1.5 }}>
          Studien zeigen: pH-Werte sind kompatibel. Die Kombination verstärkt sogar den Anti-Aging-Effekt.
        </div>
        <div style={{ ...fadeIn(210, 14), fontSize: 52, color: "#4ade80", lineHeight: 1.5 }}>
          Vitamin C morgens, Retinol abends — oder zusammen mit Puffer.
        </div>
        <div style={{ ...fadeIn(245, 10), fontSize: 34, color: "#475569", fontStyle: "italic" }}>
          Quelle: British Journal of Dermatology, 2023
        </div>
      </div>

      {/* ═══ CTA (275-330) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        background: "#0d1117",
        opacity: vis(275, 330),
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", padding: "300px 60px 500px", gap: 24,
      }}>
        <div style={{ ...fadeIn(278), fontSize: 76, color: "#e0e0e0", fontFamily: "'DM Serif Display', serif", textAlign: "center", lineHeight: 1.3 }}>
          Mythen kosten dich
        </div>
        <div style={{ ...fadeIn(290), fontSize: 84, color: "#4ade80", fontFamily: "'DM Serif Display', serif", fontStyle: "italic", textAlign: "center" }}>
          echte Ergebnisse.
        </div>
        <div style={{
          ...fadeIn(310), marginTop: 30, padding: "22px 56px",
          background: "#4ade80", borderRadius: 50,
          fontSize: 36, fontWeight: 700, color: "#0d1117",
        }}>
          DERMAMEDICUM · BONN
        </div>
      </div>
    </div>
  );
};
