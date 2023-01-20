//~ Import modules
import thunk from 'redux-thunk';
import { themeMiddleware } from './theme.js';
import { apiSlice } from '../Api';
import { rentolioApiSlice } from '../Api/rentolio.js';

//~ Export middlewares
const allMiddlewares = [thunk, themeMiddleware, apiSlice.middleware, rentolioApiSlice.middleware];

const getDefaultMiddleware = (getDefaultMiddleware) => getDefaultMiddleware().concat(allMiddlewares);

export default getDefaultMiddleware;
