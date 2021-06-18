import { createSlice } from "@reduxjs/toolkit";

export const modelFixedSlice = createSlice({
  name: "modelFixed",
  initialState: {
    modelFixed: false,
  },
  reducers: {
    grabModelFixed: (state) => {
      state.modelFixed = true;
    },
    releaseModelFixed: (state) => {
      state.modelFixed = false;
    },
  },
});

export const { grabModelFixed, releaseModelFixed } = modelFixedSlice.actions;

export const selectModelFixed = (state) => state.modelFixed.modelFixed;

export default modelFixedSlice.reducer;
