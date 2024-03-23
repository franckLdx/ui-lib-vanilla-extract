import { styleVariants } from '@vanilla-extract/css';
import { colorDefinitions } from '../../styles/colors.css';
import { borderColorVariantDefinitions } from '../../styles/border.css';

export const paperVariants = styleVariants(
  colorDefinitions,
  (colorDefinition, key) => [colorDefinition, borderColorVariantDefinitions[key]])