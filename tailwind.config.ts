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
        ivory: "#F4EFE7",
        charcoal: "#1C1C1A",
        bronze: "#B8925F",
        sand: "#D8C6AD",
        stone: "#B8A58C",
        smoke: "#EEE5D8",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Iowan Old Style"', "Georgia", "serif"],
        sans: ['"Inter"', '"Avenir Next"', "Avenir", "Helvetica", "Arial", "sans-serif"],
      },
      boxShadow: {
        line: "inset 0 0 0 1px rgba(28, 28, 26, 0.10)",
        bronze: "0 24px 80px rgba(184, 146, 95, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
