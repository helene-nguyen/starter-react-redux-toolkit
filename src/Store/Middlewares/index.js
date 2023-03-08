//~ Import modules
import { themeMiddleware } from './theme.js';
import { apiSlice } from '../Api';
import { rentolioApiSlice } from '../Api/rentolio.js';

//~ Export middlewares
const allMiddlewares = [ themeMiddleware, apiSlice.middleware, rentolioApiSlice.middleware];

const getDefaultMiddleware = (getDefaultMiddleware) => getDefaultMiddleware().concat(allMiddlewares);

export default getDefaultMiddleware;
