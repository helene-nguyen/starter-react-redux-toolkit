//~ Import modules
import { createSlice } from '@reduxjs/toolkit';

//~ Initial state
const initialState = {
  user: null,
  token: null,
};

//~ Methods
const setCredentialsReducer = (state, action) => {
  const { user, accessToken } = action.payload;
  state.user = user;
  state.accessToken = accessToken;
};

// We want it back to null when log out
const logOutReducer = (state, action) => {
  state.user = null;
  state.token = null;
};

//~ Exports
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: setCredentialsReducer,
    logOut: logOutReducer,
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;