import clsx from "clsx"
import { IssueStatus, isOpenIssue } from "@enums"
import { GoIssueClosed, GoIssueOpened } from "react-icons/go"

const spanClassnames = `
  flex
  content-center
  gap-2
  max-w-fit
  py-1
  px-2
  text-sm
  text-center
  text-white
  font-sans
  font-semibold
  border
  rounded-[999px]
  whitespace-nowrap
`

export function StatusChip({ status }: { status: IssueStatus }) {
  const isOpen = isOpenIssue(status)
  const classes = clsx(spanClassnames, isOpen ? "bg-green-600" : "bg-red-600")

  return (
    <div className={classes}>
      <span className="my-auto text-lg">
        {isOpen ? <GoIssueOpened /> : <GoIssueClosed />}
      </span>{" "}
      {status}
    </div>
  )
}
