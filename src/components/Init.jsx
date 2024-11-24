import React, { useContext } from "react";
import { AppContext } from "../../AppContext";

const Init = () => {
  const { setState, setNums, getShuffleNums } = useContext(AppContext);

  const handleStart = () => {
    setNums(getShuffleNums());
    setState("play");
  };

  return (
    <>
      <div>
        <h1>Memory Game</h1>
        <button onClick={handleStart}>Play Game</button>
      </div>
    </>
  );
};

export default Init;
