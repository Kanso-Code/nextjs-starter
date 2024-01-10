import { SxProps, Theme } from '@mui/material/styles';

export const boxContainerSx: SxProps<Theme> = (theme) => ({
  position: 'relative',
  boxShadow:
    '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
  borderRadius: '12px',
  overflow: 'inherit',
  background: theme.palette.blue[50],
  width: '700px',
  p: 3,
});

export const confirmationSx: SxProps<Theme> = (theme) => ({
  position: 'absolute',
  top: '200px',
  left: '275px',
  zIndex: 1,
  width: '250px',
  alignItems: 'center',
  p: '12px',
  borderRadius: '12px',
  border: `1px solid ${theme.palette.gray[500]}`,
  background: theme.palette.common.white,

  '& button': {
    mt: 1,
  },
});

export const inputSx: SxProps<Theme> = {
  marginBottom: '10px',
  display: 'flex',
  gap: 1,
  justifyContent: 'flex-start',
  flexDirection: { xs: 'column', sm: 'row' },
};

export const inputLabelSx: SxProps<Theme> = (theme) => ({
  ...theme.typography.text.sm.semibold,
  color: `${theme.palette.gray[700]} !important`,
  width: { xs: '100%', sm: '280px' },
  marginBottom: '4px',
});

export const inputFieldSx: SxProps<Theme> = (theme) => ({
  width: { xs: '100%', sm: '512px' },
  mt: 0,
  background: theme.palette.common.white,

  '.MuiFormControlLabel-root': {
    width: 'fit-content',
    ml: 0,
    mr: 0,
  },

  '& input': {
    height: '27px',
    ...theme.typography.text.md.normal,
  },
  '& textarea': {
    ...theme.typography.text.md.normal,
  },
});

export const saveBtnSx: SxProps<Theme> = (theme) => ({
  height: '40px',
  width: '150px',
  color: 'white',
  p: '8px 14px',
  ...theme.typography.text.sm.bold,
});
