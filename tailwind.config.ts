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
        // PRD palette
        ivory:   "#F9F6F0",   // Warm Sand Light — light section backgrounds
        charcoal:"#0D0E10",   // Deep Obsidian Black — dark backgrounds, footer
        bronze:  "#C5A880",   // Luxury Muted Gold — accent, buttons, borders
        sand:    "#E5DFD5",   // Border Light Subtle — dividers on light sections
        stone:   "#8A8A8A",   // Text Secondary Muted — sub-labels, tags
        smoke:   "#F9F6F0",   // alias of ivory (kept for compatibility)
        "dark-border": "#222428", // grid lines on dark sections
      },
      fontFamily: {
        serif:     ["var(--font-cormorant)", '"Iowan Old Style"', "Georgia", "serif"],
        sans:      ["var(--font-inter)", '"Avenir Next"', "Avenir", "Helvetica", "Arial", "sans-serif"],
        signature: ["var(--font-signature)", "cursive"],
      },
      boxShadow: {
        line:   "inset 0 0 0 1px rgba(197,168,128,0.12)",
        bronze: "0 24px 80px rgba(197,168,128,0.20)",
      },
    },
  },
  plugins: [],
};

export default config;
