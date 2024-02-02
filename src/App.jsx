// import { useState } from "react";
import "./App.css";
import Questions from "./components/Questions";
import WelcomePage from "./components/WelcomePage";
import Results from "./components/Results";
import Ads from "./components/Ads";
import { useState } from "react";

function App() {
  // const [page, setPage] = useState(0);
  const [numCorrectAnswers, setNumCorrectAnswers] = useState(0);

  // const handleSwitchPage = (newPage) => {
  //   setPage(newPage);
  // };

  return (
    <>
      <div className="app">
        <h1>Quiz app</h1>
        {/* <WelcomePage /> */}
        <Questions setNumCorrectAnswers={setNumCorrectAnswers} />
        {/* <Ads />
        <Results /> */}
      </div>
    </>
  );
}

export default App;
