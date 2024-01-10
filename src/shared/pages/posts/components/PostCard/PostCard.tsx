import { Card, CardContent, Typography } from '@mui/material';
import { FC } from 'react';

import { bodySx, boxContainerSx, cardContentSx, titleSx } from './styles';
import { PostCardProps } from './types';

export const PostCard: FC<PostCardProps> = ({ post }) => (
  <Card sx={boxContainerSx}>
    <CardContent sx={cardContentSx}>
      <Typography sx={titleSx}>{post?.title}</Typography>
      <Typography sx={bodySx}>{post?.body}</Typography>
    </CardContent>
  </Card>
);
