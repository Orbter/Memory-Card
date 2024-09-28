import { createContext, useState } from 'react';
import { attachPhotos } from './api/gettingPhotos';
export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [onePieceCharacters, setOnePieceCharacters] = useState(attachPhotos());
  const [listOfCharacterActive, setListOfCharacterActive] = useState([]);
  const [chosenCharacters, setChosenCharacters] = useState([]);
  const [score, setScore] = useState([]);
  const [bestScore, setBestScore] = useState([]);
  const [rounds, SetRounds] = useState([]);

  const gameMemory = {
    onePieceCharacters,
    setOnePieceCharacters,
    listOfCharacterActive,
    setListOfCharacterActive,
    chosenCharacters,
    setChosenCharacters,
    score,
    setScore,
    bestScore,
    setBestScore,
    rounds,
    SetRounds,
  };

  return (
    <GameContext.Provider value={gameMemory}>{children}</GameContext.Provider>
  );
};
