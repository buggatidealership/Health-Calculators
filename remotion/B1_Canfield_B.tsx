import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
import { BRAND, FONTS, SAFE, SPEC } from "./derma-brand";

// B1_Canfield_B — "Präzisionsdaten" (Precision Data)
// Side-by-side comparison: Klassisch vs IntelliStudio
// 360 frames (12s at 30fps), 1080x1920

const ease = Easing.out(Easing.cubic);
const clamp = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };

const fadeUp = (frame: number, start: number, dur = 14) => ({
  opacity: interpolate(frame, [start, start + dur], [0, 1], clamp),
  transform: `translateY(${interpolate(frame, [start, start + dur], [30, 0], { ...clamp, easing: ease })}px)`,
});

const sceneVis = (frame: number, start: number, end: number, fadeIn = 8, fadeOut = 10) => {
  if (frame < start) return 0;
  if (frame > end + fadeOut) return 0;
  return Math.min(
    interpolate(frame, [start, start + fadeIn], [0, 1], clamp),
    interpolate(frame, [end, end + fadeOut], [1, 0], clamp)
  );
};

// Comparison data
const comparisons = [
  { label: "Dauer", left: "90 Min.", leftPct: 0.95, right: "<2 Min.", rightPct: 0.04 },
  { label: "Reproduzierbarkeit", left: "Variabel", leftPct: 0.45, right: "100%", rightPct: 1.0 },
  { label: "Abdeckung", left: "Partiell", leftPct: 0.35, right: "Komplett", rightPct: 1.0 },
];

export const B1_Canfield_B: React.FC = () => {
  const frame = useCurrentFrame();

  // === SCENE TIMING ===
  // Scene 1: Hook title (0–70)
  // Scene 2: Comparison bars (55–270)
  // Scene 3: CTA (255–360)

  const s1 = sceneVis(frame, 0, 65);
  const s2 = sceneVis(frame, 55, 265, 12, 12);
  const s3 = sceneVis(frame, 255, 360, 12, 1);

  // Bar animation offsets per row
  const barMaxWidth = 380;
  const rowHeight = 260;
  const barStartFrame = 75;
  const barStagger = 50;

  return (
    <div style={{ width: SPEC.width, height: SPEC.height, overflow: "hidden", position: "relative", backgroundColor: BRAND.cream }}>
      {/* === SCENE 1: Hook title === */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
        padding: `${SAFE.top}px ${SAFE.right}px ${SAFE.bottom}px ${SAFE.left}px`,
        opacity: s1,
      }}>
        <div style={{
          fontFamily: FONTS.heading, fontSize: 58, color: BRAND.navy,
          textAlign: "center", lineHeight: 1.3,
          ...fadeUp(frame, 5),
        }}>
          Klassisch
        </div>
        <div style={{
          fontFamily: FONTS.body, fontSize: 40, color: BRAND.warmBrown,
          margin: "20px 0", letterSpacing: 4,
          ...fadeUp(frame, 15),
        }}>
          vs.
        </div>
        <div style={{
          fontFamily: FONTS.heading, fontSize: 58, color: BRAND.teal,
          textAlign: "center", lineHeight: 1.3,
          ...fadeUp(frame, 25),
        }}>
          IntelliStudio
        </div>
      </div>

      {/* === SCENE 2: Comparison bars === */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
        padding: `${SAFE.top + 40}px ${SAFE.left + 20}px ${SAFE.bottom + 40}px ${SAFE.left + 20}px`,
        opacity: s2, backgroundColor: BRAND.cream,
      }}>
        {/* Column headers */}
        <div style={{
          display: "flex", width: "100%", maxWidth: 960, justifyContent: "space-between",
          marginBottom: 50, ...fadeUp(frame, 60),
        }}>
          <div style={{
            fontFamily: FONTS.body, fontSize: 26, color: BRAND.midGray,
            letterSpacing: 3, textTransform: "uppercase", flex: 1, textAlign: "center",
          }}>
            Klassisch
          </div>
          <div style={{ width: 2, backgroundColor: BRAND.goldBorder, margin: "0 20px" }} />
          <div style={{
            fontFamily: FONTS.body, fontSize: 26, color: BRAND.teal,
            letterSpacing: 3, textTransform: "uppercase", flex: 1, textAlign: "center",
            fontWeight: 600,
          }}>
            IntelliStudio
          </div>
        </div>

        {/* Comparison rows */}
        {comparisons.map((row, i) => {
          const rowStart = barStartFrame + i * barStagger;
          const leftW = interpolate(frame, [rowStart, rowStart + 30], [0, row.leftPct * barMaxWidth], { ...clamp, easing: ease });
          const rightW = interpolate(frame, [rowStart + 10, rowStart + 35], [0, row.rightPct * barMaxWidth], { ...clamp, easing: ease });
          const labelOp = interpolate(frame, [rowStart - 5, rowStart + 8], [0, 1], clamp);
          const valueOp = interpolate(frame, [rowStart + 25, rowStart + 38], [0, 1], clamp);

          // Subtle pulse on IntelliStudio bar once fully visible
          const rightPulse = frame > rowStart + 40 && frame < rowStart + 80
            ? 1 + Math.sin((frame - rowStart - 40) * 0.12) * 0.02 : 1;

          return (
            <div key={i} style={{
              width: "100%", maxWidth: 960, marginBottom: i < comparisons.length - 1 ? 40 : 0,
            }}>
              {/* Row label */}
              <div style={{
                fontFamily: FONTS.heading, fontSize: 34, color: BRAND.navy,
                textAlign: "center", marginBottom: 20, opacity: labelOp,
              }}>
                {row.label}
              </div>

              {/* Bars side by side */}
              <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                {/* Left column: Klassisch */}
                <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                  <div style={{
                    height: 48, borderRadius: 8, backgroundColor: BRAND.midGray,
                    width: leftW, minWidth: leftW > 0 ? 4 : 0,
                    transition: "none",
                  }} />
                  <div style={{
                    fontFamily: FONTS.mono, fontSize: 24, color: BRAND.warmBrown,
                    marginTop: 8, opacity: valueOp,
                  }}>
                    {row.left}
                  </div>
                </div>

                {/* Gold divider */}
                <div style={{ width: 2, height: 80, backgroundColor: BRAND.goldBorder, opacity: 0.5 }} />

                {/* Right column: IntelliStudio */}
                <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                  <div style={{
                    height: 48, borderRadius: 8, backgroundColor: BRAND.teal,
                    width: rightW * rightPulse, minWidth: rightW > 0 ? 4 : 0,
                    boxShadow: rightW > 10 ? `0 4px 20px ${BRAND.teal}44` : "none",
                  }} />
                  <div style={{
                    fontFamily: FONTS.mono, fontSize: 24, color: BRAND.warmBrown,
                    marginTop: 8, opacity: valueOp, fontWeight: 600,
                  }}>
                    {row.right}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* === SCENE 3: CTA === */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
        padding: `${SAFE.top}px ${SAFE.right}px ${SAFE.bottom}px ${SAFE.left}px`,
        opacity: s3, backgroundColor: BRAND.cream,
      }}>
        {/* Logo */}
        <div style={{ marginBottom: 50, ...fadeUp(frame, 265) }}>
          <Img src={staticFile("derma-logo-dark.png")} style={{ width: 300, objectFit: "contain" }} />
        </div>

        {/* Gold divider */}
        <div style={{
          width: 160, height: 2, backgroundColor: BRAND.goldBorder, marginBottom: 44,
          opacity: interpolate(frame, [270, 285], [0, 1], clamp),
        }} />

        {/* CTA */}
        <div style={{
          fontFamily: FONTS.heading, fontSize: 46, color: BRAND.navy,
          textAlign: "center", lineHeight: 1.4, maxWidth: 800,
          ...fadeUp(frame, 280),
        }}>
          Präzision, die den
        </div>
        <div style={{
          fontFamily: FONTS.heading, fontSize: 46, color: BRAND.teal,
          textAlign: "center", lineHeight: 1.4,
          ...fadeUp(frame, 290),
        }}>
          Unterschied macht
        </div>
      </div>
    </div>
  );
};
