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
import { grabLoginTraining } from "../features/loginTrainingSlice";
import { grabFixTraining } from "../features/fixTrainingSlice";
import {
  grabLogsStep1,
  grabLogsTraining,
  grabPreviewTraining,
  grabPreviewStep1,
} from "../features/logsAndPreviewSlice";
import gsap, { Power4 } from "gsap";
import CheckSpecs from "./CheckSpecs";
import Common from "./Common";
import { ArrowBack, Close } from "@material-ui/icons";

const Welcome = () => {
  const [checkCompat, setCheckCompat] = useState(false);
  const [backFromSpecs, setBackFromSpecs] = useState(false);
  const [checkCommon, setCheckCommon] = useState(false);
  const [backFromCommon, setBackFromCommon] = useState(false);
  const dispatch = useDispatch();
  const tl = gsap.timeline();
  const lessons = useRef(null);
  const checkSpecsRef = useRef(null);
  const commonRef = useRef(null);

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

    if (checkCommon) {
      tl.to(lessons.current, 0.9, {
        x: "-100vw",
        ease: Power4.easeInOut,
      }).to(commonRef.current, 0.9, {
        x: "0",
        ease: Power4.easeInOut,
        onComplete: setCheckCommon(false),
      });
    }

    if (backFromCommon) {
      tl.to(commonRef.current, 0.9, {
        x: "100vw",
        duration: 0.9,
        ease: Power4.easeInOut,
      }).to(lessons.current, 0.9, {
        x: "0",
        onComplete: setBackFromCommon(false),
      });
    }
  }, [checkCompat, backFromSpecs, checkCommon, backFromCommon]);

  const returnToWelcome = () => {
    setBackFromSpecs(true);
  };

  const checkSpecs = () => {
    setCheckCompat(true);
  };

  const returnToWelcomeFromCommon = () => {
    setBackFromCommon(true);
  };

  const commonIssues = () => {
    setCheckCommon(true);
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
    dispatch(grabFixTraining());
  };

  const startLoginTraining = () => {
    dispatch(releaseWelcome());
    dispatch(grabLoginTraining());
  };

  const startLogsTraining = () => {
    dispatch(releaseWelcome());
    dispatch(grabLogsTraining());
    dispatch(grabLogsStep1());
  };

  const startPreviewTraining = () => {
    dispatch(releaseWelcome());
    dispatch(grabPreviewTraining());
    dispatch(grabPreviewStep1());
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
        <div ref={commonRef} className={styles.welcome__common}>
          <div
            className={styles.welcome__commonBack}
            onClick={returnToWelcomeFromCommon}
          >
            <Close style={{ fontSize: "2.8rem", display: "flex" }} />
          </div>
          <Common />
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
              <div className={styles.welcome__specsContainer}>
                <Image src="/compat.png" layout="fill" objectFit="contain" />
              </div>
              <h3>Checking compatibility with your Computer</h3>
            </div>
            <div
              className={`${styles.welcome__optimize} ${styles.welcome__tutorial} ${styles.welcome__TBD}`}
              // onClick={}
            >
              <div className={styles.welcome__optimizeContainer}>
                <Image
                  src="/optimizecard.png"
                  layout="fill"
                  objectFit="contain"
                />
              </div>

              <h3>Optimizing your Graphics Card (TBD)</h3>
            </div>
            <div
              className={`${styles.welcome__commonIssues} ${styles.welcome__tutorial}`}
              onClick={commonIssues}
            >
              <div className={styles.welcome__commonContainer}>
                <Image
                  src="/connection-issue.png"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h3>Common Connection Fixes (TBD)</h3>
            </div>
            <div
              className={`${styles.welcome__loggingIn} ${styles.welcome__tutorial}`}
              onClick={startLoginTraining}
            >
              <div className={styles.welcome__loggingContainer}>
                <Image src="/login.png" layout="fill" objectFit="contain" />
              </div>
              <h3>Logging into Dashboard</h3>
            </div>
            <div
              className={`${styles.welcome__import} ${styles.welcome__tutorial}`}
              onClick={startImportTraining}
            >
              <div className={styles.welcome__importContainer}>
                <Image
                  src="/import-model.JPG"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h3>Importing a Model</h3>
            </div>
            <div
              className={`${styles.welcome__fixModel} ${styles.welcome__tutorial} `}
              onClick={startFixTraining}
            >
              <div className={styles.welcome__fixContainer}>
                <Image src="/fix-model.JPG" layout="fill" objectFit="contain" />
              </div>
              <h3>Scan Repair (Fixing a Model) (TBD)</h3>
            </div>
            <div
              className={`${styles.welcome__justLooking} ${styles.welcome__tutorial}`}
              onClick={freeRoam}
            >
              <div className={styles.welcome__justContainer}>
                <Image
                  src="/rayware-trainer-just-looking.JPG"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h3>Free Roam</h3>
            </div>
            <div
              className={`${styles.welcome__printPreview} ${styles.welcome__tutorial}`}
              onClick={startPreviewTraining}
            >
              <div className={styles.welcome__previewContainer}>
                <Image
                  src="/print-preview.png"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h3>Print Preview (Checking Total Layers) (TBD)</h3>
            </div>
            <div
              className={`${styles.welcome__logs} ${styles.welcome__tutorial}`}
              onClick={startLogsTraining}
            >
              <div className={styles.welcome__logsContainer}>
                <Image
                  src="/diagnostic-logs.PNG"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h3>Downloading your Diagnostic Logs</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
