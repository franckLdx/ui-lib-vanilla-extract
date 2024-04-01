import { style, styleVariants } from '@vanilla-extract/css';
import { colorsDefinitions, colorsThemes } from '../../styles/colors.css';

const base = style({
  width: "20px",
  height: "20px",
  backgroundColor: "inherit",
  "selectors": {
    "&:not(disabled)": {
      cursor: "pointer"
    },
    "&:disabled": {
      cursor: "not-allowed"
    },
    "&::after": {
      backgroundColor: "red"
    }
  }
})

export const checkBoxVariants = styleVariants(colorsDefinitions,
  colorDefinition => {
    const specific = {
      "selectors": {
        "&:checked:not(disabled)": {
          "backgroundColor": colorDefinition.backgroundColor,
        },
        "&:not(disabled)": {
          "borderColor": colorDefinition.color,
        },
        "&:disabled": {
          "borderColor": colorsThemes.interface.disabled,
        },
        "&:checked:disabled": {
          "borderColor": colorsThemes.interface.disabled,
        },
      }
    }
    return [base, colorDefinition, specific]
  }
)