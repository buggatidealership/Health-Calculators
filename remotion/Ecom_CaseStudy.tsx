import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

// ECOM REEL 6: "Annotated Case Study" — Dog Bandana Store 0→340 Sales
// Journal/timeline aesthetic. Warm sepia. Milestone notebooks.
// 18s = 540 frames @ 30fps, 1080x1920

const C = {
  bg: "#F5EDE0",          // warm sepia/tan
  bgDark: "#E8DCC8",
  card: "#FFFBF2",
  text: "#2C1810",
  sub: "#8B7355",
  dim: "#C4B49A",
  timeline: "#A0876E",
  red: "#C0392B",
  redLight: "#FADBD8",
  green: "#1E8449",
  greenLight: "#D5F5E3",
  gold: "#D4A030",
  goldLight: "#FDF2D0",
  serif: "#4A3728",
};
const F = {
  serif: "'DM Serif Display', Georgia, serif",
  serifItalic: "'DM Serif Display', Georgia, serif",
  sans: "'Inter', -apple-system, sans-serif",
  mono: "'JetBrains Mono', monospace",
  handwritten: "'Caveat', 'DM Serif Display', Georgia, cursive",
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

// Milestone notebook card
function MilestoneCard({
  frame, start, days, revenue, adSpend, profit, insight, insightStart,
  isLoss, accentColor, labelColor,
}: {
  frame: number; start: number; days: string;
  revenue: string; adSpend: string; profit: string;
  insight: string; insightStart: number;
  isLoss: boolean; accentColor: string; labelColor: string;
}) {
  const vis = ease(frame, start, 18, 0, 1);
  const unfold = ease(frame, start, 22, 0.92, 1, Easing.out(Easing.cubic));

  return (
    <div style={{
      opacity: vis,
      transform: `translateY(${(1 - vis) * 50}px) scaleY(${unfold})`,
      background: C.card,
      borderRadius: 16,
      padding: "32px 36px",
      marginBottom: 24,
      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      border: `1px solid ${C.dim}`,
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Day range header */}
      <div style={{
        fontFamily: F.sans, fontSize: 22, fontWeight: 700,
        color: C.sub, letterSpacing: 2, textTransform: "uppercase",
        marginBottom: 20,
      }}>{days}</div>

      {/* Data grid */}
      <div style={{ display: "flex", gap: 20, marginBottom: 20 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: F.sans, fontSize: 18, color: C.sub }}>Revenue</div>
          <div style={{ fontFamily: F.mono, fontSize: 34, fontWeight: 800, color: C.text }}>
            {revenue}
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: F.sans, fontSize: 18, color: C.sub }}>Ad Spend</div>
          <div style={{ fontFamily: F.mono, fontSize: 34, fontWeight: 800, color: C.sub }}>
            {adSpend}
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: F.sans, fontSize: 18, color: C.sub }}>Profit</div>
          <div style={{
            fontFamily: F.mono, fontSize: 34, fontWeight: 800,
            color: isLoss ? C.red : C.green,
          }}>
            {profit}
          </div>
        </div>
      </div>

      {/* Insight quote */}
      <div style={{
        ...fadeUp(frame, insightStart),
        padding: "16px 20px",
        background: isLoss ? C.redLight : C.greenLight,
        borderLeft: `4px solid ${accentColor}`,
        borderRadius: 8,
      }}>
        <div style={{
          fontFamily: F.serif, fontSize: 26, fontStyle: "italic",
          color: labelColor, lineHeight: 1.4,
        }}>
          "{insight}"
        </div>
      </div>
    </div>
  );
}

export const Ecom_CaseStudy: React.FC = () => {
  const frame = useCurrentFrame();

  // Scene timing: 5 scenes across 540 frames
  // S1: Hook (0-100) ~3.3s
  // S2: Milestone 1 — Day 1-30, the loss (101-210) ~3.7s
  // S3: Milestone 2 — Day 31-60, the turn (211-330) ~4s
  // S4: Milestone 3 — Day 61-90, the win (331-440) ~3.7s
  // S5: CTA (441-540) ~3.3s

  const s1 = sceneVis(frame, 0, 95, 1, 12);
  const s2 = sceneVis(frame, 101, 205, 10, 12);
  const s3 = sceneVis(frame, 211, 325, 10, 12);
  const s4 = sceneVis(frame, 331, 435, 10, 12);
  const s5 = sceneVis(frame, 441, 535, 10, 1);

  // Timeline progress (visual element across S2-S4)
  const timelineProg = frame < 101 ? 0
    : frame < 211 ? ease(frame, 101, 60, 0, 0.33)
    : frame < 331 ? ease(frame, 211, 60, 0.33, 0.66)
    : ease(frame, 331, 60, 0.66, 1);

  return (
    <div style={{
      width: 1080, height: 1920, background: C.bg,
      display: "flex", flexDirection: "column",
      overflow: "hidden", position: "relative",
    }}>
      {/* Subtle paper texture lines */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
        background: `repeating-linear-gradient(
          0deg,
          transparent,
          transparent 38px,
          ${C.dim}22 38px,
          ${C.dim}22 39px
        )`,
        pointerEvents: "none", opacity: 0.5,
      }} />

      {/* Left margin line (notebook feel) */}
      <div style={{
        position: "absolute", top: 0, bottom: 0, left: 90,
        width: 2, background: `${C.red}30`,
      }} />

      {/* S1: Hook */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", padding: 80, opacity: s1,
      }}>
        <div style={{
          fontFamily: F.serif, fontSize: 52, fontWeight: 700,
          color: C.text, textAlign: "center", lineHeight: 1.3,
          ...fadeUp(frame, 5),
        }}>
          Day 1: 0 sales.
        </div>
        <div style={{
          fontFamily: F.serif, fontSize: 52, fontWeight: 700,
          color: C.green, textAlign: "center", lineHeight: 1.3,
          marginTop: 16,
          ...fadeUp(frame, 22),
        }}>
          Day 90: 340 sales.
        </div>
        <div style={{
          fontFamily: F.sans, fontSize: 30, color: C.sub,
          textAlign: "center", marginTop: 30,
          ...fadeUp(frame, 40),
        }}>
          One store. One product.
        </div>

        {/* Product hint */}
        <div style={{
          marginTop: 40, padding: "12px 28px", borderRadius: 30,
          background: C.goldLight, border: `2px solid ${C.gold}`,
          ...fadeUp(frame, 55),
        }}>
          <span style={{
            fontFamily: F.sans, fontSize: 24, fontWeight: 600, color: C.gold,
          }}>Dog bandanas on Shopify</span>
        </div>
      </div>

      {/* Timeline bar — visible during S2-S4 */}
      {frame > 100 && frame < 440 && (
        <div style={{
          position: "absolute", top: 100, left: 120, right: 120,
          height: 8, background: C.dim, borderRadius: 4,
          opacity: Math.min(s2 + s3 + s4, 0.9),
        }}>
          <div style={{
            height: "100%", borderRadius: 4,
            background: `linear-gradient(90deg, ${C.red}, ${C.gold}, ${C.green})`,
            width: `${timelineProg * 100}%`,
          }} />
          {/* Milestone dots */}
          {[0.05, 0.5, 0.95].map((pos, i) => (
            <div key={i} style={{
              position: "absolute", left: `${pos * 100}%`, top: -10,
              width: 28, height: 28, borderRadius: 14,
              background: i === 0 ? C.red : i === 1 ? C.gold : C.green,
              border: `3px solid ${C.card}`,
              transform: "translateX(-14px)",
              opacity: timelineProg >= pos - 0.1 ? 1 : 0.3,
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            }} />
          ))}
          {/* Day labels */}
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20 }}>
            <span style={{ fontFamily: F.mono, fontSize: 18, color: C.sub }}>Day 1</span>
            <span style={{ fontFamily: F.mono, fontSize: 18, color: C.sub }}>Day 45</span>
            <span style={{ fontFamily: F.mono, fontSize: 18, color: C.sub }}>Day 90</span>
          </div>
        </div>
      )}

      {/* S2: Milestone 1 — the loss */}
      <div style={{
        position: "absolute", top: 200, left: 60, right: 60,
        opacity: s2,
      }}>
        <MilestoneCard
          frame={frame} start={110}
          days="Day 1 — 30"
          revenue="$180" adSpend="$900" profit="-$720"
          insight="I almost quit."
          insightStart={145}
          isLoss={true}
          accentColor={C.red}
          labelColor={C.red}
        />
      </div>

      {/* S3: Milestone 2 — the turn */}
      <div style={{
        position: "absolute", top: 200, left: 60, right: 60,
        opacity: s3,
      }}>
        <MilestoneCard
          frame={frame} start={220}
          days="Day 31 — 60"
          revenue="$2,400" adSpend="$1,100" profit="+$400"
          insight="One product page change: added size chart with actual dog photos."
          insightStart={260}
          isLoss={false}
          accentColor={C.gold}
          labelColor={C.gold}
        />

        {/* Gold accent for insight */}
        <div style={{
          marginTop: 16, padding: "16px 24px",
          background: C.goldLight, borderRadius: 12,
          border: `1px solid ${C.gold}`,
          ...fadeUp(frame, 280),
        }}>
          <div style={{
            fontFamily: F.sans, fontSize: 22, fontWeight: 600,
            color: C.gold, display: "flex", alignItems: "center", gap: 10,
          }}>
            <span style={{ fontSize: 28 }}>{"\u2728"}</span>
            The turning point
          </div>
        </div>
      </div>

      {/* S4: Milestone 3 — the win */}
      <div style={{
        position: "absolute", top: 200, left: 60, right: 60,
        opacity: s4,
      }}>
        <MilestoneCard
          frame={frame} start={340}
          days="Day 61 — 90"
          revenue="$8,200" adSpend="$1,800" profit="+$3,100"
          insight="UGC from 3 customers became my best-performing ad creative."
          insightStart={380}
          isLoss={false}
          accentColor={C.green}
          labelColor={C.green}
        />

        {/* Summary stats */}
        <div style={{
          display: "flex", gap: 16, marginTop: 20,
          ...fadeUp(frame, 400),
        }}>
          <div style={{
            flex: 1, background: C.card, borderRadius: 12,
            padding: "20px 16px", textAlign: "center",
            boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
          }}>
            <div style={{ fontFamily: F.mono, fontSize: 40, fontWeight: 900, color: C.green }}>340</div>
            <div style={{ fontFamily: F.sans, fontSize: 18, color: C.sub }}>total sales</div>
          </div>
          <div style={{
            flex: 1, background: C.card, borderRadius: 12,
            padding: "20px 16px", textAlign: "center",
            boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
          }}>
            <div style={{ fontFamily: F.mono, fontSize: 40, fontWeight: 900, color: C.green }}>$2,780</div>
            <div style={{ fontFamily: F.sans, fontSize: 18, color: C.sub }}>net profit</div>
          </div>
          <div style={{
            flex: 1, background: C.card, borderRadius: 12,
            padding: "20px 16px", textAlign: "center",
            boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
          }}>
            <div style={{ fontFamily: F.mono, fontSize: 40, fontWeight: 900, color: C.gold }}>1</div>
            <div style={{ fontFamily: F.sans, fontSize: 18, color: C.sub }}>product</div>
          </div>
        </div>
      </div>

      {/* S5: CTA */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", padding: 80, opacity: s5,
        background: C.bg,
      }}>
        <div style={{
          fontFamily: F.serif, fontSize: 46, fontWeight: 700,
          color: C.text, textAlign: "center", lineHeight: 1.35,
          ...fadeUp(frame, 448),
        }}>
          The first 30 days are{"\n"}supposed to lose money.
        </div>
        <div style={{
          fontFamily: F.serif, fontSize: 50, fontWeight: 700,
          color: C.green, textAlign: "center", lineHeight: 1.35,
          marginTop: 30,
          ...fadeUp(frame, 470),
        }}>
          Keep going.
        </div>

        {/* Underline accent */}
        <div style={{
          width: ease(frame, 480, 20, 0, 300), height: 4,
          background: C.gold, borderRadius: 2, marginTop: 20,
        }} />
      </div>
    </div>
  );
};
