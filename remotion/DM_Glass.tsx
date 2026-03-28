import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
import { BRAND, FONTS, LOGO, SAFE, SPEC } from "./derma-brand";

// DERMAMEDICUM GLASS — Fruchtsäure Peeling (AHA)
// Frosted glass cards over animated gradient. Premium/Apple aesthetic.
// Freeform: deep purple → midnight blue palette.

export const DM_Glass: React.FC = () => {
  const frame = useCurrentFrame();

  // --- Helpers ---
  const clamp = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };

  const fadeIn = (start: number, dur = 15) => ({
    opacity: interpolate(frame, [start, start + dur], [0, 1], clamp),
  });

  const slideUp = (start: number, dur = 20) => ({
    opacity: interpolate(frame, [start, start + dur], [0, 1], clamp),
    transform: `translateY(${interpolate(frame, [start, start + dur], [120, 0], { ...clamp, easing: Easing.out(Easing.cubic) })}px)`,
  });

  // Animated gradient hue shift (very slow)
  const gradientPhase = interpolate(frame, [0, 390], [0, 1], clamp);
  const purpleR = Math.round(26 + gradientPhase * 0);
  const purpleG = Math.round(10 + gradientPhase * 12);
  const purpleB = Math.round(46 + gradientPhase * 10);
  const blueR = Math.round(10 + gradientPhase * 5);
  const blueG = Math.round(22 + gradientPhase * 20);
  const blueB = Math.round(40 + gradientPhase * 30);
  const gradientBg = `linear-gradient(160deg, rgb(${purpleR},${purpleG},${purpleB}) 0%, rgb(${blueR},${blueG},${blueB}) 60%, rgb(${blueR + 10},${blueG + 15},${blueB + 20}) 100%)`;

  // --- Card data ---
  const cards = [
    { text: "Schritt 1: AHA-Saure lost abgestorbene Hautzellen", enterFrame: 10 },
    { text: "Schritt 2: Neue Zellschichten werden freigelegt", enterFrame: 100 },
    { text: "Schritt 3: Kollagensynthese wird angeregt \u2014 glattere, ebenmassige Haut", enterFrame: 190 },
  ];

  // --- Card positions per scene ---
  const getCardStyle = (index: number, enterFrame: number): React.CSSProperties => {
    // Card enters with slideUp
    const entryProgress = interpolate(frame, [enterFrame, enterFrame + 24], [0, 1], { ...clamp, easing: Easing.out(Easing.cubic) });
    const entryY = interpolate(frame, [enterFrame, enterFrame + 24], [200, 0], { ...clamp, easing: Easing.out(Easing.cubic) });
    const entryOpacity = entryProgress;

    // When next card enters, this card slides up and shrinks
    const nextEnter = index < 2 ? cards[index + 1].enterFrame : 999;
    const stackProgress = index < 2
      ? interpolate(frame, [nextEnter, nextEnter + 20], [0, 1], { ...clamp, easing: Easing.out(Easing.cubic) })
      : 0;

    // When third card enters, first card shrinks more
    const deepStack = index === 0 && frame >= cards[2].enterFrame
      ? interpolate(frame, [cards[2].enterFrame, cards[2].enterFrame + 20], [0, 1], { ...clamp, easing: Easing.out(Easing.cubic) })
      : 0;

    const scale = 1 - stackProgress * 0.06 - deepStack * 0.06;
    const yOffset = entryY - stackProgress * 180 - deepStack * 180;
    const opacity = index === 0 && deepStack > 0
      ? Math.max(0.4, 1 - deepStack * 0.4)
      : Math.max(0.6, 1 - stackProgress * 0.3);

    // Scene 4 exit (270+): all cards float up and fade
    const exitProgress = interpolate(frame, [270, 300], [0, 1], clamp);
    const exitY = exitProgress * -300;
    const exitOpacity = 1 - exitProgress;

    if (frame < enterFrame) return { opacity: 0, position: "absolute" as const };

    return {
      position: "absolute" as const,
      opacity: entryOpacity * opacity * exitOpacity,
      transform: `translateY(${yOffset + exitY}px) scale(${scale})`,
      transition: "none",
    };
  };

  // Glass card base style
  const glassCard: React.CSSProperties = {
    width: 1080 - SAFE.left - SAFE.right - 80,
    background: "rgba(255, 255, 255, 0.08)",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    borderRadius: 28,
    padding: "48px 44px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
  };

  // Scene 4: closing line
  const closingOpacity = interpolate(frame, [285, 300], [0, 1], clamp);
  const closingExit = interpolate(frame, [325, 340], [1, 0], clamp);

  // Scene 5: logo
  const logoOpacity = interpolate(frame, [335, 355], [0, 1], clamp);

  return (
    <div style={{
      width: SPEC.width,
      height: SPEC.height,
      background: gradientBg,
      overflow: "hidden",
      position: "relative",
      fontFamily: FONTS.body,
    }}>
      {/* Subtle gradient orbs for depth */}
      <div style={{
        position: "absolute",
        width: 600,
        height: 600,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(100, 60, 180, 0.25) 0%, transparent 70%)",
        top: 300,
        left: -100,
        filter: "blur(60px)",
        opacity: interpolate(frame, [0, 390], [0.6, 0.9], clamp),
      }} />
      <div style={{
        position: "absolute",
        width: 500,
        height: 500,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(40, 120, 160, 0.2) 0%, transparent 70%)",
        bottom: 400,
        right: -80,
        filter: "blur(50px)",
        opacity: interpolate(frame, [0, 390], [0.5, 0.8], clamp),
      }} />

      {/* Step number indicator */}
      {frame < 270 && (
        <div style={{
          position: "absolute",
          top: SAFE.top + 20,
          left: SAFE.left + 40,
          ...fadeIn(5),
        }}>
          <div style={{
            fontSize: 28,
            color: "rgba(255, 255, 255, 0.4)",
            letterSpacing: 6,
            textTransform: "uppercase",
            fontWeight: 500,
          }}>
            Fruchtsaure Peeling
          </div>
        </div>
      )}

      {/* Cards container */}
      <div style={{
        position: "absolute",
        top: SAFE.top + 100,
        left: SAFE.left + 40,
        right: SAFE.right + 40,
        bottom: SAFE.bottom + 40,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
        {cards.map((card, i) => (
          <div key={i} style={{
            ...getCardStyle(i, card.enterFrame),
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
          }}>
            <div style={glassCard}>
              {/* Step number accent */}
              <div style={{
                fontSize: 64,
                fontWeight: 200,
                color: "rgba(255, 255, 255, 0.12)",
                fontFamily: FONTS.heading,
                marginBottom: 16,
                lineHeight: 1,
              }}>
                0{i + 1}
              </div>
              <div style={{
                fontSize: 46,
                color: "#FFFFFF",
                fontWeight: 400,
                lineHeight: 1.45,
                letterSpacing: -0.3,
              }}>
                {card.text}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scene 4: Closing line */}
      {frame >= 270 && frame < 335 && (
        <div style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: `${SAFE.top}px ${SAFE.right + 40}px ${SAFE.bottom}px ${SAFE.left + 40}px`,
          opacity: closingOpacity * closingExit,
        }}>
          <div style={{
            textAlign: "center",
          }}>
            <div style={{
              width: interpolate(frame, [285, 305], [0, 400], { ...clamp, easing: Easing.out(Easing.cubic) }),
              height: 1,
              background: "rgba(255, 255, 255, 0.25)",
              margin: "0 auto 40px",
            }} />
            <div style={{
              fontSize: 48,
              color: "rgba(255, 255, 255, 0.9)",
              fontWeight: 300,
              lineHeight: 1.5,
              fontFamily: FONTS.heading,
              letterSpacing: 0.5,
              transform: `translateY(${interpolate(frame, [285, 305], [30, 0], { ...clamp, easing: Easing.out(Easing.cubic) })}px)`,
            }}>
              Professionelle Peelings —{"\n"}angepasst an Ihren Hauttyp
            </div>
          </div>
        </div>
      )}

      {/* Scene 5: Logo */}
      {frame >= 330 && (
        <div style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: logoOpacity,
        }}>
          <Img
            src={staticFile(LOGO.light)}
            style={{
              width: 380,
              objectFit: "contain",
            }}
          />
        </div>
      )}
    </div>
  );
};
