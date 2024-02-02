import { useState } from "react";
import "./App.css";
import Questions from "./components/Questions";
import WelcomePage from "./components/WelcomePage";
import Results from "./components/Results";
import Ads from "./components/Ads";

function App() {
  const [numCorrectAnswers, setNumCorrectAnswers] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const showPage = () => {
    switch (currentPage) {
      case 1:
        return <WelcomePage />;
      case 2:
        return <Questions setNumCorrectAnswers={setNumCorrectAnswers} />;
      case 3:
        return <Ads />;
      case 4:
        return <Results />;
      default:
        return null;
    }
  };

  const correctAnswers = ["q1", "q2", "q3", "q4", "q5"];

  return (
    <>
      <div className="app">
        <h1>Quiz app</h1>

        <div className="switcher">
          <button
            className="prevbutton"
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
          >
            <i class="fa-solid fa-angle-left"></i>
          </button>
          <button
            className="nextbutton"
            onClick={goToNextPage}
            disabled={currentPage === 4}
          >
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
        {showPage()}
      </div>
    </>
  );
}

export default App;
