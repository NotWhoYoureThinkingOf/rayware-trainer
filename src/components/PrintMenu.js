import React, { useState } from "react";
import styles from "../styles/PrintMenu.module.css";
import Image from "next/image";
import {
  ChevronRight,
  Close,
  InvertColors,
  Layers,
  ThumbUp,
} from "@material-ui/icons";
import { grabPrintMenu, releasePrintMenu } from "../features/printMenuSlice";
import { useDispatch, useSelector } from "react-redux";
import ManagePrinters from "./ManagePrinters";

const PrintMenu = () => {
  const [printerSelected, setPrinterSelected] = useState(false);
  const [input, setInput] = useState("Untitled");
  const [print, setPrint] = useState(true);
  const [managePrinters, setManagePrinters] = useState(false);
  const [history, setHistory] = useState(false);
  const dispatch = useDispatch();

  const closePrintMenu = () => {
    dispatch(releasePrintMenu());
  };

  const openPrint = () => {
    setPrint(true);
    setManagePrinters(false);
    setHistory(false);
  };

  const openManage = () => {
    setPrint(false);
    setManagePrinters(true);
    setHistory(false);
  };

  const openHistory = () => {
    setPrint(false);
    setManagePrinters(false);
    setHistory(true);
  };

  console.log("history", history);

  return (
    <div className={styles.printMenu}>
      <div className={styles.printMenu__container}>
        <div className={styles.printMenu__topLeft}>
          <div
            className={`${styles.printMenu__print} ${
              print && styles.activeMenu
            }`}
            onClick={openPrint}
          >
            <h5>Print</h5>
          </div>
          <div
            className={`${styles.printMenu__manage} ${
              managePrinters && styles.activeMenu
            }`}
            onClick={openManage}
          >
            <h5>Manage Printers</h5>
          </div>
          <div
            className={`${styles.printMenu__history} ${
              history && styles.activeMenu
            }`}
            onClick={openHistory}
          >
            <h5>History</h5>
          </div>
        </div>
        <div className={styles.printMenu__close} onClick={closePrintMenu}>
          <Close style={{ fontSize: "1.75rem" }} />
        </div>
        {/* Top */}
        {/* start here - print */}
        {print && (
          <>
            <div className={styles.printMenu__left}>
              <div className={styles.printMenu__leftContainer}>
                <div className={styles.printMenu__leftTop}>
                  <h2>Select Printer</h2>
                  <p>
                    Printers compatible with the current settings are shown.
                  </p>
                </div>
                <div className={styles.printMenu__leftCenter}>
                  <div
                    className={`${styles.printMenu__leftCenterPrinter} ${
                      printerSelected && styles.selected
                    }`}
                    onClick={() => setPrinterSelected(!printerSelected)}
                  >
                    <div className={styles.printMenu__leftCenterLeft}>
                      <div className={styles.printMenu__printerIcon}>
                        <Image
                          src="/printer-icon.PNG"
                          height={27}
                          width={20}
                          alt="printer icon"
                        />
                      </div>
                      <div className={styles.printMenu__printerInfo}>
                        <p className={styles.printMenu__printerName}>
                          Training Printer
                        </p>
                        <p className={styles.printMenu__printerSerial}>
                          P95-12A3B45C
                        </p>
                      </div>
                    </div>

                    <div className={styles.printMenu__leftCenterRight}>
                      <p>Ready</p>
                      <ChevronRight />
                    </div>
                  </div>
                </div>
                <div className={styles.printMenu__leftBottom}>
                  <div className={styles.printMenu__allPrinters}>
                    <h4>See All Printers</h4>
                    <ChevronRight />
                  </div>
                  <div className={styles.printMenu__addPrinter}>
                    <h4>Add Printer</h4>
                    <ChevronRight />
                  </div>
                </div>
              </div>
            </div>
            {/* right */}
            <div className={styles.printMenu__right}>
              <div className={styles.printMenu__rightContainer}>
                <div className={styles.printMenu__jobName}>
                  <h2>Print Job Name</h2>
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                </div>
                <div className={styles.printMenu__printability}>
                  <h2>Printability</h2>
                  <div className={styles.printMenu__printable}>
                    <ThumbUp style={{ color: "#00ad4e" }} />
                    <p>Printable</p>
                  </div>
                </div>
                <div className={styles.printMenu__material}>
                  <h2>Material</h2>
                  <div className={styles.printMenu__resin}>
                    <InvertColors />
                    <p>SprintRay Die and Model Tan</p>
                  </div>
                </div>
                <div className={styles.printMenu__layerThickness}>
                  <h2>Layer Thickness</h2>
                  <div className={styles.printMenu__thickness}>
                    <Layers />
                    <p>100 µm</p>
                  </div>
                </div>
                <div className={styles.printMenu__volume}>
                  <div className={styles.printMenu__volumeAmount}>
                    <h2>Master Volume Required</h2>
                    <p>Check resin tank to ensure sufficient material.</p>
                  </div>
                  <p>N/A</p>
                </div>
                <div className={styles.printMenu__totalTime}>
                  <h2>Total Print Time</h2>
                  <p>1</p>
                </div>
              </div>
            </div>
            {/* Bottom */}
            <div className={styles.printMenu__bottomLeft}>
              <div className={styles.printMenu__save}>
                <h5>Save Print Job</h5>
              </div>
              <div className={styles.printMenu__preview}>
                <h5>Print Preview</h5>
              </div>
            </div>
            <div className={styles.printMenu__bottomRight}>
              <div className={styles.printMenu__queue}>
                <h5>Queue Print</h5>
              </div>
              <div className={styles.printMenu__printButton}>
                <h5>Print</h5>
              </div>
            </div>
          </>
        )}
        {/* end here - print */}
        {history && (
          <>
            <div className={styles.printMenu__left}>
              <div className={styles.printMenu__leftContainer}>
                <div className={styles.printMenu__leftTop}>
                  <h2>Select Printer</h2>
                  <p>
                    Printers compatible with the current settings are shown.
                  </p>
                </div>
                <div className={styles.printMenu__leftCenter}>
                  <div
                    className={`${styles.printMenu__leftCenterPrinter} ${
                      printerSelected && styles.selected
                    }`}
                    onClick={() => setPrinterSelected(!printerSelected)}
                  >
                    <div className={styles.printMenu__leftCenterLeft}>
                      <div className={styles.printMenu__printerIcon}>
                        <Image
                          src="/printer-icon.PNG"
                          height={27}
                          width={20}
                          alt="printer icon"
                        />
                      </div>
                      <div className={styles.printMenu__printerInfo}>
                        <p className={styles.printMenu__printerName}>
                          Training Printer
                        </p>
                        <p className={styles.printMenu__printerSerial}>
                          P95-12A3B45C
                        </p>
                      </div>
                    </div>

                    <div className={styles.printMenu__leftCenterRight}>
                      <p>Ready</p>
                      <ChevronRight />
                    </div>
                  </div>
                </div>
                <div className={styles.printMenu__leftBottom}>
                  <div className={styles.printMenu__allPrinters}>
                    <h4>See All Printers</h4>
                    <ChevronRight />
                  </div>
                  <div className={styles.printMenu__addPrinter}>
                    <h4>Add Printer</h4>
                    <ChevronRight />
                  </div>
                </div>
              </div>
            </div>
            {/* right */}
            <div className={styles.printMenu__right}>
              <div
                className={styles.printMenu__rightContainer}
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <div className={styles.printMenu__reload}>
                  <h4>Re-load</h4>
                </div>
              </div>
            </div>
          </>
        )}
        {managePrinters && <ManagePrinters />}
      </div>
    </div>
  );
};

export default PrintMenu;
