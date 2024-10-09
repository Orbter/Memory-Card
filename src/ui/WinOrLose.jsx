import { WinScreen } from '../components/WinLose/winScreen';
import { LoseSCreen } from '../components/WinLose/LoseScreen';
import { useContext } from 'react';
import { GameContext } from '../GameProvider';
import '../style/winOrLose/loseScreen.css';
function WinOrLose({ setGameStart }) {
  const gameMemory = useContext(GameContext);
  const { winGame, setWinGame } = gameMemory;

  return (
    <div className="result">
      {winGame !== null && (
        <>
          <div className="overlay"></div>
          <div className="result-container">
            {winGame === 'win' ? (
              <WinScreen setGameStart={setGameStart} />
            ) : (
              <LoseSCreen setGameStart={setGameStart} />
            )}
          </div>
        </>
      )}
    </div>
  );
}
export { WinOrLose };
