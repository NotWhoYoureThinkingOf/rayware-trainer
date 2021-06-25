import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/MacModal.module.css";
import Image from "next/image";
import gsap, { Power4 } from "gsap";
import AboutThisMac from "./AboutThisMac";
import { grabMacAbout, selectMacAbout } from "../features/macAboutSlice";
import { useDispatch, useSelector } from "react-redux";

const MacModal = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [macStep1, setMacStep1] = useState(true);
  const [macStep2, setMacStep2] = useState(false);
  const macMockup = useRef(null);
  const macAboutMenu = useSelector(selectMacAbout);
  const dispatch = useDispatch();
  const tl = gsap.timeline();

  useEffect(() => {
    if (menuOpen) {
      tl.to(macMockup.current, 0.3, {
        opacity: 1,
        ease: Power4.easeInOut,
        pointerEvents: "auto",
      });
    } else {
      tl.to(macMockup.current, 0.3, {
        opacity: 0,
        ease: Power4.easeInOut,
        pointerEvents: "none",
      });
    }
  }, [menuOpen]);

  useEffect(() => {
    if (!macAboutMenu) {
      setMacStep1(true);
      setMacStep2(false);
      setMenuOpen(false);
      setAboutOpen(false);
    }
  }, [macAboutMenu]);

  const openAboutMenu = () => {
    setMenuOpen(false);
    setAboutOpen(true);
    dispatch(grabMacAbout());
    setMacStep1(false);
    setMacStep2(true);
  };

  return (
    <div className={styles.macModal}>
      <div className={styles.macModal__bg}>
        <Image src="/mac-wallpaper.jpg" layout="fill" />
      </div>
      <div className={styles.macModal__header}>
        <div
          className={`${styles.macModal__iconContainer} ${
            menuOpen && styles.macModal__menuOpen
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Image src="/apple-icon-white.png" height={17} width={14} />
        </div>
        <div ref={macMockup} className={styles.macModal__menu}>
          <p className={styles.macModal__section} onClick={openAboutMenu}>
            About This Mac
          </p>
          <p>System Preferences...</p>
          <p className={styles.macModal__section}>App Store...</p>
          <p className={styles.macModal__section}>Recent Items</p>
          <p className={styles.macModal__section}>Force Quit...</p>
          <p>Sleep</p>
          <p>Restart...</p>
          <p className={styles.macModal__section}>Shut Down...</p>
          <p>Lock Screen</p>
          <p>Log Out...</p>
        </div>
        <div className={styles.macModal__headerLeft}>
          <h4>Finder</h4>
          <p>File</p>
          <p>Edit</p>
          <p>View</p>
          <p>Go</p>
          <p>Window</p>
          <p>Help</p>
        </div>

        <div className={styles.macModal__headerRight}>
          <p>Fri Jun 25</p>
          <span>12:00 PM</span>
        </div>
      </div>
      <div className={styles.macModal__steps}>
        {macStep1 && (
          <p className={styles.macModal__step}>
            Click on the Apple icon in the top left and then click "About This
            Mac"
          </p>
        )}
        {macStep2 && (
          <>
            <p className={styles.macModal__step}>
              This menu will list out the components on your Mac. One thing to
              note is if your Mac has an M1 chip, you may not have a separate
              graphics card as the M1 chip handles graphics as well.
            </p>
            <div className={styles.macModal__specs}>
              <p>Minimum System Requirements:</p>
              <p>Windows 10 64-bit / MacOS 10.15 Catalina</p>
              <p>Intel i5 / Ryzen 7000 Series CPU</p>
              <p>Nvidia GTX 1060 6GB / Radeon 560</p>
              <p>16GB DDR4 RAM</p>
            </div>
            <p className={styles.macModal__step}>
              If you need more specific hardware specs, click on "System
              Report..." button.
            </p>
          </>
        )}
      </div>

      {macAboutMenu && <AboutThisMac />}
    </div>
  );
};

export default MacModal;
