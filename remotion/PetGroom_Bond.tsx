import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
// PET GROOMING — "THE BOND"
// Imagen 4 hero: groomer cradling a golden retriever's face in pure trust
// Audience: pet owners who see their groomer as family
// CONVERGENCE: The image reveal — groomer's hands on the dog's face. Every word before it
// builds toward this single moment of trust made visible.

const C = {
  bg: "#1a1612",
  cream: "#faf7f2",
  accent: "#c67b4e",
  gold: "#d4a853",
  sage: "#7a9e7e",
  warmGray: "#b8a99a",
};

export const PetGroom_Bond: React.FC = () => {
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

  // Slow zoom on the hero image
  const imgScale = interpolate(frame, [100, 320], [1, 1.08], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });

  // Vignette darkens edges for text readability over image
  const vignetteOpacity = interpolate(frame, [100, 130], [0, 0.7], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <div style={{
      width: 1080, height: 1920,
      background: C.bg,
      overflow: "hidden", position: "relative",
      fontFamily: "'Inter', sans-serif",
    }}>

      {/* ═══ SCENE 1: HOOK — TEXT ONLY (0–95) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(0, 93),
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        padding: "200px 60px 400px", zIndex: 2,
      }}>
        <div style={{ ...slam(8), fontSize: 64, color: C.cream, fontWeight: 800, textAlign: "center", lineHeight: 1.2 }}>
          You hand them
        </div>
        <div style={{ ...slam(28), fontSize: 64, color: C.cream, fontWeight: 800, textAlign: "center", lineHeight: 1.2, marginTop: 10 }}>
          your whole world
        </div>
        <div style={{ ...slam(48), fontSize: 64, color: C.accent, fontWeight: 800, textAlign: "center", lineHeight: 1.2, marginTop: 10, fontStyle: "italic" }}>
          for 2 hours.
        </div>

        <div style={{
          ...fadeIn(68), marginTop: 40,
          fontSize: 36, color: C.warmGray, textAlign: "center", fontWeight: 500,
        }}>
          This is what those 2 hours look like.
        </div>
      </div>

      {/* ═══ SCENE 2: IMAGE REVEAL (100–310) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(98, 308),
        zIndex: 2,
      }}>
        {/* Hero image — full bleed */}
        <Img
          src={staticFile("products/petgroom-bond.png")}
          style={{
            position: "absolute",
            width: "100%", height: "100%",
            objectFit: "cover",
            transform: `scale(${imgScale})`,
          }}
        />

        {/* Bottom vignette for text */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          height: "60%",
          background: `linear-gradient(to top, rgba(26,22,18,0.95) 0%, rgba(26,22,18,0.6) 40%, transparent 100%)`,
          opacity: vignetteOpacity,
        }} />

        {/* Text overlay at bottom */}
        <div style={{
          position: "absolute", bottom: 180, left: 60, right: 60,
          zIndex: 3,
        }}>
          <div style={{ ...fadeIn(140), fontSize: 52, color: C.cream, fontWeight: 800, lineHeight: 1.25 }}>
            Not a transaction.
          </div>
          <div style={{ ...fadeIn(165), fontSize: 52, color: C.gold, fontWeight: 800, lineHeight: 1.25, fontStyle: "italic", marginTop: 8 }}>
            A relationship.
          </div>
          <div style={{
            ...fadeIn(200), marginTop: 24,
            fontSize: 32, color: "rgba(250,247,242,0.7)", lineHeight: 1.5,
          }}>
            Every groom starts with their name, their quirks, their favourite scratch spot.
          </div>
        </div>
      </div>

      {/* ═══ SCENE 3: EMOTIONAL PAYOFF (315–420) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(313, 418),
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        padding: "200px 60px 400px", zIndex: 2,
        background: C.cream,
      }}>
        <div style={{
          ...fadeIn(318),
          padding: "40px 50px",
          background: "#fff",
          borderRadius: 20,
          boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
          maxWidth: "90%",
        }}>
          <div style={{ fontSize: 48, color: C.bg, fontWeight: 500, lineHeight: 1.45, fontStyle: "italic" }}>
            "She ran to the groomer when we walked in. That's when I knew we found the right one."
          </div>
        </div>

        <div style={{
          ...fadeIn(365), marginTop: 30,
          fontSize: 30, color: C.warmGray, fontWeight: 600,
        }}>
          — every pet owner who gets it
        </div>
      </div>

      {/* ═══ SCENE 4: CTA (425–540) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(423, 540),
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", padding: "300px 60px 500px",
        zIndex: 2, background: C.bg,
      }}>
        <div style={{ ...slam(428), fontSize: 52, color: C.cream, fontWeight: 700, textAlign: "center" }}>
          FIND A GROOMER
        </div>
        <div style={{ ...fadeIn(445), fontSize: 52, color: C.gold, fontWeight: 700, textAlign: "center", fontStyle: "italic" }}>
          THEY'LL RUN TO.
        </div>
        <div style={{
          ...fadeIn(470), marginTop: 45, padding: "22px 60px",
          background: C.accent, borderRadius: 50,
          fontSize: 36, fontWeight: 700, color: "#fff",
        }}>
          Book a meet & greet
        </div>
        <div style={{ ...fadeIn(490), marginTop: 18, fontSize: 28, color: "rgba(255,255,255,0.4)" }}>
          YOUR SALON NAME
        </div>
      </div>
    </div>
  );
};
