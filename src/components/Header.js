import { ChevronRight } from "@material-ui/icons";
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
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const addModelWindow = useSelector(selectAddModel);
  const modelIsSelected = useSelector(selectModelSelected);

  const openDiagnosticMenu = () => {
    dispatch(grabDiagnosticMenu());
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
    }
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
    </div>
  );
};

export default Header;
