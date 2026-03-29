import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";

// REEL 5: Amazon Health — Magnesium Supplement
// Data reveal pattern. Numbers as hooks, product as payoff.
// 18s = 540 frames @ 30fps, 1080x1920

const C = {
  dark: "#1a1f2e",
  darkCard: "#222840",
  white: "#FFFFFF",
  offWhite: "#F8F9FC",
  teal: "#3d8b7a",
  tealLight: "#5ABEAA",
  text: "#2C3040",
  sub: "#8890A4",
  accent: "#3d8b7a",
  red: "#E85D5D",
};
const F = {
  serif: "'DM Serif Display', Georgia, serif",
  sans: "'Inter', -apple-system, sans-serif",
  mono: "'JetBrains Mono', 'Courier New', monospace",
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

// Animated counter
function countUp(frame: number, start: number, dur: number, from: number, to: number) {
  const raw = ease(frame, start, dur, from, to);
  return Math.round(raw);
}

// Pulse animation for symptom items
function pulse(frame: number, start: number, period = 40) {
  const t = Math.max(0, frame - start);
  const cycle = (t % period) / period;
  const scale = cycle < 0.5 ? 1 + cycle * 0.06 : 1 + (1 - cycle) * 0.06;
  return scale;
}

export const AmzCat_Magnesium: React.FC = () => {
  const frame = useCurrentFrame();

  // Scene timing
  const s1 = { start: 0, end: 135 };     // Big number hook (0-4.5s)
  const s2 = { start: 120, end: 285 };   // Symptoms (4-9.5s)
  const s3 = { start: 270, end: 420 };   // Product reveal (9-14s)
  const s4 = { start: 405, end: 540 };   // CTA (13.5-18s)

  const vis1 = sceneVis(frame, s1.start, s1.end, 10, 15);
  const vis2 = sceneVis(frame, s2.start, s2.end, 12, 15);
  const vis3 = sceneVis(frame, s3.start, s3.end, 15, 12);
  const vis4 = sceneVis(frame, s4.start, s4.end, 12, 1);

  // Background color transition: dark for s1-s2, then to white for s3-s4
  const bgTransition = ease(frame, 260, 30, 0, 1);
  const bgColor = bgTransition < 0.5 ? C.dark : C.offWhite;

  return (
    <AbsoluteFill style={{ background: bgColor, transition: "none" }}>
      {/* Gradient overlay for smooth bg transition */}
      <div style={{
        position: "absolute", inset: 0,
        background: C.offWhite,
        opacity: bgTransition,
      }} />

      {/* ── SCENE 1: Big number hook ── */}
      {vis1 > 0 && (
        <AbsoluteFill style={{ opacity: vis1 }}>
          {/* Dark bg ensured */}
          <div style={{ position: "absolute", inset: 0, background: C.dark }} />

          {/* Subtle grid lines for data feel */}
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} style={{
              position: "absolute", left: 0, right: 0, top: 300 + i * 300,
              height: 1, background: `${C.white}08`,
            }} />
          ))}

          {/* Big percentage */}
          <div style={{
            position: "absolute", top: 520, left: 0, right: 0,
            textAlign: "center",
          }}>
            <div style={{
              fontSize: 220, fontFamily: F.mono, fontWeight: 800, color: C.tealLight,
              letterSpacing: -8,
              opacity: ease(frame, 5, 20, 0, 1),
              transform: `scale(${ease(frame, 5, 20, 0.8, 1)})`,
            }}>
              {countUp(frame, 5, 30, 0, 75)}%
            </div>
          </div>

          {/* Subtext */}
          <div style={{
            position: "absolute", top: 800, left: 100, right: 100,
            textAlign: "center", ...fadeUp(frame, 30, 16),
          }}>
            <div style={{ fontSize: 48, fontFamily: F.serif, color: C.white, lineHeight: 1.3 }}>
              of Americans are{"\n"}magnesium deficient.
            </div>
          </div>

          {/* Source hint */}
          <div style={{
            position: "absolute", bottom: 340, left: 0, right: 0,
            textAlign: "center", ...fadeUp(frame, 50, 12),
          }}>
            <div style={{ fontSize: 22, fontFamily: F.sans, color: C.sub }}>
              NIH Dietary Data, 2024
            </div>
          </div>
        </AbsoluteFill>
      )}

      {/* ── SCENE 2: Symptoms ── */}
      {vis2 > 0 && (
        <AbsoluteFill style={{ opacity: vis2 }}>
          <div style={{ position: "absolute", inset: 0, background: C.dark }} />

          {/* Symptoms stagger in */}
          {[
            { text: "Can't sleep", delay: s2.start + 10, icon: "🌙" },
            { text: "Muscle cramps", delay: s2.start + 40, icon: "💪" },
            { text: "Anxiety that won't quit", delay: s2.start + 70, icon: "🧠" },
          ].map((item, i) => {
            const op = ease(frame, item.delay, 16, 0, 1);
            const slideX = ease(frame, item.delay, 18, 50, 0);
            const sc = pulse(frame, item.delay + 16);
            return (
              <div key={i} style={{
                position: "absolute", top: 460 + i * 180, left: 100, right: 100,
                opacity: op, transform: `translateX(${slideX}px) scale(${sc})`,
              }}>
                <div style={{
                  display: "flex", alignItems: "center", gap: 24,
                  background: C.darkCard, borderRadius: 20, padding: "28px 36px",
                  border: `1px solid ${C.teal}30`,
                }}>
                  <span style={{ fontSize: 44 }}>{item.icon}</span>
                  <span style={{
                    fontSize: 40, fontFamily: F.sans, color: C.white, fontWeight: 600,
                  }}>{item.text}</span>
                </div>
              </div>
            );
          })}

          {/* "Sound familiar?" */}
          <div style={{
            position: "absolute", bottom: 400, left: 0, right: 0,
            textAlign: "center", ...fadeUp(frame, s2.start + 110, 14),
          }}>
            <div style={{
              fontSize: 44, fontFamily: F.serif, color: C.tealLight, fontStyle: "italic",
            }}>
              Sound familiar?
            </div>
          </div>
        </AbsoluteFill>
      )}

      {/* ── SCENE 3: Product reveal ── */}
      {vis3 > 0 && (
        <AbsoluteFill style={{ opacity: vis3 }}>
          <div style={{ position: "absolute", inset: 0, background: C.offWhite }} />

          {/* Title */}
          <div style={{
            position: "absolute", top: 180, left: 80, right: 80,
            textAlign: "center", ...fadeUp(frame, s3.start + 5, 16),
          }}>
            <div style={{ fontSize: 44, fontFamily: F.serif, color: C.text, lineHeight: 1.3 }}>
              Magnesium glycinate.
            </div>
            <div style={{
              fontSize: 32, fontFamily: F.sans, color: C.accent, marginTop: 16,
              ...fadeUp(frame, s3.start + 20, 14),
            }}>
              The form your body actually absorbs.
            </div>
          </div>

          {/* Product image */}
          <div style={{
            position: "absolute", top: 480, left: 0, right: 0,
            display: "flex", justifyContent: "center",
            ...fadeUp(frame, s3.start + 30, 22, 60),
          }}>
            <Img
              src={staticFile("products/amazon-magnesium.png")}
              style={{
                width: 560, height: 700, objectFit: "contain",
                filter: `drop-shadow(0 20px 50px rgba(0,0,0,0.12))`,
              }}
            />
          </div>

          {/* Trust badge */}
          <div style={{
            position: "absolute", bottom: 260, left: 0, right: 0,
            textAlign: "center", ...fadeUp(frame, s3.start + 50, 14),
          }}>
            <div style={{
              display: "inline-block", padding: "12px 36px",
              borderRadius: 30, background: `${C.teal}15`, border: `1px solid ${C.teal}30`,
            }}>
              <span style={{ fontSize: 26, fontFamily: F.sans, color: C.teal, fontWeight: 600 }}>
                Third-party tested · GMP certified
              </span>
            </div>
          </div>
        </AbsoluteFill>
      )}

      {/* ── SCENE 4: CTA ── */}
      {vis4 > 0 && (
        <AbsoluteFill style={{ opacity: vis4 }}>
          <div style={{ position: "absolute", inset: 0, background: C.offWhite }} />

          {/* Best seller badge */}
          <div style={{
            position: "absolute", top: 520, left: 0, right: 0,
            textAlign: "center", ...fadeUp(frame, s4.start + 5, 14),
          }}>
            <div style={{ fontSize: 54, fontFamily: F.serif, color: C.text }}>
              ⭐ 4.8
            </div>
            <div style={{
              display: "inline-block", marginTop: 16, padding: "8px 28px",
              borderRadius: 20, background: C.teal, color: C.white,
              fontSize: 28, fontFamily: F.sans, fontWeight: 700,
            }}>
              #1 Best Seller
            </div>
          </div>

          {/* Price */}
          <div style={{
            position: "absolute", top: 730, left: 0, right: 0,
            textAlign: "center", ...fadeUp(frame, s4.start + 20, 14),
          }}>
            <div style={{
              fontSize: 52, fontFamily: F.serif, color: C.text, fontWeight: 700,
            }}>
              Under $20
            </div>
          </div>

          {/* Subscribe & Save */}
          <div style={{
            position: "absolute", top: 860, left: 0, right: 0,
            textAlign: "center", ...fadeUp(frame, s4.start + 35, 14),
          }}>
            <div style={{
              display: "inline-block", padding: "16px 44px",
              borderRadius: 50, border: `2px solid ${C.teal}`,
              fontSize: 32, fontFamily: F.sans, color: C.teal, fontWeight: 600,
            }}>
              Subscribe & Save for 15% off
            </div>
          </div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};
