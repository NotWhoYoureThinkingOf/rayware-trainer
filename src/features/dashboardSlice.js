import { createSlice } from "@reduxjs/toolkit";

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    dashboardOpen: false,
  },
  reducers: {
    grabDashboardMenu: (state) => {
      state.dashboardOpen = true;
    },
    releaseDashboardMenu: (state) => {
      state.dashboardOpen = false;
    },
  },
});

export const { grabDashboardMenu, releaseDashboardMenu } =
  dashboardSlice.actions;

export const selectDashboardMenu = (state) => state.dashboard.dashboardOpen;

export default dashboardSlice.reducer;
