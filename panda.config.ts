import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    tokens: {
      colors: {
        primary: { value: "#000" },
        secondary: { value: "#facc15" },
        "main-bg": { value: "#374151" },
      },
      fonts: {
        fira: { value: "var(--font-fira-code), Melo, monospace" },
        mono: { value: "var(--font-mono-sans), sans-serif" },
      },
    },
    extend: {},
  },
  globalCss: {
    "html, body": {
      margin: 0,
      padding: 0,
      background: "main-bg",
    },
  },

  jsxFramework: "react",
  // The output directory for your css system
  outdir: "styled-system",
});
