import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:4100/api/v1';

const options = {
  reducerPath: 'apiRentolio',
  baseQuery: fetchBaseQuery({ baseUrl }),
  //RTK Query lets us define relationships between queries and mutations to enable automatic data refetching, using "tags"
  tagTypes: ['GET'],

  endpoints: (build) => ({

    getAllRentals2: build.query({
      query: () => '/rentals',
      providesTags: ['GET']
    }),

    createRental: build.mutation({
      query: (payload) => ({
        url: `/rentals`,
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['GET']
    }),
  }),
};

export const rentolioApiSlice = createApi(options);
export const { useGetAllRentals2Query, useCreateRentalMutation } = rentolioApiSlice;
export default rentolioApiSlice.reducer;
