//~ Import modules
import { createSlice } from '@reduxjs/toolkit';
import { themeReducer } from './Theme/theme.reducer.js';

//~ Slices
export const themeSlice = createSlice(themeReducer);
export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;