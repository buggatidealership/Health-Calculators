import { Composition } from "remotion";
import { CortisolAnimation } from "./CortisolAnimation";
import { PinnedPost } from "./PinnedPost";
import { CortisolOG } from "./CortisolOG";
import { CaffeineAnimation } from "./CaffeineAnimation";

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
        durationInFrames={900}
        fps={30}
        width={2160}
        height={2160}
      />
    </>
  );
};
