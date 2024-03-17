import { FC } from "react";
import { Variant } from "../../styles/variants.css";
import { radioStyles } from "./radio.css";

interface RadioProps {
  variant: Variant
  disabled?: boolean
  checked: boolean
}

export const Radio: FC<RadioProps> = ({ variant, checked, disabled }) => (
  <input
    className={radioStyles[variant]}
    type="radio"
    checked={checked}
    disabled={disabled}
  />
)