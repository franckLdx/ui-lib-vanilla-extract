import { FC } from "react";
import { buttonVariants } from "./button.css";
import { ColorVariant } from "../../styles/colors.css";

interface ButtonProps {
  color: ColorVariant
  label: string
  disabled?: boolean
}

export const Button: FC<ButtonProps> = ({ color, label, disabled }) => (
  <button
    className={`${buttonVariants[color]}`}
    disabled={disabled}
  >
    {label}
  </button>
)