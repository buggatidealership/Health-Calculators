import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
// Reel C: Founder story — "Von Barcelona nach Bonn"
// Hook: Time-based — "2019 kamen zwei Ärztinnen aus Barcelona nach Bonn."
// Personal, warm, builds trust through the people, not the brand
// 15s = 450 frames

const C = {
  bg: "#1a2744", text: "#ffffff", sub: "#8899b0", gold: "#d4a853",
  navy: "#1a2744", cream: "#f5f0ea", teal: "#4a90d9", warm: "#f0c040",
};
const F = {
  serif: "'DM Serif Display', Georgia, serif",
  sans: "'Inter', -apple-system, sans-serif",
  mono: "'JetBrains Mono', monospace",
};

function fadeIn(f: number, s: number, d = 14) {
  return {
    opacity: interpolate(f, [s, s+d], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    transform: `translateY(${interpolate(f, [s, s+d], [35, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })}px)`,
  };
}
function pop(f: number, s: number, d = 8) {
  return {
    transform: `scale(${interpolate(f, [s, s+d], [0.7, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.back(2)) })})`,
    opacity: interpolate(f, [s, s+d*0.6], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
  };
}
function vis(f: number, s: number, e: number) {
  if (f < s || f > e + 10) return 0;
  return Math.min(
    interpolate(f, [s, s+10], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    interpolate(f, [e, e+10], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
  );
}

export const DermaEdu3: React.FC = () => {
  const frame = useCurrentFrame();
  // Warm ambient builds through the reel
  const warmth = interpolate(frame, [0, 200, 450], [0.03, 0.08, 0.12], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  return (
    <div style={{ width: 1080, height: 1920, background: C.bg, overflow: "hidden", position: "relative", fontFamily: F.sans }}>
      <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 50% 45%, rgba(212,168,83,${warmth}) 0%, transparent 55%)`, pointerEvents: "none" }} />

      {/* Hook: founders thumbnail (0-100) */}
      <div style={{
        position: "absolute", left: 0, right: 120, top: 288, bottom: 480,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "space-between", opacity: vis(frame, 0, 100),
        padding: "20px 40px",
      }}>
        <Img src={staticFile("characters/derma-founders.png")} style={{
          ...fadeIn(frame, 0, 18), width: 750, height: 600, objectFit: "contain",
          borderRadius: 24,
          filter: "drop-shadow(0 0 30px rgba(212,168,83,0.12))",
        }} />
        <div style={{ textAlign: "center" }}>
          <div style={{ ...fadeIn(frame, 20, 12), fontSize: 68, color: C.sub }}>
            2019 kamen zwei Ärztinnen
          </div>
          <div style={{ ...fadeIn(frame, 35, 12), fontSize: 76, color: C.text, fontFamily: F.serif, lineHeight: 1.25 }}>
            aus Barcelona nach Bonn.
          </div>
          <div style={{ ...fadeIn(frame, 55, 12), fontSize: 68, color: C.gold, fontFamily: F.serif, fontStyle: "italic" }}>
            Das ist ihre Geschichte. 👇
          </div>
        </div>
      </div>

      {/* Chapter 1: Training together (105-190) */}
      <div style={{
        position: "absolute", left: 0, right: 120, top: 288, bottom: 480,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", opacity: vis(frame, 105, 190),
        padding: "0 50px", gap: 24,
      }}>
        <div style={{ ...pop(frame, 108), fontSize: 120 }}>🎓</div>
        <div style={{ ...fadeIn(frame, 115, 12), fontSize: 72, color: C.text, fontFamily: F.serif, textAlign: "center", lineHeight: 1.35 }}>
          5 Jahre gemeinsame Facharztausbildung.
        </div>
        <div style={{ ...fadeIn(frame, 135, 12), fontSize: 56, color: C.sub, textAlign: "center", lineHeight: 1.5 }}>
          Tausende Patienten. Eine gemeinsame Vision.
        </div>
      </div>

      {/* Chapter 2: The vision (195-280) */}
      <div style={{
        position: "absolute", left: 0, right: 120, top: 288, bottom: 480,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", opacity: vis(frame, 195, 280),
        padding: "0 50px", gap: 20,
      }}>
        <div style={{ ...fadeIn(frame, 198, 12), fontSize: 76, color: C.sub, fontFamily: F.serif, textAlign: "center" }}>
          Ihre Vision:
        </div>
        <div style={{ ...fadeIn(frame, 215, 14), fontSize: 84, color: C.text, fontFamily: F.serif, textAlign: "center", lineHeight: 1.3 }}>
          Dermatologie, die sich
        </div>
        <div style={{ ...fadeIn(frame, 232, 14), fontSize: 88, color: C.gold, fontFamily: F.serif, fontStyle: "italic", textAlign: "center" }}>
          Zeit nimmt.
        </div>
        {/* Languages */}
        <div style={{ ...fadeIn(frame, 255, 12), display: "flex", gap: 20, marginTop: 20 }}>
          {["🇩🇪", "🇬🇧", "🇪🇸"].map((flag, i) => (
            <div key={i} style={{
              ...pop(frame, 258 + i * 6),
              fontSize: 64, padding: "10px 20px",
              background: "rgba(255,255,255,0.04)", borderRadius: 16,
            }}>{flag}</div>
          ))}
        </div>
      </div>

      {/* Chapter 3: What they built (285-370) */}
      <div style={{
        position: "absolute", left: 0, right: 120, top: 288, bottom: 480,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", opacity: vis(frame, 285, 370),
        padding: "0 50px", gap: 16,
      }}>
        <div style={{ ...pop(frame, 288), fontSize: 72, color: C.text, fontFamily: F.serif, textAlign: "center" }}>
          September 2025:
        </div>
        <div style={{ ...fadeIn(frame, 300, 14), fontSize: 80, color: C.gold, fontFamily: F.serif, fontStyle: "italic", textAlign: "center", lineHeight: 1.3 }}>
          DermaMedicum eröffnet.
        </div>
        {/* Stats — staggered */}
        {[
          { text: "⭐ 5,0 Google-Bewertung", delay: 0 },
          { text: "🔬 KI-gestützte Diagnostik", delay: 14 },
          { text: "🌍 Mehrsprachiges Team", delay: 28 },
        ].map((item, i) => (
          <div key={i} style={{
            ...fadeIn(frame, 320 + item.delay, 10),
            fontSize: 52, color: C.cream, padding: "14px 24px",
            background: "rgba(255,255,255,0.04)", borderRadius: 14,
            borderLeft: `4px solid ${C.gold}`, width: "100%",
          }}>
            {item.text}
          </div>
        ))}
      </div>

      {/* CTA (375-450) */}
      <div style={{
        position: "absolute", left: 0, right: 120, top: 288, bottom: 480,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", opacity: vis(frame, 375, 450),
        padding: "0 50px", gap: 20,
      }}>
        <Img src={staticFile("characters/derma-founders.png")} style={{
          ...fadeIn(frame, 378, 14), width: 500, height: 380, objectFit: "contain",
          borderRadius: 20,
        }} />
        <div style={{ ...fadeIn(frame, 395, 12), fontSize: 76, color: C.text, fontFamily: F.serif, textAlign: "center", lineHeight: 1.3 }}>
          Zwei Ärztinnen.
        </div>
        <div style={{ ...fadeIn(frame, 410, 12), fontSize: 84, color: C.gold, fontFamily: F.serif, fontStyle: "italic", textAlign: "center" }}>
          Eine Mission.
        </div>
        <div style={{
          ...fadeIn(frame, 428, 10), marginTop: 20, padding: "22px 56px",
          background: `linear-gradient(135deg, ${C.gold}, #c49540)`,
          borderRadius: 60, fontSize: 40, fontWeight: 700, color: C.navy,
        }}>
          LERNEN SIE UNS KENNEN
        </div>
        <div style={{ ...fadeIn(frame, 440, 8), fontSize: 36, color: C.sub }}>
          DermaMedicum · Bonn 📍
        </div>
      </div>
    </div>
  );
};
