import React from "react";
import { useSelector } from "react-redux";
import * as stages from "../utils/constants";

//Page
import EndGame from "./EndGamePage";
import StartGame from "./StartGamePage";
import FetchingPage from "./FetchingPage";
import GamePage from "./GamePage";

const MainPage = () => {
  const currentState = useSelector((state) => state.gameState.stage);

  let displayedPage;

  switch (currentState) {
    case stages.START_GAME:
      displayedPage = <StartGame />;
      break;

    case stages.FETCHING_GAME:
      displayedPage = <FetchingPage />;
      break;

    case stages.GAME:
      displayedPage = <GamePage />;
      break;

    case stages.END_GAME:
      displayedPage = <EndGame />;
      break;

    default:
      break;
  }

  return <div className="font-mono bg-purple-50 min-h-screen">
    <h1 className="bg-purple-500 text-center p-4 text-2xl text-white">QUIZ GAME</h1>
    {displayedPage}
    
    </div>;
};

export default MainPage;
