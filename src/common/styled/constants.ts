/** Use to decorate inputs fields, dropdowns and selects, whose trigger resembles a text box */
export const inputLikeFieldStyles = `
  bg-white
  font-sans
  text-sm
  leading-none
  rounded-md
  placeholder:text-black
  focus-visible:ring-2
  focus-visible:outline-none
  focus-visible:ring-yellow-400
  focus-visible:border-yellow-400
  focus-visible:text-slate-600
  focus-visible:placeholder:text-slate-400
`

/** Used to decorate active selections (e.g., with radio-bullets/check-icons in `Select` and `Dropdown`) */
export const itemIndicatorStyles = `
  absolute
  left-0
  w-6
  inline-flex
  items-center
  justify-center
  text-yellow-400
`

/** Used to decorate dropdown and select options */
export const itemStyles = `
  font-sans
  leading-none
  text-xs
  md:text-sm
  text-white
  rounded-md
  flex
  items-center
  h-6
  pr-8
  pl-6
  relative
  select-none
  radix-disabled:pointer-events-none
  radix-disabled:text-slate-400
  radix-highlighted:bg-navy-blue-600
  radix-highlighted:text-white
  focus-visible:ring-2
  focus-visible:outline-none
  focus-visible:ring-yellow-400
`

export const seperatorStyles = `h-px bg-yellow-400 m-2`
