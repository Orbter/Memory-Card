import mutePhoto from '../../assets/mute.svg';
import muteOn from '../../assets/mute-on.svg';
import { useRef, useState, useEffect } from 'react';
import lofiBlinkSake from '../../assets/blink-sake.mp3';
function Mute() {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const handleMute = () => {
    const audio = audioRef.current;
    setIsMuted(!isMuted);
    if (audio) {
      audio.muted = !isMuted;
    }
  };

  const handleVolumeChange = (event) => {
    const audio = audioRef.current;
    const newVol = event.target.value;
    setVolume(newVol);
    if (audio) {
      audio.volume = newVol;
    }
  };

  const startAudio = () => {
    const audio = audioRef.current;
    if (!isPlaying && audio) {
      audio.play().then(() => {
        setIsPlaying(true);
        setIsMuted(false);
      });
    }
  };

  return (
    <>
      {!isMuted && isPlaying && (
        <div className='volume-slider-container'>
          <input
            className='volume-slider'
            type='range'
            min='0'
            max='1'
            step='0.01'
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
      )}
      <div
        className='action-background'
        onClick={isPlaying ? handleMute : startAudio}
      >
        {isMuted ? (
          <img className='photo-action' src={muteOn}></img>
        ) : (
          <img className='photo-action' src={mutePhoto}></img>
        )}
      </div>

      <audio ref={audioRef} loop>
        <source src={lofiBlinkSake} type='audio/mp3'></source>
      </audio>
    </>
  );
}

export { Mute };
