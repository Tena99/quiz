import React from "react";
import styles from "./WelcomePage.module.css";
import welcomeImage from "../assets/welcome.jpg";

function WelcomePage({ goToNextPage }) {
  return (
    <div>
      <div className={styles.container}>
        <img
          src={welcomeImage}
          className={styles.welcomeImage}
          alt="welcome image"
        />
        <button className={styles.welcomebutton} onClick={goToNextPage}>
          START
        </button>
      </div>
    </div>
  );
}

export default WelcomePage;
