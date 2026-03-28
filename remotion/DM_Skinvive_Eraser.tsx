import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { FONTS, SAFE, SPEC } from "./derma-brand";

// DM_Skinvive_Eraser — Myth vs. Truth for Skinvive
// Myths in marker text on light bg → wipe reveals truth on dark bg.
// Two myth-fact pairs, then CTA.
// 1080x1920, 30fps, 360 frames (~12s)

const LIGHT_BG = "#f5f0e8";
const DARK_BG = "#0d1117";
const MYTH_COLOR = "#1a1a1a";
const TRUTH_COLOR = "#e0e0e0";
const ACCENT = "#4ade80";

export const DM_Skinvive_Eraser: React.FC = () => {
  const frame = useCurrentFrame();
  const clamp = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };

  // Wipe helpers
  const wipeLTR = (start: number, dur: number) =>
    interpolate(frame, [start, start + dur], [0, 1], { ...clamp, easing: Easing.inOut(Easing.cubic) });

  const wipeRTL = (start: number, dur: number) =>
    interpolate(frame, [start, start + dur], [0, 1], { ...clamp, easing: Easing.inOut(Easing.cubic) });

  // Phase 1 (0-40): Myth 1 appears on light bg
  // Phase 2 (40-90): Wipe LTR reveals truth on dark bg
  // Phase 3 (100-130): Reverse wipe RTL back to light
  // Phase 4 (130-170): Myth 2 appears on light bg
  // Phase 5 (170-230): Wipe LTR reveals truth 2 on dark bg
  // Phase 6 (230-360): CTA

  const wipe1 = wipeLTR(40, 50);
  const wipe1reverse = wipeRTL(100, 30);
  const wipe2 = wipeLTR(170, 60);

  const fadeIn = (start: number, dur = 12): React.CSSProperties => ({
    opacity: interpolate(frame, [start, start + dur], [0, 1], clamp),
    transform: `translateY(${interpolate(frame, [start, start + dur], [15, 0], { ...clamp, easing: Easing.out(Easing.cubic) })}px)`,
  });

  const scaleIn = (start: number, dur = 14): React.CSSProperties => ({
    opacity: interpolate(frame, [start, start + dur], [0, 1], clamp),
    transform: `scale(${interpolate(frame, [start, start + dur], [0.85, 1], { ...clamp, easing: Easing.out(Easing.cubic) })})`,
  });

  const isFirstCycle = frame < 130;
  const isSecondCycle = frame >= 130 && frame < 230;
  const isCTA = frame >= 230;

  const darkClipLTR = (progress: number): string => {
    const rightInset = (1 - progress) * 100;
    return `inset(0 ${rightInset}% 0 0)`;
  };

  const darkClipRTL = (progress: number): string => {
    const leftInset = progress * 100;
    return `inset(0 0 0 ${leftInset}%)`;
  };

  const pad = {
    top: SAFE.top + 40,
    bottom: SAFE.bottom + 40,
    left: SAFE.left + 40,
    right: SAFE.right + 40,
  };

  // CTA animations
  const summaryFade = fadeIn(240, 20);
  const subtitleFade = fadeIn(265, 16);
  const buttonFade = scaleIn(295, 18);
  const buttonPulse = frame >= 325 ? Math.sin((frame - 325) * 0.15) * 2 : 0;

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
          {/* Light layer — Myth 1 */}
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
              fontSize: 62,
              fontFamily: FONTS.heading,
              fontWeight: 700,
              color: MYTH_COLOR,
              lineHeight: 1.3,
              textAlign: "center",
              letterSpacing: -0.5,
              textShadow: "1px 1px 0 rgba(0,0,0,0.08), -1px -1px 0 rgba(0,0,0,0.04)",
              maxWidth: 900,
            }}>
              Gute Feuchtigkeitscremes reichen fur tiefe Hydratation.
            </div>
          </div>

          {/* Dark layer — Truth 1 */}
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
              ...fadeIn(55, 18),
              fontSize: 44,
              fontFamily: FONTS.body,
              fontWeight: 400,
              color: TRUTH_COLOR,
              lineHeight: 1.5,
              textAlign: "center",
              maxWidth: 860,
            }}>
              Cremes wirken an der Hautoberflache.{" "}
              <span style={{ color: ACCENT, fontWeight: 600 }}>
                Skinvive injiziert Hyaluronsaure-Mikrotropfchen direkt in die Dermis.
              </span>
            </div>
          </div>
        </>
      )}

      {/* SECOND CYCLE (130-230) */}
      {isSecondCycle && (
        <>
          {/* Light layer — Myth 2 */}
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
              fontSize: 62,
              fontFamily: FONTS.heading,
              fontWeight: 700,
              color: MYTH_COLOR,
              lineHeight: 1.3,
              textAlign: "center",
              letterSpacing: -0.5,
              textShadow: "1px 1px 0 rgba(0,0,0,0.08), -1px -1px 0 rgba(0,0,0,0.04)",
              maxWidth: 900,
            }}>
              Injectables verandern immer die Gesichtsform.
            </div>
          </div>

          {/* Dark layer — Truth 2 */}
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
              fontSize: 44,
              fontFamily: FONTS.body,
              fontWeight: 400,
              color: TRUTH_COLOR,
              lineHeight: 1.5,
              textAlign: "center",
              maxWidth: 860,
            }}>
              Skinvive ist kein Filler. Es verbessert{" "}
              <span style={{ color: ACCENT, fontWeight: 600 }}>
                Hauttextur, Glow und Hydratation
              </span>
              {" "}&mdash; ohne Volumen.
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
          gap: 50,
          zIndex: 1,
        }}>
          <div style={{
            ...summaryFade,
            fontSize: 68,
            fontFamily: FONTS.heading,
            fontWeight: 700,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.3,
            letterSpacing: -1,
          }}>
            2 Mythen.{"\n"}0 Beweise.
          </div>

          <div style={{
            ...subtitleFade,
            fontSize: 36,
            color: ACCENT,
            fontFamily: FONTS.body,
            fontWeight: 600,
            textAlign: "center",
            lineHeight: 1.5,
            maxWidth: 800,
          }}>
            Erste FDA-zugelassene Hautqualitats-Injectable.
          </div>

          {/* Separator line */}
          <div style={{
            width: interpolate(frame, [285, 305], [0, 200], clamp),
            height: 2,
            background: `linear-gradient(90deg, transparent, ${ACCENT}, transparent)`,
          }} />

          {/* CTA Button */}
          <div style={{
            ...buttonFade,
            marginTop: 10,
            padding: "24px 60px",
            borderRadius: 50,
            background: ACCENT,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: `scale(${interpolate(frame, [295, 309], [0.85, 1], { ...clamp, easing: Easing.out(Easing.cubic) })}) translateY(${buttonPulse}px)`,
          }}>
            <span style={{
              fontSize: 32,
              fontFamily: FONTS.body,
              fontWeight: 700,
              color: DARK_BG,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}>
              DERMAMEDICUM &middot; BONN
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
