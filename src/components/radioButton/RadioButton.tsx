import { FC, MouseEventHandler } from "react";
import { Radio, RadioProps, SelectEvent } from "../radio/Radio";

import { containerState, radioStyles } from "./radioButton.css";

export type RadioButtonProps = {
  label: string
  onSelected: (event: SelectEvent) => void
} & Omit<RadioProps, "onSelected">

export const RadioButton: FC<RadioButtonProps> = ({ label, onSelected, ...radioProps }) => {
  const { id, selected, disabled, variant } = radioProps
  const onInternalClick: MouseEventHandler<HTMLDivElement> = (internalEvent) => {
    const event: SelectEvent = {
      id,
      selected: !selected,
      preventDefault: internalEvent.preventDefault,
      stopPropagation: internalEvent.stopPropagation
    }
    onSelected(event)
  }

  const containerClass = disabled ? containerState.disabled : containerState.enabled

  return (
    <div className={`${containerClass} ${radioStyles[variant]}`} onClick={onInternalClick}>
      <Radio {...radioProps} />
      {label}
    </div>
  )
}