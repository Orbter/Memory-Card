import { useEffect, useState, useContext } from 'react';
import { GameContext } from '../GameProvider';
import { DifficultyOptions } from '../components/Cards/DifficultyOptions';
import '../style/menu.css';
import { startGame } from '../logic/startGame';
function MainMenu({ setGameStart, gameStart }) {
  const options = [
    { difficulty: 'Easy', characters: 6 },
    { difficulty: 'Medium', characters: 12 },
    { difficulty: 'Hard', characters: 18 },
  ];

  const gameMemory = useContext(GameContext);

  useEffect(() => {
    if (gameStart.difficultyChosen) {
      startGame(gameStart, setGameStart, gameMemory);
    }
  }, [gameStart]);

  return (
    <div className='menu-container'>
      <h1 className='menu-headline'>Memory Game</h1>
      <div className='option-container'>
        {options.map((option) => (
          <DifficultyOptions
            option={option}
            setGameStart={setGameStart}
            key={option.difficulty}
          />
        ))}
      </div>
    </div>
  );
}

export { MainMenu };
