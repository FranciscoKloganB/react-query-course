import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleRight
} from "react-icons/fa"

import { FIRST_PAGE } from "@common/pagination"
import { PageAnchorContainer, Span } from "@styled"

import { ArrowButton } from "../ArrowButton"
import { PageAnchor } from "./PageAnchor"

type PaginatorConfig = Partial<{
  disableNext: boolean
  disablePrevious: boolean
}>

type PaginatorProps = {
  loadingPage: boolean
  page: number
  pageSetter: (n: number) => void
  cols?: number
  config?: PaginatorConfig
  maxPages?: number
}

export function Paginator({
  loadingPage,
  maxPages,
  page,
  pageSetter,
  cols = 5,
  config = {}
}: PaginatorProps) {
  const isPreviousDisabled = config.disablePrevious || page === FIRST_PAGE
  const isNextDisabled = config.disableNext || page === maxPages

  /**
   * FIXME:
   * Given isNextDisabled we can prevent showing buttons for pages we know for
   * sure will not have any data. The UX is not very consistent, because:
   *
   * 1. Suddenly the active page is no longer highlighted on the left and is instead
   * highlighted on the right
   * 2. If the user navigates to a page with no data, and previous page is also
   * empty, we will allow him to navigate to a use page (previous empty page).
   *
   * It is hard to fix this behaviour without max pages being defined.
   */
  function calculatePageOffset(n: number) {
    if (!isNextDisabled) {
      return n
    }

    return n - cols + 1
  }

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
        {/* TODO: If isNextDisabled we are on last page so, ensure it is positioned on last col */}
        {Array.from({ length: cols }).map((_, i) => {
          const pageNum = page + calculatePageOffset(i)
          const isActive = pageNum === page

          if (pageNum <= 0) {
            return null
          }

          return (
            <PageAnchorContainer
              $isActive={isActive}
              $isLoadingPage={loadingPage}
              key={pageNum}
              tabIndex={0}
            >
              <PageAnchor
                isActive={isActive}
                loadingPage={loadingPage}
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
