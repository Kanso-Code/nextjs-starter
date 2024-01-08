import { Card, CardContent, Stack, Typography } from '@mui/material';
import MuiCardMedia from '@mui/material/CardMedia';
import { FC } from 'react';

import {
  boxContainerSx,
  cardContentSx,
  mediaContainerSx,
  mediaSx,
  originalTitleSx,
  titleSx,
} from './styles';
import { FilmCardProps } from './types';

export const FilmCard: FC<FilmCardProps> = ({ film }) => (
  <Card sx={boxContainerSx}>
    <Stack sx={mediaContainerSx}>
      <MuiCardMedia image={film.image} sx={mediaSx} />
    </Stack>
    <CardContent sx={cardContentSx}>
      <Typography sx={titleSx}>{film?.title}</Typography>
      <Typography
        sx={originalTitleSx}
      >{`${film?.original_title}, ${film?.release_date} year, ${film?.running_time} minutes`}</Typography>
      <Typography>{film?.description}</Typography>
    </CardContent>
  </Card>
);
