import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: 'apiTest',
  // Permet de définir l'API à partir de laquelle nous voulons récupérer les données
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  // tagTypes: ['GET'],
  endpoints: (builder) => ({
    getAllRentals: builder.query({
      query: () => '/posts',
    }),
  }),
});

export const { useGetAllRentalsQuery } = apiSlice;

export default apiSlice.reducer;

/*

/*
---------------
ETAPE 1 - UTILISATION DE CREATEAPI
---------------
ETAPE 2 - EXPORT dans le cas des requêtes use<nomEndpoint>Query - dans le cas des mutations use<nomEndpoint>Mutation

The hooks are automatically named based on a standard convention:

- use, the normal prefix for any React hook
- The name of the endpoint, capitalized
- The type of the endpoint, Query or Mutation

In this case, our endpoint is getPosts and it's a query endpoint, so the generated hook is useGetPostsQuery.


---------------
ETAPE 3 - METTRE EN PLACE L'APIPROVIDER
---------------
ETAPE 4 - IMPORTER DS LE COMPONENT LE USEQUERY
---------------
ETAPE 5 - ADD REDUCERPATH DANS LE STORE ?
Uncaught Error: Warning: Middleware for RTK-Query API at reducerPath "api" has not been added to the store.
exemple: 
import { apiSlice } from '../features/api/apiSlice'

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    notifications: notificationsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})

-- Questions :

- Comment configurer headers + renvoi jwt ?
- Comment gérer avec le middwleware ?

-- Tests :
- Voir si on récupère le state avec useSelector `state.api`

*/
