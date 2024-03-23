import { style, styleVariants } from '@vanilla-extract/css';
import { colorDefinitions, colorVariants } from '../../styles/variants/colors.css';
import { colorsThemes } from '../../styles/themes/colors.css';
import { borderStyleThemes } from '../../styles/themes/borders.css';

export const base = style({
  appearance: "none",
  borderRadius: "50%",
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

export const radioVariants = styleVariants(colorVariants,
  (_variant, key) => {
    const refColor = colorDefinitions[key].backgroundColor;
    const specific = {
      "selectors": {
        "&:not(disabled)": {
          "borderColor": colorDefinitions[key].color,
        },
        "&:disabled": {
          "borderColor": colorsThemes.interface.disabled,
        },
        "&:not(disabled):hover::after": {
          backgroundColor: refColor,
        },
        "&:not(disabled):checked::after": {
          backgroundColor: refColor,
        },
        "&:disabled:checked::after": {
          backgroundColor: colorsThemes.interface.disabled,
        }
      }
    };
    return [borderStyleThemes.type.normal, base, specific];
  }
);
