import { markCharacter } from './gameSteps/markCharacter';
import { didPlayerLose } from './gameSteps/didPlayerLose';
import { characterChosen } from './gameSteps/chrecterCaculator';
function gameLogic(gameMemory, characterName) {
  const lose = didPlayerLose(gameMemory);
  const { rounds, totalRounds, setRounds } = gameMemory;
  if (lose) {
    console.log('end Screen Pop Up');
  } else if (rounds === totalRounds) {
    console.log('win Screen Pop up');
  } else {
    const currentRounds = rounds + 1;
    setRounds(currentRounds);
    markCharacter(gameMemory, characterName);
    characterChosen(gameMemory);
  }
}

export { gameLogic };
