import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

// ECOM REEL 3: "Warning / Risk Report" — Amazon Fee Change
// Bloomberg terminal / urgent alert aesthetic. Dark bg, red accents.
// 18s = 540 frames @ 30fps, 1080x1920

const C = {
  bg: "#0A0A0F",       // near black
  card: "#12121A",     // dark card
  text: "#E8E8EC",     // white text
  sub: "#6B6B7B",      // muted
  red: "#E53935",      // alert red
  redDark: "#B71C1C",  // deep red
  redGlow: "rgba(229,57,53,0.15)",
  green: "#4CAF50",    // before/good
  amber: "#FFA726",    // warning
  line: "#1E1E2A",     // dividers
  mono: "#00E676",     // terminal green for accents
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

// Pulsing alert indicator
function AlertPulse({ frame, start }: { frame: number; start: number }) {
  const appeared = frame >= start;
  if (!appeared) return null;
  const pulse = 0.6 + 0.4 * Math.sin((frame - start) * 0.18);
  return (
    <div style={{
      width: 20, height: 20, borderRadius: "50%",
      background: C.red,
      boxShadow: `0 0 ${20 * pulse}px ${8 * pulse}px ${C.red}`,
      opacity: pulse,
    }} />
  );
}

// Scanline effect
function Scanlines() {
  return (
    <div style={{
      position: "absolute", inset: 0, opacity: 0.03, pointerEvents: "none", zIndex: 100,
      background: `repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(255,255,255,0.03) 2px,
        rgba(255,255,255,0.03) 4px
      )`,
    }} />
  );
}

export const Ecom_Warning: React.FC = () => {
  const frame = useCurrentFrame();

  // Flicker effect for urgency in hook
  const flickerOp = frame < 40
    ? (Math.sin(frame * 1.2) > 0.3 ? 1 : 0.7)
    : 1;

  return (
    <div style={{
      width: 1080, height: 1920, background: C.bg,
      overflow: "hidden", position: "relative", fontFamily: F.sans,
    }}>
      <Scanlines />

      {/* Subtle red vignette */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 50,
        background: `radial-gradient(ellipse at center, transparent 50%, ${C.redGlow} 100%)`,
        opacity: ease(frame, 0, 30, 0, 0.5),
      }} />

      {/* ═══ SCENE 1: HOOK — Impact Number (0–120) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 0, 120),
        padding: "80px 60px",
        gap: 28,
      }}>
        {/* Alert bar */}
        <div style={{
          ...fadeUp(frame, 3, 10),
          display: "flex", alignItems: "center", gap: 14,
          padding: "14px 28px", borderRadius: 8,
          background: C.redDark, opacity: flickerOp,
        }}>
          <AlertPulse frame={frame} start={3} />
          <span style={{ fontSize: 26, fontFamily: F.mono, color: C.text, letterSpacing: 3 }}>
            FEE ALERT — JAN 15, 2026
          </span>
        </div>

        <div style={{
          ...fadeUp(frame, 15, 20),
          fontSize: 52, color: C.text, fontFamily: F.sans,
          textAlign: "center", lineHeight: 1.3, fontWeight: 400,
        }}>
          Amazon just took
        </div>

        <div style={{
          ...fadeUp(frame, 30, 22),
          fontSize: 160, fontWeight: 800, fontFamily: F.mono,
          color: C.red, lineHeight: 1, letterSpacing: -4,
          textShadow: `0 0 60px ${C.redGlow}`,
        }}>
          ${Math.round(ease(frame, 30, 28, 0, 3180)).toLocaleString()}
        </div>

        <div style={{
          ...fadeUp(frame, 60, 16),
          fontSize: 44, color: C.sub, fontFamily: F.sans,
          textAlign: "center",
        }}>
          /month from your margin.
        </div>

        <div style={{
          ...fadeUp(frame, 85, 14),
          fontSize: 30, color: C.amber, fontFamily: F.mono,
          letterSpacing: 2,
        }}>
          Inbound Placement Fee Change
        </div>
      </div>

      {/* ═══ SCENE 2: WHAT CHANGED (125–270) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "flex-start",
        opacity: sceneVis(frame, 125, 270),
        padding: "100px 60px",
        gap: 28,
      }}>
        <div style={{
          ...fadeUp(frame, 128, 12),
          display: "flex", alignItems: "center", gap: 12,
          fontSize: 28, fontFamily: F.mono, color: C.red, letterSpacing: 3,
        }}>
          <AlertPulse frame={frame} start={128} />
          WHAT CHANGED
        </div>

        <div style={{
          ...fadeUp(frame, 138, 16),
          fontSize: 36, color: C.sub, textAlign: "center",
          fontFamily: F.sans, lineHeight: 1.5, maxWidth: 900,
        }}>
          Ship to one warehouse = higher fees.
          <br />Amazon wants you to split shipments.
        </div>

        {/* Before/After comparison card */}
        <div style={{
          ...fadeUp(frame, 155, 16),
          width: 940, background: C.card,
          borderRadius: 20, padding: "40px 44px",
          border: `1px solid ${C.line}`,
        }}>
          <div style={{
            fontSize: 24, fontFamily: F.mono, color: C.sub, letterSpacing: 3,
            marginBottom: 24, textAlign: "center",
          }}>
            EXAMPLE SKU — SINGLE WAREHOUSE
          </div>

          {/* Before */}
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            padding: "20px 0", borderBottom: `1px solid ${C.line}`,
            opacity: ease(frame, 165, 12, 0, 1),
          }}>
            <div>
              <div style={{ fontSize: 24, fontFamily: F.mono, color: C.sub }}>BEFORE</div>
              <div style={{ fontSize: 28, color: C.sub, marginTop: 4 }}>Per unit fee</div>
            </div>
            <div style={{ fontSize: 56, fontFamily: F.mono, fontWeight: 700, color: C.green }}>
              $3.22
            </div>
          </div>

          {/* After */}
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            padding: "20px 0", borderBottom: `1px solid ${C.line}`,
            opacity: ease(frame, 185, 12, 0, 1),
          }}>
            <div>
              <div style={{ fontSize: 24, fontFamily: F.mono, color: C.red }}>AFTER</div>
              <div style={{ fontSize: 28, color: C.sub, marginTop: 4 }}>Per unit fee</div>
            </div>
            <div style={{ fontSize: 56, fontFamily: F.mono, fontWeight: 700, color: C.red }}>
              $4.81
            </div>
          </div>

          {/* Delta */}
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            padding: "24px 0",
            opacity: ease(frame, 205, 14, 0, 1),
          }}>
            <div>
              <div style={{ fontSize: 24, fontFamily: F.mono, color: C.amber }}>INCREASE</div>
              <div style={{ fontSize: 28, color: C.sub, marginTop: 4 }}>Per unit</div>
            </div>
            <div style={{
              fontSize: 56, fontFamily: F.mono, fontWeight: 800, color: C.amber,
            }}>
              +$1.59
            </div>
          </div>
        </div>

        <div style={{
          ...fadeUp(frame, 230, 16),
          fontSize: 36, color: C.sub, fontFamily: F.mono,
          textAlign: "center",
        }}>
          That's +49% per unit.
        </div>
      </div>

      {/* ═══ SCENE 3: SCALE THE DAMAGE (275–400) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 275, 400),
        padding: "80px 70px",
        gap: 32,
      }}>
        <div style={{
          ...fadeUp(frame, 278, 14),
          fontSize: 32, fontFamily: F.mono, color: C.red, letterSpacing: 3,
        }}>AT SCALE</div>

        <div style={{
          ...fadeUp(frame, 290, 16),
          fontSize: 38, color: C.sub, textAlign: "center", lineHeight: 1.5,
        }}>
          2,000 units / month
        </div>

        {/* Damage calculator */}
        <div style={{
          ...fadeUp(frame, 305, 18),
          width: 900, padding: "44px 48px",
          background: C.card, borderRadius: 20,
          border: `2px solid ${C.red}`,
          boxShadow: `0 0 40px ${C.redGlow}`,
        }}>
          {/* Calculation */}
          <div style={{
            display: "flex", justifyContent: "center", alignItems: "center",
            gap: 20, marginBottom: 30,
            fontSize: 40, fontFamily: F.mono, color: C.text,
          }}>
            <span style={{ opacity: ease(frame, 310, 10, 0, 1) }}>$1.59</span>
            <span style={{ color: C.sub, opacity: ease(frame, 318, 10, 0, 1) }}>x</span>
            <span style={{ opacity: ease(frame, 324, 10, 0, 1) }}>2,000</span>
            <span style={{ color: C.sub, opacity: ease(frame, 332, 10, 0, 1) }}>=</span>
          </div>

          {/* Big damage number */}
          <div style={{
            textAlign: "center",
            opacity: ease(frame, 338, 16, 0, 1),
          }}>
            <div style={{
              fontSize: 120, fontWeight: 800, fontFamily: F.mono,
              color: C.red, lineHeight: 1,
              textShadow: `0 0 40px ${C.redGlow}`,
            }}>
              ${Math.round(ease(frame, 338, 22, 0, 3180)).toLocaleString()}
            </div>
            <div style={{
              fontSize: 32, fontFamily: F.mono, color: C.sub, marginTop: 10,
            }}>
              additional cost / month
            </div>
          </div>

          {/* Annual impact */}
          <div style={{
            ...fadeUp(frame, 365, 14),
            marginTop: 28, padding: "18px 24px",
            background: "rgba(229,57,53,0.08)", borderRadius: 12,
            textAlign: "center",
          }}>
            <span style={{ fontSize: 36, fontFamily: F.mono, fontWeight: 700, color: C.red }}>
              $38,160/year
            </span>
            <span style={{ fontSize: 28, color: C.sub, marginLeft: 14 }}>
              in new fees
            </span>
          </div>
        </div>

        <div style={{
          ...fadeUp(frame, 380, 14),
          fontSize: 34, color: C.amber, fontFamily: F.mono,
          textAlign: "center",
        }}>
          That's not a rounding error.
        </div>
      </div>

      {/* ═══ SCENE 4: CTA (405–540) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 405, 540, 12, 1),
        padding: "80px 70px",
        gap: 40,
      }}>
        <div style={{
          ...fadeUp(frame, 408, 12),
          display: "flex", alignItems: "center", gap: 14,
        }}>
          <AlertPulse frame={frame} start={408} />
          <span style={{ fontSize: 28, fontFamily: F.mono, color: C.red, letterSpacing: 3 }}>
            ACTION REQUIRED
          </span>
        </div>

        <div style={{
          ...fadeUp(frame, 425, 20),
          fontSize: 56, color: C.text, fontFamily: F.sans, fontWeight: 700,
          textAlign: "center", lineHeight: 1.3,
        }}>
          Check your
          <br /><span style={{ color: C.red }}>fee calculator.</span>
        </div>

        <div style={{
          ...fadeUp(frame, 460, 16),
          fontSize: 48, color: C.amber, fontFamily: F.sans, fontWeight: 600,
          textAlign: "center", lineHeight: 1.3,
        }}>
          Today. Not tomorrow.
        </div>

        <div style={{
          ...fadeUp(frame, 490, 14),
          width: 500, height: 2,
          background: `linear-gradient(90deg, transparent, ${C.red}, transparent)`,
        }} />

        <div style={{
          ...fadeUp(frame, 505, 14),
          fontSize: 28, color: C.sub, fontFamily: F.mono, letterSpacing: 2,
          textAlign: "center", lineHeight: 1.6,
        }}>
          Split shipments or eat the cost.
          <br />Those are your options.
        </div>
      </div>
    </div>
  );
};
