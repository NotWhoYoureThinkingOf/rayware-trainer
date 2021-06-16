import React from "react";
import { useDispatch } from "react-redux";
import { releaseImportTraining } from "../features/importTrainingSlice";
import styles from "../styles/ImportTraining.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { Close } from "@material-ui/icons";

const ImportTraining = () => {
  const dispatch = useDispatch();

  const closeImportTraining = () => {
    dispatch(releaseImportTraining());
  };

  return (
    <div className={styles.importTraining}>
      <h3>Importing a model</h3>
      <p>Click on the + button on the left side</p>
      <div
        className={styles.importTraining__close}
        onClick={closeImportTraining}
      >
        <Close style={{ fontSize: "1.5rem" }} />
      </div>
      <div className={styles.importTraining__arrow}>
        <BsArrowLeft style={{ fontSize: "3rem" }} />
      </div>
    </div>
  );
};

export default ImportTraining;
