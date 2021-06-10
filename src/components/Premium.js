import React from "react";
import styles from "../styles/Premium.module.css";
import { useSelector } from "react-redux";
import { selectModelSelected } from "../features/modelSelectedSlice";

const Premium = () => {
  const modelIsSelected = useSelector(selectModelSelected);

  return (
    <div className={styles.premium__premiumMenu}>
      <h3>Premium Tools</h3>
      <div className={styles.premium__options}>
        <div
          className={`${styles.premium__repair} ${styles.premium__button} ${
            modelIsSelected && styles.modelSelectedButton
          }`}
        >
          <p>Scan Repair Selected</p>
        </div>
        <div
          className={`${styles.premium__cut} ${styles.premium__button} ${
            modelIsSelected && styles.modelSelectedButton
          }`}
        >
          <p>Cut Selected</p>
        </div>
        <div
          className={`${styles.premium__export} ${styles.premium__button} ${
            modelIsSelected && styles.modelSelectedButton
          }`}
        >
          <p>Export Selected</p>
        </div>
      </div>
    </div>
  );
};

export default Premium;
