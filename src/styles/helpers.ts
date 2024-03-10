import { createGlobalTheme } from '@vanilla-extract/css';

type Tokens = {
  [key: string]: string | Tokens;
};

export const createSquareTheme = <ThemeTokens extends Tokens>(tokens: ThemeTokens) => createGlobalTheme(
  ':root',
  {
    square: tokens
  }
)
