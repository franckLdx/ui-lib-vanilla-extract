import { style, styleVariants } from '@vanilla-extract/css';
import { colorDefinitions, colorsThemes } from '../../styles/colors.css';

const baseContainer = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: '8px',
  gap: '4px',
})

export const containerState = styleVariants({
  "enabled": {
    cursor: "pointer",
  },
  "disabled": {
    cursor: "not-allowed"
  }
})

export const radioVariants = styleVariants(
  colorDefinitions,
  colorDéfinition => {
    const common = {
      border: "1px solid",
      backgroundColor: "transparent",
    }
    const specific = {
      "selectors": {
        "&:not(disabled)": {
          "borderColor": colorDéfinition.color,
        },
        "&:disabled": {
          "borderColor": colorsThemes.interface.disabled,
        },
      }
    }
    return [baseContainer, colorDéfinition, common, specific]
  }
)