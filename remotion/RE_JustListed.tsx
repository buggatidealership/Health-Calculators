import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

// REAL ESTATE — JUST LISTED
// Dark cinematic, gold accents, blueprint line motif
// 540 frames @ 30fps = 18s
// CONVERGENCE: Price + address reveal after visual loading

const clamp = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };
const outCubic = Easing.out(Easing.cubic);

const BG = "#0C1117";
const GOLD = "#C9A84C";
const GOLD_DIM = "rgba(201,168,76,0.25)";
const SLATE = "#8A9BB0";
const WHITE = "#E8ECF0";
const CARD_BG = "rgba(255,255,255,0.04)";

const ease = (f: number, s: number, d: number, from: number, to: number, fn = outCubic) =>
  interpolate(f, [s, s + d], [from, to], { ...clamp, easing: fn });

const fadeUp = (f: number, s: number, d = 15) => ({
  opacity: ease(f, s, d, 0, 1),
  transform: `translateY(${ease(f, s, d, 35, 0)}px)`,
});

const vis = (f: number, s: number, e: number) => {
  if (f < s - 2) return { opacity: 0, pointerEvents: "none" as const };
  return {
    opacity: Math.min(
      interpolate(f, [s, s + 10], [0, 1], clamp),
      e < 540 ? interpolate(f, [e, e + 12], [1, 0], clamp) : 1
    ),
  };
};

export const RE_JustListed: React.FC = () => {
  const frame = useCurrentFrame();

  // ═══ BLUEPRINT LINES — ambient geometric grid ═══
  const blueprintLines = [
    { x1: 200, y1: 400, x2: 880, y2: 400, delay: 5 },
    { x1: 200, y1: 400, x2: 200, y2: 900, delay: 10 },
    { x1: 880, y1: 400, x2: 880, y2: 900, delay: 15 },
    { x1: 200, y1: 900, x2: 880, y2: 900, delay: 20 },
    { x1: 480, y1: 400, x2: 480, y2: 700, delay: 30 },
    { x1: 200, y1: 650, x2: 480, y2: 650, delay: 35 },
    { x1: 620, y1: 650, x2: 880, y2: 650, delay: 40 },
    { x1: 480, y1: 700, x2: 540, y2: 700, delay: 45 },
    { x1: 620, y1: 650, x2: 620, y2: 730, delay: 48 },
  ];

  // ═══ FLOATING DOTS — ambient ═══
  const dots = Array.from({ length: 20 }, (_, i) => {
    const x = ((i * 173) % 1080);
    const y = ((i * 211 + 100) % 1920);
    const pulse = Math.sin((frame + i * 30) * 0.03) * 0.5 + 0.5;
    return { x, y, opacity: 0.03 + pulse * 0.02, size: 2 + (i % 3) };
  });

  // ═══ STAT COUNTERS ═══
  const statRevealStart = 250;
  const beds = Math.round(ease(frame, statRevealStart + 10, 20, 0, 4));
  const baths = Math.round(ease(frame, statRevealStart + 10, 20, 0, 3) * 10) / 10;
  const sqft = Math.round(ease(frame, statRevealStart + 30, 25, 0, 2850));

  // ═══ PRICE COUNTER ═══
  const priceStart = 385;
  const price = Math.round(ease(frame, priceStart + 5, 30, 0, 895000));
  const priceFormatted = price > 0 ? `$${price.toLocaleString()}` : "$0";

  return (
    <div style={{
      width: 1080, height: 1920,
      background: BG,
      overflow: "hidden",
      position: "relative",
      fontFamily: "'Inter', -apple-system, sans-serif",
    }}>

      {/* Subtle radial glow */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 50% 40%, rgba(201,168,76,0.04) 0%, transparent 60%)",
      }} />

      {/* Ambient dots */}
      {dots.map((d, i) => (
        <div key={i} style={{
          position: "absolute", left: d.x, top: d.y,
          width: d.size, height: d.size, borderRadius: "50%",
          background: GOLD, opacity: d.opacity,
        }} />
      ))}

      {/* ═══ SCENE 1 (0–105): Blueprint reveal + "JUST LISTED" ═══ */}
      <div style={{ position: "absolute", inset: 0, ...vis(frame, 0, 100) }}>
        <svg width={1080} height={1920} style={{ position: "absolute", inset: 0 }}>
          {blueprintLines.map((l, i) => {
            const progress = ease(frame, l.delay, 25, 0, 1);
            const dx = l.x2 - l.x1;
            const dy = l.y2 - l.y1;
            return (
              <line key={i}
                x1={l.x1} y1={l.y1}
                x2={l.x1 + dx * progress} y2={l.y1 + dy * progress}
                stroke={GOLD} strokeWidth={1.5} opacity={0.2}
              />
            );
          })}
          <text x={540} y={380} fill={SLATE} fontSize={20} opacity={ease(frame, 55, 12, 0, 0.35)}
            textAnchor="middle" fontFamily="'Inter', sans-serif">32&apos;</text>
          <text x={170} y={650} fill={SLATE} fontSize={20} opacity={ease(frame, 60, 12, 0, 0.35)}
            textAnchor="middle" fontFamily="'Inter', sans-serif"
            transform="rotate(-90, 170, 650)">18&apos;</text>
        </svg>

        <div style={{ position: "absolute", left: 0, right: 0, top: 280, textAlign: "center" }}>
          <div style={{
            ...fadeUp(frame, 15),
            fontSize: 22, color: GOLD, letterSpacing: 14,
            textTransform: "uppercase", fontWeight: 500,
          }}>
            Just Listed
          </div>
          <div style={{
            ...fadeUp(frame, 30),
            width: 60, height: 1.5, background: GOLD_DIM, margin: "20px auto",
          }} />
        </div>

        {/* House outline icon */}
        <div style={{
          position: "absolute", left: 540, top: 650,
          transform: `translate(-50%, -50%) scale(${ease(frame, 25, 30, 0.7, 1)})`,
          opacity: ease(frame, 25, 20, 0, 1),
        }}>
          <svg width={200} height={180} viewBox="0 0 200 180">
            <path d="M100 10 L190 80 L190 170 L10 170 L10 80 Z"
              fill="none" stroke={GOLD} strokeWidth={2} opacity={0.4}
              strokeDasharray={600}
              strokeDashoffset={interpolate(frame, [25, 70], [600, 0], { ...clamp, easing: outCubic })}
            />
            <rect x={80} y={110} width={40} height={60}
              fill="none" stroke={GOLD} strokeWidth={1.5}
              opacity={ease(frame, 50, 15, 0, 0.3)}
            />
          </svg>
        </div>
      </div>

      {/* ═══ SCENE 2 (105–245): Address + neighborhood ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        padding: "0 80px",
        ...vis(frame, 105, 240),
      }}>
        <div style={{
          ...fadeUp(frame, 112),
          fontSize: 54, color: WHITE, fontWeight: 600,
          textAlign: "center", lineHeight: 1.35, letterSpacing: -1,
        }}>
          742 Maple Drive
        </div>
        <div style={{
          ...fadeUp(frame, 130),
          fontSize: 28, color: SLATE, marginTop: 16,
          letterSpacing: 3, textTransform: "uppercase", fontWeight: 400,
        }}>
          Westwood Heights
        </div>
        <div style={{
          ...fadeUp(frame, 148),
          width: 50, height: 1.5, background: GOLD, margin: "30px 0", opacity: 0.4,
        }} />
        <div style={{
          ...fadeUp(frame, 160),
          fontSize: 26, color: SLATE, textAlign: "center", lineHeight: 1.6, maxWidth: 600,
        }}>
          Top-rated schools. Walking trails.{"\n"}12 minutes to downtown.
        </div>
      </div>

      {/* ═══ SCENE 3 (245–380): Stats with weight ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        ...vis(frame, 245, 375),
      }}>
        <div style={{ display: "flex", gap: 50, ...fadeUp(frame, 252) }}>
          {[
            { value: `${beds}`, label: "Beds", delay: 0 },
            { value: `${baths}`, label: "Baths", delay: 8 },
            { value: sqft > 0 ? sqft.toLocaleString() : "0", label: "Sq Ft", delay: 16 },
          ].map((stat, i) => (
            <div key={i} style={{
              ...fadeUp(frame, 260 + stat.delay),
              textAlign: "center", padding: "30px 35px",
              background: CARD_BG, borderRadius: 16,
              border: "1px solid rgba(201,168,76,0.1)",
            }}>
              <div style={{
                fontSize: 64, color: GOLD, fontWeight: 700, letterSpacing: -2, lineHeight: 1,
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: 20, color: SLATE, marginTop: 10,
                letterSpacing: 4, textTransform: "uppercase", fontWeight: 400,
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 15, marginTop: 45, ...fadeUp(frame, 310) }}>
          {["Renovated Kitchen", "Pool", "2-Car Garage"].map((tag, i) => (
            <div key={i} style={{
              ...fadeUp(frame, 315 + i * 8),
              padding: "10px 22px", border: "1px solid rgba(138,155,176,0.2)",
              borderRadius: 20, fontSize: 20, color: SLATE, fontWeight: 400,
            }}>
              {tag}
            </div>
          ))}
        </div>
      </div>

      {/* ═══ SCENE 4 (380–445): PRICE — convergence ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        ...vis(frame, 380, 440),
      }}>
        <div style={{
          width: ease(frame, 385, 20, 0, 200), height: 1.5,
          background: GOLD, opacity: 0.5, marginBottom: 30,
        }} />
        <div style={{
          ...fadeUp(frame, 388),
          fontSize: 22, color: SLATE, letterSpacing: 8,
          textTransform: "uppercase", marginBottom: 10,
        }}>
          Offered at
        </div>
        <div style={{
          ...fadeUp(frame, 392),
          fontSize: 96, color: WHITE, fontWeight: 700, letterSpacing: -3, lineHeight: 1,
          textShadow: `0 0 60px rgba(201,168,76,${ease(frame, 410, 20, 0, 0.2)})`,
        }}>
          {priceFormatted}
        </div>
        <div style={{
          width: ease(frame, 425, 20, 0, 200), height: 1.5,
          background: GOLD, opacity: 0.5, marginTop: 30,
        }} />
      </div>

      {/* ═══ SCENE 5 (445–540): CTA ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        ...vis(frame, 445, 540),
      }}>
        <div style={{
          ...fadeUp(frame, 450),
          fontSize: 44, color: WHITE, fontWeight: 600,
          textAlign: "center", letterSpacing: -0.5,
        }}>
          Schedule a Private Tour
        </div>
        <div style={{
          ...fadeUp(frame, 470),
          marginTop: 30, width: 50, height: 1.5, background: GOLD, opacity: 0.4,
        }} />
        <div style={{
          ...fadeUp(frame, 480),
          marginTop: 30, fontSize: 28, color: GOLD, fontWeight: 500, letterSpacing: 1,
        }}>
          Sarah Mitchell Realty
        </div>
        <div style={{
          ...fadeUp(frame, 495),
          marginTop: 12, fontSize: 22, color: SLATE, fontWeight: 400,
        }}>
          (555) 234-8910
        </div>
        <div style={{
          ...fadeUp(frame, 510),
          marginTop: 30, padding: "14px 40px",
          border: `1.5px solid ${GOLD}`, borderRadius: 28,
          fontSize: 22, color: GOLD, letterSpacing: 4,
          textTransform: "uppercase", fontWeight: 500,
        }}>
          Book Now
        </div>
      </div>

      {/* Film grain */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.04, pointerEvents: "none", zIndex: 100,
        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
      }} />
    </div>
  );
};
