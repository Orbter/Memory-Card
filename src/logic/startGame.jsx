import { choosingCharacters } from './choosingCharacters';
import { attachPhotos } from '../api/gettingPhotos';
import { GameContext } from '../GameProvider';
async function startGame(gameStart, setGameStart, gameMemory) {
  const charactersChosen = choosingCharacters(6);
  const temporaryList = [];
  const {
    roundCharacters,
    setRoundCharacters,
    onePieceCharacters,
    setOnePieceCharacters,
  } = gameMemory;
  const charactersArray = await onePieceCharacters;

  for (let index = 0; index < 6; index++) {
    const character = charactersArray[charactersChosen[index]];
    temporaryList.push(character);
  }
  setRoundCharacters(temporaryList);
  setGameStart((prevState) => ({
    ...prevState,
    started: true,
  }));
}

export { startGame };
