import React, { useRef, useState } from "react";
import { connectAdvanced, useDispatch } from "react-redux";
import { startGame } from "../store/slices/gameinit";

const StartGamePage = () => {
  const username = useRef("");
  const dispatch = useDispatch();

  const startGameHandle = () => {
    const user_name = username.current.value;
    console.log(user_name);
    dispatch(startGame({ user_name }));
  };

  return (
    <div>
      <input type="text" placeholder="ชื่อของคุณ" ref={username} />
      <button onClick={startGameHandle}>เริ่มเกม</button>
    </div>
  );
};

export default StartGamePage;
