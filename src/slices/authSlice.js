import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {
    token: null,
    name: null,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo.token = action.payload.token;
      state.userInfo.name = action.payload.name;
    },
    clearCredentials: (state) => {
      state.userInfo.token = null;
      state.userInfo.name = null;
    },
  },
});

export const { setCredentials, clearCredentials } = authSlice.actions;

export default authSlice.reducer;
