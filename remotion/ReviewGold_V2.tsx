import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

// ReviewGold V2 — Rebuilt with Gemini feedback applied:
// 1. Hook: immediate bold statement in first 0.5s, dynamic plane
// 2. Pacing: faster chunk reveals, not word-by-word
// 3. Continuous visual motion: floating particles, gradient shifts, plane flying
// 4. Kinetic typography: scale pops, color pulses, varied animations
// 5. Better quote integration: links "took so good care" to team reveal
// 18s = 540 frames @ 30fps | 1080x1920

const C = {
  bg: "#0a0e17",
  card: "#141a28",
  cream: "#F5F0EA",
  sub: "#8a94a8",
  dim: "#3a4558",
  gold: "#d4a853",
  goldGlow: "#d4a85340",
  norway: "#ba3c3c",
};
const F = {
  serif: "'DM Serif Display', Georgia, serif",
  sans: "'Inter', -apple-system, sans-serif",
};

const clamp = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };

function ease(frame: number, start: number, dur: number, from: number, to: number, fn = Easing.out(Easing.cubic)) {
  return interpolate(frame, [start, start + dur], [from, to], { ...clamp, easing: fn });
}

function fadeUp(frame: number, start: number, dur = 14) {
  return {
    opacity: ease(frame, start, dur, 0, 1),
    transform: `translateY(${ease(frame, start, dur, 40, 0)}px)`,
  };
}

function sceneVis(frame: number, start: number, end: number, fi = 12, fo = 12) {
  if (frame < start - 5 || frame > end + fo + 5) return 0;
  return Math.min(
    interpolate(frame, [start, start + fi], [0, 1], clamp),
    interpolate(frame, [end, end + Math.max(fo, 1)], [1, 0], clamp)
  );
}

// Kinetic pop: scale up with overshoot then settle
function popIn(frame: number, start: number, dur = 12): { opacity: number; transform: string } {
  const s = interpolate(frame, [start, start + dur * 0.6, start + dur], [0.3, 1.12, 1], {
    ...clamp, easing: Easing.out(Easing.cubic),
  });
  const o = ease(frame, start, dur * 0.4, 0, 1);
  return { opacity: o, transform: `scale(${s})` };
}

// Continuous breathing pulse — elements feel alive
function breathe(frame: number, speed = 0.02, range = 0.03) {
  return 1 + Math.sin(frame * speed * Math.PI * 2) * range;
}

// Floating particles — ambient life
function Particles({ frame, count = 14 }: { frame: number; count?: number }) {
  return (
    <>
      {Array.from({ length: count }, (_, i) => {
        const seed = i * 137.508;
        const x = (seed * 7.3) % 1080;
        const baseY = (seed * 3.1) % 1920;
        const y = (baseY + frame * (0.3 + (i % 4) * 0.15)) % 2100 - 100;
        const size = 2 + (i % 3) * 1.5;
        const opacity = 0.07 + Math.sin(frame * 0.03 + i) * 0.04;
        const drift = Math.sin(frame * 0.015 + seed) * 20;
        return (
          <div key={i} style={{
            position: "absolute", left: x + drift, top: y,
            width: size, height: size, borderRadius: "50%",
            background: i % 3 === 0 ? C.gold : C.sub, opacity,
          }} />
        );
      })}
    </>
  );
}

function Grain() {
  return (
    <div style={{
      position: "absolute", inset: 0, opacity: 0.15, pointerEvents: "none", zIndex: 100,
      background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
    }} />
  );
}

export const ReviewGold_V2: React.FC = () => {
  const frame = useCurrentFrame();

  // Breathing ambient glow that drifts
  const ambInt = interpolate(frame, [0, 100, 300, 540], [0.06, 0.14, 0.1, 0.06], clamp);
  const glowX = 50 + Math.sin(frame * 0.008) * 8;
  const glowY = 25 + Math.cos(frame * 0.006) * 6;

  // Subtle camera drift — whole scene shifts
  const driftX = Math.sin(frame * 0.005) * 3;
  const driftY = Math.cos(frame * 0.007) * 2;
  const driftZoom = 1 + Math.sin(frame * 0.003) * 0.005;

  return (
    <div style={{
      width: 1080, height: 1920, background: C.bg,
      overflow: "hidden", position: "relative", fontFamily: F.sans,
    }}>
      {/* Camera drift wrapper */}
      <div style={{
        position: "absolute", inset: -10,
        transform: `translate(${driftX}px, ${driftY}px) scale(${driftZoom})`,
      }}>
        {/* Moving ambient glow */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: `radial-gradient(ellipse at ${glowX}% ${glowY}%, hsla(38,60%,45%,${ambInt}) 0%, transparent 55%)`,
        }} />

        <Particles frame={frame} count={15} />
        <Grain />

        {/* ═══ SCENE 1: HOOK (0-110) — INSTANT IMPACT ═══ */}
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", flexDirection: "column", alignItems: "center",
          justifyContent: "center",
          opacity: sceneVis(frame, 0, 110),
          padding: "80px 55px",
        }}>
          {/* IMMEDIATE: bold statement at frame 2 */}
          <div style={{
            ...popIn(frame, 2, 14),
            fontSize: 76, color: C.cream, fontFamily: F.serif,
            textAlign: "center", lineHeight: 1.25, marginBottom: 24,
          }}>
            "I'd rather{" "}
            <span style={{
              color: C.gold, fontStyle: "italic",
              textShadow: `0 0 30px ${C.goldGlow}`,
            }}>fly from Norway</span>"
          </div>

          <div style={{
            ...fadeUp(frame, 12, 12),
            fontSize: 44, color: C.sub, letterSpacing: 3,
            textTransform: "uppercase",
          }}>
            than see a dentist at home
          </div>

          {/* Flying plane — continuous motion */}
          <div style={{
            position: "absolute",
            left: interpolate(frame, [0, 110], [-80, 1160], clamp),
            top: 560 + Math.sin(frame * 0.06) * 15,
            fontSize: 48, opacity: ease(frame, 15, 8, 0, 0.7),
            transform: `rotate(-5deg)`,
          }}>✈️</div>

          {/* Flight trail */}
          <div style={{
            position: "absolute", left: 0, top: 587,
            width: Math.max(0, interpolate(frame, [18, 110], [0, 1100], clamp)),
            height: 1,
            background: `linear-gradient(90deg, transparent, ${C.gold}40, ${C.gold}15)`,
          }} />

          {/* Route badge */}
          <div style={{
            ...fadeUp(frame, 35, 10),
            marginTop: 70,
            display: "flex", alignItems: "center", gap: 14,
            background: `${C.card}cc`,
            border: `1px solid ${C.gold}25`,
            borderRadius: 40, padding: "14px 32px",
          }}>
            <span style={{ fontSize: 28 }}>🇳🇴</span>
            <span style={{ fontSize: 28, color: C.sub }}>Oslo</span>
            <span style={{ fontSize: 22, color: C.gold }}>→</span>
            <span style={{ fontSize: 28, color: C.gold }}>Barcelona</span>
            <span style={{ fontSize: 28 }}>🇪🇸</span>
          </div>
        </div>

        {/* ═══ SCENE 2: THE REVIEW (115-280) — FAST CHUNKS ═══ */}
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", flexDirection: "column", alignItems: "center",
          justifyContent: "center",
          opacity: sceneVis(frame, 115, 280),
          padding: "80px 50px", gap: 20,
        }}>
          {/* Stars — staggered pop with overshoot */}
          <div style={{ display: "flex", gap: 10 }}>
            {[0,1,2,3,4].map(i => {
              const s = ease(frame, 118 + i * 4, 10, 0, 1, Easing.out(Easing.back(2.5)));
              return (
                <div key={i} style={{
                  fontSize: 48,
                  transform: `scale(${s * breathe(frame, 0.02 + i * 0.003, 0.04)})`,
                  filter: `drop-shadow(0 0 8px ${C.goldGlow})`,
                }}>⭐</div>
              );
            })}
          </div>

          {/* Google badge */}
          <div style={{
            ...fadeUp(frame, 138, 10),
            display: "flex", alignItems: "center", gap: 10,
            fontSize: 26, color: C.sub, fontWeight: 500,
          }}>
            <span style={{ fontSize: 24 }}>G</span> Google Review · Verified
          </div>

          {/* Quote card — breathing */}
          <div style={{
            ...fadeUp(frame, 145, 14),
            background: C.card, border: `1px solid ${C.dim}50`,
            borderRadius: 24, padding: "44px 42px", width: "100%",
            position: "relative",
            transform: `scale(${breathe(frame, 0.008, 0.003)})`,
          }}>
            {/* Quote mark — breathing */}
            <div style={{
              position: "absolute", top: 8, left: 24,
              fontSize: 72, color: C.gold,
              opacity: 0.2 + Math.sin(frame * 0.02) * 0.05,
              fontFamily: F.serif, lineHeight: 1,
            }}>"</div>

            {/* Line 1 — full line, keyword pops with scale */}
            <div style={{
              opacity: ease(frame, 152, 12, 0, 1),
              fontSize: 42, color: C.cream, lineHeight: 1.5,
            }}>
              Here is the{" "}
              <span style={{
                color: C.gold, fontWeight: 700,
                fontSize: interpolate(frame, [160, 168, 178], [42, 50, 44], clamp),
              }}>best dentist team</span>
              {" "}I have had in my{" "}
              <span style={{ color: C.gold, fontWeight: 700 }}>37 years</span> of life.
            </div>

            {/* Line 2 — block reveal with slide, keyword glows */}
            <div style={{
              opacity: ease(frame, 195, 12, 0, 1),
              transform: `translateX(${ease(frame, 195, 14, 20, 0)}px)`,
              fontSize: 42, color: C.cream, lineHeight: 1.5, marginTop: 20,
            }}>
              I now would rather{" "}
              <span style={{
                color: C.gold, fontWeight: 700,
                textShadow: `0 0 ${10 + Math.sin(frame * 0.04) * 5}px ${C.goldGlow}`,
              }}>fly from Norway</span>
              {" "}to this clinic than ever go to a dentist in Norway.
            </div>
          </div>

          {/* Reviewer — slides in from left */}
          <div style={{
            opacity: ease(frame, 240, 12, 0, 1),
            transform: `translateX(${ease(frame, 240, 14, -40, 0)}px)`,
            display: "flex", alignItems: "center", gap: 14,
          }}>
            <div style={{
              width: 48, height: 48, borderRadius: "50%",
              background: `linear-gradient(135deg, ${C.gold}30, ${C.gold}10)`,
              border: `2px solid ${C.gold}40`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 24, color: C.gold, fontWeight: 600,
            }}>T</div>
            <div>
              <div style={{ fontSize: 30, color: C.cream, fontWeight: 600 }}>Taltunran</div>
              <div style={{ fontSize: 24, color: C.sub }}>🇳🇴 Norway</div>
            </div>
          </div>
        </div>

        {/* ═══ SCENE 3: QUOTE → TEAM (285-420) ═══ */}
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", flexDirection: "column", alignItems: "center",
          justifyContent: "center",
          opacity: sceneVis(frame, 285, 420),
          padding: "80px 55px", gap: 28,
        }}>
          {/* Quote INTRODUCES the team */}
          <div style={{
            ...fadeUp(frame, 288, 14),
            fontSize: 38, color: C.gold, fontStyle: "italic",
            textAlign: "center", letterSpacing: 1,
            transform: `scale(${breathe(frame, 0.012, 0.015)})`,
          }}>
            "took so good care of me"
          </div>

          <div style={{
            ...fadeUp(frame, 300, 12),
            fontSize: 36, color: C.sub, letterSpacing: 4, textTransform: "uppercase",
          }}>This is the team</div>

          {/* Team — faster stagger, slide from right */}
          {[
            { name: "Dr. Manuel", role: "Lead Dentist", delay: 0 },
            { name: "Dra. Cristina", role: "Dentist", delay: 12 },
            { name: "Sandra", role: "Dental Assistant", delay: 24 },
          ].map((member, idx) => {
            const ms = 315 + member.delay;
            return (
              <div key={idx} style={{
                opacity: ease(frame, ms, 10, 0, 1),
                transform: `translateX(${ease(frame, ms, 12, 60, 0)}px)`,
                display: "flex", alignItems: "center", gap: 20,
                background: C.card, border: `1px solid ${C.dim}40`,
                borderRadius: 18, padding: "28px 36px", width: "100%",
              }}>
                <div style={{
                  width: 64, height: 64, borderRadius: "50%",
                  background: `linear-gradient(135deg, ${C.gold}20, ${C.gold}08)`,
                  border: `2px solid ${C.gold}30`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 30, color: C.gold,
                  transform: `scale(${breathe(frame, 0.015 + idx * 0.003, 0.03)})`,
                }}>{member.name.charAt(0)}</div>
                <div>
                  <div style={{ fontSize: 36, color: C.cream, fontWeight: 600 }}>{member.name}</div>
                  <div style={{ fontSize: 26, color: C.sub }}>{member.role}</div>
                </div>
                <div style={{
                  marginLeft: "auto", fontSize: 36,
                  transform: `scale(${breathe(frame, 0.02 + idx * 0.005, 0.06)})`,
                }}>⭐</div>
              </div>
            );
          })}
        </div>

        {/* ═══ SCENE 4: CTA (425-540) ═══ */}
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", flexDirection: "column", alignItems: "center",
          justifyContent: "center",
          opacity: sceneVis(frame, 425, 540, 12, 1),
          padding: "100px 60px", gap: 36,
        }}>
          <div style={{
            ...popIn(frame, 428, 16),
            fontSize: 70, color: C.cream, fontFamily: F.serif,
            textAlign: "center", lineHeight: 1.3,
          }}>
            Worth the{" "}
            <span style={{
              color: C.gold, fontStyle: "italic",
              textShadow: `0 0 ${20 + Math.sin(frame * 0.05) * 10}px ${C.goldGlow}`,
            }}>flight.</span>
          </div>

          <div style={{
            ...fadeUp(frame, 450, 14),
            width: ease(frame, 450, 18, 0, 700), height: 3,
            background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)`,
          }} />

          <div style={{
            ...popIn(frame, 458, 14),
            fontSize: 50, color: C.cream, fontWeight: 700,
            fontFamily: F.serif, letterSpacing: 1,
          }}>Harmonia Dental</div>

          <div style={{
            ...fadeUp(frame, 475, 12),
            fontSize: 32, color: C.sub,
          }}>El Masnou, Barcelona</div>

          <div style={{
            ...popIn(frame, 490, 14),
            background: `linear-gradient(135deg, ${C.gold}, #c49540)`,
            borderRadius: 60, padding: "22px 64px",
            fontSize: 36, color: C.bg, fontWeight: 700, letterSpacing: 1,
            transform: `scale(${breathe(frame, 0.02, 0.02)})`,
          }}>Book Your Visit</div>
        </div>
      </div>
    </div>
  );
};
