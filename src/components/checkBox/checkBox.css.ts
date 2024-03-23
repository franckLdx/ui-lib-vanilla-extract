import { style, styleVariants } from '@vanilla-extract/css';
import { colorDefinitions, colorVariants } from '../../styles/variants/colors.css';
import { colorsThemes } from '../../styles/themes/colors.css';
import { borderStyleThemes } from '../../styles/themes/borders.css';

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

export const checkBoxVariants = styleVariants(colorVariants,
  (_variant, key) => {
    const refColor = colorDefinitions[key].backgroundColor
    const specific = {
      "selectors": {
        "&:checked:not(disabled)": {
          "backgroundColor": refColor,
        },
        "&:not(disabled)": {
          "borderColor": colorDefinitions[key].color,
        },
        "&:disabled": {
          "borderColor": colorsThemes.interface.disabled,
        },
        "&:checked:disabled": {
          "borderColor": colorsThemes.interface.disabled,
        },
      }
    }
    return [borderStyleThemes.type.normal, base, specific]
  }
)