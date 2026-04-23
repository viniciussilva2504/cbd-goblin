import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "CBD Goblin — Bem-estar Natural em Vila Nova de Gaia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1a2e1a 0%, #0f1f0f 50%, #1c1c1c 100%)",
          fontFamily: "serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "800px",
            height: "400px",
            background:
              "radial-gradient(ellipse at center, rgba(74,111,74,0.25) 0%, transparent 70%)",
          }}
        />

        {/* Leaf icon (SVG inline) */}
        <svg
          width="56"
          height="56"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#c9a84c"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ marginBottom: "16px" }}
        >
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>

        {/* Brand name */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: "700",
            color: "#f5f0e8",
            letterSpacing: "-1px",
            lineHeight: 1,
            marginBottom: "12px",
          }}
        >
          CBD Goblin
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "26px",
            color: "#c9a84c",
            fontWeight: "400",
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginBottom: "40px",
            fontFamily: "sans-serif",
          }}
        >
          Bem-estar Natural
        </div>

        {/* Divider */}
        <div
          style={{
            width: "80px",
            height: "1px",
            background: "rgba(201,168,76,0.5)",
            marginBottom: "32px",
          }}
        />

        {/* Pills */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            justifyContent: "center",
            maxWidth: "800px",
            fontFamily: "sans-serif",
          }}
        >
          {["Óleos CBD", "Cosméticos", "Pomadas", "Suplementos"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "8px 18px",
                borderRadius: "999px",
                border: "1px solid rgba(201,168,76,0.35)",
                background: "rgba(201,168,76,0.08)",
                color: "#d4b87a",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Location badge */}
        <div
          style={{
            position: "absolute",
            bottom: "36px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            color: "rgba(245,240,232,0.5)",
            fontSize: "15px",
            fontFamily: "sans-serif",
          }}
        >
          📍 Vila d'Este · Vila Nova de Gaia · Portugal
        </div>
      </div>
    ),
    { ...size }
  );
}
