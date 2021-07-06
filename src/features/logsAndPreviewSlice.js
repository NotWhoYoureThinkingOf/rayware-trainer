import { createSlice } from "@reduxjs/toolkit";

export const logsAndPreviewSlice = createSlice({
  name: "logsAndPreview",
  initialState: {
    logsTraining: false,
    logsStep1: false,
    logsStep2: false,
    previewTraining: false,
    previewStep1: false,
    previewStep2: false,
    previewStep3: false,
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
    grabPreviewStep1: (state) => {
      state.previewStep1 = true;
    },
    releasePreviewStep1: (state) => {
      state.previewStep1 = false;
    },
    grabPreviewStep2: (state) => {
      state.previewStep2 = true;
    },
    releasePreviewStep2: (state) => {
      state.previewStep2 = false;
    },
    grabPreviewStep3: (state) => {
      state.previewStep3 = true;
    },
    releasePreviewStep3: (state) => {
      state.previewStep3 = false;
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
  grabPreviewStep1,
  releasePreviewStep1,
  grabPreviewStep2,
  releasePreviewStep2,
  grabPreviewStep3,
  releasePreviewStep3,
} = logsAndPreviewSlice.actions;

export const selectLogsTraining = (state) => state.logsAndPreview.logsTraining;
export const selectLogsStep1 = (state) => state.logsAndPreview.logsStep1;
export const selectLogsStep2 = (state) => state.logsAndPreview.logsStep2;

export const selectPreviewTraining = (state) =>
  state.logsAndPreview.previewTraining;
export const selectPreviewStep1 = (state) => state.logsAndPreview.previewStep1;
export const selectPreviewStep2 = (state) => state.logsAndPreview.previewStep2;
export const selectPreviewStep3 = (state) => state.logsAndPreview.previewStep3;

export default logsAndPreviewSlice.reducer;
