function choosingCharacters(number) {
  const charactersChosen = [];
  while (charactersChosen.length !== number) {
    const number = Math.floor(Math.random() * 18);
    if (!charactersChosen.includes(number)) {
      charactersChosen.push(number);
    }
  }
  return charactersChosen;
}

export { choosingCharacters };
