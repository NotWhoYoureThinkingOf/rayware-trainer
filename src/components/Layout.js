import React, { useEffect, useState } from "react";
import styles from "../styles/Layout.module.css";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { selectModelSelected } from "../features/modelSelectedSlice";

const Layout = () => {
  const modelIsSelected = useSelector(selectModelSelected);
  const [dupCount, setDupCount] = useState(1);

  return (
    <div className={styles.layout__menu}>
      <h3>Layout</h3>
      <div
        className={`${styles.layout__center} ${styles.layout__button} ${
          modelIsSelected && styles.modelSelectedButton
        }`}
      >
        <p>Center in Platform</p>
      </div>
      <hr />
      <div className={styles.layout__duplicates}>
        <div className={styles.layout__duplicatesContainer}>
          <h3>Duplicates</h3>
          <div className={styles.layout__duplicatesValues}>
            <div
              className={`${styles.layout__duplicatesValue} ${
                modelIsSelected && styles.modelSelectedValue
              }`}
            >
              {modelIsSelected && <p>{dupCount}</p>}
            </div>
            <div className={styles.layout__duplicatesUpDown}>
              <div
                className={`${styles.layout__duplicatesUp} ${
                  modelIsSelected && styles.modelSelectedButton
                }`}
              >
                <KeyboardArrowUp style={{ fontSize: "1.2rem" }} />
              </div>
              <div
                className={`${styles.layout__duplicatesDown} ${
                  modelIsSelected && styles.modelSelectedButton
                }`}
              >
                <KeyboardArrowDown style={{ fontSize: "1.2rem" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${styles.layout__duplicatesDuplicate} ${
          styles.layout__button
        } ${modelIsSelected && styles.modelSelectedButton}`}
      >
        <p>Duplicate</p>
      </div>
      <div
        className={`${styles.layout__duplicatesRemove} ${
          styles.layout__button
        } ${modelIsSelected && styles.modelSelectedButton}`}
      >
        <p>Remove Duplicates</p>
      </div>
    </div>
  );
};

export default Layout;
