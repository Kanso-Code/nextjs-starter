import type { PaletteOptions } from '@mui/material/styles/createPalette';

import {
  blue,
  blueGray,
  blueLight,
  cyan,
  error,
  gray,
  indigo,
  orange,
  pink,
  purple,
  rose,
  success,
  warning,
} from './colors';

declare module '@mui/material' {
  interface Color {
    25?: string;
  }
}

declare module '@mui/material/styles/createPalette' {
  interface PaletteColor extends ColorPartial {}
  interface SimplePaletteColorOptions extends ColorPartial {}

  interface Palette {
    gray: ColorPartial;
    blueGray: ColorPartial;
    blueLight: ColorPartial;
    blue: ColorPartial;
    cyan: ColorPartial;
    indigo: ColorPartial;
    purple: ColorPartial;
    pink: ColorPartial;
    rose: ColorPartial;
    orange: ColorPartial;
  }
  interface PaletteOptions {
    gray: ColorPartial;
    blueGray: ColorPartial;
    blueLight: ColorPartial;
    blue: ColorPartial;
    cyan: ColorPartial;
    indigo: ColorPartial;
    purple: ColorPartial;
    pink: ColorPartial;
    rose: ColorPartial;
    orange: ColorPartial;
  }
}

export const palette: PaletteOptions = {
  mode: 'light',
  error: {
    ...error,
    main: error[700],
    light: error[500],
    dark: error[900],
  },
  warning: {
    ...warning,
    main: warning[700],
    light: warning[500],
    dark: warning[900],
  },
  info: {
    ...blue,
    main: blue[700],
    light: blue[500],
    dark: blue[900],
  },
  success: {
    ...success,
    main: success[700],
    light: success[500],
    dark: success[900],
  },
  grey: gray,
  gray,
  blueGray,
  blueLight,
  blue,
  cyan,
  indigo,
  purple,
  pink,
  rose,
  orange,
};
