//~ Import modules
import themeReducer from './Theme';
import rentalReducer from './Rental';
import apiTest from '../Api';
import apiRentolio from '../Api/rentolio.js';

const reducers = {
  theme: themeReducer,
  rental: rentalReducer,
  apiTest,
  apiRentolio
};

//export all combined reducers to use in the store
export default reducers;
