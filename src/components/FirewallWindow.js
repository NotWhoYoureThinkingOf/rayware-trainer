import React from "react";
import styles from "../styles/FirewallWindow.module.css";
import Image from "next/image";
import { Close, KeyboardArrowDown, Search } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { releaseFirewallWindow } from "../features/firewallWindowSlice";
import { useState, useEffect } from "react";
import allApps from "../../firewall-app";

export const FirewallWindow = () => {
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [apps, setApps] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setApps(allApps);
  }, []);

  console.log("allApps", allApps);

  const closeFW = () => {
    dispatch(releaseFirewallWindow());
    setStep1(true);
    setStep2(false);
  };

  const goStep2 = () => {
    setStep1(false);
    setStep2(true);
  };

  return (
    <div className={styles.firewallModal__container}>
      <div className={styles.firewallModal__left}></div>
      <div className={styles.firewallModal__right}>
        <div className={styles.firewallModal__window}>
          <div className={styles.firewallModal__windowHeader}>
            <div className={styles.firewallModal__windowHeaderIcon}>
              <Image src="/firewall.png" width={17} height={17} />
            </div>
            <p>Windows Defender Firewall</p>
            <Close
              onClick={closeFW}
              style={{ fontSize: "1.2rem", cursor: "pointer" }}
            />
          </div>
          <div className={styles.firewallModal__windowBody}>
            <div className={styles.firewallModal__bodyTop}>
              <p>File</p>
              <p>Edit</p>
              <p>View</p>
              <p>Tools</p>
            </div>
            {/* start of first window */}
            {step1 && (
              <div className={styles.firewallModal__bodyBottom}>
                <div className={styles.firewallModal__bodyLeft}>
                  <div className={styles.firewallModal__bodyLeftTop}>
                    <span></span>
                    <p>Control Panel Home</p>
                  </div>
                  <div className={styles.firewallModal__bodyLeftCenter}>
                    <div
                      className={styles.firewallModal__bodyLeftOption}
                      style={{ cursor: "pointer" }}
                      onClick={goStep2}
                    >
                      <span></span>
                      <p>
                        Allow an app or feature through Windows Defender
                        Firewall
                      </p>
                    </div>

                    <div className={styles.firewallModal__bodyLeftOption}>
                      <div className={styles.firewallModal__bodyLeftIcon}>
                        <Image src="/shield-icon.png" width={17} height={17} />
                      </div>
                      <p>Change notification settings</p>
                    </div>
                    <div className={styles.firewallModal__bodyLeftOption}>
                      <div className={styles.firewallModal__bodyLeftIcon}>
                        <Image src="/shield-icon.png" width={17} height={17} />
                      </div>
                      <p>Turn Windows Defender Firewall on or off</p>
                    </div>
                    <div className={styles.firewallModal__bodyLeftOption}>
                      <div className={styles.firewallModal__bodyLeftIcon}>
                        <Image src="/shield-icon.png" width={17} height={17} />
                      </div>
                      <p>Restore defaults</p>
                    </div>
                    <div className={styles.firewallModal__bodyLeftOption}>
                      <div className={styles.firewallModal__bodyLeftIcon}>
                        <Image src="/shield-icon.png" width={17} height={17} />
                      </div>
                      <p>Advanced Settings</p>
                    </div>
                    <div className={styles.firewallModal__bodyLeftOption}>
                      <span></span>
                      <p>Troubleshoot my network</p>
                    </div>
                  </div>
                  <div className={styles.firewallModal__bodyLeftBottom}>
                    <div className={styles.firewallModal__bodyLeftBottomOption}>
                      <span></span>
                      <p>See also</p>
                    </div>
                    <div className={styles.firewallModal__bodyLeftBottomOption}>
                      <span></span>
                      <p>Security and Maintenance</p>
                    </div>
                    <div className={styles.firewallModal__bodyLeftBottomOption}>
                      <span></span>
                      <p>Network and Sharing Center</p>
                    </div>
                  </div>
                </div>
                <div className={styles.firewallModal__bodyRight}>
                  <h3>Help protect your PC with Windows Defender Firewall</h3>
                  <p>
                    Windows Defender Firewall can help prevent hackers or
                    malicious software from gaining access to your PC through
                    the internet or a network.
                  </p>
                  <div className={styles.firewallModal__private}>
                    <div className={styles.firewallModal__privateLeft}>
                      <div
                        className={styles.firewallModal__privateGradient}
                      ></div>
                      <div className={styles.firewallModal__privateIcon}>
                        <Image src="/shield-green.png" width={23} height={23} />
                      </div>
                      <h3>Private networks</h3>
                    </div>
                    <div className={styles.firewallModal__privateRight}>
                      <h3>Not connected</h3>
                      <div className={styles.firewallModal__privateRightIcon}>
                        <KeyboardArrowDown
                          style={{ color: "#ccc", fontSize: "1.2rem" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.firewallModal__public}>
                    <div className={styles.firewallModal__publicLeft}>
                      <div
                        className={styles.firewallModal__publicGradient}
                      ></div>
                      <div className={styles.firewallModal__publicIcon}>
                        <Image src="/shield-green.png" width={23} height={23} />
                      </div>
                      <h3>Guest or public networks</h3>
                    </div>
                    <div className={styles.firewallModal__publicRight}>
                      <h3>Connected</h3>
                      <div className={styles.firewallModal__publicRightIcon}>
                        <KeyboardArrowDown
                          style={{ color: "#ccc", fontSize: "1.2rem" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* end of first window */}
            {step2 && (
              <div className={styles.firewallWindow__step2}>
                <h3>
                  Allow apps to communicate through Windows Defender Firewall
                </h3>
                <p>
                  To add, change, or remove allowed apps and ports, click Change
                  settings.
                </p>
                <div className={styles.firewallWindow__step2Options}>
                  <p className={styles.firewallWindow__blue}>
                    What are the risks of allowing an app to communicate?
                  </p>
                  <div className={styles.firewallWindow__changeButton}>
                    <div className={styles.firewallWindow__changeIcon}>
                      <Image src="/shield-icon.png" width={17} height={17} />
                    </div>
                    <p>Change settings</p>
                  </div>
                </div>
                <div className={styles.firewallWindow__appsContainer}>
                  <p className={styles.firewallWindow__allowed}>
                    Allowed apps and features:
                  </p>
                  <div className={styles.firewallWindow__apps}>
                    <div className={styles.firewallWindow__appsHeader}>
                      <p>Name</p>
                      <p>Private</p>
                      <p>Public</p>
                    </div>
                    <div className={styles.firewallWindow__appsBody}>
                      {apps.map((app) => (
                        <div className={styles.firewallWindow__app}>
                          <input type="checkbox" />
                          <p>{app.name}</p>
                          <input type="checkbox" />
                          <input type="checkbox" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={styles.firewallWindow__appsButtons}>
                    <button>Details...</button>
                    <button>Remove</button>
                  </div>
                </div>
                <div className={styles.firewallWindow__button}>
                  <button>Allow another app...</button>
                </div>
                <div className={styles.firewallWindow__step2Buttons}>
                  <button>OK</button>
                  <button>Cancel</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
