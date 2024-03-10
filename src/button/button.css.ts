import { style, styleVariants } from '@vanilla-extract/css';
import { borders } from '../styles/borders.css';
import { variants } from '../styles/variants.css';
import { colors } from '../styles/colors.css';

const base = style({
  padding: 8,
  borderRadius: borders.radius.normal,
  border: borders.style.normal,
  cursor: 'pointer',
  selectors: {
    '&:hover:not(:disabled)': {
      opacity: .8
    },
    "&:active": {
      border: borders.style.bigest
    },
    "&:disabled": {
      backgroundColor: colors.interface.darkgray,
      cursor: 'not-allowed'
    }
  }
})

const dark = style({
  ":active": {
    backgroundColor: colors.interface.lightgray,
  },
  ":disabled": {
    color: colors.text.dark,
  }
})

export const buttonStyle = styleVariants(
  variants,
  (variant, key) => {
    const common = [base, variant]
    const specific = key === 'dark' ? [dark] : []

    return [...common, ...specific]
  }
)
