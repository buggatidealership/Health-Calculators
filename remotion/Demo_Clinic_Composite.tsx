import React from "react";
import {
  useCurrentFrame,
  interpolate,
  Easing,
  OffthreadVideo,
  staticFile,
} from "remotion";

// DEMO CLINIC COMPOSITE — AI video + typography overlay
// Kling AI clinic footage as background, Remotion text/motion on top.
// 1080x1920, 30fps, 150 frames (5s). Clinical but warm — premium, not sterile.

export const Demo_Clinic_Composite: React.FC = () => {
  const frame = useCurrentFrame();

  const clamp = {
    extrapolateLeft: "clamp" as const,
    extrapolateRight: "clamp" as const,
  };

  // --- Animation utilities ---
  const fadeIn = (start: number, end: number) =>
    interpolate(frame, [start, end], [0, 1], clamp);

  const slideUp = (start: number, end: number, dist = 30) =>
    interpolate(frame, [start, end], [dist, 0], {
      ...clamp,
      easing: Easing.out(Easing.cubic),
    });

  // --- TEAL ACCENT ---
  const TEAL = "#2dd4bf";

  // --- Element opacity and transforms ---

  // Frame 0-25: Top label "PRECISION MEDICINE"
  const labelOpacity = fadeIn(0, 25);
  const labelY = slideUp(0, 25, 20);

  // Frame 15-55: Main text "Your skin tells a story."
  const mainOpacity = fadeIn(15, 55);
  const mainY = slideUp(15, 55, 35);

  // Frame 45-85: Second line "We read between the lines."
  const secondOpacity = fadeIn(45, 85);
  const secondY = slideUp(45, 85, 35);

  // Frame 75-110: Stat line
  const statOpacity = fadeIn(75, 110);
  const statY = slideUp(75, 110, 25);

  // Frame 100-150: Clinic name at bottom
  const clinicOpacity = fadeIn(100, 150);
  const clinicY = slideUp(100, 150, 15);

  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        position: "relative",
        overflow: "hidden",
        background: "#000",
      }}
    >
      {/* --- Background: Kling AI clinic video --- */}
      <OffthreadVideo
        src={staticFile("kling-clinic-treatment.mp4")}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1080,
          height: 1920,
          objectFit: "cover",
        }}
      />

      {/* --- Dark overlay: gradient from top and bottom --- */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1080,
          height: 1920,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.15) 35%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.8) 100%)",
          zIndex: 1,
        }}
      />

      {/* --- Text layer --- */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1080,
          height: 1920,
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Top label: PRECISION MEDICINE */}
        <div
          style={{
            position: "absolute",
            top: 180,
            left: 0,
            right: 0,
            textAlign: "center",
            opacity: labelOpacity,
            transform: `translateY(${labelY}px)`,
          }}
        >
          <span
            style={{
              fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
              fontSize: 22,
              fontWeight: 500,
              letterSpacing: 6,
              textTransform: "uppercase" as const,
              color: "rgba(255,255,255,0.85)",
              textShadow: "0 2px 12px rgba(0,0,0,0.5)",
            }}
          >
            PRECISION MEDICINE
          </span>
        </div>

        {/* Main text: "Your skin tells a story." */}
        <div
          style={{
            position: "absolute",
            top: 720,
            left: 80,
            right: 80,
            textAlign: "center",
            opacity: mainOpacity,
            transform: `translateY(${mainY}px)`,
          }}
        >
          <span
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontStyle: "italic",
              fontSize: 62,
              fontWeight: 400,
              lineHeight: 1.3,
              color: "#fff",
              textShadow: "0 2px 20px rgba(0,0,0,0.6)",
            }}
          >
            Your skin tells a story.
          </span>
        </div>

        {/* Second line: "We read between the lines." */}
        <div
          style={{
            position: "absolute",
            top: 830,
            left: 80,
            right: 80,
            textAlign: "center",
            opacity: secondOpacity,
            transform: `translateY(${secondY}px)`,
          }}
        >
          <span
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontStyle: "italic",
              fontSize: 52,
              fontWeight: 400,
              lineHeight: 1.3,
              color: "#fff",
              textShadow: "0 2px 20px rgba(0,0,0,0.6)",
            }}
          >
            We read between the lines.
          </span>
        </div>

        {/* Stat line: "92 cameras. 3 seconds. Every lesion tracked." */}
        <div
          style={{
            position: "absolute",
            top: 1050,
            left: 60,
            right: 60,
            textAlign: "center",
            opacity: statOpacity,
            transform: `translateY(${statY}px)`,
          }}
        >
          <span
            style={{
              fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
              fontSize: 30,
              fontWeight: 400,
              letterSpacing: 1.5,
              color: "rgba(255,255,255,0.9)",
              textShadow: "0 1px 10px rgba(0,0,0,0.5)",
            }}
          >
            <span style={{ color: TEAL, fontWeight: 600 }}>92</span> cameras.{" "}
            <span style={{ color: TEAL, fontWeight: 600 }}>3</span> seconds.
            Every lesion tracked.
          </span>
        </div>

        {/* Clinic name: DEMO CLINIC · NEW YORK */}
        <div
          style={{
            position: "absolute",
            bottom: 160,
            left: 0,
            right: 0,
            textAlign: "center",
            opacity: clinicOpacity,
            transform: `translateY(${clinicY}px)`,
          }}
        >
          <span
            style={{
              fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
              fontSize: 20,
              fontWeight: 500,
              letterSpacing: 5,
              textTransform: "uppercase" as const,
              color: "rgba(255,255,255,0.75)",
              textShadow: "0 1px 8px rgba(0,0,0,0.5)",
              fontVariant: "small-caps",
            }}
          >
            DEMO CLINIC &middot; NEW YORK
          </span>
        </div>
      </div>
    </div>
  );
};
