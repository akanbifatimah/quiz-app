import React from "react";
import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";
import { Questions } from "../helpers/Questions";

const EndScreen = () => {
  const { score, setScore, setGameState, userName } = useContext(
    GameStateContext
  );

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };
  return (
    <div className="EndScreen">
      <h1>You scored</h1>
      <h1>
        {score} / {Questions.length}
      </h1>
      <button onClick={restartQuiz}>Play Again?</button>
    </div>
  );
};

export default EndScreen;
