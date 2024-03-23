import { style, styleVariants } from '@vanilla-extract/css';
import { colorDefinitions, colorsThemes } from '../../styles/colors.css';

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

const dark = style({
  ":active": {
    backgroundColor: colorsThemes.interface.lightgray,
  },
  ":disabled": {
    color: colorsThemes.text.dark,
  }
})

export const buttonVariants = styleVariants(
  colorDefinitions,
  (colorDefinition, key) => {
    const specific = key === 'dark' ? [dark] : []

    return [base, colorDefinition, ...specific]
  }
)
