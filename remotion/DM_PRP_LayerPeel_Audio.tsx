import React from "react";
import { Audio, Sequence, staticFile, useCurrentFrame, interpolate } from "remotion";
import { DM_PRP_LayerPeel } from "./DM_PRP_LayerPeel";

// DM_PRP_LayerPeel with sound design layer
// Audio philosophy: sparse > dense (Murch Rule of 2.5)
// Narration ONLY on emotional core (Scene 3). SFX punctuate transitions.
// Silence before narration = contrast creates perception.
// 420 frames (14s at 30fps), 1080x1920

const SFX_VOL = 0.3;
const NARRATION_VOL = 0.85;

// Layer slide-in frames (matching visual delays in DM_PRP_LayerPeel)
const LAYER_FRAMES = [15, 40, 65, 90, 115];
const GLOW_START = 130;
const PULSE_START = 150;
const RING_START = 158;
const NARRATION_START = 172; // 2 frames after visual text appears (frame 170)
const CHIME_START = 372;    // 2 frames after logo card (frame 370)

export const DM_PRP_LayerPeel_Audio: React.FC = () => {
  return (
    <div style={{ position: "relative" }}>
      {/* Original visual — untouched */}
      <DM_PRP_LayerPeel />

      {/* === SFX: Layer slide-in whooshes (Scene 1) === */}
      {LAYER_FRAMES.map((f) => (
        <Sequence key={f} from={f} durationInFrames={45}>
          <Audio
            src={staticFile("audio/dm-prp/sfx-layer-whoosh.mp3")}
            volume={SFX_VOL}
          />
        </Sequence>
      ))}

      {/* === SFX: Growth factor glow hum (Scene 2 build) === */}
      {/* Fades in, sustains, then ducks before narration */}
      <Sequence from={GLOW_START} durationInFrames={80}>
        <Audio
          src={staticFile("audio/dm-prp/sfx-glow-hum.mp3")}
          volume={(f) =>
            interpolate(f, [0, 25, 50, 80], [0, SFX_VOL * 0.5, SFX_VOL * 0.3, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            })
          }
        />
      </Sequence>

      {/* === SFX: Heartbeat pulse (Scene 2 activation) === */}
      <Sequence from={PULSE_START} durationInFrames={60}>
        <Audio
          src={staticFile("audio/dm-prp/sfx-pulse-heartbeat.mp3")}
          volume={(f) =>
            interpolate(f, [0, 5, 15, 60], [0, SFX_VOL * 0.6, SFX_VOL * 0.5, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            })
          }
        />
      </Sequence>

      {/* === SFX: Ring expansion (Scene 2 concentric rings) === */}
      <Sequence from={RING_START} durationInFrames={75}>
        <Audio
          src={staticFile("audio/dm-prp/sfx-activation-ring.mp3")}
          volume={(f) =>
            interpolate(f, [0, 8, 40, 75], [0, SFX_VOL * 0.4, SFX_VOL * 0.2, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            })
          }
        />
      </Sequence>

      {/* === NARRATION: Scene 3 — emotional core === */}
      {/* "Ihre eigenen Zellen. Ihre eigenen Wachstumsfaktoren. Keine Fremdstoffe." */}
      {/* Jonas Berger: warm, steady, trustworthy German male — 5.3s (159 frames) */}
      <Sequence from={NARRATION_START} durationInFrames={165}>
        <Audio
          src={staticFile("audio/dm-prp/narration-scene3-jonas.mp3")}
          volume={NARRATION_VOL}
        />
      </Sequence>

      {/* === SFX: Logo chime (Scene 5) === */}
      {/* Single elegant tone — brand presence, not a sell */}
      <Sequence from={CHIME_START} durationInFrames={48}>
        <Audio
          src={staticFile("audio/dm-prp/sfx-logo-chime.mp3")}
          volume={(f) =>
            interpolate(f, [0, 6, 35, 48], [0, 0.45, 0.25, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            })
          }
        />
      </Sequence>
    </div>
  );
};
