import '../../style/footer.css';
import { Mute } from './mute';
import { PlayGuide } from './play-guide';

function Footer() {
  return (
    <div className='footer-container'>
      <Mute />
      <PlayGuide />
    </div>
  );
}

export { Footer };
