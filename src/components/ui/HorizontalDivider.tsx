import clsx from "clsx"

export function HorizontalDivider({
  color = "bg-slate-600"
}: {
  color?: string
}) {
  return <div className={clsx("my-3 max-w-full px-px py-[0.5px]", color)}></div>
}
