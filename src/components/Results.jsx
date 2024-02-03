import styles from "./Results.module.css";

export default function Results({ goToPreviousPage, numCorrectAnswers }) {
  return (
    <div className={styles.results}>
      <div className="switcher">
        <a className={styles.prevbutton} onClick={goToPreviousPage}>
          <i className="fa-solid fa-angle-left"></i>
        </a>
      </div>

      <p className={styles.text}>Number of correct answers: </p>
      <p className={styles.count}>{numCorrectAnswers}</p>
    </div>
  );
}
