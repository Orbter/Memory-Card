import { markCharacter } from './gameSteps/markCharacter';
import { didPlayerLose } from './gameSteps/didPlayerLose';
import { characterChosen } from './gameSteps/chrecterCaculator';
function gameLogic(gameMemory, characterName) {
  const lose = didPlayerLose(gameMemory, characterName);
  const { rounds, totalRounds, setRounds, setWinGame } = gameMemory;
  if (lose) {
    setWinGame('lose');
  } else if (rounds === totalRounds) {
    setWinGame('win');
  } else {
    const currentRounds = rounds + 1;
    setRounds(currentRounds);
    markCharacter(gameMemory, characterName);
    characterChosen(gameMemory);
  }
}

export { gameLogic };
