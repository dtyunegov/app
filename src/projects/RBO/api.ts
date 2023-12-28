import axios, { AxiosInstance } from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/';

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL
  });
  return api;
};
