async function getPhotos() {
  const response = await fetch(`https://api.jikan.moe/v4/anime/21/characters`);
  const data = await response.json();
  return data.data;
}
export { getPhotos };
