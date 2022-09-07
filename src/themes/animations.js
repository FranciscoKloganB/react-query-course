const inLogarithimic = "cubic-bezier(0.16, 1, 0.3, 1)"

module.exports = {
  animation: {
    "scale-in": "scale-in 0.2s ease-in-out",
    "slide-down": `slide-down 0.6s ${inLogarithimic}`,
    "slide-up": `slide-up 0.6s ${inLogarithimic}`,
    "slide-up-fade": `slide-up-fade 0.4s ${inLogarithimic}`,
    "slide-right-fade": `slide-right-fade 0.4s ${inLogarithimic}`,
    "slide-down-fade": `slide-down-fade 0.4s ${inLogarithimic}`,
    "slide-left-fade": `slide-left-fade 0.4s ${inLogarithimic}`,
    "enter-from-right": "enter-from-right 0.25s ease",
    "enter-from-left": "enter-from-left 0.25s ease",
    "exit-to-right": "exit-to-right 0.25s ease",
    "exit-to-left": "exit-to-left 0.25s ease",
    "scale-in-content": "scale-in-content 0.2s ease",
    "scale-out-content": "scale-out-content 0.2s ease",
    "fade-in": "fade-in 0.2s ease",
    "fade-out": "fade-out 0.2s ease",
    "toast-hide": "toast-hide 100ms ease-in forwards",
    "toast-slide-in-right": `toast-slide-in-right 150ms ${inLogarithimic}`,
    "toast-slide-in-bottom": `toast-slide-in-bottom 150ms ${inLogarithimic}`,
    "toast-swipe-out": "toast-swipe-out 100ms ease-out forwards"
  },
  keyFrames: {
    "scale-in": {
      "0%": { opacity: 0, transform: "scale(0)" },
      "100%": { opacity: 1, transform: "scale(1)" }
    },
    "slide-down": {
      "0%": { opacity: 0, transform: "translateY(-10px)" },
      "100%": { opacity: 1, transform: "translateY(0)" }
    },
    "slide-up": {
      "0%": { opacity: 0, transform: "translateY(10px)" },
      "100%": { opacity: 1, transform: "translateY(0)" }
    },
    "slide-up-fade": {
      "0%": { opacity: 0, transform: "translateY(4px)" },
      "100%": { opacity: 1, transform: "translateY(0)" }
    },
    "slide-right-fade": {
      "0%": { opacity: 0, transform: "translateX(-4px)" },
      "100%": { opacity: 1, transform: "translateX(0)" }
    },
    "slide-down-fade": {
      "0%": { opacity: 0, transform: "translateY(-4px)" },
      "100%": { opacity: 1, transform: "translateY(0)" }
    },
    "slide-left-fade": {
      "0%": { opacity: 0, transform: "translateX(4px)" },
      "100%": { opacity: 1, transform: "translateX(0)" }
    },
    "enter-from-right": {
      "0%": { transform: "translateX(200px)", opacity: 0 },
      "100%": { transform: "translateX(0)", opacity: 1 }
    },
    "enter-from-left": {
      "0%": { transform: "translateX(-200px)", opacity: 0 },
      "100%": { transform: "translateX(0)", opacity: 1 }
    },
    "exit-to-right": {
      "0%": { transform: "translateX(0)", opacity: 1 },
      "100%": { transform: "translateX(200px)", opacity: 0 }
    },
    "exit-to-left": {
      "0%": { transform: "translateX(0)", opacity: 1 },
      "100%": { transform: "translateX(-200px)", opacity: 0 }
    },
    "scale-in-content": {
      "0%": { transform: "rotateX(-30deg) scale(0.9)", opacity: 0 },
      "100%": { transform: "rotateX(0deg) scale(1)", opacity: 1 }
    },
    "scale-out-content": {
      "0%": { transform: "rotateX(0deg) scale(1)", opacity: 1 },
      "100%": { transform: "rotateX(-10deg) scale(0.95)", opacity: 0 }
    },
    "fade-in": {
      "0%": { opacity: 0 },
      "100%": { opacity: 1 }
    },
    "fade-out": {
      "0%": { opacity: 1 },
      "100%": { opacity: 0 }
    },
    "toast-hide": {
      "0%": { opacity: 1 },
      "100%": { opacity: 0 }
    },
    "toast-slide-in-right": {
      "0%": { transform: `translateX(calc(100% + 1rem))` },
      "100%": { transform: "translateX(0)" }
    },
    "toast-slide-in-bottom": {
      "0%": { transform: `translateY(calc(100% + 1rem))` },
      "100%": { transform: "translateY(0)" }
    },
    "toast-swipe-out": {
      "0%": { transform: "translateX(var(--radix-toast-swipe-end-x))" },
      "100%": {
        transform: `translateX(calc(100% + 1rem))`
      }
    }
  },
  transitionTimingFunctions: {
    // https://cubic-bezier.com/#.16,1,.03,1
    "in-logarithimic": inLogarithimic,
    "in-exponential": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
    "out-exponential": "cubic-bezier(0.19, 1, 0.22, 1)"
  },
  willChange: {
    "transform-opacity": "transform, opacity"
  }
}
