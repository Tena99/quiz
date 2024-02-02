import styles from "./WelcomePage.module.css";
import welcomeImage from "../assets/welcome.jpg";

export default function WelcomePage() {
  return (
    <div className={styles.container}>
      {/* <span className={styles.greetings}>Welcome!</span> */}

      <img
        src={welcomeImage}
        className={styles.welcomeImage}
        alt="welcome image"
      />

      <button className={styles.welcomebutton}>START</button>
    </div>
  );
}
