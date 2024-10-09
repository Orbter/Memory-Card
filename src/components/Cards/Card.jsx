import { useEffect, useRef, useContext } from 'react';

import '../../style/card.css';
import VanillaTilt from 'vanilla-tilt';
import { GameContext } from '../../GameProvider';
import { gameLogic } from '../../logic/gameLogic';

function Card(characterData) {
  const cardRef = useRef(null);
  const imgSrc = characterData.imgUrl;
  const characterName = characterData.characterName;

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

  const gameFunction = () => {
    gameLogic(gameMemory, characterName);
  };

  return (
    <div
      className="card"
      ref={cardRef}
      data-character-name={characterName}
      onClick={gameFunction}
    >
      <div className="card-image">
        <img src={imgSrc} className="photo-card"></img>
      </div>
    </div>
  );
}

export { Card };
