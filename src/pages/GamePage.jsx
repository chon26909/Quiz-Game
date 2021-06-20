import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { answerQuestion } from "../store/slices/game";

const GamePage = () => {

  const dispatch = useDispatch();

  const score = useSelector((state) => state.quizState.score);

  const questionIndex = useSelector(
    (state) => state.quizState.currentQuestionIndex
  );

  const currentQuestion = useSelector(
    (state) => state.quizState.questions[questionIndex].question
  );

  const answerHandle = (answer) => {
    dispatch(answerQuestion({answer}))
  };

  return (
    <div>
      <p>Score : {score}</p>
      <p>{questionIndex + 1} / 10 </p>
      <p>{currentQuestion}</p>
      <button onClick={() => answerHandle('True')}>true</button>
      <button onClick={() => answerHandle('False')}>false</button>
    </div>
  );
};

export default GamePage;
