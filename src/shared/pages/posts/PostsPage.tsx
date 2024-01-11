import { Masonry } from '@mui/lab';
import { Grid, Stack, Typography } from '@mui/material';

import { wrapper } from '~/shared/store';
import { getPosts } from '~/shared/store/api/endpoints/posts';
import { useGetPostsQuery } from '~/shared/store/api/hooks';
import { api } from '~/shared/store/api/reducer';

import { PostCard } from './components';
import { headerSx } from './styles';

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    store.dispatch(getPosts.initiate());
    await Promise.all(store.dispatch(api.util.getRunningQueriesThunk()));

    return {
      props: {},
    };
  },
);

export const PostsPage = () => {
  const { data: posts } = useGetPostsQuery();

  return (
    <Stack data-testid="postsPage">
      <Typography sx={headerSx}>All posts</Typography>
      <Grid container spacing={4} rowSpacing={3} justifyContent="center" mt={1}>
        {!!posts?.length && (
          <Masonry columns={{ xs: 1, sm: 2 }} spacing={5}>
            {posts?.map((post) => <PostCard key={post.id} post={post} />)}
          </Masonry>
        )}
      </Grid>
    </Stack>
  );
};
