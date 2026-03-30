import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

// REAL ESTATE — MARKET UPDATE Q1 2026
// Dark data dashboard, teal + coral accents, animated stat bars
// 540 frames @ 30fps = 18s
// CONVERGENCE: The reframe — "What this means for you"

const clamp = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };
const outCubic = Easing.out(Easing.cubic);
const outExp = Easing.out(Easing.exp);

const BG = "#0B1120";
const TEAL = "#0FADA0";
const CORAL = "#E8785E";
const WHITE = "#E4E8EC";
const SLATE = "#7A8CA0";
const CARD_BG = "rgba(255,255,255,0.04)";
const CARD_BORDER = "rgba(255,255,255,0.06)";

const ease = (f: number, s: number, d: number, from: number, to: number, fn = outCubic) =>
  interpolate(f, [s, s + d], [from, to], { ...clamp, easing: fn });

const fadeUp = (f: number, s: number, d = 14) => ({
  opacity: ease(f, s, d, 0, 1),
  transform: `translateY(${ease(f, s, d, 30, 0)}px)`,
});

const vis = (f: number, s: number, e: number) => {
  if (f < s - 2) return { opacity: 0, pointerEvents: "none" as const };
  return {
    opacity: Math.min(
      interpolate(f, [s, s + 10], [0, 1], clamp),
      e < 540 ? interpolate(f, [e, e + 12], [1, 0], clamp) : 1
    ),
  };
};

export const RE_MarketUpdate: React.FC = () => {
  const frame = useCurrentFrame();

  // ═══ GRID LINES — ambient ═══
  const gridLines = Array.from({ length: 6 }, (_, i) => {
    const y = 300 + i * 260;
    const op = 0.03 + Math.sin((frame + i * 20) * 0.015) * 0.01;
    return { y, opacity: op };
  });

  // ═══ STAT ANIMATIONS ═══
  const medianPrice = Math.round(ease(frame, 115, 30, 0, 485000));
  const priceChange = ease(frame, 155, 20, 0, 8.3);
  const daysOnMarket = Math.round(ease(frame, 225, 25, 0, 18));
  const daysLastYear = 34;
  const inventoryMonths = ease(frame, 350, 25, 0, 2.1);

  const barData = [
    { label: "Jan", h: 65, delay: 115 },
    { label: "Feb", h: 72, delay: 120 },
    { label: "Mar", h: 80, delay: 125 },
    { label: "Apr", h: 68, delay: 130 },
    { label: "May", h: 85, delay: 135 },
    { label: "Jun", h: 92, delay: 140 },
  ];

  // ═══ PULSE DOTS ═══
  const pulses = Array.from({ length: 12 }, (_, i) => {
    const x = 100 + ((i * 137) % 880);
    const y = 200 + ((i * 211) % 1520);
    const pulse = Math.sin((frame + i * 40) * 0.025) * 0.5 + 0.5;
    return { x, y, opacity: 0.03 + pulse * 0.02, size: 3 };
  });

  return (
    <div style={{
      width: 1080, height: 1920,
      background: BG,
      overflow: "hidden",
      position: "relative",
      fontFamily: "'Inter', -apple-system, sans-serif",
    }}>

      {/* Grid lines */}
      {gridLines.map((l, i) => (
        <div key={i} style={{
          position: "absolute", left: 60, right: 60,
          top: l.y, height: 1, background: `rgba(255,255,255,${l.opacity})`,
        }} />
      ))}

      {/* Pulse dots */}
      {pulses.map((p, i) => (
        <div key={i} style={{
          position: "absolute", left: p.x, top: p.y,
          width: p.size, height: p.size, borderRadius: "50%",
          background: TEAL, opacity: p.opacity,
        }} />
      ))}

      {/* ═══ SCENE 1 (0–100): Month header ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        ...vis(frame, 0, 95),
      }}>
        <div style={{
          ...fadeUp(frame, 8),
          fontSize: 22, color: TEAL, letterSpacing: 10,
          textTransform: "uppercase", fontWeight: 500,
        }}>
          Market Update
        </div>
        <div style={{
          ...fadeUp(frame, 22),
          fontSize: 84, color: WHITE, fontWeight: 700,
          marginTop: 10, letterSpacing: -2, lineHeight: 1.1,
        }}>
          March 2026
        </div>
        <div style={{
          ...fadeUp(frame, 38),
          fontSize: 26, color: SLATE, marginTop: 15, fontWeight: 400,
        }}>
          Westwood Heights  |  Local Data
        </div>
        <div style={{
          marginTop: 30,
          width: ease(frame, 50, 25, 0, 160), height: 2,
          background: TEAL, opacity: 0.4,
        }} />
      </div>

      {/* ═══ SCENE 2 (100–215): Median price + bar chart ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        justifyContent: "center", padding: "0 80px",
        ...vis(frame, 100, 210),
      }}>
        <div style={{
          ...fadeUp(frame, 105),
          fontSize: 22, color: SLATE, letterSpacing: 5,
          textTransform: "uppercase", marginBottom: 8,
        }}>
          Median Sale Price
        </div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 18, ...fadeUp(frame, 110) }}>
          <div style={{ fontSize: 80, color: WHITE, fontWeight: 700, letterSpacing: -3, lineHeight: 1 }}>
            ${medianPrice > 0 ? (medianPrice / 1000).toFixed(0) : "0"}K
          </div>
          <div style={{ ...fadeUp(frame, 150), fontSize: 28, color: TEAL, fontWeight: 600 }}>
            +{priceChange.toFixed(1)}%
          </div>
        </div>
        <div style={{ ...fadeUp(frame, 155), fontSize: 22, color: SLATE, marginTop: 5 }}>
          vs. March 2025
        </div>

        {/* Mini bar chart */}
        <div style={{
          display: "flex", gap: 14, marginTop: 45, alignItems: "flex-end", height: 160,
          ...fadeUp(frame, 112),
        }}>
          {barData.map((bar, i) => {
            const barH = ease(frame, bar.delay, 20, 0, bar.h * 1.5, outExp);
            return (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                <div style={{
                  width: 60, height: barH,
                  background: i === barData.length - 1
                    ? `linear-gradient(180deg, ${TEAL}, rgba(15,173,160,0.4))`
                    : "linear-gradient(180deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))",
                  borderRadius: "6px 6px 2px 2px",
                }} />
                <div style={{ fontSize: 16, color: SLATE, fontWeight: 400 }}>{bar.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ═══ SCENE 3 (215–335): Days on market ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        justifyContent: "center", padding: "0 80px",
        ...vis(frame, 215, 330),
      }}>
        <div style={{
          ...fadeUp(frame, 220),
          fontSize: 22, color: SLATE, letterSpacing: 5,
          textTransform: "uppercase", marginBottom: 8,
        }}>
          Days on Market
        </div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 20, ...fadeUp(frame, 225) }}>
          <div style={{ fontSize: 120, color: WHITE, fontWeight: 700, letterSpacing: -4, lineHeight: 1 }}>
            {daysOnMarket}
          </div>
          <div style={{ fontSize: 36, color: SLATE, fontWeight: 400 }}>days</div>
        </div>

        {/* Comparison bars */}
        <div style={{ marginTop: 35, ...fadeUp(frame, 255) }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <div style={{ fontSize: 18, color: SLATE }}>This year</div>
            <div style={{ fontSize: 18, color: TEAL, fontWeight: 600 }}>{daysOnMarket}d</div>
          </div>
          <div style={{ width: "100%", height: 10, background: CARD_BG, borderRadius: 5 }}>
            <div style={{
              width: `${ease(frame, 260, 25, 0, (18 / daysLastYear) * 100)}%`,
              height: 10, background: TEAL, borderRadius: 5,
            }} />
          </div>
          <div style={{
            display: "flex", justifyContent: "space-between", marginTop: 12,
            ...fadeUp(frame, 275),
          }}>
            <div style={{ fontSize: 18, color: SLATE }}>Last year</div>
            <div style={{ fontSize: 18, color: CORAL, fontWeight: 600 }}>{daysLastYear}d</div>
          </div>
          <div style={{ width: "100%", height: 10, background: CARD_BG, borderRadius: 5, marginTop: 8 }}>
            <div style={{
              width: `${ease(frame, 280, 25, 0, 100)}%`,
              height: 10, background: CORAL, borderRadius: 5, opacity: 0.6,
            }} />
          </div>
        </div>

        <div style={{
          ...fadeUp(frame, 300),
          fontSize: 24, color: TEAL, marginTop: 25, fontWeight: 500,
        }}>
          Homes are selling 47% faster.
        </div>
      </div>

      {/* ═══ SCENE 4 (335–445): The reframe — CONVERGENCE ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        padding: "0 80px",
        ...vis(frame, 335, 440),
      }}>
        <div style={{
          ...fadeUp(frame, 340),
          fontSize: 22, color: CORAL, letterSpacing: 8,
          textTransform: "uppercase", fontWeight: 500, marginBottom: 20,
        }}>
          What This Means
        </div>

        <div style={{
          ...fadeUp(frame, 350),
          padding: "40px 50px", background: CARD_BG,
          border: `1px solid ${CARD_BORDER}`, borderRadius: 20,
          textAlign: "center", maxWidth: 800,
        }}>
          <div style={{ fontSize: 72, color: CORAL, fontWeight: 700, letterSpacing: -2, lineHeight: 1 }}>
            {inventoryMonths.toFixed(1)} months
          </div>
          <div style={{ fontSize: 24, color: SLATE, marginTop: 12 }}>
            of housing inventory
          </div>
          <div style={{
            ...fadeUp(frame, 385),
            width: 40, height: 1.5, background: CORAL, opacity: 0.4, margin: "20px auto",
          }} />
          <div style={{
            ...fadeUp(frame, 390),
            fontSize: 26, color: WHITE, lineHeight: 1.6, fontWeight: 400,
          }}>
            Under 3 months = seller's market.{"\n"}If you're buying, speed matters.
          </div>
        </div>
      </div>

      {/* ═══ SCENE 5 (445–540): CTA ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        ...vis(frame, 445, 540),
      }}>
        <div style={{
          ...fadeUp(frame, 450),
          fontSize: 42, color: WHITE, fontWeight: 600,
          textAlign: "center", lineHeight: 1.35, letterSpacing: -0.5,
        }}>
          Don't wait for the market.{"\n"}The market won't wait for you.
        </div>
        <div style={{
          ...fadeUp(frame, 475),
          width: 50, height: 2, background: TEAL, opacity: 0.4, margin: "25px 0",
        }} />
        <div style={{
          ...fadeUp(frame, 483),
          fontSize: 26, color: TEAL, fontWeight: 500,
        }}>
          Sarah Mitchell Realty
        </div>
        <div style={{
          ...fadeUp(frame, 495),
          fontSize: 22, color: SLATE, marginTop: 8,
        }}>
          Local data. Honest advice.
        </div>
        <div style={{
          ...fadeUp(frame, 510),
          marginTop: 28, padding: "14px 38px",
          border: `1.5px solid ${TEAL}`, borderRadius: 28,
          fontSize: 22, color: TEAL, letterSpacing: 3,
          textTransform: "uppercase", fontWeight: 500,
        }}>
          Free Consultation
        </div>
      </div>

      {/* Film grain */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.03, pointerEvents: "none", zIndex: 100,
        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
      }} />
    </div>
  );
};
