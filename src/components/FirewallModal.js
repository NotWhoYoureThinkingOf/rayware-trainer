import React, { useState, useEffect } from "react";
import styles from "../styles/FirewallModal.module.css";
import Image from "next/image";
import { FirewallWindow } from "./FirewallWindow";
import { Close, KeyboardArrowDown, Search } from "@material-ui/icons";
import {
  grabFirewallWindow,
  releaseFirewallWindow,
  grabFirewallStep1,
  grabFirewallStep2,
  grabFirewallStep3,
  grabFirewallStep4,
  releaseFirewallStep1,
  releaseFirewallStep2,
  releaseFirewallStep3,
  releaseFirewallStep4,
  selectFirewallWindow,
  selectFirewallStep1,
  selectFirewallStep2,
  selectFirewallStep3,
  selectFirewallStep4,
} from "../features/firewallWindowSlice";
import { useDispatch, useSelector } from "react-redux";

const FirewallModal = () => {
  const [input, setInput] = useState("");
  const step1 = useSelector(selectFirewallStep1);
  const step2 = useSelector(selectFirewallStep2);
  const step3 = useSelector(selectFirewallStep3);
  const [FWWindow, setFWWindow] = useState(false);
  const [controlPanel, setControlPanel] = useState(false);
  const firewallIsOpen = useSelector(selectFirewallWindow);
  const dispatch = useDispatch();

  const openFW = () => {
    setInput("");
    setFWWindow(true);
  };

  const FWStep2 = () => {
    dispatch(releaseFirewallStep1());
    dispatch(grabFirewallStep2());
    setControlPanel(true);
    openFW();
    dispatch(grabFirewallWindow());
  };

  const closeFW = () => {
    dispatch(grabFirewallStep1());
    dispatch(releaseFirewallStep2());
    dispatch(releaseFirewallStep3());
    dispatch(releaseFirewallStep4());
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
          <div className={styles.firewallModal__step3}>
            <p>
              This box shows an alphabetical list of all the programs that the
              firewall is interacting with, either to allow or deny access to
              them.
            </p>
            <p>
              Scroll down to "rayware". If it is on the list but some boxes for
              it aren't checked, click on the "Change settings" button above and
              then check off the boxes to the left of "rayware" as well as the
              boxes in the Private and Public columns. Depending on your setup,
              there may be 2 "rayware" listed. Check the boxes for both.
            </p>
            <p>
              If it's not listed, select the "Change settings" button at the
              top, then the "Allow another app..." button below.
            </p>
          </div>
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
