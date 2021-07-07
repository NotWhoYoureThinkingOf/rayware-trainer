import { createSlice } from "@reduxjs/toolkit";

export const firewallWindowSlice = createSlice({
  name: "firewallWindow",
  initialState: {
    firewallWindow: false,
    firewallStep1: true,
    firewallStep2: false,
    firewallStep3: false,
    firewallStep4: false,
  },
  reducers: {
    grabFirewallWindow: (state) => {
      state.firewallWindow = true;
    },
    releaseFirewallWindow: (state) => {
      state.firewallWindow = false;
    },

    grabFirewallStep1: (state) => {
      state.firewallStep1 = true;
    },
    releaseFirewallStep1: (state) => {
      state.firewallStep1 = false;
    },

    grabFirewallStep2: (state) => {
      state.firewallStep2 = true;
    },
    releaseFirewallStep2: (state) => {
      state.firewallStep2 = false;
    },

    grabFirewallStep3: (state) => {
      state.firewallStep3 = true;
    },
    releaseFirewallStep3: (state) => {
      state.firewallStep3 = false;
    },

    grabFirewallStep4: (state) => {
      state.firewallStep4 = true;
    },
    releaseFirewallStep4: (state) => {
      state.firewallStep4 = false;
    },
  },
});

export const {
  grabFirewallWindow,
  releaseFirewallWindow,
  grabFirewallStep1,
  grabFirewallStep2,
  grabFirewallStep3,
  grabFirewallStep4,
  releaseFirewallStep1,
  releaseFirewallStep2,
  releaseFirewallStep3,
  releaseFirewallStep4,
} = firewallWindowSlice.actions;

export const selectFirewallWindow = (state) =>
  state.firewallWindow.firewallWindow;

export const selectFirewallStep1 = (state) =>
  state.firewallWindow.firewallStep1;

export const selectFirewallStep2 = (state) =>
  state.firewallWindow.firewallStep2;

export const selectFirewallStep3 = (state) =>
  state.firewallWindow.firewallStep3;

export const selectFirewallStep4 = (state) =>
  state.firewallWindow.firewallStep4;

export default firewallWindowSlice.reducer;
