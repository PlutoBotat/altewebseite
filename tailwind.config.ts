
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
      textColor: {
        gradient: {
          DEFAULT: 'bg-gradient-to-br from-white via-white/90 to-white/70 bg-clip-text text-transparent',
        }
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      animation: {
        shimmer: 'shimmer 2s infinite linear',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(109, 90, 230, 0.5)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

