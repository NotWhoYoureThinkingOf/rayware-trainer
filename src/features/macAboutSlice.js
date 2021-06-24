import { createSlice } from "@reduxjs/toolkit";

export const macAboutSlice = createSlice({
  name: "macAbout",
  initialState: {
    macAboutOpen: false,
  },
  reducers: {
    grabMacAbout: (state) => {
      state.macAboutOpen = true;
    },
    releaseMacAbout: (state) => {
      state.macAboutOpen = false;
    },
  },
});

export const { grabMacAbout, releaseMacAbout } = macAboutSlice.actions;

export const selectMacAbout = (state) => state.macAbout.macAboutOpen;

export default macAboutSlice.reducer;
