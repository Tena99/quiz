import styles from "./WelcomePage.module.css";

export default function WelcomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.greetings}>Welcome!</h1>
    </div>
  );
}
