//~ Import modules
import { createSlice } from '@reduxjs/toolkit';

//~ Initial state
const initialState = {
  body: {},
};

//~ Methods
const payload = (state, action) => {
  state.body[`${action.payload[0]}`] = action.payload[1];
};

//~ Exports
export const payloadSlice = createSlice({
  name: 'payload',
  initialState,
  reducers: {
    getPayload: payload,
  },
});

export const { getPayload } = payloadSlice.actions;

export default payloadSlice.reducer;
