import { createSlice } from "@reduxjs/toolkit";

export const firewallWindowSlice = createSlice({
  name: "firewallWindow",
  initialState: {
    firewallWindow: false,
  },
  reducers: {
    grabFirewallWindow: (state) => {
      state.firewallWindow = true;
    },
    releaseFirewallWindow: (state) => {
      state.firewallWindow = false;
    },
  },
});

export const { grabFirewallWindow, releaseFirewallWindow } =
  firewallWindowSlice.actions;

export const selectFirewallWindow = (state) =>
  state.firewallWindow.firewallWindow;

export default firewallWindowSlice.reducer;
