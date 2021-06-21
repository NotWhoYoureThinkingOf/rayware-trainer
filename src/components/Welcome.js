import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "../styles/Welcome.module.css";
import { releaseWelcome, selectWelcome } from "../features/welcomeSlice";
import {
  grabImportTraining,
  selectImportTraining,
} from "../features/importTrainingSlice";
import { useDispatch, useSelector } from "react-redux";
import { grabModelImported } from "../features/modelImportedSlice";
import gsap, { Power4 } from "gsap";
import CheckSpecs from "./CheckSpecs";
import { ArrowBack, Close } from "@material-ui/icons";

const Welcome = () => {
  const [checkCompat, setCheckCompat] = useState(false);
  const [backFromSpecs, setBackFromSpecs] = useState(false);
  const dispatch = useDispatch();
  const tl = gsap.timeline();
  const lessons = useRef(null);
  const checkSpecsRef = useRef(null);

  useEffect(() => {
    if (checkCompat) {
      tl.to(lessons.current, 0.9, {
        x: "-100vw",
        ease: Power4.easeInOut,
      }).to(checkSpecsRef.current, 0.9, {
        x: "0",
        ease: Power4.easeInOut,
        onComplete: setCheckCompat(false),
      });
    }

    if (backFromSpecs) {
      tl.to(checkSpecsRef.current, 0.9, {
        x: "100vw",
        duration: 0.9,
        ease: Power4.easeInOut,
      }).to(lessons.current, 0.9, {
        x: "0",
        onComplete: setBackFromSpecs(false),
      });
    }
  }, [checkCompat, backFromSpecs]);

  const returnToWelcome = () => {
    setBackFromSpecs(true);
  };

  const checkSpecs = () => {
    setCheckCompat(true);
  };

  const backToWelcome = () => {
    setCheckCompat(false);
  };

  const startImportTraining = () => {
    dispatch(grabImportTraining());
    dispatch(releaseWelcome());
  };

  const startFixTraining = () => {
    dispatch(releaseWelcome());
    dispatch(grabModelImported());
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

        <div ref={checkSpecsRef} className={styles.welcome__checkSpecs}>
          <div
            className={styles.welcome__checkSpecsBack}
            onClick={returnToWelcome}
          >
            <Close style={{ fontSize: "2.8rem", display: "flex" }} />
          </div>

          <CheckSpecs />
        </div>
        <div ref={lessons} className={styles.welcome__body}>
          <h2 className={styles.welcome__bodyTitle}>
            What do you want to learn?
          </h2>
          <div className={styles.welcome__content}>
            <div
              className={`${styles.welcome__specs} ${styles.welcome__tutorial}`}
              onClick={checkSpecs}
            >
              <Image
                src="/rayware-trainer-just-looking.JPG"
                width={376.4}
                height={198.5}
              />
              <h3>Checking compatibility with your Computer</h3>
            </div>
            <div
              className={`${styles.welcome__import} ${styles.welcome__tutorial}`}
              onClick={startImportTraining}
            >
              <Image src="/import-model.JPG" width={376.4} height={198.5} />
              <h3>Importing a Model</h3>
            </div>
            <div
              className={`${styles.welcome__fixModel} ${styles.welcome__tutorial}`}
              onClick={startFixTraining}
            >
              <Image src="/fix-model.JPG" width={376.4} height={198.5} />
              <h3>Scan Repair (Fixing a Model)</h3>
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
