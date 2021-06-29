import { createSlice } from "@reduxjs/toolkit";

export const loginTrainingSlice = createSlice({
  name: "loginTraining",
  initialState: {
    loginTraining: false,
  },
  reducers: {
    grabLoginTraining: (state) => {
      state.loginTraining = true;
    },
    releaseLoginTraining: (state) => {
      state.loginTraining = false;
    },
  },
});

export const { grabLoginTraining, releaseLoginTraining } =
  loginTrainingSlice.actions;

export const selectLoginTraining = (state) => state.loginTraining.loginTraining;

export default loginTrainingSlice.reducer;
