import { Composition } from "remotion";
import { CortisolAnimation } from "./CortisolAnimation";
import { PinnedPost } from "./PinnedPost";

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
        durationInFrames={1260}
        fps={30}
        width={2160}
        height={2160}
      />
    </>
  );
};
