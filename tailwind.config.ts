import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: "#E5E5E5",
        lightBlack: "#CCCCCC",
        gray: "#777777",
        black: "#121022",
        blue: "#251977",
        green: "#62D85F",
        red: "#EF5555",
      },
      screens: {
        "4xs": "320px", // 4 extra small devices (smallest phones)
        "3xs": "360px", // 3 extra small devices (larger phones)
        "2xs": "400px", // 2 extra small devices (larger phones)
        xs: "480px", // Extra small devices (small tablets or larger phones)
        sm: "640px", // Small devices (tablets)
        md: "768px", // Medium devices (tablets and small laptops)
        lg: "1024px", // Large devices (desktops)
        xl: "1280px", // Extra large devices (large desktops)
        "2xl": "1536px", // Extra extra large devices (very large desktops)
      },
    },
  },
  plugins: [],
};
export default config;
