import type { TypographyStyleOptions } from '@mui/material/styles/createTypography';

import { fontWeights } from '~/shared/theme/typography/fontWeights';

const xxlBase: TypographyStyleOptions = {
  fontSize: '30px',
  lineHeight: '38px',
};

export const normal: TypographyStyleOptions = {
  ...xxlBase,
  fontWeight: fontWeights.regular,
};

export const medium: TypographyStyleOptions = {
  ...xxlBase,
  fontWeight: fontWeights.medium,
};

export const semibold: TypographyStyleOptions = {
  ...xxlBase,
  fontWeight: fontWeights.semibold,
};

export const bold: TypographyStyleOptions = {
  ...xxlBase,
  fontWeight: fontWeights.bold,
};
