import videoWin from '../../assets/luffy-laughing.mp4';
import '../../style/winOrLose/winScreen.css';
import { playAgain } from '../../logic/playAgain';
import { GameContext } from '../../GameProvider';
import { useContext } from 'react';
function WinScreen({ setGameStart }) {
  const gameMemory = useContext(GameContext);
  return (
    <div className="win-screen-container">
      <video autoPlay muted loop className="win-video">
        <source src={videoWin} type="video/mp4"></source>
      </video>
      <div className="win-screen-text">
        <h2 className="winner-headline">You Win!</h2>
        <button
          className="play-again-button-win"
          onClick={() => playAgain(gameMemory, setGameStart)}
        >
          play again
        </button>
      </div>
    </div>
  );
}
export { WinScreen };
