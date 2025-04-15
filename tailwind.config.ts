
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: "hsl(var(--border) / <alpha-value>)",
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        pluto: {
          purple: '#6D5AE6',
          dark: '#0B0E14',
          darker: '#151823',
          light: '#D6BCFA',
        },
      },
      boxShadow: {
        'glow': '0 0 15px rgba(109, 90, 230, 0.5)',
      },
      animation: {
        ...require("tailwindcss-animate").theme.extend.animation,
        'button-hover': 'pulse 1s infinite',
      },
      keyframes: {
        ...require("tailwindcss-animate").theme.extend.keyframes,
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

