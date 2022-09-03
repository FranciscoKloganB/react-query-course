module.exports = {
  animation: {
    slideUpAndFade: "slideUpAndFade 400ms ease-in-logarithimic 1",
    slideRightAndFade: "slideRightAndFade 400ms ease-in-logarithimic 1",
    slideDownAndFade: "slideDownAndFade 400ms ease-in-logarithimic 1",
    slideLeftAndFade: "slideLeftAndFade 400ms ease-in-logarithimic 1"
  },
  keyFrames: {
    slideUpAndFade: {
      "0%": { opacity: 0, transform: "translateY(2px)" },
      "100%": { opacity: 1, transform: "translateY(0)" }
    },
    slideRightAndFade: {
      "0%": { opacity: 0, transform: "translateX(-2px)" },
      "100%": { opacity: 1, transform: "translateX(0)" }
    },
    slideDownAndFade: {
      "0%": { opacity: 0, transform: "translateY(-2px)" },
      "100%": { opacity: 1, transform: "translateY(0)" }
    },
    slideLeftAndFade: {
      "0%": { opacity: 0, transform: "translateX(-2px)" },
      "100%": { opacity: 1, transform: "translateX(0)" }
    }
  },
  transitionTimingFunctions: {
    // https://cubic-bezier.com/#.16,1,.03,1
    "in-logarithimic": "cubic-bezier(0.16, 1, 0.3, 1)",
    "in-exponential": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
    "out-exponential": "cubic-bezier(0.19, 1, 0.22, 1)"
  },
  willChange: {
    "transform-opacity": "transform, opacity"
  }
}
