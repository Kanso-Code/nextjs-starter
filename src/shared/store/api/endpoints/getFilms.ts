import { api } from '../reducer';

export interface Film {
  id: string;
  title: string;
  original_title: string;
  original_title_romanised: string;
  description: string;
  director: string;
  producer: string;
  image: string;
  release_date: string;
  running_time: string;
  rt_score: string;
  people: any[];
  species: any[];
  locations: any[];
  vehicles: any[];
  url: string;
}

const getFilmsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getFilms: builder.query<Film[], void>({
      query: () => {
        return {
          url: '/films',
        };
      },
      providesTags: ['Films'],
    }),
  }),

  overrideExisting: false,
});

export const { useGetFilmsQuery } = getFilmsApi;
export const { getFilms } = getFilmsApi.endpoints;
