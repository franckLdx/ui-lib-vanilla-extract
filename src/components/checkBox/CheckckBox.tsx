import { FC, MouseEventHandler } from "react";
import { Variant } from "../../styles/variants.css";
import { CheckBoxStyles } from "./checkBox.css";

export interface CheckEvent {
  id: string
  checked: boolean
  preventDefault: () => void
  stopPropagation: () => void
}

export interface CheckBoxProps {
  id: string
  variant: Variant
  disabled?: boolean
  checked: boolean
  onChecked: (event: CheckEvent) => void
}

export const CheckBox: FC<CheckBoxProps> = ({ id, variant, checked, disabled, onChecked }) => {
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
      className={CheckBoxStyles[variant]}
      type="checkbox"
      checked={checked}
      disabled={disabled}
      onClick={onClick}
    />
  )
}