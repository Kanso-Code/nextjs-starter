import type { TypographyOptions } from '@mui/material/styles/createTypography';

import { display } from './display';
import { fontWeights } from './fontWeights';
import { text } from './text';

declare module '@mui/material/styles/createTypography' {
  interface Typography {
    display: typeof display;
    text: typeof text;
  }
  interface TypographyOptions {
    display: typeof display;
    text: typeof text;
  }
}

export const typography: TypographyOptions = {
  fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
  fontWeightLight: fontWeights.light,
  fontWeightRegular: fontWeights.regular,
  fontWeightMedium: fontWeights.medium,
  fontWeightBold: fontWeights.bold,
  h1: display.sm.medium,
  h2: display.xs.medium,
  h3: text.xl.medium,
  h4: text.lg.medium,
  h5: text.md.medium,
  h6: text.sm.medium,
  subtitle1: text.sm.normal,
  subtitle2: text.xs.normal,
  body1: text.sm.normal,
  body2: text.xs.normal,
  button: {
    ...text.sm.medium,
    textTransform: 'none',
  },
  caption: text.xs.normal,
  overline: {
    ...text.xs.normal,
    textTransform: 'none',
  },
  display,
  text,
};
