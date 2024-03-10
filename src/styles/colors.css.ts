import { createSquareTheme } from './helpers';

export const { square: colors } = createSquareTheme({
  interface: {
    brand: '#f5b027',
    dark: '#232323',
    bright: "#fff",
    grey: 'gray',
    lightgray: 'lightgray',
    darkgray: 'darkgray',
    disabled: "#989898"
  },
  text: {
    dark: '#232323',
    bright: "#fff"
  }
})
