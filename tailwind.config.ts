import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "header1-gradient":
          "linear-gradient(to bottom, #ccff33 62%, rgba(255, 255, 255, 0) 100%)",
        "header2-gradient":
          "linear-gradient(to bottom, #806f5d 62%, rgba(255, 255, 255, 0) 100%)",
        "metallic-silver-gradient":
          "linear-gradient(to right, #EFEFEF, #B1B1B1)",
      },
      fontFamily: {
        mont: ["Montserrat", "ui-sans-serif"],
        sugar: ["BrownSugar"],
      },
      colors: {
        prim: "#181818",
        second: "#FFFFFF",
        tert: "#806F5D",
        quater: "#ccff33",
        /*               */
        cream: "#E9DECC",
        dgreen: "#ccff33",
        dlbrown: "#806F5D",
        drkbrown: "#312414",
        dbrown: "#453320",
        silver: "#C0C0C0",
        bonewhite: "#F9F6EE",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
    },
  },
  variants: {
    extend: {
      visibility: ["group-hover"],
    },
  },
  plugins: [],
};
export default config;
