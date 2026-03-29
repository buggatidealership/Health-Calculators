import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, Easing, interpolate } from "remotion";

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
    return Math.max(v, 1 / 255); // never 0
  }
  return 0;
};

// ── Palette ──
const BG = "#faf8f4";
const GOLD = "#d4a95a";
const GOLD_PALE = "#f0e3c8";
const SAGE = "#a8b5a0";
const WARM_WHITE = "#f5efe6";
const DARK = "#3a3530";

// ── Steam wisp component ──
const SteamWisp: React.FC<{
  frame: number;
  delay: number;
  x: number;
  drift: number;
}> = ({ frame, delay, x, drift }) => {
  const t = Math.max(0, frame - delay);
  const progress = Math.min(t / 120, 1);
  const y = -progress * 140;
  const xOff = Math.sin(progress * Math.PI * 2 + drift) * 15;
  const opacity = progress < 0.3
    ? progress / 0.3 * 0.4
    : progress < 0.7
    ? 0.4
    : (1 - progress) / 0.3 * 0.4;

  return (
    <div
      style={{
        position: "absolute",
        left: x + xOff,
        bottom: 0,
        width: 4,
        height: 50,
        borderRadius: 4,
        background: `rgba(212, 169, 90, ${opacity})`,
        transform: `translateY(${y}px)`,
        filter: "blur(6px)",
      }}
    />
  );
};

export const Etsy_Editorial: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Scene timing (frames) — 540 total, 30fps = 18s
  // Scene 1: 0–135 (4.5s) — dawn light
  // Scene 2: 120–315 (6.5s) — table scene
  // Scene 3: 300–435 (4.5s) — zoom into mug
  // Scene 4: 420–540 (4s) — brand close

  const s1 = sceneVis(frame, 0, 20, 120, 140);
  const s2 = sceneVis(frame, 110, 140, 290, 315);
  const s3 = sceneVis(frame, 285, 310, 420, 440);
  const s4 = sceneVis(frame, 415, 440, 530, 540);

  // Scene 1: Dawn light gradient fills screen
  const dawnProgress = interpolate(frame, [0, 120], [0, 1], {
    easing: ease,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const dawnGoldOpacity = interpolate(frame, [20, 90], [0, 0.4], {
    easing: ease,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Scene 2: Table scene elements stagger in
  const tableY = interpolate(frame, [140, 180], [40, 0], {
    easing: ease,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Scene 3: Zoom
  const zoomScale = interpolate(frame, [300, 420], [1, 1.6], {
    easing: ease,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: BG }}>
      {/* Scene 1: Dawn light */}
      <AbsoluteFill style={{ opacity: s1 }}>
        {/* Gradient sweep from bottom-left */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(
              135deg,
              ${WARM_WHITE} ${(1 - dawnProgress) * 100}%,
              ${GOLD_PALE} ${(1 - dawnProgress) * 100 + 30}%,
              ${BG} 100%
            )`,
          }}
        />
        {/* Gold light bloom */}
        <div
          style={{
            position: "absolute",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(212,169,90,${dawnGoldOpacity}), transparent 70%)`,
            top: "20%",
            left: "10%",
            transform: `scale(${0.5 + dawnProgress * 1.5})`,
            filter: "blur(40px)",
          }}
        />
        {/* Thin serif text fading in late */}
        <div
          style={{
            position: "absolute",
            bottom: 240,
            width: "100%",
            textAlign: "center",
            ...fadeUp(frame, 70, 40, 20),
          }}
        >
          <div
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: 28,
              color: DARK,
              letterSpacing: 6,
              textTransform: "uppercase",
              opacity: 0.5,
            }}
          >
            a quiet morning
          </div>
        </div>
      </AbsoluteFill>

      {/* Scene 2: Table scene — abstract still life */}
      <AbsoluteFill style={{ opacity: s2 }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            transform: `translateY(${tableY}px)`,
          }}
        >
          {/* Window light rectangle — top right */}
          <div
            style={{
              position: "absolute",
              top: 180,
              right: 80,
              width: 240,
              height: 400,
              background: `linear-gradient(180deg, ${GOLD_PALE}, transparent)`,
              opacity: interpolate(frame, [145, 180], [0, 0.35], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              borderRadius: 4,
            }}
          />

          {/* Table surface — a long horizontal rectangle */}
          <div
            style={{
              position: "absolute",
              top: 900,
              width: 800,
              height: 8,
              background: SAGE,
              opacity: interpolate(frame, [150, 185], [0, 0.4], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              borderRadius: 4,
            }}
          />

          {/* Book spine — thin vertical rectangle */}
          <div
            style={{
              position: "absolute",
              top: 720,
              left: 180,
              width: 24,
              height: 160,
              background: SAGE,
              borderRadius: 3,
              ...fadeUp(frame, 165, 35, 25),
            }}
          />

          {/* Mug — circle body + handle */}
          <div
            style={{
              position: "absolute",
              top: 660,
              left: "50%",
              marginLeft: -60,
              ...fadeUp(frame, 175, 40, 30),
            }}
          >
            {/* Mug body */}
            <div
              style={{
                width: 120,
                height: 140,
                borderRadius: "10px 10px 20px 20px",
                background: `linear-gradient(160deg, ${GOLD}, #c49648)`,
                position: "relative",
              }}
            >
              {/* Lip — subtle lighter stripe */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  width: "100%",
                  height: 8,
                  background: GOLD_PALE,
                  borderRadius: "10px 10px 0 0",
                }}
              />
              {/* Thumb indent */}
              <div
                style={{
                  position: "absolute",
                  top: 40,
                  left: 20,
                  width: 18,
                  height: 28,
                  borderRadius: "50%",
                  background: "rgba(0,0,0,0.08)",
                }}
              />
            </div>
            {/* Handle */}
            <div
              style={{
                position: "absolute",
                right: -28,
                top: 25,
                width: 28,
                height: 70,
                border: `6px solid ${GOLD}`,
                borderLeft: "none",
                borderRadius: "0 20px 20px 0",
              }}
            />
            {/* Steam wisps */}
            <div style={{ position: "absolute", top: -20, left: 20, width: 80, height: 160 }}>
              {[0, 1, 2].map((i) => (
                <SteamWisp
                  key={i}
                  frame={frame}
                  delay={180 + i * 40}
                  x={15 + i * 25}
                  drift={i * 2.1}
                />
              ))}
            </div>
          </div>

          {/* Small plate circle — right of mug */}
          <div
            style={{
              position: "absolute",
              top: 780,
              right: 200,
              width: 70,
              height: 70,
              borderRadius: "50%",
              border: `3px solid ${SAGE}`,
              opacity: interpolate(frame, [190, 220], [0, 0.3], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          />
        </div>
      </AbsoluteFill>

      {/* Scene 3: Zoom into mug — glaze detail */}
      <AbsoluteFill style={{ opacity: s3 }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            transform: `scale(${zoomScale})`,
          }}
        >
          {/* Large mug close-up — abstract glaze */}
          <div
            style={{
              width: 500,
              height: 580,
              borderRadius: "30px 30px 60px 60px",
              background: `linear-gradient(
                170deg,
                #c49648 0%,
                ${GOLD} 30%,
                #b8884a 45%,
                ${GOLD_PALE} 60%,
                #c49648 80%,
                ${GOLD} 100%
              )`,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Glaze variation streaks */}
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  top: 80 + i * 120,
                  left: 0,
                  width: "100%",
                  height: 40 + i * 8,
                  background: `linear-gradient(90deg, transparent, rgba(255,255,255,${0.08 + i * 0.03}), transparent)`,
                  transform: `rotate(${-3 + i * 2}deg)`,
                }}
              />
            ))}
            {/* Imperfect lip */}
            <div
              style={{
                position: "absolute",
                top: 0,
                width: "100%",
                height: 20,
                background: GOLD_PALE,
                borderRadius: "30px 30px 0 0",
                clipPath: "polygon(0 40%, 15% 20%, 30% 50%, 50% 25%, 70% 45%, 85% 20%, 100% 35%, 100% 100%, 0 100%)",
              }}
            />
            {/* Thumb indent — larger */}
            <div
              style={{
                position: "absolute",
                top: 160,
                left: 80,
                width: 60,
                height: 90,
                borderRadius: "50%",
                background: "rgba(0,0,0,0.06)",
                border: "1px solid rgba(0,0,0,0.04)",
              }}
            />
          </div>
        </div>

        {/* Text overlay */}
        <div
          style={{
            position: "absolute",
            bottom: 200,
            width: "100%",
            textAlign: "center",
            padding: "0 80px",
            ...fadeUp(frame, 330, 40, 25),
          }}
        >
          <div
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: 42,
              color: DARK,
              lineHeight: 1.5,
              fontStyle: "italic",
              letterSpacing: 1,
            }}
          >
            No two are the same.
            <br />
            That's the point.
          </div>
        </div>
      </AbsoluteFill>

      {/* Scene 4: Brand close */}
      <AbsoluteFill style={{ opacity: s4 }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 40,
          }}
        >
          {/* Small decorative line */}
          <div
            style={{
              width: interpolate(frame, [440, 470], [0, 80], {
                easing: ease,
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              height: 2,
              background: GOLD,
              opacity: 0.5,
            }}
          />

          {/* Brand name */}
          <div style={fadeUp(frame, 445, 35, 20)}>
            <div
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: 64,
                color: DARK,
                letterSpacing: 8,
                textTransform: "uppercase",
                fontWeight: 400,
              }}
            >
              Earthen
            </div>
            <div
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: 28,
                color: DARK,
                letterSpacing: 14,
                textTransform: "uppercase",
                textAlign: "center",
                marginTop: 8,
                opacity: 0.6,
              }}
            >
              Studio
            </div>
          </div>

          {/* Tagline */}
          <div style={fadeUp(frame, 465, 35, 15)}>
            <div
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: 30,
                color: DARK,
                fontStyle: "italic",
                opacity: 0.7,
                letterSpacing: 2,
              }}
            >
              Your morning, elevated.
            </div>
          </div>

          {/* CTA */}
          <div style={fadeUp(frame, 485, 30, 15)}>
            <div
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: 22,
                color: SAGE,
                letterSpacing: 4,
                textTransform: "uppercase",
                marginTop: 40,
              }}
            >
              Shop the collection · Link in bio
            </div>
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
