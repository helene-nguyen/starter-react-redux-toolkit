import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:4100/api/v1';

// prepareHeaders => Allows you to inject headers on every request
// Automatically include authorization headers for your API requests
const prepareHeaders = (headers, { getState }) => {
  const token = getState().auth.token;
  // If we have a token set in state, let's assume that we should be passing it.
  if (token) headers.set('authorization', `Bearer ${token}`);

  return headers;
};

const options = {
  reducerPath: 'apiRentolio',
  // Set a default timeout of 10 seconds
  baseQuery: fetchBaseQuery({ baseUrl, timeout: 10000 }),

  //RTK Query lets us define relationships between queries and mutations to enable automatic data refetching, using "tags"
  tagTypes: ['GET'],

  endpoints: (build) => ({
    
    getAllRentals: build.query({
      query: () => ({
        url: '/rentals',
        // Backend API always returns a 200,
        // but sets an `isError` property when there is an error.
        // By default, fetchBaseQuery will reject any Response that does not have a status code of 2xx and set it to error
        validateStatus: (response, result) => response.status === 200 && !result.isError,
        // users endpoint is really fast because it's always cached
        // configure if its over > 1000ms, something is wrong and we should abort the request
        timeout: 1000,
      }),
      providesTags: ['GET'],
    }),

    createRental: build.mutation({
      query: (payload) => ({
        url: `/rentals`,
        method: 'POST',
        body: payload, // Body is automatically converted to json with the correct headers
      }),
      invalidatesTags: ['GET'],
    }),
  }),
};

export const rentolioApiSlice = createApi(options);
export const { useGetAllRentalsQuery, useCreateRentalMutation } = rentolioApiSlice;
export default rentolioApiSlice.reducer;
