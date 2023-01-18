//~ Import modules
import thunk from 'redux-thunk';
import { themeMiddleware } from './theme.js';
import { rentalMiddleware } from './rental.js';
import { apiSlice } from '../Api';
import { rentolioApiSlice } from '../Api/rentolio.js';

//~ Export middlewares
// export default [thunk, themeMiddleware, apiSlice.middleware];
const getDefaultMiddleware = (getDefaultMiddleware) =>
  getDefaultMiddleware().concat([thunk, themeMiddleware, rentalMiddleware, apiSlice.middleware, rentolioApiSlice.middleware]);

export default getDefaultMiddleware;
