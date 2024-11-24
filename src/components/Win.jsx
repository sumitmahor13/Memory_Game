import React, { useContext } from "react";
import { AppContext } from "../../AppContext";

const Win = () => {

  const {setState, setNums, getShuffleNums} = useContext(AppContext);

  const playAgainHandler = () => {
    setNums(getShuffleNums());
    setState('play');
  }

  return (
    <>
      <div>
        <h1>You Win</h1>
        <p>Congratulation you win the game !</p>
        <button onClick={playAgainHandler}>Play Again</button>
      </div>
    </>
  );
};

export default Win;
