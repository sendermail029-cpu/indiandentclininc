import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#14151B",
          soft: "#22232B",
          muted: "#9A9280",
        },
        porcelain: {
          DEFAULT: "#F7F3EA",
          dim: "#EFE7D5",
        },
        coral: {
          DEFAULT: "#C1652E",
          dark: "#9C4F22",
        },
        gold: {
          DEFAULT: "#8C6D3A",
          light: "#C9AB70",
        },
        sage: {
          DEFAULT: "#E7DFCE",
          dark: "#C9BBA0",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        accent: ["var(--font-instrument-serif)", "serif"],
        sans: ["var(--font-manrope)", "sans-serif"],
        hero: ["var(--font-outfit)", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 16s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
