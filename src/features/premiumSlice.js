import { createSlice } from "@reduxjs/toolkit";

export const premiumSlice = createSlice({
  name: "premium",
  initialState: {
    premiumMenuOpen: false,
  },
  reducers: {
    grabPremium: (state) => {
      state.premiumMenuOpen = !state.premiumMenuOpen;
    },
  },
});

export const { grabPremium } = premiumSlice.actions;

export const selectPremiumMenu = (state) => state.premium.premiumMenuOpen;

export default premiumSlice.reducer;
