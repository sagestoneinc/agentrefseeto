import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        brand: {
          DEFAULT: "#A00000",
          dark: "#7A0000",
        },
        ink: "#111111",
        soft: "#F7F7F7",
        border: "hsl(var(--border))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Playfair Display", "serif"],
      },
      boxShadow: {
        luxe: "0 32px 80px rgba(17, 17, 17, 0.14)",
        card: "0 24px 60px rgba(17, 17, 17, 0.08)",
      },
      borderRadius: {
        xl: "1.5rem",
        "2xl": "2rem",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top right, rgba(160, 0, 0, 0.18), transparent 55%)",
        "diagonal-accent":
          "linear-gradient(135deg, rgba(160,0,0,0.9), rgba(122,0,0,0.95))",
      },
    },
  },
  plugins: [animate],
};

export default config;
