import { OnlineStatus } from "@/src/enums"
import { IssueStatus } from "@/src/enums/issue-status.enum"

/**
 * Generic TypesOf<T> returns the union of types within an iterable, e.g.: an array, object or enum
 *
 * ```javascript
 * type Foo = { a: string, b: number };
 * type TypesOfFoo = TypesOf<Foo> = string | number
 * ```
 */
type TypesIn<T> = T[keyof T]

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
type ValuesOf<T> = typeof T[keyof typeof T]

declare global {
  type Issue = {
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

  type User = {
    id: string
    name: string
    profilePictureUrl: string
    onlineStatus?: OnlineStatus
  }
}
