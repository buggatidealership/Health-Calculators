import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
// RESEARCH-INFORMED: Contrarian hook + 1.7s capture + 3s first payoff
// Hook formula: "Everyone says [X], but [contrarian take]"
// "Everyone says going to the dentist is the worst. These reviews say otherwise."
// Pacing: hook by 1.5s, first review by 3s, new content every 3-4s

const C = {
  bg: "#0a0a0f",
  text: "#ffffff",
  sub: "#a0a0b0",
  dim: "#404050",
  gold: "#f0c040",
  coral: "#ff6b6b",
  mint: "#48dbfb",
  purple: "#a855f7",
  card: "#16161f",
  white: "#ffffff",
};
const F = {
  display: "'DM Serif Display', Georgia, serif",
  sans: "'Inter', -apple-system, sans-serif",
};

function pop(frame: number, start: number, dur = 8) {
  const scale = interpolate(frame, [start, start + dur], [0.7, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
    easing: Easing.out(Easing.back(2.5)),
  });
  const opacity = interpolate(frame, [start, start + dur * 0.6], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  return { transform: `scale(${scale})`, opacity };
}

function sceneVis(frame: number, start: number, end: number) {
  if (frame < start || frame > end + 8) return 0;
  return Math.min(
    interpolate(frame, [start, start + 6], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    interpolate(frame, [end, end + 6], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
  );
}

// Countdown number — big, pulsing
function BigNumber({ n, frame, start, color }: { n: number; frame: number; start: number; color: string }) {
  const s = interpolate(frame, [start, start + 6], [2.5, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic),
  });
  const o = interpolate(frame, [start, start + 4], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  return (
    <div style={{
      fontSize: 300, fontWeight: 900, color, fontFamily: F.sans,
      transform: `scale(${s})`, opacity: o,
      textShadow: `0 0 60px ${color}40`,
    }}>{n}</div>
  );
}

// 15s = 450 frames. FAST. Research says 7-15s for max completion.
export const DentalContrarian: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <div style={{
      width: 1080, height: 1920, background: C.bg,
      overflow: "hidden", position: "relative", fontFamily: F.sans,
    }}>
      {/* Subtle gradient */}
      <div style={{ position: "absolute", inset: 0,
        background: `radial-gradient(ellipse at 50% 30%, ${C.purple}08 0%, transparent 60%)`,
      }} />

      {/* ═══ HOOK: 0-1.5s (frames 0-45) — Contrarian formula ═══ */}
      <div style={{
        position: "absolute", left: 0, right: 0, top: 200, bottom: 300,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 0, 70),
        padding: "0 60px",
      }}>
        {/* "Everyone says..." — appears INSTANTLY (frame 0) */}
        <div style={{
          ...pop(frame, 0, 10),
          fontSize: 72, color: C.sub, textAlign: "center", lineHeight: 1.4,
        }}>
          Everyone says going to
        </div>
        <div style={{
          ...pop(frame, 0, 10),
          fontSize: 72, color: C.sub, textAlign: "center", lineHeight: 1.4,
        }}>
          the dentist is the worst.
        </div>

        {/* Contrarian break — 1 second in */}
        <div style={{
          ...pop(frame, 30, 8),
          fontSize: 96, color: C.coral, fontFamily: F.display, fontStyle: "italic",
          textAlign: "center", marginTop: 50,
        }}>
          These patients disagree. 👀
        </div>
      </div>

      {/* ═══ RAPID FIRE REVIEWS: 2.3-12s (frames 70-360) ═══ */}
      {/* Each review: big number + quote + name. 3s each. FAST. */}

      {/* Review 1 — "flew from Norway" */}
      <div style={{
        position: "absolute", left: 0, right: 0, top: 150, bottom: 200,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 72, 145),
        padding: "0 50px", gap: 16,
      }}>
        <BigNumber n={1} frame={frame} start={74} color={C.mint} />
        <div style={{
          ...pop(frame, 82, 10),
          fontSize: 64, color: C.white, fontFamily: F.display,
          textAlign: "center", lineHeight: 1.35, fontStyle: "italic",
        }}>
          "I'd rather fly from Norway to this clinic than ever go to a dentist in Norway"
        </div>
        <div style={{
          ...pop(frame, 95, 8),
          fontSize: 42, color: C.gold,
        }}>
          — Taltunran 🇳🇴 ⭐⭐⭐⭐⭐
        </div>
      </div>

      {/* Review 2 — "no 6 or 7" */}
      <div style={{
        position: "absolute", left: 0, right: 0, top: 150, bottom: 200,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 148, 220),
        padding: "0 50px", gap: 16,
      }}>
        <BigNumber n={2} frame={frame} start={150} color={C.gold} />
        <div style={{
          ...pop(frame, 158, 10),
          fontSize: 64, color: C.white, fontFamily: F.display,
          textAlign: "center", lineHeight: 1.35, fontStyle: "italic",
        }}>
          "5 stars because there's no 6 or 7. Coming from Mallorca, and that says it all"
        </div>
        <div style={{
          ...pop(frame, 172, 8),
          fontSize: 42, color: C.gold,
        }}>
          — Andreu 🏝️ ⭐⭐⭐⭐⭐
        </div>
      </div>

      {/* Review 3 — "changed my life" */}
      <div style={{
        position: "absolute", left: 0, right: 0, top: 150, bottom: 200,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 223, 295),
        padding: "0 50px", gap: 16,
      }}>
        <BigNumber n={3} frame={frame} start={225} color={C.coral} />
        <div style={{
          ...pop(frame, 233, 10),
          fontSize: 64, color: C.white, fontFamily: F.display,
          textAlign: "center", lineHeight: 1.35, fontStyle: "italic",
        }}>
          "It's changed my life. I can eat and smile without fear"
        </div>
        <div style={{
          ...pop(frame, 247, 8),
          fontSize: 42, color: C.gold,
        }}>
          — CS Perruqueria 😊 ⭐⭐⭐⭐⭐
        </div>
      </div>

      {/* Review 4 — "48 hours" */}
      <div style={{
        position: "absolute", left: 0, right: 0, top: 150, bottom: 200,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 298, 365),
        padding: "0 50px", gap: 16,
      }}>
        <BigNumber n={4} frame={frame} start={300} color={C.purple} />
        <div style={{
          ...pop(frame, 308, 10),
          fontSize: 64, color: C.white, fontFamily: F.display,
          textAlign: "center", lineHeight: 1.35, fontStyle: "italic",
        }}>
          "In 48 hours everything was out and all implants placed. No suffering."
        </div>
        <div style={{
          ...pop(frame, 322, 8),
          fontSize: 42, color: C.gold,
        }}>
          — Al Varone 💪 ⭐⭐⭐⭐⭐
        </div>
      </div>

      {/* ═══ CTA: 12-15s (frames 368-450) ═══ */}
      <div style={{
        position: "absolute", left: 0, right: 0, top: 150, bottom: 200,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 370, 450),
        padding: "0 50px", gap: 20,
      }}>
        <Img src={staticFile("characters/harmonia-logo.png")} style={{
          ...pop(frame, 372, 12),
          width: 700, height: 170, objectFit: "contain",
          filter: "drop-shadow(0 0 20px rgba(240,192,64,0.15))",
        }} />
        <div style={{
          ...pop(frame, 385, 10),
          fontSize: 84, color: C.white, fontFamily: F.display,
          textAlign: "center", lineHeight: 1.3,
        }}>
          Maybe the dentist isn't the worst.
        </div>
        <div style={{
          ...pop(frame, 398, 10),
          fontSize: 88, color: C.gold, fontFamily: F.display,
          fontStyle: "italic", textAlign: "center",
        }}>
          Maybe you just haven't found yours. ✨
        </div>
        <div style={{
          ...pop(frame, 418, 8),
          marginTop: 20, padding: "22px 56px",
          background: `linear-gradient(135deg, ${C.gold}, ${C.coral})`,
          borderRadius: 60, fontSize: 40, fontWeight: 800,
          color: C.bg, letterSpacing: 1,
        }}>
          📍 HARMONIA DENTAL · MASNOU
        </div>
      </div>
    </div>
  );
};
