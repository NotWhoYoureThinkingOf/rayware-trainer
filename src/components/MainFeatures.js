import React, { useEffect, useState } from "react";
import styles from "../styles/MainFeatures.module.css";
import Image from "next/image";
import {
  AccountBox,
  InvertColors,
  KeyboardArrowDown,
  Layers,
  LocalDrink,
  ThumbDown,
  ThumbUp,
  Timer,
  Visibility,
  ZoomIn,
  ZoomOut,
  Close,
} from "@material-ui/icons";
import Header from "./Header";
import Platform from "./Platform";
import Tools from "./Tools";
import { grabWelcome, selectWelcome } from "../features/welcomeSlice";
import { selectImportTraining } from "../features/importTrainingSlice";
import { selectAddModel } from "../features/addModelSlice";
import { grabViews, selectViewsMenu } from "../features/viewsSlice";
import { grabPrintMenu, selectPrintMenu } from "../features/printMenuSlice";
import {
  grabPrintableMenu,
  selectPrintableMenu,
} from "../features/printableMenuSlice";
import {
  grabDashboardMenu,
  selectDashboardMenu,
} from "../features/dashboardSlice";
import { selectDiagnosticMenu } from "../features/diagnosticSlice";
import { grabPrintjob, selectPrintJobMenu } from "../features/printjobSlice";
import { selectPrintJobPrinter } from "../features/printJobPrinterSlice";
import { selectPrintJobVendor } from "../features/printJobVendorSlice";
import { selectPrintJobThickness } from "../features/printJobThicknessSlice";
import { selectPrintJobResin } from "../features/printJobResinSlice";
import {
  releaseModelImported,
  selectModelImported,
} from "../features/modelImportedSlice";
import {
  releaseModelFixed,
  selectModelFixed,
} from "../features/modelFixedSlice";
import { selectLoginTraining } from "../features/loginTrainingSlice";
import { selectUser } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Views from "./Views";
import PrintJobSettings from "./PrintJobSettings";
import PrintMenu from "./PrintMenu";
import PrintableMenu from "./PrintableMenu";
import Dashboard from "./Dashboard";
import DiagnosticMenu from "./DiagnosticMenu";
import AddModel from "./AddModel";
import Welcome from "./Welcome";
import { LoginTraining } from "./LoginTraining";
import {
  grabPreviewStep2,
  releasePreviewStep1,
  releasePreviewTraining,
  selectPreviewStep1,
  selectPreviewTraining,
} from "../features/logsAndPreviewSlice";

const MainFeatures = ({ children }) => {
  const [printJobIsOpen, setPrintJobIsOpen] = useState(false);
  const [printPrinter, setPrintPrinter] = useState("Pro95");
  const [printVendor, setPrintVendor] = useState("SprintRay");
  const dispatch = useDispatch();
  const welcomeOpen = useSelector(selectWelcome);
  const importTrainingOpen = useSelector(selectImportTraining);
  const addModelOpen = useSelector(selectAddModel);
  const viewsMenuOpen = useSelector(selectViewsMenu);
  const printJobOpen = useSelector(selectPrintJobMenu);
  const printer = useSelector(selectPrintJobPrinter);
  const vendor = useSelector(selectPrintJobVendor);
  const thickness = useSelector(selectPrintJobThickness);
  const resin = useSelector(selectPrintJobResin);
  const printMenuOpen = useSelector(selectPrintMenu);
  const printableMenuOpen = useSelector(selectPrintableMenu);
  const dashboardMenuOpen = useSelector(selectDashboardMenu);
  const diagnosticMenuOpen = useSelector(selectDiagnosticMenu);
  const modelIsImported = useSelector(selectModelImported);
  const modelIsFixed = useSelector(selectModelFixed);
  const loginTrainingOpen = useSelector(selectLoginTraining);
  const userLoggedIn = useSelector(selectUser);
  const previewTrainingOpen = useSelector(selectPreviewTraining);
  const previewStep1 = useSelector(selectPreviewStep1);

  useEffect(() => {
    switch (printer) {
      case "p95":
        setPrintPrinter("Pro95");
        break;
      case "s100":
        setPrintPrinter("S100");
        break;
      case "d75":
        setPrintPrinter("D75");
        break;
      case "p55":
        setPrintPrinter("Pro55");
        break;
      default:
        setPrintPrinter("Pro95");
        break;
    }
  }, [printer]);

  useEffect(() => {
    switch (vendor) {
      case "sprintray":
        setPrintVendor("SprintRay");
        break;
      case "nextdent":
        setPrintVendor("NextDent");
        break;
      case "dentca":
        setPrintVendor("DENTCA");
        break;
      case "keystone":
        setPrintVendor("KeyStone");
        break;
      case "bego":
        setPrintVendor("bego");
        break;
      case "dreve":
        setPrintVendor("Dreve");
        break;
      default:
        setPrintVendor("SprintRay");
        break;
    }
  }, [vendor]);

  const openWelcome = () => {
    dispatch(grabWelcome());
    dispatch(releaseModelImported());
    dispatch(releaseModelFixed());
  };

  const openViewsMenu = () => {
    dispatch(grabViews());
  };

  const openPrintJob = () => {
    dispatch(grabPrintjob());
  };

  const openPrintMenu = () => {
    dispatch(grabPrintMenu());
    dispatch(releasePreviewStep1());
    if (previewTrainingOpen) {
      dispatch(grabPreviewStep2());
    }
  };

  const openPrintableMenu = () => {
    dispatch(grabPrintableMenu());
  };

  const openDashboardMenu = () => {
    dispatch(grabDashboardMenu());
    // dispatch(releaseLoginTraining());
  };

  const closePreviewTraining = () => {
    dispatch(releasePreviewTraining());
    dispatch(releasePreviewStep1());
  };

  // console.log("import training", importTrainingOpen);

  return (
    <div className={styles.mainFeatures}>
      {welcomeOpen && <Welcome />}
      {addModelOpen && <AddModel />}
      {printJobOpen && <PrintJobSettings />}
      {printMenuOpen && <PrintMenu />}
      {printableMenuOpen && <PrintableMenu />}
      {dashboardMenuOpen && <Dashboard />}
      {diagnosticMenuOpen && <DiagnosticMenu />}
      <header className={styles.mainFeatures__header}>
        <Header />
      </header>
      <div className={styles.mainFeatures__container}>
        <div className={styles.mainFeatures__top}>
          <div className={styles.mainFeatures__logo} onClick={openWelcome}>
            <Image
              src="/sprintray-logo.PNG"
              height={40.56}
              width={195}
              alt="logo"
            />
            <div className={styles.mainFeatures__version}>
              <p>RayWare Trainer</p>
            </div>
          </div>
          <div
            className={styles.mainFeatures__printSettings}
            onClick={openPrintJob}
          >
            <div className={styles.mainFeatures__printPrinter}>
              <Image
                src="/printer-icon.PNG"
                height={27}
                width={20}
                alt="printer icon"
              />
              <p>{printPrinter}</p>
            </div>
            <div className={styles.mainFeatures__printResin}>
              <InvertColors style={{ fontSize: "1.2rem" }} />
              <p>{resin}</p>
            </div>
            <div className={styles.mainFeatures__printLayers}>
              <Layers style={{ fontSize: "1.2rem" }} />
              <p>{thickness} µm</p>
            </div>
          </div>
          <div className={styles.mainFeatures__options}>
            <div className={styles.mainFeature__zoomOut}>
              <ZoomOut style={{ fontSize: "1.7rem" }} />
            </div>
            <div className={styles.mainFeature__zoomIn}>
              <ZoomIn style={{ fontSize: "1.7rem" }} />
            </div>

            <div
              className={styles.mainFeature__visibility}
              onClick={openViewsMenu}
            >
              <Visibility style={{ fontSize: "1.7rem" }} />
              <KeyboardArrowDown style={{ fontSize: "1.7rem" }} />
              {viewsMenuOpen && <Views />}
            </div>
          </div>
        </div>
        <div className={styles.mainFeatures__center}>
          <div className={styles.mainFeatures__tools}>
            <Tools />
          </div>
        </div>
        <div className={styles.mainFeatures__centerRight}>
          {previewTrainingOpen && previewStep1 && (
            <div className={styles.mainFeatures__previewTraining}>
              <Close
                style={{
                  position: "absolute",
                  right: ".5rem",
                  top: ".5rem",
                  cursor: "pointer",
                  pointerEvents: "auto",
                }}
                onClick={closePreviewTraining}
              />
              <h3>Print Preview</h3>
              <p>
                Once a model has been loaded in, click on the green printer
                button to open the Print menu.
              </p>
            </div>
          )}
          <div
            className={styles.mainFeatures__printMenu}
            onClick={openPrintMenu}
          >
            <Image
              src="/print-icon.PNG"
              height={55}
              width={55}
              alt="printer icon"
            />
          </div>
        </div>

        <footer className={styles.mainFeatures__footer}>
          {loginTrainingOpen && <LoginTraining />}
          <div
            className={`${
              userLoggedIn
                ? styles.mainFeatures__login
                : styles.mainFeatures__logout
            }`}
            onClick={openDashboardMenu}
          >
            <AccountBox
              style={
                userLoggedIn
                  ? { fontSize: "1.9rem", color: "#3399ff" }
                  : { fontSize: "1.9rem", color: "#666666" }
              }
            />
            <p
              className={`${
                userLoggedIn
                  ? styles.mainFeatures__loginText
                  : styles.mainFeatures__logoutText
              }`}
            >
              {!userLoggedIn ? "Sign in to account" : userLoggedIn.user}
            </p>
          </div>
          <div className={styles.mainFeatures__process}>
            <div className={styles.mainFeatures__processLeft}>
              <Timer />
              <p>{modelIsImported || modelIsFixed ? "1 hr 11 min" : "-"}</p>
            </div>
            <div className={styles.mainFeatures__processRight}>
              <LocalDrink />
              <p>{modelIsImported || modelIsFixed ? "8" : "-"} mL</p>
            </div>
          </div>
          <div
            className={
              modelIsImported
                ? styles.mainFeatures__failure
                : styles.mainFeatures__printable
            }
            onClick={openPrintableMenu}
          >
            {modelIsImported ? (
              <>
                <ThumbDown style={{ color: "#cf142b", fontSize: "1.45rem" }} />
                <p>High Chance of Print Failure</p>
              </>
            ) : (
              <>
                <ThumbUp style={{ color: "#00ad4e", fontSize: "1.45rem" }} />
                <p>Printable</p>
              </>
            )}
          </div>
        </footer>
        <div className={styles.mainFeatures__platform}>
          <div className={styles.mainFeatures__bed}>
            <Image
              src="/rayware-platform.png"
              layout="fill"
              objectFit="contain"
              alt="rayware platform"
            />
          </div>
        </div>
        <div className={styles.mainFeatures__canvas}>
          <Platform />
        </div>
      </div>

      <main>{children}</main>
    </div>
  );
};

export default MainFeatures;
