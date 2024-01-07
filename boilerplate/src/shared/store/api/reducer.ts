import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

import { BASE_API_URL } from './constatnts';

export const tagTypes = ['Films'] as const;

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return (action.payload as { [key: string]: any })[reducerPath];
    }
  },
  tagTypes,
  endpoints: () => ({}),
});