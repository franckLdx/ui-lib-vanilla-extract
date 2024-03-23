import { style, styleVariants } from '@vanilla-extract/css';
import { borderStyleThemes } from '../../styles/themes/borders.css';
import { colorsThemes } from '../../styles/themes/colors.css';
import { colorVariants } from '../../styles/variants/colors.css';

const base = style({
  padding: 8,
  cursor: 'pointer',
  ":active": {
    border: borderStyleThemes.type.bigger
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
  colorVariants,
  (_variant, key) => {
    const specific = key === 'dark' ? [dark] : []

    return [base, ...specific]
  }
)
