import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

// CANDLE — OUTPUT B3: "4 hours, 47 minutes" — Time as ingredient. Factory vs. craft.

const clamp = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };

const CREAM = "#F5EDE0";
const CHARCOAL = "#1a1410";
const AMBER = "#D4A574";
const SAGE = "#8B9A7B";
const FLAME = "#E8A045";
const GOLD = "#C8963E";
const WARM_DARK = "#2C2218";
const MUTED = "#9A8B7A";

// Cold factory tint
const COLD_BG = "#181C20";
const COLD_TEXT = "#B0B8C0";

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

// Format seconds to M:SS or H:MM:SS
function formatTime(totalSeconds: number, showHours = false): string {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = Math.floor(totalSeconds % 60);
  if (showHours || h > 0) {
    return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }
  return `${m}:${String(s).padStart(2, "0")}`;
}

// Process milestones for VESPER
const MILESTONES = [
  { time: "0:22", label: "Blend essential oils", triggerFrame: 225 },
  { time: "0:45", label: "Cool to pour temperature", triggerFrame: 250 },
  { time: "1:12", label: "Hand-pour, one jar at a time", triggerFrame: 275 },
  { time: "2:30", label: "Set the cotton wick", triggerFrame: 300 },
  { time: "3:15", label: "First quality check", triggerFrame: 325 },
];

export const Candle_B3: React.FC = () => {
  const frame = useCurrentFrame();

  // ═══ Background color transition: cold → warm across the reel ═══
  const warmth = ease(frame, 100, 120, 0, 1, Easing.inOut(Easing.cubic));
  const bgR = Math.round(interpolate(warmth, [0, 1], [0x18, 0x1a], clamp));
  const bgG = Math.round(interpolate(warmth, [0, 1], [0x1c, 0x14], clamp));
  const bgB = Math.round(interpolate(warmth, [0, 1], [0x20, 0x10], clamp));
  const bgColor = `rgb(${bgR}, ${bgG}, ${bgB})`;

  // ═══ SCENE 1 (0–100): Factory timer — 4 seconds, done ═══
  const s1 = sceneVis(frame, 0, 100);

  // Factory timer: races from 0 to 4 seconds
  const factorySeconds = interpolate(frame, [20, 55], [0, 4], { ...clamp, easing: Easing.out(Easing.quad) });
  const factoryDone = frame >= 55;
  const checkOpacity = ease(frame, 58, 12, 0, 1);
  const checkScale = ease(frame, 58, 15, 0.5, 1, Easing.out(Easing.back(2)));
  const doneLabel = fadeUp(frame, 65);

  // ═══ SCENE 2 (100–200): VESPER timer starts slow ═══
  const s2 = sceneVis(frame, 100, 200);
  const vesperSec2 = interpolate(frame, [120, 200], [0, 11], { ...clamp, easing: Easing.out(Easing.cubic) });
  const vesperTitle = fadeUp(frame, 108);
  const firstStep = fadeUp(frame, 155);

  // ═══ SCENE 3 (200–360): Timer continues, milestones accumulate ═══
  const s3 = sceneVis(frame, 200, 360);
  // Compress time: 0:11 → 3:30 over this scene
  const vesperSec3 = interpolate(frame, [200, 355], [11, 210], { ...clamp, easing: Easing.out(Easing.cubic) });

  // Combined timer for scenes 2+3
  const vesperTimerSec = frame < 200 ? vesperSec2 : vesperSec3;

  // ═══ SCENE 4 (360–450): Final time — 4:47:00 ═══
  const s4 = sceneVis(frame, 360, 450);
  // Timer jump from ~3:30 to 4:47:00
  const finalSeconds = interpolate(frame, [362, 395], [210, 17220], { ...clamp, easing: Easing.out(Easing.exp) });
  const curingNote = fadeUp(frame, 410);

  // ═══ SCENE 5 (450–540): "Time is an ingredient" ═══
  const s5 = sceneVis(frame, 450, 540, 10, 1);
  const thesis = fadeUp(frame, 462);
  const lockup = fadeUp(frame, 495);

  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        backgroundColor: bgColor,
        overflow: "hidden",
        position: "relative",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* ═══ SCENE 1: Factory — uncomfortably fast ═══ */}
      {s1 > 0 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: s1,
            display: "flex",
            flexDirection: "column",
            paddingLeft: 100,
            paddingTop: 480,
          }}
        >
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 36,
              color: COLD_TEXT,
              letterSpacing: "1px",
              ...fadeUp(frame, 5),
            }}
          >
            Factory candle.
          </div>

          {/* Timer */}
          <div
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 120,
              fontWeight: 300,
              color: COLD_TEXT,
              marginTop: 48,
              letterSpacing: "-2px",
            }}
          >
            {formatTime(factorySeconds)}
          </div>

          {/* Done checkmark */}
          {factoryDone && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginTop: 32,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  backgroundColor: "#4A7A5A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: checkOpacity,
                  transform: `scale(${checkScale})`,
                }}
              >
                <span style={{ color: "#E0E0E0", fontSize: 20 }}>✓</span>
              </div>
              <span
                style={{
                  ...doneLabel,
                  fontFamily: "Inter, sans-serif",
                  fontSize: 28,
                  color: "#6A9A7A",
                }}
              >
                Done.
              </span>
            </div>
          )}
        </div>
      )}

      {/* ═══ SCENE 2: VESPER timer — slow start ═══ */}
      {s2 > 0 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: s2,
            display: "flex",
            flexDirection: "column",
            paddingLeft: 100,
            paddingTop: 380,
          }}
        >
          <div
            style={{
              ...vesperTitle,
              fontFamily: "Georgia, serif",
              fontSize: 40,
              color: CREAM,
              letterSpacing: "3px",
            }}
          >
            VESPER.
          </div>

          {/* Timer */}
          <div
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 100,
              fontWeight: 300,
              color: AMBER,
              marginTop: 40,
              letterSpacing: "-2px",
            }}
          >
            {formatTime(vesperSec2)}
          </div>

          {/* First step */}
          <div
            style={{
              ...firstStep,
              fontFamily: "Georgia, serif",
              fontSize: 24,
              fontStyle: "italic",
              color: `${CREAM}B0`,
              marginTop: 48,
            }}
          >
            Heat the soy wax to 120°F.
          </div>
        </div>
      )}

      {/* ═══ SCENE 3: Timer continues + milestone log ═══ */}
      {s3 > 0 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: s3,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Persistent timer at top */}
          <div
            style={{
              paddingLeft: 100,
              paddingTop: 200,
            }}
          >
            <div
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 72,
                fontWeight: 300,
                color: AMBER,
                letterSpacing: "-1px",
              }}
            >
              {formatTime(vesperSec3)}
            </div>
            <div
              style={{
                width: 600,
                height: 2,
                backgroundColor: `${AMBER}30`,
                marginTop: 20,
              }}
            />
          </div>

          {/* Milestone log */}
          <div
            style={{
              paddingLeft: 100,
              paddingTop: 48,
              display: "flex",
              flexDirection: "column",
              gap: 0,
            }}
          >
            {/* First step carried over */}
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 20,
                padding: "20px 0",
                borderBottom: `1px solid ${MUTED}20`,
                ...fadeUp(frame, 208),
              }}
            >
              <span
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 18,
                  color: MUTED,
                  minWidth: 70,
                }}
              >
                0:00
              </span>
              <span
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: 22,
                  color: `${CREAM}C0`,
                  fontStyle: "italic",
                }}
              >
                Heat the soy wax to 120°F
              </span>
            </div>

            {MILESTONES.map((milestone, i) => {
              const entryUp = fadeUp(frame, milestone.triggerFrame);
              return (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 20,
                    padding: "20px 0",
                    borderBottom: `1px solid ${MUTED}20`,
                    ...entryUp,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: 18,
                      color: MUTED,
                      minWidth: 70,
                    }}
                  >
                    {milestone.time}
                  </span>
                  <span
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: 22,
                      color: `${CREAM}C0`,
                      fontStyle: "italic",
                    }}
                  >
                    {milestone.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ═══ SCENE 4: "4:47:00" — the final number ═══ */}
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
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 96,
              fontWeight: 300,
              color: AMBER,
              letterSpacing: "-2px",
            }}
          >
            {formatTime(finalSeconds, true)}
          </div>

          <div
            style={{
              ...curingNote,
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              fontSize: 24,
              color: MUTED,
              marginTop: 48,
              textAlign: "center",
              padding: "0 120px",
              lineHeight: 1.5,
            }}
          >
            Not counting 48 hours of curing.
          </div>
        </div>
      )}

      {/* ═══ SCENE 5: "Time is an ingredient." ═══ */}
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
          <div
            style={{
              ...thesis,
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              fontSize: 56,
              color: CREAM,
              textAlign: "center",
              padding: "0 100px",
              lineHeight: 1.3,
            }}
          >
            Time is an ingredient.
          </div>

          <div
            style={{
              ...lockup,
              textAlign: "center",
              marginTop: 72,
            }}
          >
            <div
              style={{
                fontFamily: "Georgia, serif",
                fontSize: 64,
                color: CREAM,
                letterSpacing: "10px",
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
        </div>
      )}
    </div>
  );
};
