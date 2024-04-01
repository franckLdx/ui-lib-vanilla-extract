import { style, styleVariants } from '@vanilla-extract/css';
import { colorsDefinitions, colorsThemes } from '../../styles/colors.css';
import { borderColorsTheme, bordersDefinitions } from '../../styles/border.css';

const base = style({
  padding: 8,
  cursor: 'pointer',
  ":active": {
    border: "2px solid"
  },
  ":disabled": {
    backgroundColor: colorsThemes.interface.disabled,
    cursor: 'not-allowed'
  },
  selectors: {
    '&:hover:not(:disabled)': {
      opacity: .8
    },
  }
})


export const buttonVariants = styleVariants(
  colorsDefinitions,
  (colorsDefinition, key) => {
    let styles = [base, colorsDefinition]
    if (key === "dark") {
      styles = [
        ...styles,
        {
          borderStyle: "normal",
          ":active": {
            backgroundColor: colorsThemes.interface.lightgray,
          },
          ":disabled": {
            color: colorsThemes.text.dark,
          }
        }
      ]
    }
    if (key === "bright") {
      styles = [
        ...styles,
        {
          borderColor: borderColorsTheme.borderDark,
          borderStyle: bordersDefinitions.borderNormalSmall
        }
      ]
    } else {
      styles = [
        ...styles,
        {
          borderStyle: "none"
        }
      ]
    }
    return styles
  }
)
