import React from "react";
import {
  useCurrentFrame,
  interpolate,
  Easing,
  OffthreadVideo,
  staticFile,
} from "remotion";

// DEMO REEL — UPSCALE COCKTAIL BAR: COMPOSITE
// AI-generated Kling video background + Remotion text overlays
// Dark moody cocktail bar, amber/gold accents, premium serif typography
// 1080x1920 · 30fps · 150 frames (5s)

const COLORS = {
  text: "#ffffff",
  accent: "#d4a44c",
  muted: "rgba(255,255,255,0.7)",
};

export const Demo_Bar_Composite: React.FC = () => {
  const frame = useCurrentFrame();

  // --- Animation helpers ---

  const fadeIn = (start: number, duration = 14) => ({
    opacity: interpolate(frame, [start, start + duration], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.cubic),
    }),
  });

  const fadeUpIn = (start: number, duration = 16) => ({
    opacity: interpolate(frame, [start, start + duration], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.cubic),
    }),
    transform: `translateY(${interpolate(
      frame,
      [start, start + duration],
      [24, 0],
      {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: Easing.out(Easing.cubic),
      }
    )}px)`,
  });

  const slamIn = (start: number) => {
    const scaleVal = interpolate(
      frame,
      [start, start + 6, start + 12],
      [1.15, 0.98, 1],
      {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: Easing.out(Easing.cubic),
      }
    );
    return {
      opacity: interpolate(frame, [start, start + 4], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      }),
      transform: `scale(${scaleVal}) translateY(${interpolate(
        frame,
        [start, start + 10],
        [30, 0],
        {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.out(Easing.cubic),
        }
      )}px)`,
    };
  };

  const textShadow = "0 2px 20px rgba(0,0,0,0.6), 0 1px 4px rgba(0,0,0,0.4)";

  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#0a0a0a",
      }}
    >
      {/* Background: Kling AI cocktail video */}
      <OffthreadVideo
        src={staticFile("kling-bar-cocktail.mp4")}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />

      {/* Dark gradient overlay — bottom 40% for text readability */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "40%",
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.85) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Frame 0-30: "THE CRAFT" — small tracked text at top */}
      <div
        style={{
          position: "absolute",
          top: 120,
          left: 0,
          right: 0,
          textAlign: "center",
          ...fadeIn(0, 30),
        }}
      >
        <span
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            fontSize: 22,
            fontWeight: 400,
            letterSpacing: 12,
            color: COLORS.text,
            textTransform: "uppercase" as const,
            textShadow,
          }}
        >
          THE CRAFT
        </span>
      </div>

      {/* Frame 20-60: Main line — slam in */}
      <div
        style={{
          position: "absolute",
          bottom: 440,
          left: 60,
          right: 60,
          textAlign: "center",
          ...slamIn(20),
        }}
      >
        <span
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontStyle: "italic",
            fontSize: 52,
            fontWeight: 400,
            lineHeight: 1.25,
            color: COLORS.text,
            textShadow,
          }}
        >
          You don&apos;t shake a Negroni.
        </span>
      </div>

      {/* Frame 50-90: Subtext — fade up */}
      <div
        style={{
          position: "absolute",
          bottom: 340,
          left: 80,
          right: 80,
          textAlign: "center",
          ...fadeUpIn(50, 20),
        }}
      >
        <span
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: 30,
            fontWeight: 300,
            lineHeight: 1.5,
            color: COLORS.muted,
            textShadow,
          }}
        >
          You stir it. Slowly. With intention.
        </span>
      </div>

      {/* Frame 80-120: Stat line — amber accent */}
      <div
        style={{
          position: "absolute",
          bottom: 240,
          left: 80,
          right: 80,
          textAlign: "center",
          ...fadeUpIn(80, 20),
        }}
      >
        <span
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontStyle: "italic",
            fontSize: 28,
            fontWeight: 400,
            color: COLORS.accent,
            textShadow: "0 2px 16px rgba(212,164,76,0.3), 0 1px 4px rgba(0,0,0,0.4)",
          }}
        >
          The method is the flavor.
        </span>
      </div>

      {/* Frame 110-150: Bar name — small caps, tracked */}
      <div
        style={{
          position: "absolute",
          bottom: 140,
          left: 0,
          right: 0,
          textAlign: "center",
          ...fadeIn(110, 20),
        }}
      >
        <span
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            fontSize: 18,
            fontWeight: 400,
            letterSpacing: 8,
            color: COLORS.muted,
            textTransform: "uppercase" as const,
            fontVariant: "small-caps",
            textShadow,
          }}
        >
          DEMO BAR · MADRID
        </span>
      </div>
    </div>
  );
};
