import { useEffect, useRef, useContext, useState } from 'react';

import '../../style/card.css';
import VanillaTilt from 'vanilla-tilt';
import { GameContext } from '../../GameProvider';
import { gameLogic } from '../../logic/gameLogic';
import backLogo from '../../assets/skull-logo.jpg';
function Card({ imgUrl, characterName, flipped, onCardClick }) {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current);
    }

    return () => {
      if (cardRef.current?.vanillaTilt) {
        cardRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  const gameMemory = useContext(GameContext);
  const handleClick = () => {
    onCardClick(); // This will flip all cards
    gameFunction(); // Proceed with your game logic
  };
  const gameFunction = () => {
    gameLogic(gameMemory, characterName);
  };

  return (
    <div
      className={`card ${flipped ? 'flipped' : 'not-flipped'}`}
      ref={cardRef}
      data-character-name={characterName}
      onClick={handleClick}
    >
      <div className='card-inner'>
        <div className='card-front'>
          <div className='card-image'>
            <img src={imgUrl} className='photo-card' alt={characterName} />
          </div>
        </div>
        <div className='card-back'>
          <div className='card-image'>
            <img src={backLogo} className='photo-card' alt='Card Back' />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Card };
