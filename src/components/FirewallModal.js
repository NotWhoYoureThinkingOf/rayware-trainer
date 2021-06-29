import React, { useState, useEffect } from "react";
import styles from "../styles/FirewallModal.module.css";
import Image from "next/image";
import { FirewallWindow } from "./FirewallWindow";
import { Close, KeyboardArrowDown, Search } from "@material-ui/icons";
import {
  grabFirewallWindow,
  selectFirewallWindow,
} from "../features/firewallWindowSlice";
import { useDispatch, useSelector } from "react-redux";

const FirewallModal = () => {
  const [input, setInput] = useState("");
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [FWWindow, setFWWindow] = useState(false);
  const [controlPanel, setControlPanel] = useState(false);
  const firewallIsOpen = useSelector(selectFirewallWindow);
  const dispatch = useDispatch();

  const openFW = () => {
    setInput("");
    setFWWindow(true);
  };

  const FWStep2 = () => {
    setStep1(false);
    setStep2(true);
    setControlPanel(true);
    openFW();
    dispatch(grabFirewallWindow());
  };

  const closeFW = () => {
    setStep1(true);
    setStep2(false);
    setStep3(false);
    setFWWindow(false);
  };

  useEffect(() => {
    if (!firewallIsOpen) {
      closeFW();
    }
  }, [firewallIsOpen]);

  return (
    <div className={styles.firewallModal}>
      <div className={styles.firewallModal__windowsSteps}>
        {step1 && (
          <p>
            Type "firewall" in search bar below. This will locate the Windows
            Defender Firewall. Click "Windows Defender Firewall" to open it up.
          </p>
        )}
        {step2 && (
          <p>
            This window gives a few menues to configure the firewall. Select
            "Allow an app or feature through Windows Defender Firewall" on the
            left hand side.
          </p>
        )}
        {step3 && (
          <p>
            This box shows an alphabetical list of all the programs that the
            firewall is interacting with, either to allow or deny access to
            them. Scroll down to RayWare and check all the boxes to allow it
            access through the firewall. If it's not listed, select the "Change
            settings" button at the top, then the "Allow another app..." button
            below.
          </p>
        )}
      </div>

      {FWWindow && (
        <div className={styles.firewallModal__windowsFirewall}>
          <FirewallWindow />
        </div>
      )}

      <div className={styles.firewallModal__windowsTaskbar}>
        <div className={styles.firewallModal__windowsIcon}>
          <Image src="/windows-icon.png" width={20.875} height={22.475} />
        </div>
        <div className={styles.firewallModal__windowsSearch}>
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
          {input === "firewall" && (
            <div className={styles.firewallModal__searchFW}>
              <h4>Best Match</h4>
              <div
                className={styles.firewallModal__searchFWContainer}
                onClick={FWStep2}
              >
                <div className={styles.firewallModal__searchFWIcon}>
                  <Image src="/firewall.png" width={40} height={40} />
                </div>
                <div className={styles.firewallModal__searchFWText}>
                  <h4>Windows Defender Firewall</h4>
                  <p>Run Command</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={styles.firewallModal__windowsPrograms}></div>
      </div>
    </div>
  );
};

export default FirewallModal;
