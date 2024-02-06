import styles from "./Questions.module.css";
import { useState } from "react";
import questions from "../data/questions.json";

export default function Questions({
  onGoToPreviousPage,
  onGoToNextPage,
  onCorrectAnswer,
}) {
  const [questionIndex, setQuestionIndex] = useState(0);
  // represents the answer the user selected. "a1", "a2", "a3", "a4" for valid answers, null means no selection
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
              currentAnswer === "a1"
                ? currentAnswer === questions[questionIndex].correctAnswer
                  ? styles["correct_answer"]
                  : styles["wrong_answer"]
                : undefined
            }`}
            onClick={() => chooseAnswer("a1")}
          >
            <strong>A:</strong> {currentQuestion.a1}
            <p>Test</p>
          </li>
          <li
            disabled={currentAnswer !== null}
            className={`${styles.b} ${
              currentAnswer === "a2"
                ? currentAnswer === questions[questionIndex].correctAnswer
                  ? styles["correct_answer"]
                  : styles["wrong_answer"]
                : undefined
            }`}
            onClick={() => chooseAnswer("a2")}
          >
            <strong>B:</strong> {currentQuestion.a2}
          </li>
          <li
            disabled={currentAnswer !== null}
            className={`${styles.c} ${
              currentAnswer === "a3"
                ? currentAnswer === questions[questionIndex].correctAnswer
                  ? styles["correct_answer"]
                  : styles["wrong_answer"]
                : undefined
            }`}
            onClick={() => chooseAnswer("a3")}
          >
            <strong>C:</strong> {currentQuestion.a3}
          </li>
          <li
            disabled={currentAnswer !== null}
            className={`${styles.d} ${
              currentAnswer === "a4"
                ? currentAnswer === questions[questionIndex].correctAnswer
                  ? styles["correct_answer"]
                  : styles["wrong_answer"]
                : undefined
            }`}
            onClick={() => chooseAnswer("a4")}
          >
            <strong>D:</strong> {currentQuestion.a4}
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
            currentQuestion === questions[4] ? onGoToNextPage : nextQuestion
          }
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </article>
  );
}
