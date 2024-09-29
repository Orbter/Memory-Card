import { getPhotos } from './gettingApi';

async function attachPhotos() {
  const allCharacters = [
    { id: '40', characterName: 'Monkey Luffy D.', imgUrl: null },
    { id: '62', characterName: 'Roronoa Zoro', imgUrl: null },
    { id: '723', characterName: 'Nami', imgUrl: null },
    { id: '724', characterName: 'Usopp', imgUrl: null },
    { id: '305', characterName: 'Sanji', imgUrl: null },
    { id: '309', characterName: 'Tony Tony Chopper', imgUrl: null },
    { id: '61', characterName: 'Nico Robin', imgUrl: null },
    { id: '64', characterName: 'Franky', imgUrl: null },
    { id: '5627', characterName: 'Brook', imgUrl: null },
    { id: '18938', characterName: 'Jinbe', imgUrl: null },
    { id: '727', characterName: 'Shanks', imgUrl: null },
    { id: '2072', characterName: 'Portgas D. Ace', imgUrl: null },
    { id: '13767', characterName: 'Trafalgar D. Water Law', imgUrl: null },
    { id: '2754', characterName: 'Donquixote Doflamingo', imgUrl: null },
    { id: '3331', characterName: 'Marshall D. Teach.', imgUrl: null },
    { id: '46109', characterName: 'Kaido', imgUrl: null },
    { id: '8064', characterName: 'Garp', imgUrl: null },
    { id: '725', characterName: 'Buggy', imgUrl: null },
  ];
  const allCharactersNew = [];
  const listUrl = await getPhotos();

  for (let index = 0; index < 18; index++) {
    const characterList = allCharacters[index];
    const character = listUrl.find(
      (person) => person.character.mal_id === Number(characterList.id)
    );
    if (character) {
      const photo = character.character.images.jpg.image_url;

      characterList.imgUrl = photo;
    } else {
      console.warn(`Character with ID ${characterList.id} not found.`);
    }
    allCharactersNew.push(characterList);
  }

  return allCharactersNew;
}
export { attachPhotos };
