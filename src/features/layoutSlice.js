import { createSlice } from "@reduxjs/toolkit";

export const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    layoutMenuOpen: false,
  },
  reducers: {
    grabLayout: (state) => {
      state.layoutMenuOpen = !state.layoutMenuOpen;
    },
  },
});

export const { grabLayout } = layoutSlice.actions;

export const selectLayoutMenu = (state) => state.layout.layoutMenuOpen;

export default layoutSlice.reducer;
