import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/Common.module.css";
import { Close, Search } from "@material-ui/icons";
import FirewallModal from "./FirewallModal";
import { releaseFirewallWindow } from "../features/firewallWindowSlice";
import gsap, { Power4 } from "gsap";
import { useDispatch } from "react-redux";

const Common = () => {
  const [firewallModal, setFirewallModal] = useState(false);
  const firewallMockup = useRef(null);
  const dispatch = useDispatch();
  const tl = gsap.timeline();

  useEffect(() => {
    if (firewallModal) {
      tl.to(firewallMockup.current, 0.9, {
        y: "-100%",
        opacity: 1,
        ease: Power4.easeInOut,
      });
    } else {
      tl.to(firewallMockup.current, 0.9, {
        y: "0%",
        opacity: 0,
        ease: Power4.easeInOut,
      });
    }
  }, [firewallModal]);

  const closeFirewallModal = () => {
    setFirewallModal(false);
    dispatch(releaseFirewallWindow());
  };

  return (
    <div className={styles.common}>
      <h2>Common Connection Fixes for Rayware</h2>
      <div className={styles.common__content}>
        <h3>
          Some of the factors that come into play when connectivity is involved:
        </h3>
        <div className={styles.common__factors}>
          <ul>
            <li>The internet provider</li>
            <li>The modem</li>
            <li>The router, hub, or switch</li>
            <li>Your office network (usually run by I.T.)</li>
            <li>The computer you're using</li>
            <li>Your operating system (Windows or MacOS)</li>
            <li>Other factors such as antivirus software or a firewall</li>
            <li>and more.</li>
          </ul>
          <p>
            Not all of these factors are under our control and may need to be
            resolved by either your service provider or your I.T. personnel,
            especially if there is a unique setup for your network or office.
          </p>
        </div>
        <h3 className={styles.common__firewallMessage}>
          A firewall monitors network traffic and decides whether to allow or
          block it based on security rules. On PC, Windows Defender Firewall
          performs this role.{" "}
        </h3>
        <div
          className={styles.common__firewall}
          onClick={() => setFirewallModal(true)}
        >
          <div className={styles.common__firewallImage}>
            <Image src="/firewall.png" layout="fill" objectFit="contain" />
          </div>
          <h3>Windows Defender Firewall</h3>
        </div>

        <div ref={firewallMockup} className={styles.common__windowsModal}>
          <div className={styles.common__windowsModalContainer}>
            <div
              className={styles.common__windowsModalClose}
              onClick={closeFirewallModal}
            >
              <p>close</p>
            </div>
            <FirewallModal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Common;
