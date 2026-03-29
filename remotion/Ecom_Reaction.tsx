import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

// ECOM REEL 5: "Real-Time Reaction" — Etsy Star Seller Criteria Change
// Screen recording / terminal aesthetic. Dark bg. Yellow sticky annotations.
// 18s = 540 frames @ 30fps, 1080x1920

const C = {
  bg: "#1e1e1e",
  chrome: "#2d2d2d",
  chromeBorder: "#3d3d3d",
  urlBar: "#383838",
  urlText: "#9ca3af",
  content: "#e4e4e7",
  heading: "#ffffff",
  sticky: "#fef08a",
  stickyBorder: "#eab308",
  stickyText: "#713f12",
  cursor: "#22c55e",
  link: "#60a5fa",
  dim: "#6b7280",
  alert: "#ef4444",
  mono: "#a5f3fc",
};
const F = {
  mono: "'JetBrains Mono', 'Fira Code', monospace",
  sans: "'Inter', -apple-system, sans-serif",
  serif: "'DM Serif Display', Georgia, serif",
};

function ease(frame: number, start: number, dur: number, from: number, to: number, fn = Easing.out(Easing.cubic)) {
  return interpolate(frame, [start, start + dur], [from, to], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: fn,
  });
}
function fadeUp(frame: number, start: number, dur = 14) {
  return {
    opacity: ease(frame, start, dur, 0, 1),
    transform: `translateY(${ease(frame, start, dur, 30, 0)}px)`,
  };
}
function sceneVis(frame: number, start: number, end: number, fi = 10, fo = 10) {
  if (frame < start - 3 || frame > end + fo + 3) return 0;
  return Math.min(
    interpolate(frame, [start, start + fi], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    interpolate(frame, [end, end + Math.max(fo, 1)], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
  );
}

// Typing effect — reveals text character by character
function typedText(text: string, frame: number, start: number, charsPerFrame = 0.6) {
  const elapsed = Math.max(0, frame - start);
  const chars = Math.min(Math.floor(elapsed * charsPerFrame), text.length);
  return text.slice(0, chars);
}

// Cursor blink
function CursorBlink({ frame }: { frame: number }) {
  const blink = Math.sin(frame * 0.25) > 0;
  return (
    <span style={{
      display: "inline-block", width: 10, height: 22,
      background: blink ? C.cursor : "transparent",
      marginLeft: 2, verticalAlign: "middle",
    }} />
  );
}

// Sticky note annotation
function StickyNote({ frame, start, text, x, y, rotation = -2 }: {
  frame: number; start: number; text: string; x: number; y: number; rotation?: number;
}) {
  const vis = ease(frame, start, 12, 0, 1);
  const scale = ease(frame, start, 15, 0.7, 1, Easing.out(Easing.back(1.5) as any));
  return (
    <div style={{
      position: "absolute", left: x, top: y,
      background: C.sticky, border: `2px solid ${C.stickyBorder}`,
      padding: "14px 18px", borderRadius: 4,
      transform: `rotate(${rotation}deg) scale(${scale})`,
      opacity: vis, maxWidth: 380, boxShadow: "4px 4px 12px rgba(0,0,0,0.4)",
      zIndex: 20,
    }}>
      <div style={{
        fontFamily: F.sans, fontSize: 26, fontWeight: 700,
        color: C.stickyText, lineHeight: 1.4,
      }}>{text}</div>
    </div>
  );
}

export const Ecom_Reaction: React.FC = () => {
  const frame = useCurrentFrame();

  // Scene timing: 5 scenes across 540 frames
  // S1: Hook text + browser opening (0-110) ~3.7s
  // S2: URL typing + page loading (111-220) ~3.7s
  // S3: "Wait..." + bad news reveals (221-340) ~4s
  // S4: Impact realization (341-440) ~3.3s
  // S5: CTA (441-540) ~3.3s

  const s1 = sceneVis(frame, 0, 105, 1, 12);
  const s2 = sceneVis(frame, 111, 215, 10, 12);
  const s3 = sceneVis(frame, 221, 335, 10, 12);
  const s4 = sceneVis(frame, 341, 435, 10, 12);
  const s5 = sceneVis(frame, 441, 535, 10, 1);

  // Browser chrome height
  const browserTop = 180;
  const browserOpen = ease(frame, 25, 20, 0, 1);

  // URL typing
  const url = "etsy.com/seller-handbook/star-seller-2025";
  const typedUrl = typedText(url, frame, 120, 0.8);

  // Page content typing
  const pageTitle = "Star Seller Program Update";
  const typedTitle = typedText(pageTitle, frame, 165, 0.7);

  const pageLine1 = "Effective March 2025, Star Seller eligibility";
  const pageLine2 = "will incorporate engagement-weighted review scores.";
  const pageLine3 = "Minimum threshold: 4.8 star average replaced by";
  const pageLine4 = "composite engagement score (reviews + favorites + repeat buyers).";

  return (
    <div style={{
      width: 1080, height: 1920, background: C.bg,
      display: "flex", flexDirection: "column",
      overflow: "hidden", position: "relative",
    }}>

      {/* S1: Hook */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        padding: "120px 60px", opacity: s1, zIndex: 10,
      }}>
        <div style={{
          fontFamily: F.mono, fontSize: 40, fontWeight: 700,
          color: C.heading, lineHeight: 1.4,
          ...fadeUp(frame, 5),
        }}>
          Etsy just changed{"\n"}Star Seller.
        </div>
        <div style={{
          fontFamily: F.mono, fontSize: 32, color: C.cursor,
          marginTop: 20,
          ...fadeUp(frame, 22),
        }}>
          I'm reading it live.
          <CursorBlink frame={frame} />
        </div>
      </div>

      {/* Browser chrome — visible from S2 onward */}
      {frame > 100 && (
        <div style={{
          position: "absolute", top: browserTop, left: 40, right: 40,
          bottom: 100, borderRadius: 12, overflow: "hidden",
          border: `1px solid ${C.chromeBorder}`,
          opacity: Math.min(s2 + s3 + s4, 1),
          transform: `scale(${0.95 + 0.05 * browserOpen})`,
        }}>
          {/* Title bar */}
          <div style={{
            height: 48, background: C.chrome, display: "flex",
            alignItems: "center", padding: "0 16px", gap: 8,
            borderBottom: `1px solid ${C.chromeBorder}`,
          }}>
            <div style={{ width: 14, height: 14, borderRadius: 7, background: "#ef4444" }} />
            <div style={{ width: 14, height: 14, borderRadius: 7, background: "#eab308" }} />
            <div style={{ width: 14, height: 14, borderRadius: 7, background: "#22c55e" }} />
          </div>

          {/* URL bar */}
          <div style={{
            height: 44, background: C.chrome, display: "flex",
            alignItems: "center", padding: "0 16px",
            borderBottom: `1px solid ${C.chromeBorder}`,
          }}>
            <div style={{
              flex: 1, background: C.urlBar, borderRadius: 6,
              padding: "6px 14px", display: "flex", alignItems: "center",
            }}>
              <span style={{
                fontFamily: F.mono, fontSize: 18, color: C.urlText,
              }}>
                {typedUrl}
                {frame > 120 && frame < 165 && <CursorBlink frame={frame} />}
              </span>
            </div>
          </div>

          {/* Page content area */}
          <div style={{
            background: "#fafafa", flex: 1, padding: "40px 30px",
            overflow: "hidden", minHeight: 1200,
          }}>
            {/* Etsy orange header bar */}
            <div style={{
              height: 6, background: "#F56502", borderRadius: 3,
              marginBottom: 30, width: `${ease(frame, 170, 15, 0, 100)}%`,
            }} />

            {frame > 165 && (
              <>
                <div style={{
                  fontFamily: F.sans, fontSize: 36, fontWeight: 800,
                  color: "#1a1a1a", marginBottom: 24, lineHeight: 1.3,
                }}>
                  {typedTitle}
                </div>

                {frame > 185 && (
                  <div style={{
                    fontFamily: F.sans, fontSize: 22, color: "#4b5563",
                    lineHeight: 1.7,
                    opacity: ease(frame, 185, 15, 0, 1),
                  }}>
                    {frame > 185 && <div>{typedText(pageLine1, frame, 185, 0.7)}</div>}
                    {frame > 210 && <div>{typedText(pageLine2, frame, 210, 0.7)}</div>}
                    {frame > 250 && (
                      <div style={{ marginTop: 16 }}>
                        <span style={{
                          background: frame > 280 ? "#fde68a" : "transparent",
                          padding: "2px 4px", borderRadius: 3,
                        }}>
                          {typedText(pageLine3, frame, 250, 0.6)}
                        </span>
                      </div>
                    )}
                    {frame > 290 && (
                      <div>
                        <span style={{
                          background: frame > 310 ? "#fde68a" : "transparent",
                          padding: "2px 4px", borderRadius: 3,
                        }}>
                          {typedText(pageLine4, frame, 290, 0.6)}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}

      {/* Sticky note annotations — S3 */}
      {s3 > 0 && (
        <>
          <StickyNote frame={frame} start={230} text="Wait..." x={580} y={450} rotation={3} />
          <StickyNote frame={frame} start={260}
            text="They changed the review threshold"
            x={60} y={900} rotation={-1} />
          <StickyNote frame={frame} start={295}
            text={'From 4.8 to... engagement weighted?'}
            x={500} y={1050} rotation={2} />
        </>
      )}

      {/* S4: Impact realization */}
      {s4 > 0 && (
        <>
          <StickyNote frame={frame} start={348}
            text="My 847 sales might not matter if engagement is low"
            x={80} y={850} rotation={-2} />

          <div style={{
            position: "absolute", bottom: 250, left: 60, right: 60,
            opacity: s4,
          }}>
            <div style={{
              background: "rgba(0,0,0,0.85)", borderRadius: 16,
              padding: "30px 36px", border: `1px solid ${C.alert}`,
              ...fadeUp(frame, 370),
            }}>
              <div style={{
                fontFamily: F.mono, fontSize: 28, fontWeight: 700,
                color: C.heading, lineHeight: 1.5,
              }}>
                Here's what this actually{"\n"}means for your shop:
              </div>
              <div style={{
                fontFamily: F.sans, fontSize: 24, color: C.content,
                marginTop: 16, lineHeight: 1.6,
                opacity: ease(frame, 390, 15, 0, 1),
              }}>
                Sales volume alone won't save you.{"\n"}
                You need reviews, favorites, and{"\n"}
                repeat customers — not just orders.
              </div>
            </div>
          </div>
        </>
      )}

      {/* S5: CTA */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", padding: 80, opacity: s5,
        background: C.bg,
      }}>
        <div style={{
          fontFamily: F.mono, fontSize: 42, fontWeight: 700,
          color: C.heading, textAlign: "center", lineHeight: 1.4,
          ...fadeUp(frame, 448),
        }}>
          Check your dashboard.
        </div>
        <div style={{
          fontFamily: F.mono, fontSize: 36, color: C.alert,
          textAlign: "center", marginTop: 24, lineHeight: 1.4,
          ...fadeUp(frame, 468),
        }}>
          Your status may{"\n"}have changed.
        </div>

        {/* Fake browser button */}
        <div style={{
          marginTop: 50, padding: "16px 36px", borderRadius: 8,
          background: C.cursor, display: "inline-flex",
          ...fadeUp(frame, 490),
        }}>
          <span style={{
            fontFamily: F.mono, fontSize: 24, fontWeight: 700,
            color: "#000",
          }}>etsy.com/your/shop/star-seller</span>
        </div>
      </div>

      {/* Scanline effect for screen recording feel */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
        background: `repeating-linear-gradient(
          0deg,
          transparent,
          transparent 3px,
          rgba(255,255,255,0.015) 3px,
          rgba(255,255,255,0.015) 4px
        )`,
        pointerEvents: "none",
      }} />

      {/* Recording indicator */}
      {frame > 5 && frame < 440 && (
        <div style={{
          position: "absolute", top: 40, left: 50,
          display: "flex", alignItems: "center", gap: 10,
          opacity: 0.8,
        }}>
          <div style={{
            width: 12, height: 12, borderRadius: 6,
            background: Math.sin(frame * 0.15) > 0 ? C.alert : "transparent",
          }} />
          <span style={{
            fontFamily: F.mono, fontSize: 18, color: C.dim,
          }}>REC</span>
        </div>
      )}
    </div>
  );
};
