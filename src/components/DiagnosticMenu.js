import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/DiagnosticMenu.module.css";
import { releaseDiagnosticMenu } from "../features/diagnosticSlice";
import { useDispatch } from "react-redux";
import { ChevronLeft, Close, KeyboardArrowDown } from "@material-ui/icons";

const DiagnosticMenu = () => {
  const dispatch = useDispatch();
  const [selectPrinter, setSelectPrinter] = useState(false);

  const closeDiagnosticMenu = () => {
    dispatch(releaseDiagnosticMenu());
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
        </div>
      )}
    </div>
  );
};

export default DiagnosticMenu;
