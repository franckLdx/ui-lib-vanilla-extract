import { createSquareTheme } from "./helpers";

export const { borders } = createSquareTheme('borders', {
  radius: { normal: '4px' },
  style: {
    normal: '1px solid',
    bigger: "2px solid",
    bigest: "3px solid"
  }
})