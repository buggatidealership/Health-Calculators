import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
// PET GROOMING — SEASONAL / EVENT READY
// "Your dog has a family photo in 3 days" — countdown urgency → package → photo reveal
// Audience: pet owners before holidays/events
// CONVERGENCE: The polaroid photo moment — countdown + package + social proof serve this

const C = {
  bg: "#1a1612",
  cream: "#faf7f2",
  accent: "#c67b4e",
  gold: "#d4a853",
  sage: "#7a9e7e",
  warmGray: "#b8a99a",
  red: "#d94f4f",
};

const SERVICES = [
  { name: "Full bath & condition", icon: "🛁" },
  { name: "Breed-specific cut", icon: "✂️" },
  { name: "Nail grind & paw balm", icon: "🐾" },
  { name: "Cologne & bandana", icon: "🎀" },
];

export const PetGroom_Seasonal: React.FC = () => {
  const frame = useCurrentFrame();

  const fadeIn = (s: number, d = 12) => ({
    opacity: interpolate(frame, [s, s + d], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    transform: `translateY(${interpolate(frame, [s, s + d], [24, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })}px)`,
  });

  const slam = (s: number, d = 6) => ({
    transform: `scale(${interpolate(frame, [s, s + d], [1.5, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })})`,
    opacity: interpolate(frame, [s, s + 3], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
  });

  const vis = (s: number, e: number) => {
    if (frame < s || frame > e + 10) return 0;
    return Math.min(
      interpolate(frame, [s, s + 8], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
      interpolate(frame, [e, e + 10], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
    );
  };

  // Countdown scale animation per number
  const countdownScale = (target: number) => {
    const starts: Record<number, number> = { 3: 15, 2: 45, 1: 70 };
    const s = starts[target] || 0;
    return interpolate(frame, [s, s + 5], [1.8, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });
  };

  return (
    <div style={{
      width: 1080, height: 1920,
      background: C.bg,
      overflow: "hidden", position: "relative",
      fontFamily: "'Inter', sans-serif",
    }}>

      {/* ═══ SCENE 1: COUNTDOWN HOOK (0–95) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(0, 93),
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        padding: "200px 60px 400px", zIndex: 2,
      }}>
        <div style={{ ...fadeIn(5), fontSize: 36, color: C.warmGray, fontWeight: 600, letterSpacing: 3, marginBottom: 30 }}>
          FAMILY PHOTOS IN
        </div>

        {/* Big countdown numbers */}
        {[3, 2, 1].map((n) => {
          const starts: Record<number, number> = { 3: 15, 2: 45, 1: 70 };
          const ends: Record<number, number> = { 3: 43, 2: 68, 1: 93 };
          const s = starts[n]; const e = ends[n];
          return (
            <div key={n} style={{
              position: "absolute",
              opacity: frame >= s && frame <= e ?
                Math.min(
                  interpolate(frame, [s, s + 3], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
                  interpolate(frame, [e - 3, e], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
                ) : 0,
              transform: `scale(${countdownScale(n)})`,
              fontSize: 200, fontWeight: 900, color: n === 1 ? C.red : C.gold,
              fontFamily: "'JetBrains Mono', monospace",
            }}>
              {n}
            </div>
          );
        })}

        <div style={{
          ...fadeIn(80), fontSize: 60, color: C.cream, fontWeight: 800,
          textAlign: "center", marginTop: 200,
        }}>
          days.
        </div>

        <div style={{
          ...fadeIn(86), fontSize: 36, color: C.warmGray, marginTop: 20,
          textAlign: "center", fontStyle: "italic",
        }}>
          You wouldn't show up ungroomed.
        </div>
      </div>

      {/* ═══ SCENE 2: THE PACKAGE (100–260) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(98, 258),
        display: "flex", flexDirection: "column",
        padding: "180px 60px 300px", zIndex: 2,
      }}>
        <div style={{ ...fadeIn(103), fontSize: 28, color: C.gold, fontWeight: 600, letterSpacing: 3, marginBottom: 20 }}>
          THE PHOTO-READY PACKAGE
        </div>
        <div style={{ ...fadeIn(115), fontSize: 42, color: C.cream, fontWeight: 700, marginBottom: 50, lineHeight: 1.3 }}>
          Everything they need to steal the shot.
        </div>

        {SERVICES.map((svc, i) => {
          const start = 130 + i * 30;
          return (
            <div key={i} style={{
              ...fadeIn(start),
              display: "flex", alignItems: "center", gap: 20,
              marginBottom: 28, padding: "24px 30px",
              background: "rgba(255,255,255,0.04)",
              borderRadius: 16, border: "1px solid rgba(255,255,255,0.06)",
            }}>
              <div style={{ fontSize: 44, flexShrink: 0 }}>{svc.icon}</div>
              <div style={{ flex: 1, fontSize: 38, color: C.cream, fontWeight: 600 }}>
                {svc.name}
              </div>
              <div style={{
                width: 12, height: 12, borderRadius: "50%",
                background: C.sage,
              }} />
            </div>
          );
        })}

        <div style={{
          ...fadeIn(250), marginTop: 20,
          fontSize: 32, color: C.warmGray, fontStyle: "italic", textAlign: "center",
        }}>
          90 minutes. One appointment.
        </div>
      </div>

      {/* ═══ SCENE 3: THE RESULT (265–400) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(263, 398),
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        padding: "200px 60px 400px", zIndex: 2,
        background: C.cream,
      }}>
        {/* Polaroid-style frame */}
        <div style={{
          ...fadeIn(270),
          background: "#fff",
          padding: "30px 30px 80px",
          borderRadius: 6,
          boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
          transform: `rotate(${interpolate(frame, [270, 290], [-3, 2], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })}deg)`,
        }}>
          <div style={{
            width: 600, height: 600,
            background: `linear-gradient(135deg, ${C.accent}30, ${C.sage}30, ${C.gold}30)`,
            borderRadius: 4,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 160,
          }}>
            🐩
          </div>
        </div>

        <div style={{ ...slam(310), fontSize: 56, color: C.bg, fontWeight: 800, textAlign: "center", marginTop: 40 }}>
          Photo-ready.
        </div>
        <div style={{ ...fadeIn(330), fontSize: 40, color: C.accent, fontWeight: 600, textAlign: "center", marginTop: 10, fontStyle: "italic" }}>
          Best-looking one in the family.
        </div>

        <div style={{
          ...fadeIn(355), marginTop: 30,
          fontSize: 30, color: C.warmGray, textAlign: "center",
        }}>
          "Everyone asked where we got her groomed."
        </div>
      </div>

      {/* ═══ SCENE 4: CTA (405–540) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(403, 540),
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", padding: "300px 60px 500px",
        zIndex: 2, background: C.bg,
      }}>
        <div style={{ ...fadeIn(408), fontSize: 28, color: C.warmGray, fontWeight: 600, letterSpacing: 3 }}>
          DON'T WAIT UNTIL THE DAY BEFORE
        </div>
        <div style={{ ...slam(420), fontSize: 60, color: C.cream, fontWeight: 800, textAlign: "center", marginTop: 20 }}>
          Book the photo-ready
        </div>
        <div style={{ ...slam(435), fontSize: 60, color: C.gold, fontWeight: 800, textAlign: "center", fontStyle: "italic" }}>
          package now.
        </div>
        <div style={{
          ...fadeIn(460), marginTop: 45, padding: "22px 60px",
          background: C.accent, borderRadius: 50,
          fontSize: 36, fontWeight: 700, color: "#fff",
        }}>
          Book now
        </div>
        <div style={{ ...fadeIn(480), marginTop: 18, fontSize: 28, color: "rgba(255,255,255,0.4)" }}>
          YOUR SALON NAME
        </div>
      </div>
    </div>
  );
};
