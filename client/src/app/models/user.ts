export interface User {
  _id: string;
  __v: number;
  email: string;
  token: string;
  facebook: {
    id: string,
    name: string,
    profileImage: string,
    location: string,
    gender: string,
  };
  twitter: {
    id: string,
    name: string,
    profileImage: string,
    location: string,
  };
  google: {
    id: string,
    name: string,
    profileImage: string,
    location: string,
    gender: string,
  };
  github: {
    id: string,
    name: string,
    profileImage: string,
    location: string,
  };
}
