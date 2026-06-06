import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2dd4bf",
        secondary: "#0f172a",
      },
    },
  },
  plugins: [],
};

export default config;
