import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

// FITNESS REEL C: "Audience Cohort" — over 40 lifters
// Whitespace: Career "this is for YOU specifically" format
// Emotional moment: "Finally something that's actually for me"
// 12s = 360 frames @ 30fps, 1080x1920

const C = {
  bg: "#f7f4ef",
  card: "#ffffff",
  dark: "#1a1f2e",
  accent: "#8b6914",      // warm amber
  accentLight: "#c4993d",
  teal: "#2d7a6b",
  sub: "#7a7a7a",
  dim: "#d4d0c8",
  red: "#b5453a",
  cream: "#f7f4ef",
  border: "#e0dcd4",
};
const F = {
  serif: "'DM Serif Display', Georgia, serif",
  sans: "'Inter', -apple-system, sans-serif",
  mono: "'JetBrains Mono', monospace",
};

function ease(frame: number, start: number, dur: number, from: number, to: number, fn = Easing.out(Easing.cubic)) {
  return interpolate(frame, [start, start + dur], [from, to], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: fn,
  });
}
function fadeUp(frame: number, start: number, dur = 14) {
  return {
    opacity: ease(frame, start, dur, 0, 1),
    transform: `translateY(${ease(frame, start, dur, 40, 0)}px)`,
  };
}
function sceneVis(frame: number, start: number, end: number, fi = 10, fo = 10) {
  if (frame < start - 3 || frame > end + fo + 3) return 0;
  return Math.min(
    interpolate(frame, [start, start + fi], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    interpolate(frame, [end, end + Math.max(fo, 1)], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
  );
}

// "Patient file" row
function FileRow({ label, value, frame, start, highlight }: {
  label: string; value: string; frame: number; start: number; highlight?: boolean;
}) {
  return (
    <div style={{
      ...fadeUp(frame, start, 12),
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "20px 32px",
      borderBottom: `1px solid ${C.border}`,
      background: highlight ? `${C.teal}08` : "transparent",
    }}>
      <div style={{
        fontSize: 30, color: C.sub, fontFamily: F.mono, letterSpacing: 1,
        textTransform: "uppercase",
      }}>{label}</div>
      <div style={{
        fontSize: 34, color: highlight ? C.teal : C.dark, fontWeight: highlight ? 700 : 500,
      }}>{value}</div>
    </div>
  );
}

export const Fitness_Cohort: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <div style={{
      width: 1080, height: 1920, background: C.bg,
      overflow: "hidden", position: "relative", fontFamily: F.sans,
    }}>
      {/* Subtle grain */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.05, pointerEvents: "none", zIndex: 100,
        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
      }} />

      {/* ═══ SCENE 1: COHORT HOOK (0-85) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 0, 85),
        padding: "80px 60px",
        gap: 20,
      }}>
        {/* Age badge */}
        <div style={{
          ...fadeUp(frame, 5, 16),
          background: C.dark,
          borderRadius: 16,
          padding: "16px 40px",
          fontSize: 32, color: C.cream, fontFamily: F.mono, letterSpacing: 3,
        }}>OVER 40</div>

        <div style={{
          ...fadeUp(frame, 20, 20),
          fontSize: 68, color: C.dark, fontFamily: F.serif, textAlign: "center", lineHeight: 1.25,
        }}>
          Just started lifting?
          <br />
          <span style={{ color: C.accent, fontStyle: "italic" }}>This is different</span>
          <br />from everything else.
        </div>

        <div style={{
          ...fadeUp(frame, 55, 14),
          fontSize: 34, color: C.sub, textAlign: "center",
        }}>Not generic beginner advice. Your physiology changed.</div>
      </div>

      {/* ═══ SCENE 2: "PATIENT FILE" — your training profile (90-210) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 90, 210),
        padding: "80px 50px",
      }}>
        {/* File card */}
        <div style={{
          background: C.card,
          borderRadius: 20,
          width: "100%",
          overflow: "hidden",
          boxShadow: "0 8px 40px rgba(0,0,0,0.06)",
          border: `1px solid ${C.border}`,
        }}>
          {/* Header */}
          <div style={{
            ...fadeUp(frame, 93, 14),
            background: C.dark,
            padding: "24px 32px",
            display: "flex", justifyContent: "space-between", alignItems: "center",
          }}>
            <div style={{ fontSize: 24, color: C.cream, fontFamily: F.mono, letterSpacing: 3 }}>
              TRAINING PROFILE
            </div>
            <div style={{ fontSize: 24, color: `${C.cream}60`, fontFamily: F.mono }}>
              40+
            </div>
          </div>

          <FileRow label="Recovery" value="48-72h (not 24h)" frame={frame} start={105} highlight />
          <FileRow label="Joint priority" value="Warm-up is non-negotiable" frame={frame} start={118} />
          <FileRow label="Rep range" value="8-12 reps (not 3-5)" frame={frame} start={131} highlight />
          <FileRow label="Frequency" value="3x/week (not 6x)" frame={frame} start={144} />
          <FileRow label="Testosterone" value="Declines ~1%/year after 30" frame={frame} start={157} highlight />
          <FileRow label="Protein" value="1g/lb still applies — absorption doesn't" frame={frame} start={170} />
        </div>

        <div style={{
          ...fadeUp(frame, 190, 14),
          fontSize: 30, color: C.sub, fontStyle: "italic", marginTop: 20, textAlign: "center",
        }}>
          Your body isn't 25 anymore. Your program shouldn't be either.
        </div>
      </div>

      {/* ═══ SCENE 3: THE RULES (215-290) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 215, 290),
        padding: "80px 60px",
        gap: 28,
      }}>
        <div style={{
          ...fadeUp(frame, 218, 14),
          fontSize: 36, color: C.accent, fontFamily: F.mono, letterSpacing: 3,
          textTransform: "uppercase",
        }}>3 rules that change everything</div>

        {[
          { num: "01", text: "Warm up twice as long as you think", delay: 0 },
          { num: "02", text: "Never max out. Leave 2-3 reps in reserve.", delay: 16 },
          { num: "03", text: "Sleep is your best supplement. Not creatine.", delay: 32 },
        ].map((rule, i) => (
          <div key={i} style={{
            ...fadeUp(frame, 230 + rule.delay, 16),
            display: "flex", gap: 24, alignItems: "flex-start",
            width: "100%",
          }}>
            <div style={{
              fontSize: 48, color: C.accent, fontFamily: F.serif, fontWeight: 700,
              minWidth: 70, lineHeight: 1,
            }}>{rule.num}</div>
            <div style={{
              fontSize: 40, color: C.dark, lineHeight: 1.4,
            }}>{rule.text}</div>
          </div>
        ))}
      </div>

      {/* ═══ SCENE 4: CTA (295-360) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 295, 360, 12, 1),
        padding: "80px 60px",
        gap: 30,
      }}>
        <div style={{
          ...fadeUp(frame, 298, 18),
          fontSize: 64, color: C.dark, fontFamily: F.serif, textAlign: "center", lineHeight: 1.3,
        }}>
          It's not too late.
          <br />
          <span style={{ color: C.teal }}>It's just different.</span>
        </div>

        <div style={{
          ...fadeUp(frame, 320, 16),
          width: 400, height: 2,
          background: `linear-gradient(90deg, transparent, ${C.accent}, transparent)`,
        }} />

        <div style={{
          ...fadeUp(frame, 330, 14),
          fontSize: 30, color: C.sub, textAlign: "center",
        }}>Send this to someone who needs to hear it.</div>
      </div>
    </div>
  );
};
