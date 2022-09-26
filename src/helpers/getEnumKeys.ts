export function getEnumKeys<T extends Record<string, unknown>>(
  e: T
): Array<keyof typeof e> {
  return Object.keys(e) as Array<keyof typeof e>
}
