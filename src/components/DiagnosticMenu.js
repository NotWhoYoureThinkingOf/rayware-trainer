import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/DiagnosticMenu.module.css";
import { releaseDiagnosticMenu } from "../features/diagnosticSlice";
import {
  releaseLogsTraining,
  releaseLogsStep2,
  selectLogsTraining,
  selectLogsStep2,
} from "../features/logsAndPreviewSlice";
import { useDispatch, useSelector } from "react-redux";
import { ChevronLeft, Close, KeyboardArrowDown } from "@material-ui/icons";

const DiagnosticMenu = () => {
  const dispatch = useDispatch();
  const [selectPrinter, setSelectPrinter] = useState(false);
  const logsTraining = useSelector(selectLogsTraining);
  const logsStep2 = useSelector(selectLogsStep2);

  const closeLogsTraining = () => {
    dispatch(releaseLogsTraining());
    dispatch(releaseLogsStep2());
  };

  const closeDiagnosticMenu = () => {
    dispatch(releaseDiagnosticMenu());
    closeLogsTraining();
  };

  return (
    <div className={styles.diagnosticMenu}>
      {/* buttons */}
      {!selectPrinter ? (
        <div className={styles.diagnosticMenu__container}>
          <div className={styles.diagnosticMenu__title}>
            <h5>Diagnostics Report</h5>
          </div>
          <div
            className={styles.diagnosticMenu__close}
            onClick={closeDiagnosticMenu}
          >
            <Close style={{ fontSize: "1.8rem" }} />
          </div>

          {/* content */}
          <div className={styles.diagnosticMenu__top}>
            <h3>RayWare Diagnostics Report</h3>
            <div className={styles.diagnosticMenu__topContent}>
              <p>
                RayWare diagnostic report can be used by SprintRay Customer
                Support in the troubleshooting process, but it is not meant for
                general troubleshooting. Select 'Download' to save RayWare
                diagnostics report to your computer.
              </p>
              <button>Download</button>
            </div>
          </div>

          <div className={styles.diagnosticMenu__bottom}>
            <h3 className={styles.diagnosticMenu__bottomTitle}>
              Printer Diagnostics Report
            </h3>
            <p>
              The SprintRay diagnostics report contains a detailed log of your
              printer's history. This consists of three files: Config,
              CalibrationHistory, and LogFile. This information can be used by
              SprintRay Customer Support in the troubleshooting process, but it
              is not meant for general troubleshooting. To download your
              printer's diagnostics report, choose the desired printer from the
              list below and select 'Save'. You may need to wait several minutes
              for these three files to appear if they are large.
            </p>
            <div className={styles.diagnosticMenu__bottomSelect}>
              <h3>Select Printer</h3>
              <div
                className={styles.diagnosticMenu__selectBox}
                onClick={() => setSelectPrinter(true)}
              >
                <div className={styles.diagnosticMenu__icon}>
                  <Image
                    src="/printer-icon.PNG"
                    height={32}
                    width={25}
                    alt="printer icon"
                  />
                </div>
                <div className={styles.diagnosticMenu__selectInfo}>
                  <h4>Printer Name</h4>
                  <p>P95-12A3B45C</p>
                </div>
                <div className={styles.diagnosticMenu__selectArrow}>
                  <KeyboardArrowDown style={{ fontSize: "3rem" }} />
                </div>
              </div>
            </div>
            <button>Download</button>
          </div>
          {logsTraining && logsStep2 && (
            <div className={styles.diagnosticMenu__logsTraining}>
              <Close
                style={{
                  position: "absolute",
                  right: ".5rem",
                  top: ".5rem",
                  cursor: "pointer",
                  pointerEvents: "auto",
                }}
                onClick={closeLogsTraining}
              />
              <h3>Downloading your Diagnostic Logs</h3>
              <p>
                This menu will give let you download the RayWare Diagnostics
                Report and the Printer Diagnostics Report. For troubleshooting
                purposes, you'll always want to download both of them.
              </p>
              <p>
                When you click the "Download" button, a file explorer will be
                brought up and will let you save the logs on your computer
                wherever you choose to save them.
              </p>
              <p>
                Typically, both of these together, will give you 4 files:
                RayWare_LogFile, Config, CalibrationHistory, and LogFile.
                Sometimes, there can be more files that look like a random
                assortment of numbers. These are .dmp files that give extra
                information. Send those in along with the rest of the logs you
                just downloaded.
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className={styles.selectPrinter__container}>
          <div className={styles.selectPrinter__title}>
            <h5>Diagnostics Report</h5>
          </div>
          <div
            className={styles.selectPrinter__close}
            onClick={closeDiagnosticMenu}
          >
            <Close style={{ fontSize: "1.8rem" }} />
          </div>
          <div className={styles.selectPrinter__top}>
            <ChevronLeft
              onClick={() => setSelectPrinter(false)}
              style={{ cursor: "pointer", fontSize: "2.5rem" }}
            />
            <h3>Select Printer</h3>
          </div>
          <div className={styles.selectPrinter__bottom}>
            <div className={styles.selectPrinter__printer}>
              <div className={styles.selectPrinter__icon}>
                <Image
                  src="/printer-icon.PNG"
                  height={32}
                  width={25}
                  alt="printer icon"
                />
              </div>
              <div className={styles.selectPrinter__info}>
                <h4>Printer Name</h4>
                <p>P95-12A3B45C</p>
              </div>
              <p className={styles.selectPtiner__ready}>Ready</p>
            </div>
          </div>
          {logsTraining && logsStep2 && (
            <div className={styles.diagnosticMenu__logsTraining}>
              <Close
                style={{
                  position: "absolute",
                  right: ".5rem",
                  top: ".5rem",
                  cursor: "pointer",
                  pointerEvents: "auto",
                }}
                onClick={closeLogsTraining}
              />
              <h3>Downloading your Diagnostic Logs</h3>
              <p>
                This menu will give let you download the RayWare Diagnostics
                Report and the Printer Diagnostics Report. For troubleshooting
                purposes, you'll always want to download both of them.
              </p>
              <p>
                When you click the "Download" button, a file explorer will be
                brought up and will let you save the logs on your computer
                wherever you choose to save them.
              </p>
              <p>
                Typically, both of these together, will give you 4 files:
                RayWare_LogFile, Config, CalibrationHistory, and LogFile.
                Sometimes, there can be more files that look like a random
                assortment of numbers. These are .dmp files that give extra
                information. Send those in along with the rest of the logs you
                just downloaded.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DiagnosticMenu;
