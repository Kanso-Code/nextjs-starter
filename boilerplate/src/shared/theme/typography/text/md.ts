import type { TypographyStyleOptions } from '@mui/material/styles/createTypography';

import { fontWeights } from '~/shared/theme/typography/fontWeights';

const mdBase: TypographyStyleOptions = {
  fontSize: '16px',
  lineHeight: '24px',
};

export const normal: TypographyStyleOptions = {
  ...mdBase,
  fontWeight: fontWeights.regular,
};

export const medium: TypographyStyleOptions = {
  ...mdBase,
  fontWeight: fontWeights.medium,
};

export const semibold: TypographyStyleOptions = {
  ...mdBase,
  fontWeight: fontWeights.semibold,
};

export const bold: TypographyStyleOptions = {
  ...mdBase,
  fontWeight: fontWeights.bold,
};
