import '../../style/footer.css';
import { Mute } from './mute';
import { PlayGuide } from './play-guide';
import { Rounds } from './Round';
function Footer({ gameStart }) {
  return (
    <div className='footer-container'>
      <div className='action-container'>
        <Mute />
        <PlayGuide />
      </div>
      {gameStart && <Rounds />}
    </div>
  );
}

export { Footer };
