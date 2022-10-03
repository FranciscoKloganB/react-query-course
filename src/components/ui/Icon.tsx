import * as AccessibleIcon from "@radix-ui/react-accessible-icon"

import { Span } from "@styled"

export type IconProps = {
  children: React.ReactElement
  label: string
  [x: string]: unknown
}

export function Icon({ children, label, ...rest }: IconProps) {
  return (
    <AccessibleIcon.Root label={label}>
      <Span {...rest}>{children}</Span>
    </AccessibleIcon.Root>
  )
}
