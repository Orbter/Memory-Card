import { useContext } from 'react';

import { choosingCharacters } from './choosingCharacters';
import { attachPhotos } from '../api/gettingPhotos';
import { GameContext } from '../GameProvider';
function startGameEasy() {
  const { gameMemory } = useContext(GameContext);
  const charactersChosen = choosingCharacters(6);
  const temporaryList = [];
  const {
    listOfCharacterActive,
    setListOfCharacterActive,
    onePieceCharacters,
    setOnePieceCharacters,
  } = gameMemory;

  for (let index = 0; index < 6; index++) {
    const character = onePieceCharacters[charactersChosen[index]];
    temporaryList.push(character);
  }
  setListOfCharacterActive(temporaryList);
}
