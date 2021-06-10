import React from "react";
import Image from "next/image";
import styles from "../styles/ManagePrinters.module.css";

const ManagePrinters = () => {
  return (
    <div className={styles.managePrinters}>
      <div className={styles.managePrinters__container}>
        <div className={styles.managePrinters__printer}>
          <div className={styles.managePrinters__icon}>
            <Image
              src="/printer-icon.PNG"
              height={40.5}
              width={30}
              alt="printer icon"
            />
          </div>
          <div className={styles.managePrinters__info}>
            <h4>P95-12A3B45C</h4>
            <p>P95-12A3B45C</p>
          </div>
          <h4 className={styles.managePrinters__ready}>Ready</h4>
        </div>
      </div>
    </div>
  );
};

export default ManagePrinters;
