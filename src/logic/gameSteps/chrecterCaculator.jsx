function shuffleCharacters(array) {
  let counter = 6;
  const numbersCantBe = [];
  const newArray = [];
  while (counter !== 0) {
    const number = Math.floor(Math.random() * 6);
    let numberWrong = false;
    for (let index = 0; index < numbersCantBe.length; index++) {
      if (numbersCantBe[index] === number) numberWrong = true;
    }
    if (numberWrong === false) {
      counter--;
      newArray.push(array[number]);
    }
  }
  return newArray;
}

function characterChosen(gameMemory) {
  const { setRoundCharacters, listOfCharactersNotChosen, onePieceCharacters } =
    gameMemory;
  let copyListCharacters = onePieceCharacters;
  const roundCharacters = [];

  const randomNumberGeneratorWinner = () => {
    const number = Math.floor(Math.random() * listOfCharactersNotChosen.length);
    return number;
  };

  const randomNumberGenerator = () => {
    const number = Math.floor(Math.random() * copyListCharacters.length);
    return number;
  };

  const characterToWin = () => {
    const randomNumber = randomNumberGeneratorWinner();
    const characterWin = listOfCharactersNotChosen[randomNumber];
    copyListCharacters = copyListCharacters.filter(
      (person) => person.characterName !== characterWin.characterName
    );
    return { characterWin };
  };

  const firstWinner = characterToWin();
  roundCharacters.push(firstWinner);

  for (let index = 0; index < 5; index++) {
    const number = randomNumberGenerator();
    const character = copyListCharacters[number];
    copyListCharacters = copyListCharacters.filter(
      (person) => person.characterName !== character.characterName
    );
    roundCharacters.push(character);
  }

  const unOrganizeArray = shuffleCharacters(roundCharacters);
  setRoundCharacters(unOrganizeArray);
}
export { characterChosen };
