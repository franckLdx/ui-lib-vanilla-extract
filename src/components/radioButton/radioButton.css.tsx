import { style, styleVariants } from '@vanilla-extract/css';
import { variantDefinitions, variantStyles } from '../../styles/variants.css';
import { colors } from '../../styles/colors.css';

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

export const radioStyles = styleVariants(variantStyles,
  (_variant, key) => {
    const common = {
      border: "1px solid",
      backgroundColor: "transparent",
    }
    const specific = {
      "selectors": {
        "&:not(disabled)": {
          "borderColor": variantDefinitions[key].color,
        },
        "&:disabled": {
          "borderColor": colors.interface.disabled,
        },
      }
    }
    return [baseContainer, common, specific]
  }
)