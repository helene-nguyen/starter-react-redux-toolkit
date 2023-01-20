import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: 'apiTest',
  // Permet de définir l'API à partir de laquelle nous voulons récupérer les données
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  // tagTypes: ['GET'],
  endpoints: (builder) => ({
    getAllJSON: builder.query({
      query: () => '/posts',
    }),
  }),
});

export const { useGetAllJSONQuery } = apiSlice;

export default apiSlice.reducer;


