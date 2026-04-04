import React from "react";
import {
  useCurrentFrame, interpolate, Easing, Img, staticFile,
  Audio, Sequence,
} from "remotion";
import { BRAND, FONTS, LOGO, SAFE, SPEC } from "./derma-brand";

// DM_PRP_LayerPeel_V2 — Client-ready PRP reel
// Multi-tool: Recraft V4 (skin image) + ElevenLabs (luxury voice + SFX) + Remotion (animation)
// 480 frames (16s at 30fps), 1080x1920
//
// Scene 1 (0-120):   Hero image reveal + hook voice
// Scene 2 (120-240): Process layers build + science voice
// Scene 3 (240-340): >80% stat + stat voice
// Scene 4 (340-400): Key message — reassurance
// Scene 5 (400-480): Logo card + CTA voice

// --- UTILITIES ---

function ease(f: number, s: number, d: number, from: number, to: number, fn = Easing.out(Easing.cubic)) {
  return interpolate(f, [s, s + d], [from, to], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: fn,
  });
}

function fadeUp(f: number, s: number, d = 14) {
  return {
    opacity: ease(f, s, d, 0, 1),
    transform: `translateY(${ease(f, s, d, 30, 0)}px)`,
  };
}

function sceneVis(f: number, start: number, end: number, fi = 12, fo = 12) {
  if (f < start - 3 || f > end + fo + 3) return 0;
  return Math.min(
    interpolate(f, [start, start + fi], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    interpolate(f, [end, end + Math.max(fo, 1)], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
  );
}

// --- CONTENT-SPECIFIC: PRP process colors ---
const PLASMA_GOLD = "#F9A825";
const BLOOD_RED = "#C62828";
const CENTRIFUGE_ORANGE = "#E65100";
const PLATELET_GREEN = "#2E7D32";

export const DM_PRP_LayerPeel_V2: React.FC = () => {
  const frame = useCurrentFrame();

  // --- FLOATING PARTICLES (V3 aesthetic floor) ---
  const particles = React.useMemo(() => {
    const seed = 42;
    return Array.from({ length: 20 }, (_, i) => {
      const r = ((seed * (i + 1) * 7919) % 1000) / 1000;
      const r2 = ((seed * (i + 1) * 6271) % 1000) / 1000;
      const r3 = ((seed * (i + 1) * 3571) % 1000) / 1000;
      return { x: r * SPEC.width, y: r2 * SPEC.height, size: 2 + r3 * 3, speed: 0.3 + r * 0.4, phase: r2 * Math.PI * 2 };
    });
  }, []);

  // --- SCENE VISIBILITY ---
  const s1 = sceneVis(frame, 0, 115, 15, 14);
  const s2 = sceneVis(frame, 118, 235, 12, 14);
  const s3 = sceneVis(frame, 238, 335, 14, 14);
  const s4 = sceneVis(frame, 338, 395, 12, 14);
  const s5 = sceneVis(frame, 398, 480, 14, 1);

  // --- SCENE 1 ANIMATIONS ---
  const imgScale = ease(frame, 0, 30, 1.12, 1);
  const imgY = ease(frame, 0, 30, 30, 0);
  const glowPulse = frame >= 40 && frame < 115
    ? 0.25 + Math.sin((frame - 40) * 0.07) * 0.15 : 0;

  // --- SCENE 2: Layer data ---
  const layers = [
    { name: "Blut", label: "Entnahme", color: BLOOD_RED, icon: "1" },
    { name: "Zentrifuge", label: "Trennung", color: CENTRIFUGE_ORANGE, icon: "2" },
    { name: "Plasma", label: "Isolation", color: PLASMA_GOLD, icon: "3" },
    { name: "Thrombozyten", label: "Konzentration", color: PLATELET_GREEN, icon: "4" },
    { name: "Wachstumsfaktoren", label: "Freisetzung", color: BRAND.navy, icon: "5" },
  ];

  // --- SCENE 3 ANIMATIONS ---
  const statScale = ease(frame, 240, 20, 0.85, 1);
  const statCountUp = frame >= 240
    ? Math.min(80, Math.round(ease(frame, 240, 36, 0, 80))) : 0;

  return (
    <div style={{
      width: SPEC.width, height: SPEC.height,
      background: BRAND.cream, overflow: "hidden",
      position: "relative", fontFamily: FONTS.body,
    }}>

      {/* ══════ AUDIO ══════ */}

      {/* Hook voice: "Von Ihrem Blut — zu Ihrer Hauterneuerung." (3.34s) */}
      <Sequence from={18} durationInFrames={105}>
        <Audio src={staticFile("audio/dm-prp-v2/prp-hook.mp3")} volume={0.85} />
      </Sequence>

      {/* Transition whoosh */}
      <Sequence from={116} durationInFrames={30}>
        <Audio src={staticFile("audio/dm-prp-v2/sfx-whoosh.mp3")} volume={0.3} />
      </Sequence>

      {/* Science voice: "Ihre eigenen Zellen..." (6.77s) */}
      <Sequence from={132} durationInFrames={210}>
        <Audio src={staticFile("audio/dm-prp-v2/prp-science.mp3")} volume={0.85} />
      </Sequence>

      {/* Shimmer on stat */}
      <Sequence from={242} durationInFrames={40}>
        <Audio src={staticFile("audio/dm-prp-v2/sfx-shimmer.mp3")} volume={0.25} />
      </Sequence>

      {/* Stat voice: "Über achtzig Prozent..." (5.04s) */}
      <Sequence from={250} durationInFrames={155}>
        <Audio src={staticFile("audio/dm-prp-v2/prp-stat.mp3")} volume={0.85} />
      </Sequence>

      {/* Pulse on key message */}
      <Sequence from={340} durationInFrames={30}>
        <Audio src={staticFile("audio/dm-prp-v2/sfx-pulse.mp3")} volume={0.25} />
      </Sequence>

      {/* CTA voice: "DermaMedicum. Bonn." (2.69s) */}
      <Sequence from={412} durationInFrames={81}>
        <Audio src={staticFile("audio/dm-prp-v2/prp-cta.mp3")} volume={0.85} />
      </Sequence>

      {/* ══════ PARTICLES (continuous, subtle) ══════ */}
      {particles.map((p, i) => {
        const yOff = Math.sin(frame * 0.018 * p.speed + p.phase) * 25;
        const xOff = Math.cos(frame * 0.012 * p.speed + p.phase * 1.3) * 12;
        const pOp = 0.06 + Math.sin(frame * 0.025 + p.phase) * 0.04;
        return (
          <div key={i} style={{
            position: "absolute",
            left: p.x + xOff, top: p.y + yOff,
            width: p.size, height: p.size,
            borderRadius: "50%",
            background: i % 3 === 0 ? BRAND.sage : i % 3 === 1 ? BRAND.warmBrown : PLASMA_GOLD,
            opacity: pOp, pointerEvents: "none",
          }} />
        );
      })}

      {/* ══════ LIGHT RAY (V3 floor — breathing diagonal) ══════ */}
      <div style={{
        position: "absolute", top: -200, right: -100,
        width: 400, height: SPEC.height + 400,
        background: `linear-gradient(135deg, transparent 30%, ${BRAND.sage}06 50%, transparent 70%)`,
        transform: `rotate(15deg) translateX(${Math.sin(frame * 0.007) * 35}px)`,
        pointerEvents: "none",
      }} />

      {/* ══════ SCENE 1: HERO IMAGE ══════ */}
      <div style={{ position: "absolute", inset: 0, opacity: s1 }}>
        {/* Title first — nucleation principle */}
        <div style={{
          ...fadeUp(frame, 3),
          position: "absolute",
          top: SAFE.top + 20,
          left: SAFE.left, right: SAFE.right,
          textAlign: "center",
        }}>
          <div style={{
            fontSize: 50, fontWeight: 700,
            color: BRAND.navy, fontFamily: FONTS.heading,
            letterSpacing: 1,
          }}>
            PRP-Therapie
          </div>
        </div>

        {/* Photorealistic skin cross-section (Recraft V4) */}
        <div style={{
          position: "absolute",
          top: SAFE.top + 100,
          left: 50, right: 50,
          height: 860,
          overflow: "hidden",
          borderRadius: 20,
          transform: `scale(${imgScale}) translateY(${imgY}px)`,
          boxShadow: `0 16px 48px ${BRAND.navy}18, 0 0 ${60 * glowPulse}px ${PLASMA_GOLD}30`,
        }}>
          <Img
            src={staticFile("img/prp-injection.png")}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          {/* Golden glow at injection point */}
          <div style={{
            position: "absolute", inset: 0,
            background: `radial-gradient(circle at 50% 40%, ${PLASMA_GOLD}18 0%, transparent 45%)`,
            opacity: glowPulse,
          }} />
        </div>

        {/* Subtitle below image */}
        <div style={{
          ...fadeUp(frame, 18),
          position: "absolute",
          top: SAFE.top + 980,
          left: SAFE.left + 20, right: SAFE.right + 20,
          textAlign: "center",
        }}>
          <div style={{
            fontSize: 30, color: BRAND.warmBrown, lineHeight: 1.4,
          }}>
            Von Ihrem Blut zu Ihrer Hauterneuerung
          </div>
        </div>
      </div>

      {/* ══════ SCENE 2: PROCESS LAYERS ══════ */}
      <div style={{ position: "absolute", inset: 0, opacity: s2 }}>
        {/* Persistent skin thumbnail (image shrinks to corner — continuity) */}
        <div style={{
          position: "absolute",
          top: SAFE.top + 16, right: SAFE.right + 8,
          width: 180, height: 180,
          borderRadius: 14, overflow: "hidden",
          opacity: ease(frame, 120, 16, 0, 0.75),
          boxShadow: `0 6px 20px ${BRAND.navy}12`,
        }}>
          <Img
            src={staticFile("img/prp-injection.png")}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Section header */}
        <div style={{
          ...fadeUp(frame, 122),
          position: "absolute",
          top: SAFE.top + 24, left: SAFE.left + 16,
        }}>
          <div style={{
            fontSize: 34, fontWeight: 700,
            color: BRAND.navy, fontFamily: FONTS.heading,
          }}>
            Der Prozess
          </div>
          <div style={{ fontSize: 20, color: BRAND.warmBrown, marginTop: 4 }}>
            5 Schritte zur Hauterneuerung
          </div>
        </div>

        {/* Animated process layers */}
        {layers.map((layer, i) => {
          const layerDelay = 18 * i;
          const layerStart = 136 + layerDelay;
          const slideX = ease(frame, layerStart, 16, 160, 0);
          const layerOpacity = ease(frame, layerStart, 10, 0, 1);
          const y = SAFE.top + 130 + i * 122;

          // Spring overshoot
          const overshoot = frame >= layerStart && frame < layerStart + 22
            ? Math.sin((frame - layerStart) * 0.45) * ease(frame, layerStart, 22, 7, 0) : 0;

          // Breathing after settled
          const breathe = frame > layerStart + 22
            ? Math.sin(frame * 0.035 + i * 1.1) * 1.5 : 0;

          return (
            <React.Fragment key={i}>
              <div style={{
                position: "absolute",
                left: 70, right: SAFE.right + 16,
                top: y + overshoot + breathe,
                height: 94,
                background: `linear-gradient(135deg, ${layer.color}, ${layer.color}cc)`,
                borderRadius: 14,
                opacity: layerOpacity,
                transform: `translateX(${slideX}px)`,
                display: "flex", alignItems: "center",
                padding: "0 24px", gap: 14,
                boxShadow: `0 4px 14px ${layer.color}28`,
              }}>
                {/* Step number circle */}
                <div style={{
                  width: 40, height: 40, borderRadius: "50%",
                  background: "rgba(255,255,255,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 20, fontWeight: 700, color: "#fff", flexShrink: 0,
                }}>
                  {layer.icon}
                </div>
                <div>
                  <div style={{
                    fontSize: 26, fontWeight: 700,
                    color: "#fff", fontFamily: FONTS.heading,
                  }}>
                    {layer.name}
                  </div>
                  <div style={{ fontSize: 17, color: "rgba(255,255,255,0.8)" }}>
                    {layer.label}
                  </div>
                </div>
              </div>

              {/* Connector line between layers */}
              {i < 4 && (
                <div style={{
                  position: "absolute",
                  left: 90, top: y + 94, width: 2, height: 28,
                  background: `linear-gradient(${layer.color}88, ${layers[i + 1].color}88)`,
                  opacity: ease(frame, layerStart + 12, 8, 0, 0.35),
                }} />
              )}
            </React.Fragment>
          );
        })}

        {/* Activation pulse rings from bottom layer */}
        {frame >= 220 && frame < 240 && [0, 1, 2].map((ring) => {
          const rd = 222 + ring * 8;
          const ringSize = ease(frame, rd, 30, 0, 200 + ring * 80);
          const ringOp = ease(frame, rd, 30, 0.3, 0);
          const cy = SAFE.top + 130 + 4 * 122 + 47;
          return (
            <div key={ring} style={{
              position: "absolute",
              left: SPEC.width / 2 - ringSize / 2, top: cy - ringSize / 2,
              width: ringSize, height: ringSize, borderRadius: "50%",
              border: `2px solid ${BRAND.sage}`, opacity: ringOp,
              pointerEvents: "none",
            }} />
          );
        })}
      </div>

      {/* ══════ SCENE 3: STAT ══════ */}
      <div style={{
        position: "absolute", inset: 0, opacity: s3,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
      }}>
        <div style={{ transform: `scale(${statScale})`, textAlign: "center" }}>
          {/* Count-up stat */}
          <div style={{
            fontSize: 144, fontWeight: 700,
            color: BRAND.navy, fontFamily: FONTS.heading,
            lineHeight: 1,
          }}>
            {">"}{statCountUp}%
          </div>
          <div style={{
            ...fadeUp(frame, 254),
            fontSize: 30, color: BRAND.warmBrown,
            marginTop: 16, letterSpacing: 4,
            textTransform: "uppercase",
          }}>
            Thrombozyten-Recovery
          </div>
          <div style={{
            ...fadeUp(frame, 268),
            fontSize: 24, color: BRAND.midGray,
            marginTop: 20,
          }}>
            Goldstandard der PRP-Aufbereitung
          </div>
        </div>

        {/* Regen Lab badge */}
        <div style={{
          ...fadeUp(frame, 284),
          marginTop: 50,
          padding: "14px 36px",
          border: `2px solid ${BRAND.navy}28`,
          borderRadius: 10,
        }}>
          <div style={{
            fontSize: 20, color: BRAND.navy,
            fontWeight: 600, letterSpacing: 3,
            textTransform: "uppercase",
          }}>
            Regen Lab · Schweiz
          </div>
        </div>
      </div>

      {/* ══════ SCENE 4: KEY MESSAGE ══════ */}
      <div style={{
        position: "absolute", inset: 0, opacity: s4,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: `0 ${SAFE.left + 40}px`,
      }}>
        <div style={{
          ...fadeUp(frame, 342),
          fontSize: 44, color: BRAND.navy,
          fontFamily: FONTS.heading, fontWeight: 700,
          textAlign: "center", lineHeight: 1.4,
        }}>
          Ihre eigenen Zellen.
        </div>
        <div style={{
          ...fadeUp(frame, 354),
          fontSize: 44, color: BRAND.mauve,
          fontFamily: FONTS.heading, fontWeight: 700,
          textAlign: "center", lineHeight: 1.4, marginTop: 8,
        }}>
          Ihre eigene Heilung.
        </div>
        <div style={{
          ...fadeUp(frame, 366),
          fontSize: 26, color: BRAND.warmBrown,
          textAlign: "center", marginTop: 20,
        }}>
          Keine Fremdstoffe. Kein Risiko.
        </div>
      </div>

      {/* ══════ SCENE 5: LOGO CARD ══════ */}
      <div style={{
        position: "absolute", inset: 0,
        background: BRAND.cream, opacity: s5,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", gap: 28,
      }}>
        <Img
          src={staticFile(LOGO.dark)}
          style={{ ...fadeUp(frame, 405), width: 420, objectFit: "contain" }}
        />
        <div style={{
          ...fadeUp(frame, 422),
          fontSize: 26, color: BRAND.warmBrown,
          letterSpacing: 8, textTransform: "uppercase",
        }}>
          DERMAMEDICUM · BONN
        </div>
        <div style={{
          ...fadeUp(frame, 438),
          fontSize: 20, color: BRAND.sage, marginTop: 4,
        }}>
          Ihr Termin: dermamedicum.com
        </div>
      </div>
    </div>
  );
};
