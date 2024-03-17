import { style, styleVariants } from '@vanilla-extract/css';
import { borders } from "../../styles/borders.css";
import { variantDefinitions, variantStyles } from '../../styles/variants.css';
import { colors } from '../../styles/colors.css';

const base = style({
  appearance: "none",
  borderRadius: "50%",
  border: borders.style.normal,
  width: "20px",
  height: "20px",
  backgroundColor: "inherit",
  "::after": {
    display: "block",
    content: " ",
    borderRadius: "50%",
    border: "none",
    width: "70%",
    height: "70%",
    transform: "translate(3px, 3px)"
  },
  "selectors": {
    "&:not(disabled)": {
      cursor: "pointer"
    },
    "&:disabled": {
      cursor: "not-allowed"
    },
  }
})


export const radioStyles = styleVariants(variantStyles,
  (_variant, key) => {
    const refColor = variantDefinitions[key].backgroundColor
    const specific = {
      "selectors": {
        "&:not(disabled)": {
          "borderColor": variantDefinitions[key].color,
        },
        "&:disabled": {
          "borderColor": colors.interface.disabled,
        },
        "&:not(disabled):hover::after": {
          backgroundColor: refColor,
        },
        "&:not(disabled):checked::after": {
          backgroundColor: refColor,
        },
        "&:disabled:checked::after": {
          backgroundColor: colors.interface.disabled,
        }
      }
    }
    return [base, specific]
  }
)