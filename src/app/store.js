import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import sizingReducer from "../features/sizingSlice";
import premiumReducer from "../features/premiumSlice";
import layoutReducer from "../features/layoutSlice";
import supportsMenuReducer from "../features/supportsMenuSlice";
import viewsReducer from "../features/viewsSlice";
import printjobReducer from "../features/printjobSlice";
import printJobPrinterReducer from "../features/printJobPrinterSlice";
import printJobVendorReducer from "../features/printJobVendorSlice";
import printJobThicknessReducer from "../features/printJobThicknessSlice";
import resinListReducer from "../features/resinListSlice";
import printJobResinReducer from "../features/printJobResinSlice";
import printMenuReducer from "../features/printMenuSlice";
import printableMenuReducer from "../features/printableMenuSlice";
import dashboardReducer from "../features/dashboardSlice";
import diagnosticReducer from "../features/diagnosticSlice";
import modelSelectedReducer from "../features/modelSelectedSlice";
import addModelReducer from "../features/addModelSlice";
import modelImportedReducer from "../features/modelImportedSlice";
import welcomeReducer from "../features/welcomeSlice";
import importTrainingReducer from "../features/importTrainingSlice";
import modelFixedReducer from "../features/modelFixedSlice";
import macAboutReducer from "../features/macAboutSlice";
import loginTrainingReducer from "../features/loginTrainingSlice";
import userReducer from "../features/userSlice";
import firewallWindowReducer from "../features/firewallWindowSlice";
import fixTrainingReducer from "../features/fixTrainingSlice";
import logsAndPreviewReducer from "../features/logsAndPreviewSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    sizing: sizingReducer,
    premium: premiumReducer,
    layout: layoutReducer,
    supportsMenu: supportsMenuReducer,
    views: viewsReducer,
    printjob: printjobReducer,
    printJobPrinter: printJobPrinterReducer,
    printJobVendor: printJobVendorReducer,
    printJobThickness: printJobThicknessReducer,
    resinList: resinListReducer,
    printJobResin: printJobResinReducer,
    printMenu: printMenuReducer,
    printableMenu: printableMenuReducer,
    dashboard: dashboardReducer,
    diagnosticMenu: diagnosticReducer,
    modelSelected: modelSelectedReducer,
    addModel: addModelReducer,
    modelImported: modelImportedReducer,
    welcome: welcomeReducer,
    importTraining: importTrainingReducer,
    modelFixed: modelFixedReducer,
    macAbout: macAboutReducer,
    loginTraining: loginTrainingReducer,
    user: userReducer,
    firewallWindow: firewallWindowReducer,
    fixTraining: fixTrainingReducer,
    logsAndPreview: logsAndPreviewReducer,
  },
});
