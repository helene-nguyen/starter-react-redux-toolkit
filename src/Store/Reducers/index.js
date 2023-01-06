//~ Import modules
import { combineReducers } from 'redux';
import themeReducer  from './slices'

const reducer = combineReducers({
  theme: themeReducer,
});

export default reducer;
