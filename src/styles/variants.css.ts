import { styleVariants } from '@vanilla-extract/css';
import { colors } from './colors.css';

export const variantDefinitions = {
  brand: {
    color: colors.text.dark,
    backgroundColor: colors.interface.brand
  },
  bright: {
    color: colors.text.dark,
    backgroundColor: colors.interface.bright
  },
  dark: {
    color: colors.text.bright,
    backgroundColor: colors.interface.dark
  },
} as const

export const variantStyles = styleVariants(variantDefinitions);

export type Variant = keyof typeof variantDefinitions

export const variantNames: Record<Variant, string> = Object.keys(variantDefinitions).reduce(
  (acc, name) => ({ ...acc, [name.toUpperCase()]: name }),
  {} as Record<Variant, string>
)