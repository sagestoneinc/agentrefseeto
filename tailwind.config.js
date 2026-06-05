/** @type {import('tailwindcss').Config} */
module.exports = {
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
          DEFAULT: "#15324A",
          dark: "#0D2233",
        },
        shell: "#F7F2E9",
        copper: "#A46A43",
        ink: "#111111",
        soft: "#F4EEE5",
        border: "hsl(var(--border))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "sans-serif"],
        display: ["Fraunces", "serif"],
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
          "radial-gradient(circle at top right, rgba(21, 50, 74, 0.18), transparent 55%)",
        "diagonal-accent":
          "linear-gradient(135deg, rgba(21,50,74,0.96), rgba(164,106,67,0.9))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
