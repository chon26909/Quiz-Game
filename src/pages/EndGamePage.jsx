import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { restartGame } from "../store/slices/gameinit";

const EndGamePage = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.gameState.username );
  const answers = useSelector((state) => state.quizState.answers);
  const score = useSelector((state) => state.quizState.score);

  const restartHandler = () => {
    dispatch(restartGame());
  };

  return (
    <div className="endgame-page flex flex-col items-center">
      <h2 className="text-3xl text-purple-500 my-4">จบเกม</h2>
      <p className="text-2xl">คุณ {username} ได้ {score} / 10 แต้ม</p>
      <button  className="bg-purple-500 hover:bg-purple-700 focus:outline-none py-2 px-6 my-5 text-white shadow rounded" onClick={restartHandler}>เล่นอีกครั้ง</button>
      <div className="summary-answer">
        {answers.map((answer,index) => {
          return (
            <div className={answer.answer === answer.correctAnswer ? "item-answer correct" : "item-answer  incorrect"} key={index}>
              <p> {index + 1 }. {answer.question}</p>
              <p>คำตอบของคุณ : {answer.answer}</p>
            </div>

          );
        })}
      </div>
    </div>
  );
};

export default EndGamePage;
