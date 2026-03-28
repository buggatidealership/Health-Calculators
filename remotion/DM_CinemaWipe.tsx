import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
import { BRAND, FONTS, LOGO, SAFE, SPEC } from "./derma-brand";

// DERMAMEDICUM CINEMA WIPE — Neurodermitis (Atopic Dermatitis)
// Film-quality horizontal wipe transitions. Movie trailer energy.
// Freeform: warm dark tones, cream accents, gold highlights.

export const DM_CinemaWipe: React.FC = () => {
  const frame = useCurrentFrame();

  const clamp = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };

  const LETTERBOX = 200;
  const WARM_GOLD = "#C9A84C";

  // --- Wipe mask utility ---
  // Returns 0-1 representing how much of the new scene is revealed
  const wipeFromRight = (start: number, dur = 18): number =>
    interpolate(frame, [start, start + dur], [0, 1], { ...clamp, easing: Easing.inOut(Easing.cubic) });

  const wipeFromLeft = (start: number, dur = 18): number =>
    interpolate(frame, [start, start + dur], [0, 1], { ...clamp, easing: Easing.inOut(Easing.cubic) });

  // --- Scene visibility ---
  const s1 = frame < 75 ? 1 : 0;
  const s2wipe = wipeFromRight(70, 15);
  const s2 = frame >= 70 && frame < 150 ? 1 : 0;
  const s3wipe = wipeFromLeft(145, 15);
  const s3 = frame >= 145 && frame < 255 ? 1 : 0;
  const s4wipe = wipeFromRight(250, 15);
  const s4 = frame >= 250 && frame < 330 ? 1 : 0;
  const s5 = frame >= 325 ? 1 : 0;
  const s5opacity = interpolate(frame, [325, 345], [0, 1], clamp);

  // --- Text animations ---
  const typeIn = (start: number, dur = 12) => ({
    opacity: interpolate(frame, [start, start + dur], [0, 1], clamp),
    transform: `translateX(${interpolate(frame, [start, start + dur], [-40, 0], { ...clamp, easing: Easing.out(Easing.cubic) })}px)`,
  });

  const fadeIn = (start: number, dur = 12) => ({
    opacity: interpolate(frame, [start, start + dur], [0, 1], clamp),
    transform: `translateY(${interpolate(frame, [start, start + dur], [20, 0], { ...clamp, easing: Easing.out(Easing.cubic) })}px)`,
  });

  // Horizontal line draw
  const lineDraw = (start: number) =>
    interpolate(frame, [start, start + 25], [0, 700], { ...clamp, easing: Easing.out(Easing.cubic) });

  // Content area between letterbox bars
  const contentPad = {
    top: LETTERBOX + SAFE.top - 100,
    bottom: LETTERBOX + SAFE.bottom - 200,
    left: SAFE.left + 60,
    right: SAFE.right + 60,
  };

  // Wipe mask style: a clip-path that reveals content from a direction
  const wipeClipRight = (progress: number) =>
    `inset(0 ${(1 - progress) * 100}% 0 0)`;
  const wipeClipLeft = (progress: number) =>
    `inset(0 0 0 ${(1 - progress) * 100}%)`;

  return (
    <div style={{
      width: SPEC.width,
      height: SPEC.height,
      background: "#0f0d0a",
      overflow: "hidden",
      position: "relative",
      fontFamily: FONTS.body,
    }}>

      {/* ═══ SCENE 1 (0-75): Opening statement ═══ */}
      {frame < 85 && (
        <div style={{
          position: "absolute",
          inset: 0,
          background: "#1a1612",
          opacity: s1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: `${contentPad.top}px ${contentPad.right}px ${contentPad.bottom}px ${contentPad.left}px`,
        }}>
          <div style={{
            ...typeIn(8, 18),
            fontSize: 74,
            color: "#F0E8D8",
            fontFamily: FONTS.heading,
            fontWeight: 400,
            lineHeight: 1.35,
            letterSpacing: -0.5,
          }}>
            Neurodermitis ist nicht heilbar.
          </div>
          <div style={{
            width: lineDraw(30),
            height: 2,
            background: "rgba(240, 232, 216, 0.3)",
            marginTop: 40,
          }} />
        </div>
      )}

      {/* ═══ SCENE 2 (75-150): Affirmation + pivot ═══ */}
      {frame >= 65 && frame < 160 && (
        <div style={{
          position: "absolute",
          inset: 0,
          background: "#2a2218",
          clipPath: s2 ? wipeClipRight(s2wipe) : undefined,
          opacity: s2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: `${contentPad.top}px ${contentPad.right}px ${contentPad.bottom}px ${contentPad.left}px`,
        }}>
          <div style={{
            ...typeIn(82, 14),
            fontSize: 72,
            color: "#F0E8D8",
            fontFamily: FONTS.heading,
            fontWeight: 400,
            lineHeight: 1.35,
            marginBottom: 50,
          }}>
            Das stimmt.
          </div>
          <div style={{
            ...fadeIn(100, 16),
            fontSize: 68,
            color: "#F0E8D8",
            fontFamily: FONTS.heading,
            fontWeight: 400,
            lineHeight: 1.35,
          }}>
            Aber sie ist{" "}
            <span style={{ color: WARM_GOLD, fontWeight: 600 }}>
              kontrollierbar.
            </span>
          </div>
        </div>
      )}

      {/* ═══ SCENE 3 (150-255): Three pillars ═══ */}
      {frame >= 140 && frame < 265 && (
        <div style={{
          position: "absolute",
          inset: 0,
          background: "#0f0d0a",
          clipPath: s3 ? wipeClipLeft(s3wipe) : undefined,
          opacity: s3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: `${contentPad.top}px ${contentPad.right}px ${contentPad.bottom}px ${contentPad.left}px`,
          gap: 44,
        }}>
          <div style={{
            ...fadeIn(165, 16),
            fontSize: 52,
            color: "#F0E8D8",
            fontWeight: 400,
            lineHeight: 1.4,
            paddingLeft: 0,
          }}>
            Individuelle Triggerfaktoren erkennen.
          </div>
          <div style={{
            ...fadeIn(190, 16),
            fontSize: 52,
            color: "#F0E8D8",
            fontWeight: 400,
            lineHeight: 1.4,
            paddingLeft: 40,
          }}>
            Barrierefunktion der Haut starken.
          </div>
          <div style={{
            ...fadeIn(215, 16),
            fontSize: 52,
            color: "#F0E8D8",
            fontWeight: 400,
            lineHeight: 1.4,
            paddingLeft: 80,
          }}>
            Schubfrequenz reduzieren.
          </div>
        </div>
      )}

      {/* ═══ SCENE 4 (255-330): Reframe ═══ */}
      {frame >= 245 && frame < 335 && (
        <div style={{
          position: "absolute",
          inset: 0,
          background: "#F6F0E4",
          clipPath: s4 ? wipeClipRight(s4wipe) : undefined,
          opacity: s4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: `${contentPad.top}px ${contentPad.right}px ${contentPad.bottom}px ${contentPad.left}px`,
        }}>
          <div style={{
            ...fadeIn(265, 18),
            fontSize: 60,
            color: "#1a1612",
            fontFamily: FONTS.heading,
            fontWeight: 700,
            lineHeight: 1.4,
            textAlign: "center",
            letterSpacing: -0.5,
          }}>
            Neurodermitis-Management —{"\n"}nicht Symptombekampfung.
          </div>
        </div>
      )}

      {/* ═══ SCENE 5 (330-390): Logo ═══ */}
      {frame >= 325 && (
        <div style={{
          position: "absolute",
          inset: 0,
          background: "#F6F0E4",
          opacity: s5opacity,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <Img
            src={staticFile(LOGO.dark)}
            style={{
              width: 380,
              objectFit: "contain",
            }}
          />
        </div>
      )}

      {/* ═══ LETTERBOX BARS — always on top ═══ */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: LETTERBOX,
        background: "#000000",
        zIndex: 100,
      }} />
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: LETTERBOX,
        background: "#000000",
        zIndex: 100,
      }} />
    </div>
  );
};
