import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "../styles/CheckSpecs.module.css";
import { useState } from "react";
import { Close, Search } from "@material-ui/icons";
import gsap, { Power4 } from "gsap";

const CheckSpecs = () => {
  const [windowsModal, setWindowsModal] = useState(false);
  const [step1, setStep1] = useState(true)
  const [step2, setStep2] = useState(false)
  const [macModal, setMacModal] = useState(false);
  const [dxDiagWindow, setDxDiagWindow] = useState(false);
  const [activeTab, setActiveTab] = useState("system");
  const [input, setInput] = useState("");
  const windowsMockup = useRef(null);
  const tl = gsap.timeline();

  useEffect(() => {
    if (windowsModal) {
      tl.to(windowsMockup.current, 0.9, {
        y: "-100%",
        opacity: 1,
        ease: Power4.easeInOut,
      });
      // gsap.from(windowsModal.current, {
      //   y: "100%",
      //   duration: 0.9,
      //   ease: Power4.easeInOut,
      //   opacity: 0,
      // });
    } else {
      tl.to(windowsMockup.current, 0.9, {
        y: "0%",
        opacity: 0,
        ease: Power4.easeInOut,
      });
    }
  }, [windowsModal]);

  const openDxdiag = () => {
    setInput("");
    setDxDiagWindow(true);
  };

  const windowsStep2 = () => {
    setStep1(false)
    setStep2(true)
    openDxdiag()
  }

  const closeDxdiag = () => {
    setStep1(true)
    setStep2(false)
    setDxDiagWindow(false)
  }

  const closeWindowsModal = () => {
    setStep1(true)
    setStep2(false)
    setDxDiagWindow(false)
    setWindowsModal(false)
  }

  console.log("windowsModal", windowsModal);

  return (
    <div className={styles.checkSpecs}>
      <h2>Checking to see if your computer can run RayWare:</h2>
      <div className={styles.checkSpecs__minimum}>
        <h3>RayWare's minimum system requirements</h3>
        <div className={styles.checkSpecs__requirements}>
          <p>Windows 10 64-bit / MacOS 10.15 Catalina</p>
          <p>Intel i5 / Ryzen 7000 Series CPU</p>
          <p>Nvidia GTX 1060 6GB / Radeon 560</p>
          <p>16GB DDR4 RAM</p>
        </div>
        <div className={styles.checkSpecs__warning}>
          <h4>
            These requirements are very important to meet. Manipulating 3D
            objects, such as STL files, is very resource intensive for a
            computer. If your computer does not meet the specifications, it's
            very likely it could experience sluggishness, RayWare could crash,
            or RayWare might not even open. This could also lead to issues with
            RayWare's performance. For example, the STL may not be sliced
            correctly leading to inaccurate layers and/or print times.
          </h4>
        </div>
      </div>
      <div className={styles.checkSpecs__systems}>
        <h3 className={styles.checkSpecs__systemsTitle}>
          Click on the operating system you have to learn about checking your
          hardware:
        </h3>
        <div className={styles.checkSpecs__OS}>
          <div
            className={styles.checkSpecs__windows}
            onClick={() => setWindowsModal(true)}
          > 
            <div className={styles.checkSpecs__windowsImage}>
            <Image src="/windows-icon.jpg" layout="fill" objectFit="contain"  />
            </div>
            
            {/* <img src="/windows-icon.JPG" alt="" /> */}
            <h3>Windows</h3>
          </div>
          <div
            className={styles.checkSpecs__mac}
            onClick={() => setMacModal(true)}
          >
            <div className={styles.checkSpecs__macImage}>
            <Image src="/apple-icon.jpg" layout="fill" objectFit="contain" />
            </div>
            
            <h3>Mac</h3>
          </div>
        </div>
        <div ref={windowsMockup} className={styles.checkSpecs__windowsModal}>
          <div className={styles.checkSpecs__windowsModalContainer}>
            <div
              className={styles.checkSpecs__windowsModalClose}
              onClick={closeWindowsModal}
            >
              <p>close</p>
            </div>
            <div className={styles.checkSpecs__windowsSteps}>
              {step1 && (<p>Type "dxdiag" in search bar below. This will locate the DirectX Diagnostic Tool. Click "dxdiag" to open it up.</p>)}
              {step2 && (
                <>
              <p>The DirectX Diagnostic Tool lists out the hardware you have on your computer.</p>
              <p style={{margin: '1rem 0'}}>The System tab will list your Operating System, Processor, and Memory. The Display 1 (and sometimes Display 2) tab will list your Graphics Card under Name or Chip Type</p>
              <div className={styles.checkSpecs__windowsSpecs}>
                <p>Minimum System Requirements:</p>
                <p>Windows 10 64-bit / MacOS 10.15 Catalina</p>
                <p>Intel i5 / Ryzen 7000 Series CPU</p>
                <p>Nvidia GTX 1060 6GB / Radeon 560</p>
                <p>16GB DDR4 RAM</p>
              </div>
              
              </>)}
            </div>
            <div className={styles.checkSpecs__windowsTaskbar}>
              <div className={styles.checkSpecs__windowsIcon}>
                <Image src="/windows-icon.png" width={20.875} height={22.475} />
              </div>
              <div className={styles.checkSpecs__windowsSearch}>
                <Search
                  style={{
                    position: "absolute",
                    left: "1rem",
                    color: "#ccc",
                  }}
                />
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type here to search"
                />
                {input === "dxdiag" && (
                  <div className={styles.checkSpecs__searchDxdiag}>
                    <h4>Best Match</h4>
                    <div
                      className={styles.checkSpecs__searchDxContainer}
                      onClick={windowsStep2}
                    >
                      <div className={styles.checkSpecs__searchDxIcon}>
                        <Image src="/dxdiag-icon.png" width={40} height={40} />
                      </div>
                      <div className={styles.checkSpecs__searchDxText}>
                        <h4>dxdiag</h4>
                        <p>Run Command</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className={styles.checkSpecs__windowsPrograms}></div>
            </div>
            {dxDiagWindow && (
              <div className={styles.checkSpecs__dxDiagWindow}>
                <div className={styles.checkSpecs__dxDiagHeader}>
                  <Image src="/dxdiag-icon.png" width={20} height={20} />
                  <p>DirectX Diagnostic Tool</p>
                  <Close
                    onClick={closeDxdiag}
                    style={{ cursor: "pointer", fontSize: "1.2rem" }}
                  />
                </div>
                <div className={styles.checkSpecs__dxDiagBody}>
                  <div className={styles.checkSpecs__dxDiagTabs}>
                    <p
                      onClick={() => setActiveTab("system")}
                      className={
                        activeTab === "system"
                          ? styles.checkSpecs__dxDiagActive
                          : "false"
                      }
                    >
                      System
                    </p>
                    <p
                      onClick={() => setActiveTab("display")}
                      className={
                        activeTab === "display"
                          ? styles.checkSpecs__dxDiagActive
                          : "false"
                      }
                    >
                      Display 1
                    </p>
                    <p>Display 2</p>
                    <p>Sound 1</p>
                    <p>Sound 2</p>
                    <p>Sound 3</p>
                    <p>Sound 4</p>
                    <p>Sound 5</p>
                    <p>Input</p>
                  </div>
                  {activeTab === "system" && (
                    <div className={styles.checkSpecs__dxDiagInfo}>
                      <p>
                        This tool reports detailed information about the DirectX
                        components and drivers installed on your system.
                      </p>
                      <p>
                        If you know what area is causing the problem, click the
                        appropriate tab above. Otherwise, you can use the "Next
                        Page" button below to visit each page in sequence.
                      </p>
                      <div className={styles.checkSpecs__dxDiagSystem}>
                        <p className={styles.checkSpecs__dxDiagSystemTitle}>
                          System Information
                        </p>
                        <div className={styles.checkSpecs__dxDiagSpecs}>
                          <div className={styles.checkSpecs__dxDiagLeft}>
                            <ul>
                              <li>Current Date/Time:</li>
                              <li>Computer Name:</li>
                              <li>Operating System:</li>
                              <li>Language:</li>
                              <li>System Manufacturer:</li>
                              <li>System Model:</li>
                              <li>BIOS:</li>
                              <li>Processor:</li>
                              <li>Memory:</li>
                              <li>Page File:</li>
                              <li>DirectX Version:</li>
                            </ul>
                          </div>
                          <div className={styles.checkSpecs__dxDiagRight}>
                            <ul>
                              <li>Monday, June 21, 2021, 12:00:00 PM</li>
                              <li>DEKTOP-A1B23CD</li>
                              <li>
                                Windows 10 Home 64-bit (10.0, Build 19041)
                              </li>
                              <li>English (Regional Setting: English)</li>
                              <li>Dell Technology Co., Ltd.</li>
                              <li>Z370P D3</li>
                              <li>F3</li>
                              <li>
                                Intel(R) Core(TM) i5-8600K CPU @ 3.60 GHz (6
                                CPUs), ~3.6GHz
                              </li>
                              <li>32768MB RAM</li>
                              <li>18414MB used, 24031MB available</li>
                              <li>DirectX 12</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeTab === 'display' && (
                    <div className={styles.checkSpecs__dxDisplayInfo}>
                      <div className={styles.checkSpecs__dxDisplayTop}>
                      <div className={styles.checkSpecs__dxDisplayDevice}>
                      <div className={styles.checkSpecs__dxDisplayLeft}>
                        <p className={styles.checkSpecs__dxDeviceTitle}> Device</p>
                        <ul>
                          <li>Name:</li>
                          <li>Manufacturer:</li>
                          <li>Chip Type:</li>
                          <li>DAC Type:</li>
                          <li>Device Type:</li>
                          <li>Approx. Total Memory:</li>
                          <li>Display Memory (VRAM):</li>
                          <li>Shared Memory:</li>
                        </ul>
                      </div>
                      <div className={styles.checkSpecs__dxDisplayRight}>
                      <ul>
                          <li>NVIDIA GeForce GTX 1060</li>
                          <li>NVIDIA</li>
                          <li>NVIDIA GeForce GTX 1060</li>
                          <li>Integrated RAMDAC</li>
                          <li>Full Display Device</li>
                          <li>22339 MB</li>
                          <li>5980 MB</li>
                          <li>16359 MB</li>
                        </ul>
                      </div>
                      </div>
                      <div className={styles.checkSpecs__dxDisplayDrivers}>
                        <p className={styles.checkSpecs__dxDriverTitle}>Drivers</p>
                        <p className={styles.checkSpecs__dxDriverInfo}>Driver Information</p>
                      </div>
                      </div>
                      <div className={styles.checkSpecs__dxDisplayCenter}>
                        <p className={styles.checkSpecs__dxFeaturesTitle}>
                          DirectX Features
                        </p>
                        <p>DirectX Features Information</p>
                      </div>
                      <div className={styles.checkSpecs__dxDisplayBottom}>
                        <p className={styles.checkSpecs__dxNotesTitle}>Notes</p>
                        <p className={styles.checkSpecs__dxNote}>No problems found.</p>
                      </div>
                    </div>
                  )}
                  <div className={styles.checkSpecs__dxDiagButtons}>
                    <button onClick={closeDxdiag}>Exit</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {macModal && <div className={styles.checkSpecs__macModal}></div>}
      </div>
    </div>
  );
};

export default CheckSpecs;
