import { FC } from "react";
import { Variant } from "../../styles/variants.css";
import { CheckBoxStyles } from "./checkBox.css";

interface CheckBoxProps {
  variant: Variant
  disabled?: boolean
  checked: boolean
}

export const CheckBox: FC<CheckBoxProps> = ({ variant, checked, disabled }) => (
  <input
    className={CheckBoxStyles[variant]}
    type="checkbox"
    checked={checked}
    disabled={disabled}
  />
)