import { style, styleVariants } from '@vanilla-extract/css';
import { colorsDefinitions, colorsThemes } from '../../styles/colors.css';
import { bordersDefinitions } from '../../styles/border.css';

const base = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: '8px',
  gap: '4px',
  ...bordersDefinitions.borderNormalSmall
})

export const state = styleVariants({
  "enabled": {
    cursor: "pointer",
  },
  "disabled": {
    cursor: "not-allowed"
  }
})

export const radioButtonVariants = styleVariants(
  colorsDefinitions,
  colorsDefinition => {
    const specific = {
      "selectors": {
        "&:not(disabled)": {
          "borderColor": colorsDefinition.color,
        },
        "&:disabled": {
          "borderColor": colorsThemes.interface.disabled,
        },
      }
    }
    return [base, colorsDefinition, specific]
  }
)