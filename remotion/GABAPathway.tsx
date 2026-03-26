import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
// /design: Revelation principle. Convergence moment: scattered symptoms → one node.
// /motion: Target-mapped scenes, live-drawing connections, 540px-first.

const C = {
  bg: "#0a0f1a", text: "#E0E0E0", sub: "#8a919e", dim: "#3a4050",
  red: "#e8785e", green: "#6ec89b", accent: "#e89b3e", teal: "#0e7a7e",
  white: "#ffffff", blue: "#4a90d9", purple: "#9b7ee8", pink: "#ec4899",
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

// Symptom data — positioned in a circle around the center
const symptoms = [
  { emoji: "😰", label: "Anxiety", color: C.red, angle: -90 },
  { emoji: "🌙", label: "Insomnia", color: C.blue, angle: -30 },
  { emoji: "💪", label: "Cramps", color: C.accent, angle: 30 },
  { emoji: "😩", label: "Fatigue", color: C.purple, angle: 90 },
  { emoji: "🤯", label: "Headaches", color: C.pink, angle: 150 },
  { emoji: "😤", label: "Irritability", color: C.red, angle: 210 },
];

// 30s = 900 frames
export const GABAPathway: React.FC = () => {
  const frame = useCurrentFrame();

  const ambHue = interpolate(frame, [0, 200, 400, 600, 750, 900], [250, 250, 280, 160, 160, 160], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });
  const ambInt = interpolate(frame, [0, 200, 500, 750, 900], [0.08, 0.1, 0.14, 0.08, 0.04], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });
  const dotPulse = 1 + 0.25 * (Math.sin(frame * 0.15) > 0 ? 0.3 : 0) + 0.1 * Math.sin(frame * 0.4);

  // Center node position
  const cx = 1080, cy = 1000;
  const orbitR = 650; // Symptom orbit radius

  // Connection line progress (scene 3)
  const connectProgress = interpolate(frame, [430, 560], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic),
  });

  // Center node glow (appears as connections complete)
  const nodeGlow = interpolate(frame, [520, 580], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic),
  });

  return (
    <div style={{
      width: 2160, height: 2160, background: C.bg,
      overflow: "hidden", position: "relative", fontFamily: F.sans,
    }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none",
        background: `radial-gradient(ellipse at 50% 46%, hsla(${ambHue},45%,35%,${ambInt}) 0%, transparent 55%)`,
      }} />
      <div style={{ position: "absolute", inset: 0, opacity: 0.3, pointerEvents: "none", zIndex: 100,
        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.045'/%3E%3C/svg%3E")`,
      }} />

      {/* ═══ SCENE 1: THUMBNAIL — anxious in bed (0-180) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "space-between",
        opacity: sceneVis(frame, 0, 180),
        padding: "60px 60px 80px",
      }}>
        <div style={{ ...fadeUp(frame, 0, 25), flex: 1, display: "flex", alignItems: "center" }}>
          <Img src={staticFile("characters/anxious-bed.png")} style={{
            width: 1600, height: 1600, objectFit: "contain",
            filter: "drop-shadow(0 0 50px rgba(155,126,232,0.15))",
          }} />
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ ...fadeUp(frame, 55, 18), fontSize: 164, color: C.text, fontFamily: F.serif, lineHeight: 1.15 }}>
            Can't sleep.
          </div>
          <div style={{ ...fadeUp(frame, 75, 18), fontSize: 164, color: C.purple, fontFamily: F.serif, fontStyle: "italic", lineHeight: 1.15 }}>
            Can't stop thinking.
          </div>
        </div>
      </div>

      {/* ═══ SCENE 2: "These feel like separate problems" (185-330) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 185, 345),
        padding: "80px 60px",
      }}>
        <div style={{ ...fadeUp(frame, 190, 16), fontSize: 104, color: C.dim, fontFamily: F.mono, letterSpacing: 6, marginBottom: 50 }}>
          FEELS LIKE
        </div>

        {/* Scattered symptoms — staggered reveal */}
        <div style={{ position: "relative", width: 1800, height: 900, margin: "0 auto" }}>
          {symptoms.map((s, i) => {
            const entryFrame = 210 + i * 20;
            const x = 900 + Math.cos((s.angle * Math.PI) / 180) * 550;
            const y = 450 + Math.sin((s.angle * Math.PI) / 180) * 350;
            return (
              <div key={i} style={{
                position: "absolute", left: x - 130, top: y - 80,
                ...fadeUp(frame, entryFrame, 14),
                textAlign: "center", width: 260,
              }}>
                <div style={{ fontSize: 100, marginBottom: 8 }}>{s.emoji}</div>
                <div style={{ fontSize: 60, color: s.color, fontWeight: 600 }}>{s.label}</div>
              </div>
            );
          })}
        </div>

        <div style={{
          ...fadeUp(frame, 310, 18),
          fontSize: 128, color: C.sub, fontFamily: F.serif, fontStyle: "italic",
          textAlign: "center", marginTop: 30,
        }}>
          Six separate problems.
        </div>
      </div>

      {/* ═══ SCENE 3: THE CONVERGENCE — connections draw to center (335-620) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: sceneVis(frame, 335, 635),
      }}>
        <div style={{
          ...fadeUp(frame, 338, 14),
          textAlign: "center", padding: "60px 60px 0",
          fontSize: 80, color: C.dim, fontFamily: F.mono, letterSpacing: 6,
        }}>
          OR ONE ROOT CAUSE
        </div>

        <svg width={2160} height={1600} style={{ position: "absolute", top: 180, left: 0 }}>
          <defs>
            <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Symptom nodes in orbit */}
          {symptoms.map((s, i) => {
            const entryFrame = 345 + i * 12;
            const sx = cx + Math.cos((s.angle * Math.PI) / 180) * orbitR;
            const sy = 750 + Math.sin((s.angle * Math.PI) / 180) * orbitR * 0.65;

            const nodeOpacity = interpolate(frame, [entryFrame, entryFrame + 14], [0, 1], {
              extrapolateLeft: "clamp", extrapolateRight: "clamp",
            });

            // Connection line from symptom to center
            const lineEntry = 430 + i * 20;
            const lineProgress = interpolate(frame, [lineEntry, lineEntry + 25], [0, 1], {
              extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic),
            });

            // Dim symptoms after connection
            const dimAfterConnect = interpolate(frame, [lineEntry + 25, lineEntry + 40], [1, 0.4], {
              extrapolateLeft: "clamp", extrapolateRight: "clamp",
            });

            const lineEndX = sx + (cx - sx) * lineProgress;
            const lineEndY = sy + (750 - sy) * lineProgress;

            return (
              <React.Fragment key={i}>
                {/* Connection line */}
                {lineProgress > 0 && (
                  <line x1={sx} y1={sy} x2={lineEndX} y2={lineEndY}
                    stroke={s.color} strokeWidth={4} strokeLinecap="round"
                    opacity={0.5} strokeDasharray="8,8" />
                )}

                {/* Symptom node */}
                <g opacity={nodeOpacity * dimAfterConnect}>
                  <circle cx={sx} cy={sy} r={70} fill={`${s.color}15`} stroke={s.color} strokeWidth={3} />
                  <text x={sx} y={sy + 14} textAnchor="middle" fontSize={60}>{s.emoji}</text>
                </g>
                <text x={sx} y={sy + 100} textAnchor="middle"
                  fill={s.color} fontSize={44} fontFamily={F.sans} fontWeight="600"
                  opacity={nodeOpacity * dimAfterConnect}>
                  {s.label}
                </text>
              </React.Fragment>
            );
          })}

          {/* CENTER NODE — GABA + Serotonin */}
          <circle cx={cx} cy={750} r={interpolate(nodeGlow, [0, 1], [0, 120])}
            fill={C.green} opacity={nodeGlow * 0.08} />
          <circle cx={cx} cy={750} r={interpolate(nodeGlow, [0, 1], [0, 85])}
            fill={C.green} opacity={nodeGlow * 0.15} filter="url(#nodeGlow)" />
          <circle cx={cx} cy={750} r={interpolate(nodeGlow, [0, 1], [10, 55])}
            fill={C.bg} stroke={C.green} strokeWidth={5} opacity={nodeGlow} />

          {/* Center label */}
          {nodeGlow > 0.5 && (
            <>
              <text x={cx} y={750 + 8} textAnchor="middle"
                fill={C.green} fontSize={42} fontFamily={F.mono} fontWeight="700"
                opacity={interpolate(nodeGlow, [0.5, 1], [0, 1])}>
                GABA
              </text>
              <text x={cx} y={750 + 180} textAnchor="middle"
                fill={C.green} fontSize={38} fontFamily={F.mono}
                opacity={interpolate(nodeGlow, [0.6, 1], [0, 1])}>
                + Serotonin
              </text>
            </>
          )}
        </svg>

        {/* Bottom text */}
        {frame >= 570 && (
          <div style={{
            ...fadeUp(frame, 570, 18),
            position: "absolute", bottom: 120, left: 0, right: 0,
            textAlign: "center", padding: "0 80px",
            fontSize: 92, color: C.green, fontFamily: F.serif, fontStyle: "italic",
          }}>
            Every line leads to the same place.
          </div>
        )}
      </div>

      {/* ═══ SCENE 4: The insight (625-760) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 625, 765),
        padding: "100px 60px",
      }}>
        <div style={{ ...fadeUp(frame, 630, 18), fontSize: 140, color: C.sub, fontFamily: F.sans, textAlign: "center" }}>
          It was never 6 problems.
        </div>
        <div style={{ ...fadeUp(frame, 655, 22), fontSize: 192, color: C.white, fontFamily: F.serif, fontWeight: 600, textAlign: "center", marginTop: 40 }}>
          It was <span style={{ color: C.green }}>1</span> pathway.
        </div>
        <div style={{ ...fadeUp(frame, 690, 16), fontSize: 88, color: C.dim, fontFamily: F.mono, textAlign: "center", marginTop: 60 }}>
          Low GABA + serotonin signaling
        </div>
      </div>

      {/* ═══ SCENE 5: Brand hit (770-900) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 770, 900),
        padding: "100px 60px",
      }}>
        <div style={{ ...fadeUp(frame, 775, 18), fontSize: 148, color: C.dim, fontFamily: F.sans, textAlign: "center" }}>
          Your body isn't falling apart.
        </div>
        <div style={{ ...fadeUp(frame, 800, 22), fontSize: 200, color: C.white, fontFamily: F.serif, fontWeight: 700, marginTop: 30, textAlign: "center" }}>
          It's sending <span style={{ color: C.green, fontStyle: "italic" }}>one</span> signal.
        </div>
        <div style={{
          width: 22, height: 22, borderRadius: "50%", background: C.green, marginTop: 80,
          opacity: interpolate(frame, [820, 840], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
          transform: `scale(${dotPulse})`,
          boxShadow: `0 0 ${14 + 10 * Math.sin(frame * 0.15)}px ${C.green}60, 0 0 ${45 + 25 * Math.sin(frame * 0.15)}px ${C.green}15`,
        }} />
      </div>
    </div>
  );
};
