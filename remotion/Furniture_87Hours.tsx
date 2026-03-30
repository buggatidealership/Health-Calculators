import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

// FURNITURE REEL 2 — "87 hours. One table."
// Process/craft reel. Time as value signal.
// Each scene = one phase of the build, with running hour counter.
// Pacing: slow, deliberate. The time IS the point.

const clamp = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };

const WALNUT = "#5C3A21";
const AMBER = "#D4915E";
const CREAM = "#F5EDE0";
const CHARCOAL = "#2A2A2A";
const WARM_BLACK = "#1A1410";
const COPPER = "#B87333";
const SAGE = "#7A8B6F";
const GOLD = "#C9A84C";

export const Furniture_87Hours: React.FC = () => {
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

  // Running hour counter across entire reel
  const hourCount = Math.round(interpolate(frame, [0, 480], [0, 87], clamp));

  // ═══ SCENE 1 (0-105): "87 hours" — big number hook ═══
  const s1 = sceneVis(0, 105);
  const numberScale = ease(10, 30, 0.5, 1, Easing.out(Easing.exp));
  const numberCounter = Math.round(interpolate(frame, [10, 70], [0, 87], { ...clamp, easing: Easing.out(Easing.cubic) }));

  // ═══ SCENE 2 (100-200): Selection — "Hours 1-8: Finding the right board" ═══
  const s2 = sceneVis(100, 200);

  // Abstract board shapes — varied widths/angles = raw boards
  const boards = [
    { x: 120, w: 700, h: 24, rot: -1.5, delay: 108, color: WALNUT },
    { x: 180, w: 650, h: 20, rot: 0.8, delay: 114, color: `${WALNUT}D0` },
    { x: 100, w: 720, h: 26, rot: -0.3, delay: 120, color: AMBER },
    { x: 200, w: 600, h: 18, rot: 1.2, delay: 126, color: `${WALNUT}B0` },
    { x: 140, w: 680, h: 22, rot: -0.7, delay: 132, color: COPPER },
  ];

  // Selection highlight — one board gets chosen
  const selectedBoard = 2; // the amber one
  const selectGlow = ease(155, 20, 0, 1);

  // ═══ SCENE 3 (195-310): Shaping — geometric precision ═══
  const s3 = sceneVis(195, 310);

  // Measurement lines — precision
  const measureLines = [
    { y: 680, label: '72"', delay: 210 },
    { y: 880, label: '36"', delay: 220 },
    { y: 1080, label: '1.75"', delay: 230 },
  ];

  // Right angle / geometry — the precision of mid-century design
  const angleReveal = ease(240, 30, 0, 1);

  // ═══ SCENE 4 (305-410): Assembly — joints coming together ═══
  const s4 = sceneVis(305, 410);

  // Joint diagram — mortise and tenon, exploded view
  const jointExplode = ease(320, 40, 60, 0); // pieces come together
  const jointOpacity = fadeIn(315, 18);

  // ═══ SCENE 5 (405-490): Finish + CTA ═══
  const s5 = sceneVis(405, 490, 14, 1);

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

      {/* Running hour counter — top right, persistent */}
      <div style={{
        position: "absolute", top: 60, right: 70, zIndex: 50,
        opacity: fadeIn(8, 20) * (frame < 460 ? 1 : ease(460, 20, 1, 0)),
      }}>
        <div style={{
          fontSize: 24, color: `${CREAM}40`, letterSpacing: 4,
          fontFamily: "'Inter', sans-serif", textTransform: "uppercase",
          textAlign: "right",
        }}>
          Hour
        </div>
        <div style={{
          fontSize: 56, color: COPPER, fontWeight: 300,
          fontFamily: "'Inter', sans-serif",
          fontVariantNumeric: "tabular-nums",
          textAlign: "right",
        }}>
          {hourCount}
        </div>
      </div>

      {/* ═══ SCENE 1: Big number hook ═══ */}
      <div style={{
        position: "absolute", inset: 0, opacity: s1,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
      }}>
        <div style={{
          fontSize: 220, color: CREAM, fontWeight: 400,
          fontFamily: "'Georgia', serif",
          transform: `scale(${numberScale})`,
          fontVariantNumeric: "tabular-nums",
        }}>
          {numberCounter}
        </div>
        <div style={{
          fontSize: 36, color: `${CREAM}70`, letterSpacing: 12,
          textTransform: "uppercase",
          fontFamily: "'Inter', sans-serif",
          fontWeight: 300,
          opacity: fadeIn(45, 18),
          transform: `translateY(${ease(45, 18, 20, 0)}px)`,
        }}>
          hours
        </div>
        <div style={{
          fontSize: 48, color: AMBER, fontStyle: "italic",
          marginTop: 30,
          opacity: fadeIn(62, 18),
          transform: `translateY(${ease(62, 18, 25, 0)}px)`,
        }}>
          One table.
        </div>
      </div>

      {/* ═══ SCENE 2: Board selection ═══ */}
      <div style={{
        position: "absolute", inset: 0, opacity: s2,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
      }}>
        {/* Phase label */}
        <div style={{
          position: "absolute", top: 350,
          opacity: fadeIn(105, 15),
        }}>
          <div style={{
            fontSize: 22, color: `${CREAM}50`, letterSpacing: 6,
            fontFamily: "'Inter', sans-serif", textTransform: "uppercase",
          }}>
            Hours 1–8
          </div>
          <div style={{
            fontSize: 40, color: CREAM, marginTop: 12,
            textAlign: "center",
          }}>
            Finding the right board
          </div>
        </div>

        {/* Board stack */}
        {boards.map((b, i) => (
          <div key={i} style={{
            position: "absolute",
            top: 600 + i * 90,
            left: b.x,
            width: b.w * fadeIn(b.delay, 20),
            height: b.h,
            background: b.color,
            borderRadius: 3,
            transform: `rotate(${b.rot}deg)`,
            opacity: fadeIn(b.delay, 15) * (i === selectedBoard ? 1 : (1 - selectGlow * 0.6)),
            boxShadow: i === selectedBoard ? `0 0 ${selectGlow * 30}px ${GOLD}40` : "none",
            transition: "box-shadow 0.3s",
          }} />
        ))}

        {/* Selection indicator */}
        {selectGlow > 0.1 && (
          <div style={{
            position: "absolute", top: 600 + selectedBoard * 90 - 15,
            right: 100, opacity: selectGlow,
          }}>
            <div style={{
              fontSize: 20, color: GOLD, letterSpacing: 3,
              fontFamily: "'Inter', sans-serif",
            }}>
              This one.
            </div>
          </div>
        )}
      </div>

      {/* ═══ SCENE 3: Precision measurements ═══ */}
      <div style={{
        position: "absolute", inset: 0, opacity: s3,
        display: "flex", flexDirection: "column", alignItems: "center",
      }}>
        {/* Phase label */}
        <div style={{
          position: "absolute", top: 350,
          opacity: fadeIn(200, 15),
        }}>
          <div style={{
            fontSize: 22, color: `${CREAM}50`, letterSpacing: 6,
            fontFamily: "'Inter', sans-serif", textTransform: "uppercase",
          }}>
            Hours 9–34
          </div>
          <div style={{
            fontSize: 40, color: CREAM, marginTop: 12,
            textAlign: "center",
          }}>
            Shaping
          </div>
        </div>

        {/* Measurement lines with dimensions */}
        {measureLines.map((m, i) => (
          <div key={i} style={{
            position: "absolute", top: m.y, left: 140, right: 140,
            opacity: fadeIn(m.delay, 18),
          }}>
            <div style={{
              display: "flex", alignItems: "center", gap: 20,
            }}>
              <div style={{
                flex: 1, height: 1,
                background: `linear-gradient(90deg, transparent, ${COPPER}60, ${COPPER}60, transparent)`,
              }} />
              <div style={{
                fontSize: 32, color: COPPER,
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300, letterSpacing: 2,
              }}>
                {m.label}
              </div>
              <div style={{
                flex: 1, height: 1,
                background: `linear-gradient(90deg, transparent, ${COPPER}60, ${COPPER}60, transparent)`,
              }} />
            </div>
          </div>
        ))}

        {/* Right angle symbol — precision */}
        <svg style={{
          position: "absolute", top: 1200, left: 440,
          opacity: angleReveal,
        }} width="200" height="200" viewBox="0 0 200 200">
          <path d={`M 0 200 L 0 ${200 - angleReveal * 200} L ${angleReveal * 200} 200`}
            fill="none" stroke={GOLD} strokeWidth="2" />
          <rect x="0" y={200 - 30} width="30" height="30"
            fill="none" stroke={`${GOLD}60`} strokeWidth="1.5" />
        </svg>
      </div>

      {/* ═══ SCENE 4: Joint assembly ═══ */}
      <div style={{
        position: "absolute", inset: 0, opacity: s4,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
      }}>
        {/* Phase label */}
        <div style={{
          position: "absolute", top: 350,
          opacity: fadeIn(310, 15),
        }}>
          <div style={{
            fontSize: 22, color: `${CREAM}50`, letterSpacing: 6,
            fontFamily: "'Inter', sans-serif", textTransform: "uppercase",
          }}>
            Hours 35–72
          </div>
          <div style={{
            fontSize: 40, color: CREAM, marginTop: 12,
            textAlign: "center",
          }}>
            Assembly
          </div>
        </div>

        {/* Exploded joint diagram */}
        <div style={{
          position: "relative", width: 600, height: 400,
          opacity: jointOpacity,
        }}>
          {/* Tenon piece (top, slides down) */}
          <div style={{
            position: "absolute", top: 80 - jointExplode, left: 200,
            width: 200, height: 100,
            background: `linear-gradient(180deg, ${WALNUT}, ${AMBER}90)`,
            borderRadius: 4,
          }}>
            {/* Tenon protrusion */}
            <div style={{
              position: "absolute", bottom: -50, left: 60,
              width: 80, height: 50,
              background: WALNUT,
              borderRadius: "0 0 3px 3px",
            }} />
          </div>

          {/* Mortise piece (bottom, receives) */}
          <div style={{
            position: "absolute", top: 230 + jointExplode, left: 150,
            width: 300, height: 80,
            background: `linear-gradient(180deg, ${AMBER}80, ${WALNUT})`,
            borderRadius: 4,
          }}>
            {/* Mortise hole */}
            <div style={{
              position: "absolute", top: 0, left: 110,
              width: 80, height: 50,
              background: WARM_BLACK,
              borderRadius: 3,
              border: `1px solid ${WALNUT}40`,
            }} />
          </div>

          {/* Alignment arrows */}
          {jointExplode > 5 && (
            <>
              <svg style={{ position: "absolute", top: 175, left: 315, opacity: 0.4 }}
                width="20" height="60" viewBox="0 0 20 60">
                <path d="M 10 0 L 10 50 L 3 40 M 10 50 L 17 40" fill="none" stroke={GOLD} strokeWidth="1.5" />
              </svg>
            </>
          )}
        </div>

        {/* "No screws. No nails." */}
        <div style={{
          position: "absolute", top: 1250,
          opacity: fadeIn(360, 18),
          transform: `translateY(${ease(360, 18, 20, 0)}px)`,
          textAlign: "center",
        }}>
          <div style={{
            fontSize: 34, color: `${CREAM}90`, fontStyle: "italic",
          }}>
            No screws. No nails.
          </div>
          <div style={{
            fontSize: 26, color: `${CREAM}50`, marginTop: 12,
            fontFamily: "'Inter', sans-serif", fontWeight: 300,
          }}>
            Just joinery.
          </div>
        </div>
      </div>

      {/* ═══ SCENE 5: Finish + CTA ═══ */}
      <div style={{
        position: "absolute", inset: 0, opacity: s5,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", padding: "0 80px",
      }}>
        {/* Final hour */}
        <div style={{
          fontSize: 140, color: CREAM, fontWeight: 400,
          fontFamily: "'Georgia', serif",
          opacity: fadeIn(412, 20),
        }}>
          87
        </div>
        <div style={{
          fontSize: 32, color: `${CREAM}60`, letterSpacing: 8,
          fontFamily: "'Inter', sans-serif", textTransform: "uppercase",
          fontWeight: 300, marginTop: 8,
          opacity: fadeIn(420, 15),
        }}>
          hours later
        </div>

        <div style={{
          width: ease(430, 20, 0, 200), height: 1.5,
          background: GOLD, opacity: 0.5, marginTop: 50, marginBottom: 50,
        }} />

        <div style={{
          fontSize: 46, color: AMBER, fontStyle: "italic",
          textAlign: "center", lineHeight: 1.4,
          opacity: fadeIn(440, 18),
          transform: `translateY(${ease(440, 18, 25, 0)}px)`,
        }}>
          Worth every one.
        </div>

        <div style={{
          marginTop: 60,
          opacity: fadeIn(458, 15),
        }}>
          <div style={{
            fontSize: 20, color: `${CREAM}40`, letterSpacing: 6,
            fontFamily: "'Inter', sans-serif", textTransform: "uppercase",
          }}>
            Link in bio
          </div>
        </div>
      </div>
    </div>
  );
};
