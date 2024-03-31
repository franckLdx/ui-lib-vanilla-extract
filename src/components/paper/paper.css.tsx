import { style, styleVariants } from '@vanilla-extract/css';
import { colorDefinitions } from '../../styles/colors.css';
import { borderColorDefinitions } from '../../styles/border.css';

const base = style({
  padding: '8px',
  borderRadius: '4px'
})

export const paperVariants = styleVariants(
  colorDefinitions,
  (colorDefinition, key) => [
    base,
    colorDefinition,
    borderColorDefinitions[key]
  ]
)