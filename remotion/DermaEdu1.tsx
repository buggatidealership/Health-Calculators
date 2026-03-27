import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
// Reel A: "Your skin at 3 AM" — blue light education
// Hook: Mistake formula — "Ich habe jahrelang im Bett gescrollt. Dann habe ich DAS gelernt."
// Educational: blue light penetrates deeper than UV-B, causes collagen breakdown
// 12s = 360 frames

const C = {
  bg: "#1a2744", text: "#ffffff", sub: "#8899b0", gold: "#d4a853",
  blue: "#4a90d9", blueGlow: "#2563eb", navy: "#1a2744", red: "#e8785e",
};
const F = {
  serif: "'DM Serif Display', Georgia, serif",
  sans: "'Inter', -apple-system, sans-serif",
  mono: "'JetBrains Mono', monospace",
};

function pop(f: number, s: number, d = 8) {
  return {
    transform: `scale(${interpolate(f, [s, s+d], [0.7, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.back(2)) })})`,
    opacity: interpolate(f, [s, s+d*0.6], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
  };
}
function fadeIn(f: number, s: number, d = 12) {
  return {
    opacity: interpolate(f, [s, s+d], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    transform: `translateY(${interpolate(f, [s, s+d], [30, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })}px)`,
  };
}
function vis(f: number, s: number, e: number) {
  if (f < s || f > e + 8) return 0;
  return Math.min(
    interpolate(f, [s, s+8], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    interpolate(f, [e, e+8], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
  );
}

export const DermaEdu1: React.FC = () => {
  const frame = useCurrentFrame();
  // Blue glow pulses
  const blueInt = 0.08 + 0.04 * Math.sin(frame * 0.08);

  return (
    <div style={{ width: 1080, height: 1920, background: C.bg, overflow: "hidden", position: "relative", fontFamily: F.sans }}>
      <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 50% 35%, rgba(37,99,235,${blueInt}) 0%, transparent 55%)`, pointerEvents: "none" }} />

      {/* Hook + thumbnail (0-90) */}
      <div style={{
        position: "absolute", left: 0, right: 120, top: 288, bottom: 480,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "space-between", opacity: vis(frame, 0, 90),
        padding: "20px 40px",
      }}>
        <Img src={staticFile("characters/derma-phone-bed.png")} style={{
          ...fadeIn(frame, 0, 16), width: 700, height: 700, objectFit: "contain",
          filter: `drop-shadow(0 0 40px rgba(37,99,235,0.25))`,
        }} />
        <div style={{ textAlign: "center" }}>
          <div style={{ ...pop(frame, 8), fontSize: 72, color: C.blue, fontFamily: F.mono }}>3:17 Uhr</div>
          <div style={{ ...pop(frame, 18), fontSize: 80, color: C.text, fontFamily: F.serif, marginTop: 12, lineHeight: 1.25 }}>
            Noch am Scrollen?
          </div>
          <div style={{ ...fadeIn(frame, 40, 10), fontSize: 60, color: C.sub, marginTop: 12 }}>
            Deine Haut merkt es. 👇
          </div>
        </div>
      </div>

      {/* Fact 1: blue light penetration (95-170) */}
      <div style={{
        position: "absolute", left: 0, right: 120, top: 288, bottom: 480,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", opacity: vis(frame, 95, 170),
        padding: "0 50px", gap: 24,
      }}>
        <div style={{ ...pop(frame, 98, 6), fontSize: 140 }}>📱</div>
        <div style={{ ...fadeIn(frame, 105, 12), fontSize: 72, color: C.text, fontFamily: F.serif, textAlign: "center", lineHeight: 1.35 }}>
          Blaues Licht dringt <span style={{ color: C.blue, fontStyle: "italic" }}>tiefer</span> in die Haut
        </div>
        <div style={{ ...fadeIn(frame, 120, 12), fontSize: 72, color: C.text, fontFamily: F.serif, textAlign: "center", lineHeight: 1.35 }}>
          als UV-B-Strahlung.
        </div>
        <div style={{ ...fadeIn(frame, 145, 10), fontSize: 48, color: C.sub, textAlign: "center" }}>
          Quelle: Journal of Investigative Dermatology
        </div>
      </div>

      {/* Fact 2: consequences (175-255) */}
      <div style={{
        position: "absolute", left: 0, right: 120, top: 288, bottom: 480,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", opacity: vis(frame, 175, 255),
        padding: "0 50px", gap: 20,
      }}>
        <div style={{ ...pop(frame, 178), fontSize: 80, color: C.red, fontFamily: F.serif, textAlign: "center" }}>
          Was das bedeutet:
        </div>
        {[
          { text: "Kollagenabbau", icon: "⚡", delay: 0 },
          { text: "Hyperpigmentierung", icon: "🔵", delay: 18 },
          { text: "Vorzeitige Hautalterung", icon: "⏳", delay: 36 },
        ].map((item, i) => (
          <div key={i} style={{
            ...fadeIn(frame, 195 + item.delay, 12),
            display: "flex", alignItems: "center", gap: 20,
            padding: "20px 30px", width: "100%",
            borderLeft: `5px solid ${C.blue}`,
            background: `rgba(37,99,235,0.06)`, borderRadius: 16,
          }}>
            <span style={{ fontSize: 48 }}>{item.icon}</span>
            <span style={{ fontSize: 56, color: C.text, fontWeight: 600 }}>{item.text}</span>
          </div>
        ))}
      </div>

      {/* Tip + CTA (260-360) */}
      <div style={{
        position: "absolute", left: 0, right: 120, top: 288, bottom: 480,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", opacity: vis(frame, 260, 360),
        padding: "0 50px", gap: 24,
      }}>
        <div style={{ ...pop(frame, 263), fontSize: 120 }}>💡</div>
        <div style={{ ...fadeIn(frame, 270, 12), fontSize: 68, color: C.text, fontFamily: F.serif, textAlign: "center", lineHeight: 1.35 }}>
          Tipp: Nachtmodus aktivieren.
        </div>
        <div style={{ ...fadeIn(frame, 285, 12), fontSize: 68, color: C.gold, fontFamily: F.serif, fontStyle: "italic", textAlign: "center", lineHeight: 1.35 }}>
          Hautpflege mit Antioxidantien.
        </div>
        <div style={{ ...fadeIn(frame, 310, 10), fontSize: 52, color: C.sub, textAlign: "center" }}>
          Mehr erfahren? 👇
        </div>
        <div style={{
          ...fadeIn(frame, 325, 10), marginTop: 16, padding: "20px 50px",
          background: `linear-gradient(135deg, ${C.gold}, #c49540)`,
          borderRadius: 60, fontSize: 38, fontWeight: 700, color: C.navy,
        }}>
          📍 DERMAMEDICUM · BONN
        </div>
      </div>
    </div>
  );
};
