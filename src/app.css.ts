import { style } from '@vanilla-extract/css';
import { colorsThemes } from './styles/themes/colors.css';

export const appStyle = style({
  backgroundColor: colorsThemes.interface.bright
});