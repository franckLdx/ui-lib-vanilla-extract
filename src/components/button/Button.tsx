import { FC } from "react";
import { buttonVariants } from "./button.css";
import { ColorType } from "../../styles/colors.css";

interface ButtonProps {
  variant: ColorType
  label: string
  disabled?: boolean
}

export const Button: FC<ButtonProps> = ({ variant, label, disabled }) => (
  <button
    className={buttonVariants[variant]}
    disabled={disabled}
  >
    {label}
  </button>
)