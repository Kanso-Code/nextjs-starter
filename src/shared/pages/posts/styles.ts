import { SxProps, Theme } from '@mui/material/styles';

export const headerSx: SxProps<Theme> = (theme) => ({
  mb: 2,
  mt: 2,
  ...theme.typography.text?.lg?.semibold,
});
