import clsx from "clsx"

import { PageAnchorStyled, Span } from "@styled"

type PageAnchorProps = {
  children: number
  isActive: boolean
  loadingPage: boolean
  pageNum: number
  pageSetter: (n: number) => void
}

export function PageAnchor({
  children,
  isActive,
  loadingPage,
  pageSetter,
  pageNum
}: PageAnchorProps) {
  const pageNumClasses = clsx(isActive && "text-yellow-400")

  function handleClick() {
    if (!loadingPage) {
      pageSetter(pageNum)
    }
  }

  return (
    <PageAnchorStyled onClick={() => handleClick()}>
      <Span className={pageNumClasses}>{children}</Span>
    </PageAnchorStyled>
  )
}
