import { style, styleVariants } from '@vanilla-extract/css';
import { colorsDefinitions } from '../../styles/colors.css';
import { borderColorsTheme, bordersDefinitions } from '../../styles/border.css';

const base = style({
  padding: '8px',
  borderRadius: '4px'
})

export const paperVariants = styleVariants({
  "base": [
    base,
    colorsDefinitions.bright,
    bordersDefinitions.borderNormalSmall,
    { borderColor: borderColorsTheme.borderDark }
  ],
  "brand": [
    base,
    colorsDefinitions.brand,
    bordersDefinitions.borderLeftBig,
    { borderColor: borderColorsTheme.borderDark }
  ]
} as const)

export type PperVariants = keyof typeof paperVariants