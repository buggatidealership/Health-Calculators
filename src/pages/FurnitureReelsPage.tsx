import React from "react";

const FurnitureReelsPage: React.FC = () => {
  return (
    <div style={{
      background: "#0f0d0a",
      color: "#F5EDE0",
      fontFamily: "'Inter', -apple-system, sans-serif",
      minHeight: "100vh",
    }}>
      {/* Header */}
      <div style={{ textAlign: "center", padding: "60px 24px 40px" }}>
        <h1 style={{
          fontFamily: "'Georgia', 'Times New Roman', serif",
          fontSize: "clamp(28px, 5vw, 48px)",
          fontWeight: 400,
          color: "#F5EDE0",
          letterSpacing: "0.02em",
        }}>
          Mid-Century Modern Tables
        </h1>
        <div style={{
          fontSize: 16,
          color: "#D4915E",
          letterSpacing: 4,
          textTransform: "uppercase" as const,
          marginTop: 12,
          fontWeight: 300,
        }}>
          Instagram Reels — Custom Furniture Maker
        </div>
        <div style={{
          width: 80, height: 1.5,
          background: "#C9A84C",
          margin: "28px auto 0",
          opacity: 0.5,
        }} />
      </div>

      {/* Video Grid */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: 32,
        padding: "20px 24px 80px",
        flexWrap: "wrap" as const,
        maxWidth: 1200,
        margin: "0 auto",
      }}>
        {[
          { src: "/videos/furniture-barn-door.mp4", num: "Reel 01", title: "The Origin Story", hook: '"This table was a barn door in 1947"' },
          { src: "/videos/furniture-87-hours.mp4", num: "Reel 02", title: "The Process", hook: '"87 hours. One table."' },
          { src: "/videos/furniture-no-two.mp4", num: "Reel 03", title: "The Fingerprint", hook: '"No two tables. Ever."' },
        ].map((reel, i) => (
          <div key={i} style={{
            display: "flex",
            flexDirection: "column" as const,
            alignItems: "center",
            gap: 20,
          }}>
            <video
              src={reel.src}
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: 300,
                height: 533,
                objectFit: "cover" as const,
                borderRadius: 16,
                border: "1px solid rgba(92, 58, 33, 0.19)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                background: "#1A1410",
              }}
            />
            <div style={{ textAlign: "center" }}>
              <div style={{
                fontSize: 13,
                color: "#C9A84C",
                letterSpacing: 4,
                textTransform: "uppercase" as const,
                fontWeight: 500,
              }}>
                {reel.num}
              </div>
              <div style={{
                fontFamily: "'Georgia', 'Times New Roman', serif",
                fontSize: 20,
                color: "#F5EDE0",
                marginTop: 6,
              }}>
                {reel.title}
              </div>
              <div style={{
                fontSize: 14,
                color: "#D4915E",
                marginTop: 4,
                fontStyle: "italic",
              }}>
                {reel.hook}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FurnitureReelsPage;
