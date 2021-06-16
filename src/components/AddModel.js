import React, { useState } from "react";
import styles from "../styles/AddModel.module.css";
import Image from "next/image";
import { releaseAddModel, selectAddModel } from "../features/addModelSlice";
import {
  grabModelImported,
  selectModelImported,
} from "../features/modelImportedSlice";
import {
  releaseImportTraining,
  selectImportTraining,
} from "../features/importTrainingSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  ChevronRight,
  Close,
  Computer,
  Search,
  Web,
  InsertPhoto,
} from "@material-ui/icons";

const AddModel = () => {
  const importTrainingOpen = useSelector(selectImportTraining);
  const [stlSelected, setStlSelected] = useState(false);
  const dispatch = useDispatch();

  const closeAddModel = () => {
    dispatch(releaseAddModel());
  };

  const importModel = () => {
    dispatch(releaseImportTraining());
    dispatch(grabModelImported());
    closeAddModel();
  };

  return (
    <div className={styles.addModel}>
      <div className={styles.addModel__container}>
        {importTrainingOpen && (
          <div className={styles.addModel__import}>
            You can select your STL file from here or from another folder in the
            directory on the
            <br />
            left hand side. Click on 'Test Upper 10.stl' to select it.
            <br />
            {""}
            <br />
            After you're selected the file, you can press the Open button at the
            bottom of the window to load the STL file.
            <br />
            {""}
            <br />
            In the desktop application of RayWare, you can also drag and drop
            STL files into the program.
          </div>
        )}
        <div className={styles.addModel__header}>
          <div className={styles.addModel__icon}>
            <Image src="/sprintray-icon.png" height={15} width={15} />
          </div>

          <p className={styles.addModel__windowTitle}>
            Select a model (not an actual file explorer)
          </p>
          <div className={styles.addModel__close} onClick={closeAddModel}>
            <Close style={{ fontSize: "1.2rem" }} />
          </div>
        </div>
        <div className={styles.addModel__addressSection}>
          <div className={styles.addModel__addressLeft}>
            <ChevronRight style={{ fontSize: "1rem" }} />
            <p>This PC</p>
            <ChevronRight style={{ fontSize: "1rem" }} />
            <p>Desktop</p>
          </div>
          <div className={styles.addModel__addressRight}>
            <Search style={{ fontSize: "1rem", margin: "0 .4rem 0 0.8rem" }} />
            <p>Search Desktop</p>
          </div>
        </div>
        <div className={styles.addModel__body}>
          <div className={styles.addModel__bodyLeft}>
            <div className={styles.addModel__bodyLeftPC}>
              <Computer style={{ fontSize: "1.2rem", margin: "0 .8rem" }} />
              <p>This PC</p>
            </div>
            <div className={styles.addModel__bodyLeftDesktop}>
              <div className={styles.addModel__bodyLeftDesktopIcon}>
                <Web
                  style={{ fontSize: "1.2rem", margin: "0rem .4rem 0 2rem" }}
                />
              </div>

              <p>Desktop</p>
            </div>
          </div>
          <div className={styles.addModel__bodyRight}>
            <div className={styles.addModel__bodyRightHeader}>
              <p className={styles.addModel__bodyRightName}>Name</p>
              <p className={styles.addModel__bodyRightDate}>Date Modified</p>
              <p className={styles.addModel__bodyRightType}>Type</p>
              <p className={styles.addModel__bodyRightSize}>Size</p>
            </div>
            <div
              className={`${styles.addModel__bodyRightContent} ${
                stlSelected && styles.addModel__stlSelected
              }`}
              onClick={() => setStlSelected(!stlSelected)}
            >
              <InsertPhoto />
              <p>Test Upper 10.stl</p>
            </div>
          </div>
        </div>
        <div className={styles.addModel__bottom}>
          <div className={styles.addModel__fileInfo}>
            <p>File name: </p>
            <input type="text" value="Test Upper 10.stl" />
            <div className={styles.addModel__fileTypes}>
              <p>STL, OBJ, and SPR files</p>
            </div>
          </div>
          <div className={styles.addModel__buttons}>
            <button className={styles.addModel__open} onClick={importModel}>
              Open
            </button>
            <button className={styles.addModel__cancel} onClick={closeAddModel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddModel;
