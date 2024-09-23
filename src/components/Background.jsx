import videoBG from '../assets/one-piece-background.mp4';
import '../style/background.css';
function Background() {
  return (
    <video autoPlay muted loop className='background'>
      <source src={videoBG} type='video/mp4' />
    </video>
  );
}
export default Background;
