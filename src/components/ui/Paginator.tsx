import clsx from "clsx"
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleRight
} from "react-icons/fa"

import { FIRST_PAGE } from "@common/pagination"
import { PageAnchorContainer, Span } from "@styled"

import { ArrowButton } from "./ArrowButton"

type PageAnchorProps = {
  children: number
  isActive: boolean
  pageNum: number
  pageSetter: (n: number) => void
}

function PageAnchor({
  children,
  isActive,
  pageSetter,
  pageNum
}: PageAnchorProps) {
  const pageNumClasses = clsx(isActive && "text-yellow-400")

  return (
    <a onClick={() => pageSetter(pageNum)}>
      <Span className={pageNumClasses}>{children}</Span>
    </a>
  )
}

type PaginatorConfig = Partial<{
  disableNext: boolean
  disablePrevious: boolean
}>

type PaginatorProps = {
  page: number
  pageSetter: (n: number) => void
  cols?: number
  config?: PaginatorConfig
  maxPages?: number
}

export function Paginator({
  maxPages,
  page,
  pageSetter,
  cols = 5,
  config = {}
}: PaginatorProps) {
  const isPreviousDisabled = config.disablePrevious || page === FIRST_PAGE
  const isNextDisabled = config.disableNext || page === maxPages

  return (
    <div
      className="flex flex-1 items-center place-content-center space-x-2"
      aria-label="pagination controls"
    >
      <ArrowButton
        ariaLabel="First issues page"
        disable={isPreviousDisabled}
        onClick={() => pageSetter(FIRST_PAGE)}
      >
        <FaAngleDoubleLeft />
      </ArrowButton>
      <ArrowButton
        ariaLabel="Previous issues page"
        disable={isPreviousDisabled}
        onClick={() => pageSetter(page - 1)}
      >
        <FaAngleLeft />
      </ArrowButton>
      <div className="border-2 px-2 rounded-lg border-full border-yellow-400/30 sm:hidden">
        <Span>{page}</Span>
      </div>
      <div className="hidden sm:flex sm:items-center sm:justify-between sm:space-x-2">
        {Array.from({ length: cols }).map((_, i) => {
          const pageNum = page + i
          const isActive = pageNum === page

          return (
            <PageAnchorContainer
              $isActive={isActive}
              key={pageNum}
              tabIndex={0}
            >
              <PageAnchor
                isActive={isActive}
                pageNum={pageNum}
                pageSetter={pageSetter}
              >
                {pageNum}
              </PageAnchor>
            </PageAnchorContainer>
          )
        })}
      </div>
      <ArrowButton
        ariaLabel="Next issues page"
        disable={isNextDisabled}
        onClick={() => pageSetter(page + 1)}
      >
        <FaAngleRight />
      </ArrowButton>
      {!!maxPages && (
        /* FIXME: When API returns the existing number of pages we can remove the enforced true value */
        <ArrowButton
          ariaLabel="Last issues page"
          disable={true || isNextDisabled}
          onClick={() => pageSetter(maxPages)}
        >
          <FaAngleDoubleRight />
        </ArrowButton>
      )}
    </div>
  )
}
