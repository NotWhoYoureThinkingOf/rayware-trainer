import { createSlice } from "@reduxjs/toolkit";

export const printJobResinSlice = createSlice({
  name: "printJobResin",
  initialState: {
    printJobResin: "SprintRay Die and Model Tan",
  },
  reducers: {
    grabPrintJobResin: (state, action) => {
      state.printJobResin = action.payload;
    },
  },
});

export const { grabPrintJobResin } = printJobResinSlice.actions;

export const selectPrintJobResin = (state) => state.printJobResin.printJobResin;

export default printJobResinSlice.reducer;
