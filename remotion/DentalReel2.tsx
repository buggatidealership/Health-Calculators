import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
// Reel 2: Fear → Comfort. Fixes from Reel 1: SVG stars (no emoji), better screen fill,
// Instagram safe zones (avoid top 150px, bottom 250px), color temperature shift.

const C = {
  bg: "#0f1419",
  bgWarm: "#1a1510",
  card: "#1a1f2e",
  text: "#F5F0EA",
  sub: "#a0a8b8",
  dim: "#4a5568",
  gold: "#d4a853",
  accent: "#e8b04a",
  cream: "#F5F0EA",
  fear: "#5a6882",
  comfort: "#2dd4bf",
  white: "#ffffff",
};
const F = {
  serif: "'DM Serif Display', Georgia, serif",
  sans: "'Inter', -apple-system, sans-serif",
};

function fadeUp(frame: number, start: number, dur = 16) {
  return {
    opacity: interpolate(frame, [start, start + dur], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    transform: `translateY(${interpolate(frame, [start, start + dur], [50, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })}px)`,
  };
}

function sceneVis(frame: number, start: number, end: number) {
  if (frame < start - 5 || frame > end + 15) return 0;
  return Math.min(
    interpolate(frame, [start, start + 14], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    interpolate(frame, [end - 10, end + 14], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
  );
}

// SVG star — replaces broken emoji
function SvgStar({ size = 40, delay, frame }: { size?: number; delay: number; frame: number }) {
  const scale = interpolate(frame, [delay, delay + 8], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
    easing: Easing.out(Easing.back(2)),
  });
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ transform: `scale(${scale})` }}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        fill={C.gold} stroke={C.gold} strokeWidth={0.5} />
      <circle cx={12} cy={12} r={14} fill={C.gold} opacity={0.1} />
    </svg>
  );
}

function Stars5({ frame, start, size = 44 }: { frame: number; start: number; size?: number }) {
  return (
    <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
      {[0,1,2,3,4].map(i => (
        <SvgStar key={i} size={size} delay={start + i * 4} frame={frame} />
      ))}
    </div>
  );
}

// Review card — fills more vertical space
function ReviewCard({ name, text, frame, start }: {
  name: string; text: string; frame: number; start: number;
}) {
  return (
    <div style={{
      ...fadeUp(frame, start, 18),
      background: `${C.card}ee`,
      border: `1px solid ${C.dim}30`,
      borderRadius: 28,
      padding: "48px 50px",
      width: "100%",
    }}>
      <div style={{
        fontSize: 46, color: C.cream, lineHeight: 1.55,
        fontFamily: F.sans, fontWeight: 400, fontStyle: "italic",
      }}>
        "{text}"
      </div>
      <div style={{
        display: "flex", alignItems: "center", gap: 16, marginTop: 28,
      }}>
        <div style={{
          width: 48, height: 48, borderRadius: "50%",
          background: `${C.gold}20`, border: `2px solid ${C.gold}40`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 24, color: C.gold, fontWeight: 600,
        }}>
          {name.charAt(0)}
        </div>
        <div style={{ fontSize: 38, color: C.cream, fontWeight: 600 }}>{name}</div>
        <div style={{ marginLeft: "auto" }}>
          <Stars5 frame={frame} start={start + 15} size={32} />
        </div>
      </div>
    </div>
  );
}

// 20s = 600 frames
export const DentalReel2: React.FC = () => {
  const frame = useCurrentFrame();

  // Color temperature: cool/fearful → warm/comfortable
  const warmth = interpolate(frame, [0, 200, 400, 600], [0, 0, 0.5, 1], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });
  const bgColor = warmth > 0.5 ? C.bgWarm : C.bg;
  const ambHue = interpolate(warmth, [0, 1], [220, 35]);
  const ambInt = interpolate(frame, [0, 150, 300, 500, 600], [0.04, 0.08, 0.1, 0.12, 0.08], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  return (
    <div style={{
      width: 1080, height: 1920,
      background: bgColor,
      overflow: "hidden", position: "relative", fontFamily: F.sans,
      transition: "background 1s ease-out",
    }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none",
        background: `radial-gradient(ellipse at 50% 40%, hsla(${ambHue},50%,40%,${ambInt}) 0%, transparent 60%)`,
      }} />
      <div style={{ position: "absolute", inset: 0, opacity: 0.25, pointerEvents: "none", zIndex: 100,
        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
      }} />

      {/* ═══ SCENE 1: THUMBNAIL — scared in dental chair (0-160) ═══ */}
      {/* Instagram safe zone: content between y=150 and y=1670 */}
      <div style={{
        position: "absolute", left: 0, right: 0, top: 150, bottom: 250,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "space-between",
        opacity: sceneVis(frame, 0, 160),
        padding: "20px 50px 30px",
      }}>
        <div style={{ ...fadeUp(frame, 0, 22), flex: 1, display: "flex", alignItems: "center" }}>
          <Img src={staticFile("characters/scared-dental.png")} style={{
            width: 850, height: 850, objectFit: "contain",
            filter: "drop-shadow(0 0 40px rgba(90,104,130,0.2))",
          }} />
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{
            ...fadeUp(frame, 50, 18),
            fontSize: 68, color: C.cream, fontFamily: F.serif, lineHeight: 1.25,
          }}>
            Every scared patient says
          </div>
          <div style={{
            ...fadeUp(frame, 65, 18),
            fontSize: 72, color: C.gold, fontFamily: F.serif, fontStyle: "italic", lineHeight: 1.25,
          }}>
            the same thing.
          </div>
        </div>
      </div>

      {/* ═══ SCENE 2: Review 1 — Diana (165-280) ═══ */}
      <div style={{
        position: "absolute", left: 0, right: 0, top: 150, bottom: 250,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 165, 280),
        padding: "30px 50px",
        gap: 30,
      }}>
        {/* Before/after labels */}
        <div style={{
          ...fadeUp(frame, 168, 14),
          fontSize: 40, color: C.fear, fontFamily: F.sans, letterSpacing: 4,
          textTransform: "uppercase",
        }}>
          BEFORE
        </div>
        <div style={{
          ...fadeUp(frame, 175, 16),
          fontSize: 80, color: C.cream, fontFamily: F.serif,
          textAlign: "center", lineHeight: 1.3,
        }}>
          "I arrived <span style={{ color: C.fear, fontStyle: "italic" }}>very scared.</span>"
        </div>

        {/* Arrow transition */}
        <div style={{
          ...fadeUp(frame, 205, 14),
          fontSize: 60, color: C.dim,
        }}>↓</div>

        <div style={{
          ...fadeUp(frame, 210, 14),
          fontSize: 40, color: C.comfort, fontFamily: F.sans, letterSpacing: 4,
          textTransform: "uppercase",
        }}>
          AFTER
        </div>
        <div style={{
          ...fadeUp(frame, 218, 16),
          fontSize: 80, color: C.cream, fontFamily: F.serif,
          textAlign: "center", lineHeight: 1.3,
        }}>
          "They've given me back <span style={{ color: C.gold, fontStyle: "italic" }}>my smile.</span>"
        </div>

        <div style={{
          ...fadeUp(frame, 245, 14),
          display: "flex", alignItems: "center", gap: 16, marginTop: 10,
        }}>
          <div style={{
            width: 44, height: 44, borderRadius: "50%",
            background: `${C.gold}20`, border: `2px solid ${C.gold}40`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 22, color: C.gold, fontWeight: 600,
          }}>D</div>
          <div style={{ fontSize: 36, color: C.sub }}>Diana Teys</div>
          <Stars5 frame={frame} start={250} size={28} />
        </div>
      </div>

      {/* ═══ SCENE 3: Review 2 — Araceli (285-400) ═══ */}
      <div style={{
        position: "absolute", left: 0, right: 0, top: 150, bottom: 250,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 285, 400),
        padding: "30px 50px",
        gap: 30,
      }}>
        <div style={{ ...fadeUp(frame, 288, 14), fontSize: 40, color: C.fear, letterSpacing: 4, textTransform: "uppercase" }}>
          BEFORE
        </div>
        <div style={{
          ...fadeUp(frame, 295, 16),
          fontSize: 80, color: C.cream, fontFamily: F.serif, textAlign: "center", lineHeight: 1.3,
        }}>
          "I'm a <span style={{ color: C.fear, fontStyle: "italic" }}>very nervous</span> person."
        </div>

        <div style={{ ...fadeUp(frame, 325, 14), fontSize: 60, color: C.dim }}>↓</div>

        <div style={{ ...fadeUp(frame, 330, 14), fontSize: 40, color: C.comfort, letterSpacing: 4, textTransform: "uppercase" }}>
          AFTER
        </div>
        <div style={{
          ...fadeUp(frame, 338, 16),
          fontSize: 80, color: C.cream, fontFamily: F.serif, textAlign: "center", lineHeight: 1.3,
        }}>
          "They handled it <span style={{ color: C.gold, fontStyle: "italic" }}>wonderfully.</span>"
        </div>

        <div style={{
          ...fadeUp(frame, 365, 14),
          display: "flex", alignItems: "center", gap: 16, marginTop: 10,
        }}>
          <div style={{
            width: 44, height: 44, borderRadius: "50%",
            background: `${C.gold}20`, border: `2px solid ${C.gold}40`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 22, color: C.gold, fontWeight: 600,
          }}>A</div>
          <div style={{ fontSize: 36, color: C.sub }}>Araceli</div>
          <Stars5 frame={frame} start={370} size={28} />
        </div>
      </div>

      {/* ═══ SCENE 4: Review 3 — CS Perruqueria (405-510) ═══ */}
      <div style={{
        position: "absolute", left: 0, right: 0, top: 150, bottom: 250,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 405, 510),
        padding: "30px 50px",
        gap: 30,
      }}>
        <div style={{ ...fadeUp(frame, 408, 14), fontSize: 40, color: C.fear, letterSpacing: 4, textTransform: "uppercase" }}>
          BEFORE
        </div>
        <div style={{
          ...fadeUp(frame, 415, 16),
          fontSize: 76, color: C.cream, fontFamily: F.serif, textAlign: "center", lineHeight: 1.3,
        }}>
          "My case was <span style={{ color: C.fear, fontStyle: "italic" }}>truly complex.</span>"
        </div>

        <div style={{ ...fadeUp(frame, 445, 14), fontSize: 60, color: C.dim }}>↓</div>

        <div style={{ ...fadeUp(frame, 450, 14), fontSize: 40, color: C.comfort, letterSpacing: 4, textTransform: "uppercase" }}>
          AFTER
        </div>
        <div style={{
          ...fadeUp(frame, 458, 16),
          fontSize: 76, color: C.cream, fontFamily: F.serif, textAlign: "center", lineHeight: 1.3,
        }}>
          "I can smile <span style={{ color: C.gold, fontStyle: "italic" }}>without fear.</span>"
        </div>

        <div style={{
          ...fadeUp(frame, 480, 14),
          display: "flex", alignItems: "center", gap: 16, marginTop: 10,
        }}>
          <div style={{
            width: 44, height: 44, borderRadius: "50%",
            background: `${C.gold}20`, border: `2px solid ${C.gold}40`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 22, color: C.gold, fontWeight: 600,
          }}>C</div>
          <div style={{ fontSize: 36, color: C.sub }}>CS Perruqueria</div>
          <Stars5 frame={frame} start={485} size={28} />
        </div>
      </div>

      {/* ═══ SCENE 5: CTA (515-600) ═══ */}
      <div style={{
        position: "absolute", left: 0, right: 0, top: 150, bottom: 250,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 515, 600),
        padding: "30px 50px",
        gap: 24,
      }}>
        <Img src={staticFile("characters/dental-smile.png")} style={{
          ...fadeUp(frame, 518, 20),
          width: 450, height: 450, objectFit: "contain",
          filter: "drop-shadow(0 0 30px rgba(212,168,83,0.15))",
        }} />
        <div style={{
          ...fadeUp(frame, 540, 20),
          fontSize: 76, color: C.cream, fontFamily: F.serif,
          textAlign: "center", lineHeight: 1.3,
        }}>
          Your smile
        </div>
        <div style={{
          ...fadeUp(frame, 552, 20),
          fontSize: 80, color: C.gold, fontFamily: F.serif,
          fontStyle: "italic", textAlign: "center",
        }}>
          is waiting.
        </div>
        <div style={{
          ...fadeUp(frame, 572, 16),
          marginTop: 20, padding: "22px 54px",
          background: `linear-gradient(135deg, ${C.gold}, ${C.accent})`,
          borderRadius: 60, fontSize: 38, fontWeight: 700,
          color: C.bg, letterSpacing: 1,
        }}>
          HARMONIA DENTAL · MASNOU
        </div>
      </div>
    </div>
  );
};
