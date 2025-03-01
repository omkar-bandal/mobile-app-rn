import axios from 'axios';

export const BASE_URL = '';

export const createAxiosInstance = () => {
  return axios.create({
    baseURL: BASE_URL,
    headers:{
      'Content-Type': 'application/json',
    },
  });
};
