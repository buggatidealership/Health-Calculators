import React from "react";
import { Audio, Sequence, staticFile, interpolate } from "remotion";
import { DM_Skinvive_Redact } from "./DM_Skinvive_Redact";

// Blind test Output B — Skinvive Redact with Mila voice
// Strategic: silence on myths (let viewer read), voice ONLY on corrections
// The contrast: impersonal typed text → personal spoken truth
// 360 frames (12s at 30fps), 1080x1920

export const DM_Skinvive_BlindB: React.FC = () => {
  return (
    <div style={{ position: "relative" }}>
      <DM_Skinvive_Redact />

      {/* Myths type in silence — no typewriter SFX, no voice. Tension builds. */}

      {/* SLAM 1: impact SFX */}
      <Sequence from={55} durationInFrames={30}>
        <Audio src={staticFile("audio/dm-skinvive/sfx-slam.mp3")} volume={0.55} />
      </Sequence>

      {/* CORRECTION 1: voice enters for the first time — the surprise */}
      <Sequence from={60} durationInFrames={76}>
        <Audio src={staticFile("audio/dm-skinvive/b2-korr1.mp3")} volume={0.85} />
      </Sequence>

      {/* SLAM 2: cuts the tail of correction 1 — rhythm through interruption */}
      <Sequence from={130} durationInFrames={30}>
        <Audio src={staticFile("audio/dm-skinvive/sfx-slam.mp3")} volume={0.55} />
      </Sequence>

      {/* CORRECTION 2 */}
      <Sequence from={135} durationInFrames={86}>
        <Audio
          src={staticFile("audio/dm-skinvive/b2-korr2.mp3")}
          volume={(f) =>
            interpolate(f, [0, 5, 70, 86], [0, 0.85, 0.85, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            })
          }
        />
      </Sequence>

      {/* SLAM 3 */}
      <Sequence from={205} durationInFrames={30}>
        <Audio src={staticFile("audio/dm-skinvive/sfx-slam.mp3")} volume={0.55} />
      </Sequence>

      {/* CORRECTION 3 */}
      <Sequence from={210} durationInFrames={48}>
        <Audio src={staticFile("audio/dm-skinvive/b2-korr3.mp3")} volume={0.85} />
      </Sequence>

      {/* CTA: "Drei Fakten. Eine Praxis." */}
      <Sequence from={285} durationInFrames={58}>
        <Audio src={staticFile("audio/dm-skinvive/b2-cta.mp3")} volume={0.85} />
      </Sequence>
    </div>
  );
};
