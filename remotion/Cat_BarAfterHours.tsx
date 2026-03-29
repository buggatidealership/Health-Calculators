import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
// CATALOG — RESTAURANT/BAR: AFTER HOURS
// Documentary cinematic — empty restaurant at closing time
// Analog grain, muted colors, ambient sound, melancholy beauty
// No music. No face. Just atmosphere.

export const Cat_BarAfterHours: React.FC = () => {
  const frame = useCurrentFrame();

  // Very slow pan
  const panX = interpolate(frame, [0, 450], [0, -30], { extrapolateRight: "clamp" });

  // Film grain noise — subtle
  const grainSeed = Math.floor(frame / 2);

  const sceneVis = (start: number, end: number, fi = 30, fo = 25) => ({
    opacity: Math.min(
      interpolate(frame, [start, start + fi], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
      interpolate(frame, [end, end + fo], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
    ),
  });

  // Flickering light
  const flicker = 0.85 + 0.15 * Math.sin(frame * 0.3) * Math.sin(frame * 0.7);

  return (
    <div style={{
      width: 1080, height: 1920,
      background: "#0d0b09",
      overflow: "hidden", position: "relative",
      fontFamily: "'DM Serif Display', Georgia, serif",
    }}>

      {/* Film grain overlay */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 20, pointerEvents: "none",
        opacity: 0.06,
        backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><filter id="g"><feTurbulence baseFrequency="0.9" seed="${grainSeed}"/></filter><rect width="200" height="200" filter="url(#g)" opacity="0.5"/></svg>`)}")`,
        backgroundSize: "200px 200px",
      }} />

      {/* Warm color wash */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, rgba(40,25,15,0.3) 0%, rgba(20,12,8,0.6) 100%)",
      }} />

      {/* Scene: Empty restaurant interior — abstract shapes */}
      <div style={{
        position: "absolute", inset: 0,
        transform: `translateX(${panX}px)`,
      }}>
        {/* Bar counter */}
        <div style={{
          position: "absolute", left: -20, right: -20, top: 900, height: 8,
          background: "linear-gradient(90deg, transparent, rgba(120,80,40,0.3), rgba(120,80,40,0.2), transparent)",
        }} />

        {/* Bar stools — abstracted as thin vertical lines */}
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={`stool-${i}`} style={{
            position: "absolute",
            left: 120 + i * 200,
            top: 910, width: 3, height: 200,
            background: `rgba(100,70,40,${0.15 + i * 0.03})`,
            borderRadius: 1,
            opacity: interpolate(frame, [20 + i * 15, 40 + i * 15], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
          }} />
        ))}

        {/* Pendant lights */}
        {[0, 1, 2].map((i) => (
          <React.Fragment key={`light-${i}`}>
            {/* Wire */}
            <div style={{
              position: "absolute",
              left: 200 + i * 300,
              top: 0, width: 1, height: 350,
              background: "rgba(255,255,255,0.04)",
            }} />
            {/* Bulb glow */}
            <div style={{
              position: "absolute",
              left: 200 + i * 300 - 60,
              top: 340, width: 120, height: 120,
              borderRadius: "50%",
              background: `radial-gradient(circle, rgba(255,180,80,${0.08 * flicker}), transparent 70%)`,
            }} />
          </React.Fragment>
        ))}

        {/* Bottles on back bar — thin rectangles */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div key={`bottle-${i}`} style={{
            position: "absolute",
            left: 100 + i * 110,
            top: 500 - (i % 3) * 30,
            width: 24 + (i % 2) * 8,
            height: 120 + (i % 3) * 40,
            background: `rgba(${60 + i * 15},${40 + i * 10},${20 + i * 5},0.2)`,
            borderRadius: "4px 4px 2px 2px",
            opacity: interpolate(frame, [30 + i * 8, 50 + i * 8], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
          }} />
        ))}

        {/* Glass on counter — single */}
        <div style={{
          position: "absolute", left: 480, top: 830,
          width: 50, height: 70,
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "2px 2px 4px 4px",
          background: "rgba(255,255,255,0.02)",
          opacity: interpolate(frame, [80, 110], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
        }}>
          {/* Remaining liquid */}
          <div style={{
            position: "absolute", bottom: 2, left: 2, right: 2, height: 15,
            background: "rgba(180,120,50,0.3)",
            borderRadius: "0 0 3px 3px",
          }} />
        </div>
      </div>

      {/* Bottom gradient */}
      <div style={{
        position: "absolute", left: 0, right: 0, bottom: 0, height: 700,
        background: "linear-gradient(0deg, rgba(13,11,9,0.95) 0%, rgba(13,11,9,0.5) 50%, transparent 100%)",
      }} />

      {/* Time stamp — documentary style */}
      <div style={{
        position: "absolute", left: 60, top: 320,
        ...sceneVis(5, 100, 25, 30),
      }}>
        <div style={{
          fontSize: 90, color: "rgba(255,200,120,0.15)",
          fontWeight: 400, fontFamily: "'Inter', sans-serif",
          letterSpacing: -2,
        }}>
          11:47 PM
        </div>
      </div>

      {/* Text — appears very late */}
      <div style={{
        position: "absolute", left: 60, right: 150, bottom: 530,
        ...sceneVis(200, 340, 35, 25),
      }}>
        <div style={{
          fontSize: 50, color: "rgba(255,200,120,0.45)",
          fontWeight: 400, lineHeight: 1.6,
          fontStyle: "italic",
        }}>
          Last orders, gone.
        </div>
        <div style={{
          fontSize: 50, color: "rgba(255,200,120,0.3)",
          fontWeight: 400, lineHeight: 1.6,
          fontStyle: "italic", marginTop: 8,
        }}>
          Just the room. And the light.
        </div>
      </div>

      {/* Closing thought */}
      <div style={{
        position: "absolute", left: 60, right: 150, bottom: 530,
        ...sceneVis(350, 450, 30, 1),
      }}>
        <div style={{
          fontSize: 56, color: "rgba(255,220,160,0.5)",
          fontWeight: 400, lineHeight: 1.5,
        }}>
          Some places feel like this.
        </div>
        <div style={{
          fontSize: 48, color: "rgba(255,220,160,0.3)",
          fontWeight: 400, lineHeight: 1.5,
          fontStyle: "italic", marginTop: 12,
        }}>
          Yours could too.
        </div>
      </div>

      {/* CTA */}
      <div style={{
        position: "absolute", left: 60, bottom: 500,
        opacity: interpolate(frame, [410, 430], [0, 0.35], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
      }}>
        <div style={{
          fontSize: 26, color: "rgba(255,200,120,0.25)",
          letterSpacing: 5, textTransform: "uppercase",
          fontFamily: "'Inter', sans-serif",
        }}>
          YOUR RESTAURANT
        </div>
      </div>
    </div>
  );
};
