function didPlayerLose(gameMemory, characterName) {
  const { listOfCharactersChosen } = gameMemory;
  let playerChooseWrong = false;
  for (let index = 0; index < listOfCharactersChosen.length; index++) {
    const character = listOfCharactersChosen[index];
    if (character === characterName) playerChooseWrong = true;
  }
  return playerChooseWrong;
}

export { didPlayerLose };
