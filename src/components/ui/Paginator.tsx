import { BiFirstPage, BiLastPage } from "react-icons/bi"
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa"

import { FIRST_PAGE } from "@common/pagination"
import { ButtonIcon } from "@styled"

import { Icon } from "./Icon"
import { Tooltip } from "./Tooltip"

type PaginatorButtonProps = {
  ariaLabel: string
  disable: boolean
  children: React.ReactElement
  onClick: (n: number) => void
}

function PaginatorButton({
  ariaLabel,
  disable: isDisabled,
  children,
  onClick
}: PaginatorButtonProps) {
  return (
    <Tooltip message={ariaLabel}>
      <ButtonIcon
        className="hover:animate-pulse focus-visible:animate-pulse"
        disabled={isDisabled}
        onClick={(n: number) => onClick(n)}
      >
        <Icon label={ariaLabel}>{children}</Icon>
      </ButtonIcon>
    </Tooltip>
  )
}

type PaginatorProps = {
  page: number
  pageSetter: (n: number) => void
  maxPages?: number
}

export function Paginator({ maxPages, page, pageSetter }: PaginatorProps) {
  const isPreviousDisabled = page === FIRST_PAGE
  const isNextDisabled = page === maxPages

  return (
    <div className="flex place-content-center" aria-label="pagination controls">
      <PaginatorButton
        ariaLabel="Go to first issues page"
        disable={isPreviousDisabled}
        onClick={() => pageSetter(FIRST_PAGE)}
      >
        <BiFirstPage />
      </PaginatorButton>
      <PaginatorButton
        ariaLabel="Go to previous issues page"
        disable={isPreviousDisabled}
        onClick={pageSetter}
      >
        <FaAngleDoubleLeft />
      </PaginatorButton>
      <PaginatorButton
        ariaLabel="Go to next issues page"
        disable={isNextDisabled}
        onClick={pageSetter}
      >
        <FaAngleDoubleRight />
      </PaginatorButton>
      <PaginatorButton
        ariaLabel="Go to last issues page"
        disable={isNextDisabled}
        onClick={pageSetter}
      >
        <BiLastPage />
      </PaginatorButton>
    </div>
  )
}
