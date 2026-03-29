import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
// DERMAMEDICUM TERMINAL: Lo-Fi Data Terminal aesthetic
// Green-on-black, monospace, retro terminal UI
// Topic: Retinol — ingredient analysis as "patient data"
// Breaks: every healthcare Reel ever made. Pure novelty.

export const DM_Terminal: React.FC = () => {
  const frame = useCurrentFrame();

  // Cursor blink
  const cursorOn = Math.floor(frame / 15) % 2 === 0;

  // Scanline effect
  const scanY = (frame * 3) % 1920;

  // Text appears character by character
  const typeText = (text: string, startFrame: number, charsPerFrame = 0.8) => {
    const elapsed = Math.max(0, frame - startFrame);
    const visibleChars = Math.floor(elapsed * charsPerFrame);
    return text.substring(0, Math.min(visibleChars, text.length));
  };

  // Line visibility
  const lineVis = (s: number) =>
    interpolate(frame, [s, s + 2], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Progress bar
  const progressWidth = (s: number, e: number) =>
    interpolate(frame, [s, e], [0, 580], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const green = "#22c55e";
  const dimGreen = "#166534";
  const amber = "#fbbf24";
  const red = "#ef4444";
  const mono = "'Courier New', 'Consolas', monospace";

  return (
    <div style={{
      width: 1080, height: 1920,
      background: "#0a0a0a",
      overflow: "hidden", position: "relative",
      fontFamily: mono,
    }}>
      {/* CRT scanline effect */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 20,
        background: `repeating-linear-gradient(
          0deg,
          transparent,
          transparent 3px,
          rgba(0,255,0,0.015) 3px,
          rgba(0,255,0,0.015) 6px
        )`,
      }} />

      {/* Scan beam */}
      <div style={{
        position: "absolute", left: 0, right: 0, top: scanY, height: 4,
        background: `linear-gradient(180deg, transparent, rgba(34,197,94,0.06), transparent)`,
        pointerEvents: "none", zIndex: 21,
      }} />

      {/* Subtle glow around edges */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        boxShadow: "inset 0 0 120px rgba(34,197,94,0.05)",
      }} />

      {/* Terminal content — safe zone */}
      <div style={{
        position: "absolute", left: 60, right: 150, top: 300, bottom: 500,
        display: "flex", flexDirection: "column", gap: 0,
      }}>

        {/* Header */}
        <div style={{ opacity: lineVis(5), marginBottom: 30 }}>
          <div style={{ fontSize: 30, color: dimGreen, letterSpacing: 2 }}>
            {typeText("DERMAMEDICUM SKIN ANALYSIS v3.2", 5, 1.2)}
          </div>
          <div style={{ fontSize: 30, color: dimGreen, marginTop: 6 }}>
            {typeText("═══════════════════════════════", 30, 2)}
          </div>
        </div>

        {/* Loading */}
        <div style={{ opacity: lineVis(50), marginBottom: 24 }}>
          <div style={{ fontSize: 32, color: green }}>
            {typeText("> Inhaltsstoff laden: RETINOL", 50, 1)}
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ opacity: lineVis(80), marginBottom: 30 }}>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <div style={{ fontSize: 28, color: dimGreen }}>[</div>
            <div style={{ width: 580, height: 20, background: "#111", borderRadius: 2, overflow: "hidden" }}>
              <div style={{
                width: progressWidth(80, 115), height: "100%",
                background: `linear-gradient(90deg, ${dimGreen}, ${green})`,
              }} />
            </div>
            <div style={{ fontSize: 28, color: dimGreen }}>]</div>
            <div style={{ fontSize: 28, color: green }}>
              {Math.min(100, Math.floor(interpolate(frame, [80, 115], [0, 100], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })))}%
            </div>
          </div>
        </div>

        {/* Analysis results */}
        <div style={{ opacity: lineVis(120), marginBottom: 20 }}>
          <div style={{ fontSize: 34, color: amber, fontWeight: "bold" }}>
            {typeText("WIRKSTOFF-ANALYSE:", 120, 1)}
          </div>
        </div>

        {/* Data rows */}
        <div style={{ opacity: lineVis(145), marginBottom: 10 }}>
          <div style={{ fontSize: 32, color: green }}>
            {typeText("  Typ .............. Vitamin-A-Derivat", 145, 1)}
          </div>
        </div>
        <div style={{ opacity: lineVis(175), marginBottom: 10 }}>
          <div style={{ fontSize: 32, color: green }}>
            {typeText("  Wirkung .......... Zellerneuerung ↑↑↑", 175, 1)}
          </div>
        </div>
        <div style={{ opacity: lineVis(205), marginBottom: 10 }}>
          <div style={{ fontSize: 32, color: green }}>
            {typeText("  Kollagen ......... Stimulation +40%", 205, 1)}
          </div>
        </div>
        <div style={{ opacity: lineVis(230), marginBottom: 10 }}>
          <div style={{ fontSize: 32, color: green }}>
            {typeText("  Pigmentflecken ... Reduktion ↓↓", 230, 1)}
          </div>
        </div>
        <div style={{ opacity: lineVis(255), marginBottom: 20 }}>
          <div style={{ fontSize: 32, color: green }}>
            {typeText("  Evidenzlevel ..... GOLD STANDARD", 255, 1)}
          </div>
        </div>

        {/* Warning */}
        <div style={{ opacity: lineVis(285), marginBottom: 20 }}>
          <div style={{ fontSize: 30, color: red }}>
            {typeText("⚠ WARNUNG: Ohne Sonnenschutz = Gegenteil.", 285, 0.9)}
          </div>
        </div>

        {/* Recommendation */}
        <div style={{ opacity: lineVis(310), marginBottom: 24 }}>
          <div style={{ fontSize: 34, color: amber }}>
            {typeText("> EMPFEHLUNG: 0.025% starten.", 310, 0.9)}
          </div>
          <div style={{
            fontSize: 34, color: amber, marginTop: 8,
            opacity: lineVis(335),
          }}>
            {typeText("  Langsam steigern. Geduld > Stärke.", 335, 0.9)}
          </div>
        </div>

        {/* Cursor line */}
        <div style={{ opacity: lineVis(365), marginTop: 20 }}>
          <div style={{ fontSize: 32, color: green }}>
            {">"} {typeText("dermamedicum.com", 365, 0.8)}
            <span style={{ opacity: cursorOn ? 1 : 0, color: green }}>█</span>
          </div>
        </div>
      </div>

      {/* Bottom brand — subtle */}
      <div style={{
        position: "absolute", left: 60, bottom: 510,
        opacity: interpolate(frame, [380, 400], [0, 0.5], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
      }}>
        <div style={{ fontSize: 26, color: dimGreen, letterSpacing: 4 }}>
          DERMAMEDICUM · BONN · SYS ONLINE
        </div>
      </div>
    </div>
  );
};
