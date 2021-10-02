import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { answerQuestion } from "../store/slices/game";
import { finishGame } from "../store/slices/gameinit";

const GamePage = () => {
  const [timeleft, settimeleft] = useState(60);

  const dispatch = useDispatch();

  const score = useSelector((state) => state.quizState.score);

  const questionIndex = useSelector(
    (state) => state.quizState.currentQuestionIndex
  );

  const currentQuestion = useSelector(
    (state) => state.quizState.questions[questionIndex].question
  );

  const answerHandle = (answer) => {
    dispatch(answerQuestion({ answer }));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeleft <= 0) {
        clearInterval(interval);
        dispatch(finishGame());
      }
      settimeleft((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex flex-col items-center relative">
      <p className="py-3 text-2xl text-purple-400">เหลือเวลาอีก</p>
      <div className="h-20 w-20 flex justify-center items-center border-8 border-purple-500 rounded-full my-4 text-3xl text-purple-500">
        {timeleft}
      </div>
      <p className="absolute top-3 left-4 text-2xl text-purple-400">
        คะแนน : {score}
      </p>

      <p className="absolute top-3 right-4 text-2xl text-purple-400">
       Question {questionIndex + 1} / 10{" "}
      </p>
      <p className="p-7 m-4 bg-white rounded shadow">{currentQuestion}</p>
      <div className="flex justify-between w-52 mt-3">
        <button
          className="bg-purple-500 hover:bg-purple-700 focus:outline-none py-2 px-6 text-white shadow rounded"
          onClick={() => answerHandle("True")}
        >
          true
        </button>
        <button
          className="bg-purple-500 hover:bg-purple-700 focus:outline-none py-2 px-6 text-white shadow rounded"
          onClick={() => answerHandle("False")}
        >
          false
        </button>
      </div>
      <div className="flex justify-center w-100 mt-10">
        <button
          className="text-base text-purple-400"
          onClick={() => dispatch(finishGame())}
        >
          ออกจากเกม
        </button>
      </div>
    </div>
  );
};

export default GamePage;
