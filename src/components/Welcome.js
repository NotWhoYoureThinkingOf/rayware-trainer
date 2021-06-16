import React from "react";
import Image from "next/image";
import styles from "../styles/Welcome.module.css";
import { releaseWelcome, selectWelcome } from "../features/welcomeSlice";
import {
  grabImportTraining,
  selectImportTraining,
} from "../features/importTrainingSlice";
import { useDispatch, useSelector } from "react-redux";

const Welcome = () => {
  const dispatch = useDispatch();

  const startImportTraining = () => {
    dispatch(grabImportTraining());
    dispatch(releaseWelcome());
  };

  const freeRoam = () => {
    dispatch(releaseWelcome());
  };

  return (
    <div className={styles.welcome}>
      <div className={styles.welcome__container}>
        <div className={styles.welcome__header}>
          <h2>Welcome To The</h2>
          <h1>RayWare Trainer</h1>
          <h3>An interactive guide to RayWare</h3>
        </div>
        <div className={styles.welcome__body}>
          <h2 className={styles.welcome__bodyTitle}>
            What do you want to learn?
          </h2>
          <div className={styles.welcome__content}>
            <div
              className={`${styles.welcome__import} ${styles.welcome__tutorial}`}
              onClick={startImportTraining}
            >
              <Image src="/import-model.JPG" width={376.4} height={198.5} />
              <h3>Importing a model</h3>
            </div>
            <div
              className={`${styles.welcome__justLooking} ${styles.welcome__tutorial}`}
              onClick={freeRoam}
            >
              <Image
                src="/rayware-trainer-just-looking.JPG"
                width={376.4}
                height={198.5}
              />
              <h3>Free Roam</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
