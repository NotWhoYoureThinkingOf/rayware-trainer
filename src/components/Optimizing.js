import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Optimizing.module.css";
import Image from "next/image";
import { Close, Search } from "@material-ui/icons";
import gsap, { Power4 } from "gsap";

export const Optimizing = () => {
  const [windowsModal, setWindowsModal] = useState(false);

  return (
    <div className={styles.optimizing}>
      <h2>Optimizing your graphics card:</h2>
      <div className={styles.optimizing__info}>
        <p>
          If you've checked to ensure that your computer has a graphics card and
          it meets the minimum system requirements, but RayWare still seems to
          be running slow, you may just need to optimize your graphics card for
          RayWare to fully utilize it.
        </p>
        <div className={styles.optimizing__OS}>
          <h3>Click on your operating system to learn how to optimize:</h3>
          <div className={styles.optimizing__systems}>
            <div
              className={styles.optimizing__windows}
              onClick={() => setWindowsModal(true)}
            >
              <div className={styles.optimizing__windowsImage}>
                <Image
                  src="/windows-icon.jpg"
                  layout="fill"
                  objectFit="contain"
                />
              </div>

              {/* <img src="/windows-icon.JPG" alt="" /> */}
              <h3>Windows</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
