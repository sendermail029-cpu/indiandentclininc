import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Indian Dental & Cosmetology Clinic, Vijayawada",
    short_name: "Indian Dental",
    description: "Dental, skin and hair care in Vijayawada since 2012.",
    start_url: "/",
    display: "standalone",
    background_color: "#FBF6EF",
    theme_color: "#C1652E",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
