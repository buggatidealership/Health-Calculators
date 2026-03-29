import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";

// REEL 4: Amazon Beauty — K-Beauty Sheet Mask
// Abstract→Product photography. Skin science → product reveal.
// 18s = 540 frames @ 30fps, 1080x1920

const C = {
  bg: "#FFF5F2",
  pink: "#FFDDD2",
  coral: "#E8A090",
  deepCoral: "#D4756A",
  epidermis: "#FBC4B4",
  dermis: "#E89080",
  subcutis: "#D07060",
  text: "#3D2B26",
  sub: "#9A7B72",
  white: "#FFFFFF",
  accent: "#C46B5E",
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

// Skin layer cross-section component
const SkinLayer: React.FC<{
  frame: number; y: number; height: number; color: string; label: string; delay: number;
}> = ({ frame, y, height, color, label, delay }) => {
  const op = ease(frame, delay, 16, 0, 1);
  const slideX = ease(frame, delay, 20, -60, 0);
  return (
    <div style={{
      position: "absolute", left: 120, right: 120, top: y,
      height, background: color, borderRadius: 12,
      opacity: op, transform: `translateX(${slideX}px)`,
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <span style={{
        fontSize: 28, fontFamily: F.sans, color: C.white, fontWeight: 600,
        letterSpacing: 2, textTransform: "uppercase",
      }}>{label}</span>
    </div>
  );
};

// Droplet animation component
const Droplet: React.FC<{
  frame: number; x: number; startFrame: number; evaporates: boolean;
}> = ({ frame, x, startFrame, evaporates }) => {
  const t = Math.max(0, frame - startFrame);
  const dropY = interpolate(t, [0, 20], [0, 80], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });
  const dropOp = evaporates
    ? interpolate(t, [20, 60], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
    : interpolate(t, [0, 20], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const dropScale = evaporates
    ? interpolate(t, [20, 60], [1, 0.3], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
    : 1;
  // Absorption glow for non-evaporating
  const glowOp = !evaporates ? interpolate(t, [30, 60], [0, 0.6], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) : 0;

  return (
    <div style={{ position: "absolute", left: x, top: 200 + dropY }}>
      {/* Glow under sheet */}
      {!evaporates && (
        <div style={{
          position: "absolute", left: -20, top: 10, width: 80, height: 80,
          borderRadius: "50%", background: `radial-gradient(circle, ${C.coral}88, transparent)`,
          opacity: glowOp,
        }} />
      )}
      <div style={{
        width: 40, height: 52, borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
        background: `linear-gradient(180deg, ${C.coral}, ${C.deepCoral})`,
        opacity: dropOp, transform: `scale(${dropScale})`,
      }} />
    </div>
  );
};

export const AmzCat_Mask: React.FC = () => {
  const frame = useCurrentFrame();

  // Scene timing: 4 scenes across 540 frames
  const s1 = { start: 0, end: 135 };     // Scene 1: Skin layers (0-4.5s)
  const s2 = { start: 120, end: 285 };   // Scene 2: Science comparison (4-9.5s)
  const s3 = { start: 270, end: 420 };   // Scene 3: Product reveal (9-14s)
  const s4 = { start: 405, end: 540 };   // Scene 4: CTA (13.5-18s)

  const vis1 = sceneVis(frame, s1.start, s1.end, 10, 15);
  const vis2 = sceneVis(frame, s2.start, s2.end, 12, 15);
  const vis3 = sceneVis(frame, s3.start, s3.end, 15, 12);
  const vis4 = sceneVis(frame, s4.start, s4.end, 12, 1);

  return (
    <AbsoluteFill style={{ background: C.bg }}>

      {/* ── SCENE 1: Abstract skin layers ── */}
      {vis1 > 0 && (
        <AbsoluteFill style={{ opacity: vis1 }}>
          {/* Soft radial glow */}
          <div style={{
            position: "absolute", top: 200, left: "50%", transform: "translateX(-50%)",
            width: 800, height: 800, borderRadius: "50%",
            background: `radial-gradient(circle, ${C.pink}60, transparent)`,
          }} />

          {/* Skin layers */}
          <SkinLayer frame={frame} y={480} height={140} color={C.epidermis} label="Epidermis" delay={15} />
          <SkinLayer frame={frame} y={640} height={180} color={C.dermis} label="Dermis" delay={30} />
          <SkinLayer frame={frame} y={840} height={200} color={C.subcutis} label="Subcutis" delay={45} />

          {/* Animated absorption particles */}
          {[0, 1, 2, 3, 4].map((i) => {
            const pDelay = 50 + i * 12;
            const pOp = ease(frame, pDelay, 20, 0, 0.6);
            const pY = ease(frame, pDelay, 60, 420, 520 + i * 30);
            return (
              <div key={i} style={{
                position: "absolute",
                left: 200 + i * 140,
                top: pY,
                width: 12, height: 12, borderRadius: "50%",
                background: C.coral, opacity: pOp,
              }} />
            );
          })}

          {/* Text */}
          <div style={{
            position: "absolute", bottom: 380, left: 80, right: 80,
            textAlign: "center", ...fadeUp(frame, 60, 18),
          }}>
            <div style={{
              fontSize: 52, fontFamily: F.serif, color: C.text,
              lineHeight: 1.3,
            }}>
              Your skin absorbs more{"\n"}at night than during the day.
            </div>
          </div>

          {/* Small science note */}
          <div style={{
            position: "absolute", bottom: 300, left: 80, right: 80,
            textAlign: "center", ...fadeUp(frame, 80, 14),
          }}>
            <div style={{ fontSize: 28, fontFamily: F.sans, color: C.sub }}>
              Transepidermal absorption peaks during sleep
            </div>
          </div>
        </AbsoluteFill>
      )}

      {/* ── SCENE 2: Sheet mask science ── */}
      {vis2 > 0 && (
        <AbsoluteFill style={{ opacity: vis2 }}>
          {/* Title */}
          <div style={{
            position: "absolute", top: 160, left: 80, right: 80,
            textAlign: "center", ...fadeUp(frame, s2.start + 5, 16),
          }}>
            <div style={{ fontSize: 44, fontFamily: F.serif, color: C.text, lineHeight: 1.3 }}>
              Sheet masks lock in <span style={{ color: C.accent }}>10x</span> more serum than applying by hand.
            </div>
          </div>

          {/* Comparison: bare skin (left) vs sheet mask (right) */}
          {/* Left side — bare skin */}
          <div style={{
            position: "absolute", left: 60, top: 500, width: 420, textAlign: "center",
            ...fadeUp(frame, s2.start + 25, 16),
          }}>
            {/* Skin bar */}
            <div style={{
              width: 340, height: 60, margin: "0 auto", borderRadius: 10,
              background: C.epidermis, position: "relative",
            }}>
              <Droplet frame={frame} x={150} startFrame={s2.start + 40} evaporates={true} />
            </div>
            <div style={{ fontSize: 24, fontFamily: F.sans, color: C.sub, marginTop: 100 }}>
              Bare skin
            </div>
            {/* Evaporation arrows */}
            {[0, 1, 2].map((i) => {
              const arrowDelay = s2.start + 60 + i * 8;
              const arrowOp = ease(frame, arrowDelay, 20, 0, 0.5);
              const arrowY = ease(frame, arrowDelay, 40, 0, -50);
              return (
                <div key={i} style={{
                  position: "absolute", left: 100 + i * 80, top: -30 + arrowY,
                  fontSize: 22, color: C.sub, opacity: arrowOp,
                }}>↑</div>
              );
            })}
            <div style={{
              fontSize: 26, fontFamily: F.sans, color: C.deepCoral, fontWeight: 600,
              marginTop: 16, ...fadeUp(frame, s2.start + 80, 14),
            }}>Evaporates</div>
          </div>

          {/* Right side — sheet mask */}
          <div style={{
            position: "absolute", right: 60, top: 500, width: 420, textAlign: "center",
            ...fadeUp(frame, s2.start + 35, 16),
          }}>
            {/* Sheet layer */}
            <div style={{
              width: 340, height: 16, margin: "0 auto", borderRadius: 8,
              background: C.white, border: `2px solid ${C.pink}`,
              boxShadow: `0 4px 20px ${C.pink}80`,
              position: "relative", zIndex: 2,
            }} />
            {/* Skin bar */}
            <div style={{
              width: 340, height: 60, margin: "4px auto 0", borderRadius: 10,
              background: C.epidermis, position: "relative",
            }}>
              <Droplet frame={frame} x={150} startFrame={s2.start + 45} evaporates={false} />
            </div>
            <div style={{ fontSize: 24, fontFamily: F.sans, color: C.sub, marginTop: 84 }}>
              Under sheet mask
            </div>
            {/* Absorption arrows */}
            {[0, 1, 2].map((i) => {
              const arrowDelay = s2.start + 65 + i * 8;
              const arrowOp = ease(frame, arrowDelay, 20, 0, 0.6);
              const arrowY = ease(frame, arrowDelay, 40, 0, 30);
              return (
                <div key={i} style={{
                  position: "absolute", left: 100 + i * 80, top: 85 + arrowY,
                  fontSize: 22, color: C.accent, opacity: arrowOp,
                }}>↓</div>
              );
            })}
            <div style={{
              fontSize: 26, fontFamily: F.sans, color: C.accent, fontWeight: 600,
              marginTop: 16, ...fadeUp(frame, s2.start + 85, 14),
            }}>Absorbs deeply</div>
          </div>
        </AbsoluteFill>
      )}

      {/* ── SCENE 3: Product reveal ── */}
      {vis3 > 0 && (
        <AbsoluteFill style={{ opacity: vis3 }}>
          {/* Soft glow behind product */}
          <div style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: 700, height: 700, borderRadius: "50%",
            background: `radial-gradient(circle, ${C.pink}50, transparent)`,
            opacity: ease(frame, s3.start, 30, 0, 1),
          }} />

          {/* Product image */}
          <div style={{
            position: "absolute", top: 280, left: 0, right: 0,
            display: "flex", justifyContent: "center",
            ...fadeUp(frame, s3.start + 10, 20, 60),
          }}>
            <Img
              src={staticFile("products/amazon-mask.png")}
              style={{
                width: 680, height: 680, objectFit: "contain",
                filter: `drop-shadow(0 20px 60px ${C.coral}40)`,
              }}
            />
          </div>

          {/* Product name */}
          <div style={{
            position: "absolute", top: 140, left: 80, right: 80,
            textAlign: "center", ...fadeUp(frame, s3.start + 20, 16),
          }}>
            <div style={{ fontSize: 48, fontFamily: F.serif, color: C.text, lineHeight: 1.2 }}>
              Biodance Bio-Collagen Mask
            </div>
          </div>

          {/* Subtitle */}
          <div style={{
            position: "absolute", bottom: 340, left: 80, right: 80,
            textAlign: "center", ...fadeUp(frame, s3.start + 35, 14),
          }}>
            <div style={{ fontSize: 36, fontFamily: F.sans, color: C.sub, lineHeight: 1.4 }}>
              30 minutes. You'll feel the difference.
            </div>
          </div>
        </AbsoluteFill>
      )}

      {/* ── SCENE 4: CTA ── */}
      {vis4 > 0 && (
        <AbsoluteFill style={{ opacity: vis4 }}>
          {/* Soft background gradient */}
          <div style={{
            position: "absolute", inset: 0,
            background: `linear-gradient(180deg, ${C.bg}, ${C.pink}30)`,
          }} />

          {/* Star rating */}
          <div style={{
            position: "absolute", top: 620, left: 0, right: 0,
            textAlign: "center", ...fadeUp(frame, s4.start + 5, 14),
          }}>
            <div style={{ fontSize: 56, fontFamily: F.serif, color: C.accent }}>
              ⭐ 4.7
            </div>
            <div style={{ fontSize: 30, fontFamily: F.sans, color: C.sub, marginTop: 8 }}>
              12,000+ reviews
            </div>
          </div>

          {/* Price */}
          <div style={{
            position: "absolute", top: 820, left: 0, right: 0,
            textAlign: "center", ...fadeUp(frame, s4.start + 20, 14),
          }}>
            <div style={{
              display: "inline-block", padding: "16px 48px",
              borderRadius: 50, background: C.accent, color: C.white,
              fontSize: 40, fontFamily: F.sans, fontWeight: 700,
            }}>
              Under $25 on Amazon
            </div>
          </div>

          {/* Link in bio */}
          <div style={{
            position: "absolute", top: 960, left: 0, right: 0,
            textAlign: "center", ...fadeUp(frame, s4.start + 35, 14),
          }}>
            <div style={{ fontSize: 34, fontFamily: F.sans, color: C.text, fontWeight: 500 }}>
              Link in bio
            </div>
          </div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};
