async function playAgain(gameMemory, setGameStart) {
  const {
    setWinGame,
    setScore,
    setRounds,
    setListOfCharactersChosen,
    setRoundCharacters,
    setListOfCharactersNotChosen,
    onePieceCharacters,
    setTotalRounds,
  } = gameMemory;
  setWinGame(null);
  setGameStart({ started: false, difficultyChosen: null });
  setRounds(1);
  setScore(0);
  setTotalRounds(0);
  setListOfCharactersChosen([]);
  setRoundCharacters([]);
  const newListCharacters = await onePieceCharacters;
  setListOfCharactersNotChosen(newListCharacters);
}
export { playAgain };
