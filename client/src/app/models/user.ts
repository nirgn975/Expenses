export interface User {
  _id: string;
  __v: number;
  email: string;
  token: string;
  name: string;
  profileImage: string;
  location: string;
  gender: string;
  facebookId: string;
  twitterId: string;
  googleId: string;
  githubId: string;
  connectedAccounts: Array<User>;
}
