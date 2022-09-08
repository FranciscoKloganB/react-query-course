import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from "@rdx/dropdown"
import { GiHamburgerMenu } from "react-icons/gi"
import { RoundButton } from "@styled"
import React from "react"

type DropdownProps = {
  children: React.ReactNode
  triggerButton: React.ReactNode
}

const BaseTriggerButton = ({ ariaLabel }: { ariaLabel: string }) => (
  <RoundButton aria-label={ariaLabel}>
    <GiHamburgerMenu />
  </RoundButton>
)

const Dropdown = ({ children, triggerButton }: DropdownProps) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>{triggerButton}</DropdownMenuTrigger>
    <DropdownMenuContent sideOffset={5}>{children}</DropdownMenuContent>
  </DropdownMenu>
)

const LeftElement = ({ children }: { children: React.ReactNode }) => (
  <div className="absolute left-0 inline-flex items-center justify-center text-slate-400">
    <span className="mx-1 h-3.5 w-3.5">{children}</span>
  </div>
)

const RightElement = ({ children }: { children: React.ReactNode }) => (
  <div className="ml-auto pl-5 text-xs group-radix-disabled:text-slate-400 group-radix-highlighted:text-black">
    {children}
  </div>
)

export * from "@rdx/dropdown"
export { BaseTriggerButton, LeftElement, RightElement, Dropdown }
