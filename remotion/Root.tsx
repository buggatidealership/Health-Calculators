import { Composition } from "remotion";
import { CortisolAnimation } from "./CortisolAnimation";
import { PinnedPost } from "./PinnedPost";
import { CortisolOG } from "./CortisolOG";
import { CaffeineAnimation } from "./CaffeineAnimation";
import { ProteinAnimation } from "./ProteinAnimation";
import { VitaminDA } from "./VitaminDA";
import { VitaminDB } from "./VitaminDB";
import { NormalAnimation } from "./NormalAnimation";
import { InsulinAnimation } from "./InsulinAnimation";
import { GlucoseAnimation } from "./GlucoseAnimation";
import { InsulinRatioAnimation } from "./InsulinRatioAnimation";
import { TestosteroneAnimation } from "./TestosteroneAnimation";
import { TestosteroneFluid } from "./TestosteroneFluid";
import { CaffeineFluid } from "./CaffeineFluid";
import { BodyCompFluid } from "./BodyCompFluid";
import { CortisolFluid } from "./CortisolFluid";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="cortisol-animation"
        component={CortisolAnimation}
        durationInFrames={1020}
        fps={30}
        width={2160}
        height={2160}
      />
      <Composition
        id="pinned-post"
        component={PinnedPost}
        durationInFrames={1380}
        fps={30}
        width={2160}
        height={2160}
      />
      <Composition
        id="cortisol-og"
        component={CortisolOG}
        durationInFrames={1}
        fps={30}
        width={1200}
        height={628}
      />
      <Composition
        id="caffeine-animation"
        component={CaffeineAnimation}
        durationInFrames={960}
        fps={30}
        width={2160}
        height={2160}
      />
      <Composition
        id="protein-animation"
        component={ProteinAnimation}
        durationInFrames={1000}
        fps={30}
        width={2160}
        height={2160}
      />
      <Composition
        id="vitamin-d-A"
        component={VitaminDA}
        durationInFrames={900}
        fps={30}
        width={2160}
        height={2160}
      />
      <Composition
        id="vitamin-d-B"
        component={VitaminDB}
        durationInFrames={960}
        fps={30}
        width={2160}
        height={2160}
      />
      <Composition
        id="insulin-animation"
        component={InsulinAnimation}
        durationInFrames={900}
        fps={30}
        width={2160}
        height={2160}
      />
      <Composition
        id="caffeine-fluid"
        component={CaffeineFluid}
        durationInFrames={900}
        fps={30}
        width={2160}
        height={2160}
      />
      <Composition
        id="bodycomp-fluid"
        component={BodyCompFluid}
        durationInFrames={840}
        fps={30}
        width={2160}
        height={2160}
      />
      <Composition
        id="cortisol-fluid"
        component={CortisolFluid}
        durationInFrames={900}
        fps={30}
        width={2160}
        height={2160}
      />
      <Composition
        id="testosterone-fluid"
        component={TestosteroneFluid}
        durationInFrames={960}
        fps={30}
        width={2160}
        height={2160}
      />
      <Composition
        id="testosterone-animation"
        component={TestosteroneAnimation}
        durationInFrames={960}
        fps={30}
        width={2160}
        height={2160}
      />
      <Composition
        id="insulin-ratio-animation"
        component={InsulinRatioAnimation}
        durationInFrames={840}
        fps={30}
        width={2160}
        height={2160}
      />
      <Composition
        id="glucose-animation"
        component={GlucoseAnimation}
        durationInFrames={900}
        fps={30}
        width={2160}
        height={2160}
      />
      <Composition
        id="normal-animation"
        component={NormalAnimation}
        durationInFrames={750}
        fps={30}
        width={2160}
        height={2160}
      />
    </>
  );
};
