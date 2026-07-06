import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Padlok — Secure Escrow Payments",
    short_name: "Padlok",
    description:
      "Peer-to-peer escrow app for buying and selling safely in Ghana.",
    start_url: "/",
    display: "standalone",
    background_color: "#060C18",
    theme_color: "#FF6200",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
