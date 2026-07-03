import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ELSOC — Electrical Engineering Society, NIT Hamirpur",
    short_name: "ELSOC",
    description:
      "ELSOC empowers aspiring engineers through innovation, collaboration and excellence at NIT Hamirpur.",
    start_url: "/",
    display: "standalone",
    background_color: "#04070f",
    theme_color: "#04070f",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
