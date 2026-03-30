import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

// SORA YOGA — REEL A: "The Desk Damage Report"
// FORM ORIGIN: Content is progressive physical deterioration from sitting.
// A damage inspection report makes hourly degradation legible.
// The form IS the content — a body scan with status degradation.
// 540 frames @ 30fps = 18s | 2160x2160 square

const clamp = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };

// Palette — named after content, not function
const STONE = "#C4B5A0";       // warm stone — the neutral body
const FOREST = "#2D4A3E";      // deep forest — healthy status
const CREAM = "#F5F0E8";       // soft cream — background / text
const CHARCOAL = "#3A3A3A";    // charcoal — primary text
const DAMAGE_AMBER = "#C08B5C"; // amber — moderate degradation
const DAMAGE_RED = "#9B4B3A";   // muted red — high degradation
const SCAN_LINE = "#6B8F7E";    // scan sweep color

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
    transform: `translateY(${ease(frame, start, dur, 36, 0)}px)`,
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

/** Body outline — simplified geometric torso/hip/leg silhouette */
function BodyOutline({ frame, hourProgress }: { frame: number; hourProgress: number }) {
  // Body regions with their damage thresholds
  const regions = [
    { id: "neck", label: "CERVICAL SPINE", y: 260, height: 100, threshold: 0.3, damage: "Forward head: +4.5kg load" },
    { id: "thoracic", label: "THORACIC SPINE", y: 380, height: 160, threshold: 0.25, damage: "Rotation: -40%" },
    { id: "hip", label: "HIP FLEXORS", y: 560, height: 140, threshold: 0.2, damage: "Shortened 18%" },
    { id: "diaphragm", label: "DIAPHRAGM", y: 460, height: 80, threshold: 0.35, damage: "Capacity: -25%" },
  ];

  return (
    <div style={{ position: "relative", width: 500, height: 900, margin: "0 auto" }}>
      {/* Central body line — spine */}
      <div style={{
        position: "absolute",
        left: 248, top: 200, width: 4,
        height: 600,
        background: `linear-gradient(180deg, ${STONE}60, ${STONE}30)`,
        borderRadius: 2,
      }} />

      {/* Shoulder bar */}
      <div style={{
        position: "absolute",
        left: 120, top: 280, width: 260, height: 3,
        background: `${STONE}50`,
      }} />

      {/* Hip bar */}
      <div style={{
        position: "absolute",
        left: 150, top: 580, width: 200, height: 3,
        background: `${STONE}50`,
      }} />

      {/* Head circle */}
      <div style={{
        position: "absolute",
        left: 210, top: 180, width: 80, height: 90,
        borderRadius: "50%",
        border: `3px solid ${STONE}60`,
      }} />

      {/* Region markers */}
      {regions.map((region, i) => {
        const regionDamage = Math.max(0, Math.min(1, (hourProgress - region.threshold) / (1 - region.threshold)));
        const statusColor = regionDamage < 0.3 ? FOREST
          : regionDamage < 0.7 ? DAMAGE_AMBER
          : DAMAGE_RED;
        const regionDelay = 160 + i * 30;
        const regionOp = ease(frame, regionDelay, 18, 0, 1);
        const barWidth = ease(frame, regionDelay + 5, 20, 0, regionDamage * 200, Easing.out(Easing.quad));

        return (
          <div key={region.id} style={{ position: "absolute", left: 0, top: region.y, width: "100%", opacity: regionOp }}>
            {/* Region highlight zone on body */}
            <div style={{
              position: "absolute",
              left: 180, top: 0,
              width: 140, height: region.height,
              background: `${statusColor}20`,
              borderLeft: `4px solid ${statusColor}`,
              borderRadius: "0 8px 8px 0",
            }} />

            {/* Connecting line to label */}
            <div style={{
              position: "absolute",
              left: 324, top: region.height / 2 - 1,
              width: ease(frame, regionDelay + 2, 14, 0, 80),
              height: 2,
              background: `${statusColor}40`,
            }} />

            {/* Label + damage bar (right side) */}
            <div style={{
              position: "absolute",
              left: 410, top: region.height / 2 - 40,
              width: 260,
            }}>
              <div style={{
                fontSize: 22, fontFamily: F.mono,
                color: `${CREAM}80`, letterSpacing: 3,
                marginBottom: 8,
              }}>
                {region.label}
              </div>
              {/* Damage bar */}
              <div style={{
                width: 200, height: 8,
                background: `${CREAM}15`,
                borderRadius: 4,
                overflow: "hidden",
              }}>
                <div style={{
                  width: barWidth, height: "100%",
                  background: statusColor,
                  borderRadius: 4,
                }} />
              </div>
              {/* Damage text */}
              <div style={{
                ...fadeUp(frame, regionDelay + 12),
                fontSize: 20, fontFamily: F.sans,
                color: statusColor, fontWeight: 500,
                marginTop: 6,
              }}>
                {region.damage}
              </div>
            </div>
          </div>
        );
      })}

      {/* Scan line sweeping down */}
      {frame >= 140 && frame <= 320 && (
        <div style={{
          position: "absolute",
          left: 100, right: 100,
          top: ease(frame, 140, 180, 180, 780, Easing.inOut(Easing.quad)),
          height: 3,
          background: `linear-gradient(90deg, transparent, ${SCAN_LINE}, transparent)`,
          opacity: 0.7,
          boxShadow: `0 0 20px ${SCAN_LINE}40`,
        }} />
      )}
    </div>
  );
}

/** Hour counter that ticks up */
function HourCounter({ frame, start }: { frame: number; start: number }) {
  const hours = Math.min(8, ease(frame, start, 120, 0, 8, Easing.out(Easing.cubic)));
  const displayHours = Math.round(hours * 10) / 10;
  const progress = hours / 8;
  const counterColor = progress < 0.3 ? FOREST
    : progress < 0.7 ? DAMAGE_AMBER
    : DAMAGE_RED;

  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center",
      gap: 12,
    }}>
      <div style={{
        fontSize: 28, fontFamily: F.mono,
        color: `${CREAM}50`, letterSpacing: 6,
        textTransform: "uppercase",
      }}>
        Hours Seated
      </div>
      <div style={{
        fontSize: 160, fontFamily: F.mono,
        color: counterColor, fontWeight: 700,
        letterSpacing: -6, lineHeight: 1,
      }}>
        {displayHours.toFixed(1)}
      </div>
      {/* Progress bar */}
      <div style={{
        width: 400, height: 6,
        background: `${CREAM}12`,
        borderRadius: 3,
      }}>
        <div style={{
          width: `${progress * 100}%`,
          height: "100%",
          background: `linear-gradient(90deg, ${FOREST}, ${DAMAGE_AMBER}, ${DAMAGE_RED})`,
          borderRadius: 3,
        }} />
      </div>
    </div>
  );
}

/** Status indicator dot */
function StatusDot({ color, pulse, frame }: { color: string; pulse: boolean; frame: number }) {
  const scale = pulse ? 1 + Math.sin(frame * 0.12) * 0.15 : 1;
  return (
    <div style={{
      width: 14, height: 14,
      borderRadius: "50%",
      background: color,
      transform: `scale(${scale})`,
      boxShadow: pulse ? `0 0 12px ${color}60` : "none",
    }} />
  );
}

// ═══ MAIN COMPOSITION ═══

export const Yoga_Set2_A: React.FC = () => {
  const frame = useCurrentFrame();

  // Scene timing
  const s1 = sceneVis(frame, 0, 125);         // Hook: "8 hours. What it costs."
  const s2 = sceneVis(frame, 125, 370);        // Body scan + damage report
  const s3 = sceneVis(frame, 370, 450);        // The full damage summary
  const s4 = sceneVis(frame, 450, 540, 12, 1); // CTA: SORA recovery

  // Hour progress for body scan (Scene 2)
  const hourProgress = ease(frame, 140, 160, 0, 1, Easing.out(Easing.cubic));

  // Report card slide-in
  const reportSlide = ease(frame, 5, 28, 120, 0, Easing.out(Easing.exp));

  return (
    <div style={{
      width: 2160, height: 2160,
      background: CHARCOAL,
      overflow: "hidden",
      position: "relative",
      fontFamily: F.sans,
    }}>

      {/* Subtle grid pattern — like an inspection form */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `
          linear-gradient(${CREAM}04 1px, transparent 1px),
          linear-gradient(90deg, ${CREAM}04 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
      }} />

      {/* Film grain */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.05, pointerEvents: "none", zIndex: 100,
        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E")`,
      }} />

      {/* ═══ PERSISTENT: Report border frame ═══ */}
      <div style={{
        position: "absolute",
        left: 80, right: 80, top: 80, bottom: 80,
        border: `2px solid ${CREAM}12`,
        borderRadius: 16,
        pointerEvents: "none",
        transform: `translateY(${reportSlide}px)`,
        opacity: ease(frame, 0, 20, 0, 1),
      }}>
        {/* Corner brackets */}
        {[
          { left: -2, top: -2, borderLeft: `4px solid ${STONE}40`, borderTop: `4px solid ${STONE}40` },
          { right: -2, top: -2, borderRight: `4px solid ${STONE}40`, borderTop: `4px solid ${STONE}40` },
          { left: -2, bottom: -2, borderLeft: `4px solid ${STONE}40`, borderBottom: `4px solid ${STONE}40` },
          { right: -2, bottom: -2, borderRight: `4px solid ${STONE}40`, borderBottom: `4px solid ${STONE}40` },
        ].map((style, i) => (
          <div key={`corner-${i}`} style={{
            position: "absolute", width: 40, height: 40,
            ...style,
          }} />
        ))}

        {/* Top-left "REPORT" label */}
        <div style={{
          position: "absolute", left: 50, top: -16,
          background: CHARCOAL,
          padding: "4px 20px",
          fontSize: 20, fontFamily: F.mono,
          color: `${STONE}60`, letterSpacing: 8,
          textTransform: "uppercase",
        }}>
          Body Status Report
        </div>
      </div>

      {/* ═══ SCENE 1: HOOK (0-125) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        opacity: s1,
        padding: 160,
      }}>
        {/* Status indicators row */}
        <div style={{
          ...fadeUp(frame, 5),
          display: "flex", gap: 16, alignItems: "center",
          marginBottom: 60,
        }}>
          <StatusDot color={FOREST} pulse={false} frame={frame} />
          <StatusDot color={DAMAGE_AMBER} pulse={false} frame={frame} />
          <StatusDot color={DAMAGE_RED} pulse={true} frame={frame} />
          <div style={{
            fontSize: 22, fontFamily: F.mono,
            color: `${CREAM}50`, letterSpacing: 4,
            marginLeft: 12,
          }}>
            STATUS: DEGRADING
          </div>
        </div>

        {/* Main hook text */}
        <div style={{
          ...fadeUp(frame, 12, 22),
          fontSize: 120, fontFamily: F.serif,
          color: CREAM, textAlign: "center",
          lineHeight: 1.2, letterSpacing: -2,
        }}>
          8 hours at a desk.
        </div>

        <div style={{
          width: ease(frame, 40, 22, 0, 500),
          height: 2,
          background: STONE,
          margin: "50px 0",
          opacity: 0.4,
        }} />

        <div style={{
          ...fadeUp(frame, 50, 20),
          fontSize: 52, fontFamily: F.sans,
          color: STONE, textAlign: "center",
          fontWeight: 400, lineHeight: 1.5,
        }}>
          Here's what it costs your body.
        </div>

        {/* Timestamp */}
        <div style={{
          ...fadeUp(frame, 75),
          position: "absolute", bottom: 160, right: 160,
          fontSize: 20, fontFamily: F.mono,
          color: `${CREAM}30`, letterSpacing: 3,
        }}>
          SCAN INITIATED
        </div>
      </div>

      {/* ═══ SCENE 2: BODY SCAN + DAMAGE (125-370) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "row",
        opacity: s2,
        padding: "140px 120px",
        gap: 40,
      }}>
        {/* Left: Hour counter */}
        <div style={{
          width: 500,
          display: "flex", flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <HourCounter frame={frame} start={130} />

          {/* Cumulative damage percentage */}
          <div style={{
            ...fadeUp(frame, 280),
            marginTop: 60,
            textAlign: "center",
          }}>
            <div style={{
              fontSize: 22, fontFamily: F.mono,
              color: `${CREAM}40`, letterSpacing: 4,
              marginBottom: 12,
            }}>
              CUMULATIVE LOAD
            </div>
            <div style={{
              fontSize: 80, fontFamily: F.mono,
              color: DAMAGE_RED, fontWeight: 700,
            }}>
              {Math.round(ease(frame, 280, 40, 0, 73))}%
            </div>
            <div style={{
              fontSize: 24, fontFamily: F.sans,
              color: `${CREAM}50`, marginTop: 8,
            }}>
              above baseline stress
            </div>
          </div>
        </div>

        {/* Right: Body outline with damage markers */}
        <div style={{ flex: 1, position: "relative" }}>
          <BodyOutline frame={frame} hourProgress={hourProgress} />
        </div>
      </div>

      {/* ═══ SCENE 3: DAMAGE SUMMARY (370-450) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        opacity: s3,
        padding: 160,
      }}>
        <div style={{
          ...fadeUp(frame, 375, 18),
          fontSize: 40, fontFamily: F.mono,
          color: DAMAGE_RED, letterSpacing: 6,
          textTransform: "uppercase",
          marginBottom: 50,
        }}>
          END OF DAY REPORT
        </div>

        {/* Summary stats in a row */}
        <div style={{
          display: "flex", gap: 80, marginBottom: 60,
        }}>
          {[
            { num: "4", unit: "regions", sub: "compromised" },
            { num: "73%", unit: "", sub: "above baseline" },
            { num: "0", unit: "min", sub: "recovery done" },
          ].map((stat, i) => (
            <div key={`stat-${i}`} style={{
              ...fadeUp(frame, 382 + i * 10),
              textAlign: "center",
            }}>
              <div style={{
                fontSize: 90, fontFamily: F.mono,
                color: CREAM, fontWeight: 700, lineHeight: 1,
              }}>
                {stat.num}<span style={{ fontSize: 36, color: STONE }}>{stat.unit}</span>
              </div>
              <div style={{
                fontSize: 24, fontFamily: F.sans,
                color: `${CREAM}50`, marginTop: 10,
              }}>
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          width: ease(frame, 410, 18, 0, 700),
          height: 2,
          background: `linear-gradient(90deg, transparent, ${STONE}, transparent)`,
        }} />

        <div style={{
          ...fadeUp(frame, 420, 16),
          fontSize: 48, fontFamily: F.serif,
          color: STONE, fontStyle: "italic",
          marginTop: 40, textAlign: "center",
        }}>
          Your body kept score all day.
        </div>
      </div>

      {/* ═══ SCENE 4: CTA — SORA Recovery (450-540) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        opacity: s4,
        padding: 160,
      }}>
        {/* Status change */}
        <div style={{
          ...fadeUp(frame, 455),
          display: "flex", gap: 16, alignItems: "center",
          marginBottom: 50,
        }}>
          <StatusDot color={FOREST} pulse={true} frame={frame} />
          <div style={{
            fontSize: 24, fontFamily: F.mono,
            color: FOREST, letterSpacing: 4,
          }}>
            RECOVERY PROTOCOL
          </div>
        </div>

        {/* Brand */}
        <div style={{
          ...fadeUp(frame, 462, 22),
          fontSize: 140, fontFamily: F.serif,
          color: CREAM, letterSpacing: 18, lineHeight: 1,
        }}>
          SORA
        </div>

        <div style={{
          ...fadeUp(frame, 475),
          fontSize: 44, fontFamily: F.sans,
          color: STONE, fontWeight: 400,
          marginTop: 16, letterSpacing: 6,
        }}>
          YOGA · PORTLAND
        </div>

        <div style={{
          width: ease(frame, 485, 18, 0, 300),
          height: 2, background: FOREST,
          margin: "50px 0", opacity: 0.5,
        }} />

        <div style={{
          ...fadeUp(frame, 495, 18),
          fontSize: 38, fontFamily: F.sans,
          color: `${CREAM}70`, textAlign: "center",
          lineHeight: 1.6,
        }}>
          60 minutes to undo 8 hours.
        </div>

        <div style={{
          ...fadeUp(frame, 510),
          fontSize: 28, fontFamily: F.mono,
          color: `${FOREST}80`, letterSpacing: 4,
          marginTop: 30,
        }}>
          MOBILITY · RECOVERY · BREATHWORK
        </div>
      </div>

      {/* Soft vignette */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(20,20,20,0.4) 100%)",
        pointerEvents: "none",
      }} />
    </div>
  );
};
