import { ColorVariant, colorsThemes } from "./colors.css"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const borderColorDefinitions: Record<ColorVariant, any> = {
  brand: colorsThemes.interface.brand,
  bright: colorsThemes.interface.bright,
  dark: colorsThemes.interface.dark
}

export type BorderStyle = 'none' | 'normal' | 'normalLeft' | 'biggerLeft' | 'normalRight'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const borderStyleDefinitions: Record<BorderStyle, any> = {
  none: { borderStyle: "none" },
  normal: { borderStyle: "1px solid" },
  normalLeft: { borderLeft: "1px solid" },
  biggerLeft: { borderLeft: "2px solid" },
  normalRight: { borderRight: "1px solid" }
}