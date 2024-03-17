import { style, styleVariants } from '@vanilla-extract/css';
import { borders } from "../../styles/borders.css";
import { variantDefinitions, variantStyles } from '../../styles/variants.css';
import { colors } from '../../styles/colors.css';

const base = style({
  border: borders.style.normal,
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


export const CheckBoxStyles = styleVariants(variantStyles,
  (_variant, key) => {
    const refColor = variantDefinitions[key].backgroundColor
    const specific = {
      "selectors": {
        "&:checked:not(disabled)": {
          "backgroundColor": refColor,
        },
        "&:not(disabled)": {
          "borderColor": variantDefinitions[key].color,
        },
        "&:disabled": {
          "borderColor": colors.interface.disabled,
        },
        "&:checked:disabled": {
          "borderColor": colors.interface.disabled,
        },
      }
    }
    return [base, specific]
  }
)