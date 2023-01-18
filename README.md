# React Playground

React - Redux Toolkit - RTK Query

## API Slices : Redux integration

Internally, _createApi_ will call the Redux Toolkit _createSlice_ API to generate a slice reducer and corresponding action creators with the appropriate logic for caching fetched data.

```js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const allEndPoints = (builder) => ({
  //& Queries
  getAllRentals: builder.query({
    query: () => '/rentals',
  }),

  getOneRental: builder.query({
    query: (elem) => `/rentals/${elem.id}`,
  }),

  //& Mutations
  createRental: builder.mutation({
    query: () => ({
      url: `/rentals`,
      method: 'POST',
      body: JSON.stringify({
        date_start: '2023-01-01T00:00:00.956Z',
        date_end: '2023-05-05T00:00:00.956Z',
        vehicle_id: 4,
      }),
    }),
  }),

  updateRental: builder.mutation({
    query: (elem) => ({
      url: `/rentals/${elem.id}`,
      method: 'PATCH',
      body: JSON.stringify({
        vehicle_id: 3,
      }),
    }),
  }),

  deleteRental: builder.mutation({
    query: ({ id }) => ({
      url: `/rentals/${id}`,
      method: 'DELETE',
      body: id,
    }),
  }),

  //& Queries VEHICLE
  getAllVehicles: builder.query({
    query: () => '/vehicles',
  }),

  getOneVehicle: builder.query({
    query: (elem) => `/vehicles/${elem.id}`,
  }),
});

export const rentagenceApiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: 'apiRentagence',
  // Permet de définir l'API à partir de laquelle nous voulons récupérer les données
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4200/api/v1/' }),
  // tagTypes: ['GET'],
  endpoints: allEndPoints,
});

export const { useGetAllRentalsQuery, useGetAllVehiclesQuery } = rentagenceApiSlice;
```

```js
const { data: dataRental, isSuccess: successRental, isLoading, isError, isFetching, isUninitialized } = useGetAllRentalsQuery();
console.log('dataRental: ', dataRental);

const { data: dataVehicle, isSuccess: successVehicle } = useGetAllVehiclesQuery();
console.log('dataVehicles: ', dataVehicle);

//OR

const test = useGetAllRentalsQuery().data;
console.log('test: ', test);


  //^ -------------- MUTATION
  // const [ createRental, { isLoading, isError, isSuccess, isUninitialized } ] = useCreateRentalMutation();
  const [ createRental ] = useCreateRentalMutation();
  const [ updateRental ] = useUpdateRentalMutation();
  const [ deleteRental ] = useDeleteRentalMutation();

  //
  const createSubmit = async(e) => {
    e.preventDefault();
    try {
      const payload = await createRental({
              date_start: '2025-01-01T00:00:00.956Z',
              date_end: '2025-05-05T00:00:00.956Z',
              vehicle_id: 2,
            }).unwrap();
      console.log('fulfilled', payload)
    } catch (error) {
      console.error('rejected', error);
    }
}
  
const updateSubmit = async(e) => {
  e.preventDefault();
  try {
    const payload = await updateRental({vehicle_id: 2}).unwrap();
    console.log('fulfilled', payload)
  } catch (error) {
    console.error('rejected', error);
  }
}
  
const deleteSubmit = async(e) => {
  e.preventDefault();
  try {
    const payload = await deleteRental({ id : 7}).unwrap();
    console.log('fulfilled', payload) // fulfilled Rental successfully deleted
  } catch (error) {
    console.error('rejected', error);
  }
}



```

---

## Sources

https://redux-toolkit.js.org/rtk-query/api/created-api/redux-integration
