import { getPhotos } from './gettingApi';

async function attachPhotos() {
  const allCharacters = [
    { id: '40', characterName: 'Monkey Luffy D.', imgUrl: null },
    { id: '62', characterName: 'Roronoa Zoro', imgUrl: null },
    { id: '271', characterName: 'Nami', imgUrl: null },
    { id: '62', characterName: 'Usopp', imgUrl: null },
    { id: '305', characterName: 'Sanji', imgUrl: null },
    { id: '687', characterName: 'Tony Tony Chopper', imgUrl: null },
    { id: '1671', characterName: 'Nico Robin', imgUrl: null },
    { id: '11811', characterName: 'Franky', imgUrl: null },
    { id: '19887', characterName: 'Brook', imgUrl: null },
    { id: '1084', characterName: 'Jinbe', imgUrl: null },
    { id: '1782', characterName: 'Shanks', imgUrl: null },
    { id: '1705', characterName: 'Portgas D. Ace', imgUrl: null },
    { id: '17503', characterName: 'Trafalgar D. Water Law', imgUrl: null },
    { id: '2416', characterName: 'Donquixote Doflamingo', imgUrl: null },
    { id: '47493', characterName: 'Marshall D. Teach.', imgUrl: null },
    { id: '55469', characterName: 'Kaido', imgUrl: null },
    { id: '1641', characterName: 'Garp', imgUrl: null },
    { id: '1039', characterName: 'Buggy', imgUrl: null },
  ];
  const allCharactersNew = [];

  for (let index = 0; index < 17; index++) {
    const character = allCharacters[index];
    const photoUrl = await getPhotos(character.id);
    character.imgUrl = await photoUrl;
    allCharactersNew.push(character);
  }
}
export { attachPhotos };
