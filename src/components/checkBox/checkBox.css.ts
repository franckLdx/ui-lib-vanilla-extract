import { style, styleVariants } from '@vanilla-extract/css';
import { colorDefinitions, colorsThemes } from '../../styles/colors.css';

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

export const checkBoxVariants = styleVariants(colorDefinitions,
  colorDefinition => {
    const refColor = colorDefinition.backgroundColor
    const specific = {
      "selectors": {
        "&:checked:not(disabled)": {
          "backgroundColor": refColor,
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