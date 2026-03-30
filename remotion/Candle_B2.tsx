import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

// CANDLE — OUTPUT B2: "Lavender ≠ lavender" — Chemistry comparison. Complexity vs simplicity.

const clamp = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };

const CREAM = "#F5EDE0";
const CHARCOAL = "#1a1410";
const AMBER = "#D4A574";
const SAGE = "#8B9A7B";
const FLAME = "#E8A045";
const GOLD = "#C8963E";
const WARM_DARK = "#2C2218";
const MUTED = "#9A8B7A";

function ease(frame: number, start: number, dur: number, from: number, to: number, fn = Easing.out(Easing.cubic)) {
  return interpolate(frame, [start, start + dur], [from, to], { ...clamp, easing: fn });
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

// Essential oil compounds with relative concentrations (% of total)
// Source: GC-MS analysis of Lavandula angustifolia — 47 total compounds
const COMPOUNDS = [
  { name: "Linalool", pct: 38, color: SAGE },
  { name: "Linalyl acetate", pct: 34, color: AMBER },
  { name: "β-Caryophyllene", pct: 8, color: `${SAGE}C0` },
  { name: "1,8-Cineole", pct: 6, color: `${AMBER}C0` },
  { name: "Camphor", pct: 4, color: MUTED },
  { name: "α-Terpineol", pct: 3, color: `${SAGE}A0` },
  { name: "Terpinen-4-ol", pct: 2.5, color: `${AMBER}A0` },
  { name: "Borneol", pct: 2, color: `${SAGE}80` },
  { name: "Geraniol", pct: 1.5, color: `${GOLD}B0` },
];

export const Candle_B2: React.FC = () => {
  const frame = useCurrentFrame();

  // ═══ SCENE 1 (0–100): Split screen — same word, different reality ═══
  const s1 = sceneVis(frame, 0, 100);
  const titleFade = ease(frame, 10, 18, 0, 1);
  const titleScale = ease(frame, 10, 22, 0.92, 1, Easing.out(Easing.exp));
  const dividerHeight = ease(frame, 5, 25, 0, 100, Easing.out(Easing.quad));
  const subtitleLeft = fadeUp(frame, 60);
  const subtitleRight = fadeUp(frame, 65);

  // ═══ SCENE 2 (100–250): Compound bars — 1 vs 47 ═══
  const s2 = sceneVis(frame, 100, 250);

  // Synthetic: single bar fills slowly
  const synthBarWidth = ease(frame, 118, 40, 0, 100, Easing.out(Easing.quad));
  const synthLabel = fadeUp(frame, 115);

  // Essential oil compounds stagger in
  const compoundStagger = 12;

  // How many compounds are revealed
  const revealedCount = Math.min(
    COMPOUNDS.length,
    Math.max(0, Math.floor((frame - 120) / compoundStagger) + 1)
  );

  // Animated "out of 47" counter on the right
  const displayTotal = 47;
  const counterRight = frame > 120
    ? Math.min(displayTotal, Math.round(interpolate(
        frame, [120, 235], [1, displayTotal],
        { ...clamp, easing: Easing.out(Easing.cubic) }
      )))
    : 0;

  // ═══ SCENE 3 (250–370): "47 compounds working together" ═══
  const s3 = sceneVis(frame, 250, 370);
  const dividerDissolve = ease(frame, 252, 18, 1, 0);
  const mainText = fadeUp(frame, 275);
  const subText = fadeUp(frame, 320);

  // ═══ SCENE 4 (370–450): "Your nose knows the difference." ═══
  const s4 = sceneVis(frame, 370, 450);
  const noseLine = fadeUp(frame, 385);
  const nervousLine = fadeUp(frame, 415);

  // ═══ SCENE 5 (450–540): VESPER lockup ═══
  const s5 = sceneVis(frame, 450, 540, 10, 1);
  const lockup = fadeUp(frame, 462);
  const tagline = fadeUp(frame, 490);

  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        backgroundColor: CHARCOAL,
        overflow: "hidden",
        position: "relative",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* ═══ SCENE 1: Split — "Lavender" vs "Lavender" ═══ */}
      {s1 > 0 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: s1,
            display: "flex",
          }}
        >
          {/* Left half */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                fontFamily: "Georgia, serif",
                fontSize: 64,
                color: CREAM,
                opacity: titleFade,
                transform: `scale(${titleScale})`,
              }}
            >
              Lavender
            </div>
            <div
              style={{
                ...subtitleLeft,
                fontFamily: "Inter, sans-serif",
                fontSize: 20,
                color: MUTED,
                marginTop: 20,
              }}
            >
              synthetic fragrance
            </div>
          </div>

          {/* Center divider */}
          <div
            style={{
              width: 1,
              height: `${dividerHeight}%`,
              backgroundColor: `${MUTED}60`,
              alignSelf: "center",
            }}
          />

          {/* Right half */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                fontFamily: "Georgia, serif",
                fontSize: 64,
                color: CREAM,
                opacity: titleFade,
                transform: `scale(${titleScale})`,
              }}
            >
              Lavender
            </div>
            <div
              style={{
                ...subtitleRight,
                fontFamily: "Inter, sans-serif",
                fontSize: 20,
                color: SAGE,
                marginTop: 20,
              }}
            >
              essential oil
            </div>
          </div>
        </div>
      )}

      {/* ═══ SCENE 2: Compound comparison — spectrogram style ═══ */}
      {s2 > 0 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: s2,
            display: "flex",
          }}
        >
          {/* Left: synthetic — ONE lonely bar */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingLeft: 60,
              paddingRight: 30,
              position: "relative",
            }}
          >
            {/* Counter: 1/1 */}
            <div
              style={{
                position: "absolute",
                top: 140,
                left: 60,
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 22,
                color: `${CREAM}60`,
                ...fadeUp(frame, 118),
              }}
            >
              1 / 1
            </div>

            <div style={synthLabel}>
              <div
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 18,
                  color: MUTED,
                  marginBottom: 8,
                }}
              >
                Linalyl acetate (synthetic)
              </div>
              <div
                style={{
                  height: 26,
                  width: `${synthBarWidth}%`,
                  maxWidth: 400,
                  backgroundColor: `${MUTED}70`,
                  borderRadius: 4,
                  border: `1px solid ${MUTED}35`,
                }}
              />
            </div>

            {/* Empty space emphasizes the loneliness of one compound */}
            <div style={{ height: 420 }} />
          </div>

          {/* Center divider */}
          <div
            style={{
              width: 1,
              backgroundColor: `${MUTED}35`,
              alignSelf: "stretch",
              marginTop: 100,
              marginBottom: 100,
            }}
          />

          {/* Right: essential oil — compound bars stacking up */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingLeft: 30,
              paddingRight: 60,
              position: "relative",
            }}
          >
            {/* Counter: N/47 */}
            <div
              style={{
                position: "absolute",
                top: 140,
                right: 60,
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 22,
                color: SAGE,
                ...fadeUp(frame, 125),
              }}
            >
              {frame > 120 ? `${Math.min(revealedCount, COMPOUNDS.length)} / ${counterRight}` : ""}
            </div>

            {COMPOUNDS.map((compound, i) => {
              const barStart = 120 + i * compoundStagger;
              const barW = ease(frame, barStart, 22, 0, compound.pct * 2.8, Easing.out(Easing.quad));
              const barOpacity = ease(frame, barStart, 12, 0, 1);
              return (
                <div
                  key={compound.name}
                  style={{
                    marginBottom: 14,
                    opacity: barOpacity,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: 15,
                      color: `${CREAM}90`,
                      marginBottom: 4,
                    }}
                  >
                    {compound.name}
                  </div>
                  <div
                    style={{
                      height: 20,
                      width: barW,
                      backgroundColor: compound.color,
                      borderRadius: 3,
                    }}
                  />
                </div>
              );
            })}

            {/* "and more..." */}
            <div
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 15,
                color: `${MUTED}80`,
                marginTop: 10,
                ...fadeUp(frame, 222),
              }}
            >
              + 38 more compounds...
            </div>
          </div>
        </div>
      )}

      {/* ═══ SCENE 3: "47 compounds working together." ═══ */}
      {s3 > 0 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: s3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Dissolving divider remnant */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "10%",
              height: "80%",
              width: 1,
              backgroundColor: `${MUTED}40`,
              opacity: dividerDissolve,
            }}
          />

          <div style={{ textAlign: "center", padding: "0 80px" }}>
            <div
              style={{
                ...mainText,
                fontFamily: "Georgia, serif",
                fontSize: 56,
                color: CREAM,
                lineHeight: 1.25,
              }}
            >
              47 compounds
              <br />
              working together.
            </div>
            <div
              style={{
                ...subText,
                fontFamily: "Inter, sans-serif",
                fontSize: 28,
                color: MUTED,
                marginTop: 36,
              }}
            >
              vs. 1 molecule pretending.
            </div>
          </div>
        </div>
      )}

      {/* ═══ SCENE 4: "Your nose knows the difference." ═══ */}
      {s4 > 0 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: s4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ textAlign: "center", padding: "0 100px" }}>
            <div
              style={{
                ...noseLine,
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
                fontSize: 50,
                color: CREAM,
                lineHeight: 1.3,
              }}
            >
              Your nose knows
              <br />
              the difference.
            </div>
            <div
              style={{
                ...nervousLine,
                fontFamily: "Inter, sans-serif",
                fontSize: 26,
                color: SAGE,
                marginTop: 40,
              }}
            >
              So does your nervous system.
            </div>
          </div>
        </div>
      )}

      {/* ═══ SCENE 5: VESPER lockup ═══ */}
      {s5 > 0 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: s5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ textAlign: "center", ...lockup }}>
            <div
              style={{
                fontFamily: "Georgia, serif",
                fontSize: 72,
                color: CREAM,
                letterSpacing: "10px",
              }}
            >
              VESPER
            </div>
          </div>
          <div
            style={{
              ...tagline,
              textAlign: "center",
              marginTop: 40,
            }}
          >
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 22,
                color: MUTED,
                letterSpacing: "1px",
              }}
            >
              100% essential oils. Zero synthetics.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
