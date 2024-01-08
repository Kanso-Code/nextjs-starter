import { SxProps, Theme } from '@mui/material/styles';

export const containerSx: SxProps<Theme> = {
  height: '90vh',
};

export const imageSx: SxProps<Theme> = (theme) => ({
  backgroundImage: 'url("./Logo.webp")',
  backgroundColor: theme.palette.blueLight[50],
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  height: '100%',
  width: 'auto',
});

export const headerSx: SxProps<Theme> = (theme) => ({
  mb: 3,
  ...theme.typography.text.lg.semibold,
});
