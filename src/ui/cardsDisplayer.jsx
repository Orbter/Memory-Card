import { Card } from '../components/Cards/Card';
import { useContext, useState } from 'react';
import { GameContext } from '../GameProvider';
function CardUi() {
  const gameMemory = useContext(GameContext);
  const [flipped, setFlipped] = useState(false);

  const { roundCharacters, setRoundCharacters } = gameMemory;
  const handleCardClick = () => {
    setFlipped(true);
    setTimeout(() => {
      setFlipped(false);
    }, 1000); // Flip back after 1 second
  };

  return (
    <>
      {roundCharacters.map((character, index) => (
        <Card
          imgUrl={character.imgUrl}
          characterName={character.characterName}
          key={index}
          flipped={flipped}
          onCardClick={handleCardClick}
        />
      ))}
    </>
  );
}
export { CardUi };
