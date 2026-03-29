import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";

// REEL 6: Amazon Home — Stanley Cup Accessory (Straw Topper)
// Problem→Solution with product. Fun, not serious.
// 18s = 540 frames @ 30fps, 1080x1920

const C = {
  sage: "#7A9E7E",
  sageDark: "#5C7E60",
  sageLight: "#A8C8AC",
  cream: "#FFF8F0",
  white: "#FFFFFF",
  text: "#2E3E30",
  sub: "#7A8B7C",
  red: "#D45B5B",
  warm: "#F5E6D0",
};
const F = {
  serif: "'DM Serif Display', Georgia, serif",
  sans: "'Inter', -apple-system, sans-serif",
};

function ease(frame: number, start: number, dur: number, from: number, to: number) {
  return interpolate(frame, [start, start + dur], [from, to], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic),
  });
}
function fadeUp(frame: number, start: number, dur = 14, dist = 40) {
  return {
    opacity: ease(frame, start, dur, 0, 1),
    transform: `translateY(${ease(frame, start, dur, dist, 0)}px)`,
  };
}
function sceneVis(frame: number, start: number, end: number, fi = 10, fo = 10) {
  if (frame < start - 3 || frame > end + fo + 3) return 0;
  const fadeIn = interpolate(frame, [start, start + fi], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [end, end + Math.max(fo, 1)], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return Math.min(fadeIn, fadeOut);
}

// Problem card with X mark
const ProblemCard: React.FC<{
  frame: number; start: number; text: string; y: number;
}> = ({ frame, start, text, y }) => {
  const op = ease(frame, start, 14, 0, 1);
  const slideX = ease(frame, start, 18, 60, 0);
  // X mark appears slightly after
  const xOp = ease(frame, start + 10, 10, 0, 1);
  const xScale = ease(frame, start + 10, 12, 0.5, 1);

  return (
    <div style={{
      position: "absolute", top: y, left: 80, right: 80,
      opacity: op, transform: `translateX(${slideX}px)`,
      display: "flex", alignItems: "center", gap: 24,
    }}>
      {/* X mark */}
      <div style={{
        width: 60, height: 60, borderRadius: 30,
        background: `${C.red}20`, border: `2px solid ${C.red}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        opacity: xOp, transform: `scale(${xScale})`,
        flexShrink: 0,
      }}>
        <span style={{ fontSize: 32, color: C.red, fontWeight: 800 }}>✕</span>
      </div>
      {/* Text */}
      <div style={{
        background: C.white, borderRadius: 20, padding: "24px 32px",
        flex: 1, boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
      }}>
        <span style={{ fontSize: 36, fontFamily: F.sans, color: C.text, fontWeight: 600 }}>
          {text}
        </span>
      </div>
    </div>
  );
};

export const AmzCat_Stanley: React.FC = () => {
  const frame = useCurrentFrame();

  // Scene timing
  const s1 = { start: 0, end: 135 };     // Hook (0-4.5s)
  const s2 = { start: 120, end: 285 };   // Problems (4-9.5s)
  const s3 = { start: 270, end: 420 };   // Product reveal (9-14s)
  const s4 = { start: 405, end: 540 };   // CTA (13.5-18s)

  const vis1 = sceneVis(frame, s1.start, s1.end, 10, 15);
  const vis2 = sceneVis(frame, s2.start, s2.end, 12, 15);
  const vis3 = sceneVis(frame, s3.start, s3.end, 15, 12);
  const vis4 = sceneVis(frame, s4.start, s4.end, 12, 1);

  return (
    <AbsoluteFill style={{ background: C.sage }}>

      {/* ── SCENE 1: Hook ── */}
      {vis1 > 0 && (
        <AbsoluteFill style={{ opacity: vis1 }}>
          <div style={{ position: "absolute", inset: 0, background: C.sage }} />

          {/* Decorative circles */}
          {[0, 1, 2].map((i) => (
            <div key={i} style={{
              position: "absolute",
              top: 300 + i * 200,
              left: 100 + i * 250,
              width: 180 - i * 40,
              height: 180 - i * 40,
              borderRadius: "50%",
              border: `2px solid ${C.white}15`,
              opacity: ease(frame, 10 + i * 8, 20, 0, 0.3),
            }} />
          ))}

          {/* Main text */}
          <div style={{
            position: "absolute", top: 0, bottom: 0, left: 80, right: 80,
            display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
          }}>
            <div style={{
              ...fadeUp(frame, 8, 18),
              textAlign: "center",
            }}>
              <div style={{
                fontSize: 72, fontFamily: F.serif, color: C.white,
                lineHeight: 1.2,
              }}>
                Your Stanley has a problem.
              </div>
            </div>

            {/* Playful underline */}
            <div style={{
              width: ease(frame, 30, 20, 0, 300), height: 4,
              background: C.cream, borderRadius: 2, marginTop: 30,
              opacity: ease(frame, 30, 14, 0, 0.7),
            }} />
          </div>
        </AbsoluteFill>
      )}

      {/* ── SCENE 2: Problems ── */}
      {vis2 > 0 && (
        <AbsoluteFill style={{ opacity: vis2 }}>
          <div style={{
            position: "absolute", inset: 0,
            background: `linear-gradient(180deg, ${C.sage}, ${C.sageDark})`,
          }} />

          <ProblemCard frame={frame} start={s2.start + 10} y={440} text="Bugs get in your straw 🪰" />
          <ProblemCard frame={frame} start={s2.start + 40} y={600} text="Kids chew the straw tip 👶" />
          <ProblemCard frame={frame} start={s2.start + 70} y={760} text="It looks like everyone else's 😐" />

          {/* Title */}
          <div style={{
            position: "absolute", top: 260, left: 80, right: 80,
            textAlign: "center", ...fadeUp(frame, s2.start + 5, 14),
          }}>
            <div style={{ fontSize: 44, fontFamily: F.serif, color: C.white, lineHeight: 1.3 }}>
              Three reasons you need this
            </div>
          </div>
        </AbsoluteFill>
      )}

      {/* ── SCENE 3: Product reveal ── */}
      {vis3 > 0 && (
        <AbsoluteFill style={{ opacity: vis3 }}>
          <div style={{ position: "absolute", inset: 0, background: C.cream }} />

          {/* Title */}
          <div style={{
            position: "absolute", top: 180, left: 80, right: 80,
            textAlign: "center", ...fadeUp(frame, s3.start + 5, 16),
          }}>
            <div style={{ fontSize: 48, fontFamily: F.serif, color: C.text, lineHeight: 1.2 }}>
              Meet your new{"\n"}straw topper.
            </div>
          </div>

          {/* Product image */}
          <div style={{
            position: "absolute", top: 400, left: 0, right: 0,
            display: "flex", justifyContent: "center",
            ...fadeUp(frame, s3.start + 15, 22, 50),
          }}>
            <Img
              src={staticFile("products/amazon-stanley.png")}
              style={{
                width: 700, height: 700, objectFit: "contain",
                filter: "drop-shadow(0 16px 40px rgba(0,0,0,0.1))",
              }}
            />
          </div>

          {/* Compatibility note */}
          <div style={{
            position: "absolute", bottom: 300, left: 0, right: 0,
            textAlign: "center", ...fadeUp(frame, s3.start + 40, 14),
          }}>
            <div style={{
              display: "inline-block", padding: "14px 36px",
              borderRadius: 30, background: `${C.sage}20`, border: `1px solid ${C.sage}40`,
            }}>
              <span style={{ fontSize: 28, fontFamily: F.sans, color: C.sageDark, fontWeight: 600 }}>
                Fits all Stanley 30oz + 40oz
              </span>
            </div>
          </div>
        </AbsoluteFill>
      )}

      {/* ── SCENE 4: CTA ── */}
      {vis4 > 0 && (
        <AbsoluteFill style={{ opacity: vis4 }}>
          <div style={{ position: "absolute", inset: 0, background: C.cream }} />

          {/* Rating */}
          <div style={{
            position: "absolute", top: 540, left: 0, right: 0,
            textAlign: "center", ...fadeUp(frame, s4.start + 5, 14),
          }}>
            <div style={{ fontSize: 54, fontFamily: F.serif, color: C.text }}>
              ⭐ 4.6
            </div>
            <div style={{ fontSize: 28, fontFamily: F.sans, color: C.sub, marginTop: 8 }}>
              8,000+ reviews
            </div>
          </div>

          {/* Price — big and fun */}
          <div style={{
            position: "absolute", top: 730, left: 0, right: 0,
            textAlign: "center", ...fadeUp(frame, s4.start + 20, 14),
          }}>
            <div style={{
              display: "inline-block", padding: "18px 48px",
              borderRadius: 50, background: C.sage, color: C.white,
              fontSize: 44, fontFamily: F.sans, fontWeight: 800,
            }}>
              $7.99 · Set of 6
            </div>
          </div>

          {/* Tagline */}
          <div style={{
            position: "absolute", top: 880, left: 80, right: 80,
            textAlign: "center", ...fadeUp(frame, s4.start + 35, 14),
          }}>
            <div style={{
              fontSize: 34, fontFamily: F.serif, color: C.sageDark,
              fontStyle: "italic", lineHeight: 1.4,
            }}>
              The accessory your Stanley is missing.
            </div>
          </div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};
