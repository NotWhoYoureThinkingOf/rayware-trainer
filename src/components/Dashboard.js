import React, { useState } from "react";
import styles from "../styles/Dashboard.module.css";
import { releaseDashboardMenu } from "../features/dashboardSlice";
import { grabUser, releaseUser, selectUser } from "../features/userSlice";
import {
  releaseLoginTraining,
  selectLoginTraining,
} from "../features/loginTrainingSlice";
import { useDispatch, useSelector } from "react-redux";
import { Close } from "@material-ui/icons";

const Dashboard = () => {
  const dispatch = useDispatch();
  const userLoggedIn = useSelector(selectUser);
  const loginTrainingOpen = useSelector(selectLoginTraining);
  const [userName, setUserName] = useState("");

  const closeDashboardMenu = () => {
    dispatch(releaseDashboardMenu());
  };

  const logUserIn = () => {
    dispatch(grabUser({ user: userName }));
    closeDashboardMenu();
    dispatch(releaseLoginTraining());
  };

  const logUserOut = () => {
    dispatch(releaseUser());
  };

  const closeLoginTraining = () => {
    dispatch(releaseLoginTraining());
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
          <h5>{userLoggedIn ? "Manage Account" : "Offline Mode"}</h5>
        </div>
        <div
          className={
            userLoggedIn ? styles.dashboard__logout : styles.dashboard__login
          }
          onClick={userLoggedIn ? logUserOut : logUserIn}
        >
          <h5>{userLoggedIn ? "Log Out" : "Log In"}</h5>
        </div>
        {/* content */}
        {userLoggedIn ? (
          <>
            <h3 className={styles.dashboard__user}>{userLoggedIn.user}</h3>
            <p>You are now logged in, all the features are unlocked</p>
            <p>
              Subscription level: <span>Pro</span>
            </p>
          </>
        ) : (
          <>
            <h3 className={styles.dashboard__userInputs}>
              Log in to your SprintRay Account
            </h3>
            <p className={styles.dashboard__info}>
              You can use your SprintRay account to access Dashboard and paid
              software services such as 3rd party resin support and Advanced
              scan Repair.
            </p>
            <div className={styles.dashboard__inputs}>
              <input
                type="email"
                placeholder="Username"
                required
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <input type="password" placeholder="Password" />
            </div>

            <div className={styles.dashboard__loginOptions}>
              <a target="_blank" href="http://dashboard.sprintray.com">
                <h4>Create Account</h4>
              </a>
              <a
                target="_blank"
                href="https://account.sprintray.com/reset-password"
              >
                <h4>Forgot Password</h4>
              </a>
            </div>
          </>
        )}
        {loginTrainingOpen && (
          <div className={styles.dashboard__loginTraining}>
            <p>
              From here you can log in to your account, go to the "Create
              Account" page on the Dashboard website, access the "Forgot
              Password" page, or set RayWare to Offline Mode.
            </p>
            <p>
              After you've filled in your username and password, click "Log In"
              to have access to your Dashboard features and RayWare.
            </p>
            <div
              className={styles.dashboard__loginTrainingClose}
              onClick={closeLoginTraining}
            >
              <Close style={{ fontSize: "1.5rem" }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
