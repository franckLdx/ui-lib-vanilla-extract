import { style, styleVariants } from '@vanilla-extract/css';
import { colorsDefinitions, colorsThemes } from '../../styles/colors.css';
import { bordersDefinitions } from '../../styles/border.css';

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

export const radioVariants = styleVariants(
  colorsDefinitions,
  colorsDefinition => {
    const refColor = colorsDefinition.backgroundColor;
    const specific = {
      "selectors": {
        "&:not(disabled)": {
          "borderColor": colorsDefinition.color,
          ...bordersDefinitions.borderNormalSmall
        },
        "&:disabled": {
          "borderColor": colorsThemes.interface.disabled,
        },
        "&:not(disabled):hover::after": {
          backgroundColor: refColor,
        },
        "&:not(disabled):checked::after": {
          backgroundColor: colorsDefinition.color,
        },
        "&:disabled:checked::after": {
          backgroundColor: colorsThemes.interface.disabled,
        }
      }
    };
    return [base, colorsDefinition, specific];
  }
);
