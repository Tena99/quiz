import { useState } from "react";
import styles from "./Questions.module.css";
import questions from "../data/questions.json";

export default function Questions({
  onGoToPreviousPage,
  onGoToNextPage,
  onCorrectAnswer,
}) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const currentQuestion = questions[questionIndex];

  function nextQuestion() {
    if (currentAnswer) {
      setQuestionIndex(questionIndex + 1);
      setCurrentAnswer(null);
      if (currentAnswer === questions[questionIndex].correctAnswer) {
        onCorrectAnswer();
      }
    }
  }

  function prevQuestion() {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
      setCurrentAnswer(null);
    }
  }

  function chooseAnswer(answerId) {
    if (currentAnswer === null) {
      setCurrentAnswer(answerId);
    }
  }

  return (
    <article className={styles["questions_container"]}>
      <progress
        value={`${questionIndex * 0.25}`}
        className={styles["progressBar"]}
      >
        <h4>You have answered {questionIndex + 1} from 5 questions</h4>
      </progress>

      <h3> {currentQuestion.question}</h3>

      <div className={styles["answers_container"]}>
        <ul className={styles.qlist}>
          <li
            disabled={currentAnswer !== null}
            className={`${styles.a} ${
              currentAnswer === `${currentQuestion.answers[0]}`
                ? currentAnswer === questions[questionIndex].correctAnswer
                  ? styles["correct_answer"]
                  : styles["wrong_answer"]
                : undefined
            }`}
            onClick={() => chooseAnswer(currentQuestion.answers[0])}
          >
            <strong>A: </strong> {currentQuestion.answers[0]}
          </li>
          <li
            disabled={currentAnswer !== null}
            className={`${styles.b} ${
              currentAnswer === `${currentQuestion.answers[1]}`
                ? currentAnswer === questions[questionIndex].correctAnswer
                  ? styles["correct_answer"]
                  : styles["wrong_answer"]
                : undefined
            }`}
            onClick={() => chooseAnswer(currentQuestion.answers[1])}
          >
            <strong>B: </strong> {currentQuestion.answers[1]}
          </li>
          <li
            disabled={currentAnswer !== null}
            className={`${styles.c} ${
              currentAnswer === `${currentQuestion.answers[2]}`
                ? currentAnswer === questions[questionIndex].correctAnswer
                  ? styles["correct_answer"]
                  : styles["wrong_answer"]
                : undefined
            }`}
            onClick={() => chooseAnswer(currentQuestion.answers[2])}
          >
            <strong>C: </strong> {currentQuestion.answers[2]}
          </li>
          <li
            disabled={currentAnswer !== null}
            className={`${styles.d} ${
              currentAnswer === `${currentQuestion.answers[3]}`
                ? currentAnswer === questions[questionIndex].correctAnswer
                  ? styles["correct_answer"]
                  : styles["wrong_answer"]
                : undefined
            }`}
            onClick={() => chooseAnswer(currentQuestion.answers[3])}
          >
            <strong>D: </strong> {currentQuestion.answers[3]}
          </li>
        </ul>
      </div>

      <div className={styles["questions_buttons"]}>
        <button
          onClick={
            currentQuestion === questions[0] ? onGoToPreviousPage : prevQuestion
          }
        >
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <button
          onClick={
            currentQuestion === questions[4]
              ? () => {
                  if (
                    currentAnswer === questions[questionIndex].correctAnswer
                  ) {
                    onCorrectAnswer();
                  }
                  onGoToNextPage();
                }
              : nextQuestion
          }
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </article>
  );
}
