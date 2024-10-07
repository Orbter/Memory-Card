import videoLoss from '../../assets/chopper-crying.mp4';
import '../../style/winOrLose/loseScreen.css';
function LoseSCreen() {
  return (
    <div className='lose-screen-container'>
      <video autoPlay muted loop className='lose-video'>
        <source src={videoLoss} type='video/mp4'></source>
      </video>
      <div className='lose-screen-text'>
        <h2 className='loser-headline'>You Lose!</h2>
        <button className='play-again-button-lose'>play again</button>
      </div>
    </div>
  );
}
export { LoseSCreen };
