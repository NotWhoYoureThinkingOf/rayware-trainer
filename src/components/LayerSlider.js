import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../styles/LayerSlider.module.css";
import Slider from "@material-ui/core/Slider";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";

export default function VerticalSlider() {
  const [temp, setTemp] = useState(null);

  const useStyles = makeStyles({
    root: {
      height: "107%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  });

  function valuetext(value) {
    // value = temp;
    setTemp(value);
    // return `${value}°C`;
  }

  const classes = useStyles();
  console.log("temp", temp);

  return (
    <React.Fragment>
      <div className={classes.root}>
        <div
          className={styles.layerSlider__up}
          onClick={() => setTemp(temp + 1)}
        >
          <KeyboardArrowUp style={{ fontSize: "3.5rem" }} />
        </div>

        <Slider
          orientation="vertical"
          getAriaValueText={valuetext}
          defaultValue={1}
          aria-labelledby="vertical-slider"
          min={1}
          max={205}
        />
        <div className={styles.layerSlider__down}>
          <KeyboardArrowDown
            style={{ fontSize: "3.5rem" }}
            onClick={() => setTemp(temp - 1)}
          />
        </div>

        <h3 style={{ fontSize: "1rem", fontWeight: 400 }}>
          Layer {temp} of 205
        </h3>
      </div>
    </React.Fragment>
  );
}
