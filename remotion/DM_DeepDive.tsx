import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Easing,
  Img,
  staticFile,
} from "remotion";
import { BRAND, FONTS, LOGO, SPEC } from "./derma-brand";

// ─────────────────────────────────────────────────────────────────────────────
// DM_DeepDive — Continuous macro zoom through skin layers (Kollagen)
// Science-documentary camera movement. No scene cuts. Voiceover-first.
// ─────────────────────────────────────────────────────────────────────────────
//
// VOICEOVER SCRIPT (German, ~18s, target 120-140 WPM)
// Voice: DermaMedicum Voice (GOKuAybXPeCM4Mohef91)
//
// [0:00-0:04] Kollagen hält deine Haut zusammen.
// [0:04-0:09] Ein unsichtbares Netzwerk — elastisch, stabil, lebendig.
// [0:09-0:12] Ab 25 verlierst du jedes Jahr ein Prozent davon.
// [0:12-0:15] Moderne Treatments aktivieren die Neubildung.
// [0:15-0:18] Wir zeigen dir, wie. DermaMedicum, Bonn.
//
// Total: ~38 words — well under 45-word cap at ~127 WPM.
// Tone: confident, educational, measured. Not salesy.
// ─────────────────────────────────────────────────────────────────────────────

const DURATION = 540; // 18 seconds @ 30fps

// ─── Palette: single deep scientific mood ─────────────────────────────────
const PAL = {
  bg: "#0B1A24",
  surface: "#D4B896", // warm skin surface
  surfaceLight: "#E8D5B8",
  epidermis: "#C9A882",
  dermis: "#8AAFBA",
  collagen: BRAND.teal, // #558695
  collagenBright: "#7FC4D8",
  collagenDegraded: "#4A5E66",
  navy: BRAND.deepNavy, // #1A2744
  glow: "#558695",
  particle: "#7BBFCF",
  nucleus: "#3A5F6E",
  labelColor: "rgba(255,255,255,0.72)",
};

// ─── Noise helpers (deterministic pseudo-random) ──────────────────────────
const seededRandom = (seed: number) => {
  const x = Math.sin(seed * 127.1 + seed * 311.7) * 43758.5453;
  return x - Math.floor(x);
};

const noise1D = (t: number, seed: number = 0) =>
  Math.sin(t * 1.7 + seed) * 0.5 +
  Math.sin(t * 3.1 + seed * 2.3) * 0.3 +
  Math.sin(t * 5.7 + seed * 0.7) * 0.2;

// ─── Camera system ────────────────────────────────────────────────────────
// The "camera" zooms into a conceptual vertical canvas. We define the zoom
// as a scale factor and a vertical offset. Everything lives in a giant
// coordinate space; the camera viewport moves through it.

const useCameraTransform = (frame: number) => {
  // Zoom: starts at 1x, reaches ~6x at deepest point, returns to ~1.8x
  const zoomIn = interpolate(frame, [0, 120, 240, 360, 440, DURATION], [1, 1.8, 3.2, 5.5, 3.0, 1.6], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
  });

  // Vertical pan: camera moves downward into the skin, then back up
  const panY = interpolate(frame, [0, 120, 240, 360, 440, DURATION], [0, -400, -1100, -1800, -900, -200], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
  });

  // Subtle camera drift (organic, never static)
  const driftX = noise1D(frame * 0.015, 1) * 8;
  const driftY = noise1D(frame * 0.012, 2) * 6;

  return { scale: zoomIn, panY, driftX, driftY };
};

// ─── Sub-components ───────────────────────────────────────────────────────

// Skin surface texture — warm, organic, visible pores
const SkinSurface: React.FC<{ frame: number }> = ({ frame }) => {
  const breathe = Math.sin(frame * 0.04) * 0.02 + 1;
  // Procedural "pore" circles
  const pores = Array.from({ length: 40 }, (_, i) => {
    const x = seededRandom(i * 3) * 1080;
    const y = seededRandom(i * 3 + 1) * 300 + 50;
    const r = seededRandom(i * 3 + 2) * 6 + 2;
    const drift = noise1D(frame * 0.02 + i, i) * 3;
    return (
      <circle
        key={i}
        cx={x + drift}
        cy={y + drift * 0.5}
        r={r * breathe}
        fill={`rgba(180, 155, 120, ${0.15 + seededRandom(i * 7) * 0.15})`}
        stroke={`rgba(160, 135, 100, ${0.1})`}
        strokeWidth={0.5}
      />
    );
  });

  return (
    <g>
      {/* Warm skin gradient background at top */}
      <defs>
        <linearGradient id="skinGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={PAL.surfaceLight} />
          <stop offset="60%" stopColor={PAL.surface} />
          <stop offset="100%" stopColor={PAL.epidermis} />
        </linearGradient>
      </defs>
      <rect x={0} y={0} width={1080} height={400} fill="url(#skinGrad)" />
      {pores}
      {/* Surface texture lines */}
      {Array.from({ length: 12 }, (_, i) => {
        const baseY = 30 + i * 30;
        const wave = noise1D(frame * 0.01 + i, i * 5) * 15;
        return (
          <path
            key={`line-${i}`}
            d={`M 0 ${baseY + wave} Q ${270 + noise1D(i, 3) * 60} ${baseY + wave + 10 + noise1D(frame * 0.015 + i, 2) * 8}, 540 ${baseY + wave - 5} Q ${810 + noise1D(i, 7) * 40} ${baseY + wave + 8}, 1080 ${baseY + wave + 3}`}
            fill="none"
            stroke={`rgba(160, 130, 95, ${0.08 + seededRandom(i * 11) * 0.06})`}
            strokeWidth={1 + seededRandom(i * 13) * 1.5}
          />
        );
      })}
    </g>
  );
};

// Epidermis layer — translucent cells
const EpidermisLayer: React.FC<{ frame: number }> = ({ frame }) => {
  const cells = Array.from({ length: 55 }, (_, i) => {
    const x = seededRandom(i * 5 + 100) * 1080;
    const y = seededRandom(i * 5 + 101) * 400 + 400;
    const rx = seededRandom(i * 5 + 102) * 18 + 10;
    const ry = seededRandom(i * 5 + 103) * 14 + 8;
    const rotation = seededRandom(i * 5 + 104) * 360;
    const drift = noise1D(frame * 0.008 + i * 0.5, i) * 4;
    const pulse = Math.sin(frame * 0.03 + i * 0.8) * 0.08 + 1;
    const alpha = 0.08 + seededRandom(i * 7 + 200) * 0.12;

    return (
      <ellipse
        key={i}
        cx={x + drift}
        cy={y + drift * 0.7}
        rx={rx * pulse}
        ry={ry * pulse}
        transform={`rotate(${rotation + noise1D(frame * 0.005, i) * 5}, ${x}, ${y})`}
        fill={`rgba(195, 170, 140, ${alpha})`}
        stroke={`rgba(170, 145, 115, ${alpha * 0.7})`}
        strokeWidth={0.8}
      />
    );
  });

  // Cell nuclei (darker spots inside some cells)
  const nuclei = Array.from({ length: 20 }, (_, i) => {
    const x = seededRandom(i * 9 + 300) * 1080;
    const y = seededRandom(i * 9 + 301) * 380 + 420;
    const r = seededRandom(i * 9 + 302) * 4 + 2;
    return (
      <circle
        key={`nucleus-${i}`}
        cx={x}
        cy={y}
        r={r}
        fill={`rgba(90, 75, 60, ${0.15 + seededRandom(i * 11) * 0.1})`}
      />
    );
  });

  return (
    <g>
      <defs>
        <linearGradient id="epiGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={PAL.epidermis} />
          <stop offset="100%" stopColor="rgba(90, 130, 145, 0.3)" />
        </linearGradient>
      </defs>
      <rect x={0} y={400} width={1080} height={400} fill="url(#epiGrad)" opacity={0.6} />
      {cells}
      {nuclei}
    </g>
  );
};

// Collagen fiber network — the hero element
const CollagenNetwork: React.FC<{ frame: number; degradation: number; regeneration: number }> = ({
  frame,
  degradation,
  regeneration,
}) => {
  const fibers: React.ReactNode[] = [];
  const fiberCount = 35;

  for (let i = 0; i < fiberCount; i++) {
    const startX = seededRandom(i * 11 + 500) * 1080;
    const startY = seededRandom(i * 11 + 501) * 500 + 900;
    const angle = seededRandom(i * 11 + 502) * 120 - 60; // mostly horizontal spread
    const length = seededRandom(i * 11 + 503) * 300 + 150;
    const endX = startX + Math.cos((angle * Math.PI) / 180) * length;
    const endY = startY + Math.sin((angle * Math.PI) / 180) * length * 0.4;

    // Waviness along fiber
    const midX = (startX + endX) / 2;
    const midY = (startY + endY) / 2;
    const waveAmp = noise1D(frame * 0.015 + i, i * 3) * 25;
    const breathe = Math.sin(frame * 0.025 + i * 0.5) * 8;

    // Degradation: fibers thin, become transparent, break
    const baseSW = 2.5 + seededRandom(i * 11 + 504) * 2;
    const degradeFactor = interpolate(degradation, [0, 1], [1, 0.2 + seededRandom(i * 7) * 0.3], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    // Regeneration: fibers rebuild
    const regenFactor = interpolate(regeneration, [0, 1], [1, 1.4 + seededRandom(i * 9) * 0.3], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    const strokeWidth = baseSW * degradeFactor * regenFactor;

    const baseOpacity = 0.5 + seededRandom(i * 11 + 505) * 0.35;
    const opacity = baseOpacity * degradeFactor * Math.min(regenFactor, 1.2);

    // Color shifts
    const color =
      degradation > 0.5
        ? PAL.collagenDegraded
        : regeneration > 0.3
          ? PAL.collagenBright
          : PAL.collagen;

    // Draw-in animation for regeneration
    const dashOffset =
      regeneration > 0.1
        ? interpolate(regeneration, [0.1, 1], [length * 2, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })
        : 0;

    fibers.push(
      <path
        key={`fiber-${i}`}
        d={`M ${startX} ${startY} Q ${midX + waveAmp} ${midY + breathe}, ${endX} ${endY}`}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        opacity={opacity}
        strokeDasharray={regeneration > 0.1 ? `${length * 2}` : "none"}
        strokeDashoffset={dashOffset}
        style={{
          filter: `drop-shadow(0 0 ${4 + regeneration * 6}px ${PAL.glow}60)`,
        }}
      />
    );
  }

  // Cross-links between fibers (mesh appearance)
  const crossLinks = Array.from({ length: 20 }, (_, i) => {
    const x = seededRandom(i * 13 + 700) * 1080;
    const y = seededRandom(i * 13 + 701) * 400 + 950;
    const dx = (seededRandom(i * 13 + 702) - 0.5) * 120;
    const dy = (seededRandom(i * 13 + 703) - 0.5) * 80;
    const alpha = 0.2 * degradeFactor_global(degradation) * Math.min(regeneration > 0.3 ? 1.3 : 1, 1.3);
    return (
      <line
        key={`cross-${i}`}
        x1={x}
        y1={y}
        x2={x + dx + noise1D(frame * 0.01, i) * 10}
        y2={y + dy + noise1D(frame * 0.01, i + 50) * 8}
        stroke={PAL.collagen}
        strokeWidth={1}
        opacity={alpha}
        strokeLinecap="round"
      />
    );
  });

  return (
    <g>
      {fibers}
      {crossLinks}
    </g>
  );
};

const degradeFactor_global = (degradation: number) =>
  interpolate(degradation, [0, 1], [1, 0.3], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

// Triple helix visualization (appears at deep zoom)
const TripleHelix: React.FC<{ frame: number; visibility: number }> = ({ frame, visibility }) => {
  if (visibility < 0.01) return null;

  const helixPaths: React.ReactNode[] = [];
  const centerX = 540;
  const centerY = 1600;
  const helixHeight = 400;
  const helixWidth = 80;
  const turns = 5;

  for (let strand = 0; strand < 3; strand++) {
    const phaseOffset = (strand * Math.PI * 2) / 3;
    const points: string[] = [];
    const steps = 80;

    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const angle = t * turns * Math.PI * 2 + phaseOffset + frame * 0.02;
      const x = centerX + Math.cos(angle) * helixWidth * (0.6 + Math.sin(t * Math.PI) * 0.4);
      const y = centerY - helixHeight / 2 + t * helixHeight;
      const breathe = noise1D(frame * 0.02 + strand, strand) * 5;
      points.push(`${s === 0 ? "M" : "L"} ${x + breathe} ${y}`);
    }

    const colors = [PAL.collagenBright, PAL.collagen, "#6DA8B8"];

    helixPaths.push(
      <path
        key={`helix-${strand}`}
        d={points.join(" ")}
        fill="none"
        stroke={colors[strand]}
        strokeWidth={3}
        strokeLinecap="round"
        opacity={visibility * 0.8}
        style={{
          filter: `drop-shadow(0 0 8px ${colors[strand]}80)`,
        }}
      />
    );
  }

  // Cross-bonds between helices
  const bonds: React.ReactNode[] = [];
  for (let b = 0; b < 12; b++) {
    const t = (b + 0.5) / 12;
    const y = centerY - helixHeight / 2 + t * helixHeight;
    const angle1 = t * turns * Math.PI * 2 + frame * 0.02;
    const angle2 = t * turns * Math.PI * 2 + (Math.PI * 2) / 3 + frame * 0.02;
    const x1 = centerX + Math.cos(angle1) * helixWidth * 0.7;
    const x2 = centerX + Math.cos(angle2) * helixWidth * 0.7;

    bonds.push(
      <line
        key={`bond-${b}`}
        x1={x1}
        y1={y}
        x2={x2}
        y2={y + 5}
        stroke={PAL.collagenBright}
        strokeWidth={1.2}
        opacity={visibility * 0.4}
        strokeDasharray="4 4"
      />
    );
  }

  return (
    <g>
      {helixPaths}
      {bonds}
    </g>
  );
};

// Tissue particles — contextual cellular debris / vesicles
const TissueParticles: React.FC<{ frame: number; zoneY: number; count: number; speed: number }> = ({
  frame,
  zoneY,
  count,
  speed,
}) => {
  return (
    <g>
      {Array.from({ length: count }, (_, i) => {
        const baseX = seededRandom(i * 17 + zoneY) * 1080;
        const baseY = zoneY + seededRandom(i * 17 + zoneY + 1) * 500;
        const size = seededRandom(i * 17 + zoneY + 2) * 4 + 1;
        const moveX = noise1D(frame * speed * 0.01 + i, i * 3) * 40;
        const moveY = noise1D(frame * speed * 0.008 + i + 50, i * 7) * 30;
        const alpha = 0.1 + seededRandom(i * 17 + zoneY + 3) * 0.2;
        const pulse = Math.sin(frame * 0.05 + i * 1.2) * 0.3 + 1;

        return (
          <circle
            key={i}
            cx={baseX + moveX}
            cy={baseY + moveY}
            r={size * pulse}
            fill={PAL.particle}
            opacity={alpha}
            style={{
              filter: size > 3 ? `drop-shadow(0 0 3px ${PAL.glow}40)` : undefined,
            }}
          />
        );
      })}
    </g>
  );
};

// Light rays as depth cues
const LightRays: React.FC<{ frame: number }> = ({ frame }) => {
  const rays = Array.from({ length: 6 }, (_, i) => {
    const x = 100 + i * 180;
    const angle = -8 + i * 3 + noise1D(frame * 0.005, i) * 2;
    const alpha = 0.03 + seededRandom(i * 19) * 0.03;
    const width = 40 + seededRandom(i * 23) * 60;
    const shimmer = Math.sin(frame * 0.02 + i * 1.5) * 0.01;

    return (
      <rect
        key={i}
        x={x}
        y={-200}
        width={width}
        height={2800}
        fill={`rgba(255, 255, 255, ${alpha + shimmer})`}
        transform={`rotate(${angle}, ${x + width / 2}, 1000)`}
        rx={20}
      />
    );
  });

  return <g style={{ mixBlendMode: "soft-light" }}>{rays}</g>;
};

// Dermis background mesh (subtle connective tissue)
const DermisBackground: React.FC<{ frame: number }> = ({ frame }) => {
  return (
    <g>
      <defs>
        <linearGradient id="dermisGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(85, 134, 149, 0.08)" />
          <stop offset="50%" stopColor="rgba(26, 39, 68, 0.15)" />
          <stop offset="100%" stopColor="rgba(12, 20, 30, 0.25)" />
        </linearGradient>
      </defs>
      <rect x={0} y={800} width={1080} height={1200} fill="url(#dermisGrad)" />
      {/* Subtle tissue lines */}
      {Array.from({ length: 18 }, (_, i) => {
        const y = 850 + i * 60;
        const wave = noise1D(frame * 0.006 + i * 0.3, i * 11) * 20;
        return (
          <path
            key={i}
            d={`M 0 ${y + wave} Q 360 ${y + wave + 15 + noise1D(frame * 0.008, i) * 10}, 720 ${y + wave - 8} Q 900 ${y + wave + 5}, 1080 ${y + wave + 2}`}
            fill="none"
            stroke={`rgba(85, 134, 149, ${0.04 + seededRandom(i * 31) * 0.04})`}
            strokeWidth={1}
          />
        );
      })}
    </g>
  );
};

// Scientific label — appears briefly, small, label-style
const SciLabel: React.FC<{
  text: string;
  x: number;
  y: number;
  frame: number;
  fps: number;
  showAt: number;
  hideAt: number;
}> = ({ text, x, y, frame, fps, showAt, hideAt }) => {
  // Spring-based entrance for organic feel
  const enterSpring = spring({
    frame: Math.max(0, frame - showAt),
    fps,
    config: { damping: 18, stiffness: 120, mass: 0.6 },
  });
  const fadeIn = frame >= showAt ? enterSpring : 0;
  const fadeOut = interpolate(frame, [hideAt - 15, hideAt], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const opacity = Math.min(fadeIn, fadeOut);
  if (opacity < 0.01) return null;

  const slideY = (1 - enterSpring) * 10;

  return (
    <g opacity={opacity} transform={`translate(0, ${slideY})`}>
      {/* Thin line extending from label */}
      <line
        x1={x - 30}
        y1={y}
        x2={x - 8}
        y2={y}
        stroke={PAL.labelColor}
        strokeWidth={0.8}
        opacity={0.5}
      />
      <text
        x={x}
        y={y + 4}
        fill={PAL.labelColor}
        fontSize={13}
        fontFamily={FONTS.body}
        fontWeight={300}
        letterSpacing={1.5}
        style={{ textTransform: "uppercase" as const }}
      >
        {text}
      </text>
    </g>
  );
};

// ─── Content card — text overlay in screen-space (not camera-space) ───────
// Positioned in the bottom safe zone. Uses spring entrance + easing exit.
const ContentCard: React.FC<{
  text: string;
  frame: number;
  fps: number;
  showAt: number;
  hideAt: number;
  position?: "top" | "bottom";
}> = ({ text, frame, fps, showAt, hideAt, position = "bottom" }) => {
  const FADE_IN_DURATION = 20;
  const FADE_OUT_DURATION = 20;

  // Spring-based entrance (translateY)
  const enterProgress = spring({
    frame: Math.max(0, frame - showAt),
    fps,
    config: { damping: 20, stiffness: 100, mass: 0.7 },
  });

  // Opacity: interpolate fade-in and fade-out independently
  const fadeIn = interpolate(frame, [showAt, showAt + FADE_IN_DURATION], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(frame, [hideAt - FADE_OUT_DURATION, hideAt], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });
  const opacity = Math.min(fadeIn, fadeOut);

  if (opacity < 0.01) return null;

  // Subtle slide-up entrance (12px)
  const slideY = (1 - enterProgress) * 12;

  const positionStyle: React.CSSProperties =
    position === "top"
      ? { top: 180, left: 0, right: 0 }
      : { bottom: 540, left: 0, right: 0 };

  return (
    <div
      style={{
        position: "absolute",
        ...positionStyle,
        display: "flex",
        justifyContent: "center",
        pointerEvents: "none",
        opacity,
        transform: `translateY(${slideY}px)`,
      }}
    >
      <div
        style={{
          maxWidth: 800,
          padding: "14px 28px",
          borderRadius: 8,
          background: "rgba(11, 26, 36, 0.55)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          textAlign: "center",
        }}
      >
        <span
          style={{
            fontSize: 30,
            lineHeight: 1.4,
            fontFamily: FONTS.body,
            fontWeight: 400,
            color: "rgba(255, 255, 255, 0.88)",
            letterSpacing: 0.3,
          }}
        >
          {text}
        </span>
      </div>
    </div>
  );
};

// Film grain overlay
const FilmGrain: React.FC<{ frame: number }> = ({ frame }) => {
  // Use seeded randoms per frame to create grain pattern
  const grainSeed = frame * 7919; // prime to avoid patterns
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: `url("data:image/svg+xml,${encodeURIComponent(
          `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'>${Array.from(
            { length: 300 },
            (_, i) =>
              `<circle cx='${seededRandom(grainSeed + i) * 200}' cy='${seededRandom(grainSeed + i + 1000) * 200}' r='${seededRandom(grainSeed + i + 2000) * 1.2 + 0.3}' fill='white' opacity='${seededRandom(grainSeed + i + 3000) * 0.08}'/>`
          ).join("")}</svg>`
        )}")`,
        backgroundSize: "200px 200px",
        opacity: 0.5,
        mixBlendMode: "overlay",
        pointerEvents: "none",
      }}
    />
  );
};

// ─── Main Composition ─────────────────────────────────────────────────────
export const DM_DeepDive: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const camera = useCameraTransform(frame);

  // ─── Timeline phases (continuous, overlapping) ──────────────────────
  // Degradation: builds from frame 280-360
  const degradation = interpolate(frame, [280, 360], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // Regeneration: builds from frame 370-460
  const regeneration = interpolate(frame, [370, 460], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // Helix visibility: peaks during deep zoom (frames 220-350)
  const helixVis = interpolate(frame, [200, 240, 340, 380], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Brand reveal: spring physics for organic entrance
  const brandSpring = spring({
    frame: Math.max(0, frame - 480),
    fps,
    config: { damping: 14, stiffness: 80, mass: 0.8 },
  });
  const brandReveal = frame >= 480 ? brandSpring : 0;

  // Overall vignette intensity (stronger when zoomed in)
  const vignetteIntensity = interpolate(camera.scale, [1, 5], [0.3, 0.6], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Stimulation glow pulse
  const stimGlow =
    regeneration > 0.1
      ? Math.sin(frame * 0.08) * 0.15 * regeneration + regeneration * 0.3
      : 0;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: PAL.bg,
        overflow: "hidden",
      }}
    >
      {/* ── Camera viewport ─────────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          width: SPEC.width,
          height: SPEC.height,
          transformOrigin: "540px 960px",
          transform: `scale(${camera.scale}) translate(${camera.driftX}px, ${camera.panY + camera.driftY}px)`,
          willChange: "transform",
        }}
      >
        {/* All scene content lives here — camera moves over it */}
        <svg
          width={1080}
          height={3000}
          viewBox="0 0 1080 3000"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          {/* Deep background gradient */}
          <defs>
            <linearGradient id="deepBg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={PAL.bg} />
              <stop offset="30%" stopColor="#0E2233" />
              <stop offset="60%" stopColor={PAL.navy} />
              <stop offset="100%" stopColor="#080E18" />
            </linearGradient>
            {/* Glow filter for collagen stimulation */}
            <filter id="stimGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation={8 * stimGlow} result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <rect x={0} y={0} width={1080} height={3000} fill="url(#deepBg)" />

          {/* Layer 1: Skin surface (y: 0-400) */}
          <SkinSurface frame={frame} />

          {/* Layer 2: Epidermis (y: 400-800) */}
          <EpidermisLayer frame={frame} />

          {/* Layer 3: Dermis background (y: 800-2000) */}
          <DermisBackground frame={frame} />

          {/* Layer 4: Collagen network (y: 900-1400) */}
          <g filter={stimGlow > 0.05 ? "url(#stimGlow)" : undefined}>
            <CollagenNetwork
              frame={frame}
              degradation={degradation}
              regeneration={regeneration}
            />
          </g>

          {/* Layer 5: Triple helix (y: 1400-1800) — deep zoom */}
          <TripleHelix frame={frame} visibility={helixVis} />

          {/* Tissue particles at various depths */}
          <TissueParticles frame={frame} zoneY={100} count={15} speed={0.8} />
          <TissueParticles frame={frame} zoneY={500} count={20} speed={1.2} />
          <TissueParticles frame={frame} zoneY={1000} count={25} speed={1.5} />
          <TissueParticles frame={frame} zoneY={1500} count={15} speed={2.0} />

          {/* Light rays through all layers */}
          <LightRays frame={frame} />

          {/* Scientific micro-labels (subtle background context — content delivery via ContentCards) */}
          <SciLabel text="Hautoberfläche" x={680} y={180} frame={frame} fps={fps} showAt={15} hideAt={90} />
          <SciLabel text="Kollagennetzwerk" x={660} y={1050} frame={frame} fps={fps} showAt={150} hideAt={260} />
        </svg>
      </div>

      {/* ── Parallax foreground particles (move faster) ──── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `translateY(${camera.panY * 0.3}px)`,
          pointerEvents: "none",
        }}
      >
        <svg width={1080} height={1920} viewBox="0 0 1080 1920">
          {Array.from({ length: 12 }, (_, i) => {
            const x = seededRandom(i * 31 + 900) * 1080;
            const y = seededRandom(i * 31 + 901) * 1920;
            const size = seededRandom(i * 31 + 902) * 3 + 1;
            const moveX = noise1D(frame * 0.02 + i, i) * 30;
            const moveY = noise1D(frame * 0.015 + i + 100, i * 3) * 25;
            const alpha = 0.06 + seededRandom(i * 31 + 903) * 0.08;

            return (
              <circle
                key={i}
                cx={x + moveX}
                cy={y + moveY}
                r={size}
                fill="white"
                opacity={alpha}
              />
            );
          })}
        </svg>
      </div>

      {/* ── Degradation moment — desaturation overlay ────── */}
      {degradation > 0.05 && regeneration < 0.5 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: `rgba(50, 50, 60, ${degradation * 0.15 * (1 - regeneration * 2)})`,
            pointerEvents: "none",
          }}
        />
      )}

      {/* ── Stimulation glow overlay ───────────────────── */}
      {regeneration > 0.05 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse at 50% 50%, rgba(85, 134, 149, ${stimGlow * 0.12}) 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />
      )}

      {/* ── Vignette ──────────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at 50% 45%, transparent 40%, rgba(8, 14, 24, ${vignetteIntensity}) 100%)`,
          pointerEvents: "none",
        }}
      />

      {/* ── Content cards (screen-space text overlay) ──── */}
      <ContentCard
        text="Kollagen hält deine Haut zusammen."
        frame={frame}
        fps={fps}
        showAt={30}
        hideAt={140}
        position="bottom"
      />
      <ContentCard
        text="Ein unsichtbares Netzwerk — elastisch, stabil, lebendig."
        frame={frame}
        fps={fps}
        showAt={150}
        hideAt={260}
        position="bottom"
      />
      <ContentCard
        text="Ab 25 verlierst du jedes Jahr 1 % davon."
        frame={frame}
        fps={fps}
        showAt={270}
        hideAt={360}
        position="bottom"
      />
      <ContentCard
        text="Moderne Treatments aktivieren die Neubildung."
        frame={frame}
        fps={fps}
        showAt={370}
        hideAt={460}
        position="bottom"
      />
      <ContentCard
        text="Wir zeigen dir, wie."
        frame={frame}
        fps={fps}
        showAt={470}
        hideAt={530}
        position="bottom"
      />

      {/* ── Film grain ────────────────────────────────── */}
      <FilmGrain frame={frame} />

      {/* ── Brand reveal (woven into final zoom-out) ──── */}
      {brandReveal > 0.01 && (
        <div
          style={{
            position: "absolute",
            bottom: 520,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
            opacity: brandReveal,
            transform: `translateY(${(1 - brandReveal) * 20}px)`,
          }}
        >
          <Img
            src={staticFile(LOGO.light)}
            style={{
              width: 200,
              opacity: brandReveal * 0.9,
              filter: `drop-shadow(0 0 20px rgba(85, 134, 149, ${brandReveal * 0.3}))`,
            }}
          />
          <div
            style={{
              fontSize: 16,
              fontFamily: FONTS.body,
              fontWeight: 300,
              color: PAL.labelColor,
              letterSpacing: 3,
              opacity: brandReveal * 0.7,
              textTransform: "uppercase",
            }}
          >
            DermaMedicum &middot; Bonn
          </div>
        </div>
      )}
    </AbsoluteFill>
  );
};
