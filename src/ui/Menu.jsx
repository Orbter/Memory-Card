import { DifficultyOptions } from '../components/Cards/DifficultyOptions';
import '../style/menu.css';
function MainMenu() {
  const options = [
    { difficulty: 'Easy', characters: 6 },
    { difficulty: 'Medium', characters: 12 },
    { difficulty: 'Hard', characters: 18 },
  ];

  return (
    <div className='menu-container'>
      <h1 className='menu-headline'>Memory Game</h1>
      <div className='option-container'>
        {options.map((option) => (
          <DifficultyOptions text={option.difficulty} key={option.difficulty} />
        ))}
      </div>
    </div>
  );
}

export { MainMenu };
