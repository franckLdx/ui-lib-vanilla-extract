import { createSquareTheme } from "./helpers";

export const { colors: colorsThemes } = createSquareTheme('colors', {
  interface: {
    brand: '#f5b027',
    dark: '#232323',
    bright: "#fff",
    grey: 'gray',
    lightgray: 'lightgray',
    darkgray: 'darkgray',
    disabled: "#989898",
  },
  text: {
    dark: '#232323',
    bright: "#fff"
  }
})

export type ColorVariant = "brand" | "bright" | "dark"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const colorDefinitions: Record<ColorVariant, any> = {
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
