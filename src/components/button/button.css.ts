import { style, styleVariants } from '@vanilla-extract/css';
import { borders } from '../../styles/borders.css';
import { variantStyles } from '../../styles/variants.css';
import { colors } from '../../styles/colors.css';

const base = style({
  padding: 8,
  borderRadius: borders.radius.normal,
  border: borders.style.normal,
  cursor: 'pointer',
  ":active": {
    border: borders.style.bigest
  },
  ":disabled": {
    backgroundColor: colors.interface.darkgray,
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
    backgroundColor: colors.interface.lightgray,
  },
  ":disabled": {
    color: colors.text.dark,
  }
})

export const buttonStyle = styleVariants(
  variantStyles,
  (variant, key) => {
    const common = [base, variant]
    const specific = key === 'dark' ? [dark] : []

    return [...common, ...specific]
  }
)
