import { createGlobalTheme } from '@vanilla-extract/css';

export const colors = createGlobalTheme(
  ':root',
  {
    square: {
      color: {
        brand: 'black'
      }
    }
  }
)

