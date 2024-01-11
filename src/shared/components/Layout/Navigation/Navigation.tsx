import MenuList from '@mui/material/MenuList';

import { NavMenuItem } from './NavMenuItem';
import { navLeftSx, topLevelNavItemSx } from './styles';

export const Navigation = () => (
  <MenuList sx={navLeftSx}>
    <NavMenuItem
      dataTestId="homeNavItem"
      isSelected
      sx={topLevelNavItemSx}
      href="/"
    >
      Home
    </NavMenuItem>
    <NavMenuItem
      dataTestId="postsNavItem"
      isSelected
      sx={topLevelNavItemSx}
      href="/posts"
    >
      Posts
    </NavMenuItem>
  </MenuList>
);
