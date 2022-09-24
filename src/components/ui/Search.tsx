import React from "react"
import { useDebouncedCallback } from "use-debounce"

import {
  SearchContainer,
  SearchIconContainer,
  Search as SearchStyled
} from "@styled"

interface ISearchEvent {
  target: { value: string }
}

type SearchProps = {
  children: React.ReactElement
  state: string
  setState: React.Dispatch<React.SetStateAction<string>>
  delay?: number
}

export function Search({
  children,
  state,
  setState,
  delay = 500
}: SearchProps) {
  const debouncedSetState = useDebouncedCallback(
    (value) => setState(value),
    delay
  )

  return (
    <SearchContainer>
      <div className="max-w-full">
        <label htmlFor="search" className="sr-only">
          Search issue
        </label>
        <div className="relative">
          <SearchIconContainer>{children}</SearchIconContainer>
          <SearchStyled
            defaultValue={state}
            onChange={(e: ISearchEvent) => debouncedSetState(e.target.value)}
            id="search"
            name="search"
            placeholder="Search issues"
            type="search"
          />
        </div>
      </div>
    </SearchContainer>
  )
}
