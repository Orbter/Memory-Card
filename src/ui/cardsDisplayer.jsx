import { Card } from '../components/Cards/Card';

function CardUi(characters) {
  return (
    <>
      {characters.map((character, index) => (
        <Card imgUrl={character.imgUrl} key={index} />
      ))}
    </>
  );
}
export { CardUi };
