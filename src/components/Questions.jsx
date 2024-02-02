import styles from "./Questions.module.css";
import { useState } from "react";
import questions from "../data/questions.json";

export default function Questions() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const currentQuestion = questions[questionIndex];

  function nextQuestion() {
    if (questions.length - 1 > questionIndex)
      setQuestionIndex(questionIndex + 1);
  }

  function prevQuestion() {
    if (questionIndex > 0) setQuestionIndex(questionIndex - 1);
  }

  return (
    <article className={styles["questions_container"]}>
      <div className={styles["progressBar"]}>
        <h4>You have answered {questionIndex + 1} from 5 questions</h4>
      </div>

      <h3> {currentQuestion.question}</h3>

      <div className={styles["answers_container"]}>
        <ul>
          <li>
            <strong>A:</strong> {currentQuestion.a1}
          </li>
          <li>
            <strong>B:</strong> {currentQuestion.a2}
          </li>
        </ul>

        <ul>
          <li>
            <strong>C:</strong> {currentQuestion.a3}
          </li>
          <li>
            <strong>D:</strong> {currentQuestion.a4}
          </li>
        </ul>
      </div>

      <div className={styles["questions_buttons"]}>
        <button onClick={prevQuestion}>Previous question</button>
        <button onClick={nextQuestion}>Next question</button>
      </div>
    </article>
  );
}
