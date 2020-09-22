export default interface IUser {
  id: number;
  avatar_url: string;
  login: string;
  url: string;
  html_url: string;
  followers: number;
  following: number;
  onShowProfile: Function;
  onRemoveItem: Function;
}
