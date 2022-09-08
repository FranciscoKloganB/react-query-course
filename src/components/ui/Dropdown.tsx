import tw from "tailwind-styled-components"

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from "@rdx/dropdown"
import { GiHamburgerMenu } from "react-icons/gi"
import { RoundButton } from "@styled"
import React from "react"

type DropdownItemProps = {
  children: string
  icon?: React.ReactNode
  shortcut?: string
}

type DropdownProps = {
  children: React.ReactNode
  triggerButton: React.ReactNode
}

const DropdownRightElement = tw.div`
  text-xs
  ml-auto
  pl-5
  group-radix-highlighted:text-black
  group-radix-disabled:text-slate-400
`

function DropdownItem({ children, icon, shortcut }: DropdownItemProps) {
  return (
    <>
      {icon && (
        <div className="absolute left-0 inline-flex items-center justify-center text-slate-400">
          <span className="mx-1 h-3.5 w-3.5">{icon}</span>
        </div>
      )}
      {children}
      {shortcut && <DropdownRightElement>{shortcut}</DropdownRightElement>}
    </>
  )
}

function BaseTriggerButton({ ariaLabel }: { ariaLabel: string }) {
  return (
    <RoundButton aria-label={ariaLabel}>
      <GiHamburgerMenu />
    </RoundButton>
  )
}

function Dropdown({ children, triggerButton }: DropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{triggerButton}</DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={5}>{children}</DropdownMenuContent>
    </DropdownMenu>
  )
}

export * from "@rdx/dropdown"
export { BaseTriggerButton, DropdownRightElement, DropdownItem, Dropdown }
