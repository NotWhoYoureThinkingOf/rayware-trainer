import { createSlice } from "@reduxjs/toolkit";

export const modelSelectedSlice = createSlice({
  name: "modelSelected",
  initialState: {
    modelSelected: false,
  },
  reducers: {
    grabModelSelected: (state) => {
      state.modelSelected = true;
    },
    releaseModelSelected: (state) => {
      state.modelSelected = false;
    },
  },
});

export const { grabModelSelected, releaseModelSelected } =
  modelSelectedSlice.actions;

export const selectModelSelected = (state) => state.modelSelected.modelSelected;

export default modelSelectedSlice.reducer;
