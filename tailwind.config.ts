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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        wheel: {
          
          to: {
            objectPosition: "0px 0px",
          },
        },
        wheel_right: {
          "0%": {
            objectPosition: "-100px 60px",
          },
          "100%": {
            objectPosition: "0px 0px",
          },
        },
        
      },
      animation: {
        wheel: "wheel 1s ease-in forwards",
        wheel_right: "wheel_right 1s cubic-bezier(0.4, 0, 0.2, 1.2) forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
