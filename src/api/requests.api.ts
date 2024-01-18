import {AxiosResponse} from 'axios';
import baseRequest from './request.api';

export type CharacterType = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type EpisodeType = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};

type GetCharactersResponse = {
  results: CharacterType[];
};

type GetEpisodeResponse = EpisodeType;

async function getCharacters(): Promise<AxiosResponse<GetCharactersResponse>> {
  try {
    return await baseRequest.get('/character');
  } catch {
    throw new Error('Something went wrong');
  }
}

async function getMultipleCharacters(
  charactersId: string[],
): Promise<AxiosResponse<CharacterType[]>> {
  try {
    return await baseRequest.get(`/character/${[...charactersId]}`);
  } catch {
    throw new Error('Something went wrong');
  }
}

async function getEpisodes(
  episodeNumber: string,
): Promise<AxiosResponse<GetEpisodeResponse>> {
  try {
    return await baseRequest.get(`/episode/${episodeNumber}`);
  } catch {
    throw new Error('Something went wrong');
  }
}

export const RequestApi = {
  getCharacters,
  getEpisodes,
  getMultipleCharacters,
};
