import { styleVariants } from '@vanilla-extract/css';
import { colors } from './colors.css';

export const variants = styleVariants({
  brand: {
    color: colors.text.dark,
    background: colors.interface.brand
  },
  bright: {
    color: colors.text.dark,
    background: colors.interface.bright
  },
  dark: {
    color: colors.text.bright,
    background: colors.interface.dark
  },
});

export type Variant = keyof typeof variants

export const variantNames: Record<Variant, string> = Object.keys(variants).reduce(
  (acc, name) => ({ ...acc, [name.toUpperCase()]: name }),
  {} as Record<Variant, string>
)