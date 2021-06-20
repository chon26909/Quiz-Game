import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { startGame } from "../store/slices/gameinit";

const StartGamePage = () => {
  const _username = useRef("");
  const dispatch = useDispatch();

  const startGameHandle = (e) => {
    e.preventDefault();
    const username = _username.current.value;
    dispatch(startGame({ username }));
  };

  return (
    <div>
      <form onSubmit={startGameHandle}>
        <input type="text" placeholder="ชื่อของคุณ" ref={_username} />
        <button type="submit">เริ่มเกม</button>
      </form>
    </div>
  );
};

export default StartGamePage;

