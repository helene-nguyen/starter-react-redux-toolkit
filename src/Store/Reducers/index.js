//~ Import modules
import themeReducer from './Theme';
import payloadReducer from './Payload';
import authReducer from './Features/Auth';
import apiTest from '../Api';
import apiRentolio from '../Api/rentolio.js';

const reducers = {
  theme: themeReducer,
  payload: payloadReducer,
  auth: authReducer,
  apiTest,
  apiRentolio,
};

//export all combined reducers to use in the store
export default reducers;
