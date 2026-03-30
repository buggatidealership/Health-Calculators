import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
// PET GROOMING — "BEFORE THEY TELL YOU"
// Imagen 4 hero: groomer examining a dog's ear with clinical precision
// Audience: pet owners who think grooming = cosmetic
// CONVERGENCE: The clinical image reframes grooming as preventive healthcare.
// Every text element serves this single reframe moment.

const C = {
  bg: "#0f1a1a",
  cream: "#faf7f2",
  accent: "#c67b4e",
  teal: "#2a8a8a",
  sage: "#7a9e7e",
  warmGray: "#b8a99a",
  alert: "#e85d5d",
};

const CATCHES = [
  { sign: "Ear infection starting", detail: "Redness + smell before pain shows", color: C.alert },
  { sign: "Skin lumps hidden by fur", detail: "Found during every full-body brush", color: C.accent },
  { sign: "Dental disease early signs", detail: "Gum color visible during face grooming", color: C.teal },
  { sign: "Parasite presence", detail: "Fleas, ticks found in undercoat", color: C.alert },
];

export const PetGroom_HealthCheck: React.FC = () => {
  const frame = useCurrentFrame();

  const fadeIn = (s: number, d = 12) => ({
    opacity: interpolate(frame, [s, s + d], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    transform: `translateY(${interpolate(frame, [s, s + d], [20, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })}px)`,
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

  const imgScale = interpolate(frame, [95, 230], [1, 1.06], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });

  return (
    <div style={{
      width: 1080, height: 1920,
      background: C.bg,
      overflow: "hidden", position: "relative",
      fontFamily: "'Inter', sans-serif",
    }}>

      {/* ═══ SCENE 1: HOOK (0–90) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(0, 88),
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        padding: "200px 60px 400px", zIndex: 2,
      }}>
        <div style={{ ...fadeIn(5), fontSize: 28, color: C.teal, fontWeight: 600, letterSpacing: 3, marginBottom: 30 }}>
          WHAT YOUR GROOMER SEES
        </div>
        <div style={{ ...slam(15), fontSize: 64, color: C.cream, fontWeight: 800, textAlign: "center", lineHeight: 1.2 }}>
          Your groomer found it
        </div>
        <div style={{ ...slam(35), fontSize: 64, color: C.alert, fontWeight: 800, textAlign: "center", lineHeight: 1.2, marginTop: 10, fontStyle: "italic" }}>
          before your vet did.
        </div>
        <div style={{ ...fadeIn(60), fontSize: 34, color: C.warmGray, marginTop: 30, textAlign: "center" }}>
          Here's what they check. Every time.
        </div>
      </div>

      {/* ═══ SCENE 2: IMAGE + OVERLAY (95–235) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(93, 233),
        zIndex: 2,
      }}>
        {/* Hero image — full bleed */}
        <Img
          src={staticFile("products/petgroom-healthcheck.png")}
          style={{
            position: "absolute",
            width: "100%", height: "100%",
            objectFit: "cover",
            transform: `scale(${imgScale})`,
          }}
        />

        {/* Dark overlay for text */}
        <div style={{
          position: "absolute", inset: 0,
          background: `linear-gradient(to top, rgba(15,26,26,0.95) 0%, rgba(15,26,26,0.4) 50%, rgba(15,26,26,0.2) 100%)`,
        }} />

        {/* Label */}
        <div style={{
          position: "absolute", top: 320, left: 60, right: 60,
          zIndex: 3,
        }}>
          <div style={{
            ...fadeIn(110),
            display: "inline-block",
            padding: "10px 24px",
            background: "rgba(42,138,138,0.3)",
            borderRadius: 8, border: `1px solid ${C.teal}40`,
          }}>
            <span style={{ fontSize: 24, color: C.teal, fontWeight: 700, letterSpacing: 2 }}>CLINICAL PRECISION</span>
          </div>
        </div>

        {/* Bottom text */}
        <div style={{
          position: "absolute", bottom: 200, left: 60, right: 60,
          zIndex: 3,
        }}>
          <div style={{ ...fadeIn(130), fontSize: 48, color: C.cream, fontWeight: 700, lineHeight: 1.3 }}>
            Every groom is a full-body health check.
          </div>
          <div style={{ ...fadeIn(160), fontSize: 30, color: "rgba(250,247,242,0.6)", marginTop: 16, lineHeight: 1.5 }}>
            Ears, skin, nails, teeth, coat condition — checked every visit.
          </div>
        </div>
      </div>

      {/* ═══ SCENE 3: WHAT THEY CATCH (240–410) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(238, 408),
        display: "flex", flexDirection: "column",
        padding: "180px 50px 300px", zIndex: 2,
      }}>
        <div style={{ ...fadeIn(243), fontSize: 28, color: C.teal, fontWeight: 600, letterSpacing: 3, marginBottom: 15 }}>
          CAUGHT EARLY
        </div>
        <div style={{ ...fadeIn(253), fontSize: 42, color: C.cream, fontWeight: 700, marginBottom: 40, lineHeight: 1.3 }}>
          Things your groomer catches before symptoms show:
        </div>

        {CATCHES.map((item, i) => {
          const start = 268 + i * 32;
          return (
            <div key={i} style={{
              ...fadeIn(start),
              marginBottom: 22, padding: "24px 28px",
              background: "rgba(255,255,255,0.04)",
              borderRadius: 14,
              borderLeft: `4px solid ${item.color}`,
            }}>
              <div style={{ fontSize: 36, color: C.cream, fontWeight: 700 }}>
                {item.sign}
              </div>
              <div style={{ fontSize: 28, color: C.warmGray, marginTop: 6 }}>
                {item.detail}
              </div>
            </div>
          );
        })}
      </div>

      {/* ═══ SCENE 4: CTA (415–540) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(413, 540),
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", padding: "300px 60px 500px",
        zIndex: 2, background: C.bg,
      }}>
        <div style={{ ...fadeIn(418), fontSize: 28, color: C.warmGray, fontWeight: 600, letterSpacing: 3 }}>
          GROOMING ISN'T COSMETIC
        </div>
        <div style={{ ...slam(430), fontSize: 56, color: C.cream, fontWeight: 800, textAlign: "center", marginTop: 15 }}>
          It's your first line
        </div>
        <div style={{ ...slam(445), fontSize: 56, color: C.teal, fontWeight: 800, textAlign: "center", fontStyle: "italic" }}>
          of defence.
        </div>
        <div style={{
          ...fadeIn(470), marginTop: 45, padding: "22px 60px",
          background: C.accent, borderRadius: 50,
          fontSize: 36, fontWeight: 700, color: "#fff",
        }}>
          Book a wellness groom
        </div>
        <div style={{ ...fadeIn(490), marginTop: 18, fontSize: 28, color: "rgba(255,255,255,0.4)" }}>
          YOUR SALON NAME
        </div>
      </div>
    </div>
  );
};
