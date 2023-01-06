//~ Import modules
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { themeMiddleware } from './theme.js';

//~ Export middlewares
export default [themeMiddleware];
// export default applyMiddleware(thunk, themeMiddleware);
