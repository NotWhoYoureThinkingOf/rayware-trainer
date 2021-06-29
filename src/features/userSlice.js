import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    grabUser: (state, action) => {
      state.user = action.payload;
    },
    releaseUser: (state) => {
      state.user = null;
    },
  },
});

export const { grabUser, releaseUser } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
