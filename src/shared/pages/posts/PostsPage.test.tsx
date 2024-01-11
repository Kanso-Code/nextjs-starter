import '@testing-library/jest-dom';

import { render, renderHook, screen, waitFor } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { AppStore, makeStore } from '~/shared/store';
import { BASE_API_URL } from '~/shared/store/api/constants';
import { useGetPostsQuery } from '~/shared/store/api/hooks';

import { PostsPage } from './PostsPage';

let store: AppStore;

beforeEach(() => {
  store = makeStore();
  fetchMock.resetMocks();
});

function wrapper({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

describe('PostsPage', () => {
  const data = {};
  const endpointName = 'getPosts';

  beforeAll(() => {
    fetchMock.mockOnceIf(BASE_API_URL, () =>
      Promise.resolve({
        status: 200,
        body: JSON.stringify({ data }),
      }),
    );
  });

  it('should fetch and render posts', async () => {
    render(wrapper({ children: <PostsPage /> }));

    const { result } = renderHook(() => useGetPostsQuery(), {
      wrapper,
    });

    expect(result.current).toMatchObject({
      status: 'pending',
      endpointName,
      isLoading: true,
      isSuccess: false,
      isError: false,
      isFetching: true,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current).toMatchObject({
      status: 'fulfilled',
      endpointName,
      data,
      isLoading: false,
      isSuccess: true,
      isError: false,
      currentData: data,
      isFetching: false,
    });

    expect(await screen.findByTestId('postList')).toBeInTheDocument();
  });
});
