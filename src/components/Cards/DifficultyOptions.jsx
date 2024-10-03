function DifficultyOptions({ option, setGameStart }) {
  const handlerGame = () => {
    setGameStart((prevState) => ({
      ...prevState,
      difficultyChosen: option,
    }));
  };

  return (
    <div className='difficulty-option' onClick={handlerGame}>
      <h3 className='option-text'>{option.difficulty}</h3>
    </div>
  );
}
export { DifficultyOptions };
