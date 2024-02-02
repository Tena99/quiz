import styles from "./Results.module.css";

export default function Results() {
  const result = () => {
    const [answers, setAnswers] = useState(["A", "B", "C", "D"]); // beispiel falsch
    const correctAnswers = ["B", "B", "C", "D"]; // beispiel richtig

    const correctCount = answers
      .map((answer, id) => {
        return answer === correctAnswers[id] ? 1 : 0;
      })
      .reduce((b, a) => b + a, 0);

    return (
      <div>
        <h2>Zahl der richtigen Antworten: {correctCount}</h2>
      </div>
    );
  };
  return (
    <div className={styles.results}>
      {result}
      <p></p>
    </div>
  );
}
