import type { Config } from "tailwindcss";

const config: Config = {
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
        "foreground-muted": "var(--foreground-muted)",
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
          light: "var(--accent-light)",
        },
        "accent-secondary": {
          DEFAULT: "var(--accent-secondary)",
          hover: "var(--accent-secondary-hover)",
        },
        "accent-tertiary": {
          DEFAULT: "var(--accent-tertiary)",
          hover: "var(--accent-tertiary-hover)",
        },
        neutral: {
          50: "var(--neutral-50)",
          100: "var(--neutral-100)",
          200: "var(--neutral-200)",
          300: "var(--neutral-300)",
          400: "var(--neutral-400)",
          500: "var(--neutral-500)",
          600: "var(--neutral-600)",
          700: "var(--neutral-700)",
          800: "var(--neutral-800)",
          900: "var(--neutral-900)",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        float1: "float1 20s ease-in-out infinite",
        float2: "float2 25s ease-in-out infinite",
        float3: "float3 30s ease-in-out infinite",
        float4: "float4 22s ease-in-out infinite",
      },
      keyframes: {
        float1: {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
            opacity: "0.3",
          },
          "25%": {
            transform: "translate(50px, -50px) scale(1.1)",
            opacity: "0.4",
          },
          "50%": {
            transform: "translate(-30px, 30px) scale(0.9)",
            opacity: "0.35",
          },
          "75%": {
            transform: "translate(30px, 50px) scale(1.05)",
            opacity: "0.4",
          },
        },
        float2: {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
            opacity: "0.25",
          },
          "25%": {
            transform: "translate(-40px, 40px) scale(1.15)",
            opacity: "0.35",
          },
          "50%": {
            transform: "translate(40px, -30px) scale(0.85)",
            opacity: "0.3",
          },
          "75%": {
            transform: "translate(-20px, 60px) scale(1.1)",
            opacity: "0.35",
          },
        },
        float3: {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
            opacity: "0.2",
          },
          "25%": {
            transform: "translate(60px, -60px) scale(1.2)",
            opacity: "0.3",
          },
          "50%": {
            transform: "translate(-50px, 40px) scale(0.8)",
            opacity: "0.25",
          },
          "75%": {
            transform: "translate(40px, 70px) scale(1.15)",
            opacity: "0.3",
          },
        },
        float4: {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
            opacity: "0.2",
          },
          "25%": {
            transform: "translate(-50px, 50px) scale(1.1)",
            opacity: "0.3",
          },
          "50%": {
            transform: "translate(30px, -40px) scale(0.9)",
            opacity: "0.25",
          },
          "75%": {
            transform: "translate(-30px, 50px) scale(1.05)",
            opacity: "0.3",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
