import React from "react";
import styles from "./WelcomePage.module.css";
import welcomeImage from "../assets/welcome.jpg";

function WelcomePage({ handleSubmit }) {
  return (
    <div className={styles.container}>
      <h2>Willkommen zur Quiz-App!</h2>
      <p>
        Hier können Sie Ihre Programmierkenntnisse überprüfen. Klicken Sie
        einfach auf die Schaltfläche unten, um zu beginnen!
      </p>

      <img
        src={welcomeImage}
        className={styles.welcomeImage}
        alt="welcome image"
      />
      <button className={styles.welcomebutton} onClick={handleSubmit}>
        START
      </button>
    </div>
  );
}

export default WelcomePage;
