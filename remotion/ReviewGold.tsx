import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

// Option A: "Gold Standard" — Premium cinematic. Gold accents, star reveals, team spotlight.
// Review: Taltunran (Norway) — "Best dentist team in 37 years"
// 18s = 540 frames @ 30fps

const C = {
  bg: "#0a0e17",
  card: "#141a28",
  text: "#F5F0EA",
  sub: "#8a94a8",
  dim: "#3a4558",
  gold: "#d4a853",
  goldGlow: "#d4a85340",
  cream: "#F5F0EA",
  norway: "#ba3c3c",
  white: "#ffffff",
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

function fadeUp(frame: number, start: number, dur = 16) {
  return {
    opacity: ease(frame, start, dur, 0, 1),
    transform: `translateY(${ease(frame, start, dur, 60, 0)}px)`,
  };
}

function sceneVis(frame: number, start: number, end: number, fadeIn = 14, fadeOut = 14) {
  if (frame < start - 5 || frame > end + fadeOut + 5) return 0;
  return Math.min(
    interpolate(frame, [start, start + fadeIn], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    interpolate(frame, [end, end + fadeOut], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
  );
}

function Grain() {
  return (
    <div style={{ position: "absolute", inset: 0, opacity: 0.2, pointerEvents: "none", zIndex: 100,
      background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
    }} />
  );
}

export const ReviewGold: React.FC = () => {
  const frame = useCurrentFrame();

  const ambInt = interpolate(frame, [0, 150, 350, 540], [0.04, 0.1, 0.08, 0.04], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  return (
    <div style={{
      width: 1080, height: 1920, background: C.bg,
      overflow: "hidden", position: "relative", fontFamily: F.sans,
    }}>
      {/* Warm ambient glow */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none",
        background: `radial-gradient(ellipse at 50% 25%, hsla(38,60%,45%,${ambInt}) 0%, transparent 55%)`,
      }} />
      <Grain />

      {/* ═══ SCENE 1: HOOK (0-135) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 0, 135),
        padding: "80px 60px",
        gap: 30,
      }}>
        {/* Norway flag pin */}
        <div style={{
          ...fadeUp(frame, 5, 18),
          fontSize: 120,
          filter: "drop-shadow(0 0 30px rgba(186,60,60,0.3))",
        }}>🇳🇴</div>

        {/* Distance line */}
        <div style={{
          ...fadeUp(frame, 20, 18),
          display: "flex", alignItems: "center", gap: 20,
          marginTop: 10,
        }}>
          <span style={{ fontSize: 38, color: C.sub }}>Oslo</span>
          <div style={{
            width: ease(frame, 25, 20, 0, 300),
            height: 2, background: `linear-gradient(90deg, ${C.sub}60, ${C.gold})`,
          }} />
          <span style={{ fontSize: 38, color: C.gold }}>✈</span>
          <div style={{
            width: ease(frame, 30, 20, 0, 300),
            height: 2, background: `linear-gradient(90deg, ${C.gold}, ${C.sub}60)`,
          }} />
          <span style={{ fontSize: 38, color: C.sub }}>BCN</span>
        </div>

        {/* Main hook text */}
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <div style={{
            ...fadeUp(frame, 45, 20),
            fontSize: 76, color: C.cream, fontFamily: F.serif, lineHeight: 1.2,
          }}>
            "I'd rather <span style={{ color: C.gold, fontStyle: "italic" }}>fly</span>
          </div>
          <div style={{
            ...fadeUp(frame, 60, 20),
            fontSize: 76, color: C.cream, fontFamily: F.serif, lineHeight: 1.2,
          }}>
            from Norway"
          </div>
        </div>

        <div style={{
          ...fadeUp(frame, 85, 16),
          fontSize: 40, color: C.sub, letterSpacing: 3,
          textTransform: "uppercase", marginTop: 20,
        }}>
          than see a dentist at home
        </div>
      </div>

      {/* ═══ SCENE 2: THE REVIEW (140-310) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 140, 310),
        padding: "100px 55px",
        gap: 24,
      }}>
        {/* Stars */}
        <div style={{ display: "flex", gap: 10 }}>
          {[0,1,2,3,4].map(i => {
            const s = ease(frame, 145 + i * 5, 10, 0, 1, Easing.out(Easing.back(2)));
            return (
              <div key={i} style={{
                fontSize: 52, transform: `scale(${s})`,
                filter: `drop-shadow(0 0 8px ${C.goldGlow})`,
              }}>⭐</div>
            );
          })}
        </div>

        {/* Google badge */}
        <div style={{
          ...fadeUp(frame, 170, 14),
          display: "flex", alignItems: "center", gap: 12,
          fontSize: 30, color: C.sub, fontWeight: 500,
        }}>
          <span style={{ fontSize: 28 }}>G</span> Google Review · Verified
        </div>

        {/* Quote card */}
        <div style={{
          ...fadeUp(frame, 180, 20),
          background: C.card,
          border: `1px solid ${C.dim}50`,
          borderRadius: 28,
          padding: "50px 48px",
          width: "100%",
          position: "relative",
        }}>
          {/* Opening quote */}
          <div style={{
            position: "absolute", top: 14, left: 30,
            fontSize: 80, color: C.gold, opacity: 0.25, fontFamily: F.serif, lineHeight: 1,
          }}>"</div>

          {/* Review text — progressive reveal */}
          <div style={{ fontSize: 44, color: C.cream, lineHeight: 1.55, fontFamily: F.sans }}>
            <span style={{ opacity: ease(frame, 185, 16, 0, 1) }}>
              Here is the{" "}
            </span>
            <span style={{
              opacity: ease(frame, 195, 16, 0, 1),
              color: C.gold, fontWeight: 700,
            }}>
              best dentist team
            </span>
            <span style={{ opacity: ease(frame, 205, 16, 0, 1) }}>
              {" "}I have had in my{" "}
            </span>
            <span style={{
              opacity: ease(frame, 215, 16, 0, 1),
              color: C.gold, fontWeight: 700,
            }}>
              37 years of life.
            </span>
          </div>

          <div style={{
            opacity: ease(frame, 235, 18, 0, 1),
            fontSize: 44, color: C.cream, lineHeight: 1.55, marginTop: 24,
          }}>
            I now would rather{" "}
            <span style={{ color: C.gold, fontWeight: 700 }}>fly from Norway</span>
            {" "}to this clinic than ever go to a dentist in Norway.
          </div>
        </div>

        {/* Reviewer */}
        <div style={{
          ...fadeUp(frame, 270, 16),
          display: "flex", alignItems: "center", gap: 16,
        }}>
          <div style={{
            width: 52, height: 52, borderRadius: "50%",
            background: `linear-gradient(135deg, ${C.gold}30, ${C.gold}10)`,
            border: `2px solid ${C.gold}40`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 26, color: C.gold, fontWeight: 600,
          }}>T</div>
          <div>
            <div style={{ fontSize: 34, color: C.cream, fontWeight: 600 }}>Taltunran</div>
            <div style={{ fontSize: 28, color: C.sub }}>🇳🇴 Norway</div>
          </div>
        </div>
      </div>

      {/* ═══ SCENE 3: THE TEAM (315-430) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 315, 430),
        padding: "100px 60px",
        gap: 36,
      }}>
        <div style={{
          ...fadeUp(frame, 318, 18),
          fontSize: 44, color: C.sub, letterSpacing: 4, textTransform: "uppercase",
        }}>The team</div>

        {/* Three team members */}
        {[
          { name: "Dr. Manuel", role: "Lead Dentist", delay: 0 },
          { name: "Dra. Cristina", role: "Dentist", delay: 18 },
          { name: "Sandra", role: "Dental Assistant", delay: 36 },
        ].map((member, idx) => (
          <div key={idx} style={{
            ...fadeUp(frame, 335 + member.delay, 18),
            display: "flex", alignItems: "center", gap: 24,
            background: C.card,
            border: `1px solid ${C.dim}40`,
            borderRadius: 20,
            padding: "32px 40px",
            width: "100%",
          }}>
            <div style={{
              width: 72, height: 72, borderRadius: "50%",
              background: `linear-gradient(135deg, ${C.gold}20, ${C.gold}08)`,
              border: `2px solid ${C.gold}30`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 34, color: C.gold,
            }}>{member.name.charAt(0)}</div>
            <div>
              <div style={{ fontSize: 40, color: C.cream, fontWeight: 600 }}>{member.name}</div>
              <div style={{ fontSize: 30, color: C.sub }}>{member.role}</div>
            </div>
            <div style={{ marginLeft: "auto", fontSize: 42 }}>⭐</div>
          </div>
        ))}

        <div style={{
          ...fadeUp(frame, 405, 14),
          fontSize: 34, color: C.dim, fontStyle: "italic", textAlign: "center",
        }}>
          "took so good care of me"
        </div>
      </div>

      {/* ═══ SCENE 4: CTA (435-540) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 435, 540),
        padding: "100px 60px",
        gap: 40,
      }}>
        <div style={{
          ...fadeUp(frame, 440, 20),
          fontSize: 72, color: C.cream, fontFamily: F.serif, textAlign: "center", lineHeight: 1.3,
        }}>
          Worth the{" "}
          <span style={{ color: C.gold, fontStyle: "italic" }}>flight.</span>
        </div>

        <div style={{
          ...fadeUp(frame, 465, 18),
          width: 700, height: 3,
          background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)`,
        }} />

        <div style={{
          ...fadeUp(frame, 475, 18),
          fontSize: 52, color: C.cream, fontWeight: 700,
          fontFamily: F.serif, letterSpacing: 1,
        }}>Harmonia Dental</div>

        <div style={{
          ...fadeUp(frame, 490, 16),
          fontSize: 34, color: C.sub,
        }}>El Masnou, Barcelona</div>

        <div style={{
          ...fadeUp(frame, 505, 18),
          background: `linear-gradient(135deg, ${C.gold}, #c49540)`,
          borderRadius: 60,
          padding: "24px 70px",
          fontSize: 38, color: C.bg, fontWeight: 700,
          letterSpacing: 1,
        }}>Book Your Visit</div>
      </div>
    </div>
  );
};
