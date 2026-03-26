import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
// Instagram Reel: 1080x1920 vertical. Hook → reviews → CTA
// Trend: "People fly from other countries for this dentist"
// Brand: Harmonia Dental, Masnou (warm, premium, trustworthy)

const C = {
  bg: "#0f1419",
  card: "#1a1f2e",
  text: "#F5F0EA",
  sub: "#a0a8b8",
  dim: "#4a5568",
  gold: "#d4a853",
  accent: "#e8b04a",
  cream: "#F5F0EA",
  teal: "#2dd4bf",
  white: "#ffffff",
};
const F = {
  serif: "'DM Serif Display', Georgia, serif",
  sans: "'Inter', -apple-system, sans-serif",
  mono: "'JetBrains Mono', 'SF Mono', monospace",
};

function fadeUp(frame: number, start: number, dur = 16) {
  return {
    opacity: interpolate(frame, [start, start + dur], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    transform: `translateY(${interpolate(frame, [start, start + dur], [50, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })}px)`,
  };
}

function sceneVis(frame: number, start: number, end: number) {
  if (frame < start - 5 || frame > end + 15) return 0;
  return Math.min(
    interpolate(frame, [start, start + 14], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    interpolate(frame, [end - 10, end + 14], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
  );
}

// Star component
function Stars({ count, frame, start, size = 50 }: { count: number; frame: number; start: number; size?: number }) {
  return (
    <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
      {Array.from({ length: count }).map((_, i) => {
        const starDelay = start + i * 4;
        const scale = interpolate(frame, [starDelay, starDelay + 8], [0, 1], {
          extrapolateLeft: "clamp", extrapolateRight: "clamp",
          easing: Easing.out(Easing.back(2)),
        });
        return (
          <div key={i} style={{
            fontSize: size, transform: `scale(${scale})`,
            filter: `drop-shadow(0 0 ${6}px ${C.gold}60)`,
          }}>⭐</div>
        );
      })}
    </div>
  );
}

// Review card component
function ReviewCard({ name, text, frame, start, flag }: {
  name: string; text: string; frame: number; start: number; flag?: string;
}) {
  return (
    <div style={{
      ...fadeUp(frame, start, 18),
      background: C.card,
      border: `1px solid ${C.dim}40`,
      borderRadius: 24,
      padding: "40px 44px",
      width: "100%",
      position: "relative",
    }}>
      {/* Quote mark */}
      <div style={{
        position: "absolute", top: 16, left: 28,
        fontSize: 60, color: C.gold, opacity: 0.3, fontFamily: F.serif, lineHeight: 1,
      }}>"</div>
      <div style={{
        fontSize: 42, color: C.cream, lineHeight: 1.5,
        fontFamily: F.sans, fontWeight: 400, fontStyle: "italic",
        marginBottom: 20,
      }}>
        {text}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div style={{
          width: 44, height: 44, borderRadius: "50%",
          background: `${C.gold}20`, border: `2px solid ${C.gold}40`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 22, color: C.gold,
        }}>
          {name.charAt(0)}
        </div>
        <div>
          <div style={{ fontSize: 34, color: C.cream, fontWeight: 600 }}>{name}</div>
          {flag && <div style={{ fontSize: 28, color: C.sub }}>{flag}</div>}
        </div>
        <div style={{ marginLeft: "auto", display: "flex", gap: 4 }}>
          {[1,2,3,4,5].map(i => (
            <span key={i} style={{ fontSize: 24, filter: `drop-shadow(0 0 3px ${C.gold}40)` }}>⭐</span>
          ))}
        </div>
      </div>
    </div>
  );
}

// 20s = 600 frames at 30fps (Instagram Reels sweet spot: 15-30s)
export const DentalReel1: React.FC = () => {
  const frame = useCurrentFrame();

  // Warm ambient glow
  const ambInt = interpolate(frame, [0, 100, 300, 500, 600], [0.06, 0.1, 0.08, 0.1, 0.06], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  return (
    <div style={{
      width: 1080, height: 1920, background: C.bg,
      overflow: "hidden", position: "relative", fontFamily: F.sans,
    }}>
      {/* Warm ambient */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none",
        background: `radial-gradient(ellipse at 50% 30%, hsla(38,60%,45%,${ambInt}) 0%, transparent 60%)`,
      }} />
      {/* Grain */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.25, pointerEvents: "none", zIndex: 100,
        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
      }} />

      {/* ═══ SCENE 1: HOOK — airplane character (0-150) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "space-between",
        opacity: sceneVis(frame, 0, 150),
        padding: "80px 50px 100px",
      }}>
        {/* Character fills top portion */}
        <div style={{ ...fadeUp(frame, 0, 22), flex: 1, display: "flex", alignItems: "center" }}>
          <Img src={staticFile("characters/dental-hook.png")} style={{
            width: 900, height: 900, objectFit: "contain",
            borderRadius: 30,
            filter: "drop-shadow(0 0 40px rgba(212,168,83,0.15))",
          }} />
        </div>
        {/* Hook text — BIG, fills width */}
        <div style={{ textAlign: "center", padding: "0 10px" }}>
          <div style={{
            ...fadeUp(frame, 40, 18),
            fontSize: 72, color: C.cream, fontFamily: F.serif, lineHeight: 1.25,
          }}>
            People <span style={{ color: C.gold, fontStyle: "italic" }}>fly from Norway</span>
          </div>
          <div style={{
            ...fadeUp(frame, 55, 18),
            fontSize: 72, color: C.cream, fontFamily: F.serif, lineHeight: 1.25,
          }}>
            to visit this dentist.
          </div>
          <div style={{
            ...fadeUp(frame, 80, 16),
            fontSize: 40, color: C.sub, marginTop: 16,
          }}>
            Here's what they say ↓
          </div>
        </div>
      </div>

      {/* ═══ SCENE 2: Review 1 — Norway (155-270) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 155, 270),
        padding: "80px 50px",
        gap: 30,
      }}>
        <Stars count={5} frame={frame} start={160} size={56} />
        <ReviewCard
          name="Taltunran"
          text="Here is the best dentist team I have had in my 37 years of life. I would rather fly from Norway to this clinic than ever go to a dentist in Norway."
          frame={frame} start={170}
          flag="📍 Norway"
        />
        <div style={{
          ...fadeUp(frame, 210, 14),
          fontSize: 36, color: C.dim, fontStyle: "italic",
        }}>
          Google Review · Verified
        </div>
      </div>

      {/* ═══ SCENE 3: Review 2 — Mallorca (275-390) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 275, 390),
        padding: "80px 50px",
        gap: 30,
      }}>
        <Stars count={5} frame={frame} start={280} size={56} />
        <ReviewCard
          name="Andreu Burguera"
          text="I'm giving 5 stars because there's no 6 or 7. Absolutely excellent! I'm coming from Mallorca, and that says it all. I'm debuting a new smile today!"
          frame={frame} start={290}
          flag="📍 Mallorca"
        />
        <div style={{
          ...fadeUp(frame, 330, 14),
          fontSize: 36, color: C.dim, fontStyle: "italic",
        }}>
          Google Review · Verified
        </div>
      </div>

      {/* ═══ SCENE 4: Review 3 — Life changed (395-500) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 395, 500),
        padding: "80px 50px",
        gap: 30,
      }}>
        <Stars count={5} frame={frame} start={400} size={56} />
        <ReviewCard
          name="CS Perruqueria"
          text="It's changed my life. I can eat and, above all, smile without fear. Many thanks to the entire Harmonia team."
          frame={frame} start={410}
        />
        <div style={{
          ...fadeUp(frame, 450, 14),
          fontSize: 36, color: C.dim, fontStyle: "italic",
        }}>
          Google Review · Verified
        </div>
      </div>

      {/* ═══ SCENE 5: CTA — smile character + action (505-600) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center",
        opacity: sceneVis(frame, 505, 600),
        padding: "80px 50px",
        gap: 20,
      }}>
        <Img src={staticFile("characters/dental-smile.png")} style={{
          ...fadeUp(frame, 508, 20),
          width: 500, height: 500, objectFit: "contain",
          filter: "drop-shadow(0 0 30px rgba(212,168,83,0.12))",
        }} />
        <div style={{
          ...fadeUp(frame, 530, 20),
          fontSize: 68, color: C.cream, fontFamily: F.serif,
          textAlign: "center", lineHeight: 1.3,
        }}>
          Maybe it's time
        </div>
        <div style={{
          ...fadeUp(frame, 545, 20),
          fontSize: 72, color: C.gold, fontFamily: F.serif,
          fontStyle: "italic", textAlign: "center", lineHeight: 1.3,
        }}>
          you found out why.
        </div>
        <div style={{
          ...fadeUp(frame, 570, 16),
          marginTop: 20, padding: "20px 50px",
          background: `linear-gradient(135deg, ${C.gold}, ${C.accent})`,
          borderRadius: 60, fontSize: 40, fontWeight: 700,
          color: C.bg, letterSpacing: 1,
        }}>
          HARMONIA DENTAL · MASNOU
        </div>
        <div style={{
          ...fadeUp(frame, 582, 14),
          fontSize: 34, color: C.sub, marginTop: 8,
        }}>
          #1 rated clinic in Maresme ⭐
        </div>
      </div>
    </div>
  );
};
