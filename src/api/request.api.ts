import axios from 'axios';

const baseRequest = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});

export default baseRequest;
