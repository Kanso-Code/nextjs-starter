import { Box, Stack, Typography } from '@mui/material';

import { containerSx, headerSx, imageSx } from './styles';

export const HomePage = () => (
  <Stack sx={containerSx}>
    <Typography sx={headerSx}>Studio Ghibli API</Typography>
    <Box sx={imageSx} />
  </Stack>
);
