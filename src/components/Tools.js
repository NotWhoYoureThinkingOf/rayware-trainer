import React from "react";
import styles from "../styles/Tools.module.css";
import Image from "next/image";
import { grabAddModel, selectAddModel } from "../features/addModelSlice";
import { grab, release, selectSizingMenu } from "../features/sizingSlice";
import {
  grabPremium,
  releasePremium,
  selectPremiumMenu,
} from "../features/premiumSlice";
import {
  grabLayout,
  releaseLayout,
  selectLayoutMenu,
} from "../features/layoutSlice";
import {
  grabSupportsMenu,
  releaseSupportsMenu,
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
    dispatch(release());
    dispatch(releaseLayout());
    dispatch(releasePremium());
    dispatch(releaseSupportsMenu());
  };

  const openSizingMenu = () => {
    if (!sizingMenuOpen) {
      dispatch(grab());
    } else {
      dispatch(release());
    }
    dispatch(releaseLayout());
    dispatch(releasePremium());
    dispatch(releaseSupportsMenu());
  };

  const openPremiumMenu = () => {
    if (!premiumMenuOpen) {
      dispatch(grabPremium());
    } else {
      dispatch(releasePremium());
    }
    dispatch(release());
    dispatch(releaseLayout());
    dispatch(releaseSupportsMenu());
  };

  const openLayoutMenu = () => {
    if (!layoutMenuOpen) {
      dispatch(grabLayout());
    } else {
      dispatch(releaseLayout());
    }
    dispatch(release());
    dispatch(releasePremium());
    dispatch(releaseSupportsMenu());
  };

  const openSupportsMenu = () => {
    if (!supportsMenuOpen) {
      dispatch(grabSupportsMenu());
    } else {
      dispatch(releaseSupportsMenu());
    }
    dispatch(release());
    dispatch(releasePremium());
    dispatch(releaseLayout());
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
