import { createSlice } from "@reduxjs/toolkit";

export const printjobSlice = createSlice({
  name: "printjob",
  initialState: {
    printjobOpen: false,
  },
  reducers: {
    grabPrintjob: (state) => {
      state.printjobOpen = true;
    },
    releasePrintjob: (state) => {
      state.printjobOpen = false;
    },
  },
});

export const { grabPrintjob, releasePrintjob } = printjobSlice.actions;

export const selectPrintJobMenu = (state) => state.printjob.printjobOpen;

export default printjobSlice.reducer;
