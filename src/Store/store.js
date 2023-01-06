import rootReducer from './Reducers/index.js';
import { configureStore } from '@reduxjs/toolkit';
import middlewares from './Middlewares/index.js';

//recent way to configure store
export const store = configureStore(
  {
    reducer: rootReducer,
  },
  middlewares
);
