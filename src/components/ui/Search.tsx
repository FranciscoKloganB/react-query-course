import React from "react"
import { Search as SearchStyled, SearchContainer, SearchIconContainer } from "@styled"

export function Search({ children }: { children: React.ReactElement }) {
  return (
    <SearchContainer>
      <div className="max-w-full">
        <label htmlFor="search" className="sr-only">
          Search issue
        </label>
        <div className="relative">
          <SearchIconContainer>{children}</SearchIconContainer>
          <SearchStyled id="search" name="search" placeholder="search issues" type="search" />
        </div>
      </div>
    </SearchContainer>
  )
}
