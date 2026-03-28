import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
import { BRAND, FONTS, LOGO, SAFE, SPEC } from "./derma-brand";

// DM_Batch1_AviClear_C — "Treatment Journey"
// Timeline/process visualization showing the 3-session AviClear protocol.
// Animated vertical timeline with drawing teal line and staggered nodes.
// Clean, premium feel. Deep navy background.
// 360 frames (12s at 30fps), 1080x1920

export const DM_Batch1_AviClear_C: React.FC = () => {
  const frame = useCurrentFrame();

  const fadeIn = (s: number, d = 12) => ({
    opacity: interpolate(frame, [s, s + d], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }),
    transform: `translateY(${interpolate(frame, [s, s + d], [24, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.cubic),
    })}px)`,
  });

  const vis = (s: number, e: number) => {
    if (frame < s || frame > e + 8) return 0;
    return Math.min(
      interpolate(frame, [s, s + 6], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      }),
      interpolate(frame, [e, e + 8], [1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    );
  };

  // --- Timeline layout ---
  const timelineX = 200; // X position of the vertical line
  const timelineTop = SAFE.top + 260;
  const nodeSpacing = 240;
  const nodeR = 14;

  const nodes = [
    {
      title: "Sitzung 1",
      desc: "30 Minuten \u00B7 AviCool\u2122 K\u00FChlung",
      frameStart: 85,
    },
    {
      title: "Sitzung 2",
      desc: "Talgdr\u00FCsen reagieren \u00B7 Sebumproduktion sinkt",
      frameStart: 130,
    },
    {
      title: "Sitzung 3",
      desc: "Langfristige Regulierung der Talgdr\u00FCsen",
      frameStart: 175,
    },
  ];

  // Vertical line draws down progressively
  const lineDrawEnd = timelineTop + nodeSpacing * 2 + 40;
  const lineY = interpolate(
    frame,
    [80, 100, 140, 160, 195, 215],
    [
      timelineTop - 20,
      timelineTop + nodeSpacing * 0.6,
      timelineTop + nodeSpacing * 0.6,
      timelineTop + nodeSpacing * 1.6,
      timelineTop + nodeSpacing * 1.6,
      lineDrawEnd,
    ],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.inOut(Easing.cubic),
    }
  );

  // --- Scene 3: Closing ---
  const scene3Opacity = vis(252, 360);

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
      {/* ═══ SCENE 1: Hook (0-70) ═══ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: vis(0, 68),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: `${SAFE.top}px ${SAFE.right + 20}px ${SAFE.bottom}px ${SAFE.left + 20}px`,
        }}
      >
        <div
          style={{
            ...fadeIn(5, 16),
            fontSize: 62,
            fontWeight: 700,
            color: BRAND.cream,
            fontFamily: FONTS.heading,
            textAlign: "center",
            lineHeight: 1.25,
          }}
        >
          3 Sitzungen.
        </div>
        <div
          style={{
            ...fadeIn(18, 14),
            fontSize: 48,
            fontWeight: 600,
            color: BRAND.teal,
            fontFamily: FONTS.heading,
            textAlign: "center",
            marginTop: 16,
          }}
        >
          Keine Medikamente.
        </div>
        <div
          style={{
            ...fadeIn(35, 12),
            width: 60,
            height: 2,
            background: `${BRAND.teal}88`,
            marginTop: 40,
          }}
        />
      </div>

      {/* ═══ SCENE 2: Timeline (70-250) ═══ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: vis(70, 248),
        }}
      >
        {/* Section title */}
        <div
          style={{
            ...fadeIn(75, 14),
            position: "absolute",
            top: SAFE.top + 60,
            left: SAFE.left + 20,
            right: SAFE.right + 20,
            textAlign: "center",
            fontSize: 38,
            fontWeight: 600,
            color: BRAND.cream,
            fontFamily: FONTS.heading,
          }}
        >
          Ihr Behandlungsplan
        </div>
        <div
          style={{
            ...fadeIn(80, 12),
            position: "absolute",
            top: SAFE.top + 115,
            left: SAFE.left + 20,
            right: SAFE.right + 20,
            textAlign: "center",
            fontSize: 24,
            color: BRAND.midGray,
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          AviClear Protokoll
        </div>

        {/* Vertical timeline line (draws down) */}
        <svg
          style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
          width={SPEC.width}
          height={SPEC.height}
        >
          {/* Glow behind line */}
          <line
            x1={timelineX}
            y1={timelineTop - 20}
            x2={timelineX}
            y2={lineY}
            stroke={BRAND.teal}
            strokeWidth={8}
            opacity={0.12}
            strokeLinecap="round"
          />
          {/* Main line */}
          <line
            x1={timelineX}
            y1={timelineTop - 20}
            x2={timelineX}
            y2={lineY}
            stroke={BRAND.teal}
            strokeWidth={2.5}
            opacity={0.8}
            strokeLinecap="round"
          />
        </svg>

        {/* Timeline nodes */}
        {nodes.map((node, i) => {
          const nodeY = timelineTop + i * nodeSpacing;
          const nodeOpacity = interpolate(
            frame,
            [node.frameStart, node.frameStart + 12],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          );
          const nodeScale = interpolate(
            frame,
            [node.frameStart, node.frameStart + 14],
            [0, 1],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.back(1.3)),
            }
          );
          const textSlide = interpolate(
            frame,
            [node.frameStart + 4, node.frameStart + 16],
            [30, 0],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }
          );
          const textOpacity = interpolate(
            frame,
            [node.frameStart + 4, node.frameStart + 16],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          );

          // Pulse on appearance
          const dotPulse =
            frame >= node.frameStart + 12 && frame <= node.frameStart + 40
              ? 1 + Math.sin((frame - node.frameStart - 12) * 0.25) * 0.15
              : 1;

          return (
            <React.Fragment key={i}>
              {/* Outer glow ring */}
              <div
                style={{
                  position: "absolute",
                  left: timelineX - 22,
                  top: nodeY - 22,
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  border: `1.5px solid ${BRAND.teal}44`,
                  opacity: nodeOpacity,
                  transform: `scale(${dotPulse})`,
                  pointerEvents: "none",
                }}
              />
              {/* Node dot */}
              <div
                style={{
                  position: "absolute",
                  left: timelineX - nodeR,
                  top: nodeY - nodeR,
                  width: nodeR * 2,
                  height: nodeR * 2,
                  borderRadius: "50%",
                  background: BRAND.teal,
                  opacity: nodeOpacity,
                  transform: `scale(${nodeScale})`,
                  boxShadow: `0 0 16px 4px ${BRAND.teal}44`,
                }}
              />
              {/* Session number + description */}
              <div
                style={{
                  position: "absolute",
                  left: timelineX + 44,
                  top: nodeY - 24,
                  right: SAFE.right + 30,
                  opacity: textOpacity,
                  transform: `translateX(${textSlide}px)`,
                }}
              >
                <div
                  style={{
                    fontSize: 32,
                    fontWeight: 700,
                    color: BRAND.cream,
                    fontFamily: FONTS.heading,
                    marginBottom: 8,
                  }}
                >
                  {node.title}
                </div>
                <div
                  style={{
                    fontSize: 24,
                    color: BRAND.sage,
                    lineHeight: 1.45,
                  }}
                >
                  {node.desc}
                </div>
              </div>
            </React.Fragment>
          );
        })}

        {/* Bottom note */}
        <div
          style={{
            ...fadeIn(210, 16),
            position: "absolute",
            bottom: SAFE.bottom + 60,
            left: SAFE.left + 20,
            right: SAFE.right + 20,
            textAlign: "center",
            fontSize: 26,
            color: BRAND.midGray,
            fontStyle: "italic",
            lineHeight: 1.5,
          }}
        >
          {"97% hatten nach 2 Jahren"}{"\n"}{"weniger entzündliche Läsionen."}
        </div>
      </div>

      {/* ═══ SCENE 3: Closing + CTA (250-360) ═══ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: BRAND.deepNavy,
          opacity: scene3Opacity,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 36,
          padding: `${SAFE.top}px ${SAFE.right + 20}px ${SAFE.bottom}px ${SAFE.left + 20}px`,
        }}
      >
        <div
          style={{
            ...fadeIn(258, 16),
            fontSize: 44,
            fontWeight: 700,
            color: BRAND.cream,
            fontFamily: FONTS.heading,
            textAlign: "center",
            lineHeight: 1.35,
            maxWidth: 750,
          }}
        >
          Die Ursache behandeln{"\n"}\u2014 nicht die Symptome.
        </div>

        <div
          style={{
            ...fadeIn(280, 12),
            width: 80,
            height: 2,
            background: `${BRAND.teal}66`,
            marginTop: 8,
            marginBottom: 8,
          }}
        />

        <Img
          src={staticFile(LOGO.light)}
          style={{
            ...fadeIn(290, 16),
            width: 360,
            objectFit: "contain",
          }}
        />

        <div
          style={{
            ...fadeIn(310, 14),
            fontSize: 32,
            fontWeight: 600,
            color: BRAND.cream,
            fontFamily: FONTS.heading,
          }}
        >
          Beratungstermin vereinbaren
        </div>

        <div
          style={{
            ...fadeIn(325, 12),
            fontSize: 22,
            color: BRAND.midGray,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          {"DermaMedicum · Bonn"}
        </div>
      </div>
    </div>
  );
};
