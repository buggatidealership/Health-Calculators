import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

// FITNESS REEL B: "I Was Wrong" — redacted belief format
// Whitespace: Science "self-correction" format, rare in fitness
// Emotional moment: "This person is being honest with me"
// 12s = 360 frames @ 30fps, 1080x1920

const C = {
  bg: "#1a1a2e",
  card: "#222240",
  cream: "#F5F0EA",
  sub: "#8a8aa0",
  red: "#c0392b",
  redLight: "#e74c3c",
  teal: "#3d8b7a",
  tealLight: "#5cb8a3",
  dim: "#3a3a55",
  strike: "#c0392b",
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

// Redaction bar component
function RedactedLine({ text, correction, frame, startShow, startStrike, startReveal }: {
  text: string; correction: string; frame: number; startShow: number; startStrike: number; startReveal: number;
}) {
  const showOp = ease(frame, startShow, 12, 0, 1);
  const strikeW = ease(frame, startStrike, 14, 0, 100, Easing.out(Easing.exp));
  const revealOp = ease(frame, startReveal, 14, 0, 1);
  const revealY = ease(frame, startReveal, 14, 20, 0);

  return (
    <div style={{ width: "100%", marginBottom: 24 }}>
      {/* Old belief */}
      <div style={{ position: "relative", opacity: showOp }}>
        <div style={{
          fontSize: 42, color: C.cream, lineHeight: 1.5, fontFamily: F.sans,
          opacity: frame >= startStrike ? 0.4 : 1,
          transition: "opacity 0.3s",
        }}>{text}</div>
        {/* Strike-through bar */}
        {frame >= startStrike && (
          <div style={{
            position: "absolute", top: "50%", left: 0,
            width: `${strikeW}%`, height: 4,
            background: C.strike,
            transform: "translateY(-50%)",
            borderRadius: 2,
          }} />
        )}
      </div>
      {/* Correction */}
      {frame >= startReveal && (
        <div style={{
          opacity: revealOp,
          transform: `translateY(${revealY}px)`,
          fontSize: 38, color: C.teal, fontWeight: 600, lineHeight: 1.5,
          marginTop: 8, paddingLeft: 16,
          borderLeft: `3px solid ${C.teal}40`,
        }}>{correction}</div>
      )}
    </div>
  );
}

export const Fitness_IWasWrong: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <div style={{
      width: 1080, height: 1920, background: C.bg,
      overflow: "hidden", position: "relative", fontFamily: F.sans,
    }}>
      {/* Grain */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.15, pointerEvents: "none", zIndex: 100,
        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
      }} />

      {/* ═══ SCENE 1: CONFESSION HOOK (0-75) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 0, 75),
        padding: "80px 60px",
        gap: 24,
      }}>
        <div style={{
          ...fadeUp(frame, 5, 16),
          fontSize: 36, color: C.sub, fontFamily: F.mono, letterSpacing: 3,
          textTransform: "uppercase",
        }}>Confession</div>

        <div style={{
          ...fadeUp(frame, 15, 20),
          fontSize: 72, color: C.cream, fontFamily: F.serif, textAlign: "center", lineHeight: 1.25,
        }}>
          I trained for
          <br />
          <span style={{ color: C.redLight, fontStyle: "italic" }}>5 years</span>
          <br />
          believing these.
        </div>

        <div style={{
          ...fadeUp(frame, 45, 16),
          fontSize: 36, color: C.sub, textAlign: "center",
        }}>All three were wrong.</div>
      </div>

      {/* ═══ SCENE 2: THREE REDACTIONS (80-270) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "flex-start",
        justifyContent: "center",
        opacity: sceneVis(frame, 80, 270),
        padding: "100px 60px",
      }}>
        {/* Label */}
        <div style={{
          ...fadeUp(frame, 83, 12),
          fontSize: 26, color: C.red, fontFamily: F.mono, letterSpacing: 4,
          textTransform: "uppercase", marginBottom: 36,
        }}>WHAT I BELIEVED → WHAT THE DATA SAYS</div>

        <RedactedLine
          text='"More sets = more growth."'
          correction="After ~10 hard sets/week, returns flatten. Volume has diminishing returns."
          frame={frame}
          startShow={90}
          startStrike={110}
          startReveal={125}
        />

        <RedactedLine
          text='"Soreness means it worked."'
          correction="DOMS correlates with novelty, not stimulus. No soreness ≠ no growth."
          frame={frame}
          startShow={150}
          startStrike={170}
          startReveal={185}
        />

        <RedactedLine
          text='"You need 1g protein per pound."'
          correction="0.7-0.8g/lb is the evidence ceiling. The extra 30% is marketing."
          frame={frame}
          startShow={210}
          startStrike={230}
          startReveal={245}
        />
      </div>

      {/* ═══ SCENE 3: REFLECTION + CTA (275-360) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 275, 360, 12, 1),
        padding: "80px 60px",
        gap: 30,
      }}>
        <div style={{
          ...fadeUp(frame, 278, 18),
          fontSize: 60, color: C.cream, fontFamily: F.serif, textAlign: "center", lineHeight: 1.3,
        }}>
          5 years of work.
          <br />
          <span style={{ color: C.tealLight }}>Better results in 6 months</span>
          <br />once I dropped these.
        </div>

        <div style={{
          ...fadeUp(frame, 310, 16),
          width: 500, height: 2,
          background: `linear-gradient(90deg, transparent, ${C.teal}, transparent)`,
        }} />

        <div style={{
          ...fadeUp(frame, 320, 14),
          fontSize: 32, color: C.sub, textAlign: "center",
        }}>Which one did you believe?</div>
      </div>
    </div>
  );
};
