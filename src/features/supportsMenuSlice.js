import { createSlice } from "@reduxjs/toolkit";

export const supportsMenuSlice = createSlice({
  name: "supportsMenu",
  initialState: {
    supportsMenuOpen: false,
  },
  reducers: {
    grabSupportsMenu: (state) => {
      state.supportsMenuOpen = true;
    },
    releaseSupportsMenu: (state) => {
      state.supportsMenuOpen = false;
    },
  },
});

export const { grabSupportsMenu, releaseSupportsMenu } =
  supportsMenuSlice.actions;

export const selectSupportsMenu = (state) =>
  state.supportsMenu.supportsMenuOpen;

export default supportsMenuSlice.reducer;
