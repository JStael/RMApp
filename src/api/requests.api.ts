import {AxiosResponse} from 'axios';
import baseRequest from './request.api';

async function getPokemons(): Promise<AxiosResponse<any>> {
  try {
    return await baseRequest.get();
  } catch {
    throw new Error('Something went wrong');
  }
}

export const RequestApi = {
  getPokemons,
};
