import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  Easing,
  interpolate,
  Img,
  staticFile,
} from "remotion";

// ── Self-contained helpers ──
const ease = (t: number) => Easing.out(Easing.cubic)(t);

const fadeUp = (
  frame: number,
  start: number,
  dur: number,
  dist = 30
): { opacity: number; transform: string } => {
  const o = interpolate(frame, [start, start + dur], [0, 1], {
    easing: ease,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const y = interpolate(frame, [start, start + dur], [dist, 0], {
    easing: ease,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return { opacity: o, transform: `translateY(${y}px)` };
};

const sceneVis = (
  frame: number,
  inStart: number,
  inEnd: number,
  outStart: number,
  outEnd: number
): number => {
  if (frame < inStart) return 0;
  if (frame >= inStart && frame < inEnd) {
    return interpolate(frame, [inStart, inEnd], [0, 1], {
      easing: ease,
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  }
  if (frame >= inEnd && frame < outStart) return 1;
  if (frame >= outStart && frame <= outEnd) {
    const v = interpolate(frame, [outStart, outEnd], [1, 0], {
      easing: ease,
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    return Math.max(v, 1 / 255);
  }
  return 0;
};

// ── Palette ──
const CREAM = "#F5F0EA";
const SAGE = "#8F9E90";
const SAGE_LIGHT = "rgba(143, 158, 144, 0.15)";
const DARK = "#3a3530";

// ── Botanical line path data (abstract stem + leaf shapes) ──
const LINE_PATHS = [
  // Central stem
  { x1: 540, y1: 1400, x2: 540, y2: 500, curve: 0 },
  // Left leaf branch
  { x1: 540, y1: 900, x2: 340, y2: 700, curve: -60 },
  // Right leaf branch
  { x1: 540, y1: 800, x2: 740, y2: 620, curve: 60 },
  // Left small leaf
  { x1: 540, y1: 1100, x2: 400, y2: 960, curve: -40 },
  // Right small leaf
  { x1: 540, y1: 1000, x2: 680, y2: 870, curve: 40 },
  // Top bloom
  { x1: 540, y1: 500, x2: 480, y2: 380, curve: -30 },
  { x1: 540, y1: 500, x2: 600, y2: 380, curve: 30 },
  { x1: 540, y1: 500, x2: 540, y2: 350, curve: 0 },
];

// Animated line drawing component
const AnimatedLine: React.FC<{
  frame: number;
  delay: number;
  duration: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  curve: number;
  thickness?: number;
}> = ({ frame, delay, duration, x1, y1, x2, y2, curve, thickness = 2 }) => {
  const progress = interpolate(frame, [delay, delay + duration], [0, 1], {
    easing: ease,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  if (progress <= 0) return null;

  const cx = (x1 + x2) / 2 + curve;
  const cy = (y1 + y2) / 2;
  const pathD = `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
  const pathLength = 600;
  const dashOffset = pathLength * (1 - progress);

  return (
    <path
      d={pathD}
      fill="none"
      stroke={SAGE}
      strokeWidth={thickness}
      strokeLinecap="round"
      strokeDasharray={pathLength}
      strokeDashoffset={dashOffset}
    />
  );
};

// Leaf shape component
const LeafShape: React.FC<{
  frame: number;
  delay: number;
  cx: number;
  cy: number;
  rotation: number;
  size: number;
}> = ({ frame, delay, cx, cy, rotation, size }) => {
  const scale = interpolate(frame, [delay, delay + 30], [0, 1], {
    easing: ease,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  if (scale <= 0) return null;

  return (
    <ellipse
      cx={cx}
      cy={cy}
      rx={size * 0.35 * scale}
      ry={size * scale}
      fill="none"
      stroke={SAGE}
      strokeWidth={1.5}
      transform={`rotate(${rotation} ${cx} ${cy})`}
      opacity={0.7}
    />
  );
};

export const EtsyCat_WallArt: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Scene timing (540 frames = 18s at 30fps)
  // Scene 1: 0–150 (5s) — lines drawing themselves, hook text at 60
  // Scene 2: 130–285 (5.2s) — lines multiply into floral pattern
  // Scene 3: 265–405 (4.7s) — abstract dissolves, photo reveals
  // Scene 4: 385–540 (5.2s) — CTA

  const s1 = sceneVis(frame, 0, 15, 130, 155);
  const s2 = sceneVis(frame, 125, 150, 265, 290);
  const s3 = sceneVis(frame, 260, 285, 385, 410);
  const s4 = sceneVis(frame, 380, 405, 530, 540);

  // Scene 2: additional floral elements multiply
  const multiplyProgress = interpolate(frame, [150, 260], [0, 1], {
    easing: ease,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Scene 3: abstract lines dissolve out, photo fades in
  const lineDissolve = interpolate(frame, [285, 330], [1, 0], {
    easing: ease,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const photoReveal = interpolate(frame, [300, 360], [0, 1], {
    easing: ease,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: CREAM }}>
      {/* Scene 1: Abstract botanical lines drawing themselves */}
      <AbsoluteFill style={{ opacity: s1 }}>
        <svg
          width={1080}
          height={1920}
          viewBox="0 0 1080 1920"
          style={{ position: "absolute", inset: 0 }}
        >
          {LINE_PATHS.map((line, i) => (
            <AnimatedLine
              key={i}
              frame={frame}
              delay={i * 12}
              duration={50}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              curve={line.curve}
              thickness={1.8}
            />
          ))}
        </svg>

        {/* Hook text appears at ~2s (frame 60) */}
        <div
          style={{
            position: "absolute",
            bottom: 300,
            width: "100%",
            textAlign: "center",
            padding: "0 80px",
            ...fadeUp(frame, 60, 40, 25),
          }}
        >
          <div
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: 52,
              color: DARK,
              lineHeight: 1.4,
              letterSpacing: 1,
              fontWeight: 400,
            }}
          >
            Every wall
            <br />
            tells a story.
          </div>
        </div>
      </AbsoluteFill>

      {/* Scene 2: Lines multiply into full floral pattern */}
      <AbsoluteFill style={{ opacity: s2 }}>
        <svg
          width={1080}
          height={1920}
          viewBox="0 0 1080 1920"
          style={{ position: "absolute", inset: 0 }}
        >
          {/* Original lines — fully drawn */}
          {LINE_PATHS.map((line, i) => (
            <AnimatedLine
              key={`base-${i}`}
              frame={frame}
              delay={0}
              duration={1}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              curve={line.curve}
              thickness={1.8}
            />
          ))}

          {/* Additional stems and branches multiply in */}
          <AnimatedLine frame={frame} delay={155} duration={40} x1={440} y1={1300} x2={300} y2={800} curve={-80} thickness={1.2} />
          <AnimatedLine frame={frame} delay={165} duration={40} x1={640} y1={1300} x2={780} y2={800} curve={80} thickness={1.2} />
          <AnimatedLine frame={frame} delay={175} duration={35} x1={380} y1={700} x2={280} y2={500} curve={-40} thickness={1.2} />
          <AnimatedLine frame={frame} delay={180} duration={35} x1={700} y1={700} x2={800} y2={500} curve={40} thickness={1.2} />

          {/* Leaf shapes bloom */}
          <LeafShape frame={frame} delay={170} cx={340} cy={700} rotation={-35} size={40} />
          <LeafShape frame={frame} delay={180} cx={740} cy={620} rotation={35} size={45} />
          <LeafShape frame={frame} delay={190} cx={400} cy={960} rotation={-25} size={35} />
          <LeafShape frame={frame} delay={195} cx={680} cy={870} rotation={25} size={35} />
          <LeafShape frame={frame} delay={200} cx={280} cy={500} rotation={-45} size={30} />
          <LeafShape frame={frame} delay={205} cx={800} cy={500} rotation={45} size={30} />
          <LeafShape frame={frame} delay={210} cx={480} cy={380} rotation={-15} size={28} />
          <LeafShape frame={frame} delay={215} cx={600} cy={380} rotation={15} size={28} />

          {/* Decorative circles (flower buds) */}
          {[
            { cx: 540, cy: 340, r: 12, delay: 210 },
            { cx: 300, cy: 780, r: 8, delay: 200 },
            { cx: 780, cy: 780, r: 8, delay: 205 },
            { cx: 480, cy: 360, r: 6, delay: 220 },
            { cx: 600, cy: 360, r: 6, delay: 222 },
          ].map((bud, i) => {
            const budScale = interpolate(frame, [bud.delay, bud.delay + 25], [0, 1], {
              easing: ease,
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            return (
              <circle
                key={`bud-${i}`}
                cx={bud.cx}
                cy={bud.cy}
                r={bud.r * budScale}
                fill="none"
                stroke={SAGE}
                strokeWidth={1.2}
                opacity={0.6}
              />
            );
          })}
        </svg>

        {/* Descriptive text */}
        <div
          style={{
            position: "absolute",
            bottom: 280,
            width: "100%",
            textAlign: "center",
            padding: "0 100px",
            ...fadeUp(frame, 170, 40, 20),
          }}
        >
          <div
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: 34,
              color: DARK,
              lineHeight: 1.6,
              letterSpacing: 0.5,
              opacity: 0.85,
            }}
          >
            Hand-illustrated.
            <br />
            Archival ink on 300gsm cotton paper.
          </div>
        </div>
      </AbsoluteFill>

      {/* Scene 3: Abstract dissolves → real product photo reveals */}
      <AbsoluteFill style={{ opacity: s3 }}>
        {/* Dissolving lines layer */}
        <svg
          width={1080}
          height={1920}
          viewBox="0 0 1080 1920"
          style={{
            position: "absolute",
            inset: 0,
            opacity: lineDissolve,
            filter: `blur(${(1 - lineDissolve) * 8}px)`,
          }}
        >
          {LINE_PATHS.map((line, i) => (
            <AnimatedLine
              key={`dissolve-${i}`}
              frame={frame}
              delay={0}
              duration={1}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              curve={line.curve}
              thickness={1.8}
            />
          ))}
        </svg>

        {/* Product photo fades in */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: photoReveal,
          }}
        >
          <Img
            src={staticFile("products/etsy-wallart.png")}
            style={{
              width: 920,
              height: 1380,
              objectFit: "cover",
              borderRadius: 16,
            }}
          />
        </div>

        {/* Text overlay */}
        <div
          style={{
            position: "absolute",
            bottom: 200,
            width: "100%",
            textAlign: "center",
            padding: "0 80px",
            ...fadeUp(frame, 330, 40, 20),
          }}
        >
          <div
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: 32,
              color: "#fff",
              letterSpacing: 2,
              textShadow: "0 2px 20px rgba(0,0,0,0.5)",
              fontWeight: 500,
            }}
          >
            Printed to order. Ships in 3 days.
          </div>
        </div>
      </AbsoluteFill>

      {/* Scene 4: CTA */}
      <AbsoluteFill style={{ opacity: s4 }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 36,
          }}
        >
          {/* Decorative sage line */}
          <div
            style={{
              width: interpolate(frame, [405, 435], [0, 100], {
                easing: ease,
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              height: 2,
              background: SAGE,
              opacity: 0.5,
            }}
          />

          {/* Leaf icon */}
          <svg
            width={40}
            height={50}
            viewBox="0 0 40 50"
            style={fadeUp(frame, 410, 30, 15)}
          >
            <ellipse
              cx={20}
              cy={22}
              rx={14}
              ry={20}
              fill="none"
              stroke={SAGE}
              strokeWidth={1.5}
            />
            <line x1={20} y1={42} x2={20} y2={50} stroke={SAGE} strokeWidth={1.5} />
          </svg>

          {/* Shop name */}
          <div style={fadeUp(frame, 420, 35, 20)}>
            <div
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: 56,
                color: DARK,
                letterSpacing: 4,
                fontWeight: 400,
                textAlign: "center",
              }}
            >
              Bloom & Line
            </div>
            <div
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: 26,
                color: DARK,
                letterSpacing: 12,
                textTransform: "uppercase",
                textAlign: "center",
                marginTop: 8,
                opacity: 0.6,
              }}
            >
              Studio
            </div>
          </div>

          {/* Price + CTA */}
          <div style={fadeUp(frame, 455, 30, 15)}>
            <div
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: 28,
                color: SAGE,
                letterSpacing: 3,
                textTransform: "uppercase",
                textAlign: "center",
                marginTop: 20,
              }}
            >
              From $24 · Link in bio
            </div>
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
