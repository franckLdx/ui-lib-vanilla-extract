import { colorsThemes } from "./colors.css"
import { createSquareTheme } from "./helpers"

export const { borderColors: borderColorsTheme } = createSquareTheme("borderColors", {
  borderBrand: colorsThemes.interface.brand,
  borderBright: colorsThemes.interface.bright,
  borderDark: colorsThemes.interface.dark
} as const)

export const { borderWidths: borderWidthsTheme } = createSquareTheme("borderWidths", {
  none: "none",
  small: "1px",
  medium: "2px",
  large: "3px",
  big: "4px",
})

export const bordersDefinitions = {
  borderNone: {
    border: "none"
  },
  borderNormalSmall: {
    border: `${borderWidthsTheme.small} solid`
  },
  borderNormalMedium: {
    border: `${borderWidthsTheme.medium} solid`
  },
  borderNormalLarge: {
    border: `${borderWidthsTheme.large} solid`
  },
  borderLeftSmall: {
    borderLeft: `${borderWidthsTheme.small} solid`
  },
  borderLeftMedium: {
    borderLeft: `${borderWidthsTheme.medium} solid`
  },
  borderLeftLarge: {
    borderLeft: `${borderWidthsTheme.large} solid`
  },
  borderLeftBig: {
    borderLeft: `${borderWidthsTheme.big} solid`
  },
  borderRightSmall: {
    borderRight: `${borderWidthsTheme.small} solid`
  },
  borderRightMedium: {
    borderRight: `${borderWidthsTheme.medium} solid`
  },
  borderRightLarge: {
    borderRight: `${borderWidthsTheme.large} solid`
  },
} as const