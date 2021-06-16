import { createSlice } from "@reduxjs/toolkit";

export const importTrainingSlice = createSlice({
  name: "importTraining",
  initialState: {
    importTraining: false,
  },
  reducers: {
    grabImportTraining: (state) => {
      state.importTraining = true;
    },
    releaseImportTraining: (state) => {
      state.importTraining = false;
    },
  },
});

export const { grabImportTraining, releaseImportTraining } =
  importTrainingSlice.actions;

export const selectImportTraining = (state) =>
  state.importTraining.importTraining;

export default importTrainingSlice.reducer;
