import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

// CANDLE — OUTPUT B1: "88" — Batch scarcity as inventory counter. Content IS the form.

const clamp = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };

const CREAM = "#F5EDE0";
const CHARCOAL = "#1a1410";
const AMBER = "#D4A574";
const SAGE = "#8B9A7B";
const FLAME = "#E8A045";
const GOLD = "#C8963E";
const WARM_DARK = "#2C2218";
const MUTED = "#9A8B7A";

function ease(frame: number, start: number, dur: number, from: number, to: number, fn = Easing.out(Easing.cubic)) {
  return interpolate(frame, [start, start + dur], [from, to], { ...clamp, easing: fn });
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

const LEDGER_ENTRIES = [
  { time: "Mar 28, 2:14 PM", loc: "Portland, OR" },
  { time: "Mar 28, 3:01 PM", loc: "Austin, TX" },
  { time: "Mar 28, 3:47 PM", loc: "Brooklyn, NY" },
  { time: "Mar 28, 5:22 PM", loc: "Chicago, IL" },
  { time: "Mar 29, 9:08 AM", loc: "Seattle, WA" },
  { time: "Mar 29, 10:33 AM", loc: "Denver, CO" },
];

export const Candle_B1: React.FC = () => {
  const frame = useCurrentFrame();

  // ═══ SCENE 1 (0–90): Giant "88" — the number IS the hook ═══
  const s1 = sceneVis(frame, 0, 90);
  const numScale = ease(frame, 8, 25, 0.7, 1, Easing.out(Easing.exp));
  const numOpacity = ease(frame, 8, 18, 0, 1);
  const subtitleUp = fadeUp(frame, 40);
  const glowPulse = 0.3 + 0.15 * Math.sin(frame * 0.06);

  // ═══ SCENE 2 (90–200): Countdown + ledger ═══
  const s2 = sceneVis(frame, 90, 200);
  const countdownFrame = Math.max(0, frame - 95);
  const decrements = Math.min(Math.floor(countdownFrame / 15), 17);
  const currentCount = 88 - decrements;

  // Squash/stretch on each tick — spring physics on the number
  const tickPhase = countdownFrame % 15;
  const tickSquash = tickPhase < 5
    ? interpolate(tickPhase, [0, 2, 5], [1, 0.91, 1], { ...clamp, easing: Easing.out(Easing.cubic) })
    : 1;
  const tickStretch = tickPhase < 5
    ? interpolate(tickPhase, [0, 2, 5], [1, 1.07, 1], { ...clamp, easing: Easing.out(Easing.cubic) })
    : 1;

  // Ledger lines appear as counter decreases
  const ledgerCount = Math.min(decrements, LEDGER_ENTRIES.length);

  // ═══ SCENE 3 (200–330): "When they're gone" ═══
  const s3 = sceneVis(frame, 200, 330);
  const line1Up = fadeUp(frame, 215);
  const line2Up = fadeUp(frame, 260);
  const line3Up = fadeUp(frame, 305);
  const smallCount = ease(frame, 205, 20, 80, 36);
  const countPush = ease(frame, 205, 20, 960, 120);

  // ═══ SCENE 4 (330–440): 8×11 grid visualization ═══
  const s4 = sceneVis(frame, 330, 440);

  // 17 sold positions scattered through the grid
  const soldIndices = new Set([0, 5, 11, 17, 23, 28, 34, 39, 44, 50, 55, 61, 66, 72, 77, 82, 87]);

  // ═══ SCENE 5 (440–540): Lockup + inventory bar ═══
  const s5 = sceneVis(frame, 440, 540, 10, 1);
  const lockupUp = fadeUp(frame, 455);
  const barWidth = ease(frame, 470, 30, 0, (71 / 88) * 100, Easing.out(Easing.quad));
  const barLabel = fadeUp(frame, 495);

  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        backgroundColor: CHARCOAL,
        overflow: "hidden",
        position: "relative",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* ═══ SCENE 1: "88" — the number is the hook ═══ */}
      {s1 > 0 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            opacity: s1,
          }}
        >
          {/* Warm glow behind number */}
          <div
            style={{
              position: "absolute",
              width: 420,
              height: 420,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${AMBER}${Math.round(glowPulse * 255).toString(16).padStart(2, "0")} 0%, transparent 70%)`,
              filter: "blur(60px)",
            }}
          />
          <div
            style={{
              fontFamily: "Georgia, serif",
              fontSize: 192,
              fontWeight: 300,
              color: CREAM,
              letterSpacing: "-4px",
              opacity: numOpacity,
              transform: `scale(${numScale})`,
              position: "relative",
              zIndex: 1,
            }}
          >
            88
          </div>
          <div
            style={{
              ...subtitleUp,
              fontFamily: "Inter, sans-serif",
              fontSize: 20,
              letterSpacing: "6px",
              color: MUTED,
              textTransform: "uppercase" as const,
              marginTop: 24,
            }}
          >
            CANDLES PER BATCH
          </div>
        </div>
      )}

      {/* ═══ SCENE 2: Countdown + Ledger ═══ */}
      {s2 > 0 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: s2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Counter */}
          <div
            style={{
              marginTop: 280,
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 140,
              fontWeight: 300,
              color: CREAM,
              transform: `scaleY(${tickSquash}) scaleX(${tickStretch})`,
            }}
          >
            {currentCount}
          </div>
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 18,
              letterSpacing: "4px",
              color: MUTED,
              textTransform: "uppercase" as const,
              marginTop: 8,
            }}
          >
            REMAINING
          </div>

          {/* Ledger entries */}
          <div style={{ marginTop: 80, width: 680 }}>
            {LEDGER_ENTRIES.slice(0, ledgerCount).map((entry, i) => {
              const entryDelay = 100 + i * 15;
              const slideIn = ease(frame, entryDelay, 16, 120, 0, Easing.out(Easing.cubic));
              const entryOpacity = ease(frame, entryDelay, 12, 0, 1);
              return (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "16px 0",
                    borderBottom: `1px solid ${MUTED}30`,
                    opacity: entryOpacity,
                    transform: `translateX(${slideIn}px)`,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: 18,
                      color: `${CREAM}B0`,
                    }}
                  >
                    {entry.time}
                  </span>
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 18,
                      color: MUTED,
                    }}
                  >
                    {entry.loc}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ═══ SCENE 3: "When they're gone, they're gone." ═══ */}
      {s3 > 0 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: s3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Small counter pushed to top */}
          <div
            style={{
              position: "absolute",
              top: countPush,
              fontFamily: "JetBrains Mono, monospace",
              fontSize: smallCount,
              color: `${CREAM}80`,
              letterSpacing: "-1px",
            }}
          >
            71
          </div>

          <div style={{ marginTop: 520, textAlign: "center" }}>
            <div
              style={{
                ...line1Up,
                fontFamily: "Georgia, serif",
                fontSize: 52,
                fontStyle: "italic",
                color: CREAM,
                lineHeight: 1.3,
              }}
            >
              When they're gone,
            </div>
            <div
              style={{
                ...line2Up,
                fontFamily: "Georgia, serif",
                fontSize: 52,
                fontStyle: "italic",
                color: CREAM,
                lineHeight: 1.3,
                marginTop: 12,
              }}
            >
              they're gone.
            </div>
            <div
              style={{
                ...line3Up,
                fontFamily: "Inter, sans-serif",
                fontSize: 22,
                color: MUTED,
                marginTop: 48,
                letterSpacing: "1px",
              }}
            >
              No restock until next pour.
            </div>
          </div>
        </div>
      )}

      {/* ═══ SCENE 4: 8×11 grid — inventory as tangible dots ═══ */}
      {s4 > 0 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: s4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(8, 1fr)",
              gap: 18,
              width: 680,
            }}
          >
            {Array.from({ length: 88 }).map((_, i) => {
              const isSold = soldIndices.has(i);
              const popDelay = 340 + i * 2.5;
              const circleScale = ease(frame, popDelay, 10, 0, 1, Easing.out(Easing.back(2)));
              const circleOpacity = ease(frame, popDelay, 8, 0, 1);

              // Sold ones pop in then dim
              const soldDim = isSold
                ? ease(frame, popDelay + 25, 14, 1, 0.35, Easing.out(Easing.cubic))
                : 1;

              const glowIntensity = isSold ? 0 : 0.4 + 0.25 * Math.sin((frame + i * 4) * 0.05);

              return (
                <div
                  key={i}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    backgroundColor: isSold ? `${MUTED}50` : AMBER,
                    opacity: circleOpacity * soldDim,
                    transform: `scale(${circleScale})`,
                    boxShadow: isSold
                      ? "none"
                      : `0 0 ${Math.round(14 * glowIntensity)}px ${AMBER}${Math.round(glowIntensity * 80).toString(16).padStart(2, "0")}`,
                  }}
                />
              );
            })}
          </div>
          <div
            style={{
              marginTop: 48,
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 20,
              color: MUTED,
              ...fadeUp(frame, 385),
            }}
          >
            71 available · 17 sold
          </div>
        </div>
      )}

      {/* ═══ SCENE 5: Lockup + inventory bar ═══ */}
      {s5 > 0 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: s5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ textAlign: "center", ...lockupUp }}>
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 22,
                letterSpacing: "5px",
                color: CREAM,
                textTransform: "uppercase" as const,
              }}
            >
              Batch 37 is live.
            </div>
            <div
              style={{
                fontFamily: "Georgia, serif",
                fontSize: 64,
                color: CREAM,
                marginTop: 32,
                letterSpacing: "8px",
              }}
            >
              VESPER
            </div>
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 18,
                color: MUTED,
                marginTop: 16,
                letterSpacing: "2px",
              }}
            >
              vespercandle.co
            </div>
          </div>

          {/* Inventory progress bar */}
          <div
            style={{
              position: "absolute",
              bottom: 160,
              width: 700,
              ...barLabel,
            }}
          >
            <div
              style={{
                height: 4,
                backgroundColor: `${MUTED}30`,
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${barWidth}%`,
                  backgroundColor: AMBER,
                  borderRadius: 2,
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 12,
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 18,
                color: MUTED,
              }}
            >
              <span>71 of 88 remaining</span>
              <span>Batch 37</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
