import videoLoss from '../../assets/chopper-crying.mp4';
import '../../style/winOrLose/loseScreen.css';
import { playAgain } from '../../logic/playAgain';
import { GameContext } from '../../GameProvider';
import { useContext } from 'react';
function LoseSCreen({ setGameStart }) {
  const gameMemory = useContext(GameContext);

  return (
    <div className="lose-screen-container">
      <video autoPlay muted loop className="lose-video">
        <source src={videoLoss} type="video/mp4"></source>
      </video>
      <div className="lose-screen-text">
        <h2 className="loser-headline">You Lose!</h2>
        <button
          className="play-again-button-lose"
          onClick={() => playAgain(gameMemory, setGameStart)}
        >
          play again
        </button>
      </div>
    </div>
  );
}
export { LoseSCreen };
