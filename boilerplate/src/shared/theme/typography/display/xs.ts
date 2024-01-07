import type { TypographyStyleOptions } from '@mui/material/styles/createTypography';

import { fontWeights } from '~/shared/theme/typography/fontWeights';

const xsBase: TypographyStyleOptions = {
  fontSize: '24px',
  lineHeight: '32px',
};

export const normal: TypographyStyleOptions = {
  ...xsBase,
  fontWeight: fontWeights.regular,
};

export const medium: TypographyStyleOptions = {
  ...xsBase,
  fontWeight: fontWeights.medium,
};

export const semibold: TypographyStyleOptions = {
  ...xsBase,
  fontWeight: fontWeights.semibold,
};

export const bold: TypographyStyleOptions = {
  ...xsBase,
  fontWeight: fontWeights.bold,
};
