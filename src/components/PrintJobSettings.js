import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/PrintJobSettings.module.css";
import { releasePrintjob, selectPrintJobMenu } from "../features/printjobSlice";
import {
  grabPrintJobPrinter,
  selectPrintJobPrinter,
} from "../features/printJobPrinterSlice";
import {
  grabPrintJobVendor,
  selectPrintJobVendor,
} from "../features/printJobVendorSlice";
import {
  grabPrintJobThickness,
  selectPrintJobThickness,
} from "../features/printJobThicknessSlice";
import {
  grabPrintJobResin,
  selectPrintJobResin,
} from "../features/printJobResinSlice";
import { grabResinList, selectResinList } from "../features/resinListSlice";
import { useDispatch, useSelector } from "react-redux";
import { ChevronRight, Close, ExpandMore } from "@material-ui/icons";
import ResinList from "./ResinList";
import allResins from "../../resins";

const PrintJobSettings = () => {
  const dispatch = useDispatch();
  const selectedPrinter = useSelector(selectPrintJobPrinter);
  const selectedVendor = useSelector(selectPrintJobVendor);
  const selectedThickness = useSelector(selectPrintJobThickness);
  const selectedResinList = useSelector(selectResinList);
  const selectedPrintJobResin = useSelector(selectPrintJobResin);
  const [printer, setPrinter] = useState("p95");
  const [thickness, setThickness] = useState("100");
  const [vendor, setVendor] = useState("sprintray");
  const [resins, setResins] = useState(null);
  const [resin, setResin] = useState("SprintRay Die and Model Tan");
  // make local state for resin and pull it from printJobResinSlice

  useEffect(() => {
    setPrinter(selectedPrinter);
    setVendor(selectedVendor);
    setThickness(selectedThickness);
  }, []);

  useEffect(() => {
    setResin(selectedPrintJobResin);
  }, [selectedPrintJobResin]);

  useEffect(() => {
    allResins.map((resinVendor) => {
      resinVendor.vendor.name === vendor
        ? setResins(resinVendor.vendor.resins)
        : null;
    });

    allResins.map((resinVendor) => {
      resinVendor.vendor.name === vendor
        ? setResin(resinVendor.vendor.resins[0])
        : null;
    });
  }, [vendor]);

  // console.log("resins", resins);

  const closePrintJob = () => {
    dispatch(releasePrintjob());
  };

  const openResinList = () => {
    dispatch(grabResinList());
  };

  // This will happen when pressing the apply button
  const choosePrinter = () => {
    dispatch(grabPrintJobPrinter(printer));
  };

  const chooseVendor = () => {
    dispatch(grabPrintJobVendor(vendor));
  };

  const chooseThickness = () => {
    dispatch(grabPrintJobThickness(thickness));
  };

  const applyPrintSettings = () => {
    choosePrinter();
    chooseVendor();
    chooseThickness();
    closePrintJob();
  };

  return (
    <div className={styles.printJobSettings}>
      <div className={styles.printJobSettings__container}>
        {/* outside buttons */}
        <div className={styles.printJobSettings__title}>
          <h3>Print Job Settings</h3>
        </div>
        <div className={styles.printJobSettings__close} onClick={closePrintJob}>
          <Close style={{ fontSize: "1.8rem" }} />
        </div>
        <div
          className={styles.printJobSettings__cancel}
          onClick={closePrintJob}
        >
          <h3>Cancel</h3>
        </div>
        <div
          className={styles.printJobSettings__apply}
          onClick={applyPrintSettings}
        >
          <h3>Apply</h3>
        </div>
        {/* content */}
        <div className={styles.printJobSettings__content}>
          <div className={styles.printJobSettings__printer}>
            <h2>Printer</h2>
            <div className={styles.printJobSettings__printers}>
              <div
                className={`${styles.printJobSettings__p95} ${
                  printer === "p95" && styles.printJobSettings__selectedPrinter
                }`}
                onClick={() => setPrinter("p95")}
              >
                <div
                  className={`${styles.printJobSettings__p95Icon} ${
                    printer === "p95" && styles.printJobSettings__selectedIcon
                  }`}
                >
                  <Image
                    src="/printer-icon.PNG"
                    height={27}
                    width={20}
                    alt="printer icon"
                  />
                </div>
                <p>Pro95</p>
              </div>
              <div
                className={`${styles.printJobSettings__s100} ${
                  printer === "s100" && styles.printJobSettings__selectedPrinter
                }`}
                onClick={() => setPrinter("s100")}
              >
                <div
                  className={`${styles.printJobSettings__s100Icon} ${
                    printer === "s100" && styles.printJobSettings__selectedIcon
                  }`}
                >
                  <Image
                    src="/printer-icon.PNG"
                    height={27}
                    width={20}
                    alt="printer icon"
                  />
                </div>
                <p>S100</p>
              </div>
              <div
                className={`${styles.printJobSettings__d75} ${
                  printer === "d75" && styles.printJobSettings__selectedPrinter
                }`}
                onClick={() => setPrinter("d75")}
              >
                <div
                  className={`${styles.printJobSettings__d75Icon} ${
                    printer === "d75" && styles.printJobSettings__selectedIcon
                  }`}
                >
                  <Image
                    src="/printer-icon.PNG"
                    height={27}
                    width={20}
                    alt="printer icon"
                  />
                </div>
                <p>D75</p>
              </div>
              <div
                className={`${styles.printJobSettings__p55} ${
                  printer === "p55" && styles.printJobSettings__selectedPrinter
                }`}
                onClick={() => setPrinter("p55")}
              >
                <div
                  className={`${styles.printJobSettings__p55Icon} ${
                    printer === "p55" && styles.printJobSettings__selectedIcon
                  }`}
                >
                  <Image
                    src="/printer-icon.PNG"
                    height={27}
                    width={20}
                    alt="printer icon"
                  />
                </div>
                <p>Pro55</p>
              </div>
            </div>
          </div>
          <div className={styles.printJobSettings__material}>
            <h2>Material</h2>
            <div className={styles.printJobSettings__vendors}>
              <p
                className={
                  vendor === "sprintray" &&
                  styles.printJobSettings__selectedVendor
                }
                onClick={() => setVendor("sprintray")}
              >
                SprintRay
              </p>
              <p
                className={
                  vendor === "nextdent" &&
                  styles.printJobSettings__selectedVendor
                }
                onClick={() => setVendor("nextdent")}
              >
                NextDent
              </p>
              <p
                className={
                  vendor === "dentca" && styles.printJobSettings__selectedVendor
                }
                onClick={() => setVendor("dentca")}
              >
                DENTCA
              </p>
              <p
                className={
                  vendor === "keystone" &&
                  styles.printJobSettings__selectedVendor
                }
                onClick={() => setVendor("keystone")}
              >
                KeyStone
              </p>
              <p
                className={
                  vendor === "bego" && styles.printJobSettings__selectedVendor
                }
                onClick={() => setVendor("bego")}
              >
                Bego
              </p>
              <p
                className={
                  vendor === "dreve" && styles.printJobSettings__selectedVendor
                }
                onClick={() => setVendor("dreve")}
              >
                Dreve
              </p>
            </div>
            <div
              className={styles.printJobSettings__resins}
              onClick={openResinList}
            >
              <p>{resin}</p>
              <div className={styles.printJobSettings__expand}>
                <ExpandMore style={{ fontSize: "2.8rem" }} />
              </div>
              {selectedResinList && <ResinList resins={resins} />}
            </div>
          </div>
          <div className={styles.printJobSettings__layerThickness}>
            <h2>Layer Thickness</h2>
            <div className={styles.printJobSettings__thickness}>
              <div
                className={`${styles.printJobSettings__50} ${
                  thickness === "50" &&
                  styles.printJobSettings__selectedThickness
                }`}
                onClick={() => setThickness("50")}
              >
                <h4>50µm</h4>
                <p>Smooth</p>
              </div>
              <div
                className={`${styles.printJobSettings__50} ${
                  thickness === "100" &&
                  styles.printJobSettings__selectedThickness
                }`}
                onClick={() => setThickness("100")}
              >
                <h4>100µm</h4>
                <p>Recommended</p>
              </div>
              <div
                className={`${styles.printJobSettings__50} ${
                  thickness === "170" &&
                  styles.printJobSettings__selectedThickness
                }`}
                onClick={() => setThickness("170")}
              >
                <h4>170µm</h4>
                <p>Ludicrous</p>
              </div>
            </div>
            <div className={styles.printJobSettings__info}>
              <p>
                Layer thickness determines the height of each layer. Lower
                values can produce more cosmetic smoothess but increase print
                time.
              </p>
            </div>
          </div>
          <hr />
          <div className={styles.printJobSettings__account}>
            <h2>Account</h2>
            <div className={styles.printJobSettings__email}>
              <h4>adam@sprintray.com</h4>
              <ChevronRight style={{ fontSize: "1.9rem" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintJobSettings;
