import React from "react";

const C = {
  bg: "#0a0f1a",
  text: "#E0E0E0",
  dim: "#8a919e",
  accent: "#e89b3e",
  green: "#6ec89b",
  red: "#e8785e",
};

const F = {
  serif: "'DM Serif Display', Georgia, serif",
  sans: "'Inter', -apple-system, sans-serif",
};

export const CortisolOG: React.FC = () => {
  return (
    <div
      style={{
        width: 1200,
        height: 628,
        background: C.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        fontFamily: F.sans,
      }}
    >
      {/* Vignette */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)", pointerEvents: "none" }} />

      {/* Green dot */}
      <div style={{ width: 14, height: 14, borderRadius: "50%", background: C.green, boxShadow: `0 0 20px rgba(110,200,155,0.4)`, marginBottom: 28 }} />

      {/* Title */}
      <div style={{ fontFamily: F.serif, fontSize: 52, color: C.text, textAlign: "center", lineHeight: 1.2, marginBottom: 16 }}>
        Cortisol Stress Assessment
      </div>

      {/* Subtitle */}
      <div style={{ fontFamily: F.sans, fontSize: 22, color: C.dim, textAlign: "center", lineHeight: 1.4, maxWidth: 700 }}>
        Your cortisol rhythm. What it actually means in context.
      </div>

      {/* Mini score preview */}
      <div style={{ display: "flex", gap: 40, marginTop: 36, alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <div style={{ fontFamily: F.sans, fontSize: 13, color: C.dim, textTransform: "uppercase" as const, letterSpacing: "0.1em", fontWeight: 600 }}>Your score</div>
          <div style={{ fontFamily: F.serif, fontSize: 56, color: C.red, lineHeight: 1 }}>67</div>
          <div style={{ fontFamily: F.sans, fontSize: 14, color: C.dim }}>out of 100</div>
        </div>
        <div style={{ width: 1, height: 60, background: "rgba(255,255,255,0.06)" }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            { label: "Perception", color: C.accent, width: 71 },
            { label: "Lifestyle", color: "#0e7a7e", width: 55 },
            { label: "Symptoms", color: C.red, width: 80 },
          ].map(bar => (
            <div key={bar.label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ fontFamily: F.sans, fontSize: 12, color: C.dim, width: 80, textAlign: "right", fontWeight: 500 }}>{bar.label}</div>
              <div style={{ width: 200, height: 6, background: "rgba(255,255,255,0.06)", borderRadius: 3, overflow: "hidden" }}>
                <div style={{ width: `${bar.width}%`, height: "100%", background: bar.color, borderRadius: 3 }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ position: "absolute", bottom: 24, fontFamily: F.sans, fontSize: 15, color: "rgba(255,255,255,0.25)", letterSpacing: "0.04em", fontWeight: 500 }}>
        healthcalculators.xyz · Free · Evidence-based · 2 minutes
      </div>
    </div>
  );
};
