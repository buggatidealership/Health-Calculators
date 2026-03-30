import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

// COFFEE CARGO TAG — Reel 1/3 for ALTO single-origin coffee
// Shipping label / origin passport that unfolds the story of a Colombian bean.
// 540 frames @ 30fps = 18s | 1080x1920

const clamp = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };

// Brand Palette — named after content, not function
const ESPRESSO = "#2C1810";
const PARCHMENT = "#F4EDE4";
const COPPER = "#B87333";
const SAGE = "#6B7F5E";
const AMBER = "#D4915E";
const CHARCOAL = "#1A1714";
const CREAM = "#FAF6F0";

const F = {
  serif: "'DM Serif Display', Georgia, serif",
  sans: "'Inter', -apple-system, sans-serif",
  mono: "'JetBrains Mono', 'SF Mono', monospace",
};

// ═══ UTILITIES ═══

function ease(frame: number, start: number, dur: number, from: number, to: number, fn = Easing.out(Easing.cubic)) {
  return interpolate(frame, [start, start + dur], [from, to], { ...clamp, easing: fn });
}

function fadeUp(frame: number, start: number, dur = 16) {
  return {
    opacity: ease(frame, start, dur, 0, 1),
    transform: `translateY(${ease(frame, start, dur, 36, 0)}px)`,
  };
}

function sceneVis(frame: number, start: number, end: number, fadeIn = 14, fadeOut = 14) {
  if (frame < start - 5 || frame > end + fadeOut + 5) return 0;
  return Math.min(
    interpolate(frame, [start, start + fadeIn], [0, 1], clamp),
    interpolate(frame, [end, end + fadeOut], [1, 0], clamp),
  );
}

// ═══ CUSTOM COMPONENTS ═══

/** Punched hole at top of cargo tag with string */
function TagHole({ frame, color = CHARCOAL }: { frame: number; color?: string }) {
  const swingAngle = Math.sin(frame * 0.015) * 3;
  return (
    <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* String going up */}
      <div style={{
        width: 2.5,
        height: 80,
        background: `linear-gradient(180deg, transparent 0%, ${color}40 30%, ${color}60 100%)`,
        transformOrigin: "top center",
        transform: `rotate(${swingAngle}deg)`,
      }} />
      {/* Reinforced hole */}
      <div style={{
        width: 40, height: 40,
        borderRadius: "50%",
        border: `3px solid ${color}50`,
        background: ESPRESSO,
        marginTop: -4,
        position: "relative",
      }}>
        <div style={{
          position: "absolute",
          width: 18, height: 18,
          borderRadius: "50%",
          background: ESPRESSO,
          left: 8, top: 8,
        }} />
      </div>
    </div>
  );
}

/** Circular authentication stamp — rotates in with overshoot */
function StampSeal({ frame, start, label }: { frame: number; start: number; label: string }) {
  const rot = ease(frame, start, 16, -30, -6, Easing.out(Easing.back(1.8)));
  const scale = ease(frame, start, 14, 2, 1, Easing.out(Easing.back(2.2)));
  const opacity = ease(frame, start, 10, 0, 0.88);

  return (
    <div style={{
      transform: `rotate(${rot}deg) scale(${scale})`,
      opacity,
      width: 180, height: 180,
      borderRadius: "50%",
      border: `4px solid ${SAGE}`,
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      position: "relative",
    }}>
      {/* Double border */}
      <div style={{
        position: "absolute", inset: 6,
        borderRadius: "50%",
        border: `2px solid ${SAGE}80`,
      }} />
      <div style={{
        fontSize: 16, fontFamily: F.mono, fontWeight: 800,
        color: SAGE, letterSpacing: 2,
        textAlign: "center", lineHeight: 1.3,
        textTransform: "uppercase",
      }}>
        {label.split("\n").map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>
    </div>
  );
}

/** Dotted route line that draws progressively */
function DottedRoute({ frame, start, dur, x1, y1, x2, y2, color = SAGE }: {
  frame: number; start: number; dur: number;
  x1: number; y1: number; x2: number; y2: number; color?: string;
}) {
  const progress = ease(frame, start, dur, 0, 1, Easing.inOut(Easing.cubic));
  const dx = x2 - x1;
  const dy = y2 - y1;
  const totalLen = Math.sqrt(dx * dx + dy * dy);
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);
  const drawnLen = totalLen * progress;

  return (
    <div style={{
      position: "absolute",
      left: x1, top: y1,
      width: drawnLen, height: 0,
      borderTop: `3px dashed ${color}`,
      transformOrigin: "left center",
      transform: `rotate(${angle}deg)`,
    }} />
  );
}

// ═══ MAIN COMPOSITION ═══

export const Coffee_CargoTag: React.FC = () => {
  const frame = useCurrentFrame();

  // ── Tag entrance: slides up from bottom ──
  const tagY = ease(frame, 0, 30, 500, 0, Easing.out(Easing.exp));
  const tagOp = ease(frame, 0, 22, 0, 1);

  // ── Scene visibility ──
  const s1 = sceneVis(frame, 0, 130);
  const s2 = sceneVis(frame, 130, 275);
  const s3 = sceneVis(frame, 275, 415);
  const s4 = sceneVis(frame, 415, 540, 14, 1);

  // ── Coffee bean scatter pattern (background) ──
  const beans = Array.from({ length: 24 }, (_, i) => {
    const x = ((i * 173.7) % 1080);
    const y = ((i * 251.3) % 1920);
    const rot = (i * 47) % 360;
    const size = 10 + (i % 4) * 4;
    return { x, y, rot, size };
  });

  // ── Altitude counter for Scene 1 ──
  const altValue = Math.round(ease(frame, 12, 40, 0, 1847, Easing.out(Easing.cubic)));
  const altFormatted = altValue.toLocaleString();

  // ── Scene 3: distance counter ──
  const distValue = Math.round(ease(frame, 310, 60, 0, 8200, Easing.out(Easing.cubic)));
  const distFormatted = distValue.toLocaleString();

  // ── Scene 3: journey waypoints ──
  const waypoints = [
    { label: "farm", pos: 0.0, delay: 300 },
    { label: "mill", pos: 0.3, delay: 330 },
    { label: "port", pos: 0.6, delay: 355 },
    { label: "roastery", pos: 1.0, delay: 375 },
  ];

  // ── Scene 4: tag scale morph ──
  const tagScale = ease(frame, 420, 22, 1, 1.03, Easing.out(Easing.cubic));
  const tagBorderGlow = ease(frame, 420, 30, 0, 1);

  return (
    <div style={{
      width: 1080, height: 1920,
      background: ESPRESSO,
      overflow: "hidden",
      position: "relative",
      fontFamily: F.sans,
    }}>

      {/* ── Coffee bean scatter (bg decoration) ── */}
      {beans.map((b, i) => (
        <div key={`bean-${i}`} style={{
          position: "absolute",
          left: b.x - b.size / 2,
          top: b.y - b.size / 2,
          width: b.size,
          height: b.size * 1.4,
          borderRadius: "50%",
          background: PARCHMENT,
          opacity: 0.035,
          transform: `rotate(${b.rot}deg)`,
        }}>
          {/* Bean crease line */}
          <div style={{
            position: "absolute",
            left: b.size * 0.4,
            top: 1,
            width: 1,
            height: b.size * 1.3,
            background: ESPRESSO,
            opacity: 0.5,
          }} />
        </div>
      ))}

      {/* ── Film grain overlay ── */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.06, pointerEvents: "none",
        mixBlendMode: "overlay",
        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
      }} />

      {/* ═══ THE CARGO TAG ═══ */}
      <div style={{
        position: "absolute",
        left: 60, right: 60, top: 140, bottom: 200,
        display: "flex", flexDirection: "column", alignItems: "center",
        transform: `translateY(${tagY}px) scale(${s4 > 0 ? tagScale : 1})`,
        opacity: tagOp,
      }}>

        {/* Tag hole + string */}
        <TagHole frame={frame} color={PARCHMENT} />

        {/* Tag body */}
        <div style={{
          background: PARCHMENT,
          width: "100%",
          flex: 1,
          borderRadius: 16,
          border: `2px solid ${CHARCOAL}30`,
          position: "relative",
          overflow: "hidden",
          marginTop: -6,
          boxShadow: s4 > 0
            ? `0 0 ${tagBorderGlow * 60}px ${COPPER}30, 0 20px 60px rgba(0,0,0,0.3)`
            : "0 20px 60px rgba(0,0,0,0.3)",
        }}>
          {/* Utilitarian border lines (like real shipping labels) */}
          <div style={{
            position: "absolute", inset: 10,
            border: `1px dashed ${CHARCOAL}18`,
            borderRadius: 10,
            pointerEvents: "none",
          }} />

          {/* Top stripe */}
          <div style={{
            height: 6,
            background: `repeating-linear-gradient(90deg, ${COPPER} 0px, ${COPPER} 20px, transparent 20px, transparent 28px)`,
          }} />

          {/* ═══ SCENE 1 CONTENT: THE TAG — Hook (0-134) ═══ */}
          <div style={{
            position: "absolute",
            left: 50, right: 50, top: 60, bottom: 40,
            opacity: s1,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
          }}>
            {/* Small label at top */}
            <div style={{
              ...fadeUp(frame, 10),
              fontSize: 18, fontFamily: F.mono,
              color: `${CHARCOAL}60`,
              letterSpacing: 6, textTransform: "uppercase",
              marginBottom: 30,
            }}>
              Origin Altitude
            </div>

            {/* Large altitude number */}
            <div style={{
              ...fadeUp(frame, 14, 22),
              fontSize: 160, fontFamily: F.mono,
              color: CHARCOAL, fontWeight: 700,
              letterSpacing: -4, lineHeight: 1,
            }}>
              {altFormatted}
              <span style={{ fontSize: 52, letterSpacing: 0, fontWeight: 400, color: COPPER }}>m</span>
            </div>

            {/* Coordinates */}
            <div style={{
              display: "flex", gap: 40,
              marginTop: 40,
            }}>
              <div style={{
                ...fadeUp(frame, 55, 18),
                fontSize: 32, fontFamily: F.mono,
                color: `${CHARCOAL}90`, fontWeight: 400,
              }}>
                6.2°N
              </div>
              <div style={{
                ...fadeUp(frame, 62, 18),
                fontSize: 32, fontFamily: F.mono,
                color: `${CHARCOAL}90`, fontWeight: 400,
              }}>
                75.6°W
              </div>
            </div>

            {/* Thin separator */}
            <div style={{
              width: ease(frame, 75, 25, 0, 240),
              height: 1, background: COPPER,
              marginTop: 50, opacity: 0.4,
            }} />

            {/* Teaser text */}
            <div style={{
              ...fadeUp(frame, 90, 18),
              fontSize: 28, fontFamily: F.serif,
              color: AMBER, fontStyle: "italic",
              marginTop: 30,
            }}>
              Huila, Colombia
            </div>

            {/* Barcode-style element at bottom */}
            <div style={{
              position: "absolute", bottom: 30, left: 0, right: 0,
              display: "flex", justifyContent: "center", gap: 3,
              opacity: ease(frame, 40, 30, 0, 0.15),
            }}>
              {Array.from({ length: 32 }, (_, i) => (
                <div key={`bar-${i}`} style={{
                  width: i % 3 === 0 ? 4 : 2,
                  height: 40 + (i % 5) * 6,
                  background: CHARCOAL,
                }} />
              ))}
            </div>
          </div>

          {/* ═══ SCENE 2 CONTENT: THE ORIGIN — Farm Details (130-279) ═══ */}
          <div style={{
            position: "absolute",
            left: 50, right: 50, top: 40, bottom: 40,
            opacity: s2,
            display: "flex", flexDirection: "column",
            justifyContent: "center",
          }}>
            {/* Country — large stamped */}
            <div style={{
              ...fadeUp(frame, 138, 20),
              fontSize: 80, fontFamily: F.sans,
              color: CHARCOAL, fontWeight: 800,
              letterSpacing: 14, textTransform: "uppercase",
              textAlign: "center",
            }}>
              Colombia
            </div>

            {/* Farm name */}
            <div style={{
              ...fadeUp(frame, 152, 18),
              fontSize: 42, fontFamily: F.serif,
              color: COPPER, fontStyle: "italic",
              textAlign: "center", marginTop: 10,
            }}>
              Finca La Esperanza
            </div>

            {/* Divider */}
            <div style={{
              width: ease(frame, 162, 20, 0, 600),
              height: 1, background: `${CHARCOAL}20`,
              margin: "45px auto",
            }} />

            {/* Data fields — stamp/type in */}
            {[
              { label: "VARIETAL", value: "Caturra", delay: 175 },
              { label: "PROCESS", value: "Washed", delay: 195 },
              { label: "HARVEST", value: "March 2026", delay: 215 },
            ].map((field, i) => (
              <div key={field.label} style={{
                display: "flex", justifyContent: "space-between",
                alignItems: "baseline",
                padding: "16px 0",
                borderBottom: i < 2 ? `1px dotted ${CHARCOAL}15` : "none",
                opacity: ease(frame, field.delay, 14, 0, 1),
                transform: `translateX(${ease(frame, field.delay, 16, -30, 0)}px)`,
              }}>
                <div style={{
                  fontSize: 22, fontFamily: F.mono,
                  color: `${CHARCOAL}55`, letterSpacing: 4,
                  fontWeight: 500,
                }}>
                  {field.label}
                </div>
                <div style={{
                  fontSize: 34, fontFamily: F.sans,
                  color: CHARCOAL, fontWeight: 600,
                }}>
                  {field.value}
                </div>
              </div>
            ))}

            {/* SINGLE ORIGIN stamp seal */}
            <div style={{
              position: "absolute",
              right: 20, top: 60,
            }}>
              <StampSeal frame={frame} start={240} label={"SINGLE\nORIGIN"} />
            </div>
          </div>

          {/* ═══ SCENE 3 CONTENT: THE JOURNEY (275-419) ═══ */}
          <div style={{
            position: "absolute",
            left: 50, right: 50, top: 40, bottom: 40,
            opacity: s3,
            display: "flex", flexDirection: "column",
            justifyContent: "center",
          }}>
            {/* Distance counter */}
            <div style={{
              textAlign: "center",
              marginBottom: 50,
            }}>
              <div style={{
                ...fadeUp(frame, 280, 18),
                fontSize: 18, fontFamily: F.mono,
                color: `${CHARCOAL}50`,
                letterSpacing: 6, textTransform: "uppercase",
              }}>
                Distance Traveled
              </div>
              <div style={{
                ...fadeUp(frame, 286, 20),
                fontSize: 120, fontFamily: F.mono,
                color: CHARCOAL, fontWeight: 700,
                letterSpacing: -3, lineHeight: 1.1,
              }}>
                {distFormatted}
                <span style={{ fontSize: 40, fontWeight: 400, color: SAGE, letterSpacing: 0 }}> km</span>
              </div>
            </div>

            {/* Route visualization area */}
            <div style={{
              position: "relative",
              height: 280,
              margin: "0 20px",
            }}>
              {/* Dotted route line */}
              <DottedRoute
                frame={frame} start={295} dur={50}
                x1={40} y1={80} x2={820} y2={80}
                color={SAGE}
              />

              {/* Waypoint markers */}
              {waypoints.map((wp, i) => {
                const wpX = 40 + wp.pos * 780;
                const wpOp = ease(frame, wp.delay, 14, 0, 1);
                const wpY = ease(frame, wp.delay, 14, 12, 0);
                return (
                  <div key={wp.label} style={{
                    position: "absolute",
                    left: wpX - 8,
                    top: 72,
                    opacity: wpOp,
                    transform: `translateY(${wpY}px)`,
                    display: "flex", flexDirection: "column",
                    alignItems: "center",
                  }}>
                    {/* Dot */}
                    <div style={{
                      width: i === 0 || i === waypoints.length - 1 ? 18 : 12,
                      height: i === 0 || i === waypoints.length - 1 ? 18 : 12,
                      borderRadius: "50%",
                      background: i === waypoints.length - 1 ? COPPER : SAGE,
                      border: `2px solid ${PARCHMENT}`,
                    }} />
                    {/* Label */}
                    <div style={{
                      fontSize: 20, fontFamily: F.mono,
                      color: i === waypoints.length - 1 ? COPPER : `${CHARCOAL}70`,
                      fontWeight: i === waypoints.length - 1 ? 700 : 400,
                      marginTop: 16, letterSpacing: 1,
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                    }}>
                      {wp.label}
                    </div>
                  </div>
                );
              })}

              {/* Arrow markers between waypoints */}
              {[0.15, 0.45, 0.8].map((pos, i) => {
                const arrowX = 40 + pos * 780;
                const arrowDelay = 320 + i * 20;
                return (
                  <div key={`arrow-${i}`} style={{
                    position: "absolute",
                    left: arrowX, top: 72,
                    fontSize: 18, color: SAGE,
                    opacity: ease(frame, arrowDelay, 12, 0, 0.5),
                    fontFamily: F.mono,
                  }}>
                    →
                  </div>
                );
              })}
            </div>

            {/* Bottom journey text */}
            <div style={{
              ...fadeUp(frame, 380, 20),
              textAlign: "center",
              marginTop: 20,
            }}>
              <div style={{
                fontSize: 30, fontFamily: F.serif,
                color: CHARCOAL, fontStyle: "italic",
                lineHeight: 1.5,
              }}>
                From Huila, Colombia
              </div>
              <div style={{
                fontSize: 30, fontFamily: F.serif,
                color: COPPER, fontStyle: "italic",
                lineHeight: 1.5,
              }}>
                to your cup.
              </div>
            </div>

            {/* Sage green accent bar */}
            <div style={{
              position: "absolute", left: 0, bottom: 0, right: 0,
              height: ease(frame, 290, 30, 0, 6),
              background: `linear-gradient(90deg, ${SAGE}60, ${SAGE}, ${SAGE}60)`,
              borderRadius: 3,
            }} />
          </div>

          {/* ═══ SCENE 4 CONTENT: CTA — The Arrival (415-540) ═══ */}
          <div style={{
            position: "absolute",
            left: 50, right: 50, top: 40, bottom: 40,
            opacity: s4,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
          }}>
            {/* Brand name */}
            <div style={{
              ...fadeUp(frame, 425, 22),
              fontSize: 130, fontFamily: F.serif,
              color: CHARCOAL, letterSpacing: 16,
              lineHeight: 1,
            }}>
              ALTO
            </div>

            {/* Tagline */}
            <div style={{
              ...fadeUp(frame, 450, 20),
              fontSize: 36, fontFamily: F.serif,
              color: COPPER, fontStyle: "italic",
              marginTop: 30, textAlign: "center",
              lineHeight: 1.4,
            }}>
              Every bean has an address.
            </div>

            {/* Divider */}
            <div style={{
              width: ease(frame, 465, 20, 0, 180),
              height: 1.5, background: COPPER,
              margin: "40px 0", opacity: 0.5,
            }} />

            {/* Sub-text */}
            <div style={{
              ...fadeUp(frame, 475, 18),
              fontSize: 22, fontFamily: F.mono,
              color: `${CHARCOAL}60`,
              letterSpacing: 5, textTransform: "uppercase",
            }}>
              Single-origin, direct trade
            </div>

            {/* Connecting design element: small tag hole echo */}
            <div style={{
              ...fadeUp(frame, 490, 18),
              marginTop: 60,
              width: 36, height: 36,
              borderRadius: "50%",
              border: `2px solid ${COPPER}50`,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <div style={{
                width: 14, height: 14,
                borderRadius: "50%",
                background: COPPER,
                opacity: 0.4,
              }} />
            </div>

            {/* Bottom barcode echo */}
            <div style={{
              position: "absolute", bottom: 20, left: 0, right: 0,
              display: "flex", justifyContent: "center", gap: 3,
              opacity: ease(frame, 500, 25, 0, 0.12),
            }}>
              {Array.from({ length: 32 }, (_, i) => (
                <div key={`bar2-${i}`} style={{
                  width: i % 3 === 0 ? 4 : 2,
                  height: 35 + (i % 5) * 5,
                  background: CHARCOAL,
                }} />
              ))}
            </div>
          </div>

          {/* Bottom stripe (persistent) */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            height: 6,
            background: `repeating-linear-gradient(90deg, ${COPPER} 0px, ${COPPER} 20px, transparent 20px, transparent 28px)`,
          }} />
        </div>
      </div>

      {/* ── Soft vignette ── */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 50% 50%, transparent 50%, rgba(10,6,4,0.3) 100%)",
        pointerEvents: "none",
      }} />
    </div>
  );
};
