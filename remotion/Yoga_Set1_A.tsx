import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

// SORA YOGA — REEL A: "What Pigeon Pose Actually Does"
// Whitespace: Anatomical explainer (Gap 1) — what happens INSIDE during a common pose
// Hook: "You've done this 1,000 times." → Reveal what's actually stretching
// 2160×2160 square, 30fps, 18s = 540 frames

const C = {
  bg: "#F5F0E8",        // soft cream
  stone: "#C4B5A0",     // warm stone
  forest: "#2D4A3E",    // deep forest
  charcoal: "#3A3A3A",  // charcoal
  accent: "#8B5E3C",    // warm brown (muscle highlight)
  nerve: "#D4785C",     // warm coral (nerve pathway)
  bone: "#E8DDD0",      // light bone color
  dim: "#A09484",        // muted text
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
    transform: `translateY(${ease(frame, start, dur, 50, 0)}px)`,
  };
}

function sceneVis(frame: number, start: number, end: number, fi = 12, fo = 12) {
  if (frame < start - 3 || frame > end + fo + 3) return 0;
  return Math.min(
    interpolate(frame, [start, start + fi], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    interpolate(frame, [end, end + Math.max(fo, 1)], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
  );
}

// Hip anatomy diagram — simplified pelvis + femur + piriformis
function HipDiagram({ frame, start }: { frame: number; start: number }) {
  const muscleReveal = ease(frame, start + 20, 30, 0, 1);
  const nerveReveal = ease(frame, start + 55, 25, 0, 1);
  const pulsePhase = Math.sin((frame - start) * 0.08) * 0.15;

  return (
    <svg width={1400} height={1200} viewBox="0 0 1400 1200" style={{ overflow: "visible" }}>
      {/* Pelvis outline — simplified anatomical shape */}
      <path
        d="M 400 200 C 400 200, 500 100, 700 100 C 900 100, 1000 200, 1000 200 L 1000 400 C 1000 500, 900 550, 800 500 L 700 450 L 600 500 C 500 550, 400 500, 400 400 Z"
        fill={C.bone}
        stroke={C.stone}
        strokeWidth={3}
        opacity={ease(frame, start, 20, 0, 0.8)}
      />

      {/* Sacrum */}
      <path
        d="M 620 350 L 700 250 L 780 350 L 750 450 L 650 450 Z"
        fill={C.bone}
        stroke={C.stone}
        strokeWidth={2}
        opacity={ease(frame, start + 5, 18, 0, 0.7)}
      />

      {/* Femur head — right side (the stretched leg) */}
      <circle cx={850} cy={520} r={65}
        fill={C.bone} stroke={C.stone} strokeWidth={3}
        opacity={ease(frame, start + 10, 16, 0, 0.8)}
      />
      {/* Femur shaft */}
      <line x1={850} y1={585} x2={900} y2={900}
        stroke={C.stone} strokeWidth={20} strokeLinecap="round"
        opacity={ease(frame, start + 12, 16, 0, 0.7)}
      />

      {/* Femur — left side (the forward leg, rotated for pigeon) */}
      <circle cx={550} cy={520} r={65}
        fill={C.bone} stroke={C.stone} strokeWidth={3}
        opacity={ease(frame, start + 10, 16, 0, 0.8)}
      />
      <line x1={550} y1={585} x2={350} y2={850}
        stroke={C.stone} strokeWidth={20} strokeLinecap="round"
        opacity={ease(frame, start + 12, 16, 0, 0.7)}
      />

      {/* PIRIFORMIS MUSCLE — the star of the show */}
      <path
        d="M 660 380 C 700 420, 760 460, 830 490 C 840 495, 840 510, 830 515 C 760 500, 700 470, 650 420 C 640 410, 645 385, 660 380 Z"
        fill={`rgba(139, 94, 60, ${muscleReveal * (0.7 + pulsePhase)})`}
        stroke={C.accent}
        strokeWidth={muscleReveal * 3}
        opacity={muscleReveal}
      />

      {/* Muscle label */}
      <g opacity={ease(frame, start + 40, 16, 0, 1)}>
        <line x1={780} y1={460} x2={950} y2={350}
          stroke={C.accent} strokeWidth={2} strokeDasharray="6,4" />
        <text x={960} y={345} fill={C.accent}
          fontSize={42} fontFamily={F.sans} fontWeight={600}>
          piriformis
        </text>
        <text x={960} y={390} fill={C.dim}
          fontSize={32} fontFamily={F.sans}>
          deep hip rotator
        </text>
      </g>

      {/* SCIATIC NERVE — revealed after muscle */}
      <path
        d="M 700 400 C 720 450, 750 500, 820 540 C 850 560, 870 620, 880 700 C 890 780, 895 850, 900 950"
        fill="none"
        stroke={C.nerve}
        strokeWidth={nerveReveal * 8}
        strokeLinecap="round"
        strokeDasharray={`${nerveReveal * 600}`}
        strokeDashoffset={0}
        opacity={nerveReveal * 0.8}
      />

      {/* Nerve label */}
      <g opacity={ease(frame, start + 70, 16, 0, 1)}>
        <line x1={890} y1={700} x2={1050} y2={650}
          stroke={C.nerve} strokeWidth={2} strokeDasharray="6,4" />
        <text x={1060} y={645} fill={C.nerve}
          fontSize={42} fontFamily={F.sans} fontWeight={600}>
          sciatic nerve
        </text>
        <text x={1060} y={690} fill={C.dim}
          fontSize={32} fontFamily={F.sans}>
          runs underneath
        </text>
      </g>

      {/* Stretch direction arrows — showing external rotation */}
      <g opacity={ease(frame, start + 85, 16, 0, 0.6)}>
        <path d="M 500 600 C 450 650, 380 720, 340 800"
          fill="none" stroke={C.forest} strokeWidth={4}
          markerEnd="url(#arrowGreen)" />
        <defs>
          <marker id="arrowGreen" markerWidth="12" markerHeight="12"
            refX="10" refY="6" orient="auto">
            <path d="M 0 0 L 12 6 L 0 12 Z" fill={C.forest} />
          </marker>
        </defs>
      </g>
    </svg>
  );
}

export const Yoga_Set1_A: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <div style={{
      width: 2160, height: 2160, background: C.bg,
      overflow: "hidden", position: "relative", fontFamily: F.sans,
    }}>
      {/* Subtle grain texture */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.04, pointerEvents: "none", zIndex: 100,
        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
      }} />

      {/* Warm gradient wash — top */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 600,
        background: `linear-gradient(180deg, rgba(196,181,160,0.15) 0%, transparent 100%)`,
      }} />

      {/* ═══ SCENE 1: HOOK (0–120) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 0, 120),
        padding: "120px 120px",
        gap: 40,
      }}>
        {/* Pose name — understated */}
        <div style={{
          ...fadeUp(frame, 3, 16),
          fontSize: 52, color: C.dim, fontFamily: F.mono, letterSpacing: 6,
          textTransform: "uppercase",
        }}>
          pigeon pose
        </div>

        {/* Big hook text */}
        <div style={{
          ...fadeUp(frame, 15, 20),
          fontSize: 120, color: C.charcoal, fontFamily: F.serif,
          textAlign: "center", lineHeight: 1.2, maxWidth: 1600,
        }}>
          You've done this
          <br />
          <span style={{ color: C.forest }}>1,000 times.</span>
        </div>

        {/* Separator line */}
        <div style={{
          ...fadeUp(frame, 50, 14),
          width: 800, height: 3,
          background: `linear-gradient(90deg, transparent, ${C.stone}, transparent)`,
          marginTop: 20,
        }} />

        {/* Sub-hook */}
        <div style={{
          ...fadeUp(frame, 60, 16),
          fontSize: 64, color: C.dim, textAlign: "center", lineHeight: 1.5,
        }}>
          Here's what's actually
          <br />
          happening inside your hip.
        </div>
      </div>

      {/* ═══ SCENE 2: ANATOMY REVEAL (125–350) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 125, 350),
        padding: "80px 100px",
      }}>
        {/* Section label */}
        <div style={{
          ...fadeUp(frame, 128, 14),
          fontSize: 44, color: C.forest, fontFamily: F.mono, letterSpacing: 4,
          textTransform: "uppercase", marginBottom: 30,
        }}>
          inside your hip
        </div>

        {/* The anatomy diagram */}
        <div style={{
          ...fadeUp(frame, 132, 20),
          transform: `scale(${ease(frame, 132, 40, 0.9, 1)})`,
        }}>
          <HipDiagram frame={frame} start={135} />
        </div>

        {/* Explanation text — appears with nerve */}
        <div style={{
          ...fadeUp(frame, 230, 18),
          fontSize: 52, color: C.charcoal, textAlign: "center", lineHeight: 1.5,
          maxWidth: 1500, marginTop: 30,
        }}>
          The piriformis sits{" "}
          <span style={{ color: C.nerve, fontWeight: 700 }}>directly on top</span>
          {" "}of your sciatic nerve.
        </div>
      </div>

      {/* ═══ SCENE 3: THE INSIGHT (355–445) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 355, 445),
        padding: "120px 120px",
        gap: 50,
      }}>
        {/* Key insight */}
        <div style={{
          ...fadeUp(frame, 358, 18),
          fontSize: 84, color: C.charcoal, fontFamily: F.serif,
          textAlign: "center", lineHeight: 1.3, maxWidth: 1600,
        }}>
          When it's tight,
          <br />
          it <span style={{ color: C.nerve }}>compresses the nerve.</span>
        </div>

        {/* Visual: compression indicator */}
        <div style={{
          ...fadeUp(frame, 380, 16),
          display: "flex", alignItems: "center", gap: 40,
        }}>
          <div style={{
            width: ease(frame, 385, 20, 200, 80),
            height: 12,
            background: C.nerve,
            borderRadius: 6,
            transition: "width 0.1s",
          }} />
          <div style={{
            fontSize: 44, color: C.dim, fontFamily: F.mono,
          }}>
            compressed
          </div>
        </div>

        {/* Resolution */}
        <div style={{
          ...fadeUp(frame, 405, 16),
          fontSize: 60, color: C.forest, textAlign: "center", lineHeight: 1.5,
          maxWidth: 1500,
        }}>
          Pigeon pose externally rotates the femur,
          <br />
          <span style={{ fontWeight: 700 }}>releasing the piriformis off the nerve.</span>
        </div>

        <div style={{
          ...fadeUp(frame, 425, 14),
          fontSize: 42, color: C.dim, fontStyle: "italic",
        }}>
          That's the relief you feel.
        </div>
      </div>

      {/* ═══ SCENE 4: CTA (450–540) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 450, 540, 14, 1),
        padding: "120px 120px",
        gap: 50,
      }}>
        <div style={{
          ...fadeUp(frame, 453, 18),
          fontSize: 80, color: C.charcoal, fontFamily: F.serif,
          textAlign: "center", lineHeight: 1.3,
        }}>
          Your teacher adjusts
          <br />
          what your body
          <br />
          <span style={{ color: C.forest }}>can't see.</span>
        </div>

        <div style={{
          ...fadeUp(frame, 480, 14),
          width: 600, height: 3,
          background: `linear-gradient(90deg, transparent, ${C.forest}, transparent)`,
        }} />

        <div style={{
          ...fadeUp(frame, 490, 14),
          fontSize: 40, color: C.dim, letterSpacing: 6,
          textTransform: "uppercase", fontFamily: F.mono,
        }}>
          SORA Yoga · Portland
        </div>

        <div style={{
          ...fadeUp(frame, 500, 14),
          fontSize: 36, color: C.stone, letterSpacing: 2,
        }}>
          Max 12 students. Every adjustment matters.
        </div>
      </div>
    </div>
  );
};
