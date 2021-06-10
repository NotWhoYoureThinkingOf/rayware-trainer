import React from "react";
import styles from "../styles/Dashboard.module.css";
import { releaseDashboardMenu } from "../features/dashboardSlice";
import { useDispatch } from "react-redux";
import { Close } from "@material-ui/icons";

const Dashboard = () => {
  const dispatch = useDispatch();

  const closeDashboardMenu = () => {
    dispatch(releaseDashboardMenu());
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboard__container}>
        {/* buttons */}
        <div className={styles.dashboard__title}>
          <h5>Account Settings</h5>
        </div>
        <div className={styles.dashboard__close} onClick={closeDashboardMenu}>
          <Close style={{ fontSize: "1.8rem" }} />
        </div>
        <div className={styles.dashboard__manage}>
          <h5>Manage Account</h5>
        </div>
        <div className={styles.dashboard__logout} onClick={closeDashboardMenu}>
          <h5>Log Out</h5>
        </div>
        {/* content */}
        <h3 className={styles.dashboard__user}>adam@sprintray.com</h3>
        <p>You are now logged in, all the features are unlocked</p>
        <p>
          Subscription level: <span>Pro</span>
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
