import { SxProps, Theme } from '@mui/material/styles';

export const headerSx: SxProps<Theme> = (theme) => ({
  mb: 3,
  ...theme.typography.text.lg.semibold,
});
