import rootReducer from './Reducers';
import { configureStore } from '@reduxjs/toolkit';
import middleware from './Middlewares';

//recent way to configure store
export const store = configureStore(
  {
    reducer: rootReducer,
    middleware
  },
);
