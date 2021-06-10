import React, { useState } from "react";
import styles from "../styles/SizingMenu.module.css";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { selectModelSelected } from "../features/modelSelectedSlice";

const Sizing = () => {
  const [isPercentage, setIsPercentage] = useState(true);
  const modelIsSelected = useSelector(selectModelSelected);

  return (
    <div className={styles.sizing__sizingMenu}>
      <div className={styles.sizing__sizingSizes}>
        <h3>Size</h3>
        <div className={styles.sizing__sizingOptions}>
          <p
            className={`${!isPercentage && styles.actual} ${
              !isPercentage && modelIsSelected && styles.modelSelectedButton
            }`}
            onClick={() => setIsPercentage(false)}
          >
            Actual
          </p>
          <p
            className={`${isPercentage && styles.percentage} ${
              isPercentage && modelIsSelected && styles.modelSelectedButton
            }`}
            onClick={() => setIsPercentage(true)}
          >
            Percentage
          </p>
        </div>
        <div className={styles.sizing__sizingDimensions}>
          <div className={styles.sizing__sizingX}>
            <h3>X</h3>
            <div
              className={`${styles.sizing__sizingXValue} ${
                modelIsSelected && styles.modelSelectedValue
              }`}
            >
              <p>0.00</p>
              <p>%</p>
            </div>
            <div className={styles.sizing__sizingUpDown}>
              <div
                className={`${styles.sizing__sizingUp} ${
                  modelIsSelected && styles.modelSelectedButton
                }`}
              >
                <KeyboardArrowUp style={{ fontSize: "1.2rem" }} />
              </div>
              <div
                className={`${styles.sizing__sizingDown} ${
                  modelIsSelected && styles.modelSelectedButton
                }`}
              >
                <KeyboardArrowDown />
              </div>
            </div>
          </div>
          <div className={styles.sizing__sizingY}>
            <h3>Y</h3>
            <div
              className={`${styles.sizing__sizingYValue} ${
                modelIsSelected && styles.modelSelectedValue
              }`}
            >
              <p>0.00</p>
              <p>%</p>
            </div>
            <div className={styles.sizing__sizingUpDown}>
              <div
                className={`${styles.sizing__sizingUp} ${
                  modelIsSelected && styles.modelSelectedButton
                }`}
              >
                <KeyboardArrowUp style={{ fontSize: "1.2rem" }} />
              </div>
              <div
                className={`${styles.sizing__sizingDown} ${
                  modelIsSelected && styles.modelSelectedButton
                }`}
              >
                <KeyboardArrowDown />
              </div>
            </div>
          </div>
          <div className={styles.sizing__sizingZ}>
            <h3>Z</h3>
            <div
              className={`${styles.sizing__sizingZValue} ${
                modelIsSelected && styles.modelSelectedValue
              }`}
            >
              <p>0.00</p>
              <p>%</p>
            </div>
            <div className={styles.sizing__sizingUpDown}>
              <div
                className={`${styles.sizing__sizingUp} ${
                  modelIsSelected && styles.modelSelectedButton
                }`}
              >
                <KeyboardArrowUp style={{ fontSize: "1.2rem" }} />
              </div>
              <div
                className={`${styles.sizing__sizingDown} ${
                  modelIsSelected && styles.modelSelectedButton
                }`}
              >
                <KeyboardArrowDown />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${styles.sizing__sizingReset} ${
          modelIsSelected && styles.modelSelectedButton
        }`}
      >
        <p>Reset Size</p>
      </div>
      <hr />
      <div className={styles.sizing__rotation}>
        <h3>Rotation</h3>
        <div className={styles.sizing__rotationDimensions}>
          <div className={styles.sizing__rotationX}>
            <h3>X</h3>
            <div
              className={`${styles.sizing__rotationXValue} ${
                modelIsSelected && styles.modelSelectedValue
              }`}
            >
              <p>0</p>
              <p>deg</p>
            </div>
            <div className={styles.sizing__rotationUpDown}>
              <div
                className={`${styles.sizing__rotationUp} ${
                  modelIsSelected && styles.modelSelectedButton
                }`}
              >
                <KeyboardArrowUp style={{ fontSize: "1.2rem" }} />
              </div>
              <div
                className={`${styles.sizing__rotationDown} ${
                  modelIsSelected && styles.modelSelectedButton
                }`}
              >
                <KeyboardArrowDown />
              </div>
            </div>
          </div>
          <div className={styles.sizing__rotationY}>
            <h3>Y</h3>
            <div
              className={`${styles.sizing__rotationYValue} ${
                modelIsSelected && styles.modelSelectedValue
              }`}
            >
              <p>0</p>
              <p>deg</p>
            </div>
            <div className={styles.sizing__rotationUpDown}>
              <div
                className={`${styles.sizing__rotationUp} ${
                  modelIsSelected && styles.modelSelectedButton
                }`}
              >
                <KeyboardArrowUp style={{ fontSize: "1.2rem" }} />
              </div>
              <div
                className={`${styles.sizing__rotationDown} ${
                  modelIsSelected && styles.modelSelectedButton
                }`}
              >
                <KeyboardArrowDown />
              </div>
            </div>
          </div>
          <div className={styles.sizing__rotationZ}>
            <h3>Z</h3>
            <div
              className={`${styles.sizing__rotationZValue} ${
                modelIsSelected && styles.modelSelectedValue
              }`}
            >
              <p>0</p>
              <p>deg</p>
            </div>
            <div className={styles.sizing__rotationUpDown}>
              <div
                className={`${styles.sizing__rotationUp} ${
                  modelIsSelected && styles.modelSelectedButton
                }`}
              >
                <KeyboardArrowUp style={{ fontSize: "1.2rem" }} />
              </div>
              <div
                className={`${styles.sizing__rotationDown} ${
                  modelIsSelected && styles.modelSelectedButton
                }`}
              >
                <KeyboardArrowDown />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sizing__rotationSelect}>
        <p className={`${modelIsSelected && styles.modelSelectedButton}`}>
          Select Base
        </p>
      </div>
      <div className={styles.sizing__rotationReset}>
        <p className={`${modelIsSelected && styles.modelSelectedButton}`}>
          Reset Rotation
        </p>
      </div>
    </div>
  );
};

export default Sizing;
