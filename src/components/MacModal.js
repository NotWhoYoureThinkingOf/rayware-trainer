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

  const openAboutMenu = () => {
    setMenuOpen(false);
    setAboutOpen(true);
    dispatch(grabMacAbout());
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
      {macAboutMenu && <AboutThisMac />}
    </div>
  );
};

export default MacModal;
