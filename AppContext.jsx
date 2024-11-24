import { useState, createContext } from "react";

const AppContext = createContext();

//Getting Numbers
const getNums = () => {
  const list = [];
  for (let i = 1; i <=18; i++) {
    list.push(i);
    list.push(i);
  }
  return list;
};

const AppContextProvider = ({ children }) => {
  const [state, setState] = useState("init");
  const [nums, setNums] = useState(getNums());

  const getShuffleNums = () => {
    const copyNums = [...nums];
    return copyNums.sort(() => Math.random() - 0.5);
  };

  const value = {
    state,
    setState,
    nums,
    setNums,
    getShuffleNums,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
