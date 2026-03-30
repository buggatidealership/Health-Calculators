import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

// SORA YOGA — REEL C: "Warrior II: What Your Knee Is Actually Doing"
// FORM ORIGIN: Content is invisible force distribution on a joint.
// An engineering stress diagram makes force vectors visible.
// Split panel: concentrated vs distributed load — the form IS the force comparison.
// 540 frames @ 30fps = 18s | 2160x2160 square

const clamp = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };

// Palette — named after content
const BONE = "#C4B5A0";           // warm stone — skeletal structure
const CARTILAGE = "#2D4A3E";      // deep forest — healthy tissue
const CREAM = "#F5F0E8";          // soft cream — text
const CHARCOAL = "#3A3A3A";       // background
const STRESS_HIGH = "#9B4B3A";    // concentrated force — danger
const STRESS_LOW = "#6B8F7E";     // distributed force — healthy
const MENISCUS = "#C08B5C";       // amber — the meniscus tissue
const FORCE_RED = "#B85C4A";      // force arrows — wrong
const FORCE_GREEN = "#5A8F7B";    // force arrows — correct

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

/** Simplified knee joint cross-section */
function KneeJoint({ frame, start, misaligned, x, y, scale = 1 }: {
  frame: number; start: number; misaligned: boolean;
  x: number; y: number; scale?: number;
}) {
  const jointOp = ease(frame, start, 18, 0, 1);

  // Force arrow positions — concentrated on medial side if misaligned
  const forceColor = misaligned ? FORCE_RED : FORCE_GREEN;

  // The femur (thigh bone) — top
  const femurAngle = misaligned ? 8 : 0; // slight inward tilt when misaligned

  return (
    <div style={{
      position: "absolute",
      left: x, top: y,
      opacity: jointOp,
      transform: `scale(${scale})`,
      transformOrigin: "center",
    }}>
      {/* Femur (upper bone) */}
      <div style={{
        position: "absolute",
        left: 60, top: -200,
        width: 60, height: 220,
        background: `linear-gradient(180deg, ${BONE}60, ${BONE})`,
        borderRadius: "30px 30px 10px 10px",
        transform: `rotate(${femurAngle}deg)`,
        transformOrigin: "bottom center",
      }} />

      {/* Knee gap / joint space */}
      <div style={{
        position: "absolute",
        left: 40, top: 10,
        width: 100, height: 30,
        background: `${CHARCOAL}`,
        borderRadius: 15,
      }}>
        {/* Meniscus — medial (inner) */}
        <div style={{
          position: "absolute",
          left: 5, top: 5,
          width: 35, height: 20,
          borderRadius: "0 0 20px 20px",
          background: MENISCUS,
          opacity: misaligned ? 1 : 0.6,
          boxShadow: misaligned ? `0 0 14px ${STRESS_HIGH}60` : "none",
        }} />
        {/* Meniscus — lateral (outer) */}
        <div style={{
          position: "absolute",
          right: 5, top: 5,
          width: 35, height: 20,
          borderRadius: "0 0 20px 20px",
          background: MENISCUS,
          opacity: 0.6,
        }} />
      </div>

      {/* Tibia (lower bone) */}
      <div style={{
        position: "absolute",
        left: 60, top: 40,
        width: 60, height: 220,
        background: `linear-gradient(180deg, ${BONE}, ${BONE}60)`,
        borderRadius: "10px 10px 30px 30px",
      }} />

      {/* Force arrows */}
      {misaligned ? (
        // Concentrated force — all arrows pointing to medial meniscus
        <>
          {[0, 1, 2].map((i) => {
            const arrowDelay = start + 20 + i * 8;
            const arrowOp = ease(frame, arrowDelay, 12, 0, 1);
            const arrowX = -30 - i * 30;
            const arrowY = 15 + (i - 1) * 15;
            const arrowLen = ease(frame, arrowDelay, 16, 0, 60 + i * 10, Easing.out(Easing.quad));
            return (
              <div key={`force-${i}`} style={{
                position: "absolute",
                left: arrowX - arrowLen, top: arrowY,
                opacity: arrowOp,
              }}>
                {/* Arrow line */}
                <div style={{
                  width: arrowLen, height: 4,
                  background: FORCE_RED,
                  borderRadius: 2,
                }} />
                {/* Arrow head */}
                <div style={{
                  position: "absolute",
                  right: -8, top: -6,
                  width: 0, height: 0,
                  borderLeft: `12px solid ${FORCE_RED}`,
                  borderTop: "8px solid transparent",
                  borderBottom: "8px solid transparent",
                }} />
              </div>
            );
          })}
          {/* "3x LOAD" label */}
          <div style={{
            ...fadeUp(frame, start + 50),
            position: "absolute",
            left: -140, top: -20,
            fontSize: 28, fontFamily: F.mono,
            color: STRESS_HIGH, fontWeight: 800,
            letterSpacing: 2,
          }}>
            3x LOAD
          </div>
        </>
      ) : (
        // Distributed force — arrows spread evenly across joint
        <>
          {[0, 1, 2, 3].map((i) => {
            const arrowDelay = start + 20 + i * 6;
            const arrowOp = ease(frame, arrowDelay, 12, 0, 1);
            const arrowY = -40;
            const arrowX = 25 + i * 30;
            const arrowLen = ease(frame, arrowDelay, 16, 0, 40, Easing.out(Easing.quad));
            return (
              <div key={`force-${i}`} style={{
                position: "absolute",
                left: arrowX, top: arrowY - arrowLen,
                opacity: arrowOp,
                display: "flex", flexDirection: "column", alignItems: "center",
              }}>
                <div style={{
                  width: 4, height: arrowLen,
                  background: FORCE_GREEN,
                  borderRadius: 2,
                }} />
                <div style={{
                  width: 0, height: 0,
                  borderTop: `10px solid ${FORCE_GREEN}`,
                  borderLeft: "7px solid transparent",
                  borderRight: "7px solid transparent",
                }} />
              </div>
            );
          })}
          {/* "EVEN" label */}
          <div style={{
            ...fadeUp(frame, start + 50),
            position: "absolute",
            left: 20, top: -80,
            fontSize: 28, fontFamily: F.mono,
            color: STRESS_LOW, fontWeight: 800,
            letterSpacing: 2,
          }}>
            EVEN LOAD
          </div>
        </>
      )}
    </div>
  );
}

/** Warrior II leg outline — simplified geometric */
function WarriorLeg({ frame, start, misaligned, side }: {
  frame: number; start: number; misaligned: boolean; side: "left" | "right";
}) {
  const legOp = ease(frame, start, 18, 0, 1);
  const kneeInward = misaligned ? 25 : 0; // knee drifts inward

  return (
    <div style={{
      opacity: legOp,
      position: "relative",
      width: 300, height: 500,
    }}>
      {/* Thigh line */}
      <div style={{
        position: "absolute",
        left: 100, top: 0,
        width: 6, height: 220,
        background: BONE,
        borderRadius: 3,
        transform: `rotate(${side === "left" ? 30 : -30}deg)`,
        transformOrigin: "top center",
      }} />

      {/* Knee marker */}
      <div style={{
        position: "absolute",
        left: side === "left" ? 140 + kneeInward : 140 - kneeInward,
        top: 200,
        width: 24, height: 24,
        borderRadius: "50%",
        background: misaligned ? STRESS_HIGH : BONE,
        border: `3px solid ${misaligned ? STRESS_HIGH : `${BONE}80`}`,
        boxShadow: misaligned ? `0 0 16px ${STRESS_HIGH}50` : "none",
      }} />

      {/* Shin line */}
      <div style={{
        position: "absolute",
        left: side === "left" ? 148 + kneeInward : 148 - kneeInward,
        top: 220,
        width: 6, height: 250,
        background: BONE,
        borderRadius: 3,
      }} />

      {/* Ankle foot */}
      <div style={{
        position: "absolute",
        left: side === "left" ? 130 + kneeInward : 130 - kneeInward,
        top: 465,
        width: 50, height: 8,
        background: `${BONE}60`,
        borderRadius: 4,
      }} />

      {/* Alignment guide line (vertical) — shows correct track */}
      <div style={{
        position: "absolute",
        left: 149, top: 180,
        width: 2, height: 300,
        background: misaligned ? `${STRESS_HIGH}25` : `${STRESS_LOW}25`,
        borderRadius: 1,
        // Dashed
        backgroundImage: misaligned
          ? `repeating-linear-gradient(180deg, ${STRESS_HIGH}25 0px, ${STRESS_HIGH}25 8px, transparent 8px, transparent 16px)`
          : `repeating-linear-gradient(180deg, ${STRESS_LOW}25 0px, ${STRESS_LOW}25 8px, transparent 8px, transparent 16px)`,
      }} />
    </div>
  );
}

// ═══ MAIN COMPOSITION ═══

export const Yoga_Set2_C: React.FC = () => {
  const frame = useCurrentFrame();

  // Scene timing
  const s1 = sceneVis(frame, 0, 115);          // Hook: "Your knee in Warrior II"
  const s2 = sceneVis(frame, 115, 290);         // Split: Wrong side
  const s3 = sceneVis(frame, 290, 430);         // Split: Both sides compared
  const s4 = sceneVis(frame, 430, 540, 12, 1);  // CTA

  // Divider line animation
  const dividerHeight = ease(frame, 120, 40, 0, 1600, Easing.out(Easing.quad));

  return (
    <div style={{
      width: 2160, height: 2160,
      background: CHARCOAL,
      overflow: "hidden",
      position: "relative",
      fontFamily: F.sans,
    }}>

      {/* Blueprint grid background */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `
          linear-gradient(${CREAM}03 1px, transparent 1px),
          linear-gradient(90deg, ${CREAM}03 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }} />

      {/* Film grain */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.05, pointerEvents: "none", zIndex: 100,
        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E")`,
      }} />

      {/* ═══ SCENE 1: HOOK (0-115) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        opacity: s1,
        padding: 160,
      }}>
        {/* Category tag */}
        <div style={{
          ...fadeUp(frame, 5),
          fontSize: 26, fontFamily: F.mono,
          color: `${CREAM}40`, letterSpacing: 6,
          textTransform: "uppercase",
          marginBottom: 50,
        }}>
          Alignment Analysis
        </div>

        {/* Main hook */}
        <div style={{
          ...fadeUp(frame, 14, 22),
          fontSize: 100, fontFamily: F.serif,
          color: CREAM, textAlign: "center",
          lineHeight: 1.25,
        }}>
          Your knee in
          <br />
          <span style={{ color: MENISCUS }}>Warrior II.</span>
        </div>

        <div style={{
          width: ease(frame, 48, 20, 0, 500),
          height: 2, background: BONE,
          margin: "50px 0", opacity: 0.3,
        }} />

        <div style={{
          ...fadeUp(frame, 58, 18),
          fontSize: 52, fontFamily: F.sans,
          color: `${CREAM}70`, textAlign: "center",
          lineHeight: 1.5,
        }}>
          What you can't see
          <br />
          is what's causing the damage.
        </div>

        {/* Small knee icon hint */}
        <div style={{
          ...fadeUp(frame, 85),
          marginTop: 60,
          width: 50, height: 50,
          borderRadius: "50%",
          border: `3px solid ${MENISCUS}50`,
        }} />
      </div>

      {/* ═══ PERSISTENT: Center divider (appears in scenes 2-3) ═══ */}
      {(frame >= 115 && frame <= 430) && (
        <div style={{
          position: "absolute",
          left: 1078, top: (2160 - dividerHeight) / 2,
          width: 4, height: dividerHeight,
          background: `linear-gradient(180deg, transparent, ${CREAM}20, ${CREAM}20, transparent)`,
          borderRadius: 2,
          opacity: sceneVis(frame, 115, 430, 14, 14),
        }} />
      )}

      {/* ═══ SCENE 2: WRONG ALIGNMENT — Left panel focus (115-290) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: s2,
      }}>
        {/* LEFT PANEL — The misalignment */}
        <div style={{
          position: "absolute",
          left: 80, top: 200, width: 960, height: 1760,
          display: "flex", flexDirection: "column",
          alignItems: "center",
        }}>
          {/* Panel label */}
          <div style={{
            ...fadeUp(frame, 122),
            fontSize: 30, fontFamily: F.mono,
            color: STRESS_HIGH, letterSpacing: 5,
            textTransform: "uppercase",
            marginBottom: 40,
          }}>
            What Most People Do
          </div>

          {/* Warrior II leg — misaligned */}
          <div style={{ position: "relative", marginTop: 40 }}>
            <WarriorLeg frame={frame} start={130} misaligned={true} side="left" />
          </div>

          {/* Knee joint close-up */}
          <div style={{
            position: "relative",
            marginTop: 80,
            width: 300, height: 300,
          }}>
            <KneeJoint frame={frame} start={160} misaligned={true} x={60} y={120} scale={1.3} />
          </div>

          {/* Explanation */}
          <div style={{
            ...fadeUp(frame, 220),
            marginTop: 100,
            textAlign: "center", maxWidth: 700,
          }}>
            <div style={{
              fontSize: 36, fontFamily: F.sans,
              color: CREAM, lineHeight: 1.5,
              fontWeight: 500,
            }}>
              Knee drifts inward.
            </div>
            <div style={{
              fontSize: 30, fontFamily: F.sans,
              color: `${CREAM}60`, lineHeight: 1.5,
              marginTop: 10,
            }}>
              All load concentrates on the
              <br />
              <span style={{ color: MENISCUS, fontWeight: 600 }}>medial meniscus.</span>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL — dimmed, teaser */}
        <div style={{
          position: "absolute",
          right: 80, top: 200, width: 960, height: 1760,
          display: "flex", flexDirection: "column",
          alignItems: "center",
          opacity: 0.15,
        }}>
          <div style={{
            fontSize: 30, fontFamily: F.mono,
            color: CREAM, letterSpacing: 5,
            textTransform: "uppercase",
            marginBottom: 40,
          }}>
            The Fix
          </div>
          <div style={{
            marginTop: 200,
            fontSize: 60, fontFamily: F.serif,
            color: CREAM,
          }}>
            ?
          </div>
        </div>
      </div>

      {/* ═══ SCENE 3: BOTH PANELS — Comparison (290-430) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: s3,
      }}>
        {/* LEFT PANEL — Wrong (carried forward, dimmed) */}
        <div style={{
          position: "absolute",
          left: 80, top: 200, width: 960, height: 1760,
          display: "flex", flexDirection: "column",
          alignItems: "center",
          opacity: 0.65,
        }}>
          <div style={{
            fontSize: 30, fontFamily: F.mono,
            color: STRESS_HIGH, letterSpacing: 5,
            textTransform: "uppercase",
            marginBottom: 40,
            opacity: 0.7,
          }}>
            Knee Inward
          </div>

          <div style={{ position: "relative", marginTop: 40 }}>
            <WarriorLeg frame={frame} start={290} misaligned={true} side="left" />
          </div>

          <div style={{
            position: "relative",
            marginTop: 80, width: 300, height: 300,
          }}>
            <KneeJoint frame={frame} start={295} misaligned={true} x={60} y={120} scale={1.2} />
          </div>

          {/* Impact label */}
          <div style={{
            ...fadeUp(frame, 310),
            marginTop: 80,
            padding: "16px 32px",
            background: `${STRESS_HIGH}15`,
            borderRadius: 10,
            border: `2px solid ${STRESS_HIGH}30`,
          }}>
            <div style={{
              fontSize: 32, fontFamily: F.mono,
              color: STRESS_HIGH, fontWeight: 700,
            }}>
              MEDIAL OVERLOAD
            </div>
          </div>
        </div>

        {/* RIGHT PANEL — Correct (revealed) */}
        <div style={{
          position: "absolute",
          right: 80, top: 200, width: 960, height: 1760,
          display: "flex", flexDirection: "column",
          alignItems: "center",
        }}>
          <div style={{
            ...fadeUp(frame, 298),
            fontSize: 30, fontFamily: F.mono,
            color: STRESS_LOW, letterSpacing: 5,
            textTransform: "uppercase",
            marginBottom: 40,
          }}>
            Knee Over Ankle
          </div>

          <div style={{
            ...fadeUp(frame, 305),
            position: "relative", marginTop: 40,
          }}>
            <WarriorLeg frame={frame} start={308} misaligned={false} side="right" />
          </div>

          <div style={{
            ...fadeUp(frame, 330),
            position: "relative",
            marginTop: 80, width: 300, height: 300,
          }}>
            <KneeJoint frame={frame} start={335} misaligned={false} x={60} y={120} scale={1.2} />
          </div>

          {/* Impact label */}
          <div style={{
            ...fadeUp(frame, 370),
            marginTop: 80,
            padding: "16px 32px",
            background: `${STRESS_LOW}15`,
            borderRadius: 10,
            border: `2px solid ${STRESS_LOW}30`,
          }}>
            <div style={{
              fontSize: 32, fontFamily: F.mono,
              color: STRESS_LOW, fontWeight: 700,
            }}>
              LOAD DISTRIBUTED
            </div>
          </div>
        </div>

        {/* Bottom insight text */}
        <div style={{
          position: "absolute",
          left: 0, right: 0, bottom: 200,
          display: "flex", flexDirection: "column",
          alignItems: "center",
        }}>
          <div style={{
            ...fadeUp(frame, 390, 18),
            fontSize: 40, fontFamily: F.serif,
            color: CREAM, textAlign: "center",
            fontStyle: "italic", lineHeight: 1.5,
          }}>
            Same pose. Different force distribution.
          </div>
          <div style={{
            ...fadeUp(frame, 405),
            fontSize: 30, fontFamily: F.sans,
            color: `${CREAM}55`, marginTop: 12,
          }}>
            One protects your joint. The other degrades it.
          </div>
        </div>
      </div>

      {/* ═══ SCENE 4: CTA (430-540) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        opacity: s4,
        padding: 160,
      }}>
        {/* Authority line */}
        <div style={{
          ...fadeUp(frame, 435),
          fontSize: 30, fontFamily: F.sans,
          color: `${CREAM}50`, textAlign: "center",
          lineHeight: 1.6, marginBottom: 50,
          maxWidth: 800,
        }}>
          Alignment is the difference between
          <br />
          building your body and wearing it down.
        </div>

        <div style={{
          ...fadeUp(frame, 455, 22),
          fontSize: 140, fontFamily: F.serif,
          color: CREAM, letterSpacing: 18,
        }}>
          SORA
        </div>

        <div style={{
          ...fadeUp(frame, 468),
          fontSize: 42, fontFamily: F.sans,
          color: BONE, letterSpacing: 6,
          marginTop: 14,
        }}>
          YOGA · PORTLAND
        </div>

        <div style={{
          width: ease(frame, 480, 18, 0, 350),
          height: 2,
          background: `linear-gradient(90deg, transparent, ${CARTILAGE}, transparent)`,
          margin: "50px 0",
        }} />

        <div style={{
          ...fadeUp(frame, 492),
          fontSize: 34, fontFamily: F.sans,
          color: `${CREAM}60`, textAlign: "center",
          lineHeight: 1.6,
        }}>
          Small classes. Precision alignment.
          <br />
          Teachers with 10+ years experience.
        </div>

        <div style={{
          ...fadeUp(frame, 515),
          fontSize: 26, fontFamily: F.mono,
          color: `${CARTILAGE}70`, letterSpacing: 4,
          marginTop: 30,
        }}>
          YOUR BODY WILL KNOW THE DIFFERENCE
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
