import React from "react";
import {
  useCurrentFrame,
  interpolate,
  Easing,
} from "remotion";

// --- Design tokens ---
const C = {
  bg: "#0a0f1a",
  text: "#E0E0E0",
  dim: "#8a919e",
  accent: "#e89b3e",
  red: "#e8785e",
  green: "#6ec89b",
  teal: "#0e7a7e",
};

const F = {
  serif: "'DM Serif Display', Georgia, serif",
  sans: "'Inter', -apple-system, sans-serif",
};

// --- Timing: ~32s = 960 frames at 30fps ---
// Structure:
// Scene 1: The Noise (0-5s) — rapid-fire generic health advice
// Scene 2: The Cut (5-8s) — sharp positioning line
// Scene 3-6: Calculator showcase (8-24s) — 4 calculators, 4s each
// Scene 7: The Frame (24-28s) — "not just numbers" positioning
// Scene 8: CTA (28-32s) — brand dot + URL + Pulse tease

const T = {
  noiseStart: 0,
  noiseEnd: 150,        // 5s
  cutStart: 156,
  cutEnd: 252,          // 8.4s
  calc1Start: 258,      // TDEE
  calc1End: 378,        // 12.6s
  calc2Start: 384,      // Caffeine
  calc2End: 504,        // 16.8s
  calc3Start: 510,      // Body Fat
  calc3End: 630,        // 21s
  calc4Start: 636,      // Ozempic
  calc4End: 726,        // 24.2s
  frameStart: 732,
  frameEnd: 840,        // 28s
  ctaStart: 846,
  ctaEnd: 960,          // 32s
};

// --- Helpers ---
function fadeUp(frame: number, start: number, dur: number = 14) {
  return {
    opacity: interpolate(frame, [start, start + dur], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    transform: `translateY(${interpolate(frame, [start, start + dur], [36, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })}px)`,
  };
}

function fadeOut(frame: number, start: number, dur: number = 10) {
  return {
    opacity: interpolate(frame, [start, start + dur], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    transform: `translateY(${interpolate(frame, [start, start + dur], [0, -18], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.in(Easing.cubic) })}px)`,
  };
}

function sceneOp(frame: number, start: number, end: number) {
  if (frame < start || frame > end + 12) return 0;
  const fi = start + 8, fo = end - 8;
  if (frame < fi) return interpolate(frame, [start, fi], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  if (frame > fo) return interpolate(frame, [fo, end], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return 1;
}

// --- Scene 1: The Noise ---
// Rapid-fire useless health advice, each appearing and fading fast
const NOISE_PHRASES = [
  '"Consult your doctor"',
  '"It depends on your body"',
  '"Everyone is different"',
  '"Drink more water"',
  '"Listen to your body"',
  '"Results may vary"',
  '"Do your own research"',
  '"Ask your healthcare provider"',
];

const SceneNoise: React.FC<{ frame: number }> = ({ frame }) => {
  const local = frame - T.noiseStart;

  // Each phrase appears for ~16 frames (0.53s), staggered by 16
  const phrases = NOISE_PHRASES.map((text, i) => {
    const start = 6 + i * 16;
    const opacity = interpolate(local, [start, start + 6, start + 12, start + 16], [0, 0.7, 0.7, 0.15], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    const y = interpolate(local, [start, start + 6], [20, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.cubic),
    });
    // Scattered positions — not centered, feels chaotic
    const positions = [
      { top: "18%", left: "15%" },
      { top: "30%", left: "55%" },
      { top: "44%", left: "22%" },
      { top: "38%", left: "60%" },
      { top: "55%", left: "35%" },
      { top: "62%", left: "58%" },
      { top: "70%", left: "18%" },
      { top: "75%", left: "50%" },
    ];
    return { text, opacity, y, pos: positions[i] };
  });

  // Title fades in first
  const titleAnim = fadeUp(local, 0, 12);

  // All noise dims at exit
  const exitDim = interpolate(local, [130, 145], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div style={{ position: "absolute", inset: 0, opacity: sceneOp(frame, T.noiseStart, T.noiseEnd) }}>
      {/* Scattered noise phrases */}
      {phrases.map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            ...p.pos,
            fontFamily: F.sans,
            fontSize: 38,
            color: C.dim,
            fontWeight: 400,
            fontStyle: "italic",
            opacity: p.opacity * exitDim,
            transform: `translateY(${p.y}px)`,
            letterSpacing: "0.01em",
          }}
        >
          {p.text}
        </div>
      ))}

      {/* Center question */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontFamily: F.sans,
            fontSize: 52,
            color: C.red,
            fontWeight: 600,
            letterSpacing: "0.02em",
            opacity: interpolate(local, [90, 105], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) * exitDim,
            transform: `translateY(${interpolate(local, [90, 105], [16, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}px)`,
          }}
        >
          Sound familiar?
        </div>
      </div>
    </div>
  );
};

// --- Scene 2: The Cut ---
const SceneCut: React.FC<{ frame: number }> = ({ frame }) => {
  const local = frame - T.cutStart;
  const line1 = fadeUp(local, 8, 16);
  const line2 = fadeUp(local, 36, 16);

  const exitStart = 72;
  const exit1 = fadeOut(local, exitStart, 10);
  const exit2 = fadeOut(local, exitStart + 3, 10);
  const inExit = local >= exitStart;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: sceneOp(frame, T.cutStart, T.cutEnd),
      }}
    >
      <div
        style={{
          fontFamily: F.serif,
          fontSize: 108,
          color: C.text,
          textAlign: "center",
          lineHeight: 1.2,
          ...(inExit ? exit1 : line1),
        }}
      >
        Opinions everywhere.
      </div>
      <div
        style={{
          width: 60,
          height: 2,
          background: "rgba(255,255,255,0.08)",
          margin: "36px 0",
          opacity: inExit ? exit2.opacity : line2.opacity,
        }}
      />
      <div
        style={{
          fontFamily: F.serif,
          fontSize: 120,
          color: C.accent,
          textAlign: "center",
          lineHeight: 1.2,
          ...(inExit ? exit2 : line2),
        }}
      >
        Answers nowhere.
      </div>
    </div>
  );
};

// --- Calculator Card Component ---
interface CalcCardProps {
  frame: number;
  start: number;
  end: number;
  category: string;
  title: string;
  resultLabel: string;
  resultValue: string;
  resultColor: string;
  detail: string;
  insight: string;
}

const CalcCard: React.FC<CalcCardProps> = ({
  frame, start, end, category, title, resultLabel, resultValue, resultColor, detail, insight,
}) => {
  const local = frame - start;
  const catAnim = fadeUp(local, 6, 10);
  const titleAnim = fadeUp(local, 14, 14);
  const resultAnim = fadeUp(local, 30, 12);
  const detailAnim = fadeUp(local, 42, 10);
  const insightAnim = fadeUp(local, 56, 10);

  const exitStart = end - start - 18;
  const inExit = local >= exitStart;
  const catExit = fadeOut(local, exitStart, 8);
  const titleExit = fadeOut(local, exitStart + 2, 8);
  const resultExit = fadeOut(local, exitStart + 3, 8);
  const detailExit = fadeOut(local, exitStart + 4, 8);

  // Result number scale-in
  const resultScale = interpolate(local, [30, 42], [0.85, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.back(1.3)),
  });

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: sceneOp(frame, start, end),
        padding: "160px",
      }}
    >
      {/* Category pill */}
      <div
        style={{
          fontFamily: F.sans,
          fontSize: 30,
          fontWeight: 600,
          color: C.dim,
          textTransform: "uppercase" as const,
          letterSpacing: "0.14em",
          marginBottom: 24,
          ...(inExit ? catExit : catAnim),
        }}
      >
        {category}
      </div>

      {/* Calculator title */}
      <div
        style={{
          fontFamily: F.serif,
          fontSize: 80,
          color: C.text,
          textAlign: "center",
          lineHeight: 1.2,
          marginBottom: 64,
          ...(inExit ? titleExit : titleAnim),
        }}
      >
        {title}
      </div>

      {/* Result */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
          ...(inExit ? resultExit : resultAnim),
        }}
      >
        <div
          style={{
            fontFamily: F.sans,
            fontSize: 28,
            color: C.dim,
            fontWeight: 500,
            textTransform: "uppercase" as const,
            letterSpacing: "0.1em",
          }}
        >
          {resultLabel}
        </div>
        <div
          style={{
            fontFamily: F.serif,
            fontSize: 180,
            color: resultColor,
            lineHeight: 1,
            transform: `scale(${inExit ? 1 : resultScale})`,
          }}
        >
          {resultValue}
        </div>
        <div
          style={{
            fontFamily: F.sans,
            fontSize: 36,
            color: C.dim,
            fontWeight: 400,
            ...(inExit ? detailExit : detailAnim),
          }}
        >
          {detail}
        </div>
      </div>

      {/* Framework insight */}
      <div
        style={{
          fontFamily: F.sans,
          fontSize: 34,
          color: `${resultColor}cc`,
          fontWeight: 500,
          textAlign: "center",
          marginTop: 48,
          maxWidth: 1400,
          lineHeight: 1.5,
          ...(inExit ? detailExit : insightAnim),
        }}
      >
        {insight}
      </div>
    </div>
  );
};

// --- Scene 7: The Frame ---
const SceneFrame: React.FC<{ frame: number }> = ({ frame }) => {
  const local = frame - T.frameStart;
  const line1 = fadeUp(local, 8, 14);
  const line2 = fadeUp(local, 30, 14);
  const countAnim = fadeUp(local, 52, 12);

  const exitStart = 84;
  const inExit = local >= exitStart;
  const exit1 = fadeOut(local, exitStart, 10);
  const exit2 = fadeOut(local, exitStart + 3, 10);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: sceneOp(frame, T.frameStart, T.frameEnd),
      }}
    >
      <div
        style={{
          fontFamily: F.serif,
          fontSize: 96,
          color: C.text,
          textAlign: "center",
          lineHeight: 1.25,
          ...(inExit ? exit1 : line1),
        }}
      >
        Not just a number.
      </div>
      <div
        style={{
          fontFamily: F.serif,
          fontSize: 96,
          color: C.accent,
          textAlign: "center",
          lineHeight: 1.25,
          marginTop: 20,
          ...(inExit ? exit2 : line2),
        }}
      >
        A framework to think with.
      </div>
      <div
        style={{
          fontFamily: F.sans,
          fontSize: 40,
          color: C.dim,
          marginTop: 56,
          fontWeight: 500,
          letterSpacing: "0.04em",
          ...(inExit ? exit2 : countAnim),
        }}
      >
        82 calculators. Free. Evidence-based.
      </div>
    </div>
  );
};

// --- Scene 8: CTA ---
const SceneCTA: React.FC<{ frame: number }> = ({ frame }) => {
  const local = frame - T.ctaStart;
  const dotAnim = fadeUp(local, 6, 12);
  const urlAnim = fadeUp(local, 14, 16);
  const tagAnim = fadeUp(local, 36, 12);
  const pulseAnim = fadeUp(local, 54, 12);

  // Brand pulse
  const pulsePhase = (local * 1.0) % 42;
  const pulseScale = interpolate(pulsePhase, [0, 42], [1, 3.5], { extrapolateRight: "clamp" });
  const pulseOpacity = interpolate(pulsePhase, [0, 42], [0.5, 0], { extrapolateRight: "clamp", easing: Easing.out(Easing.quad) });

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: sceneOp(frame, T.ctaStart, T.ctaEnd),
      }}
    >
      {/* Brand dot */}
      <div style={{ position: "relative", width: 20, height: 20, marginBottom: 56, ...dotAnim }}>
        <div style={{ width: 20, height: 20, borderRadius: "50%", background: C.accent, boxShadow: `0 0 16px rgba(232,155,62,0.3)` }} />
        {local > 6 && (
          <div style={{ position: "absolute", inset: -12, borderRadius: "50%", border: `3px solid ${C.accent}`, opacity: pulseOpacity, transform: `scale(${pulseScale})` }} />
        )}
      </div>

      <div
        style={{
          fontFamily: F.serif,
          fontSize: 108,
          color: C.text,
          textAlign: "center",
          marginBottom: 64,
          ...urlAnim,
        }}
      >
        healthcalculators.xyz
      </div>

      <div
        style={{
          fontFamily: F.sans,
          fontSize: 36,
          color: C.dim,
          letterSpacing: "0.04em",
          fontWeight: 500,
          ...tagAnim,
        }}
      >
        Free. Evidence-based. No signup.
      </div>

      <div
        style={{
          fontFamily: F.sans,
          fontSize: 32,
          color: `${C.accent}99`,
          letterSpacing: "0.06em",
          fontWeight: 500,
          marginTop: 48,
          ...pulseAnim,
        }}
      >
        Pulse — your personal health companion — coming soon.
      </div>
    </div>
  );
};

// --- Main ---
export const PinnedPost: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <div
      style={{
        width: 2160,
        height: 2160,
        background: C.bg,
        position: "relative",
        overflow: "hidden",
        fontFamily: F.sans,
        color: C.text,
      }}
    >
      {/* Film grain */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`, pointerEvents: "none", zIndex: 1000, opacity: 0.5 }} />
      {/* Vignette */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.4) 100%)", pointerEvents: "none", zIndex: 999 }} />

      <SceneNoise frame={frame} />
      <SceneCut frame={frame} />

      {/* Calculator showcase — 4 cards */}
      <CalcCard
        frame={frame}
        start={T.calc1Start}
        end={T.calc1End}
        category="Nutrition"
        title="How many calories do you actually burn?"
        resultLabel="Your TDEE"
        resultValue="2,340"
        resultColor={C.green}
        detail="calories per day · moderately active"
        insight="Not a guess. Mifflin-St Jeor equation + your activity level."
      />

      <CalcCard
        frame={frame}
        start={T.calc2Start}
        end={T.calc2End}
        category="Lifestyle"
        title="When does your caffeine actually wear off?"
        resultLabel="Half-life"
        resultValue="5.7h"
        resultColor={C.teal}
        detail="Last coffee at 2 PM → 50% still active at 7:42 PM"
        insight="Your 'I can sleep fine after coffee' is a feeling. This is the math."
      />

      <CalcCard
        frame={frame}
        start={T.calc3Start}
        end={T.calc3End}
        category="Fitness"
        title="What's your actual body composition?"
        resultLabel="Body fat"
        resultValue="24%"
        resultColor={C.accent}
        detail="Navy method · based on your measurements"
        insight="BMI says 'overweight.' Body fat says 'athletic.' The frame matters."
      />

      <CalcCard
        frame={frame}
        start={T.calc4Start}
        end={T.calc4End}
        category="Medications"
        title="What weight loss can you realistically expect?"
        resultLabel="Projected at 6 months"
        resultValue="-32 lb"
        resultColor={C.red}
        detail="Based on semaglutide clinical trial data"
        insight="Not a promise. A projection based on 3,731 patients in STEP 1."
      />

      <SceneFrame frame={frame} />
      <SceneCTA frame={frame} />

      {/* Watermark */}
      <div style={{ position: "absolute", bottom: 56, left: "50%", transform: "translateX(-50%)", fontFamily: F.sans, fontSize: 26, color: "rgba(255,255,255,0.12)", letterSpacing: "0.06em", fontWeight: 500, zIndex: 998 }}>
        healthcalculators.xyz
      </div>
    </div>
  );
};
