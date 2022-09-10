import type { OnlineStatus } from "@enums"
import type { IssueStatus } from "@enums"
import type { LabelVariants } from "@styled"

import type { ValuesOf } from "./app-types"

declare global {
  type SearchOf<T> = { count: number; items: T[] }

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
