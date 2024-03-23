import { style, styleVariants } from '@vanilla-extract/css';
import { colorsThemes } from '../../styles/themes/colors.css';
import { colorDefinitions, colorVariants } from '../../styles/variants/colors.css';

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

export const radioVariants = styleVariants(colorVariants,
  (_variant, key) => {
    const common = {
      border: "1px solid",
      backgroundColor: "transparent",
    }
    const specific = {
      "selectors": {
        "&:not(disabled)": {
          "borderColor": colorDefinitions[key].color,
        },
        "&:disabled": {
          "borderColor": colorsThemes.interface.disabled,
        },
      }
    }
    return [baseContainer, common, specific]
  }
)