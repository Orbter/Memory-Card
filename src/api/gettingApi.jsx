async function getPhotos(id) {
  try {
    const response = await fetch(`https://api.jikan.moe/v4/characters/{${id}}`);
    const data = await response.json();
    const photo = data.data[0].images.jpg.image_url;
    return photo;
  } catch (error) {
    console.error('Error: why the fuck did you do it', error);
  }
}
export { getPhotos };
//https://api.jikan.moe/v4/characters/40
