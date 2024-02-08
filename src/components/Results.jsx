import styles from "./Results.module.css";

export default function Results({
  // goToPreviousPage,
  numCorrectAnswers,
  resetCounter,
}) {
  const handleResetCounter = () => {
    resetCounter();
  };
  return (
    <div className={styles.results}>
      <p className={styles.text}>Zahl der richtigen Antworten: </p>
      <p className={styles.count}>{numCorrectAnswers}</p>
      <div className="switcher">
        <a className={styles.prevbutton} onClick={handleResetCounter}>
          <i className="fa-solid fa-angle-right reset-big" />
          <span className="reset-big"> Neustart </span>
          <i className="fa-solid fa-rotate-left reset-small"></i>
          <i className="fa-solid fa-angle-left reset-big" />
        </a>
      </div>
    </div>
  );
}
