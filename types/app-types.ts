// eslint-disable-next-line @typescript-eslint/no-explicit-any
type EnsureReadonlyArray<T> = T extends Array<any>
  ? never
  : // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends ReadonlyArray<any>
  ? T
  : never

type ExtractValue<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends ReadonlyArray<any>,
  K extends keyof T[number]
> = EnsureReadonlyArray<T>[number][K]

/**
 * Generic TypesOf<T> returns the union of types within an iterable, e.g.: an array, object or enum
 *
 * ```javascript
 * type Foo = { a: string, b: number };
 * type TypesOfFoo = TypesOf<Foo> = string | number
 * ```
 */
type TypesOf<T> = T[keyof T]

/**
 * The generic ValuesOf is simply semantic, since it always returns T.
 *
 * Mostly useful to clarify that, given an enum or object, what matters are the values within
 * and not their types.
 *
 * ```javascript
 * enum Bar = { A = "x", B = "y" };
 * type ValuesOfBar = ValuesOf<Bar> // "x" | "y", which is the same as Bar
 * ```
 */
type ValuesOf<T> = T

export type { EnsureReadonlyArray, ExtractValue, TypesOf, ValuesOf }
