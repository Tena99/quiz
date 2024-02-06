import { useState } from "react";
import Select from "react-select";
import "./App.css";
import Questions from "./components/Questions";
import WelcomePage from "./components/WelcomePage";
import Results from "./components/Results";
import Ads from "./components/Ads";
import UserImage1 from "./assets/u1.svg";
import UserImage2 from "./assets/u2.svg";
import UserImage3 from "./assets/u3.svg";
import UserImage4 from "./assets/u4.svg";

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

  const [userName, setUserName] = useState("");
  function userData(userName) {
    console.log(userName);
  }

  const avatar = (num) => {
    switch (num) {
      case 1:
        return <img src={UserImage1} className="userimage" alt="u1" />;
      case 2:
        return <img src={UserImage2} className="userimage" alt="u2" />;
      case 3:
        return <img src={UserImage3} className="userimage" alt="u3" />;
      case 4:
        return <img src={UserImage4} className="userimage" alt="u4" />;
    }
  };
  const avatars = [
    { value: avatar(1), label: "User 1" },
    { value: avatar(2), label: "User 2" },
    { value: avatar(3), label: "User 3" },
    { value: avatar(4), label: "User 4" },
  ];

  const showPage = () => {
    switch (currentPage) {
      case 1:
        return <WelcomePage goToNextPage={goToNextPage} />;
      case 2:
        return (
          <Questions
            setNumCorrectAnswers={setNumCorrectAnswers}
            goToPreviousPage={goToPreviousPage}
            goToNextPage={goToNextPage}
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
        {currentPage === 1 ? (
          <form>
            <label>
              Ihre Name
              <input
                value={userName}
                type="text"
                name="name"
                onChange={(event) => setUserName(event.target.value)}
              />
            </label>
          </form>
        ) : (
          ""
        )}
        {currentPage != 1 ? (
          <div className="user">
            <p>{userName}</p>
          </div>
        ) : (
          ""
        )}
        <Select options={avatars} />
        {showPage()}
      </div>
    </>
  );
}

export default App;
