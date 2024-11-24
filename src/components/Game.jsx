import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppContext";

const Game = () => {
  const { setState, nums } = useContext(AppContext);

  const [opened, setOpened] = useState([]);
  const [solvedList, setSolvedList] = useState([]);

  const clickHandler = (num, i) => {
    if (opened.length < 2) {
      return setOpened((prev) => [...prev, i]);
    }
  };

  useEffect(() => {
    if (opened.length === 2) {
      setTimeout(() => {
        const id1 = opened[0];
        const id2 = opened[1];
        if (nums[id1] === nums[id2]) {
          setSolvedList((prev) => [...prev, nums[id1]]);
        }
        setOpened([]);
      }, 1000);
    }
  }, [opened]);

  useEffect(() => {
    if (solvedList.length === 18) {
      setState("win");
    }
  }, [solvedList]);

  const getClassName = (num, i) => {
    if (solvedList.includes(num)) {
      return "remove";
    } else if (opened.includes(i)) {
      return "show";
    } else {
      return "hide";
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="game">
          {nums.map((num, i) => {
            return (
              <div
                key={i}
                id={i}
                onClick={() => clickHandler(num, i)}
                className={`card ${getClassName(num, i)}`}
              >
                {num}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Game;
