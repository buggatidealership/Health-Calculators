import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

// ECOM REEL 2: "Experiment Log" — Etsy Price Testing
// Lab notebook / science journal aesthetic.
// 18s = 540 frames @ 30fps, 1080x1920

const C = {
  bg: "#F4F1EA",       // off-white paper
  card: "#FEFDFB",     // page white
  dark: "#1B2341",     // navy blue headers
  text: "#2D2D2D",     // body
  sub: "#7E7B72",      // muted
  grid: "#D6D2C6",     // graph paper lines
  amber: "#C77D2E",    // winning highlight
  amberLight: "#FFF3E0",
  blue: "#2B4C8C",     // secondary headers
  red: "#B5493A",      // loss indicator
  green: "#3B7A4A",    // positive indicator
};
const F = {
  serif: "'Playfair Display', 'DM Serif Display', Georgia, serif",
  sans: "'Inter', -apple-system, sans-serif",
  mono: "'JetBrains Mono', monospace",
};

function ease(frame: number, start: number, dur: number, from: number, to: number, fn = Easing.out(Easing.cubic)) {
  return interpolate(frame, [start, start + dur], [from, to], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: fn,
  });
}
function fadeUp(frame: number, start: number, dur = 14) {
  return {
    opacity: ease(frame, start, dur, 0, 1),
    transform: `translateY(${ease(frame, start, dur, 40, 0)}px)`,
  };
}
function sceneVis(frame: number, start: number, end: number, fi = 10, fo = 10) {
  if (frame < start - 3 || frame > end + fo + 3) return 0;
  return Math.min(
    interpolate(frame, [start, start + fi], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    interpolate(frame, [end, end + Math.max(fo, 1)], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
  );
}

// Graph paper background component
function GraphPaper() {
  return (
    <div style={{
      position: "absolute", inset: 0, opacity: 0.25, pointerEvents: "none",
      backgroundImage: `
        linear-gradient(${C.grid} 1px, transparent 1px),
        linear-gradient(90deg, ${C.grid} 1px, transparent 1px)
      `,
      backgroundSize: "40px 40px",
    }} />
  );
}

const pricePoints = [
  { price: "$5.99", sales: 89, rev: "$534", stars: 4.2, returnRate: "8.2%", margin: "$178", isWinner: false },
  { price: "$9.99", sales: 52, rev: "$519", stars: 4.5, returnRate: "5.1%", margin: "$298", isWinner: false },
  { price: "$14.99", sales: 31, rev: "$464", stars: 4.8, returnRate: "2.3%", margin: "$352", isWinner: true },
];

function DataRow({ frame, start, label, value, highlight, delay }: {
  frame: number; start: number; label: string; value: string; highlight?: boolean; delay: number;
}) {
  const op = ease(frame, start + delay, 12, 0, 1);
  const slideX = ease(frame, start + delay, 14, 20, 0);
  return (
    <div style={{
      opacity: op,
      transform: `translateX(${slideX}px)`,
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "12px 0",
      borderBottom: `1px solid ${C.grid}`,
    }}>
      <span style={{ fontSize: 30, fontFamily: F.sans, color: C.sub }}>{label}</span>
      <span style={{
        fontSize: 34, fontFamily: F.mono, fontWeight: 700,
        color: highlight ? C.amber : C.text,
      }}>{value}</span>
    </div>
  );
}

export const Ecom_Experiment: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <div style={{
      width: 1080, height: 1920, background: C.bg,
      overflow: "hidden", position: "relative", fontFamily: F.sans,
    }}>
      <GraphPaper />

      {/* ═══ SCENE 1: HOOK (0–110) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 0, 110),
        padding: "80px 70px",
        gap: 28,
      }}>
        <div style={{
          ...fadeUp(frame, 5, 14),
          fontSize: 28, fontFamily: F.mono, color: C.sub, letterSpacing: 4,
          textTransform: "uppercase",
        }}>Experiment Log</div>

        <div style={{
          ...fadeUp(frame, 15, 18),
          fontSize: 56, color: C.dark, fontFamily: F.serif, fontStyle: "italic",
          textAlign: "center", lineHeight: 1.35,
        }}>
          Same product.
          <br />Three prices.
          <br />60 days each.
        </div>

        <div style={{
          ...fadeUp(frame, 50, 14),
          width: 120, height: 3,
          background: C.dark,
          marginTop: 10,
        }} />

        <div style={{
          ...fadeUp(frame, 60, 16),
          fontSize: 34, color: C.sub, textAlign: "center", fontFamily: F.sans,
          lineHeight: 1.5,
        }}>
          Digital Planner — Etsy
          <br />
          <span style={{ fontFamily: F.mono, fontSize: 28 }}>n = 172 total sales</span>
        </div>
      </div>

      {/* ═══ SCENE 2: PRICE POINT CARDS (115–310) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "flex-start",
        opacity: sceneVis(frame, 115, 310),
        padding: "80px 60px",
        gap: 24,
      }}>
        <div style={{
          ...fadeUp(frame, 118, 12),
          fontSize: 28, fontFamily: F.mono, color: C.sub, letterSpacing: 3,
          textTransform: "uppercase", marginBottom: 10,
        }}>Results — 60 Days Each</div>

        {pricePoints.map((pp, i) => {
          const cardStart = 130 + i * 50;
          const cardOp = ease(frame, cardStart, 14, 0, 1);
          const cardY = ease(frame, cardStart, 16, 50, 0);
          return (
            <div key={i} style={{
              opacity: cardOp,
              transform: `translateY(${cardY}px)`,
              width: 940, background: C.card,
              borderRadius: 20, padding: "32px 40px",
              boxShadow: "0 4px 20px rgba(27,35,65,0.06)",
              border: pp.isWinner ? `3px solid ${C.amber}` : `1px solid ${C.grid}`,
            }}>
              {/* Price header */}
              <div style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                marginBottom: 16, paddingBottom: 14,
                borderBottom: `2px solid ${pp.isWinner ? C.amber : C.grid}`,
              }}>
                <span style={{
                  fontSize: 48, fontFamily: F.serif, fontStyle: "italic",
                  color: pp.isWinner ? C.amber : C.dark, fontWeight: 700,
                }}>{pp.price}</span>
                <span style={{
                  fontSize: 26, fontFamily: F.mono, color: C.sub,
                  background: pp.isWinner ? C.amberLight : "transparent",
                  padding: pp.isWinner ? "6px 16px" : "0",
                  borderRadius: 8,
                }}>
                  {pp.isWinner ? "WINNER" : `Trial ${i + 1}`}
                </span>
              </div>

              {/* Data rows */}
              <DataRow frame={frame} start={cardStart} label="Sales" value={`${pp.sales}`} delay={8} />
              <DataRow frame={frame} start={cardStart} label="Revenue" value={pp.rev} delay={14} />
              <DataRow frame={frame} start={cardStart} label="Avg Rating" value={`${pp.stars} ★`} highlight={pp.isWinner} delay={20} />
            </div>
          );
        })}
      </div>

      {/* ═══ SCENE 3: THE TWIST — Hidden Metrics (315–440) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 315, 440),
        padding: "80px 70px",
        gap: 28,
      }}>
        <div style={{
          ...fadeUp(frame, 318, 14),
          fontSize: 44, fontFamily: F.serif, fontStyle: "italic",
          color: C.dark, textAlign: "center", lineHeight: 1.3,
        }}>
          But here's what
          <br />the data actually says:
        </div>

        <div style={{
          ...fadeUp(frame, 340, 16),
          width: 940, background: C.card,
          borderRadius: 20, padding: "40px 44px",
          border: `3px solid ${C.amber}`,
          boxShadow: "0 8px 40px rgba(199,125,46,0.12)",
        }}>
          <div style={{
            fontSize: 40, fontFamily: F.serif, fontStyle: "italic",
            color: C.amber, marginBottom: 24, textAlign: "center",
          }}>$14.99 — The "expensive" one</div>

          <DataRow frame={frame} start={348} label="Return Rate" value="2.3%" highlight delay={0} />
          <DataRow frame={frame} start={348} label="Avg Rating" value="4.8 ★" highlight delay={10} />
          <DataRow frame={frame} start={348} label="Profit After Fees" value="$352" highlight delay={20} />
          <DataRow frame={frame} start={348} label="vs $5.99 Profit" value="$178" delay={30} />

          <div style={{
            ...fadeUp(frame, 400, 16),
            marginTop: 24, padding: "18px 24px",
            background: C.amberLight, borderRadius: 12,
            textAlign: "center",
          }}>
            <span style={{ fontSize: 36, fontFamily: F.sans, fontWeight: 700, color: C.amber }}>
              2x profit per unit
            </span>
            <span style={{ fontSize: 30, color: C.sub, marginLeft: 12 }}>
              at the highest price
            </span>
          </div>
        </div>

        <div style={{
          ...fadeUp(frame, 420, 14),
          fontSize: 34, color: C.sub, fontFamily: F.mono,
          textAlign: "center", lineHeight: 1.5,
        }}>
          Cheap price = volume.
          <br />High price = quality buyers.
        </div>
      </div>

      {/* ═══ SCENE 4: CTA (445–540) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 445, 540, 12, 1),
        padding: "80px 70px",
        gap: 36,
      }}>
        <div style={{
          ...fadeUp(frame, 448, 18),
          fontSize: 54, color: C.dark, fontFamily: F.serif, fontStyle: "italic",
          textAlign: "center", lineHeight: 1.35,
        }}>
          Your price isn't too high.
        </div>

        <div style={{
          ...fadeUp(frame, 475, 16),
          fontSize: 54, fontFamily: F.serif, fontStyle: "italic",
          textAlign: "center", lineHeight: 1.35,
        }}>
          <span style={{ color: C.amber }}>Your perceived value</span>
          <br />is too low.
        </div>

        <div style={{
          ...fadeUp(frame, 500, 14),
          width: 120, height: 3, background: C.dark,
        }} />

        <div style={{
          ...fadeUp(frame, 510, 14),
          fontSize: 28, color: C.sub, fontFamily: F.mono, letterSpacing: 2,
          textAlign: "center",
        }}>
          Test your pricing. Save this framework.
        </div>
      </div>
    </div>
  );
};
