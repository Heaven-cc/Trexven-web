import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: {
      midnight: "#0B1220", navy: "#142238",
      signal: "rgb(var(--accent) / <alpha-value>)", cloud: "rgb(var(--canvas) / <alpha-value>)",
      surface: "rgb(var(--surface) / <alpha-value>)", ink: "rgb(var(--ink) / <alpha-value>)",
      muted: "rgb(var(--muted) / <alpha-value>)", line: "rgb(var(--line) / <alpha-value>)",
      wash: "rgb(var(--wash) / <alpha-value>)",
    },
    fontFamily: { sans: ["Arial", "Helvetica", "sans-serif"] },
  } },
  plugins: [],
} satisfies Config;
