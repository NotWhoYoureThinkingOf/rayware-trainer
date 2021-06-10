import { createSlice } from "@reduxjs/toolkit";

export const supportsMenuSlice = createSlice({
  name: "supportsMenu",
  initialState: {
    supportsMenuOpen: false,
  },
  reducers: {
    grabSupportsMenu: (state) => {
      state.supportsMenuOpen = !state.supportsMenuOpen;
    },
  },
});

export const { grabSupportsMenu } = supportsMenuSlice.actions;

export const selectSupportsMenu = (state) =>
  state.supportsMenu.supportsMenuOpen;

export default supportsMenuSlice.reducer;
