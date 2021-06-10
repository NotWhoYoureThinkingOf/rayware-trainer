import { createSlice } from "@reduxjs/toolkit";

export const printJobVendorSlice = createSlice({
  name: "printJobVendor",
  initialState: {
    printJobVendor: "sprintray",
  },
  reducers: {
    grabPrintJobVendor: (state, action) => {
      state.printJobVendor = action.payload;
    },
  },
});

export const { grabPrintJobVendor } = printJobVendorSlice.actions;

export const selectPrintJobVendor = (state) =>
  state.printJobVendor.printJobVendor;

export default printJobVendorSlice.reducer;
