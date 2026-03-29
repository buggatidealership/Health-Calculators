import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
import { BRAND, FONTS, SAFE, SPEC } from "./derma-brand";

// B1_Canfield_A — "Tech-Reveal"
// Typewriter hook → scan line over coordinate grid → tech stat → CTA
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

export const B1_Canfield_A: React.FC = () => {
  const frame = useCurrentFrame();

  // === SCENE TIMING ===
  // Scene 1: Hook typewriter (0–100)
  // Scene 2: Grid + scan line (80–230)
  // Scene 3: Stat reveal (210–300)
  // Scene 4: CTA (280–360)

  const s1 = sceneVis(frame, 0, 95);
  const s2 = sceneVis(frame, 80, 225, 12, 12);
  const s3 = sceneVis(frame, 210, 295, 10, 10);
  const s4 = sceneVis(frame, 280, 360, 12, 1);

  // --- Scene 1: Typewriter ---
  const line1 = "Ihre Haut hat eine Geschichte.";
  const line2 = "Wir lesen sie.";
  const typeSpeed = 1.8; // frames per char
  const line1Chars = Math.min(Math.floor(frame / typeSpeed), line1.length);
  const line2Start = line1.length * typeSpeed + 12;
  const line2Chars = Math.max(0, Math.min(Math.floor((frame - line2Start) / typeSpeed), line2.length));
  const cursorBlink = Math.sin(frame * 0.2) > 0;
  const showCursor = frame < line2Start + line2.length * typeSpeed + 20;

  // --- Scene 2: Grid + scan line ---
  const gridOpacity = interpolate(frame, [85, 100], [0, 1], clamp);
  const scanLineY = interpolate(frame, [100, 200], [0, 1], { ...clamp, easing: Easing.inOut(Easing.quad) });
  const scanGlow = Math.sin(frame * 0.15) * 0.3 + 0.7;

  // Grid lines
  const gridLines = [];
  const gridCols = 12;
  const gridRows = 16;
  const cellW = (SPEC.width - SAFE.left - SAFE.right) / gridCols;
  const cellH = (SPEC.height - SAFE.top - SAFE.bottom) / gridRows;
  const gridLeft = SAFE.left;
  const gridTop = SAFE.top;

  for (let i = 0; i <= gridCols; i++) {
    const x = gridLeft + i * cellW;
    const delay = i * 1.5;
    const lineOpacity = interpolate(frame, [85 + delay, 95 + delay], [0, 0.25], clamp);
    gridLines.push(
      <line key={`v${i}`} x1={x} y1={gridTop} x2={x} y2={SPEC.height - SAFE.bottom} stroke={BRAND.navy} strokeWidth={1} opacity={lineOpacity} />
    );
  }
  for (let j = 0; j <= gridRows; j++) {
    const y = gridTop + j * cellH;
    const delay = j * 1;
    const lineOpacity = interpolate(frame, [88 + delay, 98 + delay], [0, 0.2], clamp);
    gridLines.push(
      <line key={`h${j}`} x1={gridLeft} y1={y} x2={SPEC.width - SAFE.right} y2={y} stroke={BRAND.navy} strokeWidth={1} opacity={lineOpacity} />
    );
  }

  // Scan line position
  const scanY = gridTop + scanLineY * (SPEC.height - SAFE.top - SAFE.bottom);

  // Data points that appear as scan passes
  const dataPoints = [
    { cx: 300, cy: 600, r: 6, label: "A1" },
    { cx: 540, cy: 800, r: 8, label: "B3" },
    { cx: 780, cy: 700, r: 5, label: "C2" },
    { cx: 420, cy: 1100, r: 7, label: "D4" },
    { cx: 660, cy: 1300, r: 9, label: "E5" },
    { cx: 200, cy: 950, r: 6, label: "F2" },
    { cx: 850, cy: 1050, r: 5, label: "G3" },
  ];

  // --- Scene 3: Stat reveal ---
  const statScale = interpolate(frame, [215, 235], [0.8, 1], { ...clamp, easing: ease });
  const statCountUp = Math.min(92, Math.floor(interpolate(frame, [220, 260], [0, 92], clamp)));

  // --- Scene 4: CTA ---

  return (
    <div style={{ width: SPEC.width, height: SPEC.height, overflow: "hidden", position: "relative", backgroundColor: BRAND.cream }}>
      {/* === SCENE 1: Typewriter hook on cream === */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
        padding: `${SAFE.top}px ${SAFE.right}px ${SAFE.bottom}px ${SAFE.left}px`,
        opacity: s1,
      }}>
        <div style={{
          fontFamily: FONTS.heading, fontSize: 64, color: BRAND.warmBrown,
          lineHeight: 1.4, textAlign: "center", maxWidth: 900,
        }}>
          <div>{line1.slice(0, line1Chars)}</div>
          {line2Chars > 0 && (
            <div style={{ marginTop: 16, fontStyle: "italic", color: BRAND.navy, fontSize: 72 }}>
              {line2.slice(0, line2Chars)}
            </div>
          )}
          {showCursor && (
            <span style={{ opacity: cursorBlink ? 1 : 0, color: BRAND.teal, fontWeight: 300 }}>|</span>
          )}
        </div>
      </div>

      {/* === SCENE 2: Grid + scan line on navy === */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: s2,
        backgroundColor: BRAND.deepNavy,
      }}>
        <svg width={SPEC.width} height={SPEC.height} style={{ position: "absolute", top: 0, left: 0, opacity: gridOpacity }}>
          {gridLines}

          {/* Scan line */}
          <line
            x1={gridLeft} y1={scanY} x2={SPEC.width - SAFE.right} y2={scanY}
            stroke={BRAND.teal} strokeWidth={3} opacity={scanGlow}
          />
          {/* Scan glow */}
          <rect
            x={gridLeft} y={scanY - 30} width={SPEC.width - SAFE.left - SAFE.right} height={60}
            fill={BRAND.teal} opacity={scanGlow * 0.15}
          />

          {/* Data points revealed by scan */}
          {dataPoints.map((pt, i) => {
            const revealed = scanY > pt.cy;
            const ptOpacity = revealed
              ? interpolate(frame, [100 + (pt.cy - gridTop) / ((SPEC.height - SAFE.top - SAFE.bottom) / 100), 100 + (pt.cy - gridTop) / ((SPEC.height - SAFE.top - SAFE.bottom) / 100) + 8], [0, 1], clamp)
              : 0;
            const pulse = revealed ? 1 + Math.sin(frame * 0.12 + i) * 0.3 : 0;
            return (
              <g key={i} opacity={ptOpacity}>
                <circle cx={pt.cx} cy={pt.cy} r={pt.r * pulse} fill={BRAND.teal} opacity={0.6} />
                <circle cx={pt.cx} cy={pt.cy} r={pt.r * 0.5} fill={BRAND.cream} />
                <text x={pt.cx + 14} y={pt.cy + 5} fill={BRAND.coolGray} fontSize={18} fontFamily={FONTS.mono} opacity={0.6}>
                  {pt.label}
                </text>
              </g>
            );
          })}

          {/* Corner brackets */}
          <path d={`M${gridLeft},${gridTop + 40} L${gridLeft},${gridTop} L${gridLeft + 40},${gridTop}`} fill="none" stroke={BRAND.teal} strokeWidth={2} opacity={gridOpacity * 0.6} />
          <path d={`M${SPEC.width - SAFE.right},${gridTop + 40} L${SPEC.width - SAFE.right},${gridTop} L${SPEC.width - SAFE.right - 40},${gridTop}`} fill="none" stroke={BRAND.teal} strokeWidth={2} opacity={gridOpacity * 0.6} />
        </svg>

        {/* Scan label */}
        <div style={{
          position: "absolute", top: scanY - 20, right: SAFE.right + 20,
          fontFamily: FONTS.mono, fontSize: 20, color: BRAND.teal,
          opacity: gridOpacity * scanGlow,
        }}>
          SCAN {Math.floor(scanLineY * 100)}%
        </div>
      </div>

      {/* === SCENE 3: Stat reveal on cream === */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
        padding: `${SAFE.top}px ${SAFE.right}px ${SAFE.bottom}px ${SAFE.left}px`,
        opacity: s3, backgroundColor: BRAND.cream,
        transform: `scale(${statScale})`,
      }}>
        {/* Camera count */}
        <div style={{
          fontFamily: FONTS.mono, fontSize: 160, fontWeight: 700, color: BRAND.navy,
          lineHeight: 1, ...fadeUp(frame, 215),
        }}>
          {statCountUp}
        </div>
        <div style={{
          fontFamily: FONTS.body, fontSize: 36, color: BRAND.warmBrown,
          marginTop: 12, letterSpacing: 6, textTransform: "uppercase",
          ...fadeUp(frame, 225),
        }}>
          Kameras
        </div>

        {/* Divider */}
        <div style={{
          width: 200, height: 2, backgroundColor: BRAND.goldBorder, margin: "40px 0",
          opacity: interpolate(frame, [230, 245], [0, 1], clamp),
        }} />

        {/* Time stat */}
        <div style={{
          fontFamily: FONTS.heading, fontSize: 52, color: BRAND.navy,
          ...fadeUp(frame, 240),
        }}>
          3 Sekunden.
        </div>
        <div style={{
          fontFamily: FONTS.body, fontSize: 30, color: BRAND.warmBrown,
          marginTop: 8, ...fadeUp(frame, 250),
        }}>
          Vollständige Kartierung.
        </div>
      </div>

      {/* === SCENE 4: CTA on cream === */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
        padding: `${SAFE.top}px ${SAFE.right}px ${SAFE.bottom}px ${SAFE.left}px`,
        opacity: s4, backgroundColor: BRAND.cream,
      }}>
        {/* Logo */}
        <div style={{ marginBottom: 60, ...fadeUp(frame, 290) }}>
          <Img src={staticFile("derma-logo-dark.png")} style={{ width: 320, objectFit: "contain" }} />
        </div>

        {/* Gold divider */}
        <div style={{
          width: 160, height: 2, backgroundColor: BRAND.goldBorder, marginBottom: 48,
          opacity: interpolate(frame, [295, 310], [0, 1], clamp),
        }} />

        {/* CTA text */}
        <div style={{
          fontFamily: FONTS.heading, fontSize: 44, color: BRAND.navy,
          textAlign: "center", lineHeight: 1.4, maxWidth: 800,
          ...fadeUp(frame, 305),
        }}>
          Hautkrebsvorsorge
        </div>
        <div style={{
          fontFamily: FONTS.body, fontSize: 32, color: BRAND.warmBrown,
          textAlign: "center", marginTop: 12, letterSpacing: 2,
          ...fadeUp(frame, 315),
        }}>
          der nächsten Generation
        </div>
      </div>
    </div>
  );
};
