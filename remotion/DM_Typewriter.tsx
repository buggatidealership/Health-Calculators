import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
import { BRAND, FONTS, LOGO, SAFE, SPEC } from "./derma-brand";

// DERMAMEDICUM TYPEWRITER: Periorale Dermatitis myth-buster
// Black screen. Character-by-character typing. Ultra-minimal.
// The restraint IS the aesthetic.

const BG = "#000000";
const TEXT_WHITE = "#F0F0F0";
const TEXT_SAGE = "#8F9E90";

// Typewriter: returns substring visible at current frame
const typeText = (
  text: string,
  startFrame: number,
  frame: number,
  charsPerFrame: number,
  pauseAfterWord?: string,
  pauseFrames?: number
): string => {
  if (frame < startFrame) return "";
  const elapsed = frame - startFrame;

  if (pauseAfterWord && pauseFrames) {
    const pauseIdx = text.indexOf(pauseAfterWord);
    if (pauseIdx >= 0) {
      const charsBeforePause = pauseIdx + pauseAfterWord.length;
      const framesBeforePause = charsBeforePause / charsPerFrame;
      if (elapsed > framesBeforePause) {
        const adjustedElapsed = elapsed - pauseFrames;
        if (adjustedElapsed <= framesBeforePause) {
          // Still in pause
          return text.slice(0, charsBeforePause);
        }
        const totalChars = Math.floor(adjustedElapsed * charsPerFrame);
        return text.slice(0, Math.min(totalChars, text.length));
      }
    }
  }

  const totalChars = Math.floor(elapsed * charsPerFrame);
  return text.slice(0, Math.min(totalChars, text.length));
};

export const DM_Typewriter: React.FC = () => {
  const frame = useCurrentFrame();

  // === SCENE TIMING ===
  // Scene 1: 0-90    (3s) — "Sie pflegen Ihre Haut jeden Tag."
  // Scene 2: 90-150  (2s) — "Genau das ist das Problem."
  // Scene 3: 150-270 (4s) — Explanation text
  // Scene 4: 270-360 (3s) — Therapy line
  // Scene 5: 360-420 (2s) — Cursor blink + logo

  // Text content
  const line1 = "Sie pflegen Ihre Haut jeden Tag.";
  const line2 = "Genau das ist das Problem.";
  const line3 =
    "Periorale Dermatitis entsteht durch \u00DCberpflege. Je mehr Produkte, desto st\u00E4rker die Entz\u00FCndung.";
  const line4 = "Die Therapie: Nulltherapie. Weniger ist die Behandlung.";

  // Typed text per scene
  // Scene 1: 1 char every 2 frames = 0.5 chars/frame
  const typed1 = typeText(line1, 5, frame, 0.5);
  // Scene 2: 1 char every 2 frames, with pause after "das" (the first one in "das ist das")
  const typed2 = typeText(line2, 92, frame, 0.5, "das ist das", 4);
  // Scene 3: 1 char every 2 frames (0.5 chars/frame)
  const typed3 = typeText(line3, 160, frame, 0.5);
  // Scene 4: 1 char every 3 frames = 0.333 chars/frame (slower)
  const typed4 = typeText(line4, 278, frame, 0.333);

  // Slide-up for scenes 3+
  const slideUp1 = interpolate(frame, [150, 168], [0, -200], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });

  // Slide-up for scene 4
  const slideUp2 = interpolate(frame, [270, 285], [0, -300], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });

  // Cursor blink in scene 5
  const cursorVisible =
    frame >= 360 && frame < 396
      ? Math.floor((frame - 360) / 10) % 2 === 0
      : false;

  // Logo fade
  const logoOpacity = interpolate(frame, [390, 410], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Cursor style for typing effect
  const showCursorAfter = (text: string, fullText: string, active: boolean) => {
    if (!active) return null;
    if (text.length >= fullText.length) return null;
    return (
      <span style={{ opacity: frame % 8 < 5 ? 1 : 0.3 }}>|</span>
    );
  };

  // Render "Weniger" in sage color within line4
  const renderLine4 = (typed: string) => {
    const wenigerStart = line4.indexOf("Weniger");
    const wenigerEnd = wenigerStart + "Weniger".length;

    if (typed.length <= wenigerStart) {
      return <>{typed}</>;
    }

    const before = typed.slice(0, wenigerStart);
    const wenigerPart = typed.slice(
      wenigerStart,
      Math.min(typed.length, wenigerEnd)
    );
    const after = typed.length > wenigerEnd ? typed.slice(wenigerEnd) : "";

    return (
      <>
        {before}
        <span style={{ color: TEXT_SAGE }}>{wenigerPart}</span>
        {after}
      </>
    );
  };

  // Visibility: scenes 1+2 visible until slide-up completes
  const scenes12Opacity =
    frame >= 270
      ? interpolate(frame, [270, 280], [1, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })
      : 1;

  // Scene 3 visibility
  const scene3Opacity =
    frame < 150
      ? 0
      : frame >= 270
        ? interpolate(frame, [270, 280], [1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })
        : 1;

  // Scene 4 visibility
  const scene4Opacity = frame < 270 ? 0 : 1;

  return (
    <div
      style={{
        width: SPEC.width,
        height: SPEC.height,
        background: BG,
        position: "relative",
        overflow: "hidden",
        fontFamily: FONTS.body,
      }}
    >
      {/* Lines 1 + 2 — slide up when scene 3 starts, disappear at scene 4 */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: `${SAFE.top}px ${SAFE.right}px ${SAFE.bottom}px ${SAFE.left}px`,
          transform: `translateY(${slideUp1 + (frame >= 270 ? slideUp2 : 0)}px)`,
          opacity: scenes12Opacity,
        }}
      >
        {/* Line 1 */}
        <div
          style={{
            fontSize: 60,
            color: TEXT_WHITE,
            fontWeight: 400,
            textAlign: "center",
            lineHeight: 1.4,
            minHeight: 90,
          }}
        >
          {typed1}
          {showCursorAfter(typed1, line1, frame >= 5 && frame < 90)}
        </div>

        {/* Line 2 */}
        {frame >= 90 && (
          <div
            style={{
              fontSize: 60,
              color: TEXT_WHITE,
              fontWeight: 700,
              textAlign: "center",
              lineHeight: 1.4,
              marginTop: 40,
              minHeight: 90,
            }}
          >
            {typed2}
            {showCursorAfter(typed2, line2, frame >= 92 && frame < 150)}
          </div>
        )}
      </div>

      {/* Line 3 — appears at 150, slides up at 270 */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: `${SAFE.top + 200}px ${SAFE.right + 20}px ${SAFE.bottom}px ${SAFE.left + 20}px`,
          transform: `translateY(${frame >= 270 ? slideUp2 : 0}px)`,
          opacity: scene3Opacity,
        }}
      >
        <div
          style={{
            fontSize: 44,
            color: TEXT_WHITE,
            fontWeight: 400,
            textAlign: "center",
            lineHeight: 1.55,
          }}
        >
          {typed3}
          {showCursorAfter(typed3, line3, frame >= 160 && frame < 270)}
        </div>
      </div>

      {/* Line 4 — scene 4 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: `${SAFE.top}px ${SAFE.right + 10}px ${SAFE.bottom}px ${SAFE.left + 10}px`,
          opacity: scene4Opacity,
        }}
      >
        {frame >= 270 && (
          <div
            style={{
              fontSize: 56,
              color: TEXT_WHITE,
              fontWeight: 700,
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            {renderLine4(typed4)}
            {showCursorAfter(typed4, line4, frame >= 278 && frame < 360)}
          </div>
        )}
      </div>

      {/* Scene 5: cursor blink + logo */}
      {frame >= 360 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: `${SAFE.top}px ${SAFE.right}px ${SAFE.bottom}px ${SAFE.left}px`,
          }}
        >
          {/* Blinking cursor */}
          {cursorVisible && (
            <div
              style={{
                fontSize: 56,
                color: TEXT_WHITE,
                fontWeight: 300,
                marginBottom: 60,
              }}
            >
              |
            </div>
          )}

          {/* Logo */}
          <div style={{ opacity: logoOpacity }}>
            <Img
              src={staticFile(LOGO.light)}
              style={{ width: 300, objectFit: "contain" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
