import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
import { BRAND, FONTS, LOGO, SAFE, SPEC } from "./derma-brand";

// DERMAMEDICUM CARDSTACK: PRP (Regen Lab) Myth-Buster
// 3 cards drop, flip, slide away. End card: "3 Mythen. 3 Korrekturen."
// 390 frames (13s at 30fps), 1080x1920

const MYTHS = [
  {
    front: "PRP ist nur ein Marketing-Trend.",
    back: "Randomisierte Studien: PRP-behandelte Haut zeigte signifikant bessere Textur als Kontrolle nach 6 Monaten.",
    dropStart: 0,
    flipStart: 80,
    slideStart: 130,
  },
  {
    front: "Das Vampire Facial ist gef\u00E4hrlich.",
    back: "PRP nutzt k\u00F6rpereigenes Blut. Geschlossenes Regen-Lab-System minimiert Kontaminationsrisiko.",
    dropStart: 140,
    flipStart: 195,
    slideStart: 235,
  },
  {
    front: "Ergebnisse sind sofort sichtbar.",
    back: "Kollagenerneuerung braucht Zeit. Sichtbare Verbesserung nach 4\u20136 Wochen. Optimale Ergebnisse nach 3 Sitzungen.",
    dropStart: 245,
    flipStart: 295,
    slideStart: 330,
  },
];

const STACK_POSITIONS = [
  { x: SAFE.left + 40, y: SAFE.top + 20, scale: 0.32, rotate: -4 },
  { x: SAFE.left + 280, y: SAFE.top + 20, scale: 0.32, rotate: 2 },
  { x: SAFE.left + 160, y: SAFE.top + 220, scale: 0.32, rotate: -1 },
];

const CARD_W = 900;
const CARD_H = 560;

const MythCard: React.FC<{
  myth: (typeof MYTHS)[0];
  index: number;
  frame: number;
}> = ({ myth, index, frame }) => {
  const { dropStart, flipStart, slideStart } = myth;
  const isSlid = frame >= slideStart + 20;

  const clampOpt = {
    extrapolateLeft: "clamp" as const,
    extrapolateRight: "clamp" as const,
  };

  // Drop animation
  const dropY = interpolate(frame, [dropStart, dropStart + 20], [-600, 0], {
    ...clampOpt,
    easing: Easing.out(Easing.back(1.2)),
  });
  const dropRotation = interpolate(frame, [dropStart, dropStart + 20], [12, 0], {
    ...clampOpt,
    easing: Easing.out(Easing.cubic),
  });
  const dropOpacity = interpolate(frame, [dropStart, dropStart + 5], [0, 1], clampOpt);

  // Flip animation
  const flipDeg = interpolate(frame, [flipStart, flipStart + 24], [0, 180], {
    ...clampOpt,
    easing: Easing.inOut(Easing.cubic),
  });

  // Slide to stack position
  const sp = STACK_POSITIONS[index];
  const centerX = (SPEC.width - CARD_W) / 2;
  const centerY = (SPEC.height - CARD_H) / 2 - 60;

  const slideX = interpolate(frame, [slideStart, slideStart + 20], [centerX, sp.x], {
    ...clampOpt,
    easing: Easing.inOut(Easing.cubic),
  });
  const slideY = interpolate(frame, [slideStart, slideStart + 20], [centerY, sp.y], {
    ...clampOpt,
    easing: Easing.inOut(Easing.cubic),
  });
  const slideScale = interpolate(frame, [slideStart, slideStart + 20], [1, sp.scale], {
    ...clampOpt,
    easing: Easing.inOut(Easing.cubic),
  });
  const slideRotate = interpolate(frame, [slideStart, slideStart + 20], [0, sp.rotate], {
    ...clampOpt,
    easing: Easing.inOut(Easing.cubic),
  });

  const posX = frame < slideStart ? centerX : slideX;
  const posY = frame < slideStart ? centerY + dropY : slideY;
  const currentScale = frame < slideStart ? 1 : slideScale;
  const currentRotate = frame < slideStart ? dropRotation : slideRotate;

  // Hide during end card
  const endFade = interpolate(frame, [345, 355], [1, 0], clampOpt);

  if (frame < dropStart) return null;

  return (
    <div style={{
      position: "absolute",
      left: posX, top: posY,
      width: CARD_W, height: CARD_H,
      opacity: dropOpacity * endFade,
      transform: `rotate(${currentRotate}deg) scale(${currentScale})`,
      transformOrigin: "center center",
      perspective: 1200,
      zIndex: isSlid ? index : 10 + index,
    }}>
      <div style={{
        width: "100%", height: "100%",
        position: "relative",
        transformStyle: "preserve-3d",
        transform: `rotateY(${flipDeg}deg)`,
      }}>
        {/* FRONT — myth */}
        <div style={{
          position: "absolute", inset: 0,
          backfaceVisibility: "hidden",
          background: "#FCE4EC",
          borderRadius: 32,
          display: "flex", alignItems: "center",
          justifyContent: "center",
          padding: "40px 50px",
          boxShadow: "0 12px 40px rgba(0,0,0,0.18)",
        }}>
          <div style={{
            fontSize: 44, color: BRAND.navy,
            fontFamily: FONTS.heading,
            fontStyle: "italic",
            textAlign: "center",
            lineHeight: 1.4, fontWeight: 400,
          }}>
            {myth.front}
          </div>
        </div>

        {/* BACK — truth */}
        <div style={{
          position: "absolute", inset: 0,
          backfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
          background: BRAND.deepNavy,
          borderRadius: 32,
          display: "flex", alignItems: "center",
          justifyContent: "center",
          padding: "40px 50px",
          boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
        }}>
          <div style={{
            fontSize: 38, color: BRAND.cream,
            fontFamily: FONTS.body,
            textAlign: "center",
            lineHeight: 1.45, fontWeight: 500,
          }}>
            {myth.back}
          </div>
        </div>
      </div>
    </div>
  );
};

export const DM_PRP_CardStack: React.FC = () => {
  const frame = useCurrentFrame();

  const clampOpt = {
    extrapolateLeft: "clamp" as const,
    extrapolateRight: "clamp" as const,
  };

  // End card fade in
  const endOpacity = interpolate(frame, [350, 363], [0, 1], clampOpt);
  const endScale = interpolate(frame, [350, 363], [0.9, 1], {
    ...clampOpt,
    easing: Easing.out(Easing.cubic),
  });

  // Logo fade
  const logoOpacity = interpolate(frame, [365, 377], [0, 1], clampOpt);

  return (
    <div style={{
      width: SPEC.width,
      height: SPEC.height,
      background: BRAND.cream,
      overflow: "hidden",
      position: "relative",
      fontFamily: FONTS.body,
    }}>
      {/* Subtle texture overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 50% 30%, rgba(163,59,118,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Cards */}
      {MYTHS.map((myth, i) => (
        <MythCard
          key={i}
          myth={myth}
          index={i}
          frame={frame}
        />
      ))}

      {/* End card (350-390) */}
      {frame >= 350 && (
        <div style={{
          position: "absolute", inset: 0,
          background: BRAND.cream,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          padding: `${SAFE.top}px ${SAFE.right}px ${SAFE.bottom}px ${SAFE.left}px`,
          opacity: endOpacity,
          transform: `scale(${endScale})`,
          zIndex: 20,
        }}>
          <div style={{
            fontSize: 74, color: BRAND.deepNavy,
            fontFamily: FONTS.heading,
            textAlign: "center",
            lineHeight: 1.3, fontWeight: 700,
            marginBottom: 16,
          }}>
            3 Mythen.
          </div>
          <div style={{
            fontSize: 74, color: BRAND.mauve,
            fontFamily: FONTS.heading,
            textAlign: "center",
            lineHeight: 1.3, fontWeight: 700,
            marginBottom: 60,
          }}>
            3 Korrekturen.
          </div>
          <div style={{ opacity: logoOpacity }}>
            <Img
              src={staticFile(LOGO.dark)}
              style={{ width: 340, objectFit: "contain" }}
            />
          </div>
          <div style={{
            opacity: logoOpacity,
            marginTop: 24,
            fontSize: 28, color: BRAND.warmBrown,
            letterSpacing: 6, textTransform: "uppercase",
          }}>
            DERMAMEDICUM {"\u00B7"} BONN
          </div>
        </div>
      )}
    </div>
  );
};
