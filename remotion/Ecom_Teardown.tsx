import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

// ECOM REEL 4: "Side-by-Side Teardown" — Email vs Meta for Abandoned Carts
// Split-screen scoreboard. Purple (Meta) vs Teal (Email). White bg.
// 18s = 540 frames @ 30fps, 1080x1920

const C = {
  bg: "#FFFFFF",
  meta: "#7C3AED",       // purple/violet — Meta brand adjacent
  metaLight: "#EDE9FE",
  metaBar: "#A78BFA",
  email: "#0D9488",      // teal/green — email/money
  emailLight: "#CCFBF1",
  emailBar: "#5EEAD4",
  text: "#1E1B2E",
  sub: "#6B7280",
  dim: "#E5E7EB",
  win: "#059669",
  lose: "#DC2626",
};
const F = {
  serif: "'DM Serif Display', Georgia, serif",
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

// Bar chart row for a single dimension
function ComparisonRow({
  frame, start, label, emailVal, metaVal, emailDisplay, metaDisplay,
  emailPct, metaPct, emailWins, unit,
}: {
  frame: number; start: number; label: string;
  emailVal: number; metaVal: number;
  emailDisplay: string; metaDisplay: string;
  emailPct: number; metaPct: number;
  emailWins: boolean; unit?: string;
}) {
  const vis = ease(frame, start, 20, 0, 1);
  const barGrow = ease(frame, start + 8, 22, 0, 1, Easing.out(Easing.cubic));

  return (
    <div style={{
      opacity: vis,
      transform: `translateY(${(1 - vis) * 30}px)`,
      marginBottom: 28,
      width: "100%",
    }}>
      {/* Label */}
      <div style={{
        fontFamily: F.sans, fontSize: 28, fontWeight: 600,
        color: C.sub, marginBottom: 14, letterSpacing: 1,
        textTransform: "uppercase",
      }}>{label}</div>

      {/* Two bars side by side */}
      <div style={{ display: "flex", gap: 16, alignItems: "flex-end" }}>
        {/* Email bar */}
        <div style={{ flex: 1 }}>
          <div style={{
            fontFamily: F.mono, fontSize: 38, fontWeight: 800,
            color: emailWins ? C.win : C.text,
            marginBottom: 8,
          }}>
            {emailDisplay}
            {emailWins && <span style={{ fontSize: 22, marginLeft: 8, color: C.win }}>WIN</span>}
          </div>
          <div style={{
            height: 44, borderRadius: 8, background: C.emailLight,
            overflow: "hidden", position: "relative",
          }}>
            <div style={{
              height: "100%", borderRadius: 8,
              background: `linear-gradient(90deg, ${C.email}, ${C.emailBar})`,
              width: `${emailPct * barGrow}%`,
              transition: "none",
            }} />
          </div>
        </div>
        {/* Meta bar */}
        <div style={{ flex: 1 }}>
          <div style={{
            fontFamily: F.mono, fontSize: 38, fontWeight: 800,
            color: !emailWins ? C.win : C.text,
            marginBottom: 8,
          }}>
            {metaDisplay}
            {!emailWins && <span style={{ fontSize: 22, marginLeft: 8, color: C.win }}>WIN</span>}
          </div>
          <div style={{
            height: 44, borderRadius: 8, background: C.metaLight,
            overflow: "hidden", position: "relative",
          }}>
            <div style={{
              height: "100%", borderRadius: 8,
              background: `linear-gradient(90deg, ${C.meta}, ${C.metaBar})`,
              width: `${metaPct * barGrow}%`,
              transition: "none",
            }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export const Ecom_Teardown: React.FC = () => {
  const frame = useCurrentFrame();

  // Scene timing: 5 scenes across 540 frames
  // S1: Hook (0-105)  ~3.5s
  // S2: Split labels + Row 1 (106-210) ~3.5s
  // S3: Row 2+3 (211-340) ~4.3s
  // S4: ROI reveal - emotional moment (341-440) ~3.3s
  // S5: CTA (441-540) ~3.3s

  const s1 = sceneVis(frame, 0, 100, 1, 12);
  const s2 = sceneVis(frame, 106, 205, 10, 12);
  const s3 = sceneVis(frame, 211, 335, 10, 12);
  const s4 = sceneVis(frame, 341, 435, 10, 12);
  const s5 = sceneVis(frame, 441, 535, 10, 1);

  // S4 emotional ROI number pulse
  const roiPulse = frame >= 370 && frame <= 400
    ? 1 + 0.08 * Math.sin((frame - 370) * 0.3)
    : 1;

  return (
    <div style={{
      width: 1080, height: 1920, background: C.bg,
      display: "flex", flexDirection: "column", alignItems: "center",
      justifyContent: "center", overflow: "hidden", position: "relative",
    }}>
      {/* Subtle vertical split line */}
      <div style={{
        position: "absolute", top: 0, bottom: 0, left: "50%",
        width: 2, background: C.dim, opacity: frame > 105 ? 0.5 : 0,
      }} />

      {/* S1: Hook */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", padding: 80, opacity: s1,
      }}>
        <div style={{
          fontFamily: F.serif, fontSize: 54, fontWeight: 700,
          color: C.text, textAlign: "center", lineHeight: 1.3,
          ...fadeUp(frame, 5),
        }}>
          Email vs Meta ads{"\n"}for abandoned carts.
        </div>
        <div style={{
          fontFamily: F.sans, fontSize: 34, color: C.sub,
          textAlign: "center", marginTop: 30,
          ...fadeUp(frame, 20),
        }}>
          I ran both for 90 days.
        </div>
        {/* VS badge */}
        <div style={{
          marginTop: 50, width: 120, height: 120, borderRadius: 60,
          background: C.text, display: "flex", alignItems: "center",
          justifyContent: "center",
          ...fadeUp(frame, 35),
        }}>
          <span style={{
            fontFamily: F.serif, fontSize: 48, fontWeight: 700, color: "#fff",
          }}>VS</span>
        </div>
      </div>

      {/* S2: Column headers + Row 1 (Cost) */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
        display: "flex", flexDirection: "column",
        padding: "140px 60px 60px", opacity: s2,
      }}>
        {/* Column headers */}
        <div style={{
          display: "flex", gap: 16, marginBottom: 40,
          ...fadeUp(frame, 108),
        }}>
          <div style={{
            flex: 1, padding: "20px 24px", borderRadius: 16,
            background: C.emailLight, textAlign: "center",
          }}>
            <div style={{ fontFamily: F.sans, fontSize: 32, fontWeight: 700, color: C.email }}>
              EMAIL
            </div>
            <div style={{ fontFamily: F.sans, fontSize: 20, color: C.sub, marginTop: 4 }}>
              Klaviyo
            </div>
          </div>
          <div style={{
            flex: 1, padding: "20px 24px", borderRadius: 16,
            background: C.metaLight, textAlign: "center",
          }}>
            <div style={{ fontFamily: F.sans, fontSize: 32, fontWeight: 700, color: C.meta }}>
              META ADS
            </div>
            <div style={{ fontFamily: F.sans, fontSize: 20, color: C.sub, marginTop: 4 }}>
              Retargeting
            </div>
          </div>
        </div>

        {/* Row 1: Cost */}
        <ComparisonRow
          frame={frame} start={130}
          label="Cost / Month"
          emailVal={150} metaVal={2400}
          emailDisplay="$150" metaDisplay="$2,400"
          emailPct={85} metaPct={100}
          emailWins={true}
        />
      </div>

      {/* S3: Rows 2+3 (Recovery Rate + Revenue) */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
        display: "flex", flexDirection: "column",
        padding: "140px 60px 60px", justifyContent: "center", opacity: s3,
      }}>
        <ComparisonRow
          frame={frame} start={218}
          label="Recovery Rate"
          emailVal={8.2} metaVal={4.1}
          emailDisplay="8.2%" metaDisplay="4.1%"
          emailPct={100} metaPct={50}
          emailWins={true}
        />
        <ComparisonRow
          frame={frame} start={275}
          label="Revenue Recovered"
          emailVal={11200} metaVal={8600}
          emailDisplay="$11,200" metaDisplay="$8,600"
          emailPct={100} metaPct={77}
          emailWins={true}
        />
      </div>

      {/* S4: ROI — Emotional Moment */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", padding: 60, opacity: s4,
      }}>
        <div style={{
          fontFamily: F.sans, fontSize: 30, fontWeight: 600,
          color: C.sub, letterSpacing: 2, textTransform: "uppercase",
          marginBottom: 50,
          ...fadeUp(frame, 345),
        }}>RETURN ON INVESTMENT</div>

        <div style={{
          display: "flex", gap: 40, width: "100%",
          justifyContent: "center", alignItems: "flex-end",
        }}>
          {/* Email ROI */}
          <div style={{
            textAlign: "center",
            ...fadeUp(frame, 352),
          }}>
            <div style={{
              fontFamily: F.mono, fontSize: 120, fontWeight: 900,
              color: C.win, lineHeight: 1,
              transform: `scale(${roiPulse})`,
            }}>74x</div>
            <div style={{
              fontFamily: F.sans, fontSize: 26, color: C.email,
              marginTop: 12, fontWeight: 600,
            }}>Email</div>
          </div>

          {/* vs divider */}
          <div style={{
            fontFamily: F.serif, fontSize: 36, color: C.dim,
            paddingBottom: 30,
            ...fadeUp(frame, 358),
          }}>vs</div>

          {/* Meta ROI */}
          <div style={{
            textAlign: "center",
            ...fadeUp(frame, 365),
          }}>
            <div style={{
              fontFamily: F.mono, fontSize: 120, fontWeight: 900,
              color: C.lose, lineHeight: 1,
            }}>3.6x</div>
            <div style={{
              fontFamily: F.sans, fontSize: 26, color: C.meta,
              marginTop: 12, fontWeight: 600,
            }}>Meta</div>
          </div>
        </div>

        {/* Verdict */}
        <div style={{
          marginTop: 60, padding: "18px 40px", borderRadius: 12,
          background: C.emailLight, border: `2px solid ${C.email}`,
          ...fadeUp(frame, 385),
        }}>
          <span style={{
            fontFamily: F.sans, fontSize: 30, fontWeight: 700, color: C.email,
          }}>Email wins. Decisively.</span>
        </div>
      </div>

      {/* S5: CTA */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", padding: 80, opacity: s5,
      }}>
        <div style={{
          fontFamily: F.serif, fontSize: 50, fontWeight: 700,
          color: C.text, textAlign: "center", lineHeight: 1.35,
          ...fadeUp(frame, 448),
        }}>
          Stop feeding Meta.
        </div>
        <div style={{
          fontFamily: F.serif, fontSize: 50, fontWeight: 700,
          color: C.email, textAlign: "center", lineHeight: 1.35,
          marginTop: 20,
          ...fadeUp(frame, 465),
        }}>
          Start writing{"\n"}subject lines.
        </div>

        {/* Arrow down */}
        <div style={{
          marginTop: 60, fontSize: 40, color: C.sub,
          ...fadeUp(frame, 485),
        }}>
          {"\u2193"}
        </div>
      </div>

      {/* Score badge — appears from S2 onward */}
      {frame > 120 && frame < 435 && (
        <div style={{
          position: "absolute", top: 60, right: 60,
          padding: "10px 20px", borderRadius: 30,
          background: C.text, opacity: 0.9,
        }}>
          <span style={{
            fontFamily: F.mono, fontSize: 22, fontWeight: 700, color: "#fff",
          }}>
            EMAIL{" "}
            <span style={{ color: C.emailBar }}>
              {frame > 145 ? (frame > 230 ? (frame > 290 ? (frame > 365 ? "4" : "3") : "2") : "1") : "0"}
            </span>
            {" - "}
            <span style={{ color: C.metaBar }}>0</span>
            {" "}META
          </span>
        </div>
      )}
    </div>
  );
};
