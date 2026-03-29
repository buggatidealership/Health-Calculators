import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
import { BRAND, FONTS, SAFE, SPEC } from "./derma-brand";

// B1_AviClear_C — "Behandlungsweg" (Treatment Journey)
// Vertical timeline with 3 session nodes, staggered reveal.
// 360 frames (12s at 30fps), 1080×1920

const CLAMP = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };
const easeOut = Easing.out(Easing.cubic);

export const B1_AviClear_C: React.FC = () => {
  const frame = useCurrentFrame();

  // --- Helpers ---
  const fadeUp = (start: number, dur = 14) => ({
    opacity: interpolate(frame, [start, start + dur], [0, 1], CLAMP),
    transform: `translateY(${interpolate(frame, [start, start + dur], [28, 0], {
      ...CLAMP,
      easing: easeOut,
    })}px)`,
  });

  const vis = (s: number, e: number, fi = 8, fo = 10) => {
    if (frame < s) return 0;
    if (frame > e + fo) return 0;
    return Math.min(
      interpolate(frame, [s, s + fi], [0, 1], CLAMP),
      interpolate(frame, [e, e + fo], [1, 0], CLAMP),
    );
  };

  // --- SCENE TIMING ---
  // Scene 1: Hook text (0–70)
  // Scene 2: Timeline draws, nodes appear staggered (55–260)
  // Scene 3: All visible + summary (230–290)
  // Scene 4: CTA (275–360)

  // === SCENE 1: Hook ===
  const hookOpacity = vis(0, 65);

  // === SCENE 2: Timeline ===
  const timelineOpacity = interpolate(frame, [55, 75], [0, 1], CLAMP);

  // Timeline vertical line draw
  const TIMELINE_X = 200;
  const TIMELINE_TOP = SAFE.top + 160;
  const TIMELINE_BOTTOM = SPEC.height - SAFE.bottom - 280;
  const TIMELINE_LENGTH = TIMELINE_BOTTOM - TIMELINE_TOP;

  const lineDraw = interpolate(frame, [60, 200], [0, 1], {
    ...CLAMP,
    easing: Easing.out(Easing.quad),
  });

  // Session nodes
  const sessions = [
    {
      num: 1,
      title: "Erste Sitzung",
      detail: "30 Minuten · Ganzgesicht",
      sub: "AviCool™ Kühlung für Komfort",
      y: TIMELINE_TOP + TIMELINE_LENGTH * 0.1,
      startFrame: 85,
    },
    {
      num: 2,
      title: "Zweite Sitzung",
      detail: "30 Minuten · nach 4 Wochen",
      sub: "Talgdrüsen reagieren auf Laser",
      y: TIMELINE_TOP + TIMELINE_LENGTH * 0.42,
      startFrame: 135,
    },
    {
      num: 3,
      title: "Dritte Sitzung",
      detail: "30 Minuten · nach 8 Wochen",
      sub: "Langfristige Talgregulation",
      y: TIMELINE_TOP + TIMELINE_LENGTH * 0.74,
      startFrame: 185,
    },
  ];

  // Node completion checkmark animation
  const checkProgress = (nodeStart: number) => {
    const checkFrame = nodeStart + 35;
    return interpolate(frame, [checkFrame, checkFrame + 12], [0, 1], {
      ...CLAMP,
      easing: easeOut,
    });
  };

  // === SCENE 3: Summary ===
  const summaryOpacity = vis(238, 280);

  // === SCENE 4: CTA ===
  const ctaOpacity = vis(275, 360);
  const ctaSlide = interpolate(frame, [275, 295], [35, 0], { ...CLAMP, easing: easeOut });

  // Background subtle pattern
  const patternOpacity = interpolate(frame, [55, 80], [0, 0.06], CLAMP);

  return (
    <div
      style={{
        width: SPEC.width,
        height: SPEC.height,
        backgroundColor: BRAND.cream,
        fontFamily: FONTS.body,
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Subtle background pattern — horizontal lines */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: patternOpacity,
          background: `repeating-linear-gradient(0deg, transparent, transparent 58px, ${BRAND.warmBrown} 58px, ${BRAND.warmBrown} 60px)`,
        }}
      />

      {/* Decorative corner accents */}
      <div
        style={{
          position: "absolute",
          top: 50,
          right: 50,
          width: 70,
          height: 70,
          borderTop: `2px solid ${BRAND.goldBorder}`,
          borderRight: `2px solid ${BRAND.goldBorder}`,
          opacity: interpolate(frame, [3, 20], [0, 0.7], CLAMP),
        }}
      />

      {/* SCENE 1: Hook */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          opacity: hookOpacity,
          padding: `0 ${SAFE.left + 50}px`,
        }}
      >
        <div
          style={{
            ...fadeUp(5),
            fontFamily: FONTS.heading,
            fontSize: 64,
            color: BRAND.navy,
            textAlign: "center",
            lineHeight: 1.25,
          }}
        >
          3 Sitzungen.
        </div>
        <div
          style={{
            ...fadeUp(18),
            fontFamily: FONTS.heading,
            fontSize: 52,
            color: BRAND.navy,
            textAlign: "center",
            lineHeight: 1.3,
            marginTop: 12,
          }}
        >
          Keine Medikamente.
        </div>
        <div
          style={{
            ...fadeUp(32),
            width: 60,
            height: 3,
            backgroundColor: BRAND.warmBrown,
            borderRadius: 2,
            marginTop: 32,
          }}
        />
        <div
          style={{
            ...fadeUp(40),
            fontSize: 28,
            color: BRAND.warmBrown,
            textAlign: "center",
            marginTop: 20,
          }}
        >
          So funktioniert AviClear
        </div>
      </div>

      {/* SCENE 2–3: Timeline */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: timelineOpacity,
        }}
      >
        {/* Title */}
        <div
          style={{
            ...fadeUp(58),
            position: "absolute",
            top: SAFE.top + 60,
            left: 0,
            right: 0,
            textAlign: "center",
            fontFamily: FONTS.heading,
            fontSize: 38,
            color: BRAND.navy,
          }}
        >
          Ihr Behandlungsweg
        </div>

        {/* Vertical timeline line */}
        <svg
          width={SPEC.width}
          height={SPEC.height}
          viewBox={`0 0 ${SPEC.width} ${SPEC.height}`}
          style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}
        >
          <line
            x1={TIMELINE_X}
            y1={TIMELINE_TOP}
            x2={TIMELINE_X}
            y2={TIMELINE_TOP + TIMELINE_LENGTH * lineDraw}
            stroke={BRAND.warmBrown}
            strokeWidth={3}
            strokeLinecap="round"
            opacity={0.5}
          />

          {/* Endpoint dot */}
          {lineDraw >= 0.98 && (
            <circle
              cx={TIMELINE_X}
              cy={TIMELINE_BOTTOM}
              r={6}
              fill={BRAND.warmBrown}
              opacity={interpolate(frame, [198, 208], [0, 0.6], CLAMP)}
            />
          )}
        </svg>

        {/* Session Nodes */}
        {sessions.map((session) => {
          const nodeProgress = interpolate(
            frame,
            [session.startFrame, session.startFrame + 16],
            [0, 1],
            { ...CLAMP, easing: easeOut },
          );
          const nodeScale = interpolate(
            frame,
            [session.startFrame, session.startFrame + 10, session.startFrame + 16],
            [0, 1.1, 1],
            { ...CLAMP, easing: easeOut },
          );
          const detailOp = interpolate(
            frame,
            [session.startFrame + 12, session.startFrame + 24],
            [0, 1],
            CLAMP,
          );
          const check = checkProgress(session.startFrame);

          return (
            <div
              key={session.num}
              style={{
                position: "absolute",
                left: TIMELINE_X,
                top: session.y,
                transform: `translate(-50%, -50%)`,
                opacity: nodeProgress,
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* Node circle */}
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  backgroundColor: BRAND.navy,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transform: `scale(${nodeScale})`,
                  boxShadow: `0 4px 20px ${BRAND.navy}30`,
                  flexShrink: 0,
                }}
              >
                {/* Number or checkmark */}
                {check < 0.5 ? (
                  <span
                    style={{
                      fontFamily: FONTS.heading,
                      fontSize: 28,
                      color: BRAND.cream,
                      fontWeight: 700,
                    }}
                  >
                    {session.num}
                  </span>
                ) : (
                  <svg width={28} height={28} viewBox="0 0 28 28" opacity={check}>
                    <polyline
                      points="6,14 12,20 22,8"
                      fill="none"
                      stroke={BRAND.cream}
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray={40}
                      strokeDashoffset={40 * (1 - check)}
                    />
                  </svg>
                )}
              </div>

              {/* Content card */}
              <div
                style={{
                  marginLeft: 28,
                  opacity: detailOp,
                  transform: `translateX(${interpolate(
                    frame,
                    [session.startFrame + 12, session.startFrame + 24],
                    [20, 0],
                    { ...CLAMP, easing: easeOut },
                  )}px)`,
                }}
              >
                {/* Card background */}
                <div
                  style={{
                    backgroundColor: `${BRAND.cream}`,
                    border: `1.5px solid ${BRAND.goldBorder}`,
                    borderRadius: 16,
                    padding: "20px 28px",
                    maxWidth: 580,
                    boxShadow: `0 2px 12px ${BRAND.warmBrown}10`,
                  }}
                >
                  <div
                    style={{
                      fontFamily: FONTS.heading,
                      fontSize: 30,
                      color: BRAND.navy,
                      lineHeight: 1.3,
                      marginBottom: 8,
                    }}
                  >
                    {session.title}
                  </div>
                  <div
                    style={{
                      fontSize: 24,
                      color: BRAND.warmBrown,
                      lineHeight: 1.5,
                      marginBottom: 4,
                    }}
                  >
                    {session.detail}
                  </div>
                  <div
                    style={{
                      fontSize: 21,
                      color: BRAND.teal,
                      fontWeight: 500,
                      lineHeight: 1.4,
                    }}
                  >
                    {session.sub}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Summary text below timeline */}
        <div
          style={{
            position: "absolute",
            bottom: SAFE.bottom + 180,
            left: SAFE.left + 40,
            right: SAFE.right + 40,
            textAlign: "center",
            opacity: summaryOpacity,
          }}
        >
          <div
            style={{
              ...fadeUp(240),
              fontFamily: FONTS.heading,
              fontSize: 36,
              color: BRAND.navy,
              lineHeight: 1.3,
            }}
          >
            Der komplette Weg zu reiner Haut
          </div>
          <div
            style={{
              ...fadeUp(250),
              fontSize: 26,
              color: BRAND.warmBrown,
              marginTop: 12,
              lineHeight: 1.5,
            }}
          >
            12 Wochen · 3 Sitzungen · Keine Ausfallzeit
          </div>
        </div>
      </div>

      {/* SCENE 4: CTA */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          opacity: ctaOpacity,
          backgroundColor: BRAND.cream,
        }}
      >
        <div
          style={{
            transform: `translateY(${ctaSlide}px)`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0 80px",
          }}
        >
          {/* Logo */}
          <Img
            src={staticFile("derma-logo-dark.png")}
            style={{
              width: 300,
              height: "auto",
              marginBottom: 44,
            }}
          />

          <div
            style={{
              width: 90,
              height: 2,
              backgroundColor: BRAND.goldBorder,
              marginBottom: 36,
            }}
          />

          <div
            style={{
              fontFamily: FONTS.heading,
              fontSize: 44,
              color: BRAND.navy,
              textAlign: "center",
              lineHeight: 1.3,
              marginBottom: 16,
            }}
          >
            Beratungstermin buchen
          </div>
          <div
            style={{
              fontSize: 26,
              color: BRAND.warmBrown,
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            Ihr individueller Behandlungsplan
          </div>
          <div
            style={{
              fontSize: 24,
              color: BRAND.warmBrown,
              textAlign: "center",
              marginTop: 24,
              opacity: 0.7,
            }}
          >
            dermamedicum.com
          </div>
        </div>
      </div>
    </div>
  );
};
