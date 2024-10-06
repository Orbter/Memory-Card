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
      numbersCantBe.push(number);
    }
  }
  return newArray;
}

async function characterChosen(gameMemory) {
  const { setRoundCharacters, listOfCharactersNotChosen, onePieceCharacters } =
    gameMemory;
  let copyListCharacters = await onePieceCharacters;
  let copyNotChosen = await listOfCharactersNotChosen;
  const roundCharactersNow = [];
  console.log(copyListCharacters);
  const randomNumberGeneratorWinner = () => {
    const number = Math.floor(Math.random() * copyNotChosen.length);
    return number;
  };

  const randomNumberGenerator = () => {
    const number = Math.floor(Math.random() * copyListCharacters.length);
    return number;
  };

  const characterToWin = () => {
    const randomNumber = randomNumberGeneratorWinner();
    const characterWin = copyNotChosen[randomNumber];
    copyListCharacters = copyListCharacters.filter(
      (person) => person.characterName !== characterWin.characterName
    );
    return { characterWin };
  };

  const firstWinner = characterToWin();
  roundCharactersNow.push(firstWinner.characterWin);

  for (let index = 0; index < 5; index++) {
    const number = randomNumberGenerator();
    const character = copyListCharacters[number];
    copyListCharacters = copyListCharacters.filter(
      (person) => person.characterName !== character.characterName
    );
    roundCharactersNow.push(character);
  }

  const unOrganizeArray = shuffleCharacters(roundCharactersNow);
  setRoundCharacters(unOrganizeArray);
}
export { characterChosen };
