//~ Import modules
import { createSlice } from '@reduxjs/toolkit';

//~ Initial state
const initialState = {
  message: null,
};

//~ Methods
const handleMsg = (state, action) => {
  console.log('here reducer rental : ', action.payload);
};

//~ Exports
export const rentalSlice = createSlice({
  name: 'rental',
  initialState,
  reducers: {
    handleRentalMsg: handleMsg,
  },
});

export const { handleRentalMsg } = rentalSlice.actions;

export default rentalSlice.reducer;
