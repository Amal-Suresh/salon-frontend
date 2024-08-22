import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  name: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.token = action.payload.token;
      state.name = action.payload.name;
    },
    clearCredentials: (state) => {
      state.token = null;
      state.name = null;
    },
  },
});

export const { setCredentials, clearCredentials } = authSlice.actions;

export default authSlice.reducer;
