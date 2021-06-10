import { createSlice } from "@reduxjs/toolkit";

export const sizingSlice = createSlice({
  name: "sizing",
  initialState: {
    sizingMenuOpen: false,
  },
  reducers: {
    grab: (state) => {
      state.sizingMenuOpen = !state.sizingMenuOpen;
    },
  },
});

export const { grab } = sizingSlice.actions;

export const selectSizingMenu = (state) => state.sizing.sizingMenuOpen;

export default sizingSlice.reducer;
