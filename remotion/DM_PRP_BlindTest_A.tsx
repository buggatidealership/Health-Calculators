import React from "react";
import { Audio, Sequence, staticFile, interpolate } from "remotion";
import { DM_PRP_LayerPeel } from "./DM_PRP_LayerPeel";

// Blind test Output A — PRP LayerPeel with Bettina voice
// 420 frames (14s at 30fps), 1080x1920

export const DM_PRP_BlindTest_A: React.FC = () => {
  return (
    <div style={{ position: "relative" }}>
      <DM_PRP_LayerPeel />

      {/* Continuous ambient music bed — full duration */}
      <Sequence from={0} durationInFrames={420}>
        <Audio
          src={staticFile("audio/dm-prp/naive-ambient.mp3")}
          volume={(f) =>
            interpolate(f, [0, 15, 390, 420], [0, 0.18, 0.18, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            })
          }
        />
      </Sequence>

      {/* Transition swooshes on each layer slide-in */}
      {[15, 40, 65, 90, 115].map((startFrame) => (
        <Sequence key={startFrame} from={startFrame} durationInFrames={30}>
          <Audio
            src={staticFile("audio/dm-prp/naive-swoosh.mp3")}
            volume={0.25}
          />
        </Sequence>
      ))}

      {/* Continuous narration — starts early, covers all scenes */}
      <Sequence from={8} durationInFrames={412}>
        <Audio
          src={staticFile("audio/dm-prp/naive-full.mp3")}
          volume={0.8}
        />
      </Sequence>
    </div>
  );
};
