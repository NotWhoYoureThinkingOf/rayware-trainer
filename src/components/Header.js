import { ChevronRight, Close } from "@material-ui/icons";
import React from "react";
import styles from "../styles/Header.module.css";
import { grab } from "../features/sizingSlice";
import { grabLayout } from "../features/layoutSlice";
import { grabSupportsMenu } from "../features/supportsMenuSlice";
import { grabDiagnosticMenu } from "../features/diagnosticSlice";
import { releaseModelImported } from "../features/modelImportedSlice";
import {
  releaseModelSelected,
  selectModelSelected,
} from "../features/modelSelectedSlice";
import { grabAddModel, selectAddModel } from "../features/addModelSlice";
import {
  grabLogsTraining,
  grabLogsStep1,
  grabLogsStep2,
  selectLogsTraining,
  selectLogsStep1,
  releaseLogsTraining,
  releaseLogsStep1,
} from "../features/logsAndPreviewSlice";
import { useDispatch, useSelector } from "react-redux";
import { releaseModelFixed } from "../features/modelFixedSlice";
import { releaseSupportsModel } from "../features/supportsModelSlice";

const Header = () => {
  const dispatch = useDispatch();
  const addModelWindow = useSelector(selectAddModel);
  const modelIsSelected = useSelector(selectModelSelected);
  const logsTraining = useSelector(selectLogsTraining);
  const logsStep1 = useSelector(selectLogsStep1);

  const openDiagnosticMenu = () => {
    dispatch(grabDiagnosticMenu());
    dispatch(releaseLogsStep1());
    dispatch(grabLogsStep2());
  };

  const openSizingMenu = () => {
    dispatch(grab());
  };

  const openLayoutMenu = () => {
    dispatch(grabLayout());
  };

  const openSupportsMenu = () => {
    dispatch(grabSupportsMenu());
  };

  const openAddModel = () => {
    dispatch(grabAddModel());
  };

  const deleteModel = () => {
    if (modelIsSelected) {
      dispatch(releaseModelImported());
      dispatch(releaseModelSelected());
      dispatch(releaseModelFixed());
      dispatch(releaseSupportsModel());
    }
  };

  const closeLogsTraining = () => {
    dispatch(releaseLogsTraining());
    dispatch(releaseLogsStep1());
  };

  return (
    <div className={styles.header}>
      <div className={styles.header__file}>
        <p className={styles.header__fileTitle}>File</p>
        <ul>
          <li>
            <p>New</p>
            <p>Ctrl+N</p>
          </li>
          <hr />
          <li>
            <p>Open Print Job</p>
          </li>
          <li>
            <p>Save Print Job</p>
            <p>Ctrl+S</p>
          </li>
        </ul>
      </div>
      <div className={styles.header__model}>
        <p className={styles.header__modelTitle}>Model</p>
        <ul>
          <li onClick={openAddModel}>
            <p>Add Model</p>
            <p>Ctrl+O</p>
          </li>
          <li onClick={deleteModel}>
            <p>Remove Selected</p>
            <p>Del</p>
          </li>
          <hr />
          <li onClick={openSizingMenu}>
            <p>Size</p>
          </li>
          <hr />
          <li onClick={openSizingMenu}>
            <p>Orientation</p>
          </li>

          <li onClick={openSizingMenu}>
            <p>Select Base</p>
          </li>
          <hr />
          <li onClick={openLayoutMenu}>
            <p>Layout</p>
          </li>

          <li onClick={openLayoutMenu}>
            <p>Duplicate</p>
          </li>
          <hr />
          <li onClick={openSupportsMenu}>
            <p>Supports</p>
          </li>

          <li onClick={openSupportsMenu}>
            <p>Edit Supports</p>
          </li>
          <hr />
          <li>
            <p>Model Units</p>
            <ChevronRight />
          </li>
        </ul>
      </div>
      <div className={styles.header__view}>
        <p className={styles.header__viewTitle}>View</p>
        <ul>
          <li>
            <p>Home</p>
          </li>
          <hr />
          <li>
            <p>Top</p>
          </li>
          <li>
            <p>Left</p>
          </li>
          <li>
            <p>Right</p>
          </li>

          <li>
            <p>Bottom</p>
          </li>
          <hr />
          <li>
            <p>Zoom In</p>
          </li>

          <li>
            <p>Zoom Out</p>
          </li>
          <hr />
          <li>
            <p>Gimbal Visibility</p>
          </li>
        </ul>
      </div>
      <div className={styles.header__print}>
        <p className={styles.header__printTitle}>Print</p>
        <ul>
          <li>
            <p>Print Settings</p>
          </li>
          <hr />
          <li>
            <p>Print</p>
          </li>
          <li>
            <p>Manage Printers</p>
          </li>
          <hr />
          <li>
            <p>Manual Motor Controls</p>
          </li>
          <hr />
          <li>
            <p>Fine Tuning</p>
            <ChevronRight />
          </li>
          <li>
            <p>Network Connection</p>
            <ChevronRight />
          </li>
        </ul>
      </div>
      <div className={styles.header__help}>
        <p className={styles.header__helpTitle}>Help</p>
        <ul>
          <li>
            <p>Language</p>
            <ChevronRight />
          </li>

          <li>
            <p onClick={openDiagnosticMenu}>Get Diagnostics</p>
          </li>
          <li>
            <p>Tutorial</p>
          </li>
          <li>
            <p>About SprintRay</p>
          </li>
        </ul>
      </div>
      {logsTraining && logsStep1 && (
        <div className={styles.header__logsTraining}>
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
            The diagnostic logs are used to give extra backend information about
            RayWare and your printer. These are important when troubleshooting
            is necessary.
          </p>
          <p>
            To download your logs, click on the "Help" menu and then click on
            "Get Diagnostics".
          </p>
        </div>
      )}
    </div>
  );
};

export default Header;
