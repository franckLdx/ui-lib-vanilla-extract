import { createSquareTheme } from "./helpers";

export const { borderStyles: borderStyleThemes } = createSquareTheme('borderStyle', {
  type: {
    normal: '1px solid',
    bigger: "2px solid",
    bigest: "3px solid"
  },
  radius: {
    normal: '4px'
  },
})

