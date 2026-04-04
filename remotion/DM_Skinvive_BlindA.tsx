import React from "react";
import { Audio, Sequence, staticFile, interpolate } from "remotion";
import { DM_Skinvive_Redact } from "./DM_Skinvive_Redact";

// Blind test Output A — Skinvive Redact with Mila voice
// Voice-led: always present, guides the viewer through myths and corrections
// 360 frames (12s at 30fps), 1080x1920

export const DM_Skinvive_BlindA: React.FC = () => {
  return (
    <div style={{ position: "relative" }}>
      <DM_Skinvive_Redact />

      {/* OPEN: "Drei Mythen." — voice sets up format immediately */}
      <Sequence from={3} durationInFrames={40}>
        <Audio src={staticFile("audio/dm-skinvive/a2-open.mp3")} volume={0.85} />
      </Sequence>

      {/* TYPEWRITER SFX on each claim typing — low volume under voice */}
      {[20, 95, 170].map((f) => (
        <Sequence key={f} from={f} durationInFrames={30}>
          <Audio src={staticFile("audio/dm-skinvive/sfx-typewriter.mp3")} volume={0.12} />
        </Sequence>
      ))}

      {/* SLAM 1 + "Falsch." */}
      <Sequence from={55} durationInFrames={30}>
        <Audio src={staticFile("audio/dm-skinvive/sfx-slam.mp3")} volume={0.5} />
      </Sequence>
      <Sequence from={56} durationInFrames={28}>
        <Audio src={staticFile("audio/dm-skinvive/a2-falsch1.mp3")} volume={0.9} />
      </Sequence>

      {/* CORRECTION 1 */}
      <Sequence from={68} durationInFrames={65}>
        <Audio src={staticFile("audio/dm-skinvive/a2-korr1.mp3")} volume={0.85} />
      </Sequence>

      {/* SLAM 2 + "Auch falsch." */}
      <Sequence from={130} durationInFrames={30}>
        <Audio src={staticFile("audio/dm-skinvive/sfx-slam.mp3")} volume={0.5} />
      </Sequence>
      <Sequence from={131} durationInFrames={32}>
        <Audio src={staticFile("audio/dm-skinvive/a2-falsch2.mp3")} volume={0.9} />
      </Sequence>

      {/* CORRECTION 2 */}
      <Sequence from={143} durationInFrames={60}>
        <Audio src={staticFile("audio/dm-skinvive/a2-korr2.mp3")} volume={0.85} />
      </Sequence>

      {/* SLAM 3 + "Wieder falsch." */}
      <Sequence from={205} durationInFrames={30}>
        <Audio src={staticFile("audio/dm-skinvive/sfx-slam.mp3")} volume={0.5} />
      </Sequence>
      <Sequence from={206} durationInFrames={36}>
        <Audio src={staticFile("audio/dm-skinvive/a2-falsch3.mp3")} volume={0.9} />
      </Sequence>

      {/* CORRECTION 3 */}
      <Sequence from={218} durationInFrames={68}>
        <Audio src={staticFile("audio/dm-skinvive/a2-korr3.mp3")} volume={0.85} />
      </Sequence>

      {/* CTA: "DermaMedicum Bonn." */}
      <Sequence from={295} durationInFrames={50}>
        <Audio src={staticFile("audio/dm-skinvive/a2-cta.mp3")} volume={0.85} />
      </Sequence>
    </div>
  );
};
