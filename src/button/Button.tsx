import { FC } from "react";
import { Variant } from "../styles/variants.css";
import { buttonStyle } from "./button.css";

interface ButtonProps {
  variant: Variant
  label: string
  disabled?: boolean
}

export const Button: FC<ButtonProps> = ({ variant, label, disabled }) => (
  <button
    className={`${buttonStyle[variant]}`}
    disabled={disabled}
  >
    {label}
  </button>
)