import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
import { BRAND, FONTS, LOGO, SAFE, SPEC } from "./derma-brand";

// Replicates the "Focus vs Multitasking" bouncing ball + bar chart style
// Applied to: "Viele Produkte vs. Gezielte Behandlung" (Periorale Dermatitis / Skincare philosophy)
// Two charts stacked vertically. Ball bounces between bars. Motion IS the argument.
// Minimal: two words + bars + ball. Zero explanation needed.

const BAR_COLOR = "rgba(143, 158, 144, 0.5)"; // sage, muted
const BAR_HIGHLIGHT = "rgba(143, 158, 144, 0.8)";
const BALL_COLOR = "#558695"; // teal
const BALL_GLOW = "rgba(85, 134, 149, 0.6)";

// Deterministic bar heights
const TOP_BARS = [0.25, 0.3, 0.22, 0.28, 0.35, 0.2, 0.32, 0.26]; // many products, all short
const BOT_BARS_FINAL = [0.85, 0.65, 0.45]; // fewer, taller — targeted treatment

export const DM_BounceBars: React.FC = () => {
  const frame = useCurrentFrame();
  const totalFrames = 420; // 14s

  // Layout
  const chartX = 80;
  const chartW = SPEC.width - 160 - SAFE.right;
  const topChartY = SAFE.top + 120;
  const topChartH = 400;
  const botChartY = topChartY + topChartH + 220;
  const botChartH = 400;
  const labelY_top = topChartY - 50;
  const labelY_bot = botChartY - 50;

  // Phase 1 (0-180): bars grow in, ball appears
  // Phase 2 (180-340): ball bounces, bars react
  // Phase 3 (340-390): settle, contrast clear
  // Phase 4 (390-420): logo fade

  // Top bars grow (staggered)
  const topBarCount = TOP_BARS.length;
  const topBarW = (chartW - (topBarCount - 1) * 12) / topBarCount;

  // Bottom bars grow (staggered, delayed)
  const botBarCount = BOT_BARS_FINAL.length;
  const botBarW = (chartW * 0.5 - (botBarCount - 1) * 20) / botBarCount;

  // Ball position — bounces erratically on top, settles on bottom
  const ballSize = 28;

  // Ball Y oscillation for top chart (erratic)
  const ballPhase = frame * 0.08;
  const topBallBounceY = Math.sin(ballPhase * 3.7) * 30 + Math.cos(ballPhase * 2.1) * 20;

  // Ball X position — moves across bars
  const ballXProgress = interpolate(frame, [30, 340], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // In top section (frame 30-200), ball moves erratically across top bars
  // In bottom section (frame 200-340), ball moves smoothly across bottom bars
  const inTopSection = frame < 200;
  const transitionToBottom = interpolate(frame, [180, 220], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.inOut(Easing.cubic) });

  // Top ball X: bounces between bar positions
  const topBarIndex = Math.floor(interpolate(frame, [30, 200], [0, topBarCount - 0.01], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }));
  const topBallX = chartX + topBarIndex * (topBarW + 12) + topBarW / 2;

  // Bottom ball X: settles on the tallest bar
  const botBallTargetIndex = 0; // first bar (tallest)
  const botBallX = chartX + botBallTargetIndex * (botBarW + 20) + botBarW / 2;

  // Interpolated ball position
  const ballX = interpolate(transitionToBottom, [0, 1], [topBallX, botBallX]);

  // Ball Y: bouncing in top, settling in bottom
  const topBallY = topChartY + topChartH - TOP_BARS[topBarIndex] * topChartH - ballSize - 10 + topBallBounceY;
  const botBallSettleY = botChartY + botChartH - BOT_BARS_FINAL[0] * botChartH - ballSize - 10;
  const botBallBounce = Math.abs(Math.sin((frame - 220) * 0.06)) * interpolate(frame, [220, 340], [40, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const botBallY = botBallSettleY - botBallBounce;

  const ballY = interpolate(transitionToBottom, [0, 1], [topBallY, botBallY]);

  // Ball opacity
  const ballOpacity = interpolate(frame, [25, 35, 370, 390], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Axis opacity
  const axisOpacity = interpolate(frame, [0, 20, 370, 390], [0, 0.3, 0.3, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Label opacity
  const topLabelOp = interpolate(frame, [0, 15, 370, 390], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const botLabelOp = interpolate(frame, [60, 80, 370, 390], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Logo end card
  const logoOp = interpolate(frame, [390, 405], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const contentOp = interpolate(frame, [370, 390], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <div style={{
      width: SPEC.width, height: SPEC.height,
      background: "#0a0a0f",
      overflow: "hidden", position: "relative",
      fontFamily: FONTS.body,
    }}>

      {/* Content layer */}
      <div style={{ position: "absolute", inset: 0, opacity: contentOp }}>

        {/* TOP LABEL */}
        <div style={{
          position: "absolute", left: chartX, top: labelY_top,
          fontSize: 32, color: BRAND.cream, fontFamily: FONTS.heading,
          opacity: topLabelOp, letterSpacing: 1,
        }}>
          Viele Produkte
        </div>

        {/* TOP AXES */}
        <svg style={{ position: "absolute", left: 0, top: 0, width: SPEC.width, height: SPEC.height, pointerEvents: "none" }}>
          {/* Y axis */}
          <line x1={chartX - 2} y1={topChartY} x2={chartX - 2} y2={topChartY + topChartH} stroke="rgba(255,255,255,0.15)" strokeWidth={1} opacity={axisOpacity} />
          {/* X axis */}
          <line x1={chartX - 2} y1={topChartY + topChartH} x2={chartX + chartW} y2={topChartY + topChartH} stroke="rgba(255,255,255,0.15)" strokeWidth={1} opacity={axisOpacity} />
        </svg>

        {/* TOP BARS */}
        {TOP_BARS.map((h, i) => {
          const barGrow = interpolate(frame, [5 + i * 8, 30 + i * 8], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });
          const barH = h * topChartH * barGrow;
          const barX = chartX + i * (topBarW + 12);
          const isActive = topBarIndex === i && inTopSection && frame > 30;

          return (
            <div key={`top-${i}`} style={{
              position: "absolute",
              left: barX,
              bottom: SPEC.height - (topChartY + topChartH),
              width: topBarW,
              height: barH,
              background: isActive ? BAR_HIGHLIGHT : BAR_COLOR,
              borderRadius: "4px 4px 0 0",
              transition: "background 0.15s",
            }} />
          );
        })}

        {/* BOTTOM LABEL */}
        <div style={{
          position: "absolute", left: chartX, top: labelY_bot,
          fontSize: 32, color: BRAND.cream, fontFamily: FONTS.heading,
          opacity: botLabelOp, letterSpacing: 1,
        }}>
          Gezielte Behandlung
        </div>

        {/* BOTTOM AXES */}
        <svg style={{ position: "absolute", left: 0, top: 0, width: SPEC.width, height: SPEC.height, pointerEvents: "none" }}>
          <line x1={chartX - 2} y1={botChartY} x2={chartX - 2} y2={botChartY + botChartH} stroke="rgba(255,255,255,0.15)" strokeWidth={1} opacity={axisOpacity} />
          <line x1={chartX - 2} y1={botChartY + botChartH} x2={chartX + chartW} y2={botChartY + botChartH} stroke="rgba(255,255,255,0.15)" strokeWidth={1} opacity={axisOpacity} />
        </svg>

        {/* BOTTOM BARS */}
        {BOT_BARS_FINAL.map((h, i) => {
          const barGrow = interpolate(frame, [80 + i * 25, 160 + i * 25], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });
          const barH = h * botChartH * barGrow;
          const barX = chartX + i * (botBarW + 20);
          const isActive = !inTopSection && i === botBallTargetIndex && frame > 220;

          return (
            <div key={`bot-${i}`} style={{
              position: "absolute",
              left: barX,
              bottom: SPEC.height - (botChartY + botChartH),
              width: botBarW,
              height: barH,
              background: isActive ? BAR_HIGHLIGHT : BAR_COLOR,
              borderRadius: "4px 4px 0 0",
            }} />
          );
        })}

        {/* BOUNCING BALL */}
        <div style={{
          position: "absolute",
          left: ballX - ballSize / 2,
          top: ballY,
          width: ballSize,
          height: ballSize,
          borderRadius: "50%",
          background: BALL_COLOR,
          boxShadow: `0 0 16px ${BALL_GLOW}, 0 0 32px ${BALL_GLOW}`,
          opacity: ballOpacity,
        }} />
      </div>

      {/* LOGO END CARD */}
      {frame > 385 && (
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          opacity: logoOp,
        }}>
          <Img src={staticFile(LOGO.light)} style={{ width: 400, height: "auto", objectFit: "contain" }} />
        </div>
      )}
    </div>
  );
};
