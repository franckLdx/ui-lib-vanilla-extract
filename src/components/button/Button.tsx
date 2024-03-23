import { FC } from "react";
import { buttonVariants } from "./button.css";
import { Variant } from "../../styles/variants/variants.css";

interface ButtonProps {
  variant: Variant
  label: string
  disabled?: boolean
}

export const Button: FC<ButtonProps> = ({ variant, label, disabled }) => (
  <button
    className={`${buttonVariants[variant]}`}
    disabled={disabled}
  >
    {label}
  </button>
)