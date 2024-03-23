import { FC, MouseEventHandler } from "react";
import { radioVariants } from "./radio.css";
import { ColorVariant } from "../../styles/colors.css";

export interface SelectEvent {
  id: string
  selected: boolean
  preventDefault: () => void
  stopPropagation: () => void
}

export interface RadioProps {
  id: string
  color: ColorVariant
  disabled?: boolean
  selected: boolean
  onSelected?: (event: SelectEvent) => void
}

export const Radio: FC<RadioProps> = ({ id, color, selected, disabled, onSelected }) => {
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
      className={radioVariants[color]}
      type="radio"
      checked={selected}
      disabled={disabled}
      onClick={onClick}
    />
  )
}