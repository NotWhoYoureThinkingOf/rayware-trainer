import { createSlice } from "@reduxjs/toolkit";

export const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    layoutMenuOpen: false,
  },
  reducers: {
    grabLayout: (state) => {
      state.layoutMenuOpen = true;
    },
    releaseLayout: (state) => {
      state.layoutMenuOpen = false;
    },
  },
});

export const { grabLayout, releaseLayout } = layoutSlice.actions;

export const selectLayoutMenu = (state) => state.layout.layoutMenuOpen;

export default layoutSlice.reducer;
