import { createSlice } from "@reduxjs/toolkit";

export const welcomeSlice = createSlice({
  name: "welcome",
  initialState: {
    welcome: true,
  },
  reducers: {
    grabWelcome: (state) => {
      state.welcome = true;
    },
    releaseWelcome: (state) => {
      state.welcome = false;
    },
  },
});

export const { grabWelcome, releaseWelcome } = welcomeSlice.actions;

export const selectWelcome = (state) => state.welcome.welcome;

export default welcomeSlice.reducer;
