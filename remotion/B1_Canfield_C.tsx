import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
import { BRAND, FONTS, SAFE, SPEC } from "./derma-brand";

// B1_Canfield_C — "Digitaler Zwilling" (Digital Twin)
// Body silhouette with moles → pulsing mole → crosshair zoom → stat → CTA
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

// Mole positions on the silhouette (relative to silhouette center)
const moles = [
  { x: -60, y: -180, r: 5, safe: true },
  { x: 40, y: -120, r: 4, safe: true },
  { x: -30, y: -40, r: 6, safe: true },
  { x: 70, y: 20, r: 5, safe: true },
  { x: -50, y: 80, r: 7, safe: false }, // the one that changes — index 4
  { x: 20, y: 140, r: 4, safe: true },
  { x: -80, y: 200, r: 5, safe: true },
  { x: 50, y: -60, r: 3, safe: true },
  { x: -20, y: 260, r: 4, safe: true },
];

const targetMoleIdx = 4;
const silCenterX = SPEC.width / 2;
const silCenterY = 880;

export const B1_Canfield_C: React.FC = () => {
  const frame = useCurrentFrame();

  // === SCENE TIMING ===
  // Scene 1: Hook text (0–55)
  // Scene 2: Silhouette with moles appearing (40–170)
  // Scene 3: Crosshair zoom on target mole (155–260)
  // Scene 4: Stat reveal (245–310)
  // Scene 5: CTA (295–360)

  const s1 = sceneVis(frame, 0, 50);
  const s2 = sceneVis(frame, 40, 165, 12, 12);
  const s3 = sceneVis(frame, 155, 255, 10, 10);
  const s4 = sceneVis(frame, 245, 305, 10, 10);
  const s5 = sceneVis(frame, 295, 360, 12, 1);

  // --- Scene 2: Silhouette ---
  const silOpacity = interpolate(frame, [45, 65], [0, 1], clamp);

  // Moles appear staggered
  const moleStartFrame = 60;
  const moleStagger = 6;

  // Target mole pulse (scene 2 late → scene 3)
  const targetPulse = frame >= 120 && frame <= 260
    ? 1 + Math.sin((frame - 120) * 0.18) * 0.5
    : 1;
  const targetGlow = frame >= 130 && frame <= 260
    ? interpolate(frame, [130, 150], [0, 1], clamp) : 0;

  // --- Scene 3: Crosshair zoom ---
  const zoomScale = interpolate(frame, [160, 195], [1, 3.5], { ...clamp, easing: ease });
  const zoomCenterX = silCenterX + moles[targetMoleIdx].x;
  const zoomCenterY = silCenterY + moles[targetMoleIdx].y;
  const crosshairOpacity = interpolate(frame, [175, 190], [0, 1], clamp);
  const crosshairRotation = interpolate(frame, [175, 220], [15, 0], { ...clamp, easing: ease });

  // Measurement line animation
  const measureLine = interpolate(frame, [200, 225], [0, 1], clamp);

  // --- Scene 4: Stat ---

  return (
    <div style={{ width: SPEC.width, height: SPEC.height, overflow: "hidden", position: "relative", backgroundColor: BRAND.cream }}>
      {/* === SCENE 1: Hook text on cream === */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
        padding: `${SAFE.top}px ${SAFE.right}px ${SAFE.bottom}px ${SAFE.left}px`,
        opacity: s1,
      }}>
        <div style={{
          fontFamily: FONTS.heading, fontSize: 60, color: BRAND.warmBrown,
          textAlign: "center", lineHeight: 1.4, maxWidth: 850,
          ...fadeUp(frame, 5),
        }}>
          Was Ihr Auge
        </div>
        <div style={{
          fontFamily: FONTS.heading, fontSize: 60, color: BRAND.navy,
          textAlign: "center", lineHeight: 1.4, fontStyle: "italic",
          ...fadeUp(frame, 18),
        }}>
          nicht sehen kann
        </div>
      </div>

      {/* === SCENE 2: Silhouette with moles === */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: s2, backgroundColor: BRAND.cream,
      }}>
        <svg width={SPEC.width} height={SPEC.height} style={{ position: "absolute", top: 0, left: 0 }}>
          {/* Body silhouette — simplified torso outline */}
          <g opacity={silOpacity}>
            {/* Head */}
            <ellipse cx={silCenterX} cy={silCenterY - 340} rx={65} ry={80}
              fill="none" stroke={BRAND.navy} strokeWidth={2.5} opacity={0.3} />
            {/* Neck */}
            <rect x={silCenterX - 25} y={silCenterY - 265} width={50} height={40}
              fill="none" stroke={BRAND.navy} strokeWidth={2} opacity={0.25} rx={8} />
            {/* Torso */}
            <path
              d={`M${silCenterX - 120},${silCenterY - 225}
                  Q${silCenterX - 140},${silCenterY - 100} ${silCenterX - 130},${silCenterY + 50}
                  Q${silCenterX - 120},${silCenterY + 200} ${silCenterX - 80},${silCenterY + 350}
                  L${silCenterX + 80},${silCenterY + 350}
                  Q${silCenterX + 120},${silCenterY + 200} ${silCenterX + 130},${silCenterY + 50}
                  Q${silCenterX + 140},${silCenterY - 100} ${silCenterX + 120},${silCenterY - 225}
                  Z`}
              fill="none" stroke={BRAND.navy} strokeWidth={2.5} opacity={0.2}
            />
            {/* Arms */}
            <path
              d={`M${silCenterX - 120},${silCenterY - 200}
                  Q${silCenterX - 200},${silCenterY - 80} ${silCenterX - 190},${silCenterY + 100}`}
              fill="none" stroke={BRAND.navy} strokeWidth={2} opacity={0.2}
            />
            <path
              d={`M${silCenterX + 120},${silCenterY - 200}
                  Q${silCenterX + 200},${silCenterY - 80} ${silCenterX + 190},${silCenterY + 100}`}
              fill="none" stroke={BRAND.navy} strokeWidth={2} opacity={0.2}
            />
          </g>

          {/* Moles */}
          {moles.map((mole, i) => {
            const mStart = moleStartFrame + i * moleStagger;
            const mOpacity = interpolate(frame, [mStart, mStart + 10], [0, 1], clamp);
            const isTarget = i === targetMoleIdx;
            const mColor = isTarget ? BRAND.error : BRAND.warmBrown;
            const mScale = isTarget ? targetPulse : 1;
            const cx = silCenterX + mole.x;
            const cy = silCenterY + mole.y;

            return (
              <g key={i} opacity={mOpacity}>
                {/* Glow ring for target */}
                {isTarget && targetGlow > 0 && (
                  <circle cx={cx} cy={cy} r={mole.r * 3 * targetPulse}
                    fill="none" stroke={BRAND.error} strokeWidth={1.5}
                    opacity={targetGlow * 0.4}
                  />
                )}
                <circle cx={cx} cy={cy} r={mole.r * mScale} fill={mColor} opacity={0.85} />
              </g>
            );
          })}
        </svg>
      </div>

      {/* === SCENE 3: Crosshair zoom === */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: s3,
        backgroundColor: `${BRAND.deepNavy}F0`,
      }}>
        <div style={{
          position: "absolute", inset: 0,
          transformOrigin: `${zoomCenterX}px ${zoomCenterY}px`,
          transform: `scale(${zoomScale})`,
        }}>
          <svg width={SPEC.width} height={SPEC.height}>
            {/* Target mole enlarged */}
            <circle cx={zoomCenterX} cy={zoomCenterY} r={moles[targetMoleIdx].r}
              fill={BRAND.error} opacity={0.9} />
            {/* Pulse ring */}
            <circle cx={zoomCenterX} cy={zoomCenterY} r={moles[targetMoleIdx].r * targetPulse * 2.5}
              fill="none" stroke={BRAND.error} strokeWidth={1} opacity={0.5} />
          </svg>
        </div>

        {/* Crosshair overlay (not zoomed) */}
        <svg width={SPEC.width} height={SPEC.height} style={{
          position: "absolute", top: 0, left: 0,
          opacity: crosshairOpacity,
        }}>
          {/* Crosshair lines */}
          <line x1={SPEC.width / 2 - 80} y1={SPEC.height / 2}
                x2={SPEC.width / 2 - 20} y2={SPEC.height / 2}
                stroke={BRAND.navy} strokeWidth={2}
                transform={`rotate(${crosshairRotation}, ${SPEC.width / 2}, ${SPEC.height / 2})`} />
          <line x1={SPEC.width / 2 + 20} y1={SPEC.height / 2}
                x2={SPEC.width / 2 + 80} y2={SPEC.height / 2}
                stroke={BRAND.navy} strokeWidth={2}
                transform={`rotate(${crosshairRotation}, ${SPEC.width / 2}, ${SPEC.height / 2})`} />
          <line x1={SPEC.width / 2} y1={SPEC.height / 2 - 80}
                x2={SPEC.width / 2} y2={SPEC.height / 2 - 20}
                stroke={BRAND.navy} strokeWidth={2}
                transform={`rotate(${crosshairRotation}, ${SPEC.width / 2}, ${SPEC.height / 2})`} />
          <line x1={SPEC.width / 2} y1={SPEC.height / 2 + 20}
                x2={SPEC.width / 2} y2={SPEC.height / 2 + 80}
                stroke={BRAND.navy} strokeWidth={2}
                transform={`rotate(${crosshairRotation}, ${SPEC.width / 2}, ${SPEC.height / 2})`} />
          {/* Crosshair circle */}
          <circle cx={SPEC.width / 2} cy={SPEC.height / 2} r={50}
            fill="none" stroke={BRAND.cream} strokeWidth={1.5} opacity={0.6}
            transform={`rotate(${crosshairRotation}, ${SPEC.width / 2}, ${SPEC.height / 2})`} />

          {/* Measurement annotation */}
          {measureLine > 0 && (
            <g opacity={measureLine}>
              <line x1={SPEC.width / 2 + 60} y1={SPEC.height / 2 - 10}
                    x2={SPEC.width / 2 + 60} y2={SPEC.height / 2 + 10}
                    stroke={BRAND.teal} strokeWidth={1.5} />
              <line x1={SPEC.width / 2 + 60} y1={SPEC.height / 2}
                    x2={SPEC.width / 2 + 200 * measureLine} y2={SPEC.height / 2}
                    stroke={BRAND.teal} strokeWidth={1.5} strokeDasharray="4 3" />
              <text x={SPEC.width / 2 + 210} y={SPEC.height / 2 + 6}
                fill={BRAND.teal} fontSize={22} fontFamily={FONTS.mono} opacity={measureLine}>
                0,3 mm
              </text>
            </g>
          )}
        </svg>

        {/* Detection label */}
        <div style={{
          position: "absolute", bottom: SAFE.bottom + 200, left: 0, right: 0,
          textAlign: "center",
          ...fadeUp(frame, 210),
        }}>
          <div style={{
            display: "inline-block", padding: "12px 32px",
            backgroundColor: `${BRAND.error}22`, borderRadius: 8,
            border: `1px solid ${BRAND.error}66`,
          }}>
            <span style={{
              fontFamily: FONTS.mono, fontSize: 22, color: BRAND.error,
              letterSpacing: 2, textTransform: "uppercase",
            }}>
              Veränderung erkannt
            </span>
          </div>
        </div>
      </div>

      {/* === SCENE 4: Stat reveal on cream === */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
        padding: `${SAFE.top}px ${SAFE.right}px ${SAFE.bottom}px ${SAFE.left}px`,
        opacity: s4, backgroundColor: BRAND.cream,
      }}>
        <div style={{
          fontFamily: FONTS.mono, fontSize: 100, color: BRAND.error, fontWeight: 700,
          ...fadeUp(frame, 250),
        }}>
          0,3mm
        </div>
        <div style={{
          fontFamily: FONTS.body, fontSize: 32, color: BRAND.warmBrown,
          marginTop: 16, textAlign: "center", lineHeight: 1.5,
          ...fadeUp(frame, 260),
        }}>
          Veränderung in 12 Monaten
        </div>

        <div style={{
          width: 200, height: 2, backgroundColor: BRAND.goldBorder, margin: "36px 0",
          opacity: interpolate(frame, [268, 280], [0, 1], clamp),
        }} />

        <div style={{
          fontFamily: FONTS.body, fontSize: 28, color: BRAND.navy,
          textAlign: "center", lineHeight: 1.5, maxWidth: 750,
          ...fadeUp(frame, 275),
        }}>
          KI-gestützte Veränderungserkennung —{"\n"}
          unsichtbar für das bloße Auge.
        </div>
      </div>

      {/* === SCENE 5: CTA on cream === */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
        padding: `${SAFE.top}px ${SAFE.right}px ${SAFE.bottom}px ${SAFE.left}px`,
        opacity: s5, backgroundColor: BRAND.cream,
      }}>
        {/* Logo */}
        <div style={{ marginBottom: 50, ...fadeUp(frame, 300) }}>
          <Img src={staticFile("derma-logo-dark.png")} style={{ width: 300, objectFit: "contain" }} />
        </div>

        <div style={{
          width: 160, height: 2, backgroundColor: BRAND.goldBorder, marginBottom: 44,
          opacity: interpolate(frame, [305, 318], [0, 1], clamp),
        }} />

        <div style={{
          fontFamily: FONTS.heading, fontSize: 40, color: BRAND.navy,
          textAlign: "center", lineHeight: 1.4, maxWidth: 800,
          ...fadeUp(frame, 312),
        }}>
          Vectra WB360
        </div>
        <div style={{
          fontFamily: FONTS.body, fontSize: 30, color: BRAND.warmBrown,
          textAlign: "center", marginTop: 12, letterSpacing: 1,
          ...fadeUp(frame, 322),
        }}>
          Ihr digitaler Haut-Zwilling
        </div>
      </div>
    </div>
  );
};
