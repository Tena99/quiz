import styles from "./Questions.module.css";
import { useState } from "react";
import questions from "../data/questions.json";

export default function Questions({
  goToPreviousPage,
  goToNextPage,
  setNumCorrectAnswers,
}) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const currentQuestion = questions[questionIndex];

  function nextQuestion() {
    let container = document.querySelector(`.${styles["questions_container"]}`);
    let li = [...container.querySelectorAll("li")];

    li.map((item) => {
      item.classList.remove(styles["wrong_answer"]);
      item.classList.remove(styles["correct_answer"]);
    });

    if (questions.length - 1 > questionIndex);

    setQuestionIndex(questionIndex + 1);
  }

  function prevQuestion() {
    if (questionIndex > 0) setQuestionIndex(questionIndex - 1);
  }

  function chooseAnwer(answerNum, element) {
    if (questions[questionIndex].correctAnswer == answerNum) {
      element.classList.add(styles["correct_answer"]);
      setNumCorrectAnswers((prevNum) => prevNum + 1);
    } else {
      element.classList.add(styles["wrong_answer"]);
    }
  }

  return (
    <article className={styles["questions_container"]}>
      <div className={styles["progressBar"]}>
        <h4>You have answered {questionIndex + 1} from 5 questions</h4>
      </div>

      <h3> {currentQuestion.question}</h3>

      <div className={styles["answers_container"]}>
        <ul>
          <li onClick={(event) => chooseAnwer("a1", event.target)}>
            <strong>A:</strong> {currentQuestion.a1}
          </li>
          <li onClick={(event) => chooseAnwer("a2", event.target)}>
            <strong>B:</strong> {currentQuestion.a2}
          </li>
        </ul>

        <ul>
          <li onClick={(event) => chooseAnwer("a3", event.target)}>
            <strong>C:</strong> {currentQuestion.a3}
          </li>
          <li onClick={(event) => chooseAnwer("a4", event.target)}>
            <strong>D:</strong> {currentQuestion.a4}
          </li>
        </ul>
      </div>

      <div className={styles["questions_buttons"]}>
        <button
          onClick={
            currentQuestion === questions[0] ? goToPreviousPage : prevQuestion
          }
        >
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <button
          onClick={
            currentQuestion === questions[4] ? goToNextPage : nextQuestion
          }
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </article>
  );
}
