async function markCharacter(gameMemory, charactersChosen) {
  const {
    setListOfCharactersChosen,
    listOfCharactersNotChosen,
    setListOfCharactersNotChosen,
    listOfCharactersChosen,
  } = gameMemory;
  let copyNotChosen = await listOfCharactersNotChosen;

  const updateListOfCharactersNotChosen = copyNotChosen.filter(
    (person) => person.characterName !== charactersChosen,
  );
  const updateListOfCharactersChosen = listOfCharactersChosen;
  updateListOfCharactersChosen.push(charactersChosen);

  setListOfCharactersChosen(updateListOfCharactersChosen);
  setListOfCharactersNotChosen(updateListOfCharactersNotChosen);
}

export { markCharacter };
