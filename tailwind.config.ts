import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        naya: {
          ivory: "#FFFDF9",
          shell: "#FFF8F2",
          rose: "#D88FA4",
          roseDeep: "#B66A82",
          mauve: "#8C6A7B",
          ink: "#2F2430",
          line: "#F0E7DF",
          success: "#4F8A68",
          caution: "#A9752D",
          urgent: "#A94040"
        }
      },
      boxShadow: {
        naya: "0 12px 30px rgba(52, 29, 43, 0.14)",
        soft: "0 6px 20px rgba(52, 29, 43, 0.08)"
      },
      borderRadius: {
        naya: "1.15rem"
      }
    }
  },
  plugins: []
};

export default config;
