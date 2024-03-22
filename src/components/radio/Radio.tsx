import { FC, MouseEventHandler } from "react";
import { Variant } from "../../styles/variants.css";

import { radioStyles } from "./radio.css";

export interface SelectEvent {
  id: string
  selected: boolean
  preventDefault: () => void
  stopPropagation: () => void
}

export interface RadioProps {
  id: string
  variant: Variant
  disabled?: boolean
  selected: boolean
  onSelected?: (event: SelectEvent) => void
}

export const Radio: FC<RadioProps> = ({ id, variant, selected, disabled, onSelected }) => {
  const onClick: MouseEventHandler<HTMLInputElement> | undefined = onSelected ? (internalEvent) => {
    const event: SelectEvent = {
      id,
      selected: !selected,
      preventDefault: internalEvent.preventDefault,
      stopPropagation: internalEvent.stopPropagation
    }
    onSelected(event)
  } : undefined

  return (
    <input
      title={id}
      className={radioStyles[variant]}
      type="radio"
      checked={selected}
      disabled={disabled}
      onClick={onClick}
    />
  )
}