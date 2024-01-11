import MenuItem from '@mui/material/MenuItem';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { NavMenuItemProps } from './types';

export const NavMenuItem: FC<NavMenuItemProps> = ({
  children,
  sx,
  href,
  dataTestId,
  isSelected,
}) => {
  const router = useRouter();
  const selected = router.asPath === href && Boolean(isSelected);

  return (
    <NextLink href={href} data-testid={dataTestId}>
      <MenuItem sx={sx} selected={selected}>
        {children}
      </MenuItem>
    </NextLink>
  );
};
