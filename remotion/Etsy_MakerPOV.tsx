import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";

// ETSY REEL 3: "Maker's POV" — First Person Craft
// Immersive, meditative, from the maker's eyes
// 18s = 540 frames @ 30fps, 1080x1920

const C = {
  bg: "#e8e2d8",
  clay: "#8B6F4E",
  clayLight: "#B8976A",
  clayDark: "#5C4632",
  terracotta: "#C67B5C",
  sage: "#7A9B7E",
  sageLight: "#A3C4A7",
  hand: "#4A3828",
  text: "#3D2E22",
  sub: "#8A7E70",
  cream: "#F5EDE0",
};
const F = {
  serif: "'DM Serif Display', Georgia, serif",
  sans: "'Inter', -apple-system, sans-serif",
};

function ease(frame: number, start: number, dur: number, from: number, to: number, fn = Easing.out(Easing.cubic)) {
  return interpolate(frame, [start, start + dur], [from, to], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: fn,
  });
}
function fadeUp(frame: number, start: number, dur = 14) {
  return {
    opacity: ease(frame, start, dur, 0, 1),
    transform: `translateY(${ease(frame, start, dur, 40, 0)}px)`,
  };
}
function sceneVis(frame: number, start: number, end: number, fi = 10, fo = 10) {
  if (frame < start - 3 || frame > end + fo + 3) return 0;
  return Math.min(
    interpolate(frame, [start, start + fi], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    interpolate(frame, [end, end + Math.max(fo, 1)], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
  );
}

// Scene 1: 0–134 (Hands on clay — looking down)
// Scene 2: 135–269 (Trimming — shavings curling)
// Scene 3: 270–404 (Glazing — brush stroke)
// Scene 4: 405–540 (Finished piece lifted)

function HandsOnClay({ frame }: { frame: number }) {
  const vis = sceneVis(frame, 0, 120, 15, 14);
  if (vis === 0) return null;

  // Clay form being shaped
  const clayWidth = ease(frame, 5, 80, 260, 180);
  const clayHeight = ease(frame, 5, 80, 120, 220);
  const spin = (frame * 3) % 360;

  // Hand silhouettes pressing in
  const handPress = ease(frame, 10, 60, 80, 20);

  // Delayed text
  const textOp = ease(frame, 60, 18, 0, 1);
  const textY = ease(frame, 60, 18, 30, 0);

  return (
    <div style={{
      position: "absolute", inset: 0, opacity: vis,
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      {/* Process photo — hands on pottery wheel */}
      <Img src={staticFile("etsy/mug-process.png")} style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: 650, height: 650, objectFit: "contain", borderRadius: 20,
      }} />

      {/* Text appears after 2 seconds (60 frames) */}
      <div style={{
        position: "absolute", bottom: 360, width: "100%", textAlign: "center",
        opacity: textOp,
        transform: `translateY(${textY}px)`,
      }}>
        <div style={{
          fontSize: 40, fontFamily: F.serif, color: C.text,
          letterSpacing: 0.5,
        }}>
          Every morning starts here.
        </div>
      </div>
    </div>
  );
}

function TrimmingScene({ frame }: { frame: number }) {
  const vis = sceneVis(frame, 135, 255, 15, 14);
  if (vis === 0) return null;

  const localF = frame - 135;
  const spin = (localF * 4) % 360;

  // Shavings curling away
  const shavings = Array.from({ length: 8 }, (_, i) => {
    const delay = i * 12;
    const progress = ease(localF + 135, 145 + delay, 60, 0, 1);
    const angle = (i * 45 + localF * 2) * (Math.PI / 180);
    const radius = 160 + progress * 120;
    return {
      x: 540 + Math.cos(angle) * radius,
      y: 780 + Math.sin(angle) * radius + progress * 40,
      rotation: progress * 360 + i * 30,
      opacity: Math.max(0, 1 - progress * 0.8),
      width: 30 + i * 4,
      curl: progress * 180,
    };
  });

  return (
    <div style={{
      position: "absolute", inset: 0, opacity: vis,
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      {/* Pot form (side view, spinning) */}
      <div style={{
        position: "absolute", top: "38%", left: "50%",
        transform: `translate(-50%, -50%)`,
      }}>
        {/* Pot body */}
        <div style={{
          width: 240, height: 280,
          borderRadius: "20px 20px 40px 40px",
          background: `linear-gradient(135deg, ${C.clay}, ${C.clayDark})`,
          boxShadow: `0 8px 40px rgba(0,0,0,0.15), inset 0 -10px 20px rgba(0,0,0,0.1)`,
          position: "relative",
        }}>
          {/* Trimming line (where tool meets clay) */}
          <div style={{
            position: "absolute", bottom: 60, left: -10, right: -10,
            height: 3, background: C.clayLight,
            opacity: 0.6,
          }} />
          {/* Spin lines */}
          {[0.3, 0.5, 0.7].map((p, i) => (
            <div key={i} style={{
              position: "absolute", top: `${p * 100}%`, left: 0, right: 0,
              height: 1.5, background: `rgba(255,255,255,0.06)`,
              transform: `translateX(${Math.sin(spin * 0.02 + i) * 3}px)`,
            }} />
          ))}
        </div>

        {/* Trimming tool */}
        <div style={{
          position: "absolute", bottom: 40, right: -60,
          width: 80, height: 8, background: "#6B6B6B",
          borderRadius: 4,
          transform: `rotate(-15deg)`,
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        }} />
      </div>

      {/* Shavings */}
      {shavings.map((s, i) => (
        <div key={i} style={{
          position: "absolute", left: s.x, top: s.y,
          width: s.width, height: 8,
          background: C.clayLight,
          borderRadius: "4px",
          transform: `rotate(${s.rotation}deg) scaleX(${1 + Math.sin(s.curl * Math.PI / 180) * 0.5})`,
          opacity: s.opacity * 0.7,
          boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
        }} />
      ))}

      {/* Subtle text */}
      <div style={{
        position: "absolute", bottom: 380, width: "100%", textAlign: "center",
        ...fadeUp(frame, 200, 18),
      }}>
        <span style={{
          fontSize: 24, fontFamily: F.sans, color: C.sub,
          letterSpacing: 6, textTransform: "lowercase", fontWeight: 300,
        }}>
          trimmed by feel
        </span>
      </div>
    </div>
  );
}

function GlazingScene({ frame }: { frame: number }) {
  const vis = sceneVis(frame, 270, 390, 15, 14);
  if (vis === 0) return null;

  const localF = frame - 270;

  // Brush stroke sweeping across
  const strokeProgress = ease(localF + 270, 280, 60, 0, 1);
  const strokeWidth = 1080 * strokeProgress;

  // Color spreading from stroke
  const colorSpread = ease(localF + 270, 300, 50, 0, 200);

  return (
    <div style={{
      position: "absolute", inset: 0, opacity: vis,
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      {/* Surface being glazed */}
      <div style={{
        position: "absolute", top: 500, left: 100, right: 100, height: 500,
        borderRadius: 30,
        background: C.clay,
        overflow: "hidden",
      }}>
        {/* Glaze color spreading */}
        <div style={{
          position: "absolute", inset: 0,
          background: `linear-gradient(135deg, ${C.sage}, ${C.sageLight})`,
          clipPath: `inset(0 ${100 - strokeProgress * 100}% 0 0)`,
          transition: "none",
        }} />

        {/* Brush stroke line */}
        <div style={{
          position: "absolute", top: "45%", left: 0,
          width: strokeWidth, height: 40,
          background: `linear-gradient(90deg, ${C.sage}00, ${C.sage} 20%, ${C.sageLight})`,
          borderRadius: "0 20px 20px 0",
          boxShadow: `0 4px 20px rgba(122,155,126,0.3)`,
        }} />

        {/* Bristle marks */}
        {strokeProgress > 0.3 && Array.from({ length: 6 }, (_, i) => (
          <div key={i} style={{
            position: "absolute",
            top: `${40 + i * 4}%`,
            left: 0,
            width: strokeWidth * 0.9,
            height: 1.5,
            background: `rgba(255,255,255,0.08)`,
            opacity: ease(localF + 270, 300 + i * 3, 15, 0, 1),
          }} />
        ))}

        {/* Color bleeding down */}
        <div style={{
          position: "absolute", top: "50%", left: 0,
          width: strokeWidth * 0.8, height: colorSpread,
          background: `linear-gradient(180deg, ${C.sage}80, ${C.sage}00)`,
          borderRadius: "0 0 20px 20px",
        }} />
      </div>

      {/* Brush handle */}
      <div style={{
        position: "absolute", top: 680, left: 80 + strokeWidth * 0.75,
        width: 16, height: 180,
        background: `linear-gradient(180deg, #B8A898, #8B7B6B)`,
        borderRadius: 8,
        transform: "rotate(-15deg)",
        transformOrigin: "top center",
        boxShadow: "2px 4px 12px rgba(0,0,0,0.1)",
      }}>
        {/* Brush head */}
        <div style={{
          position: "absolute", top: -20, left: -8, width: 32, height: 30,
          background: C.sage,
          borderRadius: "8px 8px 4px 4px",
          opacity: 0.8,
        }} />
      </div>

      {/* Color name text */}
      <div style={{
        position: "absolute", bottom: 380, width: "100%", textAlign: "center",
        ...fadeUp(frame, 330, 18),
      }}>
        <span style={{
          fontSize: 24, fontFamily: F.sans, color: C.sub,
          letterSpacing: 6, textTransform: "lowercase", fontWeight: 300,
        }}>
          sage green — hand-mixed
        </span>
      </div>
    </div>
  );
}

function LiftedPiece({ frame }: { frame: number }) {
  const vis = sceneVis(frame, 405, 530, 18, 1);
  if (vis === 0) return null;

  const liftY = ease(frame, 405, 30, 100, 0);
  const mugScale = ease(frame, 405, 25, 0.88, 1);

  return (
    <div style={{
      position: "absolute", inset: 0, opacity: vis,
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
    }}>
      {/* Warm glow */}
      <div style={{
        position: "absolute", top: "38%", left: "50%", transform: "translate(-50%, -50%)",
        width: 500, height: 500, borderRadius: "50%",
        background: `radial-gradient(circle, rgba(198,123,92,0.06), transparent 70%)`,
      }} />

      {/* Product mug image */}
      <div style={{
        transform: `translateY(${liftY}px) scale(${mugScale})`,
        display: "flex", flexDirection: "column", alignItems: "center",
        marginTop: -80,
      }}>
        <Img src={staticFile("etsy/mug-hero.png")} style={{ width: 650, height: 650, objectFit: "contain", borderRadius: 20 }} />
      </div>

      {/* Main text */}
      <div style={{ marginTop: 70, textAlign: "center", ...fadeUp(frame, 435, 18) }}>
        <div style={{
          fontSize: 44, fontFamily: F.serif, color: C.text,
          lineHeight: 1.4, letterSpacing: 0.5,
        }}>
          From my hands<br />to your morning.
        </div>
      </div>

      {/* CTA */}
      <div style={{ marginTop: 50, textAlign: "center", ...fadeUp(frame, 465, 18) }}>
        <div style={{
          fontSize: 24, fontFamily: F.sans, color: C.sub,
          letterSpacing: 5, textTransform: "lowercase", fontWeight: 300,
        }}>
          earthen studio · each one made by hand
        </div>
      </div>
    </div>
  );
}

export const Etsy_MakerPOV: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <div style={{
      width: 1080, height: 1920, background: C.bg,
      overflow: "hidden", position: "relative",
      fontFamily: F.sans,
    }}>
      <HandsOnClay frame={frame} />
      <TrimmingScene frame={frame} />
      <GlazingScene frame={frame} />
      <LiftedPiece frame={frame} />
    </div>
  );
};
