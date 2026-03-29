import React from "react";
import { useCurrentFrame, interpolate, Easing, Sequence, AbsoluteFill } from "remotion";
import { BRAND, FONTS } from "./derma-brand";

// Embed actual reel components
import { DM_Batch1_AviClear_A } from "./DM_Batch1_AviClear_A";
import { DM_Batch1_AviClear_B } from "./DM_Batch1_AviClear_B";
import { DM_Batch1_AviClear_C } from "./DM_Batch1_AviClear_C";
import { DM_Batch1_Canfield_A } from "./DM_Batch1_Canfield_A";
import { DM_Batch1_Canfield_B } from "./DM_Batch1_Canfield_B";
import { DM_Batch1_Canfield_C } from "./DM_Batch1_Canfield_C";
import { DM_Batch1_Edu_A } from "./DM_Batch1_Edu_A";
import { DM_Batch1_Edu_B } from "./DM_Batch1_Edu_B";
import { DM_Batch1_Edu_C } from "./DM_Batch1_Edu_C";

// DM_Batch1_Presentation_V2 — Animated presentation with live reels
// Reels play inside phone mockups, decomposition text flows beside them
// Row-by-row reveal: AviClear → Canfield → Educational → End card
// 1500 frames (50s at 30fps), 3840x2160

const W = 3840;
const H = 2160;

// --- Helpers ---
const clamp = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };

const fadeIn = (frame: number, start: number, dur = 15) => ({
  opacity: interpolate(frame, [start, start + dur], [0, 1], clamp),
  transform: `translateY(${interpolate(frame, [start, start + dur], [30, 0], {
    ...clamp,
    easing: Easing.out(Easing.cubic),
  })}px)`,
});

const fadeOut = (frame: number, start: number, dur = 12) => ({
  opacity: interpolate(frame, [start, start + dur], [1, 0], clamp),
});

// --- Phone mockup with live reel ---
const LivePhone: React.FC<{
  children: React.ReactNode;
  phoneWidth?: number;
  phoneHeight?: number;
}> = ({ children, phoneWidth = 324, phoneHeight = 576 }) => {
  const screenW = phoneWidth - 16;
  const screenH = phoneHeight - 16;
  const scaleX = screenW / 1080;
  const scaleY = screenH / 1920;
  const scale = Math.min(scaleX, scaleY);

  return (
    <div
      style={{
        width: phoneWidth,
        height: phoneHeight,
        borderRadius: 36,
        border: `3px solid ${BRAND.midGray}55`,
        background: "#000",
        padding: 8,
        position: "relative",
        overflow: "hidden",
        boxShadow: `0 12px 48px rgba(0,0,0,0.4), 0 0 0 1px ${BRAND.midGray}22`,
        flexShrink: 0,
      }}
    >
      {/* Notch */}
      <div
        style={{
          position: "absolute",
          top: 8,
          left: "50%",
          transform: "translateX(-50%)",
          width: 90,
          height: 24,
          borderRadius: "0 0 16px 16px",
          background: "#000",
          zIndex: 10,
        }}
      />
      {/* Screen with scaled reel */}
      <div
        style={{
          width: screenW,
          height: screenH,
          borderRadius: 28,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "top left",
            width: 1080,
            height: 1920,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

// --- Decomposition text block ---
const Decomposition: React.FC<{
  frame: number;
  startFrame: number;
  name: string;
  wow: string;
  strategy: string;
  accentColor: string;
}> = ({ frame, startFrame, name, wow, strategy, accentColor }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: 14,
      maxWidth: 340,
    }}
  >
    {/* Reel name */}
    <div style={fadeIn(frame, startFrame)}>
      <div
        style={{
          fontSize: 14,
          color: accentColor,
          letterSpacing: 4,
          textTransform: "uppercase",
          fontWeight: 600,
          fontFamily: FONTS.mono,
          marginBottom: 6,
        }}
      >
        REEL
      </div>
      <div
        style={{
          fontSize: 28,
          fontWeight: 700,
          color: BRAND.cream,
          fontFamily: FONTS.heading,
          lineHeight: 1.3,
        }}
      >
        {name}
      </div>
    </div>

    {/* Wow factor */}
    <div style={fadeIn(frame, startFrame + 20)}>
      <div
        style={{
          fontSize: 14,
          color: accentColor,
          letterSpacing: 4,
          textTransform: "uppercase",
          fontWeight: 600,
          fontFamily: FONTS.mono,
          marginBottom: 6,
        }}
      >
        WOW-FAKTOR
      </div>
      <div
        style={{
          fontSize: 20,
          color: BRAND.cream,
          lineHeight: 1.5,
          borderLeft: `3px solid ${accentColor}`,
          paddingLeft: 16,
        }}
      >
        {wow}
      </div>
    </div>

    {/* Strategy */}
    <div style={fadeIn(frame, startFrame + 40)}>
      <div
        style={{
          fontSize: 14,
          color: accentColor,
          letterSpacing: 4,
          textTransform: "uppercase",
          fontWeight: 600,
          fontFamily: FONTS.mono,
          marginBottom: 6,
        }}
      >
        STRATEGIE
      </div>
      <div
        style={{
          fontSize: 18,
          color: BRAND.midGray,
          lineHeight: 1.6,
          fontStyle: "italic",
        }}
      >
        {strategy}
      </div>
    </div>
  </div>
);

// --- Row section header ---
const RowHeader: React.FC<{
  frame: number;
  startFrame: number;
  goalNumber: string;
  goalLabel: string;
  title: string;
  clientQuote: string;
  accentColor: string;
}> = ({ frame, startFrame, goalNumber, goalLabel, title, clientQuote, accentColor }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: 12,
      width: "100%",
      marginBottom: 30,
    }}
  >
    <div style={{ display: "flex", alignItems: "baseline", gap: 20, ...fadeIn(frame, startFrame) }}>
      <div
        style={{
          fontSize: 16,
          color: accentColor,
          letterSpacing: 5,
          textTransform: "uppercase",
          fontWeight: 600,
          fontFamily: FONTS.mono,
        }}
      >
        {goalNumber}
      </div>
      <div
        style={{
          fontSize: 16,
          color: BRAND.midGray,
          letterSpacing: 3,
          textTransform: "uppercase",
        }}
      >
        {goalLabel}
      </div>
    </div>
    <div
      style={{
        ...fadeIn(frame, startFrame + 8),
        fontSize: 48,
        fontWeight: 700,
        color: BRAND.cream,
        fontFamily: FONTS.heading,
        lineHeight: 1.25,
      }}
    >
      {title}
    </div>
    <div
      style={{
        ...fadeIn(frame, startFrame + 18),
        fontSize: 22,
        color: BRAND.midGray,
        fontStyle: "italic",
        lineHeight: 1.5,
        borderLeft: `3px solid ${accentColor}44`,
        paddingLeft: 16,
        maxWidth: 900,
      }}
    >
      {clientQuote}
    </div>
  </div>
);

// --- Data: decomposition per reel ---
const AVICLEAR_REELS = [
  {
    name: "Regionale Exklusivität",
    wow: "Animierte Karte zeigt Bonn/Köln/Düsseldorf — glühender Pin auf Bonn. Sofort klar: nur hier.",
    strategy: "Monopolstellung als Hook. Patienten suchen 'AviClear Bonn' — wir sind das einzige Ergebnis.",
  },
  {
    name: "Hautquerschnitt",
    wow: "Laserstrahl durchdringt Schichten, trifft Talgdrüse. Wissenschaft wird visuell greifbar.",
    strategy: "Bildung schafft Vertrauen. Wer den Mechanismus versteht, zweifelt weniger am Preis.",
  },
  {
    name: "Behandlungsweg",
    wow: "Vertikale Timeline zeichnet sich Schritt für Schritt. 3 Sitzungen — keine Medikamente.",
    strategy: "Transparenz senkt Hemmschwelle. Der Patient weiß genau, was ihn erwartet.",
  },
];

const CANFIELD_REELS = [
  {
    name: "Tech-Reveal",
    wow: "Typewriter-Text, dann Scan-Linie fegt über Grid mit Koordinaten. Futuristisch, präzise.",
    strategy: "Wow-Effekt positioniert Screening als Premium-Erlebnis, nicht als Kassentermin.",
  },
  {
    name: "Präzisionsdaten",
    wow: "Zwei Spalten: Klassisch vs. IntelliStudio. Bars zeigen 90 Min → 2 Min. Visueller Knockout.",
    strategy: "Datenvergleich macht den Wechsel zur Technologie rational nachvollziehbar.",
  },
  {
    name: "Digitaler Zwilling",
    wow: "Körpersilhouette mit Muttermalen. Eines pulsiert rot — 0,3mm Veränderung erkannt.",
    strategy: "Angst vor dem Unsichtbaren. Wer das sieht, bucht einen Termin.",
  },
];

const EDU_REELS = [
  {
    name: "Akne-Mythen",
    wow: "Mythos erscheint, Durchstreichung schlägt zu, Fakt erscheint in Teal. Rhythmisch, merkbar.",
    strategy: "Aufklärung → Brücke zu Laserbehandlung. Kein Markennamen-Push — reines Teaching.",
  },
  {
    name: "Rosacea-Auslöser",
    wow: "5 Trigger staffeln sich ein mit farbigen Bullets. Warm → klinisch kühl als Farbübergang.",
    strategy: "Trigger-Wissen zeigt Empathie. Bridge zu Gefäßlaser zeigt Kompetenz.",
  },
  {
    name: "Hautkrebs ABCDE",
    wow: "Jeder Buchstabe springt groß rein, Teal-Gradient-Spektrum. Medizinisch ernst, visuell stark.",
    strategy: "Vorsorge-Autorität → Brücke zu Body Mapping. Stärkstes Credibility-Signal.",
  },
];

export const DM_Batch1_Presentation_V2: React.FC = () => {
  const frame = useCurrentFrame();

  // --- Phase timing ---
  // 0-60: Title card
  // 60-510: Row 1 (AviClear) — 15s
  // 510-540: Transition
  // 540-990: Row 2 (Canfield) — 15s
  // 990-1020: Transition
  // 1020-1410: Row 3 (Edu) — 13s
  // 1410-1500: End card

  const phase =
    frame < 60
      ? "title"
      : frame < 510
      ? "row1"
      : frame < 540
      ? "t1"
      : frame < 990
      ? "row2"
      : frame < 1020
      ? "t2"
      : frame < 1410
      ? "row3"
      : "end";

  const row1Frame = frame - 60;
  const row2Frame = frame - 540;
  const row3Frame = frame - 1020;

  // Phase visibility
  const titleOpacity = phase === "title" ? 1 : interpolate(frame, [55, 65], [1, 0], clamp);
  const row1Opacity =
    phase === "row1"
      ? interpolate(frame, [60, 75], [0, 1], clamp)
      : phase === "t1"
      ? interpolate(frame, [510, 530], [1, 0], clamp)
      : 0;
  const row2Opacity =
    phase === "row2"
      ? interpolate(frame, [540, 555], [0, 1], clamp)
      : phase === "t2"
      ? interpolate(frame, [990, 1010], [1, 0], clamp)
      : 0;
  const row3Opacity =
    phase === "row3"
      ? interpolate(frame, [1020, 1035], [0, 1], clamp)
      : phase === "end"
      ? interpolate(frame, [1410, 1425], [1, 0], clamp)
      : 0;
  const endOpacity = phase === "end" ? interpolate(frame, [1415, 1435], [0, 1], clamp) : 0;

  const PHONE_W = 324;
  const PHONE_H = 576;

  return (
    <div
      style={{
        width: W,
        height: H,
        background: BRAND.deepNavy,
        fontFamily: FONTS.body,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(${BRAND.midGray}06 1px, transparent 1px), linear-gradient(90deg, ${BRAND.midGray}06 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          pointerEvents: "none",
        }}
      />

      {/* ═══ TITLE CARD ═══ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          opacity: titleOpacity,
          gap: 24,
        }}
      >
        <div
          style={{
            ...fadeIn(frame, 0),
            fontSize: 18,
            color: BRAND.teal,
            letterSpacing: 8,
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          DermaMedicum — Instagram Reels
        </div>
        <div
          style={{
            ...fadeIn(frame, 10),
            fontSize: 72,
            fontWeight: 700,
            color: BRAND.cream,
            fontFamily: FONTS.heading,
            textAlign: "center",
            lineHeight: 1.25,
          }}
        >
          Content-Strategie Batch 1
        </div>
        <div
          style={{
            ...fadeIn(frame, 25),
            fontSize: 28,
            color: BRAND.midGray,
          }}
        >
          9 Reels — 3 Ziele — 1 Positionierung
        </div>
        <div
          style={{
            ...fadeIn(frame, 35),
            display: "flex",
            gap: 20,
            marginTop: 16,
          }}
        >
          {["HWG-konform", "Deutsch", "1080×1920", "@dermamedicum"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "8px 20px",
                border: `1px solid ${BRAND.midGray}33`,
                borderRadius: 8,
                fontSize: 18,
                color: BRAND.midGray,
                fontFamily: FONTS.mono,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>

      {/* ═══ ROW 1: AVICLEAR ═══ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: row1Opacity,
          padding: "50px 80px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <RowHeader
          frame={row1Frame}
          startFrame={0}
          goalNumber="ZIEL 01"
          goalLabel="Premiumpatient"
          title="Patientenbasis verschieben"
          clientQuote={`"Ich will Patienten anziehen, die bereit sind, mehr für Behandlungen zu zahlen — AviClear ist der einzige Laser in der Region."`}
          accentColor={BRAND.teal}
        />

        {/* Phones + decomposition */}
        <div
          style={{
            display: "flex",
            gap: 50,
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {AVICLEAR_REELS.map((reel, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 28,
                alignItems: "flex-start",
                ...fadeIn(row1Frame, 25 + i * 30),
              }}
            >
              <Sequence from={60} layout="none">
                <LivePhone phoneWidth={PHONE_W} phoneHeight={PHONE_H}>
                  {i === 0 && <DM_Batch1_AviClear_A />}
                  {i === 1 && <DM_Batch1_AviClear_B />}
                  {i === 2 && <DM_Batch1_AviClear_C />}
                </LivePhone>
              </Sequence>
              <Decomposition
                frame={row1Frame}
                startFrame={60 + i * 40}
                name={reel.name}
                wow={reel.wow}
                strategy={reel.strategy}
                accentColor={BRAND.teal}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ═══ ROW 2: CANFIELD ═══ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: row2Opacity,
          padding: "50px 80px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <RowHeader
          frame={row2Frame}
          startFrame={0}
          goalNumber="ZIEL 02"
          goalLabel="Technologie"
          title="Vertrauen durch Präzision"
          clientQuote={`"Ich will Patienten für Body Mapping und Vectra-Fotos anziehen — IntelliStudio und Vectra von Canfield."`}
          accentColor={BRAND.sage}
        />

        <div
          style={{
            display: "flex",
            gap: 50,
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {CANFIELD_REELS.map((reel, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 28,
                alignItems: "flex-start",
                ...fadeIn(row2Frame, 25 + i * 30),
              }}
            >
              <Sequence from={540} layout="none">
                <LivePhone phoneWidth={PHONE_W} phoneHeight={PHONE_H}>
                  {i === 0 && <DM_Batch1_Canfield_A />}
                  {i === 1 && <DM_Batch1_Canfield_B />}
                  {i === 2 && <DM_Batch1_Canfield_C />}
                </LivePhone>
              </Sequence>
              <Decomposition
                frame={row2Frame}
                startFrame={60 + i * 40}
                name={reel.name}
                wow={reel.wow}
                strategy={reel.strategy}
                accentColor={BRAND.sage}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ═══ ROW 3: EDUCATIONAL ═══ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: row3Opacity,
          padding: "50px 80px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <RowHeader
          frame={row3Frame}
          startFrame={0}
          goalNumber="ZIEL 03"
          goalLabel="Glaubwürdigkeit"
          title="Medizinische Kompetenz zeigen"
          clientQuote={`"Ich will nicht als rein kosmetische Praxis wahrgenommen werden — auch medizinische Inhalte über Akne, Rosacea, Hautkrebs."`}
          accentColor={BRAND.warmBrown}
        />

        <div
          style={{
            display: "flex",
            gap: 50,
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {EDU_REELS.map((reel, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 28,
                alignItems: "flex-start",
                ...fadeIn(row3Frame, 25 + i * 30),
              }}
            >
              <Sequence from={1020} layout="none">
                <LivePhone phoneWidth={PHONE_W} phoneHeight={PHONE_H}>
                  {i === 0 && <DM_Batch1_Edu_A />}
                  {i === 1 && <DM_Batch1_Edu_B />}
                  {i === 2 && <DM_Batch1_Edu_C />}
                </LivePhone>
              </Sequence>
              <Decomposition
                frame={row3Frame}
                startFrame={60 + i * 40}
                name={reel.name}
                wow={reel.wow}
                strategy={reel.strategy}
                accentColor={BRAND.warmBrown}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ═══ END CARD ═══ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: endOpacity,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 30,
        }}
      >
        <div
          style={{
            ...fadeIn(frame, 1420),
            fontSize: 56,
            fontWeight: 700,
            color: BRAND.cream,
            fontFamily: FONTS.heading,
            textAlign: "center",
            lineHeight: 1.3,
          }}
        >
          3 Ziele. 9 Reels. 1 Positionierung.
        </div>
        <div
          style={{
            ...fadeIn(frame, 1440),
            fontSize: 28,
            color: BRAND.midGray,
            textAlign: "center",
            lineHeight: 1.6,
          }}
        >
          Medizinische Kompetenz als Fundament.{"\n"}
          Technologie als Differenzierung.{"\n"}
          AviClear als Monopol.
        </div>
        <div
          style={{
            ...fadeIn(frame, 1465),
            marginTop: 20,
            padding: "16px 48px",
            border: `2px solid ${BRAND.teal}`,
            borderRadius: 8,
            fontSize: 24,
            color: BRAND.teal,
            letterSpacing: 8,
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          DermaMedicum · Bonn
        </div>
        <div
          style={{
            ...fadeIn(frame, 1475),
            display: "flex",
            gap: 16,
            marginTop: 16,
          }}
        >
          {["DE", "EN", "ES", "CA"].map((lang) => (
            <div
              key={lang}
              style={{
                padding: "6px 16px",
                border: `1px solid ${BRAND.midGray}33`,
                borderRadius: 4,
                fontSize: 16,
                color: BRAND.midGray,
                fontFamily: FONTS.mono,
              }}
            >
              {lang}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
