import React from "react"
import { Search, SearchContainer, SearchIconContainer } from "./styled"

export default function AppSearch({ children }: { children: React.ReactElement }) {
  return (
    <SearchContainer>
      <div className="w-full sm:max-w-xs">
        <label htmlFor="search" className="sr-only">
          Search issue
        </label>
        <div className="relative">
          <SearchIconContainer>{children}</SearchIconContainer>
          <Search id="search" name="search" placeholder="search events" type="search" />
        </div>
      </div>
    </SearchContainer>
  )
}
