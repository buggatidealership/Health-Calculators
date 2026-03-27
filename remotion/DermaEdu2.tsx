import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
// Reel B: "ABCDE Rule" — mole checking education + AI dermoscopy differentiator
// Hook: Numbered list — "5 Buchstaben, die dein Leben retten können."
// 15s = 450 frames

const C = {
  bg: "#1a2744", text: "#ffffff", sub: "#8899b0", gold: "#d4a853",
  navy: "#1a2744", teal: "#4a90d9", red: "#e8785e", green: "#6ec89b",
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

export const DermaEdu2: React.FC = () => {
  const frame = useCurrentFrame();

  const abcde = [
    { letter: "A", word: "Asymmetrie", desc: "Ungleichmäßige Form", color: C.red },
    { letter: "B", word: "Begrenzung", desc: "Unscharfe Ränder", color: "#f97316" },
    { letter: "C", word: "Color", desc: "Mehrere Farben", color: C.gold },
    { letter: "D", word: "Durchmesser", desc: "> 6mm", color: C.teal },
    { letter: "E", word: "Entwicklung", desc: "Veränderung", color: "#8b5cf6" },
  ];

  return (
    <div style={{ width: 1080, height: 1920, background: C.bg, overflow: "hidden", position: "relative", fontFamily: F.sans }}>
      <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 50% 40%, rgba(74,144,217,0.05) 0%, transparent 55%)`, pointerEvents: "none" }} />

      {/* Hook + thumbnail (0-80) */}
      <div style={{
        position: "absolute", left: 0, right: 120, top: 288, bottom: 480,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "space-between", opacity: vis(frame, 0, 80),
        padding: "20px 40px",
      }}>
        <Img src={staticFile("characters/derma-mole-check.png")} style={{
          ...fadeIn(frame, 0, 16), width: 650, height: 650, objectFit: "contain",
        }} />
        <div style={{ textAlign: "center" }}>
          <div style={{ ...pop(frame, 8), fontSize: 80, color: C.text, fontFamily: F.serif, lineHeight: 1.25 }}>
            5 Buchstaben,
          </div>
          <div style={{ ...pop(frame, 18), fontSize: 84, color: C.gold, fontFamily: F.serif, fontStyle: "italic", lineHeight: 1.25 }}>
            die Leben retten.
          </div>
        </div>
      </div>

      {/* ABCDE — one letter per beat (85-300) */}
      {abcde.map((item, i) => {
        const start = 85 + i * 42;
        const end = start + 40;
        return (
          <div key={i} style={{
            position: "absolute", left: 0, right: 120, top: 288, bottom: 480,
            display: "flex", flexDirection: "column", alignItems: "center",
            justifyContent: "center", opacity: vis(frame, start, end),
            padding: "0 50px", gap: 20,
          }}>
            <div style={{
              ...pop(frame, start + 2, 6),
              fontSize: 280, fontWeight: 900, color: item.color,
              fontFamily: F.mono, lineHeight: 1,
              textShadow: `0 0 60px ${item.color}30`,
            }}>
              {item.letter}
            </div>
            <div style={{
              ...fadeIn(frame, start + 8, 10),
              fontSize: 80, color: C.text, fontFamily: F.serif, textAlign: "center",
            }}>
              {item.word}
            </div>
            <div style={{
              ...fadeIn(frame, start + 18, 10),
              fontSize: 56, color: C.sub, textAlign: "center",
            }}>
              {item.desc}
            </div>
          </div>
        );
      })}

      {/* AI dermoscopy differentiator (298-385) */}
      <div style={{
        position: "absolute", left: 0, right: 120, top: 288, bottom: 480,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "space-between", opacity: vis(frame, 298, 385),
        padding: "20px 40px",
      }}>
        <div style={{ ...pop(frame, 308), fontSize: 64, color: C.sub, textAlign: "center" }}>
          Was das Auge nicht sieht:
        </div>
        <Img src={staticFile("characters/derma-ai-scan.png")} style={{
          ...fadeIn(frame, 315, 16), width: 700, height: 500, objectFit: "contain",
          filter: "drop-shadow(0 0 30px rgba(74,144,217,0.15))",
        }} />
        <div style={{ ...fadeIn(frame, 340, 12), fontSize: 64, color: C.teal, fontFamily: F.serif, textAlign: "center", lineHeight: 1.35 }}>
          KI-gestützte Dermoskopie
        </div>
        <div style={{ ...fadeIn(frame, 355, 10), fontSize: 52, color: C.sub, textAlign: "center" }}>
          Canfield-Bildgebung · Millimeter-genaue Analyse
        </div>
      </div>

      {/* CTA (390-450) */}
      <div style={{
        position: "absolute", left: 0, right: 120, top: 288, bottom: 480,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", opacity: vis(frame, 390, 450),
        padding: "0 50px", gap: 20,
      }}>
        <div style={{ ...fadeIn(frame, 393, 12), fontSize: 76, color: C.text, fontFamily: F.serif, textAlign: "center", lineHeight: 1.3 }}>
          Vorsorge rettet Leben.
        </div>
        <div style={{ ...fadeIn(frame, 408, 12), fontSize: 80, color: C.gold, fontFamily: F.serif, fontStyle: "italic", textAlign: "center" }}>
          Wann war Ihr letztes Screening?
        </div>
        <div style={{
          ...fadeIn(frame, 425, 10), marginTop: 24, padding: "22px 56px",
          background: `linear-gradient(135deg, ${C.gold}, #c49540)`,
          borderRadius: 60, fontSize: 40, fontWeight: 700, color: C.navy,
        }}>
          TERMIN VEREINBAREN
        </div>
        <div style={{ ...fadeIn(frame, 438, 8), fontSize: 36, color: C.sub }}>
          DermaMedicum · Bonn 📍
        </div>
      </div>
    </div>
  );
};
