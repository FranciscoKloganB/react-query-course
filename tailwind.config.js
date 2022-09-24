/* eslint-disable @typescript-eslint/no-var-requires */
const animationsTheme = require("./src/themes/animations")
const defaultTheme = require("tailwindcss/defaultTheme")
const forms = require("@tailwindcss/forms")
const radix = require("tailwindcss-radix")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,ts,tsx}"],
  theme: {
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.5rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.125rem", { lineHeight: "2rem" }],
      xl: ["1.25rem", { lineHeight: "2rem" }],
      "2xl": ["1.5rem", { lineHeight: "2.5rem" }],
      "3xl": ["2rem", { lineHeight: "2.5rem" }],
      "4xl": ["2.5rem", { lineHeight: "3rem" }],
      "5xl": ["3rem", { lineHeight: "3.5rem" }],
      "6xl": ["4rem", { lineHeight: "1" }],
      "7xl": ["5rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }]
    },
    extend: {
      animation: {
        ...animationsTheme.animation
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem"
      },
      boxShadow: {
        slider: "0 0 0 5px rgba(0, 0, 0, 0.3)"
      },
      colors: {
        "navy-blue-100": "#55699c",
        "navy-blue-200": "#4e608f",
        "navy-blue-300": "#404f75",
        "navy-blue-400": "#323e5c",
        "navy-blue-500": "#2b354f",
        "navy-blue-600": "#242d43",
        "navy-blue-700": "#1d2436",
        "navy-blue-800": "#161c29",
        "navy-blue-900": "#0f131c"
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: ["DM Sans", ...defaultTheme.fontFamily.sans]
      },
      keyframes: {
        ...animationsTheme.keyFrames
      },
      maxWidth: {
        "2xl": "40rem"
      },
      transitionTimingFunction: {
        ...animationsTheme.transitionTimingFunctions
      },
      willChange: {
        ...animationsTheme.willChange
      }
    }
  },
  plugins: [forms(), radix({ variantPrefix: "radix" })]
}
