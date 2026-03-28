import React from "react";
import { useCurrentFrame, interpolate, Easing, spring } from "remotion";
import { FONTS, SPEC } from "./derma-brand";

// DM_Harmonyca_Scale: "Was wiegt mehr?"
// Left pan: multiple HA appointments pile up. Right pan: ONE Harmonyca session tips the scale.
// 1080x1920, 30fps, 390 frames (~13s)

const LEFT_PILLS = [
  "Hyaluron-Sitzung 1",
  "Hyaluron-Sitzung 2",
  "Kollagen-Booster",
  "Nachspritzung",
  "Auffrischung",
];

const EVIDENCE = "1 Harmonyca-Sitzung:\nSofort Volumen +\nKollagenstimulation";

const clamp = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };

export const DM_Harmonyca_Scale: React.FC = () => {
  const frame = useCurrentFrame();

  // --- SCALE PHYSICS ---
  const pillsLanded = LEFT_PILLS.reduce((count, _, i) => {
    const dropFrame = 50 + i * 18;
    return frame >= dropFrame + 12 ? count + 1 : count;
  }, 0);

  const leftWeight = interpolate(pillsLanded, [0, 5], [0, 10], clamp);

  const evidenceDropFrame = 170;
  const evidenceLanded = frame >= evidenceDropFrame + 15;

  const evidenceSpring = spring({
    frame: frame - (evidenceDropFrame + 15),
    fps: 30,
    config: { damping: 8, stiffness: 80, mass: 1.2 },
  });

  const beamAngle = evidenceLanded
    ? interpolate(evidenceSpring, [0, 1], [-leftWeight, 24])
    : -leftWeight;

  // --- PILL DROP ---
  const renderPill = (text: string, index: number) => {
    const dropStart = 50 + index * 18;
    if (frame < dropStart) return null;

    const dropProgress = interpolate(frame, [dropStart, dropStart + 12], [0, 1], clamp);
    const bounceY = interpolate(
      dropProgress,
      [0, 0.6, 0.8, 0.9, 1],
      [-120, 0, -15, 0, 0],
      clamp
    );
    const pillOpacity = interpolate(frame, [dropStart, dropStart + 4], [0, 1], clamp);

    // Scatter when evidence lands
    let scatterX = 0;
    let scatterY = 0;
    let scatterRotate = 0;
    let scatterOpacity = 1;
    if (evidenceLanded) {
      const scatterDelay = index * 2;
      const scatterStart = evidenceDropFrame + 15 + scatterDelay;
      const scatterProgress = interpolate(frame, [scatterStart, scatterStart + 25], [0, 1], clamp);
      const angle = -25 - index * 18;
      const radians = (angle * Math.PI) / 180;
      scatterX = Math.cos(radians) * scatterProgress * (350 + index * 50);
      scatterY = Math.sin(radians) * scatterProgress * (250 + index * 35) + scatterProgress * scatterProgress * 500;
      scatterRotate = scatterProgress * (100 + index * 25) * (index % 2 === 0 ? 1 : -1);
      scatterOpacity = interpolate(scatterProgress, [0.5, 1], [1, 0], clamp);
    }

    const baseX = -80;
    const baseY = -index * 52;

    return (
      <div
        key={index}
        style={{
          position: "absolute",
          left: 540 + baseX + scatterX,
          top: 960 + baseY + bounceY + scatterY,
          transform: `rotate(${scatterRotate}deg)`,
          opacity: pillOpacity * scatterOpacity,
          padding: "12px 26px",
          borderRadius: 30,
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.15)",
          fontSize: 22,
          color: "#E0E0E0",
          fontFamily: FONTS.body,
          fontWeight: 500,
          whiteSpace: "nowrap" as const,
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

    const glowOpacity = evidenceLanded
      ? interpolate(evidenceSpring, [0, 0.5, 1], [0, 0.6, 0.3], clamp)
      : 0;

    return (
      <div
        style={{
          position: "absolute",
          right: 100,
          top: 900 + cardY,
          opacity: cardOpacity,
          transform: `scale(${cardScale})`,
          padding: "24px 32px",
          borderRadius: 12,
          background: "rgba(255,255,255,0.06)",
          border: "2px solid #4ade80",
          boxShadow: `0 0 ${30 * glowOpacity}px rgba(74, 222, 128, ${glowOpacity * 0.5})`,
          fontSize: 24,
          color: "#fff",
          fontFamily: FONTS.body,
          fontWeight: 600,
          maxWidth: 300,
          textAlign: "center" as const,
          lineHeight: 1.5,
          whiteSpace: "pre-line" as const,
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
  const scaleOpacity = interpolate(frame, [10, 40], [0, 1], clamp);

  const rad = (beamAngle * Math.PI) / 180;
  const leftPanX = pivotX - Math.cos(rad) * beamLength;
  const leftPanY = pivotY + Math.sin(rad) * beamLength;
  const rightPanX = pivotX + Math.cos(rad) * beamLength;
  const rightPanY = pivotY - Math.sin(rad) * beamLength;

  // --- TITLE ---
  const titleOpacity = interpolate(frame, [5, 30], [0, 1], clamp);
  const titleY = interpolate(frame, [5, 30], [40, 0], { ...clamp, easing: Easing.out(Easing.cubic) });

  // --- POST-TIP TEXT (Phase 4) ---
  const postTipOpacity = interpolate(frame, [220, 245], [0, 1], clamp);
  const postTipY = interpolate(frame, [220, 245], [30, 0], { ...clamp, easing: Easing.out(Easing.cubic) });

  // --- STAT ---
  const statOpacity = interpolate(frame, [260, 285], [0, 1], clamp);
  const statY = interpolate(frame, [260, 285], [20, 0], { ...clamp, easing: Easing.out(Easing.cubic) });

  // --- CTA ---
  const ctaOpacity = interpolate(frame, [320, 345], [0, 1], clamp);
  const ctaY = interpolate(frame, [320, 345], [20, 0], { ...clamp, easing: Easing.out(Easing.cubic) });

  // Impact flash
  const flashOpacity = interpolate(
    frame,
    [evidenceDropFrame + 14, evidenceDropFrame + 16, evidenceDropFrame + 22],
    [0, 0.15, 0],
    clamp
  );

  // Screen shake
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
        width: SPEC.width,
        height: SPEC.height,
        background: "#0d1117",
        overflow: "hidden",
        position: "relative",
        fontFamily: FONTS.body,
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
              fontFamily: FONTS.heading,
              letterSpacing: 1,
            }}
          >
            Was wiegt mehr?
          </div>
        </div>

        {/* SCALE SVG */}
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
          {/* Pivot stand */}
          <line x1={pivotX} y1={pivotY + 120} x2={pivotX} y2={pivotY} stroke="#E0E0E0" strokeWidth={3} strokeLinecap="round" />
          {/* Base */}
          <line x1={pivotX - 80} y1={pivotY + 120} x2={pivotX + 80} y2={pivotY + 120} stroke="#E0E0E0" strokeWidth={3} strokeLinecap="round" />
          {/* Pivot triangle */}
          <polygon points={`${pivotX},${pivotY - 10} ${pivotX - 12},${pivotY + 6} ${pivotX + 12},${pivotY + 6}`} fill="#E0E0E0" />
          {/* Beam */}
          <line x1={leftPanX} y1={leftPanY} x2={rightPanX} y2={rightPanY} stroke="#E0E0E0" strokeWidth={3} strokeLinecap="round" />
          {/* Left pan */}
          <line x1={leftPanX} y1={leftPanY} x2={leftPanX - 50} y2={leftPanY + 70} stroke="#E0E0E0" strokeWidth={1.5} />
          <line x1={leftPanX} y1={leftPanY} x2={leftPanX + 50} y2={leftPanY + 70} stroke="#E0E0E0" strokeWidth={1.5} />
          <ellipse cx={leftPanX} cy={leftPanY + 75} rx={65} ry={12} fill="none" stroke="#E0E0E0" strokeWidth={2} />
          {/* Right pan */}
          <line x1={rightPanX} y1={rightPanY} x2={rightPanX - 50} y2={rightPanY + 70} stroke="#E0E0E0" strokeWidth={1.5} />
          <line x1={rightPanX} y1={rightPanY} x2={rightPanX + 50} y2={rightPanY + 70} stroke="#E0E0E0" strokeWidth={1.5} />
          <ellipse cx={rightPanX} cy={rightPanY + 75} rx={65} ry={12} fill="none" stroke="#E0E0E0" strokeWidth={2} />
          {/* Labels */}
          <text x={leftPanX} y={leftPanY + 110} textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize={18} fontFamily={FONTS.body}>
            Termine
          </text>
          <text x={rightPanX} y={rightPanY + 110} textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize={18} fontFamily={FONTS.body}>
            Harmonyca
          </text>
        </svg>

        {/* PILLS */}
        <div style={{ position: "absolute", top: 0, left: 0, width: 1080, height: 1920 }}>
          {LEFT_PILLS.map((text, i) => renderPill(text, i))}
        </div>

        {/* EVIDENCE CARD */}
        {renderEvidenceCard()}

        {/* POST-TIP TEXT */}
        <div
          style={{
            position: "absolute",
            bottom: 620,
            width: "100%",
            textAlign: "center",
            opacity: postTipOpacity,
            transform: `translateY(${postTipY}px)`,
            padding: "0 70px",
          }}
        >
          <div
            style={{
              fontSize: 34,
              color: "#E0E0E0",
              fontFamily: FONTS.body,
              fontWeight: 400,
              lineHeight: 1.6,
              letterSpacing: 0.3,
            }}
          >
            HA fur sofortiges Volumen.{"\n"}
            CaHA fur langfristige Kollagenproduktion.{"\n"}
            Beides in einer Spritze.
          </div>
        </div>

        {/* STAT */}
        <div
          style={{
            position: "absolute",
            bottom: 500,
            width: "100%",
            textAlign: "center",
            opacity: statOpacity,
            transform: `translateY(${statY}px)`,
            padding: "0 80px",
          }}
        >
          <div
            style={{
              fontSize: 28,
              color: "#4ade80",
              fontFamily: FONTS.body,
              fontWeight: 600,
              lineHeight: 1.5,
            }}
          >
            Ergebnisse bis zu 24 Monate — 2x langer als klassische HA-Filler.
          </div>
        </div>

        {/* CTA */}
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
              fontFamily: FONTS.heading,
              marginBottom: 24,
              letterSpacing: 1,
              textAlign: "center",
            }}
          >
            Zwei Wirkungen. Eine Behandlung.
          </div>
          <div
            style={{
              padding: "14px 48px",
              borderRadius: 8,
              border: "2px solid rgba(255,255,255,0.2)",
              background: "rgba(255,255,255,0.05)",
              fontSize: 22,
              color: "#E0E0E0",
              fontFamily: FONTS.body,
              fontWeight: 600,
              letterSpacing: 4,
              textTransform: "uppercase" as const,
            }}
          >
            DERMAMEDICUM &middot; BONN
          </div>
        </div>
      </div>
    </div>
  );
};
