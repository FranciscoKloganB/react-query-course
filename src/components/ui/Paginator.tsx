import { BiFirstPage, BiLastPage } from "react-icons/bi"
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa"

import { ButtonIcon } from "@styled"

import { Icon } from "./Icon"
import { Tooltip } from "./Tooltip"

type PaginatorButtonProps = {
  ariaLabel: string
  children: React.ReactElement
  onClick: (n: number) => void
}

function PaginatorButton({
  ariaLabel,
  children,
  onClick
}: PaginatorButtonProps) {
  return (
    <Tooltip message={ariaLabel}>
      <ButtonIcon
        className="hover:animate-pulse focus-visible:animate-pulse"
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
  return (
    <div className="flex place-content-center" aria-label="pagination controls">
      <PaginatorButton ariaLabel="Go to first issues page" onClick={pageSetter}>
        <BiFirstPage />
      </PaginatorButton>
      <PaginatorButton
        ariaLabel="Go to previous issues page"
        onClick={pageSetter}
      >
        <FaAngleDoubleLeft />
      </PaginatorButton>
      <PaginatorButton ariaLabel="Go to next issues page" onClick={pageSetter}>
        <FaAngleDoubleRight />
      </PaginatorButton>
      <PaginatorButton ariaLabel="Go to last issues page" onClick={pageSetter}>
        <BiLastPage />
      </PaginatorButton>
    </div>
  )
}
