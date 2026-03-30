import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

// SORA YOGA — REEL B: "What Box Breathing Does (The Signal Trace)"
// FORM ORIGIN: Content is a neural signal propagating through a biological chain.
// A signal trace / pathway diagram makes the invisible cascade visible.
// The form IS the content — the signal traveling IS the visual structure.
// 510 frames @ 30fps = 17s | 2160x2160 square

const clamp = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };

// Palette — named after content
const VAGUS = "#2D4A3E";        // deep forest — the nerve pathway
const PARASYMPATHETIC = "#5A8F7B"; // lighter forest — activation signal
const CORTISOL = "#9B4B3A";     // warm red — stress hormone
const STONE = "#C4B5A0";        // warm stone — neutral text
const CREAM = "#F5F0E8";        // soft cream — primary text
const CHARCOAL = "#3A3A3A";     // background
const HEARTBEAT = "#C08B5C";    // amber — heart rate
const CALM = "#6B8F7E";         // the calm signal

const F = {
  serif: "'DM Serif Display', Georgia, serif",
  sans: "'Inter', -apple-system, sans-serif",
  mono: "'JetBrains Mono', 'SF Mono', monospace",
};

function ease(frame: number, start: number, dur: number, from: number, to: number, fn = Easing.out(Easing.cubic)) {
  return interpolate(frame, [start, start + dur], [from, to], { ...clamp, easing: fn });
}

function fadeUp(frame: number, start: number, dur = 14) {
  return {
    opacity: ease(frame, start, dur, 0, 1),
    transform: `translateY(${ease(frame, start, dur, 30, 0)}px)`,
  };
}

function sceneVis(frame: number, start: number, end: number, fadeIn = 12, fadeOut = 12) {
  if (frame < start - 3 || frame > end + fadeOut + 3) return 0;
  return Math.min(
    interpolate(frame, [start, start + fadeIn], [0, 1], clamp),
    interpolate(frame, [end, end + Math.max(fadeOut, 1)], [1, 0], clamp),
  );
}

// ═══ CUSTOM COMPONENTS ═══

/** A node in the signal pathway */
function PathwayNode({ frame, start, label, sublabel, x, y, active, nodeColor }: {
  frame: number; start: number; label: string; sublabel: string;
  x: number; y: number; active: boolean; nodeColor: string;
}) {
  const nodeOp = ease(frame, start, 14, 0, 1);
  const nodeScale = ease(frame, start, 16, 0.6, 1, Easing.out(Easing.back(1.6)));
  const glowRadius = active ? 20 + Math.sin(frame * 0.1) * 8 : 0;
  const pulseScale = active ? 1 + Math.sin(frame * 0.08) * 0.06 : 1;

  return (
    <div style={{
      position: "absolute",
      left: x - 120, top: y - 35,
      opacity: nodeOp,
      transform: `scale(${nodeScale * pulseScale})`,
      display: "flex", flexDirection: "column",
      alignItems: "center", width: 240,
    }}>
      {/* Node circle */}
      <div style={{
        width: 60, height: 60,
        borderRadius: "50%",
        background: active ? nodeColor : `${CREAM}15`,
        border: `3px solid ${active ? nodeColor : `${CREAM}30`}`,
        boxShadow: active ? `0 0 ${glowRadius}px ${nodeColor}50` : "none",
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: 14,
      }}>
        {active && (
          <div style={{
            width: 20, height: 20,
            borderRadius: "50%",
            background: CREAM,
            opacity: 0.9,
          }} />
        )}
      </div>

      {/* Label */}
      <div style={{
        fontSize: 24, fontFamily: F.mono,
        color: active ? CREAM : `${CREAM}50`,
        letterSpacing: 2, textTransform: "uppercase",
        textAlign: "center", fontWeight: active ? 700 : 400,
      }}>
        {label}
      </div>
      <div style={{
        fontSize: 20, fontFamily: F.sans,
        color: active ? `${CREAM}80` : `${CREAM}35`,
        textAlign: "center", marginTop: 4,
        lineHeight: 1.4,
      }}>
        {sublabel}
      </div>
    </div>
  );
}

/** Signal pulse traveling along a path segment */
function SignalPulse({ frame, start, dur, x1, y1, x2, y2 }: {
  frame: number; start: number; dur: number;
  x1: number; y1: number; x2: number; y2: number;
}) {
  const progress = ease(frame, start, dur, 0, 1, Easing.inOut(Easing.cubic));
  if (frame < start || progress <= 0) return null;

  const currentX = x1 + (x2 - x1) * progress;
  const currentY = y1 + (y2 - y1) * progress;

  // Draw the path line (drawn portion)
  const pathAngle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);
  const pathLen = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2) * progress;

  return (
    <>
      {/* Path line */}
      <div style={{
        position: "absolute",
        left: x1, top: y1,
        width: pathLen, height: 3,
        background: `linear-gradient(90deg, ${PARASYMPATHETIC}30, ${PARASYMPATHETIC})`,
        transformOrigin: "left center",
        transform: `rotate(${pathAngle}deg)`,
        borderRadius: 2,
      }} />

      {/* Pulse dot */}
      <div style={{
        position: "absolute",
        left: currentX - 10, top: currentY - 10,
        width: 20, height: 20,
        borderRadius: "50%",
        background: PARASYMPATHETIC,
        boxShadow: `0 0 24px ${PARASYMPATHETIC}80`,
      }} />
    </>
  );
}

/** Heart rate line that decelerates */
function HeartRateLine({ frame, start, bpmStart, bpmEnd }: {
  frame: number; start: number; bpmStart: number; bpmEnd: number;
}) {
  const progress = ease(frame, start, 80, 0, 1, Easing.out(Easing.cubic));
  const currentBPM = Math.round(bpmStart + (bpmEnd - bpmStart) * progress);
  const lineOp = ease(frame, start, 14, 0, 1);

  // Generate heart rate wave points
  const points: string[] = [];
  const width = 800;
  const height = 200;
  const beatInterval = 60 / currentBPM; // seconds per beat
  const pixelsPerSecond = width / 4; // show 4 seconds of data

  for (let x = 0; x < width; x += 2) {
    const t = x / pixelsPerSecond;
    const beatPhase = (t % beatInterval) / beatInterval;
    let y = height / 2;

    // Create QRS-like spike
    if (beatPhase < 0.05) {
      y = height / 2 - 60 * Math.sin(beatPhase / 0.05 * Math.PI);
    } else if (beatPhase < 0.1) {
      y = height / 2 + 30 * Math.sin((beatPhase - 0.05) / 0.05 * Math.PI);
    } else if (beatPhase < 0.15) {
      y = height / 2 - 20 * Math.sin((beatPhase - 0.1) / 0.05 * Math.PI);
    }

    points.push(`${x},${y}`);
  }

  const bpmColor = currentBPM > 75 ? HEARTBEAT : CALM;

  return (
    <div style={{ opacity: lineOp, position: "relative" }}>
      {/* BPM display */}
      <div style={{
        display: "flex", alignItems: "baseline", gap: 16,
        marginBottom: 20,
      }}>
        <div style={{
          fontSize: 110, fontFamily: F.mono,
          color: bpmColor, fontWeight: 700,
          lineHeight: 1,
        }}>
          {currentBPM}
        </div>
        <div style={{
          fontSize: 32, fontFamily: F.mono,
          color: `${CREAM}50`,
        }}>
          BPM
        </div>
      </div>

      {/* Wave SVG */}
      <svg width={width} height={height} style={{ overflow: "visible" }}>
        <polyline
          points={points.join(" ")}
          fill="none"
          stroke={bpmColor}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

// ═══ MAIN COMPOSITION ═══

export const Yoga_Set2_B: React.FC = () => {
  const frame = useCurrentFrame();

  // Scene timing
  const s1 = sceneVis(frame, 0, 110);          // Hook: "Here's what happens"
  const s2 = sceneVis(frame, 110, 310);         // Signal pathway
  const s3 = sceneVis(frame, 310, 420);         // Heart rate deceleration
  const s4 = sceneVis(frame, 420, 510, 12, 1);  // CTA

  // Pathway nodes — vertical chain
  const nodes = [
    { label: "INHALE", sublabel: "4 seconds", x: 1080, y: 350, activateAt: 120 },
    { label: "DIAPHRAGM", sublabel: "Descends 3-4cm", x: 1080, y: 550, activateAt: 160 },
    { label: "VAGUS NERVE", sublabel: "Mechanical compression", x: 1080, y: 750, activateAt: 200 },
    { label: "BRAINSTEM", sublabel: "Parasympathetic signal", x: 1080, y: 950, activateAt: 240 },
    { label: "HEART", sublabel: "Rate decelerates", x: 1080, y: 1150, activateAt: 275 },
  ];

  return (
    <div style={{
      width: 2160, height: 2160,
      background: CHARCOAL,
      overflow: "hidden",
      position: "relative",
      fontFamily: F.sans,
    }}>

      {/* Subtle neural network background pattern */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: 0.04,
      }}>
        {Array.from({ length: 30 }, (_, i) => {
          const cx = ((i * 337) % 2160);
          const cy = ((i * 419) % 2160);
          return (
            <div key={`neuron-${i}`} style={{
              position: "absolute",
              left: cx - 3, top: cy - 3,
              width: 6, height: 6,
              borderRadius: "50%",
              background: CREAM,
            }} />
          );
        })}
      </div>

      {/* Film grain */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.05, pointerEvents: "none", zIndex: 100,
        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E")`,
      }} />

      {/* ═══ SCENE 1: HOOK (0-110) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        opacity: s1,
        padding: 160,
      }}>
        {/* Small provocation */}
        <div style={{
          ...fadeUp(frame, 5),
          fontSize: 28, fontFamily: F.mono,
          color: `${CREAM}45`, letterSpacing: 6,
          textTransform: "uppercase",
          marginBottom: 50,
        }}>
          Nervous System
        </div>

        <div style={{
          ...fadeUp(frame, 14, 22),
          fontSize: 100, fontFamily: F.serif,
          color: CREAM, textAlign: "center",
          lineHeight: 1.25,
        }}>
          "Box breathing
          <br />calms you down."
        </div>

        <div style={{
          width: ease(frame, 50, 20, 0, 400),
          height: 2, background: VAGUS,
          margin: "50px 0", opacity: 0.5,
        }} />

        <div style={{
          ...fadeUp(frame, 60, 20),
          fontSize: 56, fontFamily: F.sans,
          color: PARASYMPATHETIC, textAlign: "center",
          fontWeight: 500, lineHeight: 1.5,
        }}>
          Here's what actually happens
          <br />inside your body.
        </div>

        {/* Breathing box hint */}
        <div style={{
          ...fadeUp(frame, 85),
          marginTop: 60,
          width: 80, height: 80,
          border: `3px solid ${VAGUS}60`,
          borderRadius: 8,
          opacity: 0.5 + Math.sin(frame * 0.06) * 0.3,
        }} />
      </div>

      {/* ═══ SCENE 2: SIGNAL PATHWAY (110-310) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: s2,
      }}>
        {/* Left label */}
        <div style={{
          position: "absolute",
          left: 160, top: 300,
          ...fadeUp(frame, 115),
        }}>
          <div style={{
            fontSize: 26, fontFamily: F.mono,
            color: `${CREAM}40`, letterSpacing: 5,
            textTransform: "uppercase",
            marginBottom: 16,
          }}>
            Signal Pathway
          </div>
          <div style={{
            fontSize: 46, fontFamily: F.serif,
            color: CREAM, lineHeight: 1.35,
            maxWidth: 500,
          }}>
            One breath.
            <br />
            <span style={{ color: PARASYMPATHETIC }}>Five systems.</span>
          </div>

          {/* Timing box */}
          <div style={{
            ...fadeUp(frame, 135),
            marginTop: 50,
            padding: "24px 36px",
            border: `2px solid ${VAGUS}40`,
            borderRadius: 12,
            display: "inline-block",
          }}>
            <div style={{
              fontSize: 22, fontFamily: F.mono,
              color: `${CREAM}50`, letterSpacing: 3,
              marginBottom: 8,
            }}>
              BOX BREATHING CYCLE
            </div>
            <div style={{
              display: "flex", gap: 30,
            }}>
              {["IN 4s", "HOLD 4s", "OUT 4s", "HOLD 4s"].map((phase, i) => (
                <div key={`phase-${i}`} style={{
                  ...fadeUp(frame, 145 + i * 8),
                  fontSize: 24, fontFamily: F.mono,
                  color: i === 0 ? PARASYMPATHETIC : `${CREAM}40`,
                  fontWeight: i === 0 ? 700 : 400,
                }}>
                  {phase}
                </div>
              ))}
            </div>
          </div>

          {/* Mechanism explanation */}
          <div style={{
            ...fadeUp(frame, 210),
            marginTop: 40,
            fontSize: 30, fontFamily: F.sans,
            color: `${CREAM}60`, lineHeight: 1.6,
            maxWidth: 500,
          }}>
            The diaphragm physically compresses
            the vagus nerve on each deep inhale,
            triggering parasympathetic activation.
          </div>
        </div>

        {/* Right: Vertical pathway */}
        <div style={{ position: "absolute", right: 200, top: 0, bottom: 0 }}>
          {/* Vertical guide line */}
          <div style={{
            position: "absolute",
            left: 108, top: 280, width: 4,
            height: ease(frame, 115, 120, 0, 900, Easing.out(Easing.quad)),
            background: `linear-gradient(180deg, ${VAGUS}60, ${VAGUS}20)`,
            borderRadius: 2,
          }} />

          {/* Nodes */}
          {nodes.map((node, i) => (
            <PathwayNode
              key={node.label}
              frame={frame}
              start={node.activateAt}
              label={node.label}
              sublabel={node.sublabel}
              x={120}
              y={node.y}
              active={frame >= node.activateAt + 14}
              nodeColor={i === nodes.length - 1 ? HEARTBEAT : PARASYMPATHETIC}
            />
          ))}

          {/* Signal pulses between nodes */}
          {nodes.slice(0, -1).map((node, i) => (
            <SignalPulse
              key={`pulse-${i}`}
              frame={frame}
              start={node.activateAt + 10}
              dur={25}
              x1={120}
              y1={node.y + 40}
              x2={120}
              y2={nodes[i + 1].y - 40}
            />
          ))}
        </div>
      </div>

      {/* ═══ SCENE 3: HEART RATE DECELERATION (310-420) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        opacity: s3,
        padding: "160px 200px",
      }}>
        <div style={{
          ...fadeUp(frame, 315),
          fontSize: 28, fontFamily: F.mono,
          color: `${CREAM}40`, letterSpacing: 6,
          textTransform: "uppercase",
          marginBottom: 40,
        }}>
          Result: Cardiac Response
        </div>

        <HeartRateLine
          frame={frame}
          start={320}
          bpmStart={82}
          bpmEnd={64}
        />

        {/* Before → After labels */}
        <div style={{
          display: "flex", gap: 120,
          marginTop: 50,
        }}>
          <div style={{
            ...fadeUp(frame, 340),
            textAlign: "center",
          }}>
            <div style={{
              fontSize: 24, fontFamily: F.mono,
              color: `${CREAM}40`, letterSpacing: 3,
            }}>
              BEFORE
            </div>
            <div style={{
              fontSize: 50, fontFamily: F.mono,
              color: HEARTBEAT, fontWeight: 600,
            }}>
              82 BPM
            </div>
            <div style={{
              fontSize: 22, fontFamily: F.sans,
              color: CORTISOL, marginTop: 6,
            }}>
              Sympathetic dominant
            </div>
          </div>

          <div style={{
            ...fadeUp(frame, 375),
            display: "flex", alignItems: "center",
            fontSize: 40, color: `${CREAM}30`,
            fontFamily: F.mono,
          }}>
            →
          </div>

          <div style={{
            ...fadeUp(frame, 380),
            textAlign: "center",
          }}>
            <div style={{
              fontSize: 24, fontFamily: F.mono,
              color: `${CREAM}40`, letterSpacing: 3,
            }}>
              AFTER 2 MIN
            </div>
            <div style={{
              fontSize: 50, fontFamily: F.mono,
              color: CALM, fontWeight: 600,
            }}>
              64 BPM
            </div>
            <div style={{
              fontSize: 22, fontFamily: F.sans,
              color: CALM, marginTop: 6,
            }}>
              Parasympathetic active
            </div>
          </div>
        </div>

        {/* Cortisol note */}
        <div style={{
          ...fadeUp(frame, 395),
          marginTop: 50,
          padding: "20px 40px",
          background: `${VAGUS}20`,
          borderRadius: 12,
          borderLeft: `4px solid ${CALM}`,
        }}>
          <div style={{
            fontSize: 28, fontFamily: F.sans,
            color: `${CREAM}80`, lineHeight: 1.5,
          }}>
            Cortisol production slows. Recovery begins.
          </div>
        </div>
      </div>

      {/* ═══ SCENE 4: CTA (420-510) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        opacity: s4,
        padding: 160,
      }}>
        {/* Calm indicator */}
        <div style={{
          ...fadeUp(frame, 425),
          width: 80, height: 80,
          borderRadius: "50%",
          background: `${CALM}20`,
          border: `3px solid ${CALM}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          marginBottom: 50,
          boxShadow: `0 0 ${20 + Math.sin(frame * 0.06) * 10}px ${CALM}30`,
        }}>
          <div style={{
            width: 30, height: 30,
            borderRadius: "50%",
            background: CALM,
          }} />
        </div>

        <div style={{
          ...fadeUp(frame, 432, 22),
          fontSize: 48, fontFamily: F.sans,
          color: `${CREAM}70`, textAlign: "center",
          lineHeight: 1.5, marginBottom: 40,
        }}>
          Not vibes. Physiology.
        </div>

        <div style={{
          ...fadeUp(frame, 450, 22),
          fontSize: 130, fontFamily: F.serif,
          color: CREAM, letterSpacing: 16,
        }}>
          SORA
        </div>

        <div style={{
          ...fadeUp(frame, 465),
          fontSize: 40, fontFamily: F.sans,
          color: STONE, letterSpacing: 6,
          marginTop: 14,
        }}>
          BREATHWORK CLASSES
        </div>

        <div style={{
          width: ease(frame, 478, 18, 0, 250),
          height: 2, background: CALM,
          margin: "40px 0", opacity: 0.5,
        }} />

        <div style={{
          ...fadeUp(frame, 488),
          fontSize: 30, fontFamily: F.mono,
          color: `${CREAM}40`, letterSpacing: 3,
        }}>
          PORTLAND · SMALL CLASSES · 10+ YR TEACHERS
        </div>
      </div>

      {/* Vignette */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(20,20,20,0.35) 100%)",
        pointerEvents: "none",
      }} />
    </div>
  );
};
