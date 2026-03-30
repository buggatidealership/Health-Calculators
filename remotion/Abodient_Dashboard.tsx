import React from "react";
import { useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
// ABODIENT.AI — "THE DASHBOARD"
// Imagen 4 hero: premium SaaS dashboard showing 8 properties, all green
// Audience: property managers who want product visualization
// CONVERGENCE: The dashboard image — a beautiful UI showing "everything handled."
// Every text element before it builds the desire to see this screen on their own monitor.

const C = {
  dark: "#1A1A1A",
  coral: "#e8734a",
  cream: "#F5F0EA",
  dimText: "#6b7280",
  green: "#22c55e",
  blue: "#3b82f6",
};

const FEATURES = [
  { label: "All properties. One screen.", icon: "grid" },
  { label: "Real-time tenant status", icon: "pulse" },
  { label: "Auto-resolved issues greyed out", icon: "check" },
  { label: "Escalations: zero", icon: "shield" },
];

export const Abodient_Dashboard: React.FC = () => {
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

  // Slow zoom on dashboard image
  const imgScale = interpolate(frame, [100, 300], [1.05, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });

  return (
    <div style={{
      width: 1080, height: 1920,
      background: C.dark,
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
        <div style={{ ...fadeIn(5), fontSize: 28, color: C.dimText, fontWeight: 600, letterSpacing: 3, fontFamily: "'JetBrains Mono', monospace" }}>
          7:02 AM
        </div>
        <div style={{ ...slam(18), fontSize: 64, color: C.cream, fontWeight: 800, textAlign: "center", lineHeight: 1.2, marginTop: 20 }}>
          This is what
        </div>
        <div style={{ ...slam(35), fontSize: 64, color: C.cream, fontWeight: 800, textAlign: "center", lineHeight: 1.2, marginTop: 8 }}>
          8 properties
        </div>
        <div style={{ ...slam(50), fontSize: 64, color: C.green, fontWeight: 800, textAlign: "center", lineHeight: 1.2, marginTop: 8, fontStyle: "italic" }}>
          looks like.
        </div>
        <div style={{ ...fadeIn(70), fontSize: 34, color: C.dimText, marginTop: 30, textAlign: "center" }}>
          When everything is handled.
        </div>
      </div>

      {/* ═══ SCENE 2: DASHBOARD IMAGE (95–300) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(93, 298),
        zIndex: 2,
      }}>
        {/* Dashboard image */}
        <Img
          src={staticFile("products/abodient-dashboard.png")}
          style={{
            position: "absolute",
            width: "100%", height: "100%",
            objectFit: "cover",
            transform: `scale(${imgScale})`,
          }}
        />

        {/* Top + bottom gradients for text */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0,
          height: "35%",
          background: "linear-gradient(to bottom, rgba(26,26,26,0.9) 0%, transparent 100%)",
        }} />
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          height: "40%",
          background: "linear-gradient(to top, rgba(26,26,26,0.95) 0%, transparent 100%)",
        }} />

        {/* Top label */}
        <div style={{
          position: "absolute", top: 320, left: 60, zIndex: 3,
        }}>
          <div style={{
            ...fadeIn(110),
            display: "inline-block",
            padding: "10px 24px",
            background: "rgba(34,197,94,0.15)",
            borderRadius: 8, border: "1px solid rgba(34,197,94,0.3)",
          }}>
            <span style={{ fontSize: 24, color: C.green, fontWeight: 700, letterSpacing: 2 }}>ALL GREEN</span>
          </div>
        </div>

        {/* Bottom text */}
        <div style={{
          position: "absolute", bottom: 200, left: 60, right: 60, zIndex: 3,
        }}>
          <div style={{ ...fadeIn(150), fontSize: 48, color: C.cream, fontWeight: 700, lineHeight: 1.3 }}>
            Every property. Every tenant. One glance.
          </div>
        </div>
      </div>

      {/* ═══ SCENE 3: FEATURE CALLOUTS (305–420) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(303, 418),
        display: "flex", flexDirection: "column",
        padding: "200px 50px 300px",
        justifyContent: "center",
        zIndex: 2,
      }}>
        {FEATURES.map((feat, i) => {
          const start = 310 + i * 25;
          return (
            <div key={i} style={{
              ...fadeIn(start),
              display: "flex", alignItems: "center", gap: 20,
              marginBottom: 28, padding: "26px 30px",
              background: "rgba(255,255,255,0.04)",
              borderRadius: 16, border: "1px solid rgba(255,255,255,0.06)",
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: i === 3 ? "rgba(34,197,94,0.15)" : "rgba(232,115,74,0.12)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <div style={{
                  width: 12, height: 12, borderRadius: "50%",
                  background: i === 3 ? C.green : C.coral,
                }} />
              </div>
              <div style={{ fontSize: 38, color: C.cream, fontWeight: 600 }}>
                {feat.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* ═══ SCENE 4: CTA (425–540) ═══ */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: vis(423, 540),
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", padding: "300px 60px 500px", zIndex: 2,
        background: C.dark,
      }}>
        <div style={{
          ...fadeIn(428),
          width: 80, height: 80, borderRadius: 20,
          background: C.coral, display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 40, color: "#fff", fontWeight: 900, marginBottom: 30,
        }}>
          A
        </div>
        <div style={{ ...slam(438), fontSize: 56, color: C.cream, fontWeight: 700, textAlign: "center" }}>
          abodient.ai
        </div>
        <div style={{ ...fadeIn(455), fontSize: 38, color: C.coral, fontWeight: 600, textAlign: "center", marginTop: 15, fontStyle: "italic" }}>
          See your portfolio. Not your problems.
        </div>
        <div style={{
          ...fadeIn(475), marginTop: 40, padding: "22px 60px",
          background: C.coral, borderRadius: 50,
          fontSize: 36, fontWeight: 700, color: "#fff",
        }}>
          Try free for 1 month
        </div>
      </div>
    </div>
  );
};
