import { createGlobalTheme } from '@vanilla-extract/css';

type Tokens = {
  [key: string]: string | Tokens;
};

export const createSquareTheme = <ThemeTokens extends Tokens>(name: string, tokens: ThemeTokens) => createGlobalTheme(
  ':root',
  {
    [name]: tokens
  }
)
