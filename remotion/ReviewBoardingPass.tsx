import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

// Option B: "Boarding Pass" — Flight ticket metaphor.
// The review unfolds as a physical boarding pass / ticket stub.
// 18s = 540 frames @ 30fps

const C = {
  bg: "#f4f0e8",
  card: "#ffffff",
  text: "#1a1a2e",
  sub: "#6b7280",
  accent: "#c0392b",
  gold: "#b8860b",
  navy: "#1a1a2e",
  tear: "#e8e4dc",
  stamp: "#2d6a4f",
  blue: "#2563eb",
};
const F = {
  serif: "'DM Serif Display', Georgia, serif",
  sans: "'Inter', -apple-system, sans-serif",
  mono: "'JetBrains Mono', 'SF Mono', monospace",
};

function ease(frame: number, start: number, dur: number, from: number, to: number, fn = Easing.out(Easing.cubic)) {
  return interpolate(frame, [start, start + dur], [from, to], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: fn,
  });
}

function fadeUp(frame: number, start: number, dur = 16) {
  return {
    opacity: ease(frame, start, dur, 0, 1),
    transform: `translateY(${ease(frame, start, dur, 40, 0)}px)`,
  };
}

function sceneVis(frame: number, start: number, end: number, fadeIn = 14, fadeOut = 14) {
  if (frame < start - 5 || frame > end + fadeOut + 5) return 0;
  return Math.min(
    interpolate(frame, [start, start + fadeIn], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    interpolate(frame, [end, end + fadeOut], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
  );
}

// Dashed line
function DashedLine({ width = 800, color = "#d1d5db" }: { width?: number; color?: string }) {
  return (
    <div style={{ width, height: 0, borderTop: `3px dashed ${color}` }} />
  );
}

export const ReviewBoardingPass: React.FC = () => {
  const frame = useCurrentFrame();

  // Ticket slides up from bottom
  const ticketY = ease(frame, 0, 28, 400, 0, Easing.out(Easing.exp));
  const ticketOp = ease(frame, 0, 20, 0, 1);

  // Stamp rotation
  const stampRot = ease(frame, 280, 14, -25, -8, Easing.out(Easing.back(1.5)));
  const stampScale = ease(frame, 280, 12, 1.8, 1, Easing.out(Easing.back(2)));
  const stampOp = ease(frame, 280, 8, 0, 0.85);

  return (
    <div style={{
      width: 1080, height: 1920,
      background: C.bg,
      overflow: "hidden", position: "relative", fontFamily: F.sans,
    }}>
      {/* Subtle paper texture */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.08, pointerEvents: "none",
        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E")`,
      }} />

      {/* ═══ MAIN BOARDING PASS (0-540) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        padding: "60px 40px",
        transform: `translateY(${ticketY}px)`,
        opacity: ticketOp,
      }}>
        {/* TICKET CARD */}
        <div style={{
          background: C.card,
          borderRadius: 28,
          width: "100%",
          boxShadow: "0 20px 80px rgba(0,0,0,0.12), 0 4px 20px rgba(0,0,0,0.06)",
          overflow: "hidden",
          position: "relative",
        }}>
          {/* HEADER — airline style */}
          <div style={{
            background: C.navy,
            padding: "36px 48px",
            display: "flex", justifyContent: "space-between", alignItems: "center",
          }}>
            <div style={{
              fontSize: 28, color: "#ffffff80", fontFamily: F.mono,
              letterSpacing: 4, textTransform: "uppercase",
            }}>Boarding Pass</div>
            <div style={{
              fontSize: 28, color: "#ffffff50", fontFamily: F.mono,
            }}>⭐⭐⭐⭐⭐</div>
          </div>

          {/* ROUTE SECTION */}
          <div style={{
            padding: "50px 48px 30px",
            display: "flex", justifyContent: "space-between", alignItems: "flex-end",
          }}>
            {/* FROM */}
            <div style={{ textAlign: "left" }}>
              <div style={{
                ...fadeUp(frame, 30, 18),
                fontSize: 28, color: C.sub, fontFamily: F.mono, letterSpacing: 2,
              }}>FROM</div>
              <div style={{
                ...fadeUp(frame, 35, 18),
                fontSize: 80, color: C.navy, fontWeight: 800, fontFamily: F.sans,
                letterSpacing: -1,
              }}>OSL</div>
              <div style={{
                ...fadeUp(frame, 40, 16),
                fontSize: 30, color: C.sub,
              }}>Norway 🇳🇴</div>
            </div>

            {/* Plane path */}
            <div style={{
              display: "flex", flexDirection: "column", alignItems: "center",
              gap: 8, paddingBottom: 20,
            }}>
              <div style={{
                fontSize: 44,
                transform: `translateX(${ease(frame, 50, 30, -80, 80)}px)`,
              }}>✈</div>
              <div style={{
                width: ease(frame, 40, 30, 0, 240),
                height: 2, background: `linear-gradient(90deg, ${C.sub}40, ${C.navy})`,
              }} />
            </div>

            {/* TO */}
            <div style={{ textAlign: "right" }}>
              <div style={{
                ...fadeUp(frame, 45, 18),
                fontSize: 28, color: C.sub, fontFamily: F.mono, letterSpacing: 2,
              }}>TO</div>
              <div style={{
                ...fadeUp(frame, 50, 18),
                fontSize: 80, color: C.accent, fontWeight: 800, fontFamily: F.sans,
                letterSpacing: -1,
              }}>BCN</div>
              <div style={{
                ...fadeUp(frame, 55, 16),
                fontSize: 30, color: C.sub,
              }}>Spain 🇪🇸</div>
            </div>
          </div>

          <div style={{ padding: "0 48px" }}>
            <DashedLine />
          </div>

          {/* PASSENGER / REASON */}
          <div style={{
            padding: "30px 48px",
            display: "flex", justifyContent: "space-between",
          }}>
            <div>
              <div style={{
                ...fadeUp(frame, 80, 14),
                fontSize: 24, color: C.sub, fontFamily: F.mono, letterSpacing: 2,
              }}>PASSENGER</div>
              <div style={{
                ...fadeUp(frame, 85, 16),
                fontSize: 38, color: C.navy, fontWeight: 700,
              }}>Taltunran</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{
                ...fadeUp(frame, 90, 14),
                fontSize: 24, color: C.sub, fontFamily: F.mono, letterSpacing: 2,
              }}>REASON</div>
              <div style={{
                ...fadeUp(frame, 95, 16),
                fontSize: 38, color: C.accent, fontWeight: 700,
              }}>Dentist Visit</div>
            </div>
          </div>

          <div style={{ padding: "0 48px" }}>
            <DashedLine />
          </div>

          {/* THE REVIEW — tear-off stub */}
          <div style={{
            padding: "40px 48px 50px",
            background: `linear-gradient(180deg, ${C.card} 0%, ${C.tear} 100%)`,
            position: "relative",
          }}>
            <div style={{
              ...fadeUp(frame, 120, 14),
              fontSize: 24, color: C.sub, fontFamily: F.mono, letterSpacing: 2,
              marginBottom: 20,
            }}>REVIEW</div>

            <div style={{
              fontSize: 42, color: C.navy, lineHeight: 1.55,
            }}>
              <span style={{ opacity: ease(frame, 130, 18, 0, 1) }}>
                "Here is the{" "}
              </span>
              <span style={{
                opacity: ease(frame, 145, 18, 0, 1),
                fontWeight: 700, color: C.accent,
              }}>
                best dentist team
              </span>
              <span style={{ opacity: ease(frame, 160, 18, 0, 1) }}>
                {" "}I have had in my{" "}
              </span>
              <span style={{
                opacity: ease(frame, 175, 18, 0, 1),
                fontWeight: 700, color: C.accent,
              }}>
                37 years of life.
              </span>
            </div>

            <div style={{
              opacity: ease(frame, 200, 22, 0, 1),
              fontSize: 42, color: C.navy, lineHeight: 1.55, marginTop: 20,
            }}>
              I now would rather{" "}
              <span style={{ fontWeight: 700, color: C.accent }}>fly from Norway</span>
              {" "}to this clinic than ever go to a dentist in Norway.
            </div>

            {/* Stamp overlay */}
            <div style={{
              position: "absolute", right: 40, bottom: 60,
              transform: `rotate(${stampRot}deg) scale(${stampScale})`,
              opacity: stampOp,
              border: `5px solid ${C.stamp}`,
              borderRadius: 12,
              padding: "14px 24px",
              fontSize: 32, fontWeight: 800,
              color: C.stamp,
              fontFamily: F.mono,
              letterSpacing: 3,
            }}>VERIFIED ✓</div>
          </div>

          {/* TEAM STRIP */}
          <div style={{
            padding: "32px 48px 40px",
            background: C.navy,
            display: "flex", justifyContent: "space-around",
          }}>
            {[
              { name: "Dr. Manuel", emoji: "🦷" },
              { name: "Dra. Cristina", emoji: "🦷" },
              { name: "Sandra", emoji: "💫" },
            ].map((m, i) => (
              <div key={i} style={{
                ...fadeUp(frame, 310 + i * 14, 16),
                textAlign: "center",
              }}>
                <div style={{ fontSize: 36 }}>{m.emoji}</div>
                <div style={{ fontSize: 28, color: "#ffffffcc", fontWeight: 600, marginTop: 6 }}>{m.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM — clinic name */}
        <div style={{
          ...fadeUp(frame, 370, 20),
          textAlign: "center", marginTop: 50,
        }}>
          <div style={{
            fontSize: 56, color: C.navy, fontFamily: F.serif, fontWeight: 400,
          }}>Harmonia Dental</div>
          <div style={{
            fontSize: 32, color: C.sub, marginTop: 8,
          }}>El Masnou, Barcelona</div>
        </div>

        {/* CTA — Scene 4 timing */}
        <div style={{
          ...fadeUp(frame, 420, 20),
          marginTop: 40,
          background: C.accent,
          borderRadius: 60,
          padding: "22px 60px",
          fontSize: 36, color: "#ffffff", fontWeight: 700,
          letterSpacing: 1,
        }}>Worth the Flight →</div>
      </div>
    </div>
  );
};
