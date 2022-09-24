/* eslint-disable max-len */
const avatarVariants = {
  xs: "h-6 w-6",
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
  xl: "h-14 w-14",
  "2xl": "h-16 w-16"
} as const

const buttonVariants = {
  danger: `
    text-red-700
    bg-red-100
    hover:bg-red-200
    hover:border-red-400
    focus-visible:ring-red-500
    focus-visible:border-red-400
    focus-visible:text-slate-900
  `,
  neutral: `
    text-slate-700
    bg-slate-100
    hover:bg-slate-200
    hover:border-slate-400
    focus-visible:ring-slate-500
    focus-visible:border-slate-400
    focus-visible:text-slate-900
  `,
  primary: `
    text-navy-blue-700
    bg-navy-blue-100
    hover:bg-navy-blue-200
    hover:border-navy-blue-400
    focus-visible:ring-navy-blue-500
    focus-visible:border-navy-blue-400
    focus-visible:text-slate-900
  `,
  secondary: `
    text-green-700
    bg-green-100
    hover:bg-green-200
    hover:border-green-400
    focus-visible:ring-green-500
    focus-visible:border-green-400
    focus-visible:text-slate-900
  `,
  warning: `
    text-yellow-700
    bg-yellow-100
    hover:bg-yellow-200
    hover:border-yellow-400
    focus-visible:ring-yellow-500
    focus-visible:border-yellow-400
    focus-visible:text-slate-900
  `
} as const

const labelVariants = {
  colors: {
    red: "text-red-600 border-red-600 bg-red-400",
    blue: "text-blue-600 border-blue-600 bg-blue-400",
    cyan: "text-cyan-600 border-cyan-600 bg-cyan-400",
    orange: "text-orange-600 border-orange-600 bg-orange-400",
    lime: "text-lime-600 border-lime-600 bg-lime-400",
    white: "text-white border-white-600 bg-gray-200",
    rebeccapurple: "text-purple-600 border-purple-600 bg-purple-400",
    default: "text-amber-300 border-amber-300 bg-amber-200"
  }
} as const

const statusOverlayVariants = {
  colors: {
    away: "bg-yellow-300",
    inactive: "bg-gray-300",
    offline: "bg-red-400",
    online: "bg-green-400"
  },
  sizes: {
    xs: "h-1.5 w-1.5",
    sm: "h-2 w-2",
    md: "h-2.5 w-2.5",
    lg: "h-3 w-3",
    xl: "h-3.5 w-3.5",
    "2xl": "h-4 w-4"
  }
} as const

type AvatarVariants = keyof typeof avatarVariants
type ButtonVariants = keyof typeof buttonVariants
type LabelVariants = keyof typeof labelVariants
type LabelVariantsColors = keyof typeof labelVariants["colors"]
type StatusOverlayVariants = keyof typeof statusOverlayVariants
type StatusOverlayVariantsColors = keyof typeof statusOverlayVariants["colors"]
type StatusOverlayVariantsSizes = keyof typeof statusOverlayVariants["sizes"]

export { avatarVariants, buttonVariants, labelVariants, statusOverlayVariants }

export type {
  AvatarVariants,
  ButtonVariants,
  LabelVariants,
  LabelVariantsColors,
  StatusOverlayVariants,
  StatusOverlayVariantsColors,
  StatusOverlayVariantsSizes
}
