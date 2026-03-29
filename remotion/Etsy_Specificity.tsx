import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, Easing, interpolate } from "remotion";

// ── Self-contained helpers ──
const ease = (t: number) => Easing.out(Easing.cubic)(t);

const fadeUp = (
  frame: number,
  start: number,
  dur: number,
  dist = 30
): { opacity: number; transform: string } => {
  const o = interpolate(frame, [start, start + dur], [0, 1], {
    easing: ease,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const y = interpolate(frame, [start, start + dur], [dist, 0], {
    easing: ease,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return { opacity: o, transform: `translateY(${y}px)` };
};

const sceneVis = (
  frame: number,
  inStart: number,
  inEnd: number,
  outStart: number,
  outEnd: number
): number => {
  if (frame < inStart) return 0;
  if (frame >= inStart && frame < inEnd) {
    return interpolate(frame, [inStart, inEnd], [0, 1], {
      easing: ease,
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  }
  if (frame >= inEnd && frame < outStart) return 1;
  if (frame >= outStart && frame <= outEnd) {
    const v = interpolate(frame, [outStart, outEnd], [1, 0], {
      easing: ease,
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    return Math.max(v, 1 / 255);
  }
  return 0;
};

// ── Palette ──
const BG = "#f5f2ed";
const DARK = "#2c2824";
const BROWN = "#8b6f47";
const BROWN_LIGHT = "#c4a67a";
const TEAL = "#4a8b7f";
const TEAL_LIGHT = "#6bb5a6";
const MUTED = "rgba(44,40,36,0.45)";

// ── Timeline milestones ──
interface Milestone {
  day: number;
  label: string;
  icon: "clay" | "wheel" | "dry" | "bisque" | "glaze" | "kiln" | "done";
}

const milestones: Milestone[] = [
  { day: 1, label: "Wedge clay", icon: "clay" },
  { day: 3, label: "Throw on wheel", icon: "wheel" },
  { day: 5, label: "Dry slowly", icon: "dry" },
  { day: 10, label: "First firing", icon: "bisque" },
  { day: 14, label: "Glaze", icon: "glaze" },
  { day: 18, label: "Second firing", icon: "kiln" },
  { day: 22, label: "Approved", icon: "done" },
];

// ── Icon shapes ──
const MilestoneIcon: React.FC<{ icon: Milestone["icon"]; color: string; size: number }> = ({
  icon,
  color,
  size,
}) => {
  const s: React.CSSProperties = {
    width: size,
    height: size,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  switch (icon) {
    case "clay":
      return (
        <div style={s}>
          <div
            style={{
              width: size * 0.7,
              height: size * 0.5,
              background: color,
              borderRadius: "4px 4px 8px 8px",
            }}
          />
        </div>
      );
    case "wheel":
      return (
        <div style={s}>
          <div
            style={{
              width: size * 0.65,
              height: size * 0.65,
              borderRadius: "50%",
              border: `3px solid ${color}`,
            }}
          />
        </div>
      );
    case "dry":
      return (
        <div style={s}>
          <div style={{ display: "flex", gap: 3 }}>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  width: 4,
                  height: size * 0.5 + i * 4,
                  background: color,
                  borderRadius: 2,
                  opacity: 0.6 + i * 0.15,
                }}
              />
            ))}
          </div>
        </div>
      );
    case "bisque":
      return (
        <div style={s}>
          <div
            style={{
              width: size * 0.6,
              height: size * 0.6,
              background: `linear-gradient(135deg, ${color}, #d4856a)`,
              borderRadius: "3px 3px 6px 6px",
            }}
          />
        </div>
      );
    case "glaze":
      return (
        <div style={s}>
          <div
            style={{
              width: size * 0.65,
              height: size * 0.65,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${TEAL}, ${TEAL_LIGHT})`,
            }}
          />
        </div>
      );
    case "kiln":
      return (
        <div style={s}>
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: `${size * 0.3}px solid transparent`,
              borderRight: `${size * 0.3}px solid transparent`,
              borderBottom: `${size * 0.55}px solid #d4856a`,
            }}
          />
        </div>
      );
    case "done":
      return (
        <div style={s}>
          <div
            style={{
              width: size * 0.65,
              height: size * 0.65,
              borderRadius: "50%",
              background: TEAL,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: size * 0.25,
                height: size * 0.4,
                borderRight: `3px solid white`,
                borderBottom: `3px solid white`,
                transform: "rotate(45deg) translateY(-2px)",
              }}
            />
          </div>
        </div>
      );
  }
};

export const Etsy_Specificity: React.FC = () => {
  const frame = useCurrentFrame();

  // Scene timing — 540 frames, 30fps = 18s
  // Scene 1: 0–120 (4s) — hook text
  // Scene 2: 105–360 (8.5s) — timeline builds
  // Scene 3: 345–450 (3.5s) — reflection text
  // Scene 4: 435–540 (3.5s) — brand + price

  const s1 = sceneVis(frame, 0, 15, 105, 125);
  const s2 = sceneVis(frame, 105, 130, 345, 365);
  const s3 = sceneVis(frame, 345, 370, 435, 455);
  const s4 = sceneVis(frame, 435, 460, 530, 540);

  // Timeline progress bar
  const timelineProgress = interpolate(frame, [135, 340], [0, 1], {
    easing: ease,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Each milestone appears at a staggered time
  const milestoneAppearStart = 145;
  const milestoneSpacing = 28; // frames between each milestone appearing

  return (
    <AbsoluteFill style={{ backgroundColor: BG }}>
      {/* Scene 1: "This mug took 22 days." */}
      <AbsoluteFill
        style={{
          opacity: s1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={fadeUp(frame, 8, 40, 25)}>
          <div
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: 28,
              color: MUTED,
              letterSpacing: 6,
              textTransform: "uppercase",
              textAlign: "center",
              marginBottom: 24,
            }}
          >
            one mug
          </div>
          <div
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: 72,
              color: DARK,
              textAlign: "center",
              lineHeight: 1.3,
            }}
          >
            This mug took
            <br />
            <span style={{ color: BROWN, fontSize: 96 }}>22 days.</span>
          </div>
        </div>
      </AbsoluteFill>

      {/* Scene 2: Timeline */}
      <AbsoluteFill
        style={{
          opacity: s2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 60px",
        }}
      >
        {/* Title */}
        <div
          style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontSize: 22,
            color: MUTED,
            letterSpacing: 5,
            textTransform: "uppercase",
            marginBottom: 60,
            ...fadeUp(frame, 130, 30, 15),
          }}
        >
          The journey
        </div>

        {/* Timeline bar container */}
        <div
          style={{
            width: "100%",
            maxWidth: 800,
            position: "relative",
          }}
        >
          {/* Background bar */}
          <div
            style={{
              width: "100%",
              height: 6,
              background: "rgba(139,111,71,0.15)",
              borderRadius: 3,
              position: "relative",
            }}
          >
            {/* Filled progress */}
            <div
              style={{
                width: `${timelineProgress * 100}%`,
                height: "100%",
                background: `linear-gradient(90deg, ${BROWN}, ${TEAL})`,
                borderRadius: 3,
                transition: "none",
              }}
            />
          </div>

          {/* Milestones */}
          {milestones.map((m, i) => {
            const xPos = (m.day / 22) * 100;
            const appearFrame = milestoneAppearStart + i * milestoneSpacing;
            const milestoneOpacity = interpolate(frame, [appearFrame, appearFrame + 25], [0, 1], {
              easing: ease,
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            const milestoneY = interpolate(frame, [appearFrame, appearFrame + 25], [15, 0], {
              easing: ease,
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            const isLast = i === milestones.length - 1;

            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: `${xPos}%`,
                  top: -60,
                  transform: `translateX(-50%) translateY(${milestoneY}px)`,
                  opacity: milestoneOpacity,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                {/* Icon */}
                <MilestoneIcon
                  icon={m.icon}
                  color={isLast ? TEAL : BROWN}
                  size={40}
                />

                {/* Dot on the bar */}
                <div
                  style={{
                    width: isLast ? 14 : 10,
                    height: isLast ? 14 : 10,
                    borderRadius: "50%",
                    background: isLast ? TEAL : BROWN,
                    position: "absolute",
                    top: 55,
                    border: `2px solid ${BG}`,
                  }}
                />

                {/* Label below bar */}
                <div
                  style={{
                    position: "absolute",
                    top: 76,
                    whiteSpace: "nowrap",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontSize: 17,
                      color: isLast ? TEAL : DARK,
                      fontWeight: isLast ? 600 : 400,
                    }}
                  >
                    {m.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                      fontSize: 14,
                      color: MUTED,
                      marginTop: 3,
                    }}
                  >
                    Day {m.day}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Day counter */}
        <div
          style={{
            marginTop: 180,
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: 48,
            color: BROWN,
            textAlign: "center",
            opacity: interpolate(frame, [200, 230], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          Day{" "}
          {Math.round(
            interpolate(frame, [200, 340], [1, 22], {
              easing: ease,
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            })
          )}
        </div>
      </AbsoluteFill>

      {/* Scene 3: Reflection */}
      <AbsoluteFill
        style={{
          opacity: s3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ padding: "0 80px", ...fadeUp(frame, 355, 40, 25) }}>
          <div
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: 46,
              color: DARK,
              textAlign: "center",
              lineHeight: 1.55,
              fontStyle: "italic",
            }}
          >
            22 days of patience
            <br />
            for one morning of coffee.
          </div>
        </div>
      </AbsoluteFill>

      {/* Scene 4: Brand + price */}
      <AbsoluteFill
        style={{
          opacity: s4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 35,
        }}
      >
        {/* Brand */}
        <div style={fadeUp(frame, 455, 35, 20)}>
          <div
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: 54,
              color: DARK,
              letterSpacing: 8,
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            Earthen Studio
          </div>
        </div>

        {/* Price */}
        <div style={fadeUp(frame, 470, 30, 15)}>
          <div
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: 68,
              color: TEAL,
              textAlign: "center",
              fontWeight: 400,
            }}
          >
            $38
          </div>
        </div>

        {/* Worth the wait */}
        <div style={fadeUp(frame, 485, 30, 15)}>
          <div
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: 30,
              color: BROWN,
              textAlign: "center",
              fontStyle: "italic",
              letterSpacing: 2,
            }}
          >
            Worth the wait.
          </div>
        </div>

        {/* CTA line */}
        <div style={fadeUp(frame, 500, 25, 12)}>
          <div
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: 20,
              color: MUTED,
              letterSpacing: 4,
              textTransform: "uppercase",
              marginTop: 30,
              textAlign: "center",
            }}
          >
            Shop the collection · Link in bio
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
