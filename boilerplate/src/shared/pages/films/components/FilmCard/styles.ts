import { SxProps, Theme } from '@mui/material/styles';

export const boxContainerSx: SxProps<Theme> = {
  boxShadow:
    '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
  borderRadius: '12px',
  overflow: 'inherit',
  p: 3,
};

export const mediaContainerSx: SxProps<Theme> = {
  height: '400px',
  flexDirection: 'row',
};

export const mediaSx: SxProps<Theme> = {
  width: '100%',
  borderRadius: '12px',
};

export const cardContentSx: SxProps<Theme> = {
  p: '0 !important',
};

export const titleSx: SxProps<Theme> = (theme) => ({
  ...theme.typography.text.md.semibold,
  mt: 2,
});

export const originalTitleSx: SxProps<Theme> = (theme) => ({
  ...theme.typography.text.sm.normal,
  mt: 1,
  mb: 2,
});
