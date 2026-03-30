import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

// ALTO COFFEE — REEL 3: CUPPING CARD
// A professional SCA cupping scorecard that writes itself.
// Scores fill in, flavor wheel lights up, tasting notes appear.
// 540 frames @ 30fps = 18s | 1080x1920 (9:16)

const clamp = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };

const ease = (
  frame: number,
  start: number,
  dur: number,
  from: number,
  to: number,
  fn = Easing.out(Easing.cubic)
) =>
  interpolate(frame, [start, start + dur], [from, to], { ...clamp, easing: fn });

// ═══ BRAND PALETTE ═══
const ESPRESSO = "#2C1810";
const PARCHMENT = "#F4EDE4";
const COPPER = "#B87333";
const SAGE = "#6B7F5E";
const AMBER = "#D4915E";
const CHARCOAL = "#1A1714";
const CREAM = "#FAF6F0";

const FONTS = {
  brand: "'DM Serif Display', Georgia, serif",
  body: "'Inter', -apple-system, sans-serif",
  data: "'JetBrains Mono', monospace",
};

// ═══ FLAVOR WHEEL COLORS ═══
const WHEEL_COLORS = {
  fruity: "#C75B4A",
  sweet: AMBER,
  floral: "#9B7DC4",
  nutty: COPPER,
};

// ═══ HELPER COMPONENTS ═══

function fadeUp(frame: number, start: number, dur = 16) {
  return {
    opacity: ease(frame, start, dur, 0, 1),
    transform: `translateY(${ease(frame, start, dur, 30, 0)}px)`,
  };
}

function sceneVis(frame: number, start: number, end: number, fadeInD = 12, fadeOutD = 12) {
  if (frame < start - 2) return 0;
  if (frame > end + fadeOutD + 2) return 0;
  return Math.min(
    interpolate(frame, [start, start + fadeInD], [0, 1], clamp),
    interpolate(frame, [end, end + fadeOutD], [1, 0], clamp)
  );
}

// Typewriter digit component
function TypewriterNumber({
  frame,
  digits,
  startFrame,
  delayPerDigit = 12,
  fontSize = 180,
  color = ESPRESSO,
}: {
  frame: number;
  digits: string[];
  startFrame: number;
  delayPerDigit?: number;
  fontSize?: number;
  color?: string;
}) {
  const cursorBlink = Math.sin(frame * 0.3) > 0 ? 1 : 0;

  return (
    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center" }}>
      {digits.map((d, i) => {
        const dStart = startFrame + i * delayPerDigit;
        const visible = frame >= dStart;
        const justAppeared = frame >= dStart && frame < dStart + 6;
        return (
          <span
            key={i}
            style={{
              fontFamily: FONTS.data,
              fontSize,
              fontWeight: 700,
              color,
              opacity: visible ? 1 : 0,
              transform: `scale(${visible ? (justAppeared ? ease(frame, dStart, 6, 1.15, 1, Easing.out(Easing.back(2))) : 1) : 0.8})`,
              display: "inline-block",
              minWidth: d === "." ? fontSize * 0.25 : fontSize * 0.55,
              textAlign: "center",
            }}
          >
            {visible ? d : ""}
          </span>
        );
      })}
      {/* Cursor */}
      {(() => {
        const allRevealed = frame >= startFrame + digits.length * delayPerDigit;
        const cursorVisible = frame >= startFrame && !allRevealed;
        return (
          <span
            style={{
              fontFamily: FONTS.data,
              fontSize: fontSize * 0.9,
              fontWeight: 300,
              color: COPPER,
              opacity: cursorVisible ? cursorBlink * 0.7 : 0,
              marginLeft: -4,
            }}
          >
            |
          </span>
        );
      })()}
    </div>
  );
}

// Score bar component
function ScoreBar({
  frame,
  startFrame,
  label,
  score,
  maxScore = 10,
  barWidth = 480,
}: {
  frame: number;
  startFrame: number;
  label: string;
  score: number;
  maxScore?: number;
  barWidth?: number;
}) {
  const fillPct = ease(frame, startFrame, 30, 0, score / maxScore, Easing.out(Easing.quad));
  const labelOp = ease(frame, startFrame - 5, 12, 0, 1);
  const scoreOp = ease(frame, startFrame + 15, 12, 0, 1);

  return (
    <div style={{ marginBottom: 28 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: 8,
          opacity: labelOp,
        }}
      >
        <span
          style={{
            fontFamily: FONTS.body,
            fontSize: 26,
            color: ESPRESSO,
            fontWeight: 500,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}
        >
          {label}
        </span>
        <span
          style={{
            fontFamily: FONTS.data,
            fontSize: 28,
            color: COPPER,
            fontWeight: 600,
            opacity: scoreOp,
          }}
        >
          {score.toFixed(1)}
        </span>
      </div>
      <div
        style={{
          width: barWidth,
          height: 10,
          background: `${PARCHMENT}`,
          borderRadius: 5,
          border: `1px solid ${COPPER}22`,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: fillPct * barWidth,
            height: "100%",
            background: `linear-gradient(90deg, ${COPPER}, ${AMBER})`,
            borderRadius: 5,
          }}
        />
      </div>
    </div>
  );
}

// Flavor wheel segment (SVG arc)
function FlavorWheelSegment({
  frame,
  startFrame,
  cx,
  cy,
  innerR,
  outerR,
  startAngle,
  endAngle,
  color,
  label,
  note,
}: {
  frame: number;
  startFrame: number;
  cx: number;
  cy: number;
  innerR: number;
  outerR: number;
  startAngle: number;
  endAngle: number;
  color: string;
  label: string;
  note: string;
}) {
  const fillOp = ease(frame, startFrame, 18, 0, 0.75);
  const scaleVal = ease(frame, startFrame, 14, 0.92, 1, Easing.out(Easing.back(1.8)));
  const noteOp = ease(frame, startFrame + 8, 14, 0, 1);

  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const midAngle = (startAngle + endAngle) / 2;

  // Arc path
  const innerStart = {
    x: cx + innerR * Math.cos(toRad(startAngle)),
    y: cy + innerR * Math.sin(toRad(startAngle)),
  };
  const innerEnd = {
    x: cx + innerR * Math.cos(toRad(endAngle)),
    y: cy + innerR * Math.sin(toRad(endAngle)),
  };
  const outerStart = {
    x: cx + outerR * Math.cos(toRad(startAngle)),
    y: cy + outerR * Math.sin(toRad(startAngle)),
  };
  const outerEnd = {
    x: cx + outerR * Math.cos(toRad(endAngle)),
    y: cy + outerR * Math.sin(toRad(endAngle)),
  };

  const largeArc = endAngle - startAngle > 180 ? 1 : 0;

  const d = [
    `M ${innerStart.x} ${innerStart.y}`,
    `A ${innerR} ${innerR} 0 ${largeArc} 1 ${innerEnd.x} ${innerEnd.y}`,
    `L ${outerEnd.x} ${outerEnd.y}`,
    `A ${outerR} ${outerR} 0 ${largeArc} 0 ${outerStart.x} ${outerStart.y}`,
    "Z",
  ].join(" ");

  // Label position — outside the wheel
  const labelR = outerR + 50;
  const noteR = outerR + 85;
  const labelX = cx + labelR * Math.cos(toRad(midAngle));
  const labelY = cy + labelR * Math.sin(toRad(midAngle));
  const noteX = cx + noteR * Math.cos(toRad(midAngle));
  const noteY = cy + noteR * Math.sin(toRad(midAngle));

  return (
    <g>
      <path
        d={d}
        fill={color}
        opacity={fillOp}
        transform={`translate(${cx * (1 - scaleVal)}, ${cy * (1 - scaleVal)}) scale(${scaleVal})`}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      />
      {/* Segment outline */}
      <path d={d} fill="none" stroke={ESPRESSO} strokeWidth={1.5} opacity={0.15} />
      {/* Category label */}
      <text
        x={labelX}
        y={labelY}
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily={FONTS.body}
        fontSize={22}
        fontWeight={700}
        fill={ESPRESSO}
        opacity={fillOp}
        letterSpacing={2}
      >
        {label}
      </text>
      {/* Specific note */}
      <text
        x={noteX}
        y={noteY}
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily={FONTS.body}
        fontSize={19}
        fontWeight={400}
        fontStyle="italic"
        fill={color}
        opacity={noteOp}
      >
        {note}
      </text>
    </g>
  );
}

// ═══ MAIN COMPOSITION ═══
export const Coffee_CuppingCard: React.FC = () => {
  const frame = useCurrentFrame();

  // ═══ RULED PAPER LINES — persistent texture ═══
  const ruledLines = Array.from({ length: 32 }, (_, i) => ({
    y: 60 + i * 60,
  }));

  // ═══ FILM GRAIN ═══
  const grainSeed = Math.floor(frame * 3.7) % 100;

  // ═══ SCENE VISIBILITY ═══
  const s1 = sceneVis(frame, 0, 130);
  const s2 = sceneVis(frame, 128, 275);
  const s3 = sceneVis(frame, 273, 415);
  const s4 = sceneVis(frame, 413, 540, 12, 1);

  // ═══ PERSISTENT SCORE (after Scene 1) ═══
  const scoreCornerOp = frame >= 130 ? ease(frame, 130, 18, 0, 1) : 0;
  const scoreCornerScale = ease(frame, 130, 20, 1.2, 1, Easing.out(Easing.quad));

  // ═══ FLAVOR WHEEL — slow rotation ═══
  const wheelRotation = ease(frame, 130, 390, 0, 2, Easing.inOut(Easing.quad));

  // ═══ CARD FLIP for Scene 4 ═══
  const flipProgress = ease(frame, 413, 20, 0, 1, Easing.inOut(Easing.cubic));

  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        background: CREAM,
        overflow: "hidden",
        position: "relative",
        fontFamily: FONTS.body,
      }}
    >
      {/* ═══ PARCHMENT BACKGROUND ═══ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(178deg, ${CREAM} 0%, ${PARCHMENT} 40%, #EDE6DA 100%)`,
        }}
      />

      {/* Warm center glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at 50% 40%, rgba(184,115,51,0.04) 0%, transparent 65%)`,
          pointerEvents: "none",
        }}
      />

      {/* ═══ RULED PAPER LINES ═══ */}
      {ruledLines.map((line, i) => (
        <div
          key={`rule-${i}`}
          style={{
            position: "absolute",
            left: 60,
            right: 60,
            top: line.y,
            height: 1,
            background: `${COPPER}08`,
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Left margin line (like a real form) */}
      <div
        style={{
          position: "absolute",
          left: 90,
          top: 0,
          bottom: 0,
          width: 1.5,
          background: `${COPPER}10`,
          pointerEvents: "none",
        }}
      />

      {/* ═══════════════════════════════════════════════════
          SCENE 1 (0–134): THE SCORE — Hook
          ═══════════════════════════════════════════════════ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          opacity: s1,
          pointerEvents: s1 === 0 ? "none" : "auto",
        }}
      >
        {/* SCA header — institutional look */}
        <div
          style={{
            ...fadeUp(frame, 5),
            fontFamily: FONTS.data,
            fontSize: 24,
            color: `${ESPRESSO}88`,
            letterSpacing: 8,
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          SCA Cupping Protocol
        </div>

        <div
          style={{
            ...fadeUp(frame, 12),
            fontFamily: FONTS.data,
            fontSize: 30,
            color: ESPRESSO,
            letterSpacing: 6,
            textTransform: "uppercase",
            fontWeight: 600,
            marginBottom: 50,
          }}
        >
          Cupping Score
        </div>

        {/* Divider line */}
        <div
          style={{
            width: ease(frame, 15, 20, 0, 360),
            height: 2,
            background: `${COPPER}40`,
            marginBottom: 60,
          }}
        />

        {/* Giant score — typewriter effect */}
        <TypewriterNumber
          frame={frame}
          digits={["8", "7", ".", "5"]}
          startFrame={35}
          delayPerDigit={14}
          fontSize={180}
          color={ESPRESSO}
        />

        {/* "/ 100" suffix */}
        <div
          style={{
            fontFamily: FONTS.data,
            fontSize: 48,
            color: `${ESPRESSO}55`,
            fontWeight: 400,
            marginTop: 8,
            opacity: ease(frame, 90, 14, 0, 1),
          }}
        >
          / 100
        </div>

        {/* Circle highlight around score */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: `translate(-50%, -60%) scale(${ease(frame, 95, 18, 0.85, 1, Easing.out(Easing.back(1.6)))})`,
            width: 340,
            height: 340,
            borderRadius: "50%",
            border: `3px solid ${COPPER}`,
            opacity: ease(frame, 95, 18, 0, 0.25),
            pointerEvents: "none",
          }}
        />

        {/* "What does 87.5 taste like?" */}
        <div
          style={{
            ...fadeUp(frame, 108),
            fontFamily: FONTS.brand,
            fontSize: 34,
            color: COPPER,
            fontStyle: "italic",
            marginTop: 50,
            textAlign: "center",
          }}
        >
          What does 87.5 taste like?
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          PERSISTENT SCORE BADGE (Scenes 2–4)
          ═══════════════════════════════════════════════════ */}
      {frame >= 128 && (
        <div
          style={{
            position: "absolute",
            left: 60,
            top: 310,
            opacity: scoreCornerOp,
            transform: `scale(${scoreCornerScale})`,
            zIndex: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 6,
            }}
          >
            <span
              style={{
                fontFamily: FONTS.data,
                fontSize: 46,
                fontWeight: 700,
                color: ESPRESSO,
              }}
            >
              87.5
            </span>
            <span
              style={{
                fontFamily: FONTS.data,
                fontSize: 22,
                color: `${ESPRESSO}55`,
              }}
            >
              /100
            </span>
          </div>
          <div
            style={{
              width: 80,
              height: 2,
              background: `${COPPER}50`,
              marginTop: 6,
            }}
          />
        </div>
      )}

      {/* ═══════════════════════════════════════════════════
          SCENE 2 (130–279): THE WHEEL — Flavor Breakdown
          ═══════════════════════════════════════════════════ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          opacity: s2,
          pointerEvents: s2 === 0 ? "none" : "auto",
        }}
      >
        {/* Scene header */}
        <div
          style={{
            position: "absolute",
            top: 380,
            left: 0,
            right: 0,
            textAlign: "center",
            ...fadeUp(frame, 135),
          }}
        >
          <span
            style={{
              fontFamily: FONTS.data,
              fontSize: 20,
              color: `${ESPRESSO}66`,
              letterSpacing: 6,
              textTransform: "uppercase",
            }}
          >
            Flavor Profile
          </span>
        </div>

        {/* Flavor Wheel SVG */}
        <svg
          width={700}
          height={700}
          viewBox="0 0 700 700"
          style={{
            marginTop: 30,
            transform: `rotate(${wheelRotation}deg)`,
          }}
        >
          {/* Center circle */}
          <circle
            cx={350}
            cy={350}
            r={80}
            fill="none"
            stroke={`${ESPRESSO}15`}
            strokeWidth={2}
          />
          <circle
            cx={350}
            cy={350}
            r={140}
            fill="none"
            stroke={`${ESPRESSO}10`}
            strokeWidth={1.5}
          />

          {/* Inner ring guide */}
          <circle
            cx={350}
            cy={350}
            r={200}
            fill="none"
            stroke={`${ESPRESSO}08`}
            strokeWidth={1}
          />

          {/* Center label */}
          <text
            x={350}
            y={345}
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily={FONTS.brand}
            fontSize={28}
            fill={ESPRESSO}
            opacity={ease(frame, 140, 14, 0, 0.6)}
            transform={`rotate(${-wheelRotation}, 350, 345)`}
          >
            ALTO
          </text>
          <text
            x={350}
            y={372}
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily={FONTS.data}
            fontSize={14}
            fill={`${ESPRESSO}88`}
            opacity={ease(frame, 145, 12, 0, 0.5)}
            transform={`rotate(${-wheelRotation}, 350, 372)`}
          >
            Colombia
          </text>

          {/* Segments — each lights up with staggered delay */}
          <FlavorWheelSegment
            frame={frame}
            startFrame={155}
            cx={350}
            cy={350}
            innerR={85}
            outerR={175}
            startAngle={-90}
            endAngle={0}
            color={WHEEL_COLORS.fruity}
            label="FRUITY"
            note="black cherry"
          />
          <FlavorWheelSegment
            frame={frame}
            startFrame={170}
            cx={350}
            cy={350}
            innerR={85}
            outerR={175}
            startAngle={0}
            endAngle={90}
            color={WHEEL_COLORS.sweet}
            label="SWEET"
            note="honey"
          />
          <FlavorWheelSegment
            frame={frame}
            startFrame={185}
            cx={350}
            cy={350}
            innerR={85}
            outerR={175}
            startAngle={90}
            endAngle={180}
            color={WHEEL_COLORS.floral}
            label="FLORAL"
            note="jasmine"
          />
          <FlavorWheelSegment
            frame={frame}
            startFrame={200}
            cx={350}
            cy={350}
            innerR={85}
            outerR={175}
            startAngle={180}
            endAngle={270}
            color={WHEEL_COLORS.nutty}
            label="NUTTY"
            note="hazelnut"
          />
        </svg>
      </div>

      {/* ═══════════════════════════════════════════════════
          SCENE 3 (275–419): THE NOTES — Written Tasting Notes
          ═══════════════════════════════════════════════════ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: s3,
          pointerEvents: s3 === 0 ? "none" : "auto",
        }}
      >
        {/* Faded wheel in background */}
        <svg
          width={400}
          height={400}
          viewBox="0 0 700 700"
          style={{
            position: "absolute",
            right: -40,
            top: 320,
            opacity: 0.06,
            transform: `rotate(${wheelRotation}deg)`,
          }}
        >
          <circle cx={350} cy={350} r={175} fill="none" stroke={COPPER} strokeWidth={3} />
          <circle cx={350} cy={350} r={85} fill="none" stroke={COPPER} strokeWidth={2} />
          {[0, 90, 180, 270].map((a) => {
            const rad = (a * Math.PI) / 180;
            return (
              <line
                key={a}
                x1={350}
                y1={350}
                x2={350 + 175 * Math.cos(rad)}
                y2={350 + 175 * Math.sin(rad)}
                stroke={COPPER}
                strokeWidth={1.5}
              />
            );
          })}
        </svg>

        {/* Section header */}
        <div
          style={{
            position: "absolute",
            top: 390,
            left: 110,
            ...fadeUp(frame, 280),
          }}
        >
          <span
            style={{
              fontFamily: FONTS.data,
              fontSize: 20,
              color: `${ESPRESSO}66`,
              letterSpacing: 6,
              textTransform: "uppercase",
            }}
          >
            Tasting Notes
          </span>
        </div>

        {/* Tasting note lines — left-to-right reveal */}
        {[
          { label: "Aroma", note: "dark chocolate, dried fig", start: 290 },
          { label: "Acidity", note: "bright, citric", start: 310 },
          { label: "Body", note: "syrupy, full", start: 330 },
          { label: "Aftertaste", note: "lingering stone fruit", start: 350 },
        ].map((item, i) => {
          const revealWidth = ease(frame, item.start, 22, 0, 1);
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: 110,
                right: 140,
                top: 450 + i * 100,
              }}
            >
              {/* Text with clip reveal */}
              <div
                style={{
                  clipPath: `inset(0 ${(1 - revealWidth) * 100}% 0 0)`,
                }}
              >
                <span
                  style={{
                    fontFamily: FONTS.body,
                    fontSize: 24,
                    fontWeight: 600,
                    color: COPPER,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                  }}
                >
                  {item.label}
                </span>
                <span
                  style={{
                    fontFamily: FONTS.body,
                    fontSize: 26,
                    color: ESPRESSO,
                    fontStyle: "italic",
                    marginLeft: 16,
                  }}
                >
                  {item.note}
                </span>
              </div>
              {/* Ruled underline */}
              <div
                style={{
                  width: "100%",
                  height: 1,
                  background: `${COPPER}18`,
                  marginTop: 14,
                }}
              />
            </div>
          );
        })}

        {/* Score bars */}
        <div
          style={{
            position: "absolute",
            left: 110,
            right: 140,
            top: 880,
          }}
        >
          <div
            style={{
              ...fadeUp(frame, 355),
              fontFamily: FONTS.data,
              fontSize: 18,
              color: `${ESPRESSO}55`,
              letterSpacing: 4,
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            Attribute Scores
          </div>
          <ScoreBar frame={frame} startFrame={365} label="Aroma" score={8.5} barWidth={540} />
          <ScoreBar frame={frame} startFrame={375} label="Flavor" score={9.0} barWidth={540} />
          <ScoreBar frame={frame} startFrame={385} label="Acidity" score={8.5} barWidth={540} />
          <ScoreBar frame={frame} startFrame={395} label="Body" score={8.0} barWidth={540} />
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          SCENE 4 (415–540): CTA — The Invitation
          ═══════════════════════════════════════════════════ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          opacity: s4,
          pointerEvents: s4 === 0 ? "none" : "auto",
        }}
      >
        {/* Score watermark */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            fontFamily: FONTS.data,
            fontSize: 320,
            fontWeight: 800,
            color: `${COPPER}06`,
            pointerEvents: "none",
            letterSpacing: -10,
          }}
        >
          87.5
        </div>

        {/* Card flip — morph from scorecard to brand */}
        <div
          style={{
            background: `${PARCHMENT}`,
            border: `2px solid ${COPPER}20`,
            borderRadius: 20,
            padding: "60px 70px",
            maxWidth: 800,
            textAlign: "center",
            transform: `perspective(1200px) rotateY(${ease(frame, 413, 16, -8, 0, Easing.out(Easing.quad))}deg)`,
            boxShadow: `0 20px 60px ${ESPRESSO}10`,
          }}
        >
          {/* ALTO brand */}
          <div
            style={{
              ...fadeUp(frame, 420),
              fontFamily: FONTS.brand,
              fontSize: 96,
              color: ESPRESSO,
              letterSpacing: 14,
              lineHeight: 1,
            }}
          >
            ALTO
          </div>

          {/* Divider */}
          <div
            style={{
              width: ease(frame, 430, 18, 0, 200),
              height: 2,
              background: COPPER,
              margin: "30px auto",
              opacity: 0.5,
            }}
          />

          {/* Tagline */}
          <div
            style={{
              ...fadeUp(frame, 440),
              fontFamily: FONTS.data,
              fontSize: 28,
              color: ESPRESSO,
              fontWeight: 500,
              letterSpacing: 1,
            }}
          >
            87.5 points. Zero pretension.
          </div>

          <div
            style={{
              ...fadeUp(frame, 458),
              fontFamily: FONTS.brand,
              fontSize: 34,
              color: COPPER,
              fontStyle: "italic",
              marginTop: 24,
              lineHeight: 1.5,
            }}
          >
            Taste what the numbers mean.
          </div>
        </div>

        {/* Origin reference — connects to Reel 1 */}
        <div
          style={{
            ...fadeUp(frame, 478),
            marginTop: 50,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: FONTS.body,
              fontSize: 22,
              color: `${ESPRESSO}77`,
              letterSpacing: 2,
            }}
          >
            Order our
          </div>
          <div
            style={{
              fontFamily: FONTS.brand,
              fontSize: 30,
              color: ESPRESSO,
              marginTop: 6,
            }}
          >
            Colombia Finca La Esperanza
          </div>
        </div>

        {/* CTA button */}
        <div
          style={{
            ...fadeUp(frame, 498),
            marginTop: 40,
            padding: "18px 52px",
            border: `2px solid ${COPPER}`,
            borderRadius: 40,
            fontFamily: FONTS.body,
            fontSize: 24,
            fontWeight: 500,
            color: COPPER,
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          Shop Now
        </div>
      </div>

      {/* ═══ FILM GRAIN OVERLAY ═══ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.035,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' seed='${grainSeed}' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px 256px",
        }}
      />

      {/* ═══ SOFT VIGNETTE ═══ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 50%, rgba(44,24,16,0.06) 100%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};
