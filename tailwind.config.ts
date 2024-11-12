import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: "var(--peach)",
        lightGreyishPeach: "lightGreyishPeach",
        black: "var(--black)",
        white: "var(--white)",
        lightPeach: "var(--lightPeach)",
        darkGrey: "var(--darkGrey)",
        lightGrey: "var(--lightGrey)",
        metalic:"var(--metalic)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        jost: ["Jost", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
