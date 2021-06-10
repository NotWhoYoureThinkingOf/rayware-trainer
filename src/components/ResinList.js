import React, { useEffect } from "react";
import styles from "../styles/ResinList.module.css";
import {
  grabPrintJobResin,
  selectPrintJobResin,
} from "../features/printJobResinSlice";
import { useDispatch, useSelector } from "react-redux";

const ResinList = ({ resins }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.resinList}>
      {resins?.map((resin, i) => (
        <p
          key={i}
          className={styles.resinList__resin}
          onClick={() => dispatch(grabPrintJobResin(resin))}
        >
          {resin}
        </p>
      ))}
    </div>
  );
};

export default ResinList;
