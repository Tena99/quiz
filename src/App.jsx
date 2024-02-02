import { useState } from "react";
import "./App.css";
import Questions from "./components/Questions";
import WelcomePage from "./components/WelcomePage";
import Results from "./components/Results";
import Ads from "./components/Ads";

function App() {
  const [page, setPage] = useState("welcome");

  const handleSwitchPage = (newPage) => {
    setPage(newPage);
  };

  const showPage = () => {
    switch (page) {
      case "welcome":
        return <WelcomePage />;
      case "questions":
        return <Questions />;
      case "ads":
        return <Ads />;
      case "results":
        return <Results />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="app">
        <h1>Quiz app</h1>
        <div className="switcher">
          <button onClick={() => handleSwitchPage("welcome")}>
            Welcome Page
          </button>
          <button onClick={() => handleSwitchPage("questions")}>
            Questions
          </button>
          <button onClick={() => handleSwitchPage("ads")}>Ads</button>
          <button onClick={() => handleSwitchPage("results")}>Results</button>
        </div>
        {showPage()}
      </div>
    </>
  );
}

export default App;
