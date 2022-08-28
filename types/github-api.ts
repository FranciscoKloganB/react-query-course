import type { OnlineStatus } from "@enums"
import type { IssueStatus } from "@enums"
import type { LabelVariants } from "@styled"
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

declare global {
  type IssueDto = {
    id: string
    assignee: string
    comments: string[]
    completedDate: string | null
    createdDate: string
    createdBy: string
    dueDate: string
    labels: string[]
    number: number
    status: ValuesOf<IssueStatus>
    title: string
  }

  type Issue = { labelIDs: string[] } & Omit<IssueDto, "labels">

  type Label = {
    id: string
    color: keyof typeof LabelVariants["colors"]
    name: string
  }

  type User = {
    id: string
    name: string
    profilePictureUrl: string
    onlineStatus?: OnlineStatus
  }

  type UserComment = {
    id: string
    comment: string
    createdBy: string
    createdDate: string
  }
}
