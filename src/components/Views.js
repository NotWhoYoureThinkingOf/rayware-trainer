import React from "react";
import Image from "next/image";
import styles from "../styles/Views.module.css";
import { Home } from "@material-ui/icons";

const Views = () => {
  // view icons are 30w x 28h
  // need to make redux state for this to appear and add in to main features

  return (
    <div className={styles.views}>
      <div className={styles.views__container}>
        <div className={`${styles.view__box} ${styles.view__empty}`}></div>
        <div className={`${styles.view__box} ${styles.view__top}`}>
          <Image src="/cube-up.png" height={21} width={20} alt="up" />
        </div>
        <div className={`${styles.view__box} ${styles.view__empty}`}></div>
        <div className={`${styles.view__box} ${styles.view__reset}`}>
          <Home style={{ fontSize: "2.2rem" }} />
        </div>
        <div className={`${styles.view__box} ${styles.view__left}`}>
          <Image src="/cube-left.png" height={21} width={20} alt="left" />
        </div>
        <div className={`${styles.view__box} ${styles.view__front}`}>
          <Image src="/cube-front.png" height={21} width={20} alt="front" />
        </div>
        <div className={`${styles.view__box} ${styles.view__right}`}>
          <Image src="/cube-right.png" height={21} width={20} alt="right" />
        </div>
        <div className={`${styles.view__box} ${styles.view__back}`}>
          <Image src="/cube-back.png" height={21} width={20} alt="back" />
        </div>
        <div className={`${styles.view__box} ${styles.view__empty}`}></div>
        <div className={`${styles.view__box} ${styles.view__bottom}`}>
          <Image src="/cube-down.png" height={21} width={20} alt="down" />
        </div>
        <div className={`${styles.view__box} ${styles.view__empty}`}></div>
        <div className={`${styles.view__box} ${styles.view__empty}`}></div>
      </div>
    </div>
  );
};

export default Views;
