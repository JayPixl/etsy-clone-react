import type { Config } from 'tailwindcss'

export default {
  content: ["./src/**/*.{tsx,ts,jsx,js}", "./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        "bitter": ["Bitter", "serif"],
        "inter": ["Inter", "serif"],
        "nunito": ["Nunito", "sans"]
      },
      animation: {
        "fade-in": 'fade-in 0.5s ease-in-out forwards',
        "fade-out": 'fade-out 0.5s ease-in-out forwards'
      },
      keyframes: {
        "fade-in": {
          '0%': {
            display: "unset",
            opacity: "0%"
          },
          '100%': {
            opacity: "100%"
          }
        },
        "fade-out": {
          '0%': {
            opacity: "100%"
          },
          '100%': {
            opacity: "0%",
            display: "none"
          }
        }
      }
    },
  },
  plugins: [],
} satisfies Config

