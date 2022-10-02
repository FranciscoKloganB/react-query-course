import * as AccessibleIcon from "@radix-ui/react-accessible-icon"

type IconProps = {
  children: React.ReactNode
  label: string
}

export function Icon({ children, label }: IconProps) {
  return <AccessibleIcon.Root label={label}>{children}</AccessibleIcon.Root>
}
