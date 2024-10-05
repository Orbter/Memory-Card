import { Card } from '../components/Cards/Card';
import { useContext } from 'react';
import { GameContext } from '../GameProvider';
function CardUi() {
  const gameMemory = useContext(GameContext);

  const { roundCharacters, setRoundCharacters } = gameMemory;

  return (
    <>
      {roundCharacters.map((character, index) => (
        <Card
          imgUrl={character.imgUrl}
          characterName={character.characterName}
          key={index}
        />
      ))}
    </>
  );
}
export { CardUi };
