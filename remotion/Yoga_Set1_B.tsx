import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

// SORA YOGA — REEL B: "Warrior II: What I Fix Every Class"
// Whitespace: Alignment correction (Gap 2) — wrong vs right, side by side
// Hook: "Your knees are telling on you" → Split-screen correction
// 2160×2160 square, 30fps, 17s = 510 frames

const C = {
  bg: "#F5F0E8",
  stone: "#C4B5A0",
  forest: "#2D4A3E",
  charcoal: "#3A3A3A",
  wrong: "#C2665A",      // warm red — the mistake
  right: "#2D4A3E",      // forest green — the correction
  bone: "#E8DDD0",
  dim: "#A09484",
  divider: "#D4C8B8",
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

// Leg alignment diagram — front view of knee/ankle/foot
function LegDiagram({
  frame, start, variant, side,
}: {
  frame: number; start: number; variant: "wrong" | "right"; side: "left" | "right";
}) {
  const reveal = ease(frame, start, 25, 0, 1);
  const isWrong = variant === "wrong";
  const color = isWrong ? C.wrong : C.right;

  // Knee offset for wrong alignment — collapses inward
  const kneeInward = isWrong ? 60 : 0;
  // Ankle position
  const ankleX = 300;
  const kneeX = ankleX - kneeInward;

  // Angle indicator
  const angleReveal = ease(frame, start + 30, 20, 0, 1);

  return (
    <svg width={600} height={900} viewBox="0 0 600 900" style={{ overflow: "visible" }}>
      {/* Thigh */}
      <line
        x1={300} y1={100} x2={kneeX} y2={450}
        stroke={C.bone} strokeWidth={55} strokeLinecap="round"
        opacity={reveal}
      />

      {/* Shin */}
      <line
        x1={kneeX} y1={450} x2={ankleX} y2={780}
        stroke={C.bone} strokeWidth={48} strokeLinecap="round"
        opacity={reveal}
      />

      {/* Knee joint */}
      <circle cx={kneeX} cy={450} r={45}
        fill={C.bone} stroke={color} strokeWidth={reveal * 5}
        opacity={reveal}
      />

      {/* Foot */}
      <ellipse cx={ankleX} cy={820} rx={80} ry={30}
        fill={C.bone} stroke={C.stone} strokeWidth={2}
        opacity={reveal}
      />

      {/* Ankle point */}
      <circle cx={ankleX} cy={785} r={20}
        fill={C.bone} stroke={C.stone} strokeWidth={2}
        opacity={reveal}
      />

      {/* Alignment line — vertical reference from ankle */}
      <line
        x1={ankleX} y1={100} x2={ankleX} y2={850}
        stroke={color}
        strokeWidth={3}
        strokeDasharray="12,8"
        opacity={angleReveal * 0.5}
      />

      {/* Knee position indicator */}
      {isWrong && (
        <g opacity={angleReveal}>
          {/* Arrow showing inward collapse */}
          <path
            d={`M ${ankleX - 10} 440 L ${kneeX + 20} 440`}
            fill="none" stroke={C.wrong} strokeWidth={4}
            markerEnd="url(#arrowWrong)"
          />
          <defs>
            <marker id="arrowWrong" markerWidth="10" markerHeight="10"
              refX="8" refY="5" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 Z" fill={C.wrong} />
            </marker>
          </defs>
          {/* X mark */}
          <g transform={`translate(${kneeX - 80}, 420)`}>
            <line x1={0} y1={0} x2={40} y2={40} stroke={C.wrong} strokeWidth={6} strokeLinecap="round" />
            <line x1={40} y1={0} x2={0} y2={40} stroke={C.wrong} strokeWidth={6} strokeLinecap="round" />
          </g>
        </g>
      )}

      {!isWrong && (
        <g opacity={angleReveal}>
          {/* Check mark */}
          <g transform={`translate(${kneeX - 80}, 420)`}>
            <path d="M 5 22 L 18 35 L 42 8" fill="none" stroke={C.right} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
          </g>
          {/* "Tracks over ankle" arc */}
          <path
            d={`M ${ankleX} 790 Q ${ankleX} 620 ${kneeX} 450`}
            fill="none" stroke={C.right} strokeWidth={3}
            strokeDasharray="8,6"
            opacity={0.4}
          />
        </g>
      )}

      {/* Stress zone — knee shows strain */}
      {isWrong && (
        <circle cx={kneeX} cy={450} r={ease(frame, start + 40, 15, 45, 70)}
          fill="none" stroke={C.wrong}
          strokeWidth={3}
          opacity={angleReveal * (0.3 + 0.1 * Math.sin(frame * 0.12))}
        />
      )}
    </svg>
  );
}

export const Yoga_Set1_B: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <div style={{
      width: 2160, height: 2160, background: C.bg,
      overflow: "hidden", position: "relative", fontFamily: F.sans,
    }}>
      {/* Grain */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.04, pointerEvents: "none", zIndex: 100,
        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
      }} />

      {/* ═══ SCENE 1: HOOK (0–110) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 0, 110),
        padding: "120px 120px",
        gap: 40,
      }}>
        <div style={{
          ...fadeUp(frame, 3, 16),
          fontSize: 52, color: C.dim, fontFamily: F.mono, letterSpacing: 6,
          textTransform: "uppercase",
        }}>
          warrior II
        </div>

        <div style={{
          ...fadeUp(frame, 15, 20),
          fontSize: 110, color: C.charcoal, fontFamily: F.serif,
          textAlign: "center", lineHeight: 1.2, maxWidth: 1700,
        }}>
          Your knees are
          <br />
          <span style={{ color: C.wrong }}>telling on you.</span>
        </div>

        <div style={{
          ...fadeUp(frame, 50, 14),
          width: 800, height: 3,
          background: `linear-gradient(90deg, transparent, ${C.wrong}80, transparent)`,
        }} />

        <div style={{
          ...fadeUp(frame, 60, 16),
          fontSize: 56, color: C.dim, textAlign: "center", lineHeight: 1.5,
        }}>
          The #1 thing I correct
          <br />
          in every single class.
        </div>
      </div>

      {/* ═══ SCENE 2: WRONG ALIGNMENT (115–250) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 115, 250),
        padding: "80px 100px",
        gap: 20,
      }}>
        {/* Label */}
        <div style={{
          ...fadeUp(frame, 118, 14),
          fontSize: 48, color: C.wrong, fontFamily: F.mono, letterSpacing: 4,
          textTransform: "uppercase",
        }}>
          what I see
        </div>

        {/* Diagram */}
        <div style={{
          ...fadeUp(frame, 122, 20),
          display: "flex", justifyContent: "center",
        }}>
          <LegDiagram frame={frame} start={125} variant="wrong" side="left" />
        </div>

        {/* Explanation */}
        <div style={{
          ...fadeUp(frame, 170, 18),
          fontSize: 54, color: C.charcoal, textAlign: "center", lineHeight: 1.5,
          maxWidth: 1500,
        }}>
          Knee collapses <span style={{ color: C.wrong, fontWeight: 700 }}>inward</span>
          <br />
          past the ankle line.
        </div>

        <div style={{
          ...fadeUp(frame, 195, 16),
          fontSize: 44, color: C.dim, textAlign: "center", lineHeight: 1.5,
        }}>
          Loads the MCL. Compresses the meniscus.
          <br />
          <span style={{ fontStyle: "italic" }}>Every rep.</span>
        </div>
      </div>

      {/* ═══ SCENE 3: CORRECT ALIGNMENT — SPLIT COMPARISON (255–400) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 255, 400),
        padding: "80px 80px",
        gap: 20,
      }}>
        {/* Split label */}
        <div style={{
          ...fadeUp(frame, 258, 14),
          fontSize: 48, color: C.right, fontFamily: F.mono, letterSpacing: 4,
          textTransform: "uppercase",
        }}>
          the fix
        </div>

        {/* Side-by-side diagrams */}
        <div style={{
          ...fadeUp(frame, 262, 20),
          display: "flex", alignItems: "flex-start", gap: 40,
          justifyContent: "center", width: "100%",
        }}>
          {/* Wrong side — faded */}
          <div style={{
            display: "flex", flexDirection: "column", alignItems: "center",
            opacity: 0.4,
          }}>
            <div style={{
              fontSize: 38, color: C.wrong, fontFamily: F.mono,
              letterSpacing: 3, marginBottom: 10,
            }}>BEFORE</div>
            <LegDiagram frame={frame} start={265} variant="wrong" side="left" />
          </div>

          {/* Divider */}
          <div style={{
            width: 4, height: 900,
            background: `linear-gradient(180deg, transparent, ${C.divider}, transparent)`,
            marginTop: 60,
          }} />

          {/* Right side — highlighted */}
          <div style={{
            display: "flex", flexDirection: "column", alignItems: "center",
          }}>
            <div style={{
              fontSize: 38, color: C.right, fontFamily: F.mono,
              letterSpacing: 3, marginBottom: 10,
            }}>AFTER</div>
            <LegDiagram frame={frame} start={270} variant="right" side="right" />
          </div>
        </div>

        {/* The cue */}
        <div style={{
          ...fadeUp(frame, 330, 18),
          fontSize: 56, color: C.charcoal, textAlign: "center", lineHeight: 1.4,
          maxWidth: 1600,
        }}>
          <span style={{ fontFamily: F.serif, fontStyle: "italic" }}>"Press your knee toward your pinky toe."</span>
        </div>

        <div style={{
          ...fadeUp(frame, 360, 16),
          fontSize: 44, color: C.forest, fontWeight: 600,
          textAlign: "center",
        }}>
          Knee tracks over ankle. Joint stays safe.
        </div>
      </div>

      {/* ═══ SCENE 4: CTA (405–510) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 405, 510, 14, 1),
        padding: "120px 120px",
        gap: 50,
      }}>
        <div style={{
          ...fadeUp(frame, 408, 18),
          fontSize: 80, color: C.charcoal, fontFamily: F.serif,
          textAlign: "center", lineHeight: 1.3,
        }}>
          12 students.
          <br />
          <span style={{ color: C.forest }}>Every knee gets seen.</span>
        </div>

        <div style={{
          ...fadeUp(frame, 438, 14),
          width: 600, height: 3,
          background: `linear-gradient(90deg, transparent, ${C.forest}, transparent)`,
        }} />

        <div style={{
          ...fadeUp(frame, 450, 14),
          fontSize: 48, color: C.dim, textAlign: "center", lineHeight: 1.5,
        }}>
          Send this to someone who
          <br />
          needs to hear it.
        </div>

        <div style={{
          ...fadeUp(frame, 475, 14),
          fontSize: 40, color: C.stone, letterSpacing: 6,
          textTransform: "uppercase", fontFamily: F.mono,
        }}>
          SORA Yoga · Portland
        </div>
      </div>
    </div>
  );
};
