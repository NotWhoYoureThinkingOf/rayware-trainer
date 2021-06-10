import React, { useState } from "react";
import styles from "../styles/SupportsMenu.module.css";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { selectModelSelected } from "../features/modelSelectedSlice";

const SupportsMenu = () => {
  const [isDefault, setIsDefault] = useState(true);
  const [isHiStrength, setIsHiStrength] = useState(true);
  const [densityType, setDensityType] = useState("M");
  const [offset, setOffset] = useState(4);
  const modelIsSelected = useSelector(selectModelSelected);

  return (
    <div className={styles.supportsMenu__menu}>
      <h3>Supports</h3>
      <div className={styles.supportsMenu__topButtons}>
        <div
          className={`${styles.supportsMenu__generate} ${
            styles.supportsMenu__button
          } ${modelIsSelected && styles.modelSelectedButton}`}
        >
          <p>Generate Supports</p>
        </div>
        <div
          className={`${styles.supportsMenu__remove} ${
            styles.supportsMenu__button
          } ${modelIsSelected && styles.modelSelectedButton}`}
        >
          <p>Remove Supports</p>
        </div>
      </div>
      {/* options */}
      <div className={styles.supportsMenu__raft}>
        <h3 className={styles.supportsMenu__raftTitle}>Raft</h3>
        <div className={styles.supportsMenu__raftOptions}>
          <p
            className={`${isDefault && styles.selected__setting} ${
              isDefault && modelIsSelected && styles.modelSelectedButton
            }`}
            onClick={() => setIsDefault(true)}
          >
            Default
          </p>
          <p
            className={`${!isDefault && styles.selected__setting} ${
              !isDefault && modelIsSelected && styles.modelSelectedButton
            }`}
            onClick={() => setIsDefault(false)}
          >
            Road
          </p>
        </div>
      </div>
      <div className={styles.supportsMenu__density}>
        <h3 className={styles.supportsMenu__densityTitle}>Density</h3>
        <div className={styles.supportsMenu__densityOptions}>
          <p
            className={`${densityType === "L" && styles.selected__setting} ${
              densityType === "L" &&
              modelIsSelected &&
              styles.modelSelectedButton
            }`}
            onClick={() => setDensityType("L")}
          >
            L
          </p>
          <p
            className={`${densityType === "M" && styles.selected__setting} ${
              densityType === "M" &&
              modelIsSelected &&
              styles.modelSelectedButton
            }`}
            onClick={() => setDensityType("M")}
          >
            M
          </p>
          <p
            className={`${densityType === "H" && styles.selected__setting} ${
              densityType === "H" &&
              modelIsSelected &&
              styles.modelSelectedButton
            }`}
            onClick={() => setDensityType("H")}
          >
            H
          </p>
        </div>
      </div>
      <div className={styles.supportsMenu__strength}>
        <h3 className={styles.supportsMenu__strengthTitle}>Strength</h3>
        <div className={styles.supportsMenu__strengthOptions}>
          <p
            className={`${!isHiStrength && styles.selected__setting} ${
              !isHiStrength && modelIsSelected && styles.modelSelectedButton
            }`}
            onClick={() => setIsHiStrength(false)}
          >
            M
          </p>
          <p
            className={`${isHiStrength && styles.selected__setting} ${
              isHiStrength && modelIsSelected && styles.modelSelectedButton
            }`}
            onClick={() => setIsHiStrength(true)}
          >
            H
          </p>
        </div>
      </div>
      <div className={styles.supportsMenu__offsetContainer}>
        <h3>Base Offset</h3>
        <div className={styles.supportsMenu__offsetValues}>
          <div
            className={`${styles.supportsMenu__offsetValue} ${
              modelIsSelected && styles.modelSelectedValue
            }`}
          >
            <p className={styles.supportsMenu__offsetNumber}>
              {modelIsSelected ? offset : ""}
            </p>
            <p className={styles.supportsMenu__offsetMetric}>mm</p>
          </div>
          <div className={styles.supportsMenu__offsetUpDown}>
            <div
              className={`${styles.supportsMenu__offsetUp} ${
                modelIsSelected && styles.modelSelectedButton
              }`}
            >
              <KeyboardArrowUp style={{ fontSize: "1.2rem" }} />
            </div>
            <div
              className={`${styles.supportsMenu__offsetDown} ${
                modelIsSelected && styles.modelSelectedButton
              }`}
            >
              <KeyboardArrowDown style={{ fontSize: "1.2rem" }} />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${styles.supportsMenu__edit} ${
          styles.supportsMenu__button
        } ${modelIsSelected && styles.modelSelectedButton}`}
      >
        <p>Edit Supports</p>
      </div>
    </div>
  );
};

export default SupportsMenu;
