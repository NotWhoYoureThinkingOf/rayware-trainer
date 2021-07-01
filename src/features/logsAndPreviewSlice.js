import { createSlice } from "@reduxjs/toolkit";

export const logsAndPreviewSlice = createSlice({
  name: "logsAndPreview",
  initialState: {
    logsTraining: false,
    logsStep1: false,
    logsStep2: false,
    previewTraining: false,
  },
  reducers: {
    grabLogsTraining: (state) => {
      state.logsTraining = true;
    },
    releaseLogsTraining: (state) => {
      state.logsTraining = false;
    },
    grabLogsStep1: (state) => {
      state.logsStep1 = true;
    },
    releaseLogsStep1: (state) => {
      state.logsStep1 = false;
    },
    grabLogsStep2: (state) => {
      state.logsStep2 = true;
    },
    releaseLogsStep2: (state) => {
      state.logsStep2 = false;
    },
    grabPreviewTraining: (state) => {
      state.previewTraining = true;
    },
    releasePreviewTraining: (state) => {
      state.previewTraining = false;
    },
  },
});

export const {
  grabLogsTraining,
  releaseLogsTraining,
  grabLogsStep1,
  releaseLogsStep1,
  grabLogsStep2,
  releaseLogsStep2,
  grabPreviewTraining,
  releasePreviewTraining,
} = logsAndPreviewSlice.actions;

export const selectLogsTraining = (state) => state.logsAndPreview.logsTraining;
export const selectLogsStep1 = (state) => state.logsAndPreview.logsStep1;
export const selectLogsStep2 = (state) => state.logsAndPreview.logsStep2;

export const selectPreviewTraining = (state) =>
  state.logsAndPreview.previewTraining;

export default logsAndPreviewSlice.reducer;
