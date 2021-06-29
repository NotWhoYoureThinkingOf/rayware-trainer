import React from "react";
import styles from "../styles/LoginTraining.module.css";
import { useDispatch } from "react-redux";
import { releaseLoginTraining } from "../features/loginTrainingSlice";
import { BsArrowDown } from "react-icons/bs";
import { Close } from "@material-ui/icons";

export const LoginTraining = () => {
  const dispatch = useDispatch();

  const closeLoginTraining = () => {
    dispatch(releaseLoginTraining());
  };

  return (
    <div className={styles.loginTraining}>
      <h3>Logging into Dashboard</h3>
      <p>Click on "Sign in to account"</p>
      <div className={styles.loginTraining__close} onClick={closeLoginTraining}>
        <Close style={{ fontSize: "1.5rem" }} />
      </div>
      <div className={styles.loginTraining__arrow}>
        <BsArrowDown style={{ fontSize: "3rem" }} />
      </div>
    </div>
  );
};
