import React from "react";
import { Audio, Sequence, staticFile, interpolate } from "remotion";
import { DM_PRP_LayerPeel } from "./DM_PRP_LayerPeel";

// Blind test Output B — PRP LayerPeel with Bettina voice
// 420 frames (14s at 30fps), 1080x1920

export const DM_PRP_BlindTest_B: React.FC = () => {
  return (
    <div style={{ position: "relative" }}>
      <DM_PRP_LayerPeel />

      {/* Layer slide-in: organic whoosh, low volume */}
      {[15, 40, 65, 90, 115].map((startFrame) => (
        <Sequence key={startFrame} from={startFrame} durationInFrames={45}>
          <Audio
            src={staticFile("audio/dm-prp/sfx-layer-whoosh.mp3")}
            volume={0.25}
          />
        </Sequence>
      ))}

      {/* Growth factor glow hum — builds, then fades before narration */}
      <Sequence from={130} durationInFrames={65}>
        <Audio
          src={staticFile("audio/dm-prp/sfx-glow-hum.mp3")}
          volume={(f) =>
            interpolate(f, [0, 20, 45, 65], [0, 0.2, 0.12, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            })
          }
        />
      </Sequence>

      {/* Heartbeat pulse — organic, single beat */}
      <Sequence from={150} durationInFrames={60}>
        <Audio
          src={staticFile("audio/dm-prp/sfx-pulse-heartbeat.mp3")}
          volume={(f) =>
            interpolate(f, [0, 5, 20, 60], [0, 0.22, 0.15, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            })
          }
        />
      </Sequence>

      {/* Ring expansion */}
      <Sequence from={158} durationInFrames={55}>
        <Audio
          src={staticFile("audio/dm-prp/sfx-activation-ring.mp3")}
          volume={(f) =>
            interpolate(f, [0, 8, 30, 55], [0, 0.15, 0.08, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            })
          }
        />
      </Sequence>

      {/* Narration — Scene 3 only */}
      {/* Starts 3 frames after visual text (temporal contiguity: voice trails visual) */}
      <Sequence from={173} durationInFrames={155}>
        <Audio
          src={staticFile("audio/dm-prp/research-core.mp3")}
          volume={0.85}
        />
      </Sequence>

      {/* Logo chime */}
      <Sequence from={372} durationInFrames={48}>
        <Audio
          src={staticFile("audio/dm-prp/sfx-logo-chime.mp3")}
          volume={(f) =>
            interpolate(f, [0, 6, 35, 48], [0, 0.4, 0.2, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            })
          }
        />
      </Sequence>
    </div>
  );
};
