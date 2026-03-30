import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

// FURNITURE REEL 1 — "This table was a barn door in 1947"
// Material origin story. Rough texture → precision geometry.
// Mid-century palette: walnut, amber, cream, charcoal.
// Content→Form: reclaimed wood IS transformation. The reel IS the transformation.

const clamp = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };

const WALNUT = "#5C3A21";
const WALNUT_LIGHT = "#8B6914";
const AMBER = "#D4915E";
const CREAM = "#F5EDE0";
const CHARCOAL = "#2A2A2A";
const WARM_BLACK = "#1A1410";
const RUST = "#B8653A";
const SAGE = "#7A8B6F";
const GOLD = "#C9A84C";

export const Furniture_BarnDoor: React.FC = () => {
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

  // Ambient wood grain lines — slow drift
  const grainOffset = (i: number) => Math.sin((frame + i * 40) * 0.015) * 3;

  // ═══ SCENE 1 (0-120): Weathered texture — "1947" ═══
  const s1 = sceneVis(0, 120);

  // Rough plank lines — irregular, weathered
  const planks = Array.from({ length: 18 }, (_, i) => ({
    y: 100 + i * 100 + Math.sin(i * 2.7) * 15,
    width: 800 + Math.sin(i * 1.3) * 200,
    opacity: 0.08 + Math.random() * 0.06,
    delay: 5 + i * 2,
    thickness: 2 + Math.sin(i * 3.1) * 1.5,
  }));

  // Year counter
  const yearDisplay = Math.round(interpolate(frame, [30, 90], [1947, 1947], clamp));

  // ═══ SCENE 2 (115-250): Transformation — rough to smooth ═══
  const s2 = sceneVis(115, 250);

  // The wipe: rough texture dissolves left-to-right into smooth
  const wipeX = ease(130, 80, 0, 100);

  // Grain lines become regular and elegant
  const grainLines = Array.from({ length: 24 }, (_, i) => ({
    y: 300 + i * 55,
    curve: Math.sin(i * 0.8) * 30,
    delay: 135 + i * 2,
  }));

  // ═══ SCENE 3 (245-380): The table — geometric reveal ═══
  const s3 = sceneVis(245, 380);

  // Table silhouette builds from lines
  const tableTopWidth = ease(260, 30, 0, 700);
  const tableTopOpacity = fadeIn(255, 20);
  const legReveal = ease(285, 25, 0, 1);
  const legHeight = ease(285, 30, 0, 350);

  // Hairpin leg curves — 4 legs
  const hairpinLegs = [
    { x: 220, dir: 1 },
    { x: 340, dir: -1 },
    { x: 740, dir: 1 },
    { x: 860, dir: -1 },
  ];

  // ═══ SCENE 4 (375-480): CTA — "Your story, built to last" ═══
  const s4 = sceneVis(375, 480, 14, 1);

  return (
    <div style={{
      width: 1080, height: 1920, background: WARM_BLACK,
      overflow: "hidden", position: "relative",
      fontFamily: "'Georgia', 'Times New Roman', serif",
    }}>
      {/* Subtle grain overlay */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.04, pointerEvents: "none", zIndex: 100,
        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }} />

      {/* ═══ SCENE 1: Weathered wood — 1947 ═══ */}
      <div style={{
        position: "absolute", inset: 0, opacity: s1,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
      }}>
        {/* Rough plank texture lines */}
        {planks.map((p, i) => (
          <div key={i} style={{
            position: "absolute",
            top: p.y + grainOffset(i),
            left: (1080 - p.width) / 2,
            width: p.width * fadeIn(p.delay, 25),
            height: p.thickness,
            background: `linear-gradient(90deg, transparent, ${WALNUT}${Math.round(p.opacity * 255).toString(16).padStart(2, "0")}, ${AMBER}${Math.round(p.opacity * 0.7 * 255).toString(16).padStart(2, "0")}, transparent)`,
            borderRadius: 1,
          }} />
        ))}

        {/* Nail holes — weathered marks */}
        {[
          { x: 280, y: 400, d: 40 }, { x: 750, y: 600, d: 48 },
          { x: 400, y: 1100, d: 55 }, { x: 680, y: 1400, d: 62 },
        ].map((nail, i) => (
          <div key={`nail-${i}`} style={{
            position: "absolute", top: nail.y, left: nail.x,
            width: 12, height: 12, borderRadius: "50%",
            background: CHARCOAL,
            opacity: fadeIn(nail.d, 10) * 0.3,
            boxShadow: `0 0 8px 2px ${CHARCOAL}40`,
          }} />
        ))}

        {/* Year stamp */}
        <div style={{
          position: "absolute", top: 760,
          opacity: fadeIn(35, 20),
          transform: `rotate(-3deg)`,
        }}>
          <div style={{
            fontSize: 180, fontWeight: 400, color: RUST,
            opacity: 0.4, letterSpacing: 8,
            fontFamily: "'Georgia', serif",
          }}>
            1947
          </div>
        </div>

        {/* Hook text */}
        <div style={{
          position: "absolute", top: 1050,
          textAlign: "center", padding: "0 80px",
        }}>
          <div style={{
            fontSize: 52, color: CREAM, lineHeight: 1.35,
            opacity: fadeIn(55, 18),
            transform: `translateY(${ease(55, 18, 30, 0)}px)`,
          }}>
            This table was
          </div>
          <div style={{
            fontSize: 62, color: AMBER, lineHeight: 1.3,
            fontStyle: "italic",
            opacity: fadeIn(68, 18),
            transform: `translateY(${ease(68, 18, 30, 0)}px)`,
          }}>
            a barn door
          </div>
          <div style={{
            fontSize: 52, color: CREAM, lineHeight: 1.35,
            opacity: fadeIn(80, 18),
            transform: `translateY(${ease(80, 18, 30, 0)}px)`,
          }}>
            in 1947
          </div>
        </div>
      </div>

      {/* ═══ SCENE 2: Transformation wipe ═══ */}
      <div style={{
        position: "absolute", inset: 0, opacity: s2,
      }}>
        {/* Left side: rough (disappearing) */}
        <div style={{
          position: "absolute", inset: 0,
          clipPath: `inset(0 ${wipeX}% 0 0)`,
        }}>
          {planks.slice(0, 12).map((p, i) => (
            <div key={`rough-${i}`} style={{
              position: "absolute",
              top: 300 + i * 110 + grainOffset(i) * 2,
              left: 80,
              width: 920,
              height: p.thickness + 1,
              background: `linear-gradient(90deg, transparent 5%, ${WALNUT}30, ${WALNUT}20, transparent 95%)`,
              transform: `rotate(${Math.sin(i * 1.7) * 0.5}deg)`,
            }} />
          ))}
        </div>

        {/* Right side: refined grain (appearing) */}
        <div style={{
          position: "absolute", inset: 0,
          clipPath: `inset(0 0 0 ${100 - wipeX}%)`,
        }}>
          {grainLines.map((g, i) => (
            <div key={`fine-${i}`} style={{
              position: "absolute",
              top: g.y,
              left: 80,
              width: 920,
              height: 1.5,
              opacity: 0.15,
              background: `linear-gradient(90deg, transparent, ${AMBER}60, ${WALNUT_LIGHT}40, transparent)`,
              borderRadius: 1,
            }} />
          ))}
          {/* Smooth surface glow */}
          <div style={{
            position: "absolute", top: 300, left: 140, right: 140, bottom: 400,
            background: `radial-gradient(ellipse at center, ${WALNUT}15, transparent 70%)`,
          }} />
        </div>

        {/* Wipe line */}
        <div style={{
          position: "absolute",
          top: 250, bottom: 350,
          left: `${wipeX}%`,
          width: 3,
          background: `linear-gradient(to bottom, transparent, ${GOLD}80, ${GOLD}80, transparent)`,
          opacity: wipeX > 5 && wipeX < 95 ? 0.8 : 0,
        }} />

        {/* Label */}
        <div style={{
          position: "absolute", top: 1500, left: 0, right: 0,
          textAlign: "center",
        }}>
          <div style={{
            fontSize: 36, color: CREAM, opacity: 0.6,
            letterSpacing: 6, textTransform: "uppercase",
            fontFamily: "'Inter', sans-serif",
          }}>
            <span style={{ opacity: fadeIn(140, 15) }}>
              {wipeX < 50 ? "Reclaimed" : "Refined"}
            </span>
          </div>
        </div>
      </div>

      {/* ═══ SCENE 3: Table reveal — line drawing ═══ */}
      <div style={{
        position: "absolute", inset: 0, opacity: s3,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{ position: "relative", width: 900, height: 800 }}>
          {/* Table top — thick horizontal line expanding */}
          <div style={{
            position: "absolute", top: 200,
            left: (900 - tableTopWidth) / 2,
            width: tableTopWidth, height: 28,
            background: `linear-gradient(90deg, ${WALNUT}, ${AMBER}, ${WALNUT})`,
            opacity: tableTopOpacity,
            borderRadius: 3,
          }} />

          {/* Table top edge line */}
          <div style={{
            position: "absolute", top: 232,
            left: (900 - tableTopWidth) / 2,
            width: tableTopWidth, height: 3,
            background: `linear-gradient(90deg, transparent, ${WALNUT}60, transparent)`,
            opacity: tableTopOpacity * 0.5,
          }} />

          {/* Wood grain on table top */}
          {[0, 1, 2, 3, 4].map(i => (
            <div key={`tgrain-${i}`} style={{
              position: "absolute",
              top: 205 + i * 5,
              left: (900 - tableTopWidth * 0.8) / 2,
              width: tableTopWidth * 0.8,
              height: 1,
              background: `linear-gradient(90deg, transparent, ${AMBER}30, transparent)`,
              opacity: tableTopOpacity * 0.4,
            }} />
          ))}

          {/* Hairpin legs */}
          {hairpinLegs.map((leg, i) => {
            const legDelay = 290 + i * 6;
            const legOp = fadeIn(legDelay, 18);
            const lh = ease(legDelay, 30, 0, 350);
            return (
              <svg key={`leg-${i}`} style={{
                position: "absolute", top: 230, left: leg.x - 30,
                width: 60, height: 360, opacity: legOp,
              }} viewBox="0 0 60 360">
                {/* Outer hairpin curve */}
                <path
                  d={`M 30 0 Q ${30 + leg.dir * 25} ${lh * 0.5} ${30 + leg.dir * 20} ${lh}`}
                  fill="none" stroke={CHARCOAL} strokeWidth="3"
                  strokeDasharray={lh * 1.5}
                  strokeDashoffset={Math.max(0, (1 - legOp) * lh * 1.5)}
                />
                {/* Inner hairpin curve */}
                <path
                  d={`M 30 0 Q ${30 + leg.dir * 8} ${lh * 0.4} ${30 + leg.dir * 5} ${lh}`}
                  fill="none" stroke={CHARCOAL} strokeWidth="2.5"
                  strokeDasharray={lh * 1.2}
                  strokeDashoffset={Math.max(0, (1 - legOp) * lh * 1.2)}
                />
                {/* Foot dot */}
                <circle cx={30 + leg.dir * 20} cy={Math.min(lh, 345)} r={3}
                  fill={CHARCOAL} opacity={legOp > 0.8 ? 1 : 0} />
                <circle cx={30 + leg.dir * 5} cy={Math.min(lh, 345)} r={3}
                  fill={CHARCOAL} opacity={legOp > 0.8 ? 1 : 0} />
              </svg>
            );
          })}

          {/* "Handmade" label under table */}
          <div style={{
            position: "absolute", top: 620, left: 0, right: 0,
            textAlign: "center",
            opacity: fadeIn(340, 18),
            transform: `translateY(${ease(340, 18, 20, 0)}px)`,
          }}>
            <div style={{
              fontSize: 28, color: AMBER, letterSpacing: 10,
              textTransform: "uppercase",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
            }}>
              Handcrafted
            </div>
            <div style={{
              fontSize: 22, color: `${CREAM}80`, letterSpacing: 4,
              marginTop: 12,
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
            }}>
              from reclaimed wood
            </div>
          </div>
        </div>
      </div>

      {/* ═══ SCENE 4: CTA ═══ */}
      <div style={{
        position: "absolute", inset: 0, opacity: s4,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", padding: "0 80px",
      }}>
        {/* Thin accent line */}
        <div style={{
          width: ease(385, 25, 0, 200), height: 1.5,
          background: GOLD, opacity: 0.6, marginBottom: 50,
        }} />

        <div style={{
          fontSize: 54, color: CREAM, textAlign: "center",
          lineHeight: 1.4,
          opacity: fadeIn(390, 18),
          transform: `translateY(${ease(390, 18, 30, 0)}px)`,
        }}>
          Your story,
        </div>
        <div style={{
          fontSize: 58, color: AMBER, textAlign: "center",
          fontStyle: "italic", lineHeight: 1.4,
          opacity: fadeIn(402, 18),
          transform: `translateY(${ease(402, 18, 30, 0)}px)`,
        }}>
          built to last.
        </div>

        {/* Brand mark */}
        <div style={{
          marginTop: 80,
          opacity: fadeIn(420, 18),
        }}>
          <div style={{
            fontSize: 20, color: `${CREAM}50`, letterSpacing: 8,
            textTransform: "uppercase",
            fontFamily: "'Inter', sans-serif",
          }}>
            Commission yours
          </div>
        </div>

        {/* Bottom accent */}
        <div style={{
          width: ease(435, 25, 0, 120), height: 1.5,
          background: GOLD, opacity: 0.4, marginTop: 50,
        }} />
      </div>
    </div>
  );
};
