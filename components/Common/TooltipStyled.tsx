import { ITooltip, Tooltip, TooltipRefProps } from 'react-tooltip'
import { forwardRef, ReactNode } from 'react'

interface Props extends ITooltip {}

export const TooltipStyled = forwardRef<TooltipRefProps, Props>(function TooltipStyled(
  { className, ...props },
  ref
) {
  return (
    <Tooltip
      ref={ref}
      className={`z-10 max-w-sm ${className}`}
      border="1px solid #9ca3af"
      opacity={1}
      place="right"
      {...props}
    />
  )
})
