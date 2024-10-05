function markCharacter(gameMemory, charactersChosen) {
  const {
    setListOfCharactersChosen,
    listOfCharactersNotChosen,
    setListOfCharactersNotChosen,
  } = gameMemory;

  const updateListOfCharactersNotChosen = listOfCharactersNotChosen.filter(
    (person) => person.characterName !== charactersChosen,
  );
  const updateListOfCharactersChosen = [];
  updateListOfCharactersChosen.push(charactersChosen);

  setListOfCharactersChosen(updateListOfCharactersChosen);
  setListOfCharactersNotChosen(updateListOfCharactersNotChosen);
}

export { markCharacter };
