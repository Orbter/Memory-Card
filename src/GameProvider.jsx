import { createContext, useState } from 'react';
import { attachPhotos } from './api/gettingPhotos';
export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [onePieceCharacters, setOnePieceCharacters] = useState(attachPhotos());
  const [listOfCharactersNotChosen, setListOfCharactersNotChosen] = useState(
    [],
  );
  const [listOfCharactersChosen, setListOfCharactersChosen] = useState([]);
  const [roundCharacters, setRoundCharacters] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [rounds, setRounds] = useState(1);

  const gameMemory = {
    onePieceCharacters,
    setOnePieceCharacters,

    listOfCharactersNotChosen,
    setListOfCharactersNotChosen,
    listOfCharactersChosen,
    setListOfCharactersChosen,
    roundCharacters,
    setRoundCharacters,
    score,
    setScore,
    bestScore,
    setBestScore,
    rounds,
    setRounds,
  };

  return (
    <GameContext.Provider value={gameMemory}>{children}</GameContext.Provider>
  );
};
