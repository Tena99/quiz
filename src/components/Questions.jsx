import questions from "../data/page0.json";

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

  const pages = [
    { id: "1", page: questions.q1 },
    { id: "2", page: questions.q2 },
    { id: "3", page: questions.q3 },
    { id: "4", page: questions.q4 },
    { id: "5", page: questions.q5 },
  ];
  return (
    <div>
      questions <br /> <br />
      {questions.q1.question}
      {questions.q1.a1}
      {questions.q1.a2}
      {questions.q1.a3}
      {questions.q1.a4}
    </div>
  );
}
