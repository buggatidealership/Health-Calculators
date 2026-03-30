import React from "react";
import { useCurrentFrame, interpolate, Easing, spring, useVideoConfig } from "remotion";

// ReviewGold V4 — V3 aesthetic + readability fix + creative elevation
// Key change: review text appears as readable block FIRST, then keywords
// get highlighted with underline animation AFTER. Kinetic for emphasis,
// not for initial reading. "Worth the" / "flight." on separate lines.
// Scene 2 extended for reading time. Plane horizontal.
// 18s = 540 frames @ 30fps | 1080x1920

const C = {
  bg: "#0a0e17",
  card: "#141a28",
  cream: "#F5F0EA",
  sub: "#8a94a8",
  dim: "#3a4558",
  gold: "#d4a853",
  goldBright: "#e8c06a",
  goldGlow: "#d4a85340",
  goldDeep: "#b8892e",
  norway: "#ba3c3c",
};
const F = {
  serif: "'DM Serif Display', Georgia, serif",
  sans: "'Inter', -apple-system, sans-serif",
  mono: "'JetBrains Mono', 'SF Mono', monospace",
};

const clamp = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };

function ease(frame: number, start: number, dur: number, from: number, to: number, fn = Easing.out(Easing.cubic)) {
  return interpolate(frame, [start, start + dur], [from, to], { ...clamp, easing: fn });
}

function springIn(frame: number, fps: number, start: number, config = { damping: 12, stiffness: 120, mass: 0.8 }) {
  return spring({ frame: Math.max(0, frame - start), fps, config });
}

function sceneVis(frame: number, start: number, end: number, fi = 14, fo = 14) {
  if (frame < start - 5 || frame > end + fo + 5) return 0;
  return Math.min(
    interpolate(frame, [start, start + fi], [0, 1], clamp),
    interpolate(frame, [end, end + Math.max(fo, 1)], [1, 0], clamp)
  );
}

function breathe(frame: number, speed = 0.02, range = 0.03) {
  return 1 + Math.sin(frame * speed * Math.PI * 2) * range;
}

// Letter-by-letter for SHORT phrases only (hook, CTA)
function KineticText({ text, frame, start, stagger = 2, fontSize = 42, color = C.cream, fontWeight = 400, fontFamily = F.sans, fps = 30 }: {
  text: string; frame: number; start: number; stagger?: number;
  fontSize?: number; color?: string; fontWeight?: number; fontFamily?: string; fps?: number;
}) {
  return (
    <span style={{ display: "inline", fontSize, color, fontWeight, fontFamily }}>
      {text.split("").map((char, i) => {
        const cs = start + i * stagger;
        const s = springIn(frame, fps, cs, { damping: 14, stiffness: 180, mass: 0.6 });
        const o = interpolate(frame, [cs, cs + 4], [0, 1], clamp);
        return (
          <span key={i} style={{
            display: "inline-block", opacity: o,
            transform: `translateY(${(1 - s) * 18}px) scale(${0.7 + s * 0.3})`,
            whiteSpace: char === " " ? "pre" : undefined,
          }}>{char}</span>
        );
      })}
    </span>
  );
}

function SpringWord({ children, frame, start, fps = 30, direction = "up" }: {
  children: React.ReactNode; frame: number; start: number; fps?: number; direction?: "up" | "left" | "right";
}) {
  const s = springIn(frame, fps, start, { damping: 11, stiffness: 140, mass: 0.7 });
  const o = interpolate(frame, [start, start + 6], [0, 1], clamp);
  const tx = direction === "left" ? (1 - s) * -40 : direction === "right" ? (1 - s) * 40 : 0;
  const ty = direction === "up" ? (1 - s) * 30 : 0;
  return (
    <span style={{ display: "inline-block", opacity: o, transform: `translate(${tx}px, ${ty}px)` }}>
      {children}
    </span>
  );
}

// Keyword highlight — underline draws in AFTER text is readable
function Highlight({ children, frame, start, dur = 16 }: {
  children: React.ReactNode; frame: number; start: number; dur?: number;
}) {
  const underlineWidth = ease(frame, start, dur, 0, 100, Easing.out(Easing.cubic));
  const glow = ease(frame, start, dur * 0.6, 0, 1);
  return (
    <span style={{
      position: "relative", display: "inline",
      color: C.gold, fontWeight: 700,
      textShadow: `0 0 ${glow * 12}px ${C.goldGlow}`,
    }}>
      {children}
      <span style={{
        position: "absolute", bottom: -2, left: 0,
        width: `${underlineWidth}%`, height: 2,
        background: `linear-gradient(90deg, ${C.gold}, ${C.goldBright})`,
        borderRadius: 1,
      }} />
    </span>
  );
}

function Particles({ frame, count = 22 }: { frame: number; count?: number }) {
  return (
    <>
      {Array.from({ length: count }, (_, i) => {
        const seed = i * 137.508;
        const x = (seed * 7.3) % 1080;
        const baseY = (seed * 3.1) % 1920;
        const speed = 0.2 + (i % 5) * 0.12;
        const y = (baseY + frame * speed) % 2100 - 100;
        const isGold = i % 4 === 0;
        const size = isGold ? 3 + Math.sin(frame * 0.05 + i) * 1.5 : 1.5 + (i % 3);
        const opacity = isGold ? 0.15 + Math.sin(frame * 0.04 + i * 2) * 0.1 : 0.06 + Math.sin(frame * 0.03 + i) * 0.03;
        const drift = Math.sin(frame * 0.012 + seed) * 25;
        return (
          <div key={i} style={{
            position: "absolute", left: x + drift, top: y,
            width: size, height: size, borderRadius: "50%",
            background: isGold ? C.goldBright : C.sub, opacity,
            boxShadow: isGold ? `0 0 ${4 + Math.sin(frame * 0.06 + i) * 3}px ${C.gold}60` : "none",
          }} />
        );
      })}
    </>
  );
}

function LightRays({ frame }: { frame: number }) {
  const rotation = frame * 0.08;
  const opacity = 0.04 + Math.sin(frame * 0.006) * 0.02;
  return (
    <div style={{
      position: "absolute", top: "-50%", left: "20%",
      width: "60%", height: "200%",
      background: `linear-gradient(${rotation}deg, transparent 40%, ${C.gold}08 50%, transparent 60%)`,
      opacity, pointerEvents: "none",
      transform: `rotate(${Math.sin(frame * 0.003) * 5}deg)`,
    }} />
  );
}

function Grain() {
  return (
    <div style={{
      position: "absolute", inset: 0, opacity: 0.12, pointerEvents: "none", zIndex: 100,
      background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
    }} />
  );
}

export const ReviewGold_V4: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const ambInt = interpolate(frame, [0, 80, 270, 400, 540], [0.05, 0.16, 0.08, 0.14, 0.06], clamp);
  const glowX = 50 + Math.sin(frame * 0.007) * 12;
  const glowY = 30 + Math.cos(frame * 0.005) * 10;

  const driftMag = interpolate(frame, [0, 115, 310, 440, 540], [1, 0.5, 1, 0.8, 1.2], clamp);
  const driftX = Math.sin(frame * 0.004) * 4 * driftMag;
  const driftY = Math.cos(frame * 0.006) * 3 * driftMag;
  const driftZoom = 1 + Math.sin(frame * 0.003) * 0.006;

  return (
    <div style={{
      width: 1080, height: 1920, background: C.bg,
      overflow: "hidden", position: "relative", fontFamily: F.sans,
    }}>
      <div style={{
        position: "absolute", inset: -12,
        transform: `translate(${driftX}px, ${driftY}px) scale(${driftZoom})`,
      }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: `
            radial-gradient(ellipse at ${glowX}% ${glowY}%, hsla(38,60%,45%,${ambInt}) 0%, transparent 50%),
            radial-gradient(ellipse at ${100 - glowX}% ${100 - glowY}%, hsla(38,40%,30%,${ambInt * 0.3}) 0%, transparent 40%)
          `,
        }} />

        <LightRays frame={frame} />
        <Particles frame={frame} />
        <Grain />

        {/* ═══ SCENE 1: HOOK (0-115) ═══ */}
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", flexDirection: "column", alignItems: "center",
          justifyContent: "center",
          opacity: sceneVis(frame, 0, 115, 8, 16),
          padding: "80px 50px",
        }}>
          {/* Emoji hook */}
          <div style={{
            fontSize: 80, marginBottom: 20,
            opacity: ease(frame, 0, 8, 0, 1),
            transform: `scale(${springIn(frame, fps, 0, { damping: 10, stiffness: 100, mass: 1 })})`,
          }}>
            <span style={{
              display: "inline-block",
              opacity: interpolate(frame, [0, 12, 14, 18], [1, 1, 0, 0], clamp),
            }}>😬</span>
            <span style={{
              display: "inline-block", position: "relative", left: -80,
              opacity: interpolate(frame, [14, 18], [0, 1], clamp),
              transform: `scale(${springIn(frame, fps, 14, { damping: 8, stiffness: 160, mass: 0.6 })})`,
            }}>✨</span>
          </div>

          {/* Main hook — kinetic for the short phrase */}
          <div style={{ textAlign: "center", marginBottom: 16 }}>
            <div style={{ fontSize: 74, fontFamily: F.serif, lineHeight: 1.3 }}>
              <SpringWord frame={frame} start={3} fps={fps}>"I'd rather </SpringWord>
              <KineticText text="fly from Norway" frame={frame} start={8} stagger={1.5}
                fontSize={74} color={C.gold} fontWeight={700} fontFamily={F.serif} fps={fps} />
              <SpringWord frame={frame} start={35} fps={fps}>"</SpringWord>
            </div>
          </div>

          <div style={{
            opacity: ease(frame, 22, 10, 0, 1),
            transform: `translateY(${(1 - springIn(frame, fps, 22)) * 25}px)`,
            fontSize: 40, color: C.sub, letterSpacing: 3,
            textTransform: "uppercase", textAlign: "center",
          }}>
            than see a dentist at home
          </div>

          {/* Plane — horizontal, arcing path */}
          {(() => {
            const p = interpolate(frame, [5, 110], [0, 1], clamp);
            const px = -80 + p * 1240;
            const py = 580 - Math.sin(p * Math.PI) * 60 + Math.sin(frame * 0.08) * 8;
            return (
              <>
                <div style={{
                  position: "absolute", left: px, top: py,
                  fontSize: 44, opacity: ease(frame, 8, 6, 0, 0.8),
                  transform: `scale(${breathe(frame, 0.03, 0.05)})`,
                  filter: `drop-shadow(0 0 8px ${C.gold}40)`,
                }}>✈️</div>
                <svg style={{ position: "absolute", top: 0, left: 0, width: 1080, height: 1920, pointerEvents: "none" }}>
                  <path
                    d={`M ${-80} ${580} Q ${540} ${520} ${1160} ${580}`}
                    fill="none" stroke={C.gold} strokeWidth={1}
                    strokeDasharray="6 8" strokeDashoffset={200 - frame * 2}
                    opacity={0.2 * ease(frame, 10, 8, 0, 1)}
                  />
                </svg>
              </>
            );
          })()}

          {/* Route badge */}
          <div style={{
            marginTop: 60,
            opacity: ease(frame, 40, 8, 0, 1),
            transform: `scale(${springIn(frame, fps, 40, { damping: 10, stiffness: 130, mass: 0.8 })}) translateY(${(1 - springIn(frame, fps, 40)) * 20}px)`,
            display: "flex", alignItems: "center", gap: 14,
            background: `${C.card}dd`, border: `1px solid ${C.gold}30`,
            borderRadius: 40, padding: "14px 32px",
          }}>
            <span style={{ fontSize: 26 }}>🇳🇴</span>
            <span style={{ fontSize: 26, color: C.sub, fontFamily: F.mono, letterSpacing: 1 }}>OSL</span>
            <div style={{ width: ease(frame, 45, 14, 0, 60), height: 1, background: `linear-gradient(90deg, ${C.sub}40, ${C.gold})` }} />
            <span style={{ fontSize: 20, color: C.gold }}>✈</span>
            <div style={{ width: ease(frame, 50, 14, 0, 60), height: 1, background: `linear-gradient(90deg, ${C.gold}, ${C.sub}40)` }} />
            <span style={{ fontSize: 26, color: C.gold, fontFamily: F.mono, letterSpacing: 1 }}>BCN</span>
            <span style={{ fontSize: 26 }}>🇪🇸</span>
          </div>
        </div>

        {/* ═══ SCENE 2: THE REVIEW (118-310) — EXTENDED FOR READING ═══ */}
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", flexDirection: "column", alignItems: "center",
          justifyContent: "center",
          opacity: sceneVis(frame, 118, 310, 16, 16),
          padding: "80px 48px", gap: 18,
        }}>
          {/* Stars */}
          <div style={{ display: "flex", gap: 12 }}>
            {[0,1,2,3,4].map(i => {
              const s = springIn(frame, fps, 122 + i * 5, { damping: 8, stiffness: 200, mass: 0.5 });
              return (
                <div key={i} style={{
                  fontSize: 46,
                  transform: `scale(${s * breathe(frame, 0.018 + i * 0.004, 0.05)}) rotate(${(1 - s) * 180}deg)`,
                  filter: `drop-shadow(0 0 ${6 + Math.sin(frame * 0.03 + i) * 4}px ${C.goldGlow})`,
                }}>⭐</div>
              );
            })}
          </div>

          {/* Google badge */}
          <div style={{
            opacity: ease(frame, 148, 10, 0, 1),
            transform: `translateX(${(1 - springIn(frame, fps, 148)) * -30}px)`,
            display: "flex", alignItems: "center", gap: 10,
            fontSize: 24, color: C.sub, fontWeight: 500,
            fontFamily: F.mono, letterSpacing: 1,
          }}>
            <span style={{ fontSize: 22 }}>G</span> GOOGLE REVIEW · VERIFIED
          </div>

          {/* Quote card — TEXT APPEARS AS BLOCK, keywords highlight AFTER */}
          <div style={{
            opacity: ease(frame, 155, 14, 0, 1),
            transform: `scale(${springIn(frame, fps, 155, { damping: 14, stiffness: 100, mass: 1 })}) scale(${breathe(frame, 0.006, 0.002)})`,
            background: `linear-gradient(135deg, ${C.card}, ${C.card}ee)`,
            border: `1px solid ${C.dim}40`,
            borderRadius: 22, padding: "40px 38px", width: "100%",
            position: "relative",
            boxShadow: `0 20px 60px rgba(0,0,0,0.3), inset 0 1px 0 ${C.dim}20`,
          }}>
            <div style={{
              position: "absolute", top: 6, left: 20,
              fontSize: 68, color: C.gold,
              opacity: 0.15 + Math.sin(frame * 0.025) * 0.08,
              fontFamily: F.serif, lineHeight: 1,
              transform: `scale(${breathe(frame, 0.01, 0.02)})`,
            }}>"</div>

            {/* Line 1 — appears as readable block at frame 162 */}
            <div style={{
              opacity: ease(frame, 162, 12, 0, 1),
              transform: `translateY(${ease(frame, 162, 14, 15, 0)}px)`,
              fontSize: 40, color: C.cream, lineHeight: 1.55,
            }}>
              Here is the{" "}
              <Highlight frame={frame} start={185} dur={18}>best dentist team</Highlight>
              {" "}I have had in my{" "}
              <Highlight frame={frame} start={195} dur={14}>37 years</Highlight>
              {" "}of life.
            </div>

            {/* Line 2 — appears at frame 210, keywords highlight after */}
            <div style={{
              opacity: ease(frame, 210, 12, 0, 1),
              transform: `translateY(${ease(frame, 210, 14, 15, 0)}px)`,
              fontSize: 40, color: C.cream, lineHeight: 1.55, marginTop: 18,
            }}>
              I now would rather{" "}
              <Highlight frame={frame} start={240} dur={18}>fly from Norway</Highlight>
              {" "}to this clinic than ever go to a dentist in Norway.
            </div>
          </div>

          {/* Reviewer */}
          <div style={{
            opacity: ease(frame, 275, 10, 0, 1),
            transform: `translateX(${(1 - springIn(frame, fps, 275)) * -50}px)`,
            display: "flex", alignItems: "center", gap: 14,
          }}>
            <div style={{
              width: 46, height: 46, borderRadius: "50%",
              background: `linear-gradient(135deg, ${C.gold}35, ${C.gold}10)`,
              border: `2px solid ${C.gold}50`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 22, color: C.gold, fontWeight: 600,
              transform: `scale(${breathe(frame, 0.02, 0.04)})`,
            }}>T</div>
            <div>
              <div style={{ fontSize: 28, color: C.cream, fontWeight: 600 }}>Taltunran</div>
              <div style={{ fontSize: 22, color: C.sub }}>🇳🇴 Norway</div>
            </div>
          </div>
        </div>

        {/* ═══ SCENE 3: QUOTE→TEAM (313-445) ═══ */}
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", flexDirection: "column", alignItems: "center",
          justifyContent: "center",
          opacity: sceneVis(frame, 313, 445, 16, 14),
          padding: "80px 50px", gap: 24,
        }}>
          {/* Quote introduces the team — kinetic (short phrase, ok here) */}
          <div style={{
            textAlign: "center",
            transform: `scale(${breathe(frame, 0.01, 0.012)})`,
          }}>
            <KineticText text={`"took so good care of me"`} frame={frame} start={317} stagger={1.5}
              fontSize={40} color={C.gold} fontWeight={400} fontFamily={F.serif} fps={fps} />
          </div>

          <div style={{
            opacity: ease(frame, 345, 10, 0, 1),
            transform: `translateY(${(1 - springIn(frame, fps, 345)) * 20}px)`,
            fontSize: 34, color: C.sub, letterSpacing: 4, textTransform: "uppercase",
            fontFamily: F.mono,
          }}>THIS IS THE TEAM</div>

          {/* Team cards */}
          {[
            { name: "Dr. Manuel", role: "Lead Dentist", delay: 0 },
            { name: "Dra. Cristina", role: "Dentist", delay: 10 },
            { name: "Sandra", role: "Dental Assistant", delay: 20 },
          ].map((member, idx) => {
            const ms = 358 + member.delay;
            const s = springIn(frame, fps, ms, { damping: 11, stiffness: 120, mass: 0.7 + idx * 0.1 });
            return (
              <div key={idx} style={{
                opacity: ease(frame, ms, 8, 0, 1),
                transform: `translateX(${(1 - s) * 80}px) scale(${0.9 + s * 0.1})`,
                display: "flex", alignItems: "center", gap: 18,
                background: `linear-gradient(135deg, ${C.card}, ${C.card}ee)`,
                border: `1px solid ${C.dim}30`,
                borderRadius: 16, padding: "26px 32px", width: "100%",
                boxShadow: `0 8px 24px rgba(0,0,0,0.2)`,
              }}>
                <div style={{
                  width: 60, height: 60, borderRadius: "50%",
                  background: `linear-gradient(135deg, ${C.gold}25, ${C.gold}08)`,
                  border: `2px solid ${C.gold}35`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 28, color: C.gold,
                  transform: `scale(${breathe(frame, 0.014 + idx * 0.004, 0.035)}) rotate(${(1 - s) * 30}deg)`,
                }}>{member.name.charAt(0)}</div>
                <div>
                  <div style={{ fontSize: 34, color: C.cream, fontWeight: 600 }}>{member.name}</div>
                  <div style={{ fontSize: 24, color: C.sub, marginTop: 2 }}>{member.role}</div>
                </div>
                <div style={{
                  marginLeft: "auto", fontSize: 32,
                  transform: `scale(${breathe(frame, 0.025 + idx * 0.006, 0.07)})`,
                  filter: `drop-shadow(0 0 4px ${C.goldGlow})`,
                }}>⭐</div>
              </div>
            );
          })}
        </div>

        {/* ═══ SCENE 4: CTA (448-540) ═══ */}
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", flexDirection: "column", alignItems: "center",
          justifyContent: "center",
          opacity: sceneVis(frame, 448, 540, 14, 1),
          padding: "100px 55px", gap: 32,
        }}>
          {/* "Worth the" on line 1, "flight." on line 2 — separate lines */}
          <div style={{ textAlign: "center" }}>
            <div style={{
              fontSize: 68, fontFamily: F.serif, color: C.cream, lineHeight: 1.2,
              opacity: ease(frame, 450, 10, 0, 1),
              transform: `translateY(${(1 - springIn(frame, fps, 450)) * 20}px)`,
            }}>
              Worth the
            </div>
            <div style={{ marginTop: 8 }}>
              <KineticText text="flight." frame={frame} start={460} stagger={2.5}
                fontSize={76} color={C.gold} fontWeight={700} fontFamily={F.serif} fps={fps} />
            </div>
          </div>

          <div style={{
            width: ease(frame, 478, 20, 0, 700, Easing.out(Easing.cubic)),
            height: 2,
            background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)`,
            opacity: ease(frame, 478, 10, 0, 1),
          }} />

          <div style={{
            opacity: ease(frame, 485, 8, 0, 1),
            transform: `scale(${springIn(frame, fps, 485, { damping: 10, stiffness: 150, mass: 0.7 })})`,
            fontSize: 48, color: C.cream, fontWeight: 700,
            fontFamily: F.serif, letterSpacing: 1,
          }}>Harmonia Dental</div>

          <div style={{
            opacity: ease(frame, 498, 10, 0, 1),
            transform: `translateY(${(1 - springIn(frame, fps, 498)) * 15}px)`,
            fontSize: 30, color: C.sub,
          }}>El Masnou, Barcelona</div>

          <div style={{
            opacity: ease(frame, 510, 8, 0, 1),
            transform: `scale(${springIn(frame, fps, 510, { damping: 9, stiffness: 160, mass: 0.6 }) * breathe(frame, 0.025, 0.025)})`,
            background: `linear-gradient(135deg, ${C.gold}, ${C.goldDeep})`,
            borderRadius: 60, padding: "22px 64px",
            fontSize: 34, color: C.bg, fontWeight: 700, letterSpacing: 1,
            boxShadow: `0 8px 30px ${C.gold}30, 0 2px 8px ${C.gold}20`,
          }}>Book Your Visit</div>
        </div>
      </div>
    </div>
  );
};
