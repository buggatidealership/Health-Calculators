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
import { CaffeineV2 } from "./CaffeineV2";
import { CaffeineV3 } from "./CaffeineV3";
import { GlucoseSpike } from "./GlucoseSpike";
import { GABAPathway } from "./GABAPathway";
import { DentalReel1 } from "./DentalReel1";
import { DentalReel2 } from "./DentalReel2";
import { DentalGenZ } from "./DentalGenZ";
import { DentalContrarian } from "./DentalContrarian";
import { DermaReel1 } from "./DermaReel1";
import { WS1_ASMR } from "./WS1_ASMR";
import { WS2_Debunk } from "./WS2_Debunk";
import { WS3_Intimate } from "./WS3_Intimate";
import { WS4_OptOut } from "./WS4_OptOut";
import { WS5_Cinema } from "./WS5_Cinema";
import { DermaEdu1 } from "./DermaEdu1";
import { DermaEdu2 } from "./DermaEdu2";
import { DermaEdu3 } from "./DermaEdu3";
import { DermaReel2 } from "./DermaReel2";
import { DermaReel3 } from "./DermaReel3";
import { DentalQuestion } from "./DentalQuestion";
import { DentalKids } from "./DentalKids";
import { MetabolismFluid } from "./MetabolismFluid";
import { DM_Debunk } from "./DM_Debunk";
import { DM_ASMR } from "./DM_ASMR";
import { DM_WhatsApp } from "./DM_WhatsApp";
import { DM_Terminal } from "./DM_Terminal";
import { DM_Sketch } from "./DM_Sketch";
import { Cat_DentalMyth } from "./Cat_DentalMyth";
import { Cat_DentalASMR } from "./Cat_DentalASMR";
import { Cat_DentalDM } from "./Cat_DentalDM";
import { Cat_BarRitual } from "./Cat_BarRitual";
import { Cat_BarMyth } from "./Cat_BarMyth";
import { Cat_BarAfterHours } from "./Cat_BarAfterHours";
// DermaMedicum Portfolio v2 — 10 styles (5 branded + 5 freeform)
import { DM_DataPulse } from "./DM_DataPulse";
import { DM_LayerPeel } from "./DM_LayerPeel";
import { DM_SplitReveal } from "./DM_SplitReveal";
import { DM_Timeline } from "./DM_Timeline";
import { DM_CardStack } from "./DM_CardStack";
import { DM_NeonAnatomy } from "./DM_NeonAnatomy";
import { DM_Particle } from "./DM_Particle";
import { DM_Typewriter } from "./DM_Typewriter";
import { DM_Glass } from "./DM_Glass";
import { DM_CinemaWipe } from "./DM_CinemaWipe";
import { DM_BounceBars } from "./DM_BounceBars";

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
        id="metabolism-fluid"
        component={MetabolismFluid}
        durationInFrames={1020}
        fps={30}
        width={2160}
        height={2160}
      />
      <Composition id="ws-asmr" component={WS1_ASMR} durationInFrames={300} fps={30} width={1080} height={1920} />
      <Composition id="ws-debunk" component={WS2_Debunk} durationInFrames={330} fps={30} width={1080} height={1920} />
      <Composition id="ws-intimate" component={WS3_Intimate} durationInFrames={360} fps={30} width={1080} height={1920} />
      <Composition id="ws-optout" component={WS4_OptOut} durationInFrames={450} fps={30} width={1080} height={1920} />
      <Composition id="ws-cinema" component={WS5_Cinema} durationInFrames={450} fps={30} width={1080} height={1920} />
      <Composition
        id="derma-edu-1"
        component={DermaEdu1}
        durationInFrames={360}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="derma-edu-2"
        component={DermaEdu2}
        durationInFrames={450}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="derma-edu-3"
        component={DermaEdu3}
        durationInFrames={450}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="derma-reel-1"
        component={DermaReel1}
        durationInFrames={300}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="derma-reel-2"
        component={DermaReel2}
        durationInFrames={360}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="derma-reel-3"
        component={DermaReel3}
        durationInFrames={360}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="dental-contrarian"
        component={DentalContrarian}
        durationInFrames={450}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="dental-question"
        component={DentalQuestion}
        durationInFrames={540}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="dental-genz"
        component={DentalGenZ}
        durationInFrames={450}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="dental-kids"
        component={DentalKids}
        durationInFrames={540}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="dental-reel-2"
        component={DentalReel2}
        durationInFrames={600}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="dental-reel-1"
        component={DentalReel1}
        durationInFrames={600}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="gaba-pathway"
        component={GABAPathway}
        durationInFrames={900}
        fps={30}
        width={2160}
        height={2160}
      />
      <Composition
        id="glucose-spike"
        component={GlucoseSpike}
        durationInFrames={960}
        fps={30}
        width={2160}
        height={2160}
      />
      <Composition
        id="caffeine-v3"
        component={CaffeineV3}
        durationInFrames={900}
        fps={30}
        width={2160}
        height={2160}
      />
      <Composition
        id="caffeine-v2"
        component={CaffeineV2}
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
      <Composition id="dm-debunk" component={DM_Debunk} durationInFrames={330} fps={30} width={1080} height={1920} />
      <Composition id="dm-asmr" component={DM_ASMR} durationInFrames={450} fps={30} width={1080} height={1920} />
      <Composition id="dm-whatsapp" component={DM_WhatsApp} durationInFrames={360} fps={30} width={1080} height={1920} />
      <Composition id="dm-terminal" component={DM_Terminal} durationInFrames={420} fps={30} width={1080} height={1920} />
      <Composition id="dm-sketch" component={DM_Sketch} durationInFrames={450} fps={30} width={1080} height={1920} />
      <Composition id="cat-dental-myth" component={Cat_DentalMyth} durationInFrames={330} fps={30} width={1080} height={1920} />
      <Composition id="cat-dental-asmr" component={Cat_DentalASMR} durationInFrames={450} fps={30} width={1080} height={1920} />
      <Composition id="cat-dental-dm" component={Cat_DentalDM} durationInFrames={330} fps={30} width={1080} height={1920} />
      <Composition id="cat-bar-ritual" component={Cat_BarRitual} durationInFrames={420} fps={30} width={1080} height={1920} />
      <Composition id="cat-bar-myth" component={Cat_BarMyth} durationInFrames={330} fps={30} width={1080} height={1920} />
      <Composition id="cat-bar-afterhours" component={Cat_BarAfterHours} durationInFrames={450} fps={30} width={1080} height={1920} />
      {/* DermaMedicum Portfolio v2 — Branded */}
      <Composition id="dm-datapulse" component={DM_DataPulse} durationInFrames={270} fps={30} width={1080} height={1920} />
      <Composition id="dm-layerpeel" component={DM_LayerPeel} durationInFrames={420} fps={30} width={1080} height={1920} />
      <Composition id="dm-splitreveal" component={DM_SplitReveal} durationInFrames={360} fps={30} width={1080} height={1920} />
      <Composition id="dm-timeline" component={DM_Timeline} durationInFrames={420} fps={30} width={1080} height={1920} />
      <Composition id="dm-cardstack" component={DM_CardStack} durationInFrames={390} fps={30} width={1080} height={1920} />
      {/* DermaMedicum Portfolio v2 — Freeform */}
      <Composition id="dm-neonanatomy" component={DM_NeonAnatomy} durationInFrames={390} fps={30} width={1080} height={1920} />
      <Composition id="dm-particle" component={DM_Particle} durationInFrames={390} fps={30} width={1080} height={1920} />
      <Composition id="dm-typewriter" component={DM_Typewriter} durationInFrames={420} fps={30} width={1080} height={1920} />
      <Composition id="dm-glass" component={DM_Glass} durationInFrames={390} fps={30} width={1080} height={1920} />
      <Composition id="dm-cinemawipe" component={DM_CinemaWipe} durationInFrames={390} fps={30} width={1080} height={1920} />
      <Composition id="dm-bouncebars" component={DM_BounceBars} durationInFrames={420} fps={30} width={1080} height={1920} />
    </>
  );
};
