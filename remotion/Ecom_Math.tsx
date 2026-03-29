import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

// ECOM REEL 1: "Here's The Math" — Amazon FBA Margin Breakdown
// Receipt/calculator aesthetic. Revenue vs actual profit.
// 18s = 540 frames @ 30fps, 1080x1920

const C = {
  bg: "#FDF8F0",       // warm cream
  card: "#FFFEFA",     // receipt white
  dark: "#2C2416",     // warm dark brown
  text: "#3D3426",     // body text
  sub: "#9A917E",      // muted
  red: "#C4453C",      // fee red
  green: "#2E8B57",    // kept green
  line: "#E8E0D0",     // receipt lines
  accent: "#D4A853",   // warm gold accent
};
const F = {
  serif: "'DM Serif Display', Georgia, serif",
  sans: "'Inter', -apple-system, sans-serif",
  mono: "'JetBrains Mono', 'Courier New', monospace",
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

const fees = [
  { label: "FBA Fulfillment", amount: 4200 },
  { label: "Storage Fees", amount: 800 },
  { label: "PPC Ad Spend", amount: 4500 },
  { label: "COGS", amount: 3400 },
  { label: "Returns & Refunds", amount: 1000 },
];
const totalFees = fees.reduce((s, f) => s + f.amount, 0);
const kept = 18000 - totalFees;

function ReceiptLine({ frame, start, label, amount, index }: {
  frame: number; start: number; label: string; amount: number; index: number;
}) {
  const lineStart = start + index * 18;
  const op = ease(frame, lineStart, 12, 0, 1);
  const slideX = ease(frame, lineStart, 14, 30, 0);
  return (
    <div style={{
      opacity: op,
      transform: `translateX(${slideX}px)`,
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "14px 0",
      borderBottom: `1px dashed ${C.line}`,
    }}>
      <span style={{ fontSize: 34, fontFamily: F.sans, color: C.text }}>{label}</span>
      <span style={{ fontSize: 36, fontFamily: F.mono, color: C.red, fontWeight: 700 }}>
        -${amount.toLocaleString()}
      </span>
    </div>
  );
}

export const Ecom_Math: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <div style={{
      width: 1080, height: 1920, background: C.bg,
      overflow: "hidden", position: "relative", fontFamily: F.sans,
    }}>
      {/* Subtle paper texture grain */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.04, pointerEvents: "none", zIndex: 100,
        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
      }} />

      {/* ═══ SCENE 1: HOOK — Big Revenue Number (0–120) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 0, 120),
        padding: "80px 60px",
        gap: 24,
      }}>
        <div style={{
          ...fadeUp(frame, 5, 16),
          fontSize: 32, color: C.sub, fontFamily: F.mono, letterSpacing: 3,
          textTransform: "uppercase",
        }}>Monthly Revenue</div>

        <div style={{
          ...fadeUp(frame, 10, 20),
          fontSize: 180, fontWeight: 800, fontFamily: F.mono,
          color: C.dark, lineHeight: 1, letterSpacing: -6,
        }}>
          ${Math.round(ease(frame, 10, 30, 0, 18000)).toLocaleString()}
        </div>

        <div style={{
          ...fadeUp(frame, 50, 16),
          width: 500, height: 2,
          background: `linear-gradient(90deg, transparent, ${C.accent}, transparent)`,
          marginTop: 10,
        }} />

        <div style={{
          ...fadeUp(frame, 60, 16),
          fontSize: 48, color: C.text, textAlign: "center", lineHeight: 1.4,
          fontFamily: F.serif,
        }}>
          Here's what I actually keep.
        </div>
      </div>

      {/* ═══ SCENE 2: RECEIPT — Fees Strip Away (125–380) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "flex-start",
        opacity: sceneVis(frame, 125, 380),
        padding: "100px 70px 60px",
      }}>
        {/* Receipt card */}
        <div style={{
          ...fadeUp(frame, 128, 16),
          width: 940, background: C.card,
          borderRadius: 24, padding: "50px 50px 40px",
          boxShadow: "0 8px 40px rgba(44,36,22,0.08)",
        }}>
          {/* Receipt header */}
          <div style={{
            textAlign: "center", paddingBottom: 30,
            borderBottom: `2px solid ${C.dark}`,
            marginBottom: 20,
          }}>
            <div style={{ fontSize: 28, fontFamily: F.mono, color: C.sub, letterSpacing: 4 }}>
              AMAZON FBA
            </div>
            <div style={{ fontSize: 52, fontFamily: F.mono, fontWeight: 700, color: C.dark, marginTop: 8 }}>
              $18,000
            </div>
            <div style={{ fontSize: 24, fontFamily: F.mono, color: C.sub, marginTop: 4 }}>
              MONTHLY REVENUE
            </div>
          </div>

          {/* Fee line items */}
          {fees.map((fee, i) => (
            <ReceiptLine
              key={i}
              frame={frame}
              start={145}
              label={fee.label}
              amount={fee.amount}
              index={i}
            />
          ))}

          {/* Running total that counts down */}
          {(() => {
            const lastFeeAppear = 145 + (fees.length - 1) * 18 + 14;
            const totalRevealStart = lastFeeAppear + 20;
            const totalOp = ease(frame, totalRevealStart, 14, 0, 1);
            const runningTotal = Math.round(ease(frame, totalRevealStart, 25, 18000, kept));
            return (
              <div style={{
                opacity: totalOp,
                marginTop: 30, paddingTop: 24,
                borderTop: `3px solid ${C.dark}`,
                display: "flex", justifyContent: "space-between", alignItems: "center",
              }}>
                <span style={{ fontSize: 36, fontFamily: F.sans, fontWeight: 700, color: C.dark }}>
                  TOTAL KEPT
                </span>
                <span style={{
                  fontSize: 56, fontFamily: F.mono, fontWeight: 800,
                  color: C.green,
                }}>
                  ${runningTotal.toLocaleString()}
                </span>
              </div>
            );
          })()}
        </div>

        {/* Percentage reveal beneath receipt */}
        {(() => {
          const pctStart = 320;
          return (
            <div style={{
              ...fadeUp(frame, pctStart, 16),
              marginTop: 40, textAlign: "center",
            }}>
              <span style={{ fontSize: 72, fontFamily: F.mono, fontWeight: 800, color: C.red }}>
                {Math.round(ease(frame, pctStart, 20, 0, Math.round((totalFees / 18000) * 100)))}%
              </span>
              <span style={{ fontSize: 36, color: C.sub, marginLeft: 16, fontFamily: F.sans }}>
                gone before you see a dime
              </span>
            </div>
          );
        })()}
      </div>

      {/* ═══ SCENE 3: VISUAL GAP — Revenue vs Take-Home (385–460) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 385, 460),
        padding: "80px 80px",
        gap: 40,
      }}>
        <div style={{
          ...fadeUp(frame, 388, 14),
          fontSize: 32, fontFamily: F.mono, color: C.sub, letterSpacing: 3,
          textTransform: "uppercase",
        }}>The gap</div>

        {/* Revenue bar */}
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ fontSize: 28, fontFamily: F.mono, color: C.sub }}>Revenue</div>
          <div style={{
            height: 80, borderRadius: 12,
            background: C.dark,
            width: `${ease(frame, 395, 20, 0, 100)}%`,
          }}>
            <div style={{
              height: "100%", display: "flex", alignItems: "center", justifyContent: "flex-end",
              paddingRight: 20, fontSize: 36, fontFamily: F.mono, color: "#fff", fontWeight: 700,
            }}>$18,000</div>
          </div>
        </div>

        {/* Kept bar */}
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ fontSize: 28, fontFamily: F.mono, color: C.sub }}>What you keep</div>
          <div style={{
            height: 80, borderRadius: 12,
            background: C.green,
            width: `${ease(frame, 410, 20, 0, (kept / 18000) * 100)}%`,
          }}>
            <div style={{
              height: "100%", display: "flex", alignItems: "center", justifyContent: "flex-end",
              paddingRight: 20, fontSize: 36, fontFamily: F.mono, color: "#fff", fontWeight: 700,
            }}>${kept.toLocaleString()}</div>
          </div>
        </div>

        <div style={{
          ...fadeUp(frame, 425, 16),
          fontSize: 44, color: C.text, fontFamily: F.serif, textAlign: "center",
          lineHeight: 1.4, marginTop: 20,
        }}>
          Your margin isn't what you think.
        </div>
      </div>

      {/* ═══ SCENE 4: CTA (465–540) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 465, 540, 12, 1),
        padding: "80px 70px",
        gap: 36,
      }}>
        <div style={{
          ...fadeUp(frame, 468, 18),
          fontSize: 60, color: C.dark, fontFamily: F.serif, textAlign: "center", lineHeight: 1.3,
        }}>
          Screenshot this.
          <br />
          <span style={{ color: C.green }}>Run your own numbers.</span>
        </div>

        <div style={{
          ...fadeUp(frame, 490, 14),
          width: 500, height: 2,
          background: `linear-gradient(90deg, transparent, ${C.accent}, transparent)`,
        }} />

        <div style={{
          ...fadeUp(frame, 500, 14),
          fontSize: 30, color: C.sub, fontFamily: F.mono, letterSpacing: 2,
          textAlign: "center",
        }}>
          Revenue is vanity. Profit is sanity.
        </div>
      </div>
    </div>
  );
};
