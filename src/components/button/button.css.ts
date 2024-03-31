import { style, styleVariants } from '@vanilla-extract/css';
import { colorDefinitions, colorsThemes } from '../../styles/colors.css';
import { borderColorDefinitions, borderStyleDefinitions } from '../../styles/border.css';

const base = style({
  padding: 8,
  cursor: 'pointer',
  ":active": {
    border: "2px solid"
  },
  ":disabled": {
    backgroundColor: colorsThemes.interface.disabled,
    cursor: 'not-allowed'
  },
  selectors: {
    '&:hover:not(:disabled)': {
      opacity: .8
    },
  }
})

const dark = style({
  borderStyle: "normal",
  ":active": {
    backgroundColor: colorsThemes.interface.lightgray,
  },
  ":disabled": {
    color: colorsThemes.text.dark,
  }
})

const brightBorder = {
  borderStyle: borderStyleDefinitions.normal,
  borderColor: borderColorDefinitions.dark
}

export const buttonVariants = styleVariants(
  colorDefinitions,
  (colorDefinition, key) => {
    const specific = []
    switch (key) {
      case "dark":
        specific.push(dark)
        specific.push(borderStyleDefinitions.none)
        break;
      case "bright":
        specific.push(brightBorder)
        break;
      default:
        specific.push(borderStyleDefinitions.none)
        break;
    }

    return [base, colorDefinition, ...specific]
  }
)
