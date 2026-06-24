import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory:   "rgb(var(--tw-ivory) / <alpha-value>)",   // Warm Ivory — flips on desktop
        charcoal:"rgb(var(--tw-charcoal) / <alpha-value>)",// Deep Charcoal — flips on desktop
        bronze:  "#B8925F",   // Muted Bronze — buttons / accents
        sand:    "#D8C6AD",   // Soft Sand — cards / overlays
        stone:   "#B8A58C",   // Stone Beige — dividers / secondary text
        smoke:   "#F4EFE7",   // alias of ivory (kept for compatibility)
        "dark-border": "#2A2A27", // grid lines on dark sections
      },
      fontFamily: {
        serif:     ["var(--font-cormorant)", '"Iowan Old Style"', "Georgia", "serif"],
        sans:      ["var(--font-inter)", '"Avenir Next"', "Avenir", "Helvetica", "Arial", "sans-serif"],
        signature: ["var(--font-signature)", "cursive"],
      },
      boxShadow: {
        line:   "inset 0 0 0 1px rgba(184,146,95,0.12)",
        bronze: "0 24px 80px rgba(184,146,95,0.20)",
      },
    },
  },
  plugins: [],
};

export default config;
