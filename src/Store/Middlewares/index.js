//~ Import modules
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//~ Export middlewares
export default applyMiddleware(thunk);