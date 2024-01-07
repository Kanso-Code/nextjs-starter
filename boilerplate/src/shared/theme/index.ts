import { createTheme, ThemeOptions } from '@mui/material/styles';

import { palette } from './palette';
import { typography } from './typography';

const themeOptions: ThemeOptions = {
  palette,
  typography,
  shape: {
    borderRadius: 6,
  },
};

export const theme = createTheme(themeOptions);
