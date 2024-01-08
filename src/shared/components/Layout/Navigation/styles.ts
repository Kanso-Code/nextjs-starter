import { SxProps, Theme } from '@mui/material/styles';

export const navLeftSx: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'row',
  flexGrow: 1,
  '& a': {
    textDecoration: 'none',
  },
};

export const topLevelNavItemSx: SxProps<Theme> = (theme) => ({
  borderRadius: 1,
  mx: '4px',
  px: '12px',
  color: theme.palette.gray[700],
  ...theme.typography.text.sm.medium,
  '&.Mui-selected, &.MuiMenuItem-root:hover': {
    color: theme.palette.primary.main,
    bgcolor: theme.palette.primary[50],
  },
});
