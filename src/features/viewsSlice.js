import { createSlice } from "@reduxjs/toolkit";

export const viewsSlice = createSlice({
  name: "views",
  initialState: {
    viewsMenuOpen: false,
  },
  reducers: {
    grabViews: (state) => {
      state.viewsMenuOpen = !state.viewsMenuOpen;
    },
  },
});

export const { grabViews } = viewsSlice.actions;

export const selectViewsMenu = (state) => state.views.viewsMenuOpen;

export default viewsSlice.reducer;
