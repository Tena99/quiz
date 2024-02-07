import { useState } from "react";
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

  const [selectedLabel, setSelectedLabel] = useState("");
  const labels = ["Photo 1", "Photo 2", "Photo 3", "Photo 4"];
  const handleSelectChange = (event) => {
    setSelectedLabel(event.target.value);
  };
  const setAvatar = () => {
    switch (selectedLabel) {
      case "Photo 1":
        return <img src={UserImage1} className="userimage" alt="Photo 1" />;
      case "Photo 2":
        return <img src={UserImage2} className="userimage" alt="Photo 2" />;
      case "Photo 3":
        return <img src={UserImage3} className="userimage" alt="Photo 3" />;
      case "Photo 4":
        return <img src={UserImage4} className="userimage" alt="Photo 4" />;
      default:
        return null;
    }
  };

  // const avatars = [
  //   { value: avatar(1), label: "User 1" },
  //   { value: avatar(2), label: "User 2" },
  //   { value: avatar(3), label: "User 3" },
  //   { value: avatar(4), label: "User 4" },
  // ];

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
        <div className="user">
          {currentPage === 1 ? (
            <div className="userprops">
              <label> Select an avatar:</label>
              <select
                className="minimal"
                value={selectedLabel}
                onChange={handleSelectChange}
              >
                <option value="">Select...</option>
                {labels.map((label) => (
                  <option key={label} value={label}>
                    {label}
                  </option>
                ))}
              </select>
              <form>
                <label htmlFor="name">Ihre Name</label>
                <input
                  id="name"
                  value={userName}
                  type="text"
                  name="name"
                  onChange={(event) => setUserName(event.target.value)}
                />
              </form>
            </div>
          ) : (
            ""
          )}
          {currentPage != 1 ? <p>{userName}</p> : ""} {setAvatar()}
        </div>
        {showPage()}
      </div>
    </>
  );
}

export default App;
