import { createSlice } from "@reduxjs/toolkit";

export const supportsModelSlice = createSlice({
  name: "supportsModel",
  initialState: {
    supportsModel: false,
    addSupportsTraining: false,
  },
  reducers: {
    grabSupportsModel: (state) => {
      state.supportsModel = true;
    },
    releaseSupportsModel: (state) => {
      state.supportsModel = false;
    },
    grabAddSupportsTraining: (state) => {
      state.addSupportsTraining = true;
    },
    releaseAddSupportsTraining: (state) => {
      state.addSupportsTraining = false;
    },
  },
});

export const {
  grabSupportsModel,
  releaseSupportsModel,
  grabAddSupportsTraining,
  releaseAddSupportsTraining,
} = supportsModelSlice.actions;

export const selectSupportsModel = (state) => state.supportsModel.supportsModel;

export const selectSupportsTraining = (state) =>
  state.supportsModel.addSupportsTraining;

export default supportsModelSlice.reducer;
