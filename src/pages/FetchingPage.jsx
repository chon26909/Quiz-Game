import React from "react";
import { useDispatch } from "react-redux";
import { cancelGame } from "../store/slices/gameinit";

const FetchingPage = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-center items-center mt-52">
      <div className="w-32 h-32 bg-purple-500 rounded-full flex items-center justify-center mb-12">
        <div className="w-16 h-16 bg-purple-200 rounded-full animate-bounce p-2"></div>
      </div>
      <div>
        <button
          className="text-purple-500 hover:bg-purple-500 hover:text-white focus:outline-none rounded py-2 px-6 text-lg"
          onClick={() => dispatch(cancelGame())}
        >
          ยกเลิก
        </button>
      </div>
    </div>
  );
};

export default FetchingPage;
