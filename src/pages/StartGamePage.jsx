import React, { useRef } from "react";
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
    <div className="flex flex-col justify-center items-center mt-52">
      <form onSubmit={startGameHandle}>
        <input
          type="text"
          className="py-3 px-4 outline-none rounded shadow w-80 mb-6"
          placeholder="ชื่อของคุณ"
          ref={_username}
        />
        <div className="flex justify-center">
          <button
            className="bg-purple-500 hover:bg-purple-700 focus:outline-none py-2 px-6 text-white shadow rounded"
            type="submit"
          >
            เริ่มเกม
          </button>
        </div>
      </form>
    </div>
  );
};

export default StartGamePage;
