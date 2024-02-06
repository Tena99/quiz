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

  const resetCounter = () => {
    setNumCorrectAnswers(0);
    setCurrentPage(2);
  };

  const showPage = () => {
    switch (currentPage) {
      case 1:
        return <WelcomePage goToNextPage={goToNextPage} />;
      case 2:
        return (
          <Questions
            onCorrectAnswer={() => {
              setNumCorrectAnswers((prevValue) => prevValue + 1);
            }}
            onGoToPreviousPage={goToPreviousPage}
            onGoToNextPage={goToNextPage}
          />
        );
      case 3:
        return (
          <Ads
            goToPreviousPage={goToPreviousPage}
            goToNextPage={goToNextPage}
          />
        );
      case 4:
        return (
          <Results
            numCorrectAnswers={numCorrectAnswers}
            goToPreviousPage={goToPreviousPage}
            resetCounter={resetCounter}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="app">
        <h1>Quiz app</h1>
        {showPage()}
      </div>
    </>
  );
}

export default App;
