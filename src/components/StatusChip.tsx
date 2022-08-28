import clsx from "clsx"
import { IssueStatus, isClosedIssue } from "@enums"
import { GoIssueClosed, GoIssueOpened } from "react-icons/go"

const spanClassnames = `
  flex
  content-center
  gap-2
  max-w-fit
  py-[2px]
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
  const isClosed = isClosedIssue(status)
  const classes = clsx(spanClassnames, isClosed ? "bg-red-600" : "bg-green-600")

  return (
    <div className={classes}>
      <span className="my-auto text-lg">{isClosed ? <GoIssueClosed /> : <GoIssueOpened />}</span>{" "}
      {status}
    </div>
  )
}
