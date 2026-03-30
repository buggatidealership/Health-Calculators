import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

// SORA YOGA — REEL C: "2 Minutes of Box Breathing"
// Whitespace: Nervous system science (Gap 3) — what breathing actually does
// Hook: Elevated heart rate number → box breathing pattern → HR drops live
// 2160×2160 square, 30fps, 18s = 540 frames

const C = {
  bg: "#2D4A3E",         // deep forest — dark reel, stands out in feed
  cream: "#F5F0E8",
  stone: "#C4B5A0",
  warm: "#D4A574",        // warm amber
  pulse: "#D4785C",       // heart rate coral
  calm: "#7DB8A5",        // calmed green
  charcoal: "#3A3A3A",
  dim: "#8BA89A",         // muted green text
  boxLine: "#C4B5A080",   // box breathing guide
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

// Animated breathing box — traces the 4 sides of a square
function BreathingBox({ frame, start }: { frame: number; start: number }) {
  const boxSize = 700;
  const padding = 80;
  const cx = 1080; // center of 2160
  const cy = 1080;
  const half = boxSize / 2;

  // One full cycle = 120 frames (4 seconds at 30fps — 1s per side)
  const cycleLength = 120;
  const sideLength = cycleLength / 4; // 30 frames per side
  const elapsed = Math.max(0, frame - start);
  const cyclePos = elapsed % cycleLength;

  // Which side are we on? 0=inhale(right), 1=hold(down), 2=exhale(left), 3=hold(up)
  const sideIndex = Math.floor(cyclePos / sideLength);
  const sideProgress = (cyclePos % sideLength) / sideLength;

  // Corner positions: top-left, top-right, bottom-right, bottom-left
  const corners = [
    { x: cx - half, y: cy - half },
    { x: cx + half, y: cy - half },
    { x: cx + half, y: cy + half },
    { x: cx - half, y: cy + half },
  ];

  // Dot position
  let dotX = cx - half;
  let dotY = cy - half;

  if (elapsed > 0) {
    const fromCorner = corners[sideIndex];
    const toCorner = corners[(sideIndex + 1) % 4];
    dotX = fromCorner.x + (toCorner.x - fromCorner.x) * sideProgress;
    dotY = fromCorner.y + (toCorner.y - fromCorner.y) * sideProgress;
  }

  // Labels for each side
  const labels = ["INHALE", "HOLD", "EXHALE", "HOLD"];
  const labelPositions = [
    { x: cx, y: cy - half - 50, active: sideIndex === 0 },
    { x: cx + half + 50, y: cy, active: sideIndex === 1, rotate: true },
    { x: cx, y: cy + half + 60, active: sideIndex === 2 },
    { x: cx - half - 50, y: cy, active: sideIndex === 3, rotate: true },
  ];

  const boxReveal = ease(frame, start, 25, 0, 1);
  const trailOpacity = elapsed > 0 ? 0.6 : 0;

  return (
    <svg width={2160} height={2160} style={{ position: "absolute", inset: 0 }}>
      {/* Box outline */}
      <rect
        x={cx - half} y={cy - half}
        width={boxSize} height={boxSize}
        fill="none" stroke={C.boxLine}
        strokeWidth={3} rx={8}
        opacity={boxReveal}
      />

      {/* Corner dots */}
      {corners.map((corner, i) => (
        <circle key={i}
          cx={corner.x} cy={corner.y} r={10}
          fill={C.stone} opacity={boxReveal * 0.5}
        />
      ))}

      {/* Trail — completed sides glow */}
      {elapsed > 0 && [0, 1, 2, 3].map((side) => {
        if (side > sideIndex && elapsed < cycleLength) return null;
        const from = corners[side];
        const to = corners[(side + 1) % 4];
        let endX = to.x;
        let endY = to.y;
        if (side === sideIndex) {
          endX = dotX;
          endY = dotY;
        }
        return (
          <line key={side}
            x1={from.x} y1={from.y}
            x2={endX} y2={endY}
            stroke={C.calm}
            strokeWidth={6}
            strokeLinecap="round"
            opacity={trailOpacity * (side === sideIndex ? 0.8 : 0.3)}
          />
        );
      })}

      {/* Moving dot */}
      {elapsed > 0 && (
        <>
          {/* Glow */}
          <circle cx={dotX} cy={dotY} r={30}
            fill={C.calm} opacity={0.2}
          />
          {/* Core dot */}
          <circle cx={dotX} cy={dotY} r={14}
            fill={C.cream} opacity={0.9}
          />
        </>
      )}

      {/* Side labels */}
      {labelPositions.map((pos, i) => (
        <text key={i}
          x={pos.x} y={pos.y}
          textAnchor="middle" dominantBaseline="middle"
          fill={pos.active ? C.cream : C.dim}
          fontSize={pos.active ? 44 : 36}
          fontFamily={F.mono}
          fontWeight={pos.active ? 700 : 400}
          letterSpacing={6}
          opacity={boxReveal * (pos.active ? 1 : 0.4)}
          transform={pos.rotate ? `rotate(${i === 3 ? -90 : 90}, ${pos.x}, ${pos.y})` : undefined}
        >
          {labels[i]}
        </text>
      ))}

      {/* Center: current phase */}
      <text x={cx} y={cy - 20}
        textAnchor="middle" dominantBaseline="middle"
        fill={C.cream} fontSize={72} fontFamily={F.serif}
        opacity={elapsed > 0 ? 0.9 : 0}
      >
        {labels[sideIndex]}
      </text>
      <text x={cx} y={cy + 40}
        textAnchor="middle" dominantBaseline="middle"
        fill={C.dim} fontSize={36} fontFamily={F.mono}
        opacity={elapsed > 0 ? 0.6 : 0}
      >
        4 seconds
      </text>
    </svg>
  );
}

// Heart rate display
function HeartRate({ frame, start, bpm }: { frame: number; start: number; bpm: number }) {
  const displayBpm = Math.round(bpm);
  const pulseScale = 1 + 0.06 * Math.sin(frame * (bpm / 60) * 0.1 * Math.PI);

  return (
    <div style={{
      display: "flex", alignItems: "baseline", gap: 20,
    }}>
      {/* Heart icon — pulses */}
      <div style={{
        fontSize: 80,
        transform: `scale(${pulseScale})`,
        color: bpm > 80 ? C.pulse : C.calm,
        lineHeight: 1,
      }}>
        {"♥"}
      </div>
      <div style={{
        fontSize: 160, fontWeight: 800, fontFamily: F.sans,
        color: bpm > 80 ? C.pulse : C.calm,
        lineHeight: 1, letterSpacing: -4,
      }}>
        {displayBpm}
      </div>
      <div style={{
        fontSize: 44, color: C.dim, fontFamily: F.mono,
      }}>
        bpm
      </div>
    </div>
  );
}

export const Yoga_Set1_C: React.FC = () => {
  const frame = useCurrentFrame();

  // Heart rate curve: starts at 92, drops through breathing to 68
  const hrStart = 92;
  const hrEnd = 68;
  const hrCurrent = frame < 130
    ? hrStart
    : frame < 420
      ? interpolate(frame, [130, 420], [hrStart, hrEnd], {
          extrapolateLeft: "clamp", extrapolateRight: "clamp",
          easing: Easing.inOut(Easing.cubic),
        })
      : hrEnd;

  return (
    <div style={{
      width: 2160, height: 2160, background: C.bg,
      overflow: "hidden", position: "relative", fontFamily: F.sans,
    }}>
      {/* Subtle radial glow — breathing warmth */}
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(ellipse at 50% 50%, rgba(125,184,165,${0.03 + 0.02 * Math.sin(frame * 0.03)}) 0%, transparent 60%)`,
      }} />

      {/* Grain */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.05, pointerEvents: "none", zIndex: 100,
        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
      }} />

      {/* ═══ SCENE 1: HOOK — elevated HR (0–125) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 0, 125),
        padding: "120px 120px",
        gap: 40,
      }}>
        <div style={{
          ...fadeUp(frame, 3, 16),
          fontSize: 48, color: C.dim, fontFamily: F.mono, letterSpacing: 6,
          textTransform: "uppercase",
        }}>
          right now
        </div>

        <div style={{ ...fadeUp(frame, 10, 20) }}>
          <HeartRate frame={frame} start={10} bpm={hrCurrent} />
        </div>

        <div style={{
          ...fadeUp(frame, 40, 14),
          width: 800, height: 3,
          background: `linear-gradient(90deg, transparent, ${C.pulse}60, transparent)`,
        }} />

        <div style={{
          ...fadeUp(frame, 50, 18),
          fontSize: 72, color: C.cream, fontFamily: F.serif,
          textAlign: "center", lineHeight: 1.3, maxWidth: 1600,
        }}>
          Your resting heart rate
          <br />
          after a normal day.
        </div>

        <div style={{
          ...fadeUp(frame, 80, 16),
          fontSize: 50, color: C.dim, textAlign: "center", lineHeight: 1.5,
        }}>
          Here's what 2 minutes of
          <br />
          <span style={{ color: C.calm, fontWeight: 600 }}>box breathing</span> does to it.
        </div>
      </div>

      {/* ═══ SCENE 2: BOX BREATHING ACTIVE (130–400) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: sceneVis(frame, 130, 400),
      }}>
        {/* The breathing box */}
        <BreathingBox frame={frame} start={140} />

        {/* Live HR counter — top right */}
        <div style={{
          position: "absolute", top: 140, right: 180,
          ...fadeUp(frame, 145, 16),
          display: "flex", flexDirection: "column", alignItems: "flex-end",
        }}>
          <div style={{
            fontSize: 36, color: C.dim, fontFamily: F.mono,
            letterSpacing: 3, marginBottom: 10,
          }}>
            HEART RATE
          </div>
          <div style={{
            display: "flex", alignItems: "baseline", gap: 12,
          }}>
            <span style={{
              fontSize: 100, fontWeight: 800,
              color: hrCurrent > 80 ? C.pulse : C.calm,
              fontFamily: F.sans, lineHeight: 1,
            }}>
              {Math.round(hrCurrent)}
            </span>
            <span style={{ fontSize: 36, color: C.dim, fontFamily: F.mono }}>bpm</span>
          </div>
          {/* Trend arrow */}
          {frame > 180 && (
            <div style={{
              ...fadeUp(frame, 180, 14),
              fontSize: 32, color: C.calm, fontFamily: F.mono,
              marginTop: 8,
            }}>
              {"↓"} dropping
            </div>
          )}
        </div>

        {/* Explanation — bottom area */}
        <div style={{
          position: "absolute", bottom: 200, left: 120, right: 120,
          ...fadeUp(frame, 200, 20),
          textAlign: "center",
        }}>
          <div style={{
            fontSize: 44, color: C.dim, lineHeight: 1.6,
          }}>
            Extended exhale activates the{" "}
            <span style={{ color: C.calm, fontWeight: 600 }}>vagus nerve</span>
            <br />
            → signals parasympathetic response
            <br />
            → heart rate decelerates
          </div>
        </div>
      </div>

      {/* ═══ SCENE 3: RESULT — HR dropped (405–460) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 405, 460),
        padding: "120px 120px",
        gap: 40,
      }}>
        <div style={{
          ...fadeUp(frame, 408, 16),
          fontSize: 48, color: C.dim, fontFamily: F.mono, letterSpacing: 6,
          textTransform: "uppercase",
        }}>
          after 2 minutes
        </div>

        <div style={{ ...fadeUp(frame, 412, 20) }}>
          <HeartRate frame={frame} start={412} bpm={hrEnd} />
        </div>

        <div style={{
          ...fadeUp(frame, 430, 16),
          display: "flex", alignItems: "center", gap: 30,
        }}>
          <div style={{
            fontSize: 80, fontWeight: 800, color: C.calm,
            fontFamily: F.sans,
          }}>
            -24 bpm
          </div>
        </div>

        <div style={{
          ...fadeUp(frame, 442, 16),
          fontSize: 52, color: C.cream, textAlign: "center", lineHeight: 1.5,
          fontFamily: F.serif,
        }}>
          No app. No supplement.
          <br />
          Just your breath.
        </div>
      </div>

      {/* ═══ SCENE 4: CTA (465–540) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 465, 540, 14, 1),
        padding: "120px 120px",
        gap: 50,
      }}>
        <div style={{
          ...fadeUp(frame, 468, 18),
          fontSize: 76, color: C.cream, fontFamily: F.serif,
          textAlign: "center", lineHeight: 1.3,
        }}>
          Your nervous system
          <br />
          doesn't need another app.
        </div>

        <div style={{
          ...fadeUp(frame, 492, 16),
          fontSize: 64, color: C.calm, fontWeight: 600,
          textAlign: "center",
        }}>
          It needs practice.
        </div>

        <div style={{
          ...fadeUp(frame, 510, 14),
          width: 600, height: 3,
          background: `linear-gradient(90deg, transparent, ${C.calm}, transparent)`,
        }} />

        <div style={{
          ...fadeUp(frame, 518, 14),
          fontSize: 40, color: C.dim, letterSpacing: 6,
          textTransform: "uppercase", fontFamily: F.mono,
        }}>
          SORA Yoga · Portland
        </div>
      </div>
    </div>
  );
};
