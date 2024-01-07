import type { TypographyStyleOptions } from '@mui/material/styles/createTypography';

import { fontWeights } from '~/shared/theme/typography/fontWeights';

const xlBase: TypographyStyleOptions = {
  fontSize: '60px',
  lineHeight: '72px',
};

export const normal: TypographyStyleOptions = {
  ...xlBase,
  fontWeight: fontWeights.regular,
};

export const medium: TypographyStyleOptions = {
  ...xlBase,
  fontWeight: fontWeights.medium,
};

export const semibold: TypographyStyleOptions = {
  ...xlBase,
  fontWeight: fontWeights.semibold,
};

export const bold: TypographyStyleOptions = {
  ...xlBase,
  fontWeight: fontWeights.bold,
};
