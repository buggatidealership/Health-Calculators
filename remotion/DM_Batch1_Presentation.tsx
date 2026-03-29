import React from "react";
import { Img, staticFile } from "remotion";
import { BRAND, FONTS } from "./derma-brand";

// DM_Batch1_Presentation — Client presentation board
// 9 reels in phone mockups, organized by client's stated business intent
// Single still frame (1 frame), landscape 3840x2160 for screen presentation
// Every label, grouping, and annotation derived from the client's own words

// Phone mockup component — simplified iPhone frame
const PhoneMockup: React.FC<{
  imageSrc: string;
  label: string;
  sublabel: string;
  accentColor: string;
}> = ({ imageSrc, label, sublabel, accentColor }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 16,
    }}
  >
    {/* Phone frame */}
    <div
      style={{
        width: 270,
        height: 480,
        borderRadius: 32,
        border: `3px solid ${BRAND.midGray}44`,
        background: "#000",
        padding: 6,
        position: "relative",
        overflow: "hidden",
        boxShadow: `0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px ${BRAND.midGray}22`,
      }}
    >
      {/* Notch */}
      <div
        style={{
          position: "absolute",
          top: 6,
          left: "50%",
          transform: "translateX(-50%)",
          width: 80,
          height: 22,
          borderRadius: "0 0 14px 14px",
          background: "#000",
          zIndex: 10,
        }}
      />
      {/* Screen content */}
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 26,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Img
          src={staticFile(imageSrc)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
    {/* Label */}
    <div
      style={{
        textAlign: "center",
        maxWidth: 270,
      }}
    >
      <div
        style={{
          fontSize: 20,
          fontWeight: 700,
          color: BRAND.cream,
          fontFamily: FONTS.heading,
          lineHeight: 1.3,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: 15,
          color: accentColor,
          marginTop: 4,
          fontFamily: FONTS.body,
          lineHeight: 1.4,
        }}
      >
        {sublabel}
      </div>
    </div>
  </div>
);

// Section header — client's intent as the organizing principle
const SectionHeader: React.FC<{
  title: string;
  subtitle: string;
  clientQuote: string;
  accentColor: string;
}> = ({ title, subtitle, clientQuote, accentColor }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: 8,
      minWidth: 320,
      maxWidth: 380,
    }}
  >
    <div
      style={{
        fontSize: 14,
        color: accentColor,
        letterSpacing: 4,
        textTransform: "uppercase",
        fontWeight: 600,
        fontFamily: FONTS.body,
      }}
    >
      {subtitle}
    </div>
    <div
      style={{
        fontSize: 36,
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
        fontSize: 16,
        color: BRAND.midGray,
        fontStyle: "italic",
        lineHeight: 1.5,
        marginTop: 8,
        borderLeft: `3px solid ${accentColor}44`,
        paddingLeft: 14,
      }}
    >
      {clientQuote}
    </div>
  </div>
);

export const DM_Batch1_Presentation: React.FC = () => {
  return (
    <div
      style={{
        width: 3840,
        height: 2160,
        background: BRAND.deepNavy,
        fontFamily: FONTS.body,
        position: "relative",
        overflow: "hidden",
        padding: "60px 80px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Subtle grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(${BRAND.midGray}08 1px, transparent 1px), linear-gradient(90deg, ${BRAND.midGray}08 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          pointerEvents: "none",
        }}
      />

      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 50,
          position: "relative",
          zIndex: 1,
        }}
      >
        <div>
          <div
            style={{
              fontSize: 18,
              color: BRAND.teal,
              letterSpacing: 6,
              textTransform: "uppercase",
              fontWeight: 600,
              marginBottom: 12,
            }}
          >
            Instagram Reels — Batch 1
          </div>
          <div
            style={{
              fontSize: 52,
              fontWeight: 700,
              color: BRAND.cream,
              fontFamily: FONTS.heading,
              lineHeight: 1.2,
            }}
          >
            DermaMedicum Content-Strategie
          </div>
          <div
            style={{
              fontSize: 24,
              color: BRAND.midGray,
              marginTop: 8,
            }}
          >
            9 Reels — 3 Ziele — 1 Positionierung
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 8,
          }}
        >
          <div
            style={{
              fontSize: 16,
              color: BRAND.midGray,
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            @dermamedicum
          </div>
          <div
            style={{
              fontSize: 16,
              color: BRAND.midGray,
            }}
          >
            3x pro Woche · HWG-konform · Deutsch
          </div>
          <div
            style={{
              display: "flex",
              gap: 12,
              marginTop: 8,
            }}
          >
            {["1080×1920", "9:16", "10–13s"].map((spec) => (
              <div
                key={spec}
                style={{
                  padding: "6px 16px",
                  border: `1px solid ${BRAND.midGray}33`,
                  borderRadius: 6,
                  fontSize: 14,
                  color: BRAND.midGray,
                  fontFamily: FONTS.mono,
                }}
              >
                {spec}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        style={{
          width: "100%",
          height: 1,
          background: `linear-gradient(90deg, ${BRAND.teal}44, ${BRAND.midGray}22, transparent)`,
          marginBottom: 40,
        }}
      />

      {/* Three rows — one per business intent */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 40,
          flex: 1,
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ROW 1: Premium Patient Acquisition — AviClear */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 60,
          }}
        >
          <SectionHeader
            subtitle="Ziel 1 · Premiumpatient"
            title={"Patientenbasis\nverschieben"}

            clientQuote={
              "\"Ich will Patienten anziehen, die bereit sind, mehr für Behandlungen zu zahlen.\""
            }
            accentColor={BRAND.teal}
          />
          <div style={{ display: "flex", gap: 40, marginLeft: 40 }}>
            <PhoneMockup
              imageSrc="batch1-frames/aviclear-a.png"
              label="Regionale Exklusivität"
              sublabel="Die einzige Praxis in der Region"
              accentColor={BRAND.teal}
            />
            <PhoneMockup
              imageSrc="batch1-frames/aviclear-b.png"
              label="Wissenschaft"
              sublabel="1726nm Laser · Talgdrüse · Mechanismus"
              accentColor={BRAND.teal}
            />
            <PhoneMockup
              imageSrc="batch1-frames/aviclear-c.png"
              label="Behandlungsweg"
              sublabel="3 Sitzungen · Kein Medikament"
              accentColor={BRAND.teal}
            />
          </div>

          {/* Business outcome */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              marginLeft: "auto",
              padding: "20px 28px",
              border: `1px solid ${BRAND.teal}33`,
              borderRadius: 12,
              maxWidth: 280,
            }}
          >
            <div
              style={{
                fontSize: 14,
                color: BRAND.teal,
                letterSpacing: 3,
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Ergebnis
            </div>
            <div
              style={{
                fontSize: 18,
                color: BRAND.cream,
                lineHeight: 1.5,
              }}
            >
              Patienten mit Akne finden DermaMedicum als einzige AviClear-Praxis in Bonn/Köln/Düsseldorf.
            </div>
          </div>
        </div>

        {/* Separator */}
        <div
          style={{
            width: "100%",
            height: 1,
            background: `${BRAND.midGray}15`,
          }}
        />

        {/* ROW 2: Technology Trust — Canfield */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 60,
          }}
        >
          <SectionHeader
            subtitle="Ziel 2 · Technologie"
            title={"Vertrauen durch\nPräzision"}
            clientQuote={
              "\"Ich will auch Patienten für Body Mapping und Vectra-Fotos anziehen.\""
            }
            accentColor={BRAND.sage}
          />
          <div style={{ display: "flex", gap: 40, marginLeft: 40 }}>
            <PhoneMockup
              imageSrc="batch1-frames/canfield-a.png"
              label="Tech-Reveal"
              sublabel="92 Kameras · 3 Sekunden · Kartierung"
              accentColor={BRAND.sage}
            />
            <PhoneMockup
              imageSrc="batch1-frames/canfield-b.png"
              label="Präzisionsdaten"
              sublabel="Klassisch vs. IntelliStudio"
              accentColor={BRAND.sage}
            />
            <PhoneMockup
              imageSrc="batch1-frames/canfield-c.png"
              label="Digitaler Zwilling"
              sublabel="Veränderungserkennung über Jahre"
              accentColor={BRAND.sage}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              marginLeft: "auto",
              padding: "20px 28px",
              border: `1px solid ${BRAND.sage}33`,
              borderRadius: 12,
              maxWidth: 280,
            }}
          >
            <div
              style={{
                fontSize: 14,
                color: BRAND.sage,
                letterSpacing: 3,
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Ergebnis
            </div>
            <div
              style={{
                fontSize: 18,
                color: BRAND.cream,
                lineHeight: 1.5,
              }}
            >
              Hautkrebsvorsorge wird als hochmoderne Technologie wahrgenommen — nicht als Routinetermin.
            </div>
          </div>
        </div>

        {/* Separator */}
        <div
          style={{
            width: "100%",
            height: 1,
            background: `${BRAND.midGray}15`,
          }}
        />

        {/* ROW 3: Medical Credibility — Educational */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 60,
          }}
        >
          <SectionHeader
            subtitle="Ziel 3 · Glaubwürdigkeit"
            title={"Medizinische\nKompetenz zeigen"}
            clientQuote={
              "\"Ich will nicht als rein kosmetische Praxis wahrgenommen werden.\""
            }
            accentColor={BRAND.warmBrown}
          />
          <div style={{ display: "flex", gap: 40, marginLeft: 40 }}>
            <PhoneMockup
              imageSrc="batch1-frames/edu-a.png"
              label="Akne-Mythen"
              sublabel={"Aufklärung → Brücke zu Laserbehandlung"}
              accentColor={BRAND.warmBrown}
            />
            <PhoneMockup
              imageSrc="batch1-frames/edu-b.png"
              label="Rosacea-Auslöser"
              sublabel={"Trigger-Aufklärung → Gefäßlaser"}
              accentColor={BRAND.warmBrown}
            />
            <PhoneMockup
              imageSrc="batch1-frames/edu-c.png"
              label="Hautkrebs-ABCDE"
              sublabel={"Vorsorge-Aufklärung → Body Mapping"}
              accentColor={BRAND.warmBrown}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              marginLeft: "auto",
              padding: "20px 28px",
              border: `1px solid ${BRAND.warmBrown}33`,
              borderRadius: 12,
              maxWidth: 280,
            }}
          >
            <div
              style={{
                fontSize: 14,
                color: BRAND.warmBrown,
                letterSpacing: 3,
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Ergebnis
            </div>
            <div
              style={{
                fontSize: 18,
                color: BRAND.cream,
                lineHeight: 1.5,
              }}
            >
              Medizinische Autorität verankert die Praxis als Fachpraxis — ästhetische Reels landen auf diesem Fundament.
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 30,
          paddingTop: 20,
          borderTop: `1px solid ${BRAND.midGray}15`,
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            fontSize: 16,
            color: BRAND.midGray,
          }}
        >
          Alle Inhalte HWG-konform · Keine Vorher/Nachher-Bilder · Keine Rx-Markennamen · Keine Preisnennung
        </div>
        <div
          style={{
            display: "flex",
            gap: 24,
            alignItems: "center",
          }}
        >
          {["DE", "EN", "ES", "CA"].map((lang) => (
            <div
              key={lang}
              style={{
                padding: "4px 12px",
                border: `1px solid ${BRAND.midGray}33`,
                borderRadius: 4,
                fontSize: 14,
                color: BRAND.midGray,
                fontFamily: FONTS.mono,
              }}
            >
              {lang}
            </div>
          ))}
          <div
            style={{
              fontSize: 16,
              color: BRAND.midGray,
              marginLeft: 12,
            }}
          >
            Beratung in 4 Sprachen
          </div>
        </div>
      </div>
    </div>
  );
};
