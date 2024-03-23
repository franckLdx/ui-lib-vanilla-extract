import { ColorVariant, colorsThemes } from "./colors.css"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const borderColorVariantDefinitions: Record<ColorVariant, any> = {
  brand: colorsThemes.interface.brand,
  bright: colorsThemes.interface.bright,
  dark: colorsThemes.interface.dark
}

export type BorderType = 'none' | 'normal' | 'normalLeft' | 'biggerLeft' | 'normalRight'
