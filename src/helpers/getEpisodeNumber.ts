export function getEpisodeNumber(episode: string) {
  const episodeNumber = episode.split('episode/')[1];
  return episodeNumber;
}
