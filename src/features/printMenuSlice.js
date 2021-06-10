import { createSlice } from "@reduxjs/toolkit";

export const printMenuSlice = createSlice({
  name: "printMenu",
  initialState: {
    printMenuOpen: false,
  },
  reducers: {
    grabPrintMenu: (state) => {
      state.printMenuOpen = true;
    },
    releasePrintMenu: (state) => {
      state.printMenuOpen = false;
    },
  },
});

export const { grabPrintMenu, releasePrintMenu } = printMenuSlice.actions;

export const selectPrintMenu = (state) => state.printMenu.printMenuOpen;

export default printMenuSlice.reducer;
