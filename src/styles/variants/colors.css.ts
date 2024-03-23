import { styleVariants } from '@vanilla-extract/css';
import { Variant } from './variants.css';
import { colorsThemes } from '../themes/colors.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const colorDefinitions: Record<Variant, any> = {
  brand: {
    color: colorsThemes.text.dark,
    backgroundColor: colorsThemes.interface.brand
  },
  bright: {
    color: colorsThemes.text.dark,
    backgroundColor: colorsThemes.interface.bright
  },
  dark: {
    color: colorsThemes.text.bright,
    backgroundColor: colorsThemes.interface.dark
  },
} as const

export const colorVariants = styleVariants(colorDefinitions);