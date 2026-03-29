import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

// ETSY REEL 1: "ASMR Texture" — Sensory Close-Up
// Luxury ASMR feel: clay → glaze → kiln → finished mug
// 18s = 540 frames @ 30fps, 1080x1920

const C = {
  bg: "#0f0f0f",
  clay: "#8B6F4E",
  clayLight: "#B8976A",
  glaze: "#4A7C9B",
  glazeDeep: "#2C5F7A",
  fire: "#E87A2E",
  fireGlow: "#FF9E4A",
  cream: "#F5EDE0",
  text: "#E8E2D8",
  sub: "#8A8279",
};
const F = {
  thin: "'Inter', -apple-system, sans-serif",
  serif: "'DM Serif Display', Georgia, serif",
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

// Scene 1: 0–134 (wet clay pulled up on wheel)
// Scene 2: 135–269 (glaze dripping)
// Scene 3: 270–404 (kiln fire glow)
// Scene 4: 405–540 (finished mug + text)

function ClayWheel({ frame }: { frame: number }) {
  const vis = sceneVis(frame, 0, 120, 15, 14);
  if (vis === 0) return null;

  // Spinning wheel base
  const spin = ease(frame, 0, 120, 0, 720);
  // Clay pulling upward
  const pullHeight = ease(frame, 10, 90, 80, 340);
  const pullWidth = ease(frame, 10, 90, 180, 110);
  // Wobble for organic feel
  const wobble = Math.sin(frame * 0.15) * 6;

  return (
    <div style={{ position: "absolute", inset: 0, opacity: vis, display: "flex", alignItems: "center", justifyContent: "center" }}>
      {/* Wheel disc */}
      <div style={{
        position: "absolute", bottom: 520, width: 480, height: 40,
        borderRadius: "50%", background: `radial-gradient(ellipse, #6B5B4A, #3D3228)`,
        transform: `rotate(${spin}deg)`,
        boxShadow: "0 4px 40px rgba(139,111,78,0.3)",
      }} />
      {/* Clay form rising */}
      <div style={{
        position: "absolute", bottom: 540,
        width: pullWidth + wobble, height: pullHeight,
        borderRadius: `${pullWidth / 2}px ${pullWidth / 2}px 20px 20px`,
        background: `linear-gradient(180deg, ${C.clayLight} 0%, ${C.clay} 60%, #6B5B4A 100%)`,
        boxShadow: `0 0 60px rgba(139,111,78,0.4), inset 0 -20px 40px rgba(0,0,0,0.2)`,
        transform: `translateX(${wobble}px)`,
      }} />
      {/* Wet shine highlight */}
      <div style={{
        position: "absolute", bottom: 540 + pullHeight * 0.4,
        width: pullWidth * 0.3, height: pullHeight * 0.5,
        borderRadius: "50%",
        background: "rgba(255,255,255,0.08)",
        filter: "blur(8px)",
        transform: `translateX(${-pullWidth * 0.15 + wobble}px)`,
      }} />
      {/* Finger grooves (horizontal lines) */}
      {[0.25, 0.45, 0.65].map((pct, i) => (
        <div key={i} style={{
          position: "absolute",
          bottom: 540 + pullHeight * pct,
          width: pullWidth * 0.85 + wobble,
          height: 2,
          background: "rgba(0,0,0,0.12)",
          borderRadius: 2,
          opacity: ease(frame, 30 + i * 15, 20, 0, 0.7),
        }} />
      ))}
    </div>
  );
}

function GlazeDrip({ frame }: { frame: number }) {
  const vis = sceneVis(frame, 135, 255, 15, 14);
  if (vis === 0) return null;

  const localF = frame - 135;
  const drips = [
    { x: 380, delay: 0, speed: 1, width: 60 },
    { x: 520, delay: 15, speed: 0.8, width: 80 },
    { x: 680, delay: 8, speed: 1.2, width: 50 },
    { x: 300, delay: 22, speed: 0.9, width: 70 },
    { x: 600, delay: 5, speed: 1.1, width: 55 },
  ];

  return (
    <div style={{ position: "absolute", inset: 0, opacity: vis }}>
      {/* Surface being glazed */}
      <div style={{
        position: "absolute", top: 280, left: 100, right: 100, height: 600,
        borderRadius: 40,
        background: `linear-gradient(180deg, ${C.glaze} 0%, ${C.glazeDeep} 100%)`,
        opacity: ease(localF + 135, 135, 20, 0, 1),
      }} />
      {/* Drips */}
      {drips.map((d, i) => {
        const dripStart = d.delay;
        const dripLen = ease(localF, dripStart, 80 / d.speed, 0, 700);
        const dripOp = ease(localF, dripStart, 15, 0, 0.9);
        const bulge = ease(localF, dripStart + 60, 30, 0, 20);
        return (
          <React.Fragment key={i}>
            <div style={{
              position: "absolute", top: 280, left: d.x - d.width / 2,
              width: d.width, height: dripLen,
              borderRadius: `${d.width / 2}px`,
              background: `linear-gradient(180deg, ${C.glaze}00, ${C.glaze} 20%, ${C.glazeDeep})`,
              opacity: dripOp,
            }} />
            {/* Drip bulb at bottom */}
            <div style={{
              position: "absolute", top: 280 + dripLen - 10,
              left: d.x - (d.width + bulge) / 2,
              width: d.width + bulge, height: d.width + bulge,
              borderRadius: "50%",
              background: C.glaze,
              opacity: dripOp * 0.8,
              boxShadow: `0 4px 20px rgba(74,124,155,0.4)`,
            }} />
          </React.Fragment>
        );
      })}
      {/* Sheen */}
      <div style={{
        position: "absolute", top: 320, left: 200, width: 200, height: 400,
        background: "rgba(255,255,255,0.06)", borderRadius: "50%", filter: "blur(20px)",
        transform: `translateY(${ease(localF, 0, 100, -50, 50)}px)`,
      }} />
    </div>
  );
}

function KilnFire({ frame }: { frame: number }) {
  const vis = sceneVis(frame, 270, 390, 15, 14);
  if (vis === 0) return null;

  const localF = frame - 270;
  const pulse = Math.sin(localF * 0.08) * 0.15 + 0.85;
  const flicker1 = Math.sin(localF * 0.2) * 0.1 + 0.9;
  const flicker2 = Math.sin(localF * 0.31 + 1) * 0.12 + 0.88;

  return (
    <div style={{ position: "absolute", inset: 0, opacity: vis }}>
      {/* Deep glow background */}
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(ellipse at 50% 60%, rgba(232,122,46,${0.3 * pulse}), transparent 70%)`,
      }} />
      {/* Main fire orb */}
      <div style={{
        position: "absolute", top: "35%", left: "50%", transform: "translate(-50%, -50%)",
        width: 400 * pulse, height: 500 * pulse,
        borderRadius: "45% 45% 50% 50%",
        background: `radial-gradient(ellipse at 50% 70%, #FFD4A0 0%, ${C.fire} 40%, #C4420A 75%, transparent 100%)`,
        opacity: flicker1,
        filter: "blur(3px)",
        boxShadow: `0 0 120px rgba(232,122,46,${0.5 * pulse}), 0 0 240px rgba(232,122,46,${0.2 * pulse})`,
      }} />
      {/* Inner bright core */}
      <div style={{
        position: "absolute", top: "40%", left: "50%", transform: "translate(-50%, -50%)",
        width: 180 * flicker2, height: 220 * flicker2,
        borderRadius: "40% 40% 50% 50%",
        background: `radial-gradient(ellipse, #FFE8C8 0%, ${C.fireGlow} 60%, transparent 100%)`,
        opacity: flicker2,
        filter: "blur(5px)",
      }} />
      {/* Embers */}
      {[0, 1, 2, 3, 4, 5].map(i => {
        const angle = (localF * 0.5 + i * 60) * (Math.PI / 180);
        const radius = 200 + Math.sin(localF * 0.1 + i) * 60;
        const ex = 540 + Math.cos(angle) * radius;
        const ey = 700 + Math.sin(angle) * radius - localF * 0.8;
        const eop = Math.max(0, 1 - (localF * 0.006 + i * 0.1) % 1);
        return (
          <div key={i} style={{
            position: "absolute", left: ex, top: ey,
            width: 6, height: 6, borderRadius: "50%",
            background: "#FFD4A0", opacity: eop * 0.6,
            boxShadow: "0 0 8px #FF9E4A",
          }} />
        );
      })}
      {/* Temperature feel text */}
      <div style={{
        position: "absolute", bottom: 340, width: "100%", textAlign: "center",
        ...fadeUp(frame, 300, 18),
      }}>
        <span style={{
          fontSize: 28, fontFamily: F.thin, color: C.fireGlow,
          letterSpacing: 8, textTransform: "uppercase", fontWeight: 200,
          opacity: 0.6,
        }}>2300°F</span>
      </div>
    </div>
  );
}

function FinishedMug({ frame }: { frame: number }) {
  const vis = sceneVis(frame, 405, 530, 18, 1);
  if (vis === 0) return null;

  const mugScale = ease(frame, 405, 25, 0.85, 1);

  return (
    <div style={{ position: "absolute", inset: 0, opacity: vis, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      {/* Soft glow behind mug */}
      <div style={{
        position: "absolute", top: "40%", left: "50%", transform: "translate(-50%, -50%)",
        width: 500, height: 500, borderRadius: "50%",
        background: `radial-gradient(circle, rgba(245,237,224,0.08), transparent 70%)`,
      }} />
      {/* Abstract mug shape */}
      <div style={{
        transform: `scale(${mugScale})`, display: "flex", flexDirection: "column", alignItems: "center",
        marginTop: -80,
      }}>
        {/* Mug body */}
        <div style={{
          width: 220, height: 260, borderRadius: "12px 12px 30px 30px",
          background: `linear-gradient(135deg, ${C.cream} 0%, #DDD5C8 100%)`,
          boxShadow: `0 20px 60px rgba(0,0,0,0.4), inset 0 -10px 30px rgba(0,0,0,0.05)`,
          position: "relative",
        }}>
          {/* Handle */}
          <div style={{
            position: "absolute", right: -55, top: 50,
            width: 50, height: 120, borderRadius: "0 40px 40px 0",
            border: `12px solid ${C.cream}`,
            borderLeft: "none",
            boxShadow: "4px 4px 20px rgba(0,0,0,0.2)",
          }} />
          {/* Glaze drip accent on mug */}
          <div style={{
            position: "absolute", top: -2, left: 40, width: 80, height: 60,
            borderRadius: "0 0 40px 40px",
            background: `linear-gradient(180deg, ${C.glaze}, ${C.glazeDeep})`,
            opacity: 0.7,
          }} />
        </div>
      </div>
      {/* Main text */}
      <div style={{ marginTop: 80, textAlign: "center", ...fadeUp(frame, 430, 18) }}>
        <div style={{
          fontSize: 46, fontFamily: F.serif, color: C.cream,
          lineHeight: 1.4, letterSpacing: 1,
        }}>
          Handmade. One of one.
        </div>
      </div>
      {/* CTA */}
      <div style={{ marginTop: 60, textAlign: "center", ...fadeUp(frame, 460, 18) }}>
        <div style={{
          fontSize: 26, fontFamily: F.thin, color: C.sub,
          letterSpacing: 6, textTransform: "lowercase", fontWeight: 300,
        }}>
          earthen studio · link in bio
        </div>
      </div>
    </div>
  );
}

export const Etsy_ASMR: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <div style={{
      width: 1080, height: 1920, background: C.bg,
      overflow: "hidden", position: "relative",
      fontFamily: F.thin,
    }}>
      {/* Subtle ambient grain */}
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(ellipse at 50% 50%, rgba(139,111,78,0.03), transparent 60%)`,
      }} />

      <ClayWheel frame={frame} />
      <GlazeDrip frame={frame} />
      <KilnFire frame={frame} />
      <FinishedMug frame={frame} />
    </div>
  );
};
