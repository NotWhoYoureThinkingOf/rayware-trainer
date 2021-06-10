import { createSlice } from "@reduxjs/toolkit";

export const diagnosticMenuSlice = createSlice({
  name: "diagnosticMenu",
  initialState: {
    diagnosticMenuOpen: false,
  },
  reducers: {
    grabDiagnosticMenu: (state) => {
      state.diagnosticMenuOpen = true;
    },
    releaseDiagnosticMenu: (state) => {
      state.diagnosticMenuOpen = false;
    },
  },
});

export const { grabDiagnosticMenu, releaseDiagnosticMenu } =
  diagnosticMenuSlice.actions;

export const selectDiagnosticMenu = (state) =>
  state.diagnosticMenu.diagnosticMenuOpen;

export default diagnosticMenuSlice.reducer;
