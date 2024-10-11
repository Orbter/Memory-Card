import { WinScreen } from '../components/WinLose/winScreen';
import { LoseSCreen } from '../components/WinLose/LoseScreen';
import { useContext } from 'react';
import { GameContext } from '../GameProvider';
import '../style/winOrLose/loseScreen.css';
function WinOrLose({ setGameStart }) {
  const gameMemory = useContext(GameContext);
  const { winGame, setWinGame } = gameMemory;

  return (
    <>
      {winGame !== null && (
        <div className='result'>
          <div className='overlay'></div>
          <div className='result-container'>
            {winGame === 'win' ? (
              <WinScreen setGameStart={setGameStart} />
            ) : (
              <LoseSCreen setGameStart={setGameStart} />
            )}
          </div>
        </div>
      )}
    </>
  );
}
export { WinOrLose };
