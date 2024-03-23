import { FC, MouseEventHandler } from "react";
import { checkBoxVariants } from "./checkBox.css";
import { ColorVariant } from "../../styles/colors.css";

export interface CheckEvent {
  id: string
  checked: boolean
  preventDefault: () => void
  stopPropagation: () => void
}

export interface CheckBoxProps {
  id: string
  color: ColorVariant
  disabled?: boolean
  checked: boolean
  onChecked: (event: CheckEvent) => void
}

export const CheckBox: FC<CheckBoxProps> = ({ id, color, checked, disabled, onChecked }) => {
  const onClick: MouseEventHandler<HTMLInputElement> = (internalEvent) => {
    const event: CheckEvent = {
      id,
      checked: !checked,
      preventDefault: internalEvent.preventDefault,
      stopPropagation: internalEvent.stopPropagation
    }
    onChecked(event)
  }

  return (
    <input
      id={id}
      name={id}
      className={checkBoxVariants[color]}
      type="checkbox"
      checked={checked}
      disabled={disabled}
      onClick={onClick}
    />
  )
}