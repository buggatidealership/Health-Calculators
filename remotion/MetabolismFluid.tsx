import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
// v4: 80% screen fill, spread vertical, massive text

const C = {
  bg: "#0a0f1a", text: "#E0E0E0", sub: "#8a919e", dim: "#3a4050",
  red: "#e8785e", green: "#6ec89b", accent: "#e89b3e", teal: "#0e7a7e",
  white: "#ffffff", blue: "#4a90d9", purple: "#9b7ee8",
};
const F = {
  serif: "'DM Serif Display', Georgia, serif",
  sans: "'Inter', -apple-system, sans-serif",
  mono: "'JetBrains Mono', 'SF Mono', monospace",
};

function fadeUp(frame: number, start: number, dur = 16) {
  return {
    opacity: interpolate(frame, [start, start + dur], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    transform: `translateY(${interpolate(frame, [start, start + dur], [40, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })}px)`,
  };
}

function sceneVis(frame: number, start: number, end: number) {
  if (frame < start - 5 || frame > end + 15) return 0;
  return Math.min(
    interpolate(frame, [start, start + 12], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    interpolate(frame, [end - 8, end + 12], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
  );
}

export const MetabolismFluid: React.FC = () => {
  const frame = useCurrentFrame();

  const ambHue = interpolate(frame, [0, 200, 350, 650, 800, 1020], [230, 230, 10, 10, 160, 160], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });
  const ambInt = interpolate(frame, [0, 200, 500, 700, 900, 1020], [0.08, 0.1, 0.14, 0.12, 0.06, 0.04], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });
  const dotPulse = 1 + 0.25 * (Math.sin(frame * 0.15) > 0 ? 0.3 : 0) + 0.1 * Math.sin(frame * 0.4);

  return (
    <div style={{
      width: 2160, height: 2160, background: C.bg,
      overflow: "hidden", position: "relative", fontFamily: F.sans,
    }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none",
        background: `radial-gradient(ellipse at 50% 50%, hsla(${ambHue},45%,35%,${ambInt}) 0%, transparent 55%)`,
      }} />
      <div style={{ position: "absolute", inset: 0, opacity: 0.3, pointerEvents: "none", zIndex: 100,
        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.045'/%3E%3C/svg%3E")`,
      }} />

      {/* ═══ SCENE 1: 2AM couch ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "space-between",
        opacity: sceneVis(frame, 0, 180),
        padding: "80px 60px 120px",
      }}>
        <div style={{ ...fadeUp(frame, 5, 20), flex: 1, display: "flex", alignItems: "center" }}>
          <Img src={staticFile("characters/late-night.png")} style={{
            width: 1200, height: 1200, objectFit: "contain",
            filter: "drop-shadow(0 0 60px rgba(74,144,217,0.2))",
          }} />
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ ...fadeUp(frame, 30, 16), fontSize: 96, color: C.blue, fontFamily: F.mono }}>2:00 AM</div>
          <div style={{ ...fadeUp(frame, 50, 16), fontSize: 180, color: C.text, fontFamily: F.serif, marginTop: 8 }}>Still scrolling.</div>
        </div>
      </div>

      {/* ═══ SCENE 2: "discipline" ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 185, 320),
        padding: "150px 60px",
      }}>
        <div style={{ ...fadeUp(frame, 190, 18), fontSize: 152, color: C.sub, fontFamily: F.serif, fontWeight: 300, textAlign: "center", lineHeight: 1.3 }}>
          Your coach says it's
        </div>
        <div style={{ ...fadeUp(frame, 210, 18), fontSize: 240, color: C.white, fontFamily: F.serif, fontWeight: 600, textAlign: "center", marginTop: 16 }}>
          "discipline."
        </div>
        <div style={{ ...fadeUp(frame, 260, 20), fontSize: 140, color: C.red, fontFamily: F.serif, fontStyle: "italic", textAlign: "center", marginTop: 140, lineHeight: 1.3 }}>
          Your biology says<br/>it's a cascade.
        </div>
      </div>

      {/* ═══ STEP 1 ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 325, 420),
        padding: "80px 60px",
      }}>
        <div style={{ ...fadeUp(frame, 328, 14), fontSize: 68, color: C.dim, fontFamily: F.mono, letterSpacing: 10 }}>STEP 1</div>
        <div style={{ ...fadeUp(frame, 335, 14), fontSize: 240, marginTop: 50, marginBottom: 50 }}>🌙</div>
        <div style={{ ...fadeUp(frame, 340, 16), fontSize: 196, fontWeight: 700, color: C.purple, fontFamily: F.serif, textAlign: "center", lineHeight: 1.15 }}>
          Sleep under<br/>6 hours.
        </div>
        <div style={{ ...fadeUp(frame, 360, 16), fontSize: 96, color: C.sub, textAlign: "center", marginTop: 60, lineHeight: 1.5 }}>
          Cortisol doesn't drop overnight.<br/>It carries into the morning.
        </div>
        <div style={{ ...fadeUp(frame, 385, 14), fontSize: 140, color: `${C.dim}60`, marginTop: 60 }}>↓</div>
      </div>

      {/* ═══ STEP 2 ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 425, 520),
        padding: "80px 60px",
      }}>
        <div style={{ ...fadeUp(frame, 428, 14), fontSize: 68, color: C.dim, fontFamily: F.mono, letterSpacing: 10 }}>STEP 2</div>
        <div style={{ ...fadeUp(frame, 435, 14), fontSize: 240, marginTop: 50, marginBottom: 50 }}>📈</div>
        <div style={{ ...fadeUp(frame, 440, 16), fontSize: 184, fontWeight: 700, color: C.red, fontFamily: F.serif, textAlign: "center", lineHeight: 1.15 }}>
          Cortisol stays<br/>elevated.
        </div>
        <div style={{ ...fadeUp(frame, 460, 16), fontSize: 96, color: C.sub, textAlign: "center", marginTop: 60, lineHeight: 1.5 }}>
          Insulin sensitivity drops<br/><span style={{ color: C.red, fontWeight: 700, fontSize: 120 }}>25-30%.</span>
        </div>
        <div style={{ ...fadeUp(frame, 485, 14), fontSize: 140, color: `${C.dim}60`, marginTop: 60 }}>↓</div>
      </div>

      {/* ═══ STEP 3 ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 525, 620),
        padding: "80px 60px",
      }}>
        <div style={{ ...fadeUp(frame, 528, 14), fontSize: 68, color: C.dim, fontFamily: F.mono, letterSpacing: 10 }}>STEP 3</div>
        <div style={{ ...fadeUp(frame, 535, 14), fontSize: 240, marginTop: 50, marginBottom: 50 }}>🍞</div>
        <div style={{ ...fadeUp(frame, 540, 16), fontSize: 184, fontWeight: 700, color: C.accent, fontFamily: F.serif, textAlign: "center", lineHeight: 1.15 }}>
          Same food.<br/>More fat stored.
        </div>
        <div style={{ ...fadeUp(frame, 560, 16), fontSize: 96, color: C.sub, textAlign: "center", marginTop: 60, lineHeight: 1.5 }}>
          Your body stores<br/>what it used to burn.
        </div>
        <div style={{ ...fadeUp(frame, 585, 14), fontSize: 140, color: `${C.dim}60`, marginTop: 60 }}>↓</div>
      </div>

      {/* ═══ STEP 4 ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 625, 700),
        padding: "80px 60px",
      }}>
        <div style={{ ...fadeUp(frame, 628, 14), fontSize: 68, color: C.dim, fontFamily: F.mono, letterSpacing: 10 }}>STEP 4</div>
        <div style={{ ...fadeUp(frame, 635, 14), fontSize: 240, marginTop: 50, marginBottom: 50 }}>🔥</div>
        <div style={{ ...fadeUp(frame, 640, 16), fontSize: 184, fontWeight: 700, color: C.red, fontFamily: F.serif, textAlign: "center", lineHeight: 1.15 }}>
          Metabolism<br/>drops.
        </div>
        <div style={{ ...fadeUp(frame, 660, 16), fontSize: 100, color: C.sub, textAlign: "center", marginTop: 60, lineHeight: 1.5 }}>
          Not because you're lazy.
        </div>
        <div style={{ ...fadeUp(frame, 675, 16), fontSize: 108, color: C.red, fontWeight: 600, textAlign: "center", marginTop: 16 }}>
          Because you didn't sleep.
        </div>
      </div>

      {/* ═══ SCENE 4: Reframe ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 710, 840),
        padding: "80px 60px",
      }}>
        <Img src={staticFile("characters/biology-chain.png")} style={{
          width: 620, height: 620, objectFit: "contain",
          ...fadeUp(frame, 715, 18),
          filter: "drop-shadow(0 0 40px rgba(232,120,94,0.12))",
        }} />
        <div style={{ ...fadeUp(frame, 735, 18), fontSize: 140, color: C.sub, fontFamily: F.sans, textAlign: "center", marginTop: 50 }}>
          Your metabolism isn't broken.
        </div>
        <div style={{ ...fadeUp(frame, 755, 20), fontSize: 196, color: C.white, fontFamily: F.serif, fontWeight: 600, textAlign: "center", marginTop: 20 }}>
          Your sleep <span style={{ color: C.red, fontStyle: "italic" }}>broke it.</span>
        </div>
      </div>

      {/* ═══ SCENE 5: Brand hit ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 850, 1020),
        padding: "80px 60px",
      }}>
        <div style={{ ...fadeUp(frame, 855, 18), fontSize: 160, color: C.dim, fontFamily: F.sans }}>
          It's not just discipline.
        </div>
        <div style={{ ...fadeUp(frame, 878, 22), fontSize: 248, color: C.white, fontFamily: F.serif, fontWeight: 700, marginTop: 30 }}>
          It's <span style={{ color: C.teal, fontStyle: "italic" }}>biology.</span>
        </div>
        <div style={{
          width: 22, height: 22, borderRadius: "50%", background: C.green, marginTop: 80,
          opacity: interpolate(frame, [890, 910], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
          transform: `scale(${dotPulse})`,
          boxShadow: `0 0 ${14 + 10 * Math.sin(frame * 0.15)}px ${C.green}60, 0 0 ${45 + 25 * Math.sin(frame * 0.15)}px ${C.green}15`,
        }} />
      </div>
    </div>
  );
};
