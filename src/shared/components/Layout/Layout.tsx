import Container from '@mui/system/Container';
import { FC } from 'react';

import { Navigation } from './Navigation';
import { LayoutProps } from './types';

export const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <Container
      sx={{
        py: 2,
      }}
    >
      <Navigation />
      {children}
    </Container>
  </>
);
