import questions from "../data/page0.json";
import styles from "./Questions.module.css";

export default function Questions() {
  // let question;
  // switch (page) {
  //   case "1":
  //     question = questions.q1;
  //     break;
  //   case "2":
  //     question = questions.q2;
  //     break;
  //   case "3":
  //     question = questions.q3;
  //     break;
  //   case "4":
  //     question = questions.werbung;
  //     break;
  //   case "5":
  //     question = questions.q4;
  //     break;
  //   case "6":
  //     question = questions.q5;
  //     break;
  //   default:
  //     question = page;
  // }

  // const pages = [
  //   { id: "1", page: questions.q1 },
  //   { id: "2", page: questions.q2 },
  //   { id: "3", page: questions.q3 },
  //   { id: "4", page: questions.q4 },
  //   { id: "5", page: questions.q5 },
  // ];

  return (
    <article className={styles["questions_container"]}>
      <div className={styles["progressBar"]}>
        <h4>You have answered 3 from 5 questions</h4>
      </div>

      <h3> {questions.q1.question}</h3>

      <div className={styles["answers_container"]}>
        <ul>
          <li>
            <strong>A:</strong> {questions.q1.a1}
          </li>
          <li>
            <strong>B:</strong> {questions.q1.a2}
          </li>
        </ul>

        <ul>
          <li>
            <strong>C:</strong> {questions.q1.a3}
          </li>
          <li>
            <strong>D:</strong> {questions.q1.a4}
          </li>
        </ul>
      </div>
    </article>
  );
}
