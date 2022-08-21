import React from "react"
import { Search, SearchContainer, SearchIconContainer } from "@components/styled"

export default function AppSearch({ children }: { children: React.ReactElement }) {
  return (
    <SearchContainer>
      <div className="max-w-full">
        <label htmlFor="search" className="sr-only">
          Search issue
        </label>
        <div className="relative">
          <SearchIconContainer>{children}</SearchIconContainer>
          <Search id="search" name="search" placeholder="search issues" type="search" />
        </div>
      </div>
    </SearchContainer>
  )
}
