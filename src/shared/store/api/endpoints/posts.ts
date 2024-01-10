import { api } from '../reducer';

export interface Post {
  id?: string;
  title: string;
  body: string;
}

const postsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => {
        return {
          url: '/posts',
        };
      },
      providesTags: ['Posts'],
    }),
    addPost: builder.mutation<Post, Post>({
      query: (post) => ({
        url: '/posts',
        method: 'POST',
        body: post,
      }),
    }),
  }),

  overrideExisting: false,
});

export const { useGetPostsQuery, useAddPostMutation } = postsApi;
export const { getPosts, addPost } = postsApi.endpoints;
