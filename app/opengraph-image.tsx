import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Padlok — Secure Escrow Payments for Ghana";

export default function OpengraphImage() {
  const logoData = readFileSync(join(process.cwd(), "public", "app_logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(1200px 600px at 100% -10%, rgba(255,98,0,0.45), transparent 60%), #060C18",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 680 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              color: "#FF6200",
              fontSize: 28,
              fontWeight: 800,
              letterSpacing: -0.5,
              marginBottom: 28,
            }}
          >
            PADLOK
          </div>
          <div
            style={{
              display: "flex",
              color: "#fff",
              fontSize: 60,
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: -1.5,
            }}
          >
            Buy and sell online without getting scammed.
          </div>
          <div
            style={{
              display: "flex",
              color: "rgba(255,255,255,0.65)",
              fontSize: 26,
              marginTop: 24,
            }}
          >
            Escrow-protected payments for Ghana
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: 260,
            height: 260,
            borderRadius: 40,
            background: "#fff",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
          }}
        >
          <img src={logoSrc} width={190} height={190} alt="" />
        </div>
      </div>
    ),
    { ...size }
  );
}
