import type { TypographyStyleOptions } from '@mui/material/styles/createTypography';

import { fontWeights } from '~/shared/theme/typography/fontWeights';

const smBase: TypographyStyleOptions = {
  fontSize: '14px',
  lineHeight: '20px',
};

export const normal: TypographyStyleOptions = {
  ...smBase,
  fontWeight: fontWeights.regular,
};

export const medium: TypographyStyleOptions = {
  ...smBase,
  fontWeight: fontWeights.medium,
};

export const semibold: TypographyStyleOptions = {
  ...smBase,
  fontWeight: fontWeights.semibold,
};

export const bold: TypographyStyleOptions = {
  ...smBase,
  fontWeight: fontWeights.bold,
};
