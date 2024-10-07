import videoWin from '../../assets/luffy-laughing.mp4';
import '../../style/winOrLose/winScreen.css';
function WinScreen() {
  return (
    <div className='win-screen-container'>
      <video autoPlay muted loop className='win-video'>
        <source src={videoWin} type='video/mp4'></source>
      </video>
      <div className='win-screen-text'>
        <h2 className='winner-headline'>You Win!</h2>
        <button className='play-again-button-win'>play again</button>
      </div>
    </div>
  );
}
export { WinScreen };
