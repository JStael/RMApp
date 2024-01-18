export function getCharacterId(character: string) {
  const episodeNumber = character.split('character/')[1];
  return episodeNumber;
}
