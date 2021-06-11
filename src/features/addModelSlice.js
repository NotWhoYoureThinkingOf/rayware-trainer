import { createSlice } from "@reduxjs/toolkit";

export const addModelSlice = createSlice({
  name: "addModel",
  initialState: {
    addModelOpen: false,
  },
  reducers: {
    grabAddModel: (state) => {
      state.addModelOpen = true;
    },
    releaseAddModel: (state) => {
      state.addModelOpen = false;
    },
  },
});

export const { grabAddModel, releaseAddModel } = addModelSlice.actions;

export const selectAddModel = (state) => state.addModel.addModelOpen;

export default addModelSlice.reducer;
