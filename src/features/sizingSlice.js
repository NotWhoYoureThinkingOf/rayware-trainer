import { createSlice } from "@reduxjs/toolkit";

export const sizingSlice = createSlice({
  name: "sizing",
  initialState: {
    sizingMenuOpen: false,
  },
  reducers: {
    grab: (state) => {
      state.sizingMenuOpen = true;
    },
    release: (state) => {
      state.sizingMenuOpen = false;
    },
  },
});

export const { grab, release } = sizingSlice.actions;

export const selectSizingMenu = (state) => state.sizing.sizingMenuOpen;

export default sizingSlice.reducer;
