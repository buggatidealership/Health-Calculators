import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { FONTS, SAFE, SPEC } from "./derma-brand";

// DERMAMEDICUM ERASER — Myth vs. Truth
// A myth is written in bold marker-style text on a warm light background.
// An eraser wipe sweeps across, revealing clinical truth on a dark layer.
// Two myth-fact pairs, then CTA.

const LIGHT_BG = "#f5f0e8";
const DARK_BG = "#0d1117";
const MYTH_COLOR = "#1a1a1a";
const TRUTH_COLOR = "#e0e0e0";
const ACCENT = "#4ade80";
const FEATHER = 40; // px feathered edge on wipe

export const DM_Eraser: React.FC = () => {
  const frame = useCurrentFrame();
  const clamp = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };

  // --- Wipe progress helpers ---
  // Left-to-right wipe: 0 = fully light, 1 = fully dark revealed
  const wipeLTR = (start: number, dur: number) =>
    interpolate(frame, [start, start + dur], [0, 1], { ...clamp, easing: Easing.inOut(Easing.cubic) });

  // Right-to-left wipe: 0 = fully dark, 1 = fully light restored
  const wipeRTL = (start: number, dur: number) =>
    interpolate(frame, [start, start + dur], [0, 1], { ...clamp, easing: Easing.inOut(Easing.cubic) });

  // --- Phase calculations ---
  // Phase 2: eraser wipe LTR (40-90)
  const wipe1 = wipeLTR(40, 50);
  // Phase 3: reverse wipe RTL back to light (100-130) — starts after brief pause
  const wipe1reverse = wipeRTL(100, 30);
  // Phase 5: eraser wipe LTR (170-230)
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

  // --- Determine which phase we're in for layer management ---
  // Phase 1-3: first myth-fact cycle (frames 0-130)
  // Phase 4-5: second myth-fact cycle (frames 130-230)
  // Phase 6: CTA (frames 230-360)

  const isFirstCycle = frame < 130;
  const isSecondCycle = frame >= 130 && frame < 230;
  const isCTA = frame >= 230;

  // Wipe mask position in pixels (for the gradient mask approach)
  // Using a div mask that translates across the screen width
  const getMaskPosition = (progress: number, direction: "ltr" | "rtl"): number => {
    const totalWidth = SPEC.width + FEATHER * 2;
    if (direction === "ltr") {
      return -totalWidth + progress * (totalWidth + SPEC.width);
    }
    // rtl: starts revealed (right), sweeps left to hide dark
    return progress * (totalWidth + SPEC.width) - totalWidth;
  };

  // Padding for safe zones
  const pad = {
    top: SAFE.top + 40,
    bottom: SAFE.bottom + 40,
    left: SAFE.left + 40,
    right: SAFE.right + 40,
  };

  // --- First cycle wipe state ---
  // Before wipe: show light. During wipe: gradient mask. After wipe: show dark.
  // Then reverse wipe brings back light.
  let firstCycleWipeProgress = 0; // 0 = all light, 1 = all dark
  if (frame >= 40 && frame < 100) {
    firstCycleWipeProgress = wipe1;
  } else if (frame >= 100 && frame < 130) {
    firstCycleWipeProgress = 1 - wipe1reverse;
  } else if (frame < 40) {
    firstCycleWipeProgress = 0;
  }

  // Second cycle: just LTR wipe to dark, stays dark
  let secondCycleWipeProgress = 0;
  if (frame >= 170) {
    secondCycleWipeProgress = wipe2;
  }

  // clipPath using inset for wipe effect
  // For LTR wipe revealing dark: dark layer clips from right side inward
  const darkClipLTR = (progress: number): string => {
    const rightInset = (1 - progress) * 100;
    return `inset(0 ${rightInset}% 0 0)`;
  };

  // For RTL wipe hiding dark: dark layer clips from left side inward
  const darkClipRTL = (progress: number): string => {
    // progress 0 = fully dark visible, progress 1 = fully light
    const leftInset = progress * 100;
    return `inset(0 0 0 ${leftInset}%)`;
  };

  // CTA animations
  const summaryFade = fadeIn(240, 20);
  const countFade = fadeIn(270, 16);
  const buttonFade = scaleIn(300, 18);

  // Subtle pulse on the button
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

      {/* ═══ FIRST CYCLE (0–130) ═══ */}
      {isFirstCycle && (
        <>
          {/* Light layer — myth */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: LIGHT_BG,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: `${pad.top}px ${pad.right}px ${pad.bottom}px ${pad.left}px`,
            zIndex: 1,
            // When reverse wipe is active, clip the light layer from the right
            clipPath: frame >= 100
              ? `inset(0 0 0 ${wipe1reverse * 100}%)`
              : undefined,
          }}>
            <div style={{
              ...fadeIn(5, 16),
              fontSize: 72,
              fontFamily: FONTS.heading,
              fontWeight: 700,
              color: MYTH_COLOR,
              lineHeight: 1.3,
              textAlign: "center",
              letterSpacing: -0.5,
              // Marker-like feel: slightly rough edges via text-shadow
              textShadow: "1px 1px 0 rgba(0,0,0,0.08), -1px -1px 0 rgba(0,0,0,0.04)",
            }}>
              Kollagen-Drinks{"\n"}straffen die Haut{"\n"}von innen.
            </div>
          </div>

          {/* Dark layer — truth (revealed by wipe) */}
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
            {/* Feathered edge overlay — softens the wipe boundary */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: "transparent",
              // Soft shadow on the clipped edge
              boxShadow: frame < 100
                ? `inset ${FEATHER}px 0 ${FEATHER}px -${FEATHER / 2}px rgba(13,17,23,0.5)`
                : `inset -${FEATHER}px 0 ${FEATHER}px -${FEATHER / 2}px rgba(13,17,23,0.5)`,
              pointerEvents: "none",
              zIndex: 3,
            }} />
            <div style={{
              ...fadeIn(55, 18),
              fontSize: 48,
              fontFamily: FONTS.body,
              fontWeight: 400,
              color: TRUTH_COLOR,
              lineHeight: 1.5,
              textAlign: "center",
              maxWidth: 860,
            }}>
              Orales Kollagen wird im Magen zu{" "}
              <span style={{ color: ACCENT, fontWeight: 600 }}>
                Aminosäuren zerlegt
              </span>
              . Keine gezielte Hautwirkung nachgewiesen.
            </div>
          </div>
        </>
      )}

      {/* ═══ SECOND CYCLE (130–230) ═══ */}
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
              fontSize: 78,
              fontFamily: FONTS.heading,
              fontWeight: 700,
              color: MYTH_COLOR,
              lineHeight: 1.3,
              textAlign: "center",
              letterSpacing: -0.5,
              textShadow: "1px 1px 0 rgba(0,0,0,0.08), -1px -1px 0 rgba(0,0,0,0.04)",
            }}>
              Zahnpasta{"\n"}trocknet Pickel aus.
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
            clipPath: darkClipLTR(secondCycleWipeProgress),
          }}>
            <div style={{
              ...fadeIn(185, 18),
              fontSize: 44,
              fontFamily: FONTS.body,
              fontWeight: 400,
              color: TRUTH_COLOR,
              lineHeight: 1.5,
              textAlign: "center",
              maxWidth: 860,
            }}>
              Zahnpasta enthält{" "}
              <span style={{ color: ACCENT, fontWeight: 600 }}>
                Natriumlaurylsulfat
              </span>
              {" "}— ein Tensid, das die Hautbarriere schädigt und Entzündungen verstärkt.
            </div>
          </div>
        </>
      )}

      {/* ═══ CTA PHASE (230–360) ═══ */}
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

          {/* Thin separator line */}
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
              color: DARK_BG,
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
