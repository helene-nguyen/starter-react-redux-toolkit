import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// Import the action
import { setCredentials, logOut } from '../Reducers/Features/Auth';

const baseUrl = 'http://localhost:4200/api/v1';
// const baseUrl = 'http://127.0.0.1:4100/api/v1';

// prepareHeaders => Allows you to inject headers on every request
// Automatically include authorization headers for your API requests
const prepareHeaders = (headers, { getState }) => {
  // we want to send the access token on every request
  const token = getState().auth.token;
  // If we have a token set in state, let's assume that we should be passing it.
  if (token) headers.set('authorization', `Bearer ${token}`);
  //check authorization headers uppercase or lowercase
  return headers;
};

// params => require when create custom query function
const baseQueryWithReAuth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  // we want to send
};

const options = {
  reducerPath: 'apiRentolio',
  // Set a default timeout of 10 seconds
  baseQuery: fetchBaseQuery({
    baseUrl,
    // to send back the cookies, you
    credentials: 'include',
    prepareHeaders,
    timeout: 10000,
  }),

  //RTK Query lets us define relationships between queries and mutations to enable automatic data refetching, using "tags"
  tagTypes: ['RENTAL', 'USER', 'CATEGORY'],

  endpoints: (build) => ({
    getAllCategories: build.query({
      query: () => ({
        url: '/categories',
        // Backend API always returns a 200,
        // but sets an `isError` property when there is an error.
        // By default, fetchBaseQuery will reject any Response that does not have a status code of 2xx and set it to error
        validateStatus: (response, result) => response.status === 200 && !result.isError,
        // users endpoint is really fast because it's always cached
        // configure if its over > 1000ms, something is wrong and we should abort the request
        timeout: 1000,
      }),
      providesTags: ['CATEGORY'],
    }),

    //& USER
    signIn: build.mutation({
      query: (body) => ({
        url: '/signin',
        method: 'POST',
        body,
        // Body is automatically converted to json with the correct headers
      }),
    }),

    //& RENTAL
    getAllRentals: build.query({
      query: () => ({
        url: '/rentals',
        validateStatus: (response, result) => response.status === 200 && !result.isError,
        timeout: 1000,
      }),
      providesTags: ['RENTAL'],
    }),

    createRental: build.mutation({
      query: (body) => ({
        url: `/rentals`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['RENTAL'],
    }),

    deleteRental: build.mutation({
      query: (body) => ({
        url: `/rentals/${body.id}`,
        method: 'DELETE',
        body,
      }),
    }),
  }),
};

export const rentolioApiSlice = createApi(options);

// Hooks automatically generated based on the name of the endpoint
// useQuery is the primary Hook => automatically fetches data from an endpoint
export const { useGetAllCategoriesQuery, useSignInMutation, useGetAllRentalsQuery, useCreateRentalMutation } = rentolioApiSlice;

export default rentolioApiSlice.reducer;
