import { SxProps, Theme } from '@mui/material/styles';

export const boxContainerSx: SxProps<Theme> = (theme) => ({
  boxShadow:
    '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
  borderRadius: '12px',
  background: theme.palette.blue[50],
  overflow: 'inherit',
  p: 3,
});

export const cardContentSx: SxProps<Theme> = {
  p: '0 !important',
};

export const titleSx: SxProps<Theme> = (theme) => ({
  ...theme.typography.text.md.semibold,
  mt: 2,
  mb: 1,

  '&:first-letter': {
    textTransform: 'uppercase',
  },
});

export const bodySx: SxProps<Theme> = (theme) => ({
  '&:first-letter': {
    textTransform: 'uppercase',
  },
});
