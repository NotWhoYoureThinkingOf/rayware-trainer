import { createSlice } from "@reduxjs/toolkit";

export const printJobPrinterSlice = createSlice({
  name: "printJobPrinter",
  initialState: {
    printJobPrinter: "p95",
  },
  reducers: {
    grabPrintJobPrinter: (state, action) => {
      state.printJobPrinter = action.payload;
    },
  },
});

export const { grabPrintJobPrinter } = printJobPrinterSlice.actions;

export const selectPrintJobPrinter = (state) =>
  state.printJobPrinter.printJobPrinter;

export default printJobPrinterSlice.reducer;
