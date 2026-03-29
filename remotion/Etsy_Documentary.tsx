import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, Easing, interpolate, Img, staticFile } from "remotion";

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
const BG = "#1a1f2e";
const BG_LIGHT = "#232940";
const WHITE = "#f0ede8";
const DIM = "rgba(240,237,232,0.45)";
const ACCENT = "#c49648";

// ── Film grain overlay ──
const FilmGrain: React.FC<{ frame: number }> = ({ frame }) => {
  // Pseudo-random grain via SVG filter
  const seed = frame % 60;
  return (
    <svg
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", opacity: 0.06 }}
    >
      <filter id={`grain-${seed}`}>
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" seed={seed} />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter={`url(#grain-${seed})`} />
    </svg>
  );
};

export const Etsy_Documentary: React.FC = () => {
  const frame = useCurrentFrame();

  // Scene timing — 540 frames, 30fps = 18s
  // Scene 1: 0–120 (4s) — opening quote
  // Scene 2: 105–225 (4s) — specificity quote
  // Scene 3: 210–345 (4.5s) — poetry quote
  // Scene 4: 330–450 (4s) — result quote + mug variation
  // Scene 5: 435–540 (3.5s) — brand close

  const s1 = sceneVis(frame, 0, 15, 105, 125);
  const s2 = sceneVis(frame, 105, 130, 210, 230);
  const s3 = sceneVis(frame, 210, 235, 330, 350);
  const s4 = sceneVis(frame, 330, 355, 435, 455);
  const s5 = sceneVis(frame, 435, 460, 530, 540);

  // Shared text style
  const quoteStyle: React.CSSProperties = {
    fontFamily: "Georgia, 'Times New Roman', serif",
    fontStyle: "italic",
    color: WHITE,
    textAlign: "center",
    lineHeight: 1.6,
    padding: "0 100px",
  };

  const subStyle: React.CSSProperties = {
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    color: DIM,
    textAlign: "center",
    fontSize: 22,
    letterSpacing: 3,
    textTransform: "uppercase" as const,
    marginTop: 30,
  };

  return (
    <AbsoluteFill style={{ backgroundColor: BG }}>
      {/* Subtle vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.4) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Film grain */}
      <FilmGrain frame={frame} />

      {/* Scene 1: "I mix my own glazes. Most potters don't." */}
      <AbsoluteFill
        style={{
          opacity: s1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Decorative thin line */}
        <div
          style={{
            width: interpolate(frame, [10, 40], [0, 60], {
              easing: ease,
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            height: 1,
            background: ACCENT,
            marginBottom: 50,
            opacity: 0.6,
          }}
        />
        <div style={{ ...quoteStyle, fontSize: 52, ...fadeUp(frame, 8, 40, 25) }}>
          "I mix my own glazes.
          <br />
          <span style={{ opacity: 0.6, fontSize: 46 }}>Most potters don't."</span>
        </div>
      </AbsoluteFill>

      {/* Scene 2: Specificity */}
      <AbsoluteFill
        style={{
          opacity: s2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ ...quoteStyle, fontSize: 44, ...fadeUp(frame, 115, 40, 25) }}>
          "Each recipe takes
          <br />
          <span style={{ color: ACCENT, fontStyle: "normal", fontSize: 56 }}>3 months</span>
          <br />
          to develop."
        </div>
        <div style={{ ...subStyle, ...fadeUp(frame, 140, 35, 15) }}>
          I've thrown away more than I've kept.
        </div>
      </AbsoluteFill>

      {/* Scene 3: Poetry of uncertainty */}
      <AbsoluteFill
        style={{
          opacity: s3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ ...quoteStyle, fontSize: 44, ...fadeUp(frame, 220, 40, 25) }}>
          "The kiln decides
          <br />
          the final color."
        </div>
        <div
          style={{
            ...quoteStyle,
            fontSize: 32,
            fontStyle: "normal",
            opacity: 0.55,
            marginTop: 40,
            ...fadeUp(frame, 250, 35, 20),
          }}
        >
          I set the conditions.
          <br />
          The fire does the rest.
        </div>

        {/* Subtle ember glow */}
        <div
          style={{
            position: "absolute",
            bottom: 300,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(196,150,72,0.08), transparent 70%)`,
            filter: "blur(30px)",
            opacity: interpolate(frame, [240, 280, 320, 340], [0, 1, 1, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        />
      </AbsoluteFill>

      {/* Scene 4: Result — variation shown */}
      <AbsoluteFill
        style={{
          opacity: s4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Product collection image */}
        <div
          style={{
            marginBottom: 40,
            ...fadeUp(frame, 340, 40, 20),
          }}
        >
          <Img src={staticFile("etsy/mug-collection.png")} style={{ width: 800, height: 800, objectFit: "contain", borderRadius: 16 }} />
        </div>

        <div style={{ ...quoteStyle, fontSize: 44, ...fadeUp(frame, 360, 40, 25) }}>
          "This is why
          <br />
          no two are alike."
        </div>
      </AbsoluteFill>

      {/* Scene 5: Brand close */}
      <AbsoluteFill
        style={{
          opacity: s5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 30,
        }}
      >
        {/* Accent line */}
        <div
          style={{
            width: interpolate(frame, [460, 485], [0, 60], {
              easing: ease,
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            height: 2,
            background: ACCENT,
            opacity: 0.6,
          }}
        />

        <div style={fadeUp(frame, 462, 35, 20)}>
          <div
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: 56,
              color: WHITE,
              letterSpacing: 10,
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            Earthen Studio
          </div>
        </div>

        <div style={fadeUp(frame, 478, 30, 15)}>
          <div
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: 24,
              color: DIM,
              letterSpacing: 5,
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            Handmade in Portland
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
