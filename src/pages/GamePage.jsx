import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { answerQuestion } from "../store/slices/game";
import { finishGame } from "../store/slices/gameinit";

const GamePage = () => {

const [timeleft, settimeleft] = useState(30);

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

  useEffect(() => {
      
    const interval = setInterval(() => {
        settimeleft((prev) => prev - 1 )
    },1000);

      return () => {
          clearInterval(interval);
      }
  }, [])

  return (
    <div>
    <p>Time Left : {timeleft}</p>
      <p>Score : {score}</p>
      <p>{questionIndex + 1} / 10 </p>
      <p>{currentQuestion}</p>
      <button onClick={() => answerHandle('True')}>true</button>
      <button onClick={() => answerHandle('False')}>false</button>
      <button onClick={() => dispatch(finishGame())}>quit</button>
    </div>
  );
};

export default GamePage;
