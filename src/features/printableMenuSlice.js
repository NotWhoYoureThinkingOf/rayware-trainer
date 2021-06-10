import { createSlice } from "@reduxjs/toolkit";

export const printableMenuSlice = createSlice({
  name: "printableMenu",
  initialState: {
    printableMenuOpen: false,
  },
  reducers: {
    grabPrintableMenu: (state) => {
      state.printableMenuOpen = true;
    },
    releasePrintableMenu: (state) => {
      state.printableMenuOpen = false;
    },
  },
});

export const { grabPrintableMenu, releasePrintableMenu } =
  printableMenuSlice.actions;

export const selectPrintableMenu = (state) =>
  state.printableMenu.printableMenuOpen;

export default printableMenuSlice.reducer;
