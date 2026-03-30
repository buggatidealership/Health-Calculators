import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

// FURNITURE REEL 3 — "No two tables. Ever."
// Uniqueness reel. Wood grain as fingerprint.
// Each grain pattern is one-of-one. The material IS the identity.
// Visual: side-by-side grain comparisons, then the "fingerprint" reveal.

const clamp = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };

const WALNUT = "#5C3A21";
const WALNUT_DEEP = "#3E2615";
const AMBER = "#D4915E";
const CREAM = "#F5EDE0";
const WARM_BLACK = "#1A1410";
const COPPER = "#B87333";
const GOLD = "#C9A84C";
const SAGE = "#7A8B6F";

export const Furniture_NoTwo: React.FC = () => {
  const frame = useCurrentFrame();

  const ease = (start: number, dur: number, from: number, to: number, fn = Easing.out(Easing.cubic)) =>
    interpolate(frame, [start, start + dur], [from, to], { ...clamp, easing: fn });

  const fadeIn = (start: number, dur = 14) =>
    interpolate(frame, [start, start + dur], [0, 1], { ...clamp, easing: Easing.out(Easing.cubic) });

  const sceneVis = (start: number, end: number, fi = 12, fo = 12) => {
    if (frame < start - 3 || frame > end + fo + 3) return 0;
    return Math.min(
      interpolate(frame, [start, start + fi], [0, 1], clamp),
      interpolate(frame, [end, end + Math.max(fo, 1)], [1, 0], clamp)
    );
  };

  // ═══ SCENE 1 (0-100): Hook — "No two tables" ═══
  const s1 = sceneVis(0, 100);

  // ═══ SCENE 2 (95-220): Two grain patterns side by side ═══
  const s2 = sceneVis(95, 220);

  // Generate two distinct grain patterns using deterministic math
  const grainSetA = Array.from({ length: 20 }, (_, i) => ({
    y: 100 + i * 70,
    curve: Math.sin(i * 1.3 + 0.5) * 40 + Math.cos(i * 2.1) * 20,
    thickness: 1.5 + Math.sin(i * 0.9) * 0.8,
    opacity: 0.12 + Math.sin(i * 1.7) * 0.05,
  }));

  const grainSetB = Array.from({ length: 20 }, (_, i) => ({
    y: 100 + i * 70,
    curve: Math.cos(i * 1.7 + 2.3) * 35 + Math.sin(i * 0.8) * 25,
    thickness: 1.5 + Math.cos(i * 1.2) * 0.8,
    opacity: 0.12 + Math.cos(i * 2.1) * 0.05,
  }));

  const splitReveal = ease(110, 30, 0, 1);

  // ═══ SCENE 3 (215-350): Fingerprint metaphor ═══
  const s3 = sceneVis(215, 350);

  // Fingerprint-like rings made from grain curves
  const rings = Array.from({ length: 14 }, (_, i) => ({
    radius: 40 + i * 22,
    delay: 230 + i * 4,
    wobble: Math.sin(i * 2.3) * 8 + Math.cos(i * 1.1) * 5,
  }));

  // ═══ SCENE 4 (345-490): CTA — "Yours is waiting" ═══
  const s4 = sceneVis(345, 490, 14, 1);

  return (
    <div style={{
      width: 1080, height: 1920, background: WARM_BLACK,
      overflow: "hidden", position: "relative",
      fontFamily: "'Georgia', 'Times New Roman', serif",
    }}>
      {/* Film grain */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.04, pointerEvents: "none", zIndex: 100,
        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }} />

      {/* ═══ SCENE 1: Hook text ═══ */}
      <div style={{
        position: "absolute", inset: 0, opacity: s1,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", padding: "0 80px",
      }}>
        <div style={{
          fontSize: 72, color: CREAM, textAlign: "center",
          lineHeight: 1.3,
          opacity: fadeIn(8, 20),
          transform: `translateY(${ease(8, 20, 40, 0)}px)`,
        }}>
          No two tables.
        </div>
        <div style={{
          fontSize: 80, color: AMBER, textAlign: "center",
          fontStyle: "italic", lineHeight: 1.3,
          opacity: fadeIn(30, 20),
          transform: `translateY(${ease(30, 20, 30, 0)}px)`,
        }}>
          Ever.
        </div>

        {/* Subtle underline */}
        <div style={{
          width: ease(50, 25, 0, 160), height: 2,
          background: GOLD, opacity: 0.5, marginTop: 40,
        }} />
      </div>

      {/* ═══ SCENE 2: Side-by-side grain ═══ */}
      <div style={{
        position: "absolute", inset: 0, opacity: s2,
      }}>
        {/* Divider line */}
        <div style={{
          position: "absolute", left: 540, top: 200, bottom: 350,
          width: 2, background: `${GOLD}30`,
          opacity: splitReveal,
        }} />

        {/* Labels */}
        <div style={{
          position: "absolute", top: 330, left: 0, width: 540,
          textAlign: "center", opacity: fadeIn(120, 15),
        }}>
          <div style={{
            fontSize: 22, color: `${CREAM}50`, letterSpacing: 6,
            fontFamily: "'Inter', sans-serif", textTransform: "uppercase",
          }}>
            Table #041
          </div>
        </div>
        <div style={{
          position: "absolute", top: 330, left: 540, width: 540,
          textAlign: "center", opacity: fadeIn(125, 15),
        }}>
          <div style={{
            fontSize: 22, color: `${CREAM}50`, letterSpacing: 6,
            fontFamily: "'Inter', sans-serif", textTransform: "uppercase",
          }}>
            Table #042
          </div>
        </div>

        {/* Grain pattern A (left) */}
        <div style={{
          position: "absolute", left: 0, top: 0, width: 540, height: 1920,
          overflow: "hidden",
        }}>
          <svg width="540" height="1920" viewBox="0 0 540 1920" style={{ opacity: splitReveal }}>
            {grainSetA.map((g, i) => {
              const lineOp = fadeIn(115 + i * 2, 15);
              return (
                <path key={i}
                  d={`M 40 ${g.y} Q ${200 + g.curve} ${g.y + 35} ${500} ${g.y + Math.sin(i) * 10}`}
                  fill="none" stroke={AMBER}
                  strokeWidth={g.thickness}
                  opacity={g.opacity * lineOp}
                />
              );
            })}
          </svg>
        </div>

        {/* Grain pattern B (right) */}
        <div style={{
          position: "absolute", left: 540, top: 0, width: 540, height: 1920,
          overflow: "hidden",
        }}>
          <svg width="540" height="1920" viewBox="0 0 540 1920" style={{ opacity: splitReveal }}>
            {grainSetB.map((g, i) => {
              const lineOp = fadeIn(118 + i * 2, 15);
              return (
                <path key={i}
                  d={`M 40 ${g.y} Q ${200 + g.curve} ${g.y + 35} ${500} ${g.y + Math.cos(i) * 10}`}
                  fill="none" stroke={COPPER}
                  strokeWidth={g.thickness}
                  opacity={g.opacity * lineOp}
                />
              );
            })}
          </svg>
        </div>

        {/* "Same species. Different soul." */}
        <div style={{
          position: "absolute", bottom: 380, left: 0, right: 0,
          textAlign: "center",
          opacity: fadeIn(175, 18),
          transform: `translateY(${ease(175, 18, 25, 0)}px)`,
        }}>
          <div style={{ fontSize: 38, color: CREAM, fontStyle: "italic" }}>
            Same species.
          </div>
          <div style={{ fontSize: 42, color: AMBER, fontStyle: "italic", marginTop: 8 }}>
            Different soul.
          </div>
        </div>
      </div>

      {/* ═══ SCENE 3: Fingerprint / grain rings ═══ */}
      <div style={{
        position: "absolute", inset: 0, opacity: s3,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
      }}>
        {/* Fingerprint made from grain lines */}
        <svg width="700" height="700" viewBox="-350 -350 700 700" style={{
          marginTop: -100,
        }}>
          {rings.map((r, i) => {
            const ringOp = fadeIn(r.delay, 12);
            // Slightly wobbly ellipses — like growth rings / fingerprints
            const rx = r.radius + r.wobble;
            const ry = r.radius - r.wobble * 0.5 + Math.sin(i * 3) * 6;
            const rot = Math.sin(i * 1.5) * 8;
            return (
              <ellipse key={i}
                cx={Math.sin(i * 0.7) * 5} cy={Math.cos(i * 0.9) * 5}
                rx={rx * ringOp} ry={ry * ringOp}
                fill="none"
                stroke={i % 2 === 0 ? AMBER : COPPER}
                strokeWidth={1.5 - i * 0.05}
                opacity={0.2 * ringOp}
                transform={`rotate(${rot})`}
              />
            );
          })}
          {/* Center dot */}
          <circle cx="0" cy="0" r={6 * fadeIn(280, 15)} fill={GOLD} opacity={0.6} />
        </svg>

        {/* Label */}
        <div style={{
          marginTop: 60,
          textAlign: "center",
          opacity: fadeIn(295, 18),
          transform: `translateY(${ease(295, 18, 25, 0)}px)`,
        }}>
          <div style={{
            fontSize: 28, color: `${CREAM}60`, letterSpacing: 6,
            fontFamily: "'Inter', sans-serif", textTransform: "uppercase",
          }}>
            Every grain tells
          </div>
          <div style={{
            fontSize: 48, color: CREAM, marginTop: 12,
            fontStyle: "italic",
          }}>
            a different story
          </div>
        </div>
      </div>

      {/* ═══ SCENE 4: CTA ═══ */}
      <div style={{
        position: "absolute", inset: 0, opacity: s4,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", padding: "0 80px",
      }}>
        <div style={{
          width: ease(355, 25, 0, 200), height: 1.5,
          background: GOLD, opacity: 0.5, marginBottom: 50,
        }} />

        <div style={{
          fontSize: 52, color: CREAM, textAlign: "center", lineHeight: 1.4,
          opacity: fadeIn(360, 18),
          transform: `translateY(${ease(360, 18, 30, 0)}px)`,
        }}>
          Yours is waiting
        </div>
        <div style={{
          fontSize: 56, color: AMBER, textAlign: "center",
          fontStyle: "italic", lineHeight: 1.4,
          opacity: fadeIn(375, 18),
          transform: `translateY(${ease(375, 18, 25, 0)}px)`,
        }}>
          in the wood.
        </div>

        {/* Table number placeholder */}
        <div style={{
          marginTop: 70,
          opacity: fadeIn(395, 18),
          padding: "16px 40px",
          border: `1px solid ${GOLD}30`,
          borderRadius: 4,
        }}>
          <div style={{
            fontSize: 20, color: `${CREAM}50`, letterSpacing: 8,
            fontFamily: "'Inter', sans-serif", textTransform: "uppercase",
          }}>
            Table #043 — yours?
          </div>
        </div>

        <div style={{
          marginTop: 50,
          opacity: fadeIn(415, 15),
        }}>
          <div style={{
            fontSize: 20, color: `${CREAM}35`, letterSpacing: 6,
            fontFamily: "'Inter', sans-serif", textTransform: "uppercase",
          }}>
            Commission yours
          </div>
        </div>

        <div style={{
          width: ease(425, 25, 0, 120), height: 1.5,
          background: GOLD, opacity: 0.3, marginTop: 50,
        }} />
      </div>
    </div>
  );
};
