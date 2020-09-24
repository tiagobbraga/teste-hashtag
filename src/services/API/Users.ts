import { get } from './base';

export default {
  searchUserByName: (name: string) => get(`users/${name}`),
};
