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
const BLUSH = "#FFF0EB";
const ROSE_DEEP = "#E8C4B8";
const GOLD_TEXT = "#C8956D";
const DARK = "#3a2e28";
const WARM_WHITE = "#FFFAF7";

export const EtsyCat_Necklace: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Scene timing (540 frames = 18s at 30fps)
  // Scene 1: 0–150 (5s) — product hero with slow zoom, text at 60
  // Scene 2: 130–285 (5.2s) — zoom into detail, staggered text
  // Scene 3: 265–405 (4.7s) — review/gift context
  // Scene 4: 385–540 (5.2s) — CTA

  const s1 = sceneVis(frame, 0, 15, 130, 155);
  const s2 = sceneVis(frame, 125, 150, 265, 290);
  const s3 = sceneVis(frame, 260, 285, 385, 410);
  const s4 = sceneVis(frame, 380, 405, 530, 540);

  // Scene 1: Slow subtle zoom on product
  const heroZoom = interpolate(frame, [0, 150], [1.0, 1.08], {
    easing: ease,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Scene 2: Zoom into detail
  const detailZoom = interpolate(frame, [150, 270], [1.0, 1.8], {
    easing: ease,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const detailPanY = interpolate(frame, [150, 270], [0, -200], {
    easing: ease,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Scene 3: Slight dim overlay for text legibility
  const dimOverlay = interpolate(frame, [285, 310], [0, 0.45], {
    easing: ease,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: BLUSH }}>
      {/* Scene 1: Product hero — necklace fills screen */}
      <AbsoluteFill style={{ opacity: s1 }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: `scale(${heroZoom})`,
          }}
        >
          <Img
            src={staticFile("products/etsy-necklace.png")}
            style={{
              width: 1080,
              height: 1920,
              objectFit: "cover",
            }}
          />
        </div>

        {/* Hook text appears at 2s — no text before that */}
        <div
          style={{
            position: "absolute",
            bottom: 280,
            width: "100%",
            textAlign: "center",
            padding: "0 80px",
            ...fadeUp(frame, 60, 40, 25),
          }}
        >
          <div
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: 58,
              color: "#fff",
              lineHeight: 1.3,
              fontWeight: 400,
              textShadow: "0 3px 30px rgba(0,0,0,0.4)",
              letterSpacing: 1,
            }}
          >
            Her name.
            <br />
            In gold.
          </div>
        </div>
      </AbsoluteFill>

      {/* Scene 2: Zoom into detail — cropped/enlarged */}
      <AbsoluteFill style={{ opacity: s2 }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: `scale(${detailZoom}) translateY(${detailPanY}px)`,
          }}
        >
          <Img
            src={staticFile("products/etsy-necklace.png")}
            style={{
              width: 1080,
              height: 1920,
              objectFit: "cover",
            }}
          />
        </div>

        {/* Soft rose gradient at bottom for text legibility */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 600,
            background: `linear-gradient(to top, ${BLUSH}ee, transparent)`,
          }}
        />

        {/* Staggered detail text */}
        <div
          style={{
            position: "absolute",
            bottom: 280,
            width: "100%",
            textAlign: "center",
            padding: "0 80px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
          }}
        >
          <div style={fadeUp(frame, 170, 30, 20)}>
            <div
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: 32,
                color: GOLD_TEXT,
                letterSpacing: 4,
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              14K gold fill
            </div>
          </div>
          <div style={fadeUp(frame, 195, 30, 20)}>
            <div
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: 30,
                color: DARK,
                letterSpacing: 1,
                fontStyle: "italic",
                opacity: 0.8,
              }}
            >
              Handcrafted to order
            </div>
          </div>
          <div style={fadeUp(frame, 220, 30, 20)}>
            <div
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: 26,
                color: DARK,
                letterSpacing: 2,
                opacity: 0.65,
              }}
            >
              Ships in 2-3 days
            </div>
          </div>
        </div>
      </AbsoluteFill>

      {/* Scene 3: Gift context — review quote over dimmed product */}
      <AbsoluteFill style={{ opacity: s3 }}>
        {/* Product image underneath, slightly zoomed */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            transform: "scale(1.1)",
          }}
        >
          <Img
            src={staticFile("products/etsy-necklace.png")}
            style={{
              width: 1080,
              height: 1920,
              objectFit: "cover",
            }}
          />
        </div>

        {/* Dim overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: `rgba(58, 46, 40, ${dimOverlay})`,
          }}
        />

        {/* Review quote */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 100px",
            gap: 40,
          }}
        >
          {/* Large quotation mark */}
          <div style={fadeUp(frame, 300, 30, 15)}>
            <div
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: 120,
                color: GOLD_TEXT,
                opacity: 0.5,
                lineHeight: 0.6,
              }}
            >
              "
            </div>
          </div>

          <div style={fadeUp(frame, 310, 40, 25)}>
            <div
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: 42,
                color: WARM_WHITE,
                lineHeight: 1.5,
                textAlign: "center",
                fontStyle: "italic",
                letterSpacing: 0.5,
              }}
            >
              She opened it
              <br />
              and cried.
            </div>
          </div>

          <div style={fadeUp(frame, 340, 30, 15)}>
            <div
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: 22,
                color: ROSE_DEEP,
                letterSpacing: 3,
                textTransform: "uppercase",
              }}
            >
              — Sarah T., verified review
            </div>
          </div>

          <div style={fadeUp(frame, 355, 25, 10)}>
            <div
              style={{
                fontSize: 28,
                letterSpacing: 6,
              }}
            >
              {"⭐⭐⭐⭐⭐"}
            </div>
          </div>
        </div>
      </AbsoluteFill>

      {/* Scene 4: CTA */}
      <AbsoluteFill style={{ opacity: s4, backgroundColor: BLUSH }}>
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
          {/* Decorative gold line */}
          <div
            style={{
              width: interpolate(frame, [405, 435], [0, 80], {
                easing: ease,
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              height: 1.5,
              background: GOLD_TEXT,
              opacity: 0.5,
            }}
          />

          {/* Shop name */}
          <div style={fadeUp(frame, 415, 35, 20)}>
            <div
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: 60,
                color: DARK,
                letterSpacing: 3,
                fontWeight: 400,
                textAlign: "center",
              }}
            >
              Luna & Chain
            </div>
          </div>

          {/* Tagline */}
          <div style={fadeUp(frame, 440, 30, 15)}>
            <div
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: 28,
                color: GOLD_TEXT,
                fontStyle: "italic",
                letterSpacing: 1,
                opacity: 0.85,
              }}
            >
              Personalized in 24h
            </div>
          </div>

          {/* Decorative gold line */}
          <div
            style={{
              width: interpolate(frame, [445, 465], [0, 60], {
                easing: ease,
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              height: 1.5,
              background: GOLD_TEXT,
              opacity: 0.3,
              marginTop: 8,
            }}
          />

          {/* Price + CTA */}
          <div style={fadeUp(frame, 460, 30, 15)}>
            <div
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: 26,
                color: DARK,
                letterSpacing: 3,
                textTransform: "uppercase",
                textAlign: "center",
                marginTop: 16,
                opacity: 0.7,
              }}
            >
              From $38 · Link in bio
            </div>
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
