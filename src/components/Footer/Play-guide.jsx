/* eslint-disable react/no-unescaped-entities */
import questions from '../../assets/questions.svg';
import { useState } from 'react';
function PlayGuide() {
  const [isHover, setIsHover] = useState(false);
  const changeHover = () => {
    setIsHover(true);
  };
  const cancelHover = () => {
    setIsHover(false);
  };

  return (
    <div
      className={isHover ? 'hoverd' + ' all-guide' : 'all-guide'}
      onMouseEnter={changeHover}
      onMouseLeave={cancelHover}
    >
      {isHover && (
        <div className='guide-container'>
          <div className='mini-guide'>
            <p className='guide-text'>don't pick the same card twice!</p>
          </div>
          <div className='mini-guide'>
            <p className='guide-text'>click the logo to go home</p>
          </div>
        </div>
      )}
      <div className='action-background' onMouseEnter={() => changeHover()}>
        <img className='photo-action' src={questions}></img>
      </div>
    </div>
  );
}

export { PlayGuide };
