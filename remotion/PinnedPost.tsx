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

// --- Timing: ~46s = 1380 frames at 30fps ---
// Scene 1: The Noise (0-6.5s) — slow start, fills screen, accelerating
// Scene 2: The Cut (7-11s) — "Opinions everywhere. Numbers everywhere. Answers nowhere."
// Scene 3: The Pulse (11-16s) — green dot + "Your numbers. What they actually mean in context."
// Scene 4-6: Calculator showcase (16.5-39s) — 3 calculators, 7.5s each (full pauses)
// Scene 7: The Frame (39-43s) — "Not just a number. We give you a framework."
// Scene 8: CTA (43-46s) — brand dot + URL + Pulse tease

const T = {
  noiseStart: 0,
  noiseEnd: 195,        // 6.5s
  cutStart: 204,
  cutEnd: 330,          // 11s
  pulseStart: 336,
  pulseEnd: 480,        // 16s
  calc1Start: 488,
  calc1End: 713,        // ~23.8s — 7.5s per card with full pauses
  calc2Start: 721,
  calc2End: 946,        // ~31.5s
  calc3Start: 954,
  calc3End: 1170,       // 39s
  frameStart: 1178,
  frameEnd: 1290,       // 43s
  ctaStart: 1298,
  ctaEnd: 1380,         // 46s
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

// --- Scene 1: The Noise — slow start, then acceleration, fills the screen ---
const NOISE_PHRASES = [
  // First 3: slow, centered, readable
  { text: '"Consult your doctor."', top: "35%", left: "50%", anchor: true },
  { text: '"It depends on your body."', top: "47%", left: "50%", anchor: true },
  { text: '"Everyone is different."', top: "59%", left: "50%", anchor: true },
  // Next wave: faster, scattered, filling the screen
  { text: '"Drink more water."', top: "20%", left: "25%" },
  { text: '"Listen to your body."', top: "28%", left: "68%" },
  { text: '"Results may vary."', top: "68%", left: "28%" },
  { text: '"Everything in moderation."', top: "42%", left: "72%" },
  { text: '"Just eat less, move more."', top: "75%", left: "55%" },
  // Final burst: rapid, dense
  { text: '"Get more sleep."', top: "16%", left: "48%" },
  { text: '"Reduce stress."', top: "52%", left: "22%" },
  { text: '"Ask your healthcare provider."', top: "82%", left: "38%" },
  { text: '"It\'s all about balance."', top: "24%", left: "42%" },
];

const SceneNoise: React.FC<{ frame: number }> = ({ frame }) => {
  const local = frame - T.noiseStart;

  // First 3: slow, centered, readable. Next 5: medium. Last 4: rapid burst.
  const timings = [
    { start: 8, hold: 42 },    // "Consult your doctor" — 1.4s visible alone
    { start: 38, hold: 38 },   // "It depends on your body"
    { start: 66, hold: 34 },   // "Everyone is different" — pace picking up
    { start: 88, hold: 22 },   // Scattered wave
    { start: 98, hold: 20 },
    { start: 106, hold: 18 },
    { start: 112, hold: 16 },
    { start: 118, hold: 16 },
    // Rapid burst — fills the screen
    { start: 122, hold: 14 },
    { start: 126, hold: 14 },
    { start: 129, hold: 14 },
    { start: 132, hold: 14 },
  ];

  // "Sound familiar?" appears after the chaos
  const familiarOpacity = interpolate(local, [140, 155], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const familiarY = interpolate(local, [140, 155], [16, 0], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic),
  });

  // Everything dims at exit
  const exitDim = interpolate(local, [172, 190], [1, 0], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  return (
    <div style={{ position: "absolute", inset: 0, opacity: sceneOp(frame, T.noiseStart, T.noiseEnd) }}>
      {NOISE_PHRASES.map((p, i) => {
        const t = timings[i];
        const isEarly = i < 3;
        const opacity = interpolate(
          local,
          [t.start, t.start + (isEarly ? 12 : 6), t.start + t.hold, t.start + t.hold + 8],
          [0, isEarly ? 0.85 : 0.5, isEarly ? 0.85 : 0.5, 0.12],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
        );
        const y = interpolate(local, [t.start, t.start + (isEarly ? 12 : 6)], [16, 0], {
          extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic),
        });

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              top: p.top,
              left: p.left,
              transform: `translate(-50%, -50%) translateY(${y}px)`,
              fontFamily: F.sans,
              fontSize: isEarly ? 58 : 44,
              color: C.dim,
              fontWeight: isEarly ? 400 : 400,
              fontStyle: "italic",
              opacity: opacity * exitDim,
              textAlign: "center",
              letterSpacing: "0.01em",
              whiteSpace: "nowrap",
            }}
          >
            {p.text}
          </div>
        );
      })}

      {/* "Sound familiar?" */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) translateY(${familiarY}px)`,
          fontFamily: F.sans,
          fontSize: 64,
          color: C.red,
          fontWeight: 600,
          letterSpacing: "0.02em",
          opacity: familiarOpacity * exitDim,
        }}
      >
        Sound familiar?
      </div>
    </div>
  );
};

// --- Scene 2: The Cut ---
// "Opinions everywhere. Numbers everywhere. Answers nowhere."
const SceneCut: React.FC<{ frame: number }> = ({ frame }) => {
  const local = frame - T.cutStart;
  const line1 = fadeUp(local, 8, 16);
  const line2 = fadeUp(local, 32, 16);
  const line3 = fadeUp(local, 58, 18);

  const exitStart = 100;
  const exit1 = fadeOut(local, exitStart, 10);
  const exit2 = fadeOut(local, exitStart + 3, 10);
  const exit3 = fadeOut(local, exitStart + 5, 10);
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
          fontSize: 116,
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
          fontFamily: F.serif,
          fontSize: 116,
          color: C.text,
          textAlign: "center",
          lineHeight: 1.2,
          marginTop: 16,
          ...(inExit ? exit2 : line2),
        }}
      >
        Numbers everywhere.
      </div>
      <div
        style={{
          width: 60,
          height: 2,
          background: "rgba(255,255,255,0.08)",
          margin: "28px 0",
          opacity: inExit ? exit3.opacity : line3.opacity,
        }}
      />
      <div
        style={{
          fontFamily: F.serif,
          fontSize: 128,
          color: C.accent,
          textAlign: "center",
          lineHeight: 1.2,
          ...(inExit ? exit3 : line3),
        }}
      >
        Answers nowhere.
      </div>
    </div>
  );
};

// --- Scene 3: The Pulse — green dot + tagline bridge ---
const ScenePulse: React.FC<{ frame: number }> = ({ frame }) => {
  const local = frame - T.pulseStart;

  // Green dot pulse
  const dotAnim = fadeUp(local, 6, 14);
  const pulsePhase = (local * 0.9) % 48;
  const pulseScale = interpolate(pulsePhase, [0, 48], [1, 4], { extrapolateRight: "clamp" });
  const pulseOpacity = interpolate(pulsePhase, [0, 48], [0.5, 0], { extrapolateRight: "clamp", easing: Easing.out(Easing.quad) });

  const tagAnim = fadeUp(local, 20, 16);
  const subAnim = fadeUp(local, 42, 14);

  const exitStart = 114; // extended hold
  const inExit = local >= exitStart;
  const dotExit = fadeOut(local, exitStart, 10);
  const tagExit = fadeOut(local, exitStart + 3, 10);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: sceneOp(frame, T.pulseStart, T.pulseEnd),
      }}
    >
      {/* Green pulsing dot */}
      <div
        style={{
          position: "relative",
          width: 28,
          height: 28,
          marginBottom: 64,
          ...(inExit ? dotExit : dotAnim),
        }}
      >
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: C.green,
            boxShadow: `0 0 24px rgba(110,200,155,0.4)`,
          }}
        />
        {local > 6 && (
          <>
            <div style={{ position: "absolute", inset: -14, borderRadius: "50%", border: `3px solid ${C.green}`, opacity: pulseOpacity, transform: `scale(${pulseScale})` }} />
            <div style={{ position: "absolute", inset: -14, borderRadius: "50%", border: `2px solid ${C.green}`, opacity: pulseOpacity * 0.5, transform: `scale(${interpolate((pulsePhase + 18) % 48, [0, 48], [1, 4], { extrapolateRight: "clamp" })})` }} />
          </>
        )}
      </div>

      {/* Tagline */}
      <div
        style={{
          fontFamily: F.serif,
          fontSize: 120,
          color: C.text,
          textAlign: "center",
          lineHeight: 1.25,
          ...(inExit ? tagExit : tagAnim),
        }}
      >
        Your numbers.
        <br />
        <span style={{ color: C.green }}>We give you the context.</span>
      </div>

      <div
        style={{
          fontFamily: F.sans,
          fontSize: 44,
          color: C.dim,
          marginTop: 36,
          fontWeight: 500,
          letterSpacing: "0.04em",
          ...(inExit ? tagExit : subAnim),
        }}
      >
        82 evidence-based calculators. Free.
      </div>
    </div>
  );
};

// --- Calculator Card — progressive rollout like cortisol animation ---
interface CalcCardProps {
  frame: number;
  start: number;
  end: number;
  category: string;
  jobLine: string;         // JTBD hook — the job they're trying to get done
  questionLine: string;    // The specific question
  resultLabel: string;
  resultValue: string;
  resultColor: string;
  context: string;
  insight: string;
}

const CalcCard: React.FC<CalcCardProps> = ({
  frame, start, end, category, jobLine, questionLine, resultLabel, resultValue, resultColor, context, insight,
}) => {
  const local = frame - start;

  // Progressive rollout — deliberate pauses between each element
  const catAnim = fadeUp(local, 6, 10);
  const jobAnim = fadeUp(local, 16, 14);          // JTBD hook
  // ~~~ 1.3s PAUSE — the "huh" realization ~~~
  const questionAnim = fadeUp(local, 54, 14);     // Question/context line
  // ~~~ 1s PAUSE — let them read ~~~
  const resultLabelAnim = fadeUp(local, 84, 10);  // Result label
  const resultAnim = fadeUp(local, 90, 14);       // Number scales in
  const ctxAnim = fadeUp(local, 104, 10);         // Supporting detail
  // ~~~ 1s PAUSE — absorb the number ~~~
  const insightAnim = fadeUp(local, 134, 16);     // Framework insight — the learning
  // ~~~ 1.5s+ HOLD — people read the insight, absorb the stat ~~~

  // Exit — generous hold after insight
  const exitStart = end - start - 12;
  const inExit = local >= exitStart;
  const catExit = fadeOut(local, exitStart, 8);
  const jobExit = fadeOut(local, exitStart + 1, 8);
  const qExit = fadeOut(local, exitStart + 2, 8);
  const resultExit = fadeOut(local, exitStart + 3, 8);
  const ctxExit = fadeOut(local, exitStart + 4, 8);
  const insightExit = fadeOut(local, exitStart + 5, 8);

  const resultScale = interpolate(local, [90, 104], [0.85, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.back(1.3)),
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
        padding: "80px 100px 120px",
      }}
    >
      {/* Category — bigger for range signal */}
      <div style={{
        fontFamily: F.sans, fontSize: 44, fontWeight: 700, color: resultColor,
        textTransform: "uppercase" as const, letterSpacing: "0.16em",
        marginBottom: 28, ...(inExit ? catExit : catAnim),
      }}>
        {category}
      </div>

      {/* JTBD hook — the job they're trying to get done */}
      <div style={{
        fontFamily: F.serif, fontSize: 96, color: C.text,
        textAlign: "center", lineHeight: 1.2,
        marginBottom: 10, ...(inExit ? jobExit : jobAnim),
      }}>
        {jobLine}
      </div>

      {/* Specific question — appears after a beat */}
      <div style={{
        fontFamily: F.sans, fontSize: 46, color: C.dim,
        fontWeight: 400, textAlign: "center", lineHeight: 1.4,
        marginBottom: 40, ...(inExit ? qExit : questionAnim),
      }}>
        {questionLine}
      </div>

      {/* Result block — number is supporting, not hero */}
      <div style={{
        display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
      }}>
        <div style={{
          fontFamily: F.sans, fontSize: 30, color: C.dim, fontWeight: 500,
          textTransform: "uppercase" as const, letterSpacing: "0.1em",
          ...(inExit ? resultExit : resultLabelAnim),
        }}>
          {resultLabel}
        </div>
        <div style={{
          fontFamily: F.serif, fontSize: 140, color: resultColor, lineHeight: 1,
          transform: `scale(${inExit ? 1 : resultScale})`,
          ...(inExit ? { opacity: resultExit.opacity } : { opacity: resultAnim.opacity }),
        }}>
          {resultValue}
        </div>
        <div style={{
          fontFamily: F.sans, fontSize: 34, color: C.dim, fontWeight: 400,
          textAlign: "center", ...(inExit ? ctxExit : ctxAnim),
        }}>
          {context}
        </div>
      </div>

      {/* Framework insight — the LEARNING, visually prominent */}
      <div style={{
        fontFamily: F.serif, fontSize: 56, color: C.text,
        fontWeight: 400, textAlign: "center", marginTop: 40,
        maxWidth: 1800, lineHeight: 1.35, letterSpacing: "-0.01em",
        ...(inExit ? insightExit : insightAnim),
      }}>
        {insight}
      </div>
    </div>
  );
};

// --- Scene 8: The Frame ---
const SceneFrame: React.FC<{ frame: number }> = ({ frame }) => {
  const local = frame - T.frameStart;
  const line1 = fadeUp(local, 8, 14);
  const line2 = fadeUp(local, 30, 14);
  const countAnim = fadeUp(local, 52, 12);

  const exitStart = 90;
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
      <div style={{ fontFamily: F.serif, fontSize: 108, color: C.text, textAlign: "center", lineHeight: 1.25, ...(inExit ? exit1 : line1) }}>
        Not just a number.
      </div>
      <div style={{ fontFamily: F.serif, fontSize: 108, color: C.green, textAlign: "center", lineHeight: 1.25, marginTop: 20, ...(inExit ? exit2 : line2) }}>
        We give you a framework.
      </div>
      <div style={{ fontFamily: F.sans, fontSize: 44, color: C.dim, marginTop: 44, fontWeight: 500, letterSpacing: "0.04em", ...(inExit ? exit2 : countAnim) }}>
        Nutrition · Fitness · Health · Lifestyle · Longevity
      </div>
    </div>
  );
};

// --- Scene 9: CTA ---
const SceneCTA: React.FC<{ frame: number }> = ({ frame }) => {
  const local = frame - T.ctaStart;
  const dotAnim = fadeUp(local, 6, 12);
  const urlAnim = fadeUp(local, 14, 16);
  const tagAnim = fadeUp(local, 34, 12);
  const pulseTeaseAnim = fadeUp(local, 50, 12);

  const pulsePhase = (local * 0.9) % 48;
  const pulseScale = interpolate(pulsePhase, [0, 48], [1, 3.5], { extrapolateRight: "clamp" });
  const pulseOpacity = interpolate(pulsePhase, [0, 48], [0.5, 0], { extrapolateRight: "clamp", easing: Easing.out(Easing.quad) });

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
      <div style={{ position: "relative", width: 22, height: 22, marginBottom: 52, ...dotAnim }}>
        <div style={{ width: 22, height: 22, borderRadius: "50%", background: C.green, boxShadow: `0 0 18px rgba(110,200,155,0.35)` }} />
        {local > 6 && (
          <div style={{ position: "absolute", inset: -12, borderRadius: "50%", border: `3px solid ${C.green}`, opacity: pulseOpacity, transform: `scale(${pulseScale})` }} />
        )}
      </div>

      <div style={{ fontFamily: F.serif, fontSize: 116, color: C.text, textAlign: "center", marginBottom: 48, ...urlAnim }}>
        healthcalculators.xyz
      </div>

      <div style={{ fontFamily: F.sans, fontSize: 40, color: C.dim, letterSpacing: "0.04em", fontWeight: 500, ...tagAnim }}>
        Free. Evidence-based. No signup.
      </div>

      <div style={{ fontFamily: F.sans, fontSize: 36, color: `${C.green}88`, letterSpacing: "0.06em", fontWeight: 500, marginTop: 40, ...pulseTeaseAnim }}>
        Pulse — your personal health companion — coming soon
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
      <div style={{ position: "absolute", inset: 0, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`, pointerEvents: "none", zIndex: 1000, opacity: 0.5 }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.4) 100%)", pointerEvents: "none", zIndex: 999 }} />

      <SceneNoise frame={frame} />
      <SceneCut frame={frame} />
      <ScenePulse frame={frame} />

      <CalcCard
        frame={frame}
        start={T.calc1Start}
        end={T.calc1End}
        category="Lifestyle"
        jobLine="Can't fall asleep?"
        questionLine="Your 2 PM coffee is still half-active at 8 PM."
        resultLabel="Caffeine half-life"
        resultValue="5.7h"
        resultColor={C.teal}
        context="Last cup at 2:00 PM → 50% remaining at 7:42 PM"
        insight={'"I sleep fine after coffee" is a feeling. This is the math.'}
      />

      <CalcCard
        frame={frame}
        start={T.calc2Start}
        end={T.calc2End}
        category="Fitness"
        jobLine="Not seeing gym results?"
        questionLine="You're probably eating half the protein you need."
        resultLabel="Your daily target"
        resultValue="132g"
        resultColor={C.accent}
        context="0.82g per lb · 161 lb · strength training"
        insight="You're not under-training. You're under-eating."
      />

      <CalcCard
        frame={frame}
        start={T.calc3Start}
        end={T.calc3End}
        category="Health"
        jobLine="Always tired?"
        questionLine="Your vitamin D level might explain it."
        resultLabel="Your level"
        resultValue="18 ng"
        resultColor={C.red}
        context="Deficient · optimal range is 30–50 ng/mL"
        insight="42% of Americans are deficient. Most don't know."
      />

      <SceneFrame frame={frame} />
      <SceneCTA frame={frame} />

      <div style={{ position: "absolute", bottom: 56, left: "50%", transform: "translateX(-50%)", fontFamily: F.sans, fontSize: 26, color: "rgba(255,255,255,0.12)", letterSpacing: "0.06em", fontWeight: 500, zIndex: 998 }}>
        healthcalculators.xyz
      </div>
    </div>
  );
};
