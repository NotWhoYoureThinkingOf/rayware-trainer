import { createSlice } from "@reduxjs/toolkit";

export const premiumSlice = createSlice({
  name: "premium",
  initialState: {
    premiumMenuOpen: false,
  },
  reducers: {
    grabPremium: (state) => {
      state.premiumMenuOpen = true;
    },
    releasePremium: (state) => {
      state.premiumMenuOpen = false;
    },
  },
});

export const { grabPremium, releasePremium } = premiumSlice.actions;

export const selectPremiumMenu = (state) => state.premium.premiumMenuOpen;

export default premiumSlice.reducer;
