import { useState } from "react";
import styles from "./Questions.module.css";
import questions from "../data/questions.json";

const gridStyles = ["a", "b", "c", "d"];

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
      ></progress>

      <h3> {currentQuestion.question}</h3>

      <div className={styles["answers_container"]}>
        <ul className={styles.qlist}>
          {currentQuestion.answers.map((answer, index) => {
            return (
              <li
                disabled={currentAnswer !== null}
                className={`${styles[gridStyles[index]]} ${
                  currentAnswer === `${answer}`
                    ? currentAnswer === questions[questionIndex].correctAnswer
                      ? styles["correct_answer"]
                      : styles["wrong_answer"]
                    : undefined
                }`}
                onClick={() => chooseAnswer(answer)}
              >
                <strong>{gridStyles[index].toLocaleUpperCase()}:</strong>
                {answer}
              </li>
            );
          })}
        </ul>
      </div>

      <div className={styles["questions_buttons"]}>
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
          <i className="fa-solid fa-forward" />
        </button>
      </div>
    </article>
  );
}
