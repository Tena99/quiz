import React from "react";
import styles from "./WelcomePage.module.css";
import welcomeImage from "../assets/welcome.jpg";

function WelcomePage({ goToNextPage }) {
  return (
    <div>
      <div className={styles.container}>
        <h2>Welcome to the Quiz App!</h2>
        <p>
          Here you can check your knowledges in programming. Just click on the
          button below to start!
        </p>

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
