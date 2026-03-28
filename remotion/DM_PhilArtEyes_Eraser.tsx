import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { FONTS, SAFE, SPEC } from "./derma-brand";

// DM_PhilArtEyes_Eraser — Myth vs. Truth for PhilArt Eyes
// Two myths wiped away to reveal clinical truths, then CTA
// 360 frames (12s at 30fps), 1080x1920

const LIGHT_BG = "#f5f0e8";
const DARK_BG = "#0d1117";
const MYTH_COLOR = "#1a1a1a";
const TRUTH_COLOR = "#e0e0e0";
const ACCENT = "#558695"; // teal accent for PhilArt
const FEATHER = 40;

export const DM_PhilArtEyes_Eraser: React.FC = () => {
  const frame = useCurrentFrame();
  const clamp = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };

  // --- Wipe progress helpers ---
  const wipeLTR = (start: number, dur: number) =>
    interpolate(frame, [start, start + dur], [0, 1], { ...clamp, easing: Easing.inOut(Easing.cubic) });

  const wipeRTL = (start: number, dur: number) =>
    interpolate(frame, [start, start + dur], [0, 1], { ...clamp, easing: Easing.inOut(Easing.cubic) });

  // --- Phase calculations ---
  // Phase 1: Myth 1 visible (0-40)
  // Phase 2: Wipe LTR reveals truth 1 (40-90)
  // Phase 3: Reverse wipe RTL back to light (100-130)
  // Phase 4: Myth 2 visible (130-170)
  // Phase 5: Wipe LTR reveals truth 2 (170-230)
  // Phase 6: CTA (230-360)

  const wipe1 = wipeLTR(40, 50);
  const wipe1reverse = wipeRTL(100, 30);
  const wipe2 = wipeLTR(170, 60);

  // --- Text fade helpers ---
  const fadeIn = (start: number, dur = 12): React.CSSProperties => ({
    opacity: interpolate(frame, [start, start + dur], [0, 1], clamp),
    transform: `translateY(${interpolate(frame, [start, start + dur], [15, 0], { ...clamp, easing: Easing.out(Easing.cubic) })}px)`,
  });

  const scaleIn = (start: number, dur = 14): React.CSSProperties => ({
    opacity: interpolate(frame, [start, start + dur], [0, 1], clamp),
    transform: `scale(${interpolate(frame, [start, start + dur], [0.85, 1], { ...clamp, easing: Easing.out(Easing.cubic) })})`,
  });

  // --- Phase detection ---
  const isFirstCycle = frame < 130;
  const isSecondCycle = frame >= 130 && frame < 230;
  const isCTA = frame >= 230;

  // clipPath for wipe effects
  const darkClipLTR = (progress: number): string => {
    const rightInset = (1 - progress) * 100;
    return `inset(0 ${rightInset}% 0 0)`;
  };

  const darkClipRTL = (progress: number): string => {
    const leftInset = progress * 100;
    return `inset(0 0 0 ${leftInset}%)`;
  };

  // Padding for safe zones
  const pad = {
    top: SAFE.top + 40,
    bottom: SAFE.bottom + 40,
    left: SAFE.left + 40,
    right: SAFE.right + 40,
  };

  // CTA animations
  const summaryFade = fadeIn(240, 20);
  const countFade = fadeIn(270, 16);
  const buttonFade = scaleIn(300, 18);

  const buttonPulse = frame >= 330
    ? Math.sin((frame - 330) * 0.15) * 2
    : 0;

  return (
    <div style={{
      width: SPEC.width,
      height: SPEC.height,
      overflow: "hidden",
      position: "relative",
      fontFamily: FONTS.body,
      background: DARK_BG,
    }}>

      {/* FIRST CYCLE (0-130) */}
      {isFirstCycle && (
        <>
          {/* Light layer — myth 1 */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: LIGHT_BG,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: `${pad.top}px ${pad.right}px ${pad.bottom}px ${pad.left}px`,
            zIndex: 1,
            clipPath: frame >= 100
              ? `inset(0 0 0 ${wipe1reverse * 100}%)`
              : undefined,
          }}>
            <div style={{
              ...fadeIn(5, 16),
              fontSize: 64,
              fontFamily: FONTS.heading,
              fontWeight: 700,
              color: MYTH_COLOR,
              lineHeight: 1.3,
              textAlign: "center",
              letterSpacing: -0.5,
              textShadow: "1px 1px 0 rgba(0,0,0,0.08), -1px -1px 0 rgba(0,0,0,0.04)",
              maxWidth: 900,
            }}>
              Eine gute Augencreme reicht gegen Krahenfu{"\u00df"}e.
            </div>
          </div>

          {/* Dark layer — truth 1 (revealed by wipe) */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: DARK_BG,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: `${pad.top}px ${pad.right}px ${pad.bottom}px ${pad.left}px`,
            zIndex: 2,
            clipPath: frame >= 100
              ? darkClipRTL(wipe1reverse)
              : darkClipLTR(wipe1),
          }}>
            <div style={{
              position: "absolute",
              inset: 0,
              background: "transparent",
              boxShadow: frame < 100
                ? `inset ${FEATHER}px 0 ${FEATHER}px -${FEATHER / 2}px rgba(13,17,23,0.5)`
                : `inset -${FEATHER}px 0 ${FEATHER}px -${FEATHER / 2}px rgba(13,17,23,0.5)`,
              pointerEvents: "none",
              zIndex: 3,
            }} />
            <div style={{
              ...fadeIn(55, 18),
              fontSize: 44,
              fontFamily: FONTS.body,
              fontWeight: 400,
              color: TRUTH_COLOR,
              lineHeight: 1.5,
              textAlign: "center",
              maxWidth: 860,
            }}>
              Cremes erreichen nicht die{" "}
              <span style={{ color: ACCENT, fontWeight: 600 }}>
                Dermis
              </span>
              . PDRN wird direkt dort injiziert, wo Kollagen produziert wird.
            </div>
          </div>
        </>
      )}

      {/* SECOND CYCLE (130-230) */}
      {isSecondCycle && (
        <>
          {/* Light layer — myth 2 */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: LIGHT_BG,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: `${pad.top}px ${pad.right}px ${pad.bottom}px ${pad.left}px`,
            zIndex: 1,
          }}>
            <div style={{
              ...fadeIn(135, 16),
              fontSize: 64,
              fontFamily: FONTS.heading,
              fontWeight: 700,
              color: MYTH_COLOR,
              lineHeight: 1.3,
              textAlign: "center",
              letterSpacing: -0.5,
              textShadow: "1px 1px 0 rgba(0,0,0,0.08), -1px -1px 0 rgba(0,0,0,0.04)",
              maxWidth: 900,
            }}>
              Filler unter den Augen ist die einzige Option.
            </div>
          </div>

          {/* Dark layer — truth 2 */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: DARK_BG,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: `${pad.top}px ${pad.right}px ${pad.bottom}px ${pad.left}px`,
            zIndex: 2,
            clipPath: darkClipLTR(wipe2),
          }}>
            <div style={{
              ...fadeIn(185, 18),
              fontSize: 42,
              fontFamily: FONTS.body,
              fontWeight: 400,
              color: TRUTH_COLOR,
              lineHeight: 1.5,
              textAlign: "center",
              maxWidth: 860,
            }}>
              PhilArt Eyes ist{" "}
              <span style={{ color: ACCENT, fontWeight: 600 }}>
                kein Filler
              </span>
              . Es stimuliert korpereigene Regeneration — ohne Volumen hinzuzufugen.
            </div>
          </div>
        </>
      )}

      {/* CTA PHASE (230-360) */}
      {isCTA && (
        <div style={{
          position: "absolute",
          inset: 0,
          background: DARK_BG,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: `${pad.top}px ${pad.right}px ${pad.bottom}px ${pad.left}px`,
          gap: 60,
          zIndex: 1,
        }}>
          {/* Summary line */}
          <div style={{
            ...summaryFade,
            fontSize: 80,
            fontFamily: FONTS.heading,
            fontWeight: 700,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.3,
            letterSpacing: -1,
          }}>
            2 Mythen.
          </div>

          <div style={{
            ...countFade,
            fontSize: 80,
            fontFamily: FONTS.heading,
            fontWeight: 700,
            color: ACCENT,
            textAlign: "center",
            lineHeight: 1.3,
            letterSpacing: -1,
          }}>
            0 Beweise.
          </div>

          {/* Separator line */}
          <div style={{
            width: interpolate(frame, [290, 310], [0, 200], clamp),
            height: 2,
            background: `linear-gradient(90deg, transparent, ${ACCENT}, transparent)`,
          }} />

          {/* CTA Button */}
          <div style={{
            ...buttonFade,
            marginTop: 20,
            padding: "24px 60px",
            borderRadius: 50,
            background: ACCENT,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: `scale(${interpolate(frame, [300, 314], [0.85, 1], { ...clamp, easing: Easing.out(Easing.cubic) })}) translateY(${buttonPulse}px)`,
          }}>
            <span style={{
              fontSize: 32,
              fontFamily: FONTS.body,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: 2,
              textTransform: "uppercase",
            }}>
              DERMAMEDICUM · BONN
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
