import type { TypographyStyleOptions } from '@mui/material/styles/createTypography';

import { fontWeights } from '~/shared/theme/typography/fontWeights';

const lgBase: TypographyStyleOptions = {
  fontSize: '48px',
  lineHeight: '60px',
};

export const normal: TypographyStyleOptions = {
  ...lgBase,
  fontWeight: fontWeights.regular,
};

export const medium: TypographyStyleOptions = {
  ...lgBase,
  fontWeight: fontWeights.medium,
};

export const semibold: TypographyStyleOptions = {
  ...lgBase,
  fontWeight: fontWeights.semibold,
};

export const bold: TypographyStyleOptions = {
  ...lgBase,
  fontWeight: fontWeights.bold,
};
