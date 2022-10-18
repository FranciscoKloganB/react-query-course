import type {
  GetNextPageParamFunction,
  GetPreviousPageParamFunction
} from "@tanstack/react-query"

type GetPageParamFunction<T = unknown> =
  | GetPreviousPageParamFunction<T>
  | GetNextPageParamFunction<T>
  | undefined

export function getQueryPageParams<T>(
  lastPage: GetPageParamFunction<T>,
  pages: GetPageParamFunction<Array<T>>,
  step = 1
) {
  if (lastPage && lastPage.length === 0) {
    return
  }

  if (pages) {
    return pages.length + step
  }
}
