import clsx from "clsx"

import { ButtonIcon } from "@styled"

import { Icon } from "./Icon"
import { Tooltip } from "./Tooltip"

type PaginatorButtonProps = {
  ariaLabel: string
  disable: boolean
  children: React.ReactElement
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: (n: any) => void
}

export function ArrowButton({
  ariaLabel,
  disable: isDisabled,
  children,
  onClick
}: PaginatorButtonProps) {
  const message = isDisabled ? `${ariaLabel} - disabled` : ariaLabel

  return (
    <Tooltip message={message}>
      <ButtonIcon
        disabled={isDisabled}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onClick={(value: any) => onClick(value)}
      >
        <Icon
          className={clsx(isDisabled && "text-slate-600")}
          label={ariaLabel}
        >
          {children}
        </Icon>
      </ButtonIcon>
    </Tooltip>
  )
}
