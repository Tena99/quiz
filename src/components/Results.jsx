import styles from "./Results.module.css";

export default function Results({ goToPreviousPage, numCorrectAnswers }) {
  return (
    <div className={styles.results}>
      <p className={styles.text}>Number of correct answers: </p>
      <p className={styles.count}>{numCorrectAnswers}</p>{" "}
      <div className="switcher">
        <a className={styles.prevbutton} onClick={goToPreviousPage}>
          <i className="fa-solid fa-angle-left"></i>
        </a>
      </div>
    </div>
  );
}
