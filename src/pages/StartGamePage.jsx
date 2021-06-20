import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { startGame } from "../store/slices/gameinit";

const StartGamePage = () => {
  const username = useRef("");
  const dispatch = useDispatch();

  const startGameHandle = (e) => {
    e.preventDefault();
    const user_name = username.current.value;
    dispatch(startGame({ user_name }));
  };

  return (
    <div>
      <form onSubmit={startGameHandle}>
        <input type="text" placeholder="ชื่อของคุณ" ref={username} />
        <button type="submit">เริ่มเกม</button>
      </form>
    </div>
  );
};

export default StartGamePage;
