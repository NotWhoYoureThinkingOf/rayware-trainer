import { createSlice } from "@reduxjs/toolkit";

export const fixTrainingSlice = createSlice({
  name: "fixTraining",
  initialState: {
    fixTraining: false,
  },
  reducers: {
    grabFixTraining: (state) => {
      state.fixTraining = true;
    },
    releaseFixTraining: (state) => {
      state.fixTraining = false;
    },
  },
});

export const { grabFixTraining, releaseFixTraining } = fixTrainingSlice.actions;

export const selectFixTraining = (state) => state.fixTraining.fixTraining;

export default fixTrainingSlice.reducer;
