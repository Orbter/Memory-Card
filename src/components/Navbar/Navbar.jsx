import logo from '../../assets/one-piece-logo.svg';
import '../../style/navbar.css';
import { GameContext } from '../../GameProvider';
import { useContext } from 'react';
function Navbar({ gameStart }) {
  const gameMemory = useContext(GameContext);
  const { score, bestScore } = gameMemory;

  return (
    <div className='navbar'>
      <div className='logo-container'>
        <img className='logo' src={logo} />
      </div>
      {gameStart.started && (
        <div className='all-score-container'>
          <div className='score-container'>
            score <div className='score'>{score}</div>
          </div>
          <div className='best-score-container'>
            best score <div className='best-score'> {bestScore}</div>
          </div>
        </div>
      )}
    </div>
  );
}
export { Navbar };
