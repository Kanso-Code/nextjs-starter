import { Masonry } from '@mui/lab';
import { Grid, Stack, Typography } from '@mui/material';

import { wrapper } from '~/shared/store';
import { getFilms } from '~/shared/store/api/endpoints/getFilms';
import { useGetFilmsQuery } from '~/shared/store/api/hooks';
import { api } from '~/shared/store/api/reducer';

import { FilmCard } from './components';
import { headerSx } from './styles';

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    store.dispatch(getFilms.initiate());
    // await Promise.all(api.util.getRunningOperationPromises());

    return {
      props: {},
    };
  },
);

export const FilmsPage = () => {
  const { data: films } = useGetFilmsQuery();

  return (
    <Stack>
      <Typography sx={headerSx}>Studio Ghibli Films</Typography>
      <Grid container spacing={4} rowSpacing={3} justifyContent="center" mt={1}>
        {!!films?.length && (
          <Masonry columns={{ xs: 1, sm: 2 }} spacing={5}>
            {films?.map((film) => <FilmCard key={film.id} film={film} />)}
          </Masonry>
        )}
      </Grid>
    </Stack>
  );
};
