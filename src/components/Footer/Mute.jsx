import mutePhoto from '../../assets/mute.svg';

function Mute() {
  return (
    <div className='action-background'>
      <img className='photo-action' src={mutePhoto}></img>
    </div>
  );
}

export { Mute };
