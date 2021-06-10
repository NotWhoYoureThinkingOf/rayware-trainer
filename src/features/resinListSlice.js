import { createSlice } from "@reduxjs/toolkit";

export const resinListSlice = createSlice({
  name: "resinList",
  initialState: {
    resinListOpen: false,
  },
  reducers: {
    grabResinList: (state) => {
      state.resinListOpen = !state.resinListOpen;
    },
  },
});

export const { grabResinList } = resinListSlice.actions;

export const selectResinList = (state) => state.resinList.resinListOpen;

export default resinListSlice.reducer;
