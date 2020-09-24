import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.github.com/',
});

const { get } = apiClient;
export { get };
