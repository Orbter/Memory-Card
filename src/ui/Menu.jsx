import { useEffect, useState } from 'react';

import { DifficultyOptions } from '../components/Cards/DifficultyOptions';
import '../style/menu.css';
import { startGame } from '../logic/startGame';
function MainMenu({ setGameStart, gameStart }) {
  const options = [
    { difficulty: 'Easy', characters: 6 },
    { difficulty: 'Medium', characters: 12 },
    { difficulty: 'Hard', characters: 18 },
  ];
  useEffect(() => {
    if (gameStart.difficultyChosen) {
      console.log(gameStart.difficultyChosen);
      startGame(gameStart, setGameStart);
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
