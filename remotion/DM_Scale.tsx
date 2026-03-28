import React from "react";
import { useCurrentFrame, interpolate, Easing, spring } from "remotion";

// DM_Scale: "Was wiegt mehr?" — Marketing buzzwords vs. one clinical study
// Balance scale tips dramatically when real evidence lands.
// 1080x1920, 30fps, 390 frames (~13s)

const BUZZWORDS = [
  "Clean Beauty",
  "Dermatologisch getestet",
  "pH-neutral",
  "Ohne Parabene",
  "Klinisch bewiesen",
  "Hypoallergen",
  "Natürlich",
  "Bio-zertifiziert",
];

const EVIDENCE = "1 randomisierte Doppelblindstudie (n=847)";

const clamp = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };

export const DM_Scale: React.FC = () => {
  const frame = useCurrentFrame();

  // --- SCALE PHYSICS ---
  // Each buzzword adds weight to left side (negative tilt = left down)
  // Evidence card adds massive weight to right side at frame 200

  // Count how many buzzwords have landed
  const buzzwordsLanded = BUZZWORDS.reduce((count, _, i) => {
    const dropFrame = 60 + i * 15;
    return frame >= dropFrame + 12 ? count + 1 : count;
  }, 0);

  // Left tilt from buzzwords: each adds ~1.5 degrees, max ~12 degrees
  const leftWeight = interpolate(buzzwordsLanded, [0, 8], [0, 12], clamp);

  // Evidence drop frame
  const evidenceDropFrame = 200;
  const evidenceLanded = frame >= evidenceDropFrame + 15;

  // Spring for the dramatic tip (right side goes down = positive rotation)
  const evidenceSpring = spring({
    frame: frame - (evidenceDropFrame + 15),
    fps: 30,
    config: { damping: 8, stiffness: 80, mass: 1.2 },
  });

  // Final beam angle: starts level, tilts left with buzzwords, then tips right hard
  const beamAngle = evidenceLanded
    ? interpolate(evidenceSpring, [0, 1], [-leftWeight, 22])
    : -leftWeight;

  // --- BUZZWORD PILL DROP ANIMATION ---
  const renderBuzzwordPill = (text: string, index: number) => {
    const dropStart = 60 + index * 15;
    if (frame < dropStart) return null;

    const dropProgress = interpolate(frame, [dropStart, dropStart + 12], [0, 1], clamp);
    // Bounce easing for the drop
    const bounceY = interpolate(
      dropProgress,
      [0, 0.6, 0.8, 0.9, 1],
      [-120, 0, -15, 0, 0],
      clamp
    );
    const pillOpacity = interpolate(frame, [dropStart, dropStart + 4], [0, 1], clamp);

    // Scatter effect when evidence lands — pills fly off left
    let scatterX = 0;
    let scatterY = 0;
    let scatterRotate = 0;
    let scatterOpacity = 1;
    if (evidenceLanded) {
      const scatterDelay = index * 2;
      const scatterStart = evidenceDropFrame + 15 + scatterDelay;
      const scatterProgress = interpolate(frame, [scatterStart, scatterStart + 25], [0, 1], clamp);
      // Each pill flies in a slightly different direction
      const angle = -30 - index * 15;
      const radians = (angle * Math.PI) / 180;
      scatterX = Math.cos(radians) * scatterProgress * (400 + index * 60);
      scatterY = Math.sin(radians) * scatterProgress * (300 + index * 40) + scatterProgress * scatterProgress * 600;
      scatterRotate = scatterProgress * (120 + index * 30) * (index % 2 === 0 ? 1 : -1);
      scatterOpacity = interpolate(scatterProgress, [0.5, 1], [1, 0], clamp);
    }

    // Position pills in a stacked arrangement on the left pan
    const col = index % 2;
    const row = Math.floor(index / 2);
    const baseX = -140 + col * 145;
    const baseY = -row * 48;

    return (
      <div
        key={index}
        style={{
          position: "absolute",
          left: 540 + baseX + scatterX,
          top: 960 + baseY + bounceY + scatterY,
          transform: `rotate(${scatterRotate}deg)`,
          opacity: pillOpacity * scatterOpacity,
          padding: "10px 22px",
          borderRadius: 30,
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.15)",
          fontSize: index === 4 ? 19 : 21,
          color: "#E0E0E0",
          fontFamily: "'Inter', sans-serif",
          fontWeight: 500,
          whiteSpace: "nowrap",
          zIndex: 20 + index,
        }}
      >
        {text}
      </div>
    );
  };

  // --- EVIDENCE CARD ---
  const renderEvidenceCard = () => {
    if (frame < evidenceDropFrame - 10) return null;

    const dropProgress = interpolate(
      frame,
      [evidenceDropFrame, evidenceDropFrame + 15],
      [0, 1],
      clamp
    );
    const cardY = interpolate(
      dropProgress,
      [0, 0.5, 0.75, 0.9, 1],
      [-400, 0, -30, 0, 0],
      clamp
    );
    const cardOpacity = interpolate(frame, [evidenceDropFrame, evidenceDropFrame + 5], [0, 1], clamp);
    const cardScale = interpolate(
      dropProgress,
      [0, 0.5, 0.75, 1],
      [0.8, 1.05, 0.98, 1],
      clamp
    );

    // Glow pulse after landing
    const glowOpacity = evidenceLanded
      ? interpolate(evidenceSpring, [0, 0.5, 1], [0, 0.6, 0.3], clamp)
      : 0;

    return (
      <div
        style={{
          position: "absolute",
          right: 120,
          top: 920 + cardY,
          opacity: cardOpacity,
          transform: `scale(${cardScale})`,
          padding: "20px 28px",
          borderRadius: 12,
          background: "rgba(255,255,255,0.06)",
          border: "2px solid #4ade80",
          boxShadow: `0 0 ${30 * glowOpacity}px rgba(74, 222, 128, ${glowOpacity * 0.5})`,
          fontSize: 22,
          color: "#fff",
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          maxWidth: 280,
          textAlign: "center" as const,
          lineHeight: 1.5,
          zIndex: 30,
        }}
      >
        {EVIDENCE}
      </div>
    );
  };

  // --- SCALE SVG ---
  const pivotX = 540;
  const pivotY = 750;
  const beamLength = 380;

  // Scale visibility
  const scaleOpacity = interpolate(frame, [10, 40], [0, 1], clamp);

  // Pan positions (calculated from beam angle)
  const rad = (beamAngle * Math.PI) / 180;
  const leftPanX = pivotX - Math.cos(rad) * beamLength;
  const leftPanY = pivotY + Math.sin(rad) * beamLength;
  const rightPanX = pivotX + Math.cos(rad) * beamLength;
  const rightPanY = pivotY - Math.sin(rad) * beamLength;

  // --- TITLE: "Was wiegt mehr?" ---
  const titleOpacity = interpolate(frame, [5, 30], [0, 1], clamp);
  const titleY = interpolate(frame, [5, 30], [40, 0], { ...clamp, easing: Easing.out(Easing.cubic) });

  // --- BOTTOM TEXT (Phase 4) ---
  const bottomTextOpacity = interpolate(frame, [255, 280], [0, 1], clamp);
  const bottomTextY = interpolate(frame, [255, 280], [30, 0], { ...clamp, easing: Easing.out(Easing.cubic) });

  // --- CTA (Phase 5) ---
  const ctaOpacity = interpolate(frame, [335, 355], [0, 1], clamp);
  const ctaY = interpolate(frame, [335, 355], [20, 0], { ...clamp, easing: Easing.out(Easing.cubic) });

  // Impact flash when evidence lands
  const flashOpacity = interpolate(
    frame,
    [evidenceDropFrame + 14, evidenceDropFrame + 16, evidenceDropFrame + 22],
    [0, 0.15, 0],
    clamp
  );

  // Subtle screen shake on evidence impact
  const shakeX =
    frame >= evidenceDropFrame + 14 && frame <= evidenceDropFrame + 24
      ? Math.sin(frame * 12) *
        interpolate(frame, [evidenceDropFrame + 14, evidenceDropFrame + 24], [5, 0], clamp)
      : 0;
  const shakeY =
    frame >= evidenceDropFrame + 14 && frame <= evidenceDropFrame + 24
      ? Math.cos(frame * 10) *
        interpolate(frame, [evidenceDropFrame + 14, evidenceDropFrame + 24], [3, 0], clamp)
      : 0;

  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        background: "#0d1117",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Impact flash */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "#4ade80",
          opacity: flashOpacity,
          zIndex: 50,
          pointerEvents: "none",
        }}
      />

      {/* Main container with shake */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `translate(${shakeX}px, ${shakeY}px)`,
        }}
      >
        {/* TITLE */}
        <div
          style={{
            position: "absolute",
            top: 340,
            width: "100%",
            textAlign: "center",
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#E0E0E0",
              fontFamily: "'DM Serif Display', serif",
              letterSpacing: 1,
            }}
          >
            Was wiegt mehr?
          </div>
        </div>

        {/* SCALE — SVG structure */}
        <svg
          width={1080}
          height={600}
          viewBox="0 0 1080 600"
          style={{
            position: "absolute",
            top: 500,
            left: 0,
            opacity: scaleOpacity,
          }}
        >
          {/* Pivot stand — vertical post */}
          <line
            x1={pivotX}
            y1={pivotY + 120}
            x2={pivotX}
            y2={pivotY}
            stroke="#E0E0E0"
            strokeWidth={3}
            strokeLinecap="round"
          />
          {/* Base */}
          <line
            x1={pivotX - 80}
            y1={pivotY + 120}
            x2={pivotX + 80}
            y2={pivotY + 120}
            stroke="#E0E0E0"
            strokeWidth={3}
            strokeLinecap="round"
          />
          {/* Pivot triangle */}
          <polygon
            points={`${pivotX},${pivotY - 10} ${pivotX - 12},${pivotY + 6} ${pivotX + 12},${pivotY + 6}`}
            fill="#E0E0E0"
          />

          {/* Beam */}
          <line
            x1={leftPanX}
            y1={leftPanY}
            x2={rightPanX}
            y2={rightPanY}
            stroke="#E0E0E0"
            strokeWidth={3}
            strokeLinecap="round"
          />

          {/* Left pan — hanging strings + pan */}
          <line x1={leftPanX} y1={leftPanY} x2={leftPanX - 50} y2={leftPanY + 70} stroke="#E0E0E0" strokeWidth={1.5} />
          <line x1={leftPanX} y1={leftPanY} x2={leftPanX + 50} y2={leftPanY + 70} stroke="#E0E0E0" strokeWidth={1.5} />
          <ellipse cx={leftPanX} cy={leftPanY + 75} rx={65} ry={12} fill="none" stroke="#E0E0E0" strokeWidth={2} />

          {/* Right pan — hanging strings + pan */}
          <line x1={rightPanX} y1={rightPanY} x2={rightPanX - 50} y2={rightPanY + 70} stroke="#E0E0E0" strokeWidth={1.5} />
          <line x1={rightPanX} y1={rightPanY} x2={rightPanX + 50} y2={rightPanY + 70} stroke="#E0E0E0" strokeWidth={1.5} />
          <ellipse cx={rightPanX} cy={rightPanY + 75} rx={65} ry={12} fill="none" stroke="#E0E0E0" strokeWidth={2} />

          {/* Labels */}
          <text
            x={leftPanX}
            y={leftPanY + 110}
            textAnchor="middle"
            fill="rgba(255,255,255,0.4)"
            fontSize={18}
            fontFamily="'Inter', sans-serif"
          >
            Marketing
          </text>
          <text
            x={rightPanX}
            y={rightPanY + 110}
            textAnchor="middle"
            fill="rgba(255,255,255,0.4)"
            fontSize={18}
            fontFamily="'Inter', sans-serif"
          >
            Evidenz
          </text>
        </svg>

        {/* BUZZWORD PILLS — positioned relative to left pan */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1080,
            height: 1920,
          }}
        >
          {BUZZWORDS.map((text, i) => renderBuzzwordPill(text, i))}
        </div>

        {/* EVIDENCE CARD */}
        {renderEvidenceCard()}

        {/* BOTTOM TEXT — Phase 4 */}
        <div
          style={{
            position: "absolute",
            bottom: 520,
            width: "100%",
            textAlign: "center",
            opacity: bottomTextOpacity,
            transform: `translateY(${bottomTextY}px)`,
            padding: "0 80px",
          }}
        >
          <div
            style={{
              fontSize: 38,
              color: "#E0E0E0",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              lineHeight: 1.6,
              letterSpacing: 0.5,
            }}
          >
            Marketing-Vokabular ist kein
            <br />
            Wirksamkeitsnachweis.
          </div>
        </div>

        {/* CTA — Phase 5 */}
        <div
          style={{
            position: "absolute",
            bottom: 300,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: ctaOpacity,
            transform: `translateY(${ctaY}px)`,
          }}
        >
          <div
            style={{
              fontSize: 44,
              fontWeight: 700,
              color: "#4ade80",
              fontFamily: "'DM Serif Display', serif",
              marginBottom: 24,
              letterSpacing: 1,
            }}
          >
            Evidenz wiegt mehr.
          </div>
          <div
            style={{
              padding: "14px 48px",
              borderRadius: 8,
              border: "2px solid rgba(255,255,255,0.2)",
              background: "rgba(255,255,255,0.05)",
              fontSize: 22,
              color: "#E0E0E0",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              letterSpacing: 4,
              textTransform: "uppercase" as const,
            }}
          >
            DermaMedicum &middot; Bonn
          </div>
        </div>
      </div>
    </div>
  );
};
