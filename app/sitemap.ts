import { MetadataRoute } from "next";

// ════════════════════════════════════════════════════════════════════════════════
// 📝 PERSONALIZACIÓN - EDITAR AQUÍ
// ════════════════════════════════════════════════════════════════════════════════
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://tumarca.com";
// ════════════════════════════════════════════════════════════════════════════════

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // Agrega más páginas aquí si las creas:
    // {
    //   url: `${SITE_URL}/servicios`,
    //   lastModified: new Date(),
    //   changeFrequency: "monthly",
    //   priority: 0.8,
    // },
  ];
}
