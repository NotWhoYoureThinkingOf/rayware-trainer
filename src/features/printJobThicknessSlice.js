import { createSlice } from "@reduxjs/toolkit";

export const printJobThicknessSlice = createSlice({
  name: "printJobThickness",
  initialState: {
    printJobThickness: "100",
  },
  reducers: {
    grabPrintJobThickness: (state, action) => {
      state.printJobThickness = action.payload;
    },
  },
});

export const { grabPrintJobThickness } = printJobThicknessSlice.actions;

export const selectPrintJobThickness = (state) =>
  state.printJobThickness.printJobThickness;

export default printJobThicknessSlice.reducer;
