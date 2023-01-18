//~ Import modules
import { createSlice } from '@reduxjs/toolkit';

//~ Initial state
const initialState = {
  default: 'dark',
};

//~ Methods
const toggle = (state) => {
  state.default = state.default === 'dark' ? 'light' : 'dark';
};

//~ Exports
export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: toggle,
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
