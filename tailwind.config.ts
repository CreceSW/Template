import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        // ════════════════════════════════════════════════════════════
        // 🎨 COLORES DE MARCA - CAMBIAR AQUÍ PARA PERSONALIZAR TODO
        // ════════════════════════════════════════════════════════════
        // Opciones disponibles de Tailwind:
        // slate, gray, zinc, neutral, stone (grises)
        // red, orange, amber, yellow (cálidos)
        // lime, green, emerald, teal (verdes)
        // cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
        // ════════════════════════════════════════════════════════════

        primary: colors.blue,      // ← CAMBIAR AQUÍ (ej: colors.emerald)
        secondary: colors.indigo,  // ← Color secundario/acentos
      },
    },
  },
  plugins: [],
};

export default config;
