import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
// Thumbnail-first: frame 1 is a SCENE, not text. Visual hook before verbal hook.
// Design target: 540px mobile. 80% screen fill.
// Architecture: scene transitions + within-scene staggered reveals.

const C = {
  bg: "#0a0f1a", text: "#E0E0E0", sub: "#8a919e", dim: "#3a4050",
  red: "#e8785e", green: "#6ec89b", accent: "#e89b3e", teal: "#0e7a7e",
  white: "#ffffff", coffee: "#C4944A", blue: "#4a90d9",
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

// 30s = 900 frames
export const CaffeineV3: React.FC = () => {
  const frame = useCurrentFrame();

  const ambHue = interpolate(frame, [0, 250, 500, 750, 900], [30, 30, 220, 170, 170], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });
  const ambInt = interpolate(frame, [0, 200, 500, 750, 900], [0.08, 0.12, 0.14, 0.06, 0.04], {
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

      {/* ═══ SCENE 1: THUMBNAIL HOOK — exhausted at desk (0-200) ═══ */}
      {/* Frame 1 is the character in a scene. No text for first 2 seconds. */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "space-between",
        opacity: sceneVis(frame, 0, 200),
        padding: "100px 60px 100px",
      }}>
        {/* Character fills top 65% of frame */}
        <div style={{
          ...fadeUp(frame, 0, 25),
          flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <Img src={staticFile("characters/exhausted-desk.png")} style={{
            width: 1800, height: 1800, objectFit: "contain",
            filter: "drop-shadow(0 0 60px rgba(74,144,217,0.15))",
          }} />
        </div>
        {/* Text appears AFTER the visual has landed — staggered */}
        <div style={{ textAlign: "center", paddingBottom: 40 }}>
          <div style={{
            ...fadeUp(frame, 60, 18),
            fontSize: 180, color: C.text, fontFamily: F.serif, lineHeight: 1.15,
          }}>
            3 cups in.
          </div>
          <div style={{
            ...fadeUp(frame, 80, 18),
            fontSize: 180, color: C.coffee, fontFamily: F.serif, fontStyle: "italic", lineHeight: 1.15,
          }}>
            Still exhausted.
          </div>
        </div>
      </div>

      {/* ═══ SCENE 2: The question (205-320) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 205, 320),
        padding: "120px 60px",
      }}>
        <div style={{
          ...fadeUp(frame, 210, 18),
          fontSize: 160, color: C.sub, fontFamily: F.serif, fontWeight: 300,
          textAlign: "center", lineHeight: 1.3,
        }}>
          It's not that
        </div>
        <div style={{
          ...fadeUp(frame, 228, 18),
          fontSize: 160, color: C.sub, fontFamily: F.serif, fontWeight: 300,
          textAlign: "center", lineHeight: 1.3,
        }}>
          caffeine stopped working.
        </div>
        <div style={{
          ...fadeUp(frame, 268, 20),
          fontSize: 168, color: C.white, fontFamily: F.serif, fontWeight: 600,
          textAlign: "center", marginTop: 100, lineHeight: 1.3,
        }}>
          It's that it <span style={{ color: C.red, fontStyle: "italic" }}>never left.</span>
        </div>
      </div>

      {/* ═══ SCENE 3: Half-life — one at a time, full screen (325-620) ═══ */}

      {/* 2 PM — 100% */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 325, 395),
        padding: "80px 60px",
      }}>
        <div style={{ ...fadeUp(frame, 328, 14), fontSize: 96, color: C.dim, fontFamily: F.mono, letterSpacing: 8 }}>2:00 PM</div>
        <div style={{ ...fadeUp(frame, 338, 16), fontSize: 400, fontWeight: 700, color: C.coffee, fontFamily: F.mono, marginTop: 30 }}>100%</div>
        <div style={{ ...fadeUp(frame, 350, 14), fontSize: 104, color: C.sub, marginTop: 20 }}>200mg in your system</div>
        {/* Bar */}
        <div style={{
          ...fadeUp(frame, 355, 16),
          width: 1600, height: 80, borderRadius: 40, marginTop: 60,
          background: `linear-gradient(90deg, ${C.coffee}, ${C.coffee}90)`,
          boxShadow: `0 0 30px ${C.coffee}30`,
        }} />
        <div style={{ ...fadeUp(frame, 370, 14), fontSize: 140, color: `${C.dim}50`, marginTop: 50 }}>↓</div>
      </div>

      {/* 8 PM — 50% */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 400, 470),
        padding: "80px 60px",
      }}>
        <div style={{ ...fadeUp(frame, 403, 14), fontSize: 96, color: C.dim, fontFamily: F.mono, letterSpacing: 8 }}>8:00 PM</div>
        <div style={{ ...fadeUp(frame, 413, 16), fontSize: 400, fontWeight: 700, color: C.accent, fontFamily: F.mono, marginTop: 30 }}>50%</div>
        <div style={{ ...fadeUp(frame, 425, 14), fontSize: 104, color: C.sub, marginTop: 20 }}>100mg still active</div>
        <div style={{
          ...fadeUp(frame, 430, 16),
          width: 800, height: 80, borderRadius: 40, marginTop: 60,
          background: `linear-gradient(90deg, ${C.accent}, ${C.accent}80)`,
          boxShadow: `0 0 25px ${C.accent}25`,
        }} />
        <div style={{ ...fadeUp(frame, 445, 14), fontSize: 140, color: `${C.dim}50`, marginTop: 50 }}>↓</div>
      </div>

      {/* 12 AM — 25% — THE KEY FRAME */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 475, 560),
        padding: "80px 60px",
      }}>
        <div style={{ ...fadeUp(frame, 478, 14), fontSize: 104, color: C.red, fontFamily: F.mono, letterSpacing: 10, fontWeight: 700 }}>MIDNIGHT</div>
        <div style={{ ...fadeUp(frame, 488, 16), fontSize: 420, fontWeight: 700, color: C.red, fontFamily: F.mono, marginTop: 30 }}>25%</div>
        <div style={{ ...fadeUp(frame, 500, 14), fontSize: 100, color: C.sub, marginTop: 20, textAlign: "center" }}>50mg blocking your<br/>sleep receptors</div>
        <div style={{
          ...fadeUp(frame, 505, 16),
          width: 400, height: 80, borderRadius: 40, marginTop: 60,
          background: `linear-gradient(90deg, ${C.red}, ${C.red}80)`,
          boxShadow: `0 0 20px ${C.red}20`,
        }} />
      </div>

      {/* ═══ SCENE 4: Midnight fridge (565-680) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "space-between",
        opacity: sceneVis(frame, 565, 680),
        padding: "100px 60px 100px",
      }}>
        <div style={{
          ...fadeUp(frame, 568, 20),
          flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <Img src={staticFile("characters/midnight-fridge.png")} style={{
            width: 1500, height: 1500, objectFit: "contain",
            filter: "drop-shadow(0 0 50px rgba(74,144,217,0.15))",
          }} />
        </div>
        <div style={{ textAlign: "center", paddingBottom: 30 }}>
          <div style={{
            ...fadeUp(frame, 600, 16),
            fontSize: 120, color: C.sub, fontFamily: F.sans,
          }}>
            Wide awake at midnight.
          </div>
          <div style={{
            ...fadeUp(frame, 618, 16),
            fontSize: 128, color: C.red, fontFamily: F.serif, fontWeight: 600, fontStyle: "italic", marginTop: 16,
          }}>
            Blaming yourself for bad sleep.
          </div>
        </div>
      </div>

      {/* ═══ SCENE 5: Insight (685-790) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 685, 805),
        padding: "100px 60px",
      }}>
        <div style={{
          ...fadeUp(frame, 690, 18),
          fontSize: 148, color: C.sub, fontFamily: F.sans, textAlign: "center",
        }}>
          You didn't have insomnia.
        </div>
        <div style={{
          ...fadeUp(frame, 715, 20),
          fontSize: 184, color: C.white, fontFamily: F.serif, fontWeight: 600,
          textAlign: "center", marginTop: 40,
        }}>
          You had coffee at <span style={{ color: C.coffee }}>2 PM.</span>
        </div>
      </div>

      {/* ═══ SCENE 6: Brand hit (800-900) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 800, 900),
        padding: "100px 60px",
      }}>
        <div style={{
          ...fadeUp(frame, 805, 18),
          fontSize: 136, color: C.dim, fontFamily: F.sans, textAlign: "center",
        }}>
          The half-life was always there.
        </div>
        <div style={{
          ...fadeUp(frame, 830, 22),
          fontSize: 200, color: C.white, fontFamily: F.serif, fontWeight: 700,
          marginTop: 40, textAlign: "center", lineHeight: 1.2,
        }}>
          You just couldn't<br/><span style={{ color: C.accent, fontStyle: "italic", fontSize: 240 }}>feel</span> it.
        </div>
        <div style={{
          width: 22, height: 22, borderRadius: "50%", background: C.green, marginTop: 80,
          opacity: interpolate(frame, [845, 865], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
          transform: `scale(${dotPulse})`,
          boxShadow: `0 0 ${14 + 10 * Math.sin(frame * 0.15)}px ${C.green}60, 0 0 ${45 + 25 * Math.sin(frame * 0.15)}px ${C.green}15`,
        }} />
      </div>
    </div>
  );
};
