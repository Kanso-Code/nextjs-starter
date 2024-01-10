import { SxProps, Theme } from '@mui/material/styles';

export const containerSx: SxProps<Theme> = {
  mt: 2,
};

export const headerSx: SxProps<Theme> = (theme) => ({
  mb: 3,
  ...theme.typography.text.lg.semibold,
});
