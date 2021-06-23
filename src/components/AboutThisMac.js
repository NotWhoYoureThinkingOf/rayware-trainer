import React from "react";
import styles from "../styles/AboutThisMac.module.css";
import Image from "next/image";

const AboutThisMac = () => {
  return (
    <div className={styles.about}>
      <div className={styles.about__header}>
        <div className={styles.about__headerButtons}>
          <div className={styles.about__headerExit}></div>
          <div className={styles.about__headerDownsize}></div>
          <div className={styles.about__headerBlank}></div>
        </div>
        <div className={styles.about__headerTabs}>
          <p className={styles.about__headerFirst}>Overview</p>
          <p>Displays</p>
          <p>Storage</p>
          <p>Support</p>
          <p className={styles.about__headerLast}>Service</p>
        </div>
      </div>
      <div className={styles.about__body}>
        <div className={styles.about__bodyContainer}>
          <div className={styles.about__bodyLeft}>
            <div className={styles.about__userImage}>
              <Image src="/P95.png" layout="fill" objectFit="contain" />
            </div>
            <div className={styles.user__bg}></div>
          </div>
          <div className={styles.about__bodyRight}>
            <div className={styles.about__bodyTop}>
              <h2>
                macOS <span>Big Sur</span>
              </h2>
              <p>
                <span>Version</span> 11.4
              </p>
            </div>
            <div className={styles.about__bodyCenter}>
              <p>
                <span>MacBook Pro</span> (13-inch, M1, 2020)
              </p>
              <p>
                <span>Processor</span> 2.8 GHz Quad-Core Intel Core i7
              </p>
              <p>
                <span>Memory</span> 16 GB 2133 MHz LPDDR3
              </p>
              <p>
                <span>Startup Disk</span> Macintosh HD
              </p>
              <p>
                <span>Graphics</span> Radeon 555 Pro 2 GB
              </p>
              <p>
                <span>Serial Number</span> C01A234BC56D
              </p>
              <div className={styles.about__bodyButtons}>
                <button>System Report...</button>
                <button>Software Update...</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.about__bodyBottom}>
          <span>&trade;</span> and <span>&copy;</span> 1983-2021 Apple Inc. All
          Rights Reserved. License and warranty.
        </div>
      </div>
    </div>
  );
};

export default AboutThisMac;
