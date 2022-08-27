export function toInteger(s?: string) {
  if (s) {
    const casted = parseInt(s)
    if (!isNaN(casted) && isFinite(casted)) {
      return casted
    }
  }

  throw new Error("Unable to cast string to integer.")
}
