import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
// ABODIENT.AI — "THE REVIEWS"
// Imagen 4 hero: happy tenant in a well-maintained apartment doorway
// Audience: property managers who need social proof for AI management
// CONVERGENCE: "4.9 stars. Managed by AI." — every stacking review serves this
// single proof point that AI-managed properties get better tenant reviews.

const C = {
  dark: "#1A1A1A",
  coral: "#e8734a",
  cream: "#F5F0EA",
  dimText: "#6b7280",
  green: "#22c55e",
  gold: "#d4a853",
  star: "#fbbf24",
};

const REVIEWS = [
  { name: "Sarah M.", text: "Maintenance request fixed in 4 hours. On a Sunday.", stars: 5 },
  { name: "James K.", text: "Best-managed building I've lived in. Always responsive.", stars: 5 },
  { name: "Priya R.", text: "Reported a leak at midnight. Plumber was there by 8 AM.", stars: 5 },
];

export const Abodient_Reviews: React.FC = () => {
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

  // Image slow zoom
  const imgScale = interpolate(frame, [90, 230], [1, 1.06], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });

  // Star rating counter
  const starReveal = interpolate(frame, [370, 385], [0, 5], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <div style={{
      width: 1080, height: 1920,
      background: C.dark,
      overflow: "hidden", position: "relative",
      fontFamily: "'Inter', sans-serif",
    }}>

      {/* ═══ SCENE 1: IMAGE + HOOK (0–225) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(0, 223),
        zIndex: 2,
      }}>
        {/* Tenant image — full bleed */}
        <Img
          src={staticFile("products/abodient-reviews.png")}
          style={{
            position: "absolute",
            width: "100%", height: "100%",
            objectFit: "cover",
            transform: `scale(${imgScale})`,
          }}
        />

        {/* Bottom gradient */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          height: "55%",
          background: "linear-gradient(to top, rgba(26,26,26,0.95) 0%, rgba(26,26,26,0.5) 50%, transparent 100%)",
        }} />

        {/* Hook text over image */}
        <div style={{
          position: "absolute", bottom: 200, left: 60, right: 60,
          zIndex: 3,
        }}>
          <div style={{ ...fadeIn(15), fontSize: 28, color: C.coral, fontWeight: 600, letterSpacing: 3, marginBottom: 16 }}>
            REAL TENANT REVIEWS
          </div>
          <div style={{ ...slam(30), fontSize: 56, color: C.cream, fontWeight: 800, lineHeight: 1.2 }}>
            What tenants say
          </div>
          <div style={{ ...slam(50), fontSize: 56, color: C.cream, fontWeight: 800, lineHeight: 1.2, marginTop: 8 }}>
            about AI-managed
          </div>
          <div style={{ ...slam(70), fontSize: 56, color: C.coral, fontWeight: 800, lineHeight: 1.2, marginTop: 8, fontStyle: "italic" }}>
            properties.
          </div>
        </div>
      </div>

      {/* ═══ SCENE 2: STACKING REVIEWS (230–360) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(228, 358),
        display: "flex", flexDirection: "column",
        padding: "200px 50px 300px",
        justifyContent: "center",
        zIndex: 2,
      }}>
        {REVIEWS.map((review, i) => {
          const start = 238 + i * 38;
          return (
            <div key={i} style={{
              ...fadeIn(start),
              marginBottom: 24, padding: "28px 30px",
              background: "rgba(255,255,255,0.04)",
              borderRadius: 16, border: "1px solid rgba(255,255,255,0.06)",
            }}>
              {/* Stars */}
              <div style={{ display: "flex", gap: 4, marginBottom: 12 }}>
                {[0, 1, 2, 3, 4].map((s) => (
                  <div key={s} style={{ fontSize: 24, color: C.star }}>★</div>
                ))}
              </div>
              <div style={{ fontSize: 36, color: C.cream, fontWeight: 500, lineHeight: 1.4, fontStyle: "italic" }}>
                "{review.text}"
              </div>
              <div style={{ fontSize: 26, color: C.dimText, marginTop: 12, fontWeight: 600 }}>
                — {review.name}
              </div>
            </div>
          );
        })}
      </div>

      {/* ═══ SCENE 3: AGGREGATE RATING (365–430) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(363, 428),
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        padding: "200px 60px 400px", zIndex: 2,
      }}>
        {/* Big rating number */}
        <div style={{ ...slam(370), fontSize: 160, color: C.cream, fontWeight: 900, fontFamily: "'JetBrains Mono', monospace", lineHeight: 1 }}>
          4.9
        </div>

        {/* Stars */}
        <div style={{ ...fadeIn(380), display: "flex", gap: 8, marginTop: 20 }}>
          {[0, 1, 2, 3, 4].map((s) => (
            <div key={s} style={{
              fontSize: 44, color: s < Math.floor(starReveal) ? C.star : C.dimText,
              transition: "color 0.2s",
            }}>★</div>
          ))}
        </div>

        <div style={{ ...fadeIn(392), fontSize: 36, color: C.dimText, marginTop: 20, textAlign: "center" }}>
          Average across 340+ tenant reviews
        </div>

        <div style={{
          ...slam(405),
          marginTop: 30, padding: "16px 40px",
          background: "rgba(34,197,94,0.1)",
          borderRadius: 12, border: "1px solid rgba(34,197,94,0.25)",
        }}>
          <span style={{ fontSize: 34, color: C.green, fontWeight: 700 }}>
            Managed by AI. Rated by humans.
          </span>
        </div>
      </div>

      {/* ═══ SCENE 4: CTA (435–540) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(433, 540),
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", padding: "300px 60px 500px", zIndex: 2,
        background: C.dark,
      }}>
        <div style={{
          ...fadeIn(438),
          width: 80, height: 80, borderRadius: 20,
          background: C.coral, display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 40, color: "#fff", fontWeight: 900, marginBottom: 30,
        }}>
          A
        </div>
        <div style={{ ...slam(448), fontSize: 56, color: C.cream, fontWeight: 700, textAlign: "center" }}>
          abodient.ai
        </div>
        <div style={{ ...fadeIn(465), fontSize: 38, color: C.coral, fontWeight: 600, textAlign: "center", marginTop: 15, fontStyle: "italic" }}>
          Better managed. Better reviewed.
        </div>
        <div style={{
          ...fadeIn(485), marginTop: 40, padding: "22px 60px",
          background: C.coral, borderRadius: 50,
          fontSize: 36, fontWeight: 700, color: "#fff",
        }}>
          Try free for 1 month
        </div>
      </div>
    </div>
  );
};
