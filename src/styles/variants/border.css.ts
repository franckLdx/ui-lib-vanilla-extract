import { styleVariants } from '@vanilla-extract/css';
import { colorsThemes } from '../themes/colors.css';
import { Variant } from './variants.css';
import { borderStyleThemes } from '../themes/borders.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const borderColorVariantDefinitions: Record<Variant, any> = {
  brand: colorsThemes.interface.brand,
  bright: colorsThemes.interface.bright,
  dark: colorsThemes.interface.dark
}

export const borderColorVariants = styleVariants(borderColorVariantDefinitions);

export type BorderType = 'none' | 'normal' | 'normalLeft' | 'biggerLeft' | 'normalRight'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const borderTypeDefinitions: Record<BorderType, any> = {
  none: {
    border: 'none'
  },
  normal: {
    border: borderStyleThemes.type.normal
  },
  normalLeft: {
    borderLeft: borderStyleThemes.type.normal
  },
  biggerLeft: {
    borderLeft: borderStyleThemes.type.bigger
  },
  normalRight: {
    borderRight: borderStyleThemes.type.normal
  }
}

export const borderTypeVariants = styleVariants(
  borderTypeDefinitions,
  variant => {
    return {
      borderColor: variant.color
    }
  })