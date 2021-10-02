import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { restartGame } from "../store/slices/gameinit";

const EndGamePage = () => {
  const dispatch = useDispatch();
  const answers = useSelector((state) => state.quizState.answers);
  const score = useSelector((state) => state.quizState.score);

  const restartHandler = () => {
    dispatch(restartGame());
  };

  return (
    <div className="endgame-page">
      <p>Your score {score} / 10</p>
      <button onClick={restartHandler}>Restart Game</button>
      <div className="summary-answer">
        {answers.map((answer,index) => {
          return (
            <div className={answer.answer === answer.correctAnswer ? "item-answer correct" : "item-answer  incorrect"} key={index}>
              <p> {index + 1 } {answer.question}</p>
              <p>
                Your answer : {answer.answer}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EndGamePage;
