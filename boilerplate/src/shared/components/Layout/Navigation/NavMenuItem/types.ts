import { SxProps, Theme } from '@mui/material/styles';
import { ReactNode } from 'react';

export interface NavMenuItemProps {
  children: ReactNode;
  sx?: SxProps<Theme> | undefined;
  href: string;
  isSelected?: boolean;
}
