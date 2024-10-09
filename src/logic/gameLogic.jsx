import { markCharacter } from './gameSteps/markCharacter';
import { didPlayerLose } from './gameSteps/didPlayerLose';
import { characterChosen } from './gameSteps/chrecterCaculator';
function gameLogic(gameMemory, characterName) {
  const lose = didPlayerLose(gameMemory, characterName);
  const {
    rounds,
    totalRounds,
    setRounds,
    setWinGame,
    score,
    setScore,
    bestScore,
    setBestScore,
  } = gameMemory;

  const scoreLogic = () => {
    const newScore = score + 1;
    setScore(newScore);
    if (newScore > bestScore) setBestScore(newScore);
  };

  if (lose) {
    setWinGame('lose');
  } else if (rounds === totalRounds) {
    setWinGame('win');
  } else {
    const currentRounds = rounds + 1;
    setRounds(currentRounds);
    scoreLogic();
    markCharacter(gameMemory, characterName);
    characterChosen(gameMemory);
  }
}

export { gameLogic };
