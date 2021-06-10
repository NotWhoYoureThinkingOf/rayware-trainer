import React, { useState } from "react";
import styles from "../styles/PrintableMenu.module.css";
import { releasePrintableMenu } from "../features/printableMenuSlice";
import { useDispatch } from "react-redux";

const PrintableMenu = () => {
  const dispatch = useDispatch();
  const [compatibility, setCompatibility] = useState(false);

  const closePrintMenu = () => {
    dispatch(releasePrintableMenu());
  };

  return (
    <div className={styles.printableMenu}>
      <div className={styles.printableMenu__container}>
        {/* buttons */}
        <div className={styles.printableMenu__title}>
          <h5>Printability</h5>
        </div>
        <div className={styles.printableMenu__cancel} onClick={closePrintMenu}>
          <h5>Cancel</h5>
        </div>
        <div className={styles.printableMenu__apply} onClick={closePrintMenu}>
          <h5>Apply</h5>
        </div>
        {/* content */}
        <div className={styles.printableMenu__printability}>
          <h3>Printability Checks</h3>
          <p>
            SprintRay Software analyzes your models in order to detect potential
            problems before starting a print job. Use these settings to disable
            some or all of the printability detection features. These settings
            should not be changed except by advanced users.
          </p>
        </div>
        <div className={styles.printableMenu__platform}>
          <div className={styles.printableMenu__platformLeft}>
            <h3>Platform Adhesion</h3>
            <p>
              Detects insufficient contact with the
              <br />
              platform.
            </p>
          </div>
          <div className={styles.printableMenu__platformRight}>
            <div
              className={`${styles.printableMenu__platformSwitch} ${
                !compatibility && styles.selectedMode
              }`}
              onClick={() => setCompatibility(!compatibility)}
            >
              <div
                className={`${styles.printableMenu__platformButton} ${
                  !compatibility && styles.selectedText
                }`}
              >
                {!compatibility ? "ON" : "OFF"}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.printableMenu__compatibility}>
          <div className={styles.printableMenu__compatibilityTop}>
            <h3>Compatibility Mode</h3>
            <div
              className={`${styles.printableMenu__compatibilitySwitch} ${
                compatibility && styles.selectedMode
              }`}
              onClick={() => setCompatibility(!compatibility)}
            >
              <div
                className={`${styles.printableMenu__compatibilityButton} ${
                  compatibility && styles.selectedText
                }`}
              >
                {!compatibility ? "OFF" : "ON"}
              </div>
            </div>
          </div>
          <p>
            The printability checks can be disabled to improve performance on
            less powerful hardware. Note that if you enable compatibility mode,
            RayWare will not be able to detect print issues before they occur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrintableMenu;
