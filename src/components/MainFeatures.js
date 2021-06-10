import React, { useEffect, useState } from "react";
import styles from "../styles/MainFeatures.module.css";
import Image from "next/image";
import {
  AccountBox,
  InvertColors,
  KeyboardArrowDown,
  Layers,
  LocalDrink,
  ThumbUp,
  Timer,
  Visibility,
  ZoomIn,
  ZoomOut,
} from "@material-ui/icons";
import Header from "./Header";
import Platform from "./Platform";
import Tools from "./Tools";
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
import {
  grabDiagnosticMenu,
  selectDiagnosticMenu,
} from "../features/diagnosticSlice";
import { grabPrintjob, selectPrintJobMenu } from "../features/printjobSlice";
import { selectPrintJobPrinter } from "../features/printJobPrinterSlice";
import { selectPrintJobVendor } from "../features/printJobVendorSlice";
import { selectPrintJobThickness } from "../features/printJobThicknessSlice";
import { selectPrintJobResin } from "../features/printJobResinSlice";
import { useDispatch, useSelector } from "react-redux";
import Views from "./Views";
import PrintJobSettings from "./PrintJobSettings";
import PrintMenu from "./PrintMenu";
import PrintableMenu from "./PrintableMenu";
import Dashboard from "./Dashboard";
import DiagnosticMenu from "./DiagnosticMenu";
// import { selectPrintJobMenu } from "../features/printJobSlice";

const MainFeatures = ({ children }) => {
  const [printJobIsOpen, setPrintJobIsOpen] = useState(false);
  const [printPrinter, setPrintPrinter] = useState("Pro95");
  const [printVendor, setPrintVendor] = useState("SprintRay");
  const dispatch = useDispatch();
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

  const openViewsMenu = () => {
    dispatch(grabViews());
  };

  const openPrintJob = () => {
    dispatch(grabPrintjob());
  };

  const openPrintMenu = () => {
    dispatch(grabPrintMenu());
  };

  const openPrintableMenu = () => {
    dispatch(grabPrintableMenu());
  };

  const openDashboardMenu = () => {
    dispatch(grabDashboardMenu());
  };

  // console.log("print job", printJobOpen);

  return (
    <div className={styles.mainFeatures}>
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
          <div className={styles.mainFeatures__logo}>
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
          <div
            className={styles.mainFeatures__login}
            onClick={openDashboardMenu}
          >
            <AccountBox style={{ fontSize: "1.9rem", color: "#3399ff" }} />
            <p>adam@sprintray.com</p>
          </div>
          <div className={styles.mainFeatures__process}>
            <div className={styles.mainFeatures__processLeft}>
              <Timer />
              <p>-</p>
            </div>
            <div className={styles.mainFeatures__processRight}>
              <LocalDrink />
              <p>- mL</p>
            </div>
          </div>
          <div
            className={styles.mainFeatures__printable}
            onClick={openPrintableMenu}
          >
            <ThumbUp style={{ color: "#00ad4e" }} />
            <p>Printable</p>
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
