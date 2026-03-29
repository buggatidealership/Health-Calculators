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
const WHITE = "#FFFFFF";
const SAGE = "#8B9E7E";
const SAGE_LIGHT = "#E8EDE4";
const DARK = "#2D3A2E";
const GRAY = "#6B7B6C";

// Checkmark item component
const CheckItem: React.FC<{
  frame: number;
  delay: number;
  text: string;
}> = ({ frame, delay, text }) => {
  const progress = interpolate(frame, [delay, delay + 25], [0, 1], {
    easing: ease,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const y = interpolate(frame, [delay, delay + 25], [20, 0], {
    easing: ease,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Checkmark scale pop
  const checkScale = interpolate(frame, [delay + 10, delay + 22], [0, 1], {
    easing: ease,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 20,
        opacity: progress,
        transform: `translateY(${y}px)`,
      }}
    >
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          backgroundColor: SAGE,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: `scale(${checkScale})`,
          flexShrink: 0,
        }}
      >
        <svg width={18} height={14} viewBox="0 0 18 14">
          <polyline
            points="2,7 7,12 16,2"
            fill="none"
            stroke={WHITE}
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: 34,
          color: DARK,
          lineHeight: 1.3,
          letterSpacing: 0.3,
        }}
      >
        {text}
      </div>
    </div>
  );
};

export const EtsyCat_Digital: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Scene timing (540 frames = 18s at 30fps)
  // Scene 1: 0–145 (4.8s) — hook text on white
  // Scene 2: 125–285 (5.3s) — product image slides in
  // Scene 3: 265–405 (4.7s) — three selling points
  // Scene 4: 385–540 (5.2s) — CTA

  const s1 = sceneVis(frame, 0, 15, 125, 150);
  const s2 = sceneVis(frame, 120, 145, 265, 290);
  const s3 = sceneVis(frame, 260, 285, 385, 410);
  const s4 = sceneVis(frame, 380, 405, 530, 540);

  // Scene 2: Product image slides up from bottom
  const slideY = interpolate(frame, [145, 200], [800, 0], {
    easing: ease,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Scene 2: Subtle phone frame perspective
  const phoneScale = interpolate(frame, [145, 210], [0.9, 1], {
    easing: ease,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: WHITE }}>
      {/* Subtle sage accent line — top decorative element */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 6,
          background: SAGE,
          opacity: 0.3,
        }}
      />

      {/* Scene 1: Hook — large text on clean white */}
      <AbsoluteFill style={{ opacity: s1 }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 90px",
            gap: 24,
          }}
        >
          {/* Small sage leaf/sprig decorative element */}
          <svg
            width={60}
            height={40}
            viewBox="0 0 60 40"
            style={fadeUp(frame, 10, 30, 15)}
          >
            <path
              d="M30 38 Q10 20 30 2 Q50 20 30 38"
              fill="none"
              stroke={SAGE}
              strokeWidth={1.5}
            />
            <line x1={30} y1={38} x2={30} y2={2} stroke={SAGE} strokeWidth={1} opacity={0.5} />
          </svg>

          <div style={fadeUp(frame, 20, 45, 30)}>
            <div
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: 56,
                color: DARK,
                lineHeight: 1.35,
                textAlign: "center",
                fontWeight: 400,
                letterSpacing: 0.5,
              }}
            >
              Your wedding
              <br />
              invitations.
            </div>
          </div>

          <div style={fadeUp(frame, 50, 40, 25)}>
            <div
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: 56,
                color: SAGE,
                lineHeight: 1.35,
                textAlign: "center",
                fontWeight: 400,
                fontStyle: "italic",
              }}
            >
              Done in 10 minutes.
            </div>
          </div>
        </div>
      </AbsoluteFill>

      {/* Scene 2: Product image slides in like a preview */}
      <AbsoluteFill style={{ opacity: s2 }}>
        {/* Soft sage background wash */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(180deg, ${WHITE} 0%, ${SAGE_LIGHT} 50%, ${WHITE} 100%)`,
          }}
        />

        {/* Product image with phone-screen-like framing */}
        <div
          style={{
            position: "absolute",
            top: 160,
            left: "50%",
            transform: `translateX(-50%) translateY(${slideY}px) scale(${phoneScale})`,
            width: 860,
            borderRadius: 24,
            overflow: "hidden",
            boxShadow: "0 20px 80px rgba(0,0,0,0.12), 0 4px 20px rgba(0,0,0,0.06)",
          }}
        >
          <Img
            src={staticFile("products/etsy-invitation.png")}
            style={{
              width: "100%",
              height: 1100,
              objectFit: "cover",
            }}
          />
        </div>

        {/* Text overlay below the image */}
        <div
          style={{
            position: "absolute",
            bottom: 220,
            width: "100%",
            textAlign: "center",
            padding: "0 80px",
            ...fadeUp(frame, 210, 40, 20),
          }}
        >
          <div
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: 30,
              color: DARK,
              lineHeight: 1.6,
              letterSpacing: 1,
              opacity: 0.8,
            }}
          >
            Edit in Canva. Print anywhere.
          </div>
          <div
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: 28,
              color: SAGE,
              letterSpacing: 2,
              marginTop: 10,
              fontWeight: 600,
            }}
          >
            Instant download.
          </div>
        </div>
      </AbsoluteFill>

      {/* Scene 3: Three selling points stagger in */}
      <AbsoluteFill style={{ opacity: s3 }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 100px",
            gap: 50,
          }}
        >
          {/* Section header */}
          <div style={fadeUp(frame, 290, 30, 20)}>
            <div
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: 22,
                color: SAGE,
                letterSpacing: 6,
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: 20,
              }}
            >
              What you get
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 40,
              width: "100%",
            }}
          >
            <CheckItem
              frame={frame}
              delay={305}
              text="Fully customizable"
            />
            <CheckItem
              frame={frame}
              delay={335}
              text="Matching RSVP + details card"
            />
            <CheckItem
              frame={frame}
              delay={365}
              text="Print at home or at FedEx"
            />
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
            gap: 32,
          }}
        >
          {/* Decorative leaf */}
          <svg
            width={50}
            height={35}
            viewBox="0 0 50 35"
            style={fadeUp(frame, 408, 25, 12)}
          >
            <path
              d="M5 30 Q25 -5 45 30"
              fill="none"
              stroke={SAGE}
              strokeWidth={1.5}
            />
            <path
              d="M15 28 Q25 5 35 28"
              fill="none"
              stroke={SAGE}
              strokeWidth={1}
              opacity={0.5}
            />
          </svg>

          {/* Shop name */}
          <div style={fadeUp(frame, 415, 35, 20)}>
            <div
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: 52,
                color: DARK,
                letterSpacing: 2,
                fontWeight: 400,
                textAlign: "center",
              }}
            >
              Sage & Script
            </div>
            <div
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: 24,
                color: GRAY,
                letterSpacing: 10,
                textTransform: "uppercase",
                textAlign: "center",
                marginTop: 8,
              }}
            >
              Designs
            </div>
          </div>

          {/* Price */}
          <div style={fadeUp(frame, 440, 30, 15)}>
            <div
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: 38,
                color: SAGE,
                fontWeight: 700,
                textAlign: "center",
                letterSpacing: 1,
              }}
            >
              $12
            </div>
            <div
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: 22,
                color: GRAY,
                textAlign: "center",
                marginTop: 6,
                letterSpacing: 2,
              }}
            >
              Instant download
            </div>
          </div>

          {/* Social proof */}
          <div style={fadeUp(frame, 460, 30, 15)}>
            <div
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: 24,
                color: DARK,
                textAlign: "center",
                letterSpacing: 1,
                opacity: 0.7,
              }}
            >
              {"4.9 ⭐ · 2,400+ sales"}
            </div>
          </div>

          {/* Sage accent line */}
          <div
            style={{
              width: interpolate(frame, [465, 490], [0, 60], {
                easing: ease,
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              height: 2,
              background: SAGE,
              opacity: 0.4,
              marginTop: 8,
            }}
          />

          {/* Link in bio */}
          <div style={fadeUp(frame, 480, 25, 12)}>
            <div
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: 20,
                color: GRAY,
                letterSpacing: 4,
                textTransform: "uppercase",
              }}
            >
              Link in bio
            </div>
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
