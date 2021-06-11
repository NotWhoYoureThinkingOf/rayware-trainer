import { createSlice } from "@reduxjs/toolkit";

export const modelImportedSlice = createSlice({
  name: "modelImported",
  initialState: {
    modelImported: false,
  },
  reducers: {
    grabModelImported: (state) => {
      state.modelImported = true;
    },
    releaseModelImported: (state) => {
      state.modelImported = false;
    },
  },
});

export const { grabModelImported, releaseModelImported } =
  modelImportedSlice.actions;

export const selectModelImported = (state) => state.modelImported.modelImported;

export default modelImportedSlice.reducer;
