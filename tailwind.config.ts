import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        "4xl": "50px",
        "3xl": "30px",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        gradient: "gradient 8s ease infinite",
        "fade-in": "fadeIn 1s ease-in-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        gradient: {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        // colors: {
        //   background: "var(--background)",
        //   foreground: "var(--foreground)",
        // },
      },
    },
    plugins: [],
  },
} satisfies Config;
