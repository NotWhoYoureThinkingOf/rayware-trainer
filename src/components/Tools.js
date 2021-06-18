import React from "react";
import styles from "../styles/Tools.module.css";
import Image from "next/image";
import { grabAddModel, selectAddModel } from "../features/addModelSlice";
import { grab, selectSizingMenu } from "../features/sizingSlice";
import { grabPremium, selectPremiumMenu } from "../features/premiumSlice";
import { grabLayout, selectLayoutMenu } from "../features/layoutSlice";
import {
  grabSupportsMenu,
  selectSupportsMenu,
} from "../features/supportsMenuSlice";
import { selectImportTraining } from "../features/importTrainingSlice";
import { useDispatch, useSelector } from "react-redux";
import Sizing from "./Sizing";
import Premium from "./Premium";
import Layout from "./Layout";
import SupportsMenu from "./SupportsMenu";
import ImportTraining from "./ImportTraining";

const Tools = () => {
  const dispatch = useDispatch();
  const addModelOpen = useSelector(selectAddModel);
  const sizingMenuOpen = useSelector(selectSizingMenu);
  const premiumMenuOpen = useSelector(selectPremiumMenu);
  const layoutMenuOpen = useSelector(selectLayoutMenu);
  const supportsMenuOpen = useSelector(selectSupportsMenu);
  const importTrainingOpen = useSelector(selectImportTraining);

  const openAddModel = () => {
    dispatch(grabAddModel());
  };

  const openSizingMenu = () => {
    dispatch(grab());
  };

  const openPremiumMenu = () => {
    dispatch(grabPremium());
  };

  const openLayoutMenu = () => {
    dispatch(grabLayout());
  };

  const openSupportsMenu = () => {
    dispatch(grabSupportsMenu());
  };

  // console.log("add model window", addModelOpen);

  return (
    <div className={styles.tools}>
      <div className={styles.tools__tool} onClick={openAddModel}>
        <Image src="/add-icon.png" height={55} width={55} alt="add icon" />
      </div>
      {importTrainingOpen && <ImportTraining />}
      <div className={styles.tools__tool} onClick={openSizingMenu}>
        <Image src="/sizing-icon.png" height={55} width={55} alt="add icon" />
      </div>
      <div className={styles.tools__tool} onClick={openPremiumMenu}>
        <Image src="/tools-icon.png" height={55} width={55} alt="tools icon" />
      </div>
      <div className={styles.tools__tool} onClick={openLayoutMenu}>
        <Image
          src="/layout-icon.png"
          height={55}
          width={55}
          alt="layout icon"
        />
      </div>
      <div className={styles.tools__tool} onClick={openSupportsMenu}>
        <Image
          src="/supports-icon.png"
          height={55}
          width={55}
          alt="supports icon"
        />
      </div>

      {/* ---------------Menues------------------- */}

      {sizingMenuOpen && <Sizing />}
      {premiumMenuOpen && <Premium />}
      {layoutMenuOpen && <Layout />}
      {supportsMenuOpen && <SupportsMenu />}
    </div>
  );
};

export default Tools;
