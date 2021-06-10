import { createSlice } from "@reduxjs/toolkit";

export const modelSelectedSlice = createSlice({
  name: "modelSelected",
  initialState: {
    modelSelected: false,
  },
  reducers: {
    grabModelSelected: (state) => {
      state.modelSelected = !state.modelSelected;
    },
  },
});

export const { grabModelSelected } = modelSelectedSlice.actions;

export const selectModelSelected = (state) => state.modelSelected.modelSelected;

export default modelSelectedSlice.reducer;
