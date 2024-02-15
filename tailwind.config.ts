const { nextui } = require("@nextui-org/react");
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "iconButton": "#249674",
        "lightBlue": "#79a5e9",
        "iconButtonFull": "#DE4B64"
      },
      margin: {
        small: "3px"
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
