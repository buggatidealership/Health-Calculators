import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

// ETSY REEL 2: "Gift Context" — The Perfect Gift
// Warm, cozy, premium gift catalog feel
// 18s = 540 frames @ 30fps, 1080x1920

const C = {
  bg: "#F5EDE0",
  brown: "#5C3D2E",
  terracotta: "#C67B5C",
  ribbon: "#B85C3A",
  cream: "#FFF8F0",
  text: "#3D2E22",
  sub: "#9A8778",
  gold: "#C4A46A",
};
const F = {
  serif: "'DM Serif Display', Georgia, serif",
  serifItalic: "'DM Serif Display', Georgia, serif",
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

// Scene 1: 0–134 (Hook text)
// Scene 2: 135–269 (Gift wrapping animation)
// Scene 3: 270–404 (Customer quote)
// Scene 4: 405–540 (Finished mug + CTA)

function HookScene({ frame }: { frame: number }) {
  const vis = sceneVis(frame, 0, 120, 15, 14);
  if (vis === 0) return null;

  return (
    <div style={{
      position: "absolute", inset: 0, opacity: vis,
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      padding: "0 100px",
    }}>
      {/* Decorative line above */}
      <div style={{
        width: ease(frame, 10, 25, 0, 120), height: 2,
        background: C.terracotta, marginBottom: 50, opacity: 0.5,
      }} />
      <div style={{ textAlign: "center", ...fadeUp(frame, 8, 20) }}>
        <div style={{
          fontSize: 58, fontFamily: F.serif, color: C.text,
          lineHeight: 1.35, letterSpacing: 0.5,
        }}>
          For the friend<br />who already has<br />everything.
        </div>
      </div>
      {/* Decorative line below */}
      <div style={{
        width: ease(frame, 30, 25, 0, 120), height: 2,
        background: C.terracotta, marginTop: 50, opacity: 0.5,
      }} />
    </div>
  );
}

function GiftWrapScene({ frame }: { frame: number }) {
  const vis = sceneVis(frame, 135, 255, 15, 14);
  if (vis === 0) return null;

  const localF = frame - 135;

  // Paper folding animation: two flaps closing around circle
  const flapAngle = ease(localF + 135, 145, 40, 45, 0);
  // Ribbon tying
  const ribbonWidth = ease(localF + 135, 185, 30, 0, 360);
  const bowScale = ease(localF + 135, 215, 20, 0, 1);

  return (
    <div style={{
      position: "absolute", inset: 0, opacity: vis,
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      {/* Wrapping paper background shape */}
      <div style={{
        position: "relative", width: 400, height: 400,
      }}>
        {/* Paper base */}
        <div style={{
          position: "absolute", inset: -30,
          background: C.cream,
          borderRadius: 16,
          boxShadow: "0 8px 40px rgba(92,61,46,0.12)",
          border: `1px solid rgba(198,123,92,0.2)`,
        }} />

        {/* Mug circle inside */}
        <div style={{
          position: "absolute", top: 60, left: 60, width: 280, height: 280,
          borderRadius: "50%",
          background: `linear-gradient(135deg, #E8DDD0, #D4C8BA)`,
          boxShadow: "inset 0 4px 20px rgba(0,0,0,0.06)",
        }} />

        {/* Left paper flap */}
        <div style={{
          position: "absolute", top: -30, left: -30, width: 230, height: 460,
          background: `linear-gradient(90deg, ${C.cream}, rgba(245,237,224,0.9))`,
          borderRadius: "16px 0 0 16px",
          transformOrigin: "right center",
          transform: `rotateY(${flapAngle}deg)`,
          boxShadow: flapAngle > 5 ? "4px 0 20px rgba(0,0,0,0.05)" : "none",
        }} />

        {/* Right paper flap */}
        <div style={{
          position: "absolute", top: -30, right: -30, width: 230, height: 460,
          background: `linear-gradient(270deg, ${C.cream}, rgba(245,237,224,0.9))`,
          borderRadius: "0 16px 16px 0",
          transformOrigin: "left center",
          transform: `rotateY(${-flapAngle}deg)`,
          boxShadow: flapAngle > 5 ? "-4px 0 20px rgba(0,0,0,0.05)" : "none",
        }} />

        {/* Ribbon horizontal */}
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: ribbonWidth, height: 14,
          background: C.ribbon,
          borderRadius: 7,
          boxShadow: "0 2px 8px rgba(184,92,58,0.3)",
        }} />

        {/* Ribbon vertical */}
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: 14, height: ribbonWidth,
          background: C.ribbon,
          borderRadius: 7,
          boxShadow: "0 2px 8px rgba(184,92,58,0.3)",
        }} />

        {/* Bow */}
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: `translate(-50%, -50%) scale(${bowScale})`,
        }}>
          {/* Left loop */}
          <div style={{
            position: "absolute", top: -30, left: -40,
            width: 40, height: 50, borderRadius: "50% 50% 50% 50%",
            border: `6px solid ${C.ribbon}`, background: "transparent",
            transform: "rotate(-30deg)",
          }} />
          {/* Right loop */}
          <div style={{
            position: "absolute", top: -30, right: -40,
            width: 40, height: 50, borderRadius: "50% 50% 50% 50%",
            border: `6px solid ${C.ribbon}`, background: "transparent",
            transform: "rotate(30deg)",
          }} />
          {/* Center knot */}
          <div style={{
            position: "absolute", top: -10, left: -10,
            width: 20, height: 20, borderRadius: "50%",
            background: C.ribbon,
          }} />
        </div>
      </div>

      {/* Subtle label below */}
      <div style={{
        position: "absolute", bottom: 440, width: "100%", textAlign: "center",
        ...fadeUp(frame, 220, 18),
      }}>
        <span style={{
          fontSize: 26, fontFamily: F.sans, color: C.sub,
          letterSpacing: 4, textTransform: "lowercase", fontWeight: 300,
        }}>
          wrapped with care
        </span>
      </div>
    </div>
  );
}

function QuoteScene({ frame }: { frame: number }) {
  const vis = sceneVis(frame, 270, 390, 15, 14);
  if (vis === 0) return null;

  return (
    <div style={{
      position: "absolute", inset: 0, opacity: vis,
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      padding: "0 90px",
    }}>
      {/* Large quote mark */}
      <div style={{
        ...fadeUp(frame, 278, 16),
        fontSize: 180, fontFamily: F.serif, color: C.terracotta,
        lineHeight: 0.6, opacity: 0.25, marginBottom: -20,
      }}>
        {"\u201C"}
      </div>

      {/* Quote text */}
      <div style={{ textAlign: "center", ...fadeUp(frame, 290, 20) }}>
        <div style={{
          fontSize: 42, fontFamily: F.serifItalic, fontStyle: "italic",
          color: C.text, lineHeight: 1.5, letterSpacing: 0.3,
        }}>
          She held it and said:{" "}
          <span style={{ color: C.terracotta }}>
            'this is the most thoughtful gift I've ever received.'
          </span>
        </div>
      </div>

      {/* Attribution line */}
      <div style={{
        marginTop: 40, ...fadeUp(frame, 320, 16),
      }}>
        <div style={{
          width: 60, height: 2, background: C.terracotta,
          margin: "0 auto 16px", opacity: 0.4,
        }} />
        <span style={{
          fontSize: 22, fontFamily: F.sans, color: C.sub,
          letterSpacing: 3, textTransform: "lowercase", fontWeight: 300,
        }}>
          actual customer
        </span>
      </div>
    </div>
  );
}

function FinalScene({ frame }: { frame: number }) {
  const vis = sceneVis(frame, 405, 530, 18, 1);
  if (vis === 0) return null;

  const mugScale = ease(frame, 405, 22, 0.9, 1);

  return (
    <div style={{
      position: "absolute", inset: 0, opacity: vis,
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
    }}>
      {/* Warm circle glow */}
      <div style={{
        position: "absolute", top: "38%", left: "50%", transform: "translate(-50%, -50%)",
        width: 440, height: 440, borderRadius: "50%",
        background: `radial-gradient(circle, rgba(198,123,92,0.08), transparent 70%)`,
      }} />

      {/* Abstract mug */}
      <div style={{
        transform: `scale(${mugScale})`, marginTop: -60,
        display: "flex", flexDirection: "column", alignItems: "center",
      }}>
        <div style={{
          width: 200, height: 240, borderRadius: "10px 10px 28px 28px",
          background: `linear-gradient(135deg, #E8DDD0, #D4C8BA)`,
          boxShadow: "0 16px 50px rgba(92,61,46,0.15)",
          position: "relative",
        }}>
          {/* Handle */}
          <div style={{
            position: "absolute", right: -48, top: 45,
            width: 44, height: 110, borderRadius: "0 36px 36px 0",
            border: `10px solid #D4C8BA`,
            borderLeft: "none",
          }} />
          {/* Glaze accent */}
          <div style={{
            position: "absolute", top: 10, left: 30, right: 30, height: 3,
            background: C.terracotta, borderRadius: 2, opacity: 0.4,
          }} />
        </div>
      </div>

      {/* Main text */}
      <div style={{ marginTop: 70, textAlign: "center", ...fadeUp(frame, 430, 18) }}>
        <div style={{
          fontSize: 44, fontFamily: F.serif, color: C.text,
          lineHeight: 1.4, letterSpacing: 0.5,
        }}>
          Made by hand.<br />Given with intention.
        </div>
      </div>

      {/* CTA */}
      <div style={{ marginTop: 50, textAlign: "center", ...fadeUp(frame, 460, 18) }}>
        <div style={{
          fontSize: 24, fontFamily: F.sans, color: C.sub,
          letterSpacing: 5, textTransform: "lowercase", fontWeight: 300,
        }}>
          earthen studio · ships gift-wrapped
        </div>
      </div>
    </div>
  );
}

export const Etsy_Gift: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <div style={{
      width: 1080, height: 1920, background: C.bg,
      overflow: "hidden", position: "relative",
      fontFamily: F.sans,
    }}>
      <HookScene frame={frame} />
      <GiftWrapScene frame={frame} />
      <QuoteScene frame={frame} />
      <FinalScene frame={frame} />
    </div>
  );
};
