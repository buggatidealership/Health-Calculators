import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
import { BRAND, FONTS, LOGO, SAFE, SPEC } from "./derma-brand";

// DERMAMEDICUM TIMELINE: Hautkrebsvorsorge (skin cancer screening)
// Horizontal timeline pans through ages. Urgency builds through color + size.

export const DM_Timeline: React.FC = () => {
  const frame = useCurrentFrame();

  const fadeIn = (s: number, d = 12) => ({
    opacity: interpolate(frame, [s, s + d], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }),
    transform: `translateY(${interpolate(frame, [s, s + d], [20, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.cubic),
    })}px)`,
  });

  // Timeline stops
  const stops = [
    { age: "20", label: "Erste Muttermale beobachten", color: BRAND.sage, size: 28, frameStart: 80 },
    { age: "30", label: "Alle 2 Jahre zur Vorsorge", color: BRAND.teal, size: 36, frameStart: 140 },
    { age: "40", label: "Jahrliche Ganzkorperuntersuchung", color: BRAND.warmBrown, size: 44, frameStart: 200 },
    { age: "50+", label: "Aktinische Keratosen erkennen", color: BRAND.mauve, size: 54, frameStart: 250 },
  ];

  // Scene 1 (0-60): Title card
  const titleOpacity = interpolate(frame, [0, 10, 50, 60], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Scene 2 (60-300): Timeline
  const timelineOpacity = interpolate(frame, [60, 72], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Camera pan: timeline scrolls left as we progress
  const panX = interpolate(frame, [60, 300], [200, -1800], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.quad),
  });

  // Background color shift: deepNavy -> warmer as urgency builds
  const bgR = interpolate(frame, [60, 300], [26, 50], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const bgG = interpolate(frame, [60, 300], [39, 30], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const bgB = interpolate(frame, [60, 300], [68, 48], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Scene 3 (300-360): Compression + final text
  const compressionOpacity = interpolate(frame, [295, 310], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const timelineFadeOut = interpolate(frame, [295, 310], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Scene 4 (360-420): Logo card
  const logoOpacity = interpolate(frame, [360, 372], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const preFinalFade = interpolate(frame, [350, 362], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Connecting line draw progress
  const lineProgress = interpolate(frame, [90, 280], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  return (
    <div
      style={{
        width: SPEC.width,
        height: SPEC.height,
        background: BRAND.deepNavy,
        overflow: "hidden",
        position: "relative",
        fontFamily: FONTS.body,
      }}
    >
      {/* ═══ SCENE 1: TITLE CARD ═══ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: titleOpacity,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: `${SAFE.top}px ${SAFE.right}px ${SAFE.bottom}px ${SAFE.left}px`,
        }}
      >
        <div
          style={{
            ...fadeIn(5, 14),
            fontSize: 80,
            color: BRAND.cream,
            fontFamily: FONTS.heading,
            fontWeight: 700,
            textAlign: "center" as const,
            lineHeight: 1.2,
          }}
        >
          Hautkrebsvorsorge
        </div>
        <div
          style={{
            ...fadeIn(18, 14),
            fontSize: 34,
            color: BRAND.lightGray,
            textAlign: "center" as const,
            lineHeight: 1.5,
            marginTop: 32,
            maxWidth: 800,
          }}
        >
          Was Ihr Hautarzt sehen kann, bevor Sie es spuren
        </div>
      </div>

      {/* ═══ SCENE 2: TIMELINE ═══ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `rgb(${Math.round(bgR)}, ${Math.round(bgG)}, ${Math.round(bgB)})`,
          opacity: frame >= 60 && frame < 360 ? timelineOpacity : 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: timelineFadeOut,
          }}
        >
          {/* Timeline container — pans horizontally */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 3200,
              height: "100%",
              transform: `translateX(${panX}px)`,
            }}
          >
            {/* Connecting line */}
            <div
              style={{
                position: "absolute",
                top: 960,
                left: 300,
                width: lineProgress * 2200,
                height: 3,
                background: `linear-gradient(90deg, ${BRAND.lightGray}66, ${BRAND.lightGray})`,
              }}
            />

            {/* Timeline stops */}
            {stops.map((stop, i) => {
              const x = 300 + i * 700;
              const arrived = frame >= stop.frameStart;
              const dotScale = arrived
                ? interpolate(
                    frame,
                    [stop.frameStart, stop.frameStart + 15],
                    [0, 1],
                    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.back(1.5)) }
                  )
                : 0;
              const textOp = arrived
                ? interpolate(
                    frame,
                    [stop.frameStart + 5, stop.frameStart + 18],
                    [0, 1],
                    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
                  )
                : 0;
              const textY = arrived
                ? interpolate(
                    frame,
                    [stop.frameStart + 5, stop.frameStart + 18],
                    [30, 0],
                    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) }
                  )
                : 30;

              // Pulse for the last dot (50+)
              const isPulsing = i === 3 && arrived;
              const pulseScale = isPulsing
                ? 1 + 0.08 * Math.sin((frame - stop.frameStart) * 0.12)
                : 1;

              return (
                <div
                  key={stop.age}
                  style={{
                    position: "absolute",
                    left: x,
                    top: 860,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: 500,
                    transform: "translateX(-250px)",
                  }}
                >
                  {/* Age label above dot */}
                  <div
                    style={{
                      fontSize: 48,
                      fontWeight: 700,
                      color: stop.color,
                      fontFamily: FONTS.heading,
                      opacity: textOp,
                      transform: `translateY(${textY}px)`,
                      marginBottom: 20,
                    }}
                  >
                    {stop.age}
                  </div>

                  {/* Dot */}
                  <div
                    style={{
                      width: stop.size,
                      height: stop.size,
                      borderRadius: "50%",
                      background: stop.color,
                      transform: `scale(${dotScale * pulseScale})`,
                      boxShadow: `0 0 ${stop.size * 0.6}px ${stop.color}66`,
                    }}
                  />

                  {/* Description below dot */}
                  <div
                    style={{
                      fontSize: 34,
                      color: BRAND.cream,
                      textAlign: "center" as const,
                      lineHeight: 1.4,
                      marginTop: 28,
                      opacity: textOp,
                      transform: `translateY(${textY}px)`,
                      maxWidth: 420,
                    }}
                  >
                    {stop.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ═══ SCENE 3: COMPRESSION + FINAL TEXT ═══ */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: `${SAFE.top}px ${SAFE.right}px ${SAFE.bottom}px ${SAFE.left}px`,
            opacity: compressionOpacity * preFinalFade,
          }}
        >
          {/* Compressed mini-timeline */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
              marginBottom: 60,
              ...fadeIn(302, 12),
            }}
          >
            {stops.map((stop) => (
              <React.Fragment key={stop.age}>
                <div
                  style={{
                    width: stop.size * 0.5,
                    height: stop.size * 0.5,
                    borderRadius: "50%",
                    background: stop.color,
                  }}
                />
                <div
                  style={{
                    width: 40,
                    height: 2,
                    background: BRAND.lightGray + "44",
                  }}
                />
              </React.Fragment>
            ))}
          </div>

          <div
            style={{
              ...fadeIn(310, 16),
              fontSize: 50,
              color: BRAND.cream,
              fontFamily: FONTS.heading,
              textAlign: "center" as const,
              lineHeight: 1.4,
              maxWidth: 820,
            }}
          >
            Videoauflichtmikroskopie erkennt, was das blosse Auge ubersieht.
          </div>

          <div
            style={{
              ...fadeIn(330, 10),
              fontSize: 28,
              color: BRAND.midGray,
              marginTop: 24,
              fontStyle: "italic" as const,
            }}
          >
            Vectra WB360
          </div>
        </div>
      </div>

      {/* ═══ SCENE 4: LOGO CARD ═══ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: BRAND.cream,
          opacity: logoOpacity,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 40,
        }}
      >
        <Img
          src={staticFile(LOGO.dark)}
          style={{
            width: 500,
            objectFit: "contain" as const,
            ...fadeIn(368, 14),
          }}
        />
        <div
          style={{
            ...fadeIn(380, 12),
            fontSize: 30,
            color: BRAND.navy,
            fontFamily: FONTS.body,
            letterSpacing: 6,
            textTransform: "uppercase" as const,
          }}
        >
          Bonn
        </div>
      </div>
    </div>
  );
};
