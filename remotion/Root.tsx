import { Composition } from "remotion";
import { CortisolAnimation } from "./CortisolAnimation";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="cortisol-animation"
      component={CortisolAnimation}
      durationInFrames={30 * 25}
      fps={30}
      width={2160}
      height={2160}
    />
  );
};
